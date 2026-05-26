// Byond Capital — Cloudflare Worker
// Handles /api/lead (ORB Playbook capture → D1) and /api/contact (Resend or D1).
// Bound to api.byondcapital.co (or a workers.dev subdomain).
// D1 binding: env.DB

const ALLOWED_ORIGINS = [
  "https://byondcapital.co",
  "https://www.byondcapital.co",
  // Cloudflare Pages preview wildcard handled in code below
];

function corsHeaders(origin) {
  const allow =
    origin &&
    (ALLOWED_ORIGINS.includes(origin) ||
      /^https:\/\/[a-z0-9-]+\.byond-capital\.pages\.dev$/.test(origin) ||
      /^https:\/\/byond-capital\.pages\.dev$/.test(origin));
  return {
    "Access-Control-Allow-Origin": allow ? origin : "https://byondcapital.co",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders(origin),
    },
  });
}

function getClientMeta(request) {
  return {
    ip: request.headers.get("CF-Connecting-IP") || "",
    user_agent: request.headers.get("User-Agent") || "",
    country: request.cf?.country || "",
  };
}

function escapeCsv(value) {
  if (value === null || value === undefined) return "";
  const s = String(value);
  if (/[",\n\r]/.test(s)) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

async function handleLead(request, env, origin) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request body." }, 400, origin);
  }
  const { email, firstName, whatsapp, instagram, source, hp } = body || {};

  if (hp) return json({ ok: true }, 200, origin); // honeypot

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return json({ error: "A valid email address is required." }, 400, origin);
  }
  if (!firstName || typeof firstName !== "string") {
    return json({ error: "First name is required." }, 400, origin);
  }
  if (!whatsapp || typeof whatsapp !== "string" || whatsapp.length < 6) {
    return json({ error: "A valid WhatsApp number is required." }, 400, origin);
  }
  if (!instagram || typeof instagram !== "string") {
    return json({ error: "Instagram handle is required." }, 400, origin);
  }

  const cleanFirstName = firstName.trim().slice(0, 80);
  const cleanEmail = email.trim().toLowerCase().slice(0, 200);
  const cleanWhatsapp = whatsapp.trim().slice(0, 40);
  const cleanInstagram = instagram.trim().replace(/^@/, "").slice(0, 80);
  const cleanSource = (typeof source === "string" ? source : "orb-playbook")
    .trim()
    .slice(0, 60) || "orb-playbook";

  if (!env.DB) {
    console.error("[lead] D1 binding 'DB' missing");
    return json(
      { error: "Server misconfigured. Please contact support." },
      500,
      origin
    );
  }

  const meta = getClientMeta(request);

  try {
    await env.DB.prepare(
      `INSERT INTO leads (first_name, email, whatsapp, instagram, source, ip, user_agent, country)
       VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)`
    )
      .bind(
        cleanFirstName,
        cleanEmail,
        cleanWhatsapp,
        cleanInstagram,
        cleanSource,
        meta.ip,
        meta.user_agent,
        meta.country
      )
      .run();
  } catch (err) {
    console.error("[lead] D1 insert failed", err);
    return json(
      { error: "We couldn't save your details. Please try again." },
      500,
      origin
    );
  }

  // Return signed-ish download URL (the PDF is public, but we return it
  // explicitly so the client only reveals it after a successful submit).
  return json(
    {
      ok: true,
      download_url: "/downloads/byond-capital-orb-playbook.pdf",
    },
    200,
    origin
  );
}

