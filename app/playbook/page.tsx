"use client";

import { useState } from "react";
import { Section, Eyebrow } from "@/components/ui";
import { RISK_SHORT } from "@/lib/config";
import { apiBase } from "@/lib/api";

export default function PlaybookPage() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [instagram, setInstagram] = useState("");
  const [honeypot, setHoneypot] = useState(""); // spam protection
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );
  const [error, setError] = useState<string>("");

  // Normalise Instagram handle: strip @, URL prefixes, trailing slashes.
  function normaliseInstagram(input: string): string {
    let v = input.trim();
    v = v.replace(/^https?:\/\/(www\.)?instagram\.com\//i, "");
    v = v.replace(/^@/, "");
    v = v.replace(/\/$/, "");
    return v;
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName || !email || !whatsapp || !instagram) {
      setStatus("error");
      setError("Please fill in every field so we can send you the playbook.");
      return;
    }
    setStatus("loading");
    setError("");
    try {
      const res = await fetch(`${apiBase()}/api/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          email: email.trim().toLowerCase(),
          whatsapp: whatsapp.trim(),
          instagram: normaliseInstagram(instagram),
          source: "orb-playbook",
          // Honeypot: real users leave this empty.
          hp: honeypot,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong");
      }
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <div className="bg-atmosphere">
      <Section className="py-24 md:py-28">
        <div className="mx-auto max-w-xl text-center">
          <Eyebrow>Free Download</Eyebrow>
          <h1 className="mt-4 font-display text-5xl font-700 leading-[0.95] tracking-tight text-balance">
            The ORB Playbook.
          </h1>
          <p className="mt-5 text-white/70 leading-relaxed">
            The Opening Range Breakout, written up plainly. The setup, the
            rules, the entries, the stops, the targets — the way we actually
            trade it. Fill in your details and we&apos;ll send the playbook
            straight to you on Instagram, WhatsApp, and email.
          </p>

          {status === "done" ? (
            <div className="mt-10 rounded-lg border border-steel/40 bg-navy-700 p-6 text-left">
              <h2 className="font-display text-xl font-700 text-steel-light">
                You&apos;re in, {firstName}.
              </h2>
              <p className="mt-2 text-sm text-white/70">
                Watch your Instagram DMs, WhatsApp, and inbox — the ORB
                Playbook is on its way to {email} and @{instagram}.
              </p>
              <p className="mt-3 text-xs text-white/50">
                Didn&apos;t hit your inbox? Check spam, or reply to the
                Instagram DM and we&apos;ll resend.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-10 space-y-3 text-left">
              {/* Honeypot */}
              <input
                type="text"
                name="company"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1 block text-xs font-600 uppercase tracking-wide text-white/50">
                    First name
                  </span>
                  <input
                    type="text"
                    required
                    autoComplete="given-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Mark"
                    className="w-full rounded-md border border-white/15 bg-navy-800 px-4 py-3 text-white placeholder-white/30 focus:border-steel focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-600 uppercase tracking-wide text-white/50">
                    Email
                  </span>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full rounded-md border border-white/15 bg-navy-800 px-4 py-3 text-white placeholder-white/30 focus:border-steel focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-600 uppercase tracking-wide text-white/50">
                    WhatsApp number
                  </span>
                  <input
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="+27 82 123 4567"
                    className="w-full rounded-md border border-white/15 bg-navy-800 px-4 py-3 text-white placeholder-white/30 focus:border-steel focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-600 uppercase tracking-wide text-white/50">
                    Instagram handle
                  </span>
                  <input
                    type="text"
                    required
                    autoComplete="username"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    placeholder="@yourhandle"
                    className="w-full rounded-md border border-white/15 bg-navy-800 px-4 py-3 text-white placeholder-white/30 focus:border-steel focus:outline-none"
                  />
                </label>
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-md bg-steel px-6 py-3 font-600 text-white transition-colors hover:bg-steel-dark disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Send me the playbook"}
              </button>
              {status === "error" && (
                <p className="text-sm text-red-300">{error}</p>
              )}
              <p className="text-xs text-white/40">
                By submitting, you agree to receive the ORB Playbook and
                educational content from Byond Capital across Instagram, email,
                and WhatsApp. Unsubscribe anytime.
              </p>
            </form>
          )}

          <p className="mt-12 text-xs text-white/30">{RISK_SHORT}</p>
        </div>
      </Section>
    </div>
  );
}
