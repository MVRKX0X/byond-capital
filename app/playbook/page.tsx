"use client";

import { useState } from "react";
import { Section, Eyebrow } from "@/components/ui";
import { RISK_SHORT } from "@/lib/config";
import { apiBase } from "@/lib/api";

export default function PlaybookPage() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [honeypot, setHoneypot] = useState(""); // spam protection
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );
  const [error, setError] = useState<string>("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setError("");
    try {
      const res = await fetch(`${apiBase()}/api/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName,
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
            trade it. Drop your email and we&apos;ll send it straight over.
          </p>

          {status === "done" ? (
            <div className="mt-10 rounded-lg border border-steel/40 bg-navy-700 p-6 text-left">
              <h2 className="font-display text-xl font-700 text-steel-light">
                Check your inbox.
              </h2>
              <p className="mt-2 text-sm text-white/70">
                The playbook is on its way to {email}. If you don&apos;t see it
                in a few minutes, check your spam folder.
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
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name (optional)"
                  className="rounded-md border border-white/15 bg-navy-800 px-4 py-3 text-white placeholder-white/30 focus:border-steel focus:outline-none"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="rounded-md border border-white/15 bg-navy-800 px-4 py-3 text-white placeholder-white/30 focus:border-steel focus:outline-none"
                />
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
                By submitting, you agree to receive educational content from
                Byond Capital. Unsubscribe anytime.
              </p>
            </form>
          )}

          <p className="mt-12 text-xs text-white/30">{RISK_SHORT}</p>
        </div>
      </Section>
    </div>
  );
}