async function handleContact(request, env, origin) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request body." }, 400, origin);
  }
  const { name, email, message, hp } = body || {};

  if (hp) return json({ ok: true }, 200, origin);

  if (
    !name ||
    !email ||
    !message ||
    typeof email !== "string" ||
    !email.includes("@")
  ) {
    return json(
      { error: "Please fill in your name, a valid email and a message." },
      400,
      origin
    );
  }
  if (message.length > 5000) {
    return json({ error: "Message is too long." }, 400, origin);
  }

  const cleanName = name.trim().slice(0, 120);
  const cleanEmail = email.trim().toLowerCase().slice(0, 200);
  const cleanMessage = message.trim().slice(0, 5000);
  const meta = getClientMeta(request);

  // Always persist to D1
  if (env.DB) {
    try {
      await env.DB.prepare(
        `INSERT INTO contacts (name, email, message, ip, user_agent, country)
         VALUES (?1, ?2, ?3, ?4, ?5, ?6)`
      )
        .bind(
          cleanName,
          cleanEmail,
          cleanMessage,
          meta.ip,
          meta.user_agent,
          meta.country
        )
        .run();
    } catch (err) {
      console.error("[contact] D1 insert failed", err);
      // Don't fail the request just because D1 hiccupped — fall through to email.
    }
  }

  const resendKey = env.RESEND_API_KEY;
  const toEmail = env.CONTACT_TO_EMAIL;
  const fromEmail = env.CONTACT_FROM_EMAIL;
  const webhook = env.CONTACT_WEBHOOK_URL;

  // Path 1: Resend
  if (resendKey && toEmail && fromEmail) {
    try {
      const upstream = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: cleanEmail,
          subject: `New contact form message from ${cleanName}`,
          text: `From: ${cleanName} <${cleanEmail}>\n\n${cleanMessage}`,
        }),
      });
      if (!upstream.ok) {
        console.error("[contact] Resend failed", upstream.status);
        // Already saved to D1, so still report ok.
        return json({ ok: true, emailed: false }, 200, origin);
      }
      return json({ ok: true, emailed: true }, 200, origin);
    } catch (err) {
      console.error("[contact] Resend error", err);
      return json({ ok: true, emailed: false }, 200, origin);
    }
  }

  // Path 2: Webhook
  if (webhook) {
    try {
      const upstream = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          message: cleanMessage,
          submitted_at: new Date().toISOString(),
        }),
      });
      if (!upstream.ok) {
        return json({ ok: true, forwarded: false }, 200, origin);
      }
      return json({ ok: true, forwarded: true }, 200, origin);
    } catch (err) {
      console.error("[contact] Webhook error", err);
      return json({ ok: true, forwarded: false }, 200, origin);
    }
  }

  // No transport but D1 captured — still a success.
  return json({ ok: true, forwarded: false }, 200, origin);
}

// Admin: export leads as CSV. Protected by ADMIN_TOKEN secret.
// Usage: GET /api/admin/leads.csv?token=YOUR_TOKEN
async function handleLeadsExport(request, env, origin) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  if (!env.ADMIN_TOKEN || !token || token !== env.ADMIN_TOKEN) {
    return new Response("Unauthorized", { status: 401 });
  }

  if (!env.DB) {
    return new Response("D1 not configured", { status: 500 });
  }

  try {
    const { results } = await env.DB.prepare(
      `SELECT id, first_name, email, whatsapp, instagram, source, country,
              ip, user_agent, created_at
         FROM leads
         ORDER BY created_at DESC`
    ).all();

    const headers = [
      "id",
      "first_name",
      "email",
      "whatsapp",
      "instagram",
      "source",
      "country",
      "ip",
      "user_agent",
      "created_at",
    ];

    const rows = [headers.join(",")];
    for (const r of results || []) {
      rows.push(headers.map((h) => escapeCsv(r[h])).join(","));
    }

    return new Response(rows.join("\n"), {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="byond-capital-leads-${new Date()
          .toISOString()
          .slice(0, 10)}.csv"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("[admin] export failed", err);
    return new Response("Export failed", { status: 500 });
  }
}

// Admin: quick JSON summary (count + last 10).
async function handleLeadsSummary(request, env, origin) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  if (!env.ADMIN_TOKEN || !token || token !== env.ADMIN_TOKEN) {
    return json({ error: "Unauthorized" }, 401, origin);
  }

  if (!env.DB) {
    return json({ error: "D1 not configured" }, 500, origin);
  }

  try {
    const countRow = await env.DB.prepare(
      `SELECT COUNT(*) as total FROM leads`
    ).first();
    const { results: recent } = await env.DB.prepare(
      `SELECT id, first_name, email, whatsapp, instagram, source, country, created_at
         FROM leads ORDER BY created_at DESC LIMIT 10`
    ).all();
    const { results: bySource } = await env.DB.prepare(
      `SELECT source, COUNT(*) as count FROM leads GROUP BY source ORDER BY count DESC`
    ).all();

    return json(
      {
        ok: true,
        total: countRow?.total ?? 0,
        by_source: bySource || [],
        recent: recent || [],
      },
      200,
      origin
    );
  } catch (err) {
    console.error("[admin] summary failed", err);
    return json({ error: "Summary failed" }, 500, origin);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (url.pathname === "/api/health") {
      return json({ ok: true }, 200, origin);
    }

    if (url.pathname === "/api/lead" && request.method === "POST") {
      return handleLead(request, env, origin);
    }

    if (url.pathname === "/api/contact" && request.method === "POST") {
      return handleContact(request, env, origin);
    }

    if (url.pathname === "/api/admin/leads.csv" && request.method === "GET") {
      return handleLeadsExport(request, env, origin);
    }

    if (url.pathname === "/api/admin/summary" && request.method === "GET") {
      return handleLeadsSummary(request, env, origin);
    }

    return json({ error: "Not found" }, 404, origin);
  },
};
