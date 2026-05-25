// Byond Capital — Cloudflare Worker
// Handles /api/lead (ManyChat handoff) and /api/contact (Resend or webhook).
// Bound to api.byondcapital.co (or a workers.dev subdomain).

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

async function handleLead(request, env, origin) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request body." }, 400, origin);
  }
  const { email, firstName, source, hp } = body || {};

  if (hp) return json({ ok: true }, 200, origin); // honeypot

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return json({ error: "A valid email address is required." }, 400, origin);
  }

  const webhook = env.MANYCHAT_WEBHOOK_URL;
  if (!webhook) {
    console.warn("[lead] MANYCHAT_WEBHOOK_URL not set");
    return json({ ok: true, forwarded: false }, 200, origin);
  }

  try {
    const upstream = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        first_name: firstName ?? "",
        source: source ?? "website",
        submitted_at: new Date().toISOString(),
      }),
    });
    if (!upstream.ok) {
      console.error("[lead] Webhook failed", upstream.status);
      return json(
        { error: "We couldn't process that. Please try again shortly." },
        502,
        origin
      );
    }
    return json({ ok: true, forwarded: true }, 200, origin);
  } catch (err) {
    console.error("[lead] Webhook error", err);
    return json({ error: "Network error. Please try again." }, 502, origin);
  }
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
          reply_to: email,
          subject: `New contact form message from ${name}`,
          text: `From: ${name} <${email}>\n\n${message}`,
        }),
      });
      if (!upstream.ok) {
        console.error("[contact] Resend failed", upstream.status);
        return json(
          { error: "We couldn't send your message. Please try again." },
          502,
          origin
        );
      }
      return json({ ok: true }, 200, origin);
    } catch (err) {
      console.error("[contact] Resend error", err);
      return json({ error: "Network error. Please try again." }, 502, origin);
    }
  }

  // Path 2: Webhook
  if (webhook) {
    try {
      const upstream = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          submitted_at: new Date().toISOString(),
        }),
      });
      if (!upstream.ok) {
        return json(
          { error: "We couldn't send your message. Please try again." },
          502,
          origin
        );
      }
      return json({ ok: true }, 200, origin);
    } catch (err) {
      console.error("[contact] Webhook error", err);
      return json({ error: "Network error. Please try again." }, 502, origin);
    }
  }

  console.warn("[contact] No transport configured");
  return json({ ok: true, forwarded: false }, 200, origin);
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

    return json({ error: "Not found" }, 404, origin);
  },
};
