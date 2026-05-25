import Link from "next/link";
import { Section, Eyebrow } from "@/components/ui";
import { MENTORSHIP, RISK_SHORT, SITE, CLUB_TIERS } from "@/lib/config";

export const metadata = {
  title: "Mentorship — Byond Capital",
  description:
    "Live trading sessions coached personally by Mark, plus the full Byond Capital course library. Included with the Quarterly Club tier (€499).",
};

const QUARTERLY_URL = CLUB_TIERS.find((t) => t.id === "quarterly")?.url || "";

export default function MentorshipPage() {
  const url = QUARTERLY_URL || "#";
  const ctaDisabled = !QUARTERLY_URL;

  return (
    <>
      {/* Hero */}
      <div className="bg-atmosphere">
        <Section className="py-20 md:py-24">
          <Eyebrow>Mentorship</Eyebrow>
          <h1 className="mt-4 font-display text-5xl font-700 leading-[0.95] tracking-tight md:text-6xl text-balance">
            Live sessions, coached by Mark.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            {MENTORSHIP.summary}
          </p>
          <p className="mt-2 max-w-2xl text-sm text-white/50">
            Included with the{" "}
            <Link
              href="/club"
              className="text-steel-light underline-offset-4 hover:underline"
            >
              Quarterly Club tier (€499)
            </Link>{" "}
            — no separate signup.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={url}
              target={ctaDisabled ? undefined : "_blank"}
              rel={ctaDisabled ? undefined : "noopener noreferrer"}
              aria-disabled={ctaDisabled}
              className={`rounded-md px-5 py-3 text-sm font-600 transition-colors ${
                ctaDisabled
                  ? "bg-steel/40 text-white/70 cursor-not-allowed"
                  : "bg-steel text-white hover:bg-steel-dark"
              }`}
            >
              {ctaDisabled ? "Coming soon" : "Join via Quarterly"}
            </a>
            <Link
              href="/alpha"
              className="rounded-md border border-white/20 px-5 py-3 text-sm font-600 transition-colors hover:border-steel hover:text-steel-light"
            >
              Want 1:1 access? See Alpha
            </Link>
          </div>
          <p className="mt-3 text-xs text-white/40">
            {SITE.poweredByNoTilt}.
          </p>
        </Section>
      </div>

      {/* What's included */}
      <Section className="py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <Eyebrow>What's included</Eyebrow>
            <h2 className="mt-3 font-display text-4xl font-700">
              Everything you need to trade the open with structure.
            </h2>
            <p className="mt-4 max-w-md text-white/60">
              Mentorship is the day-to-day coaching layer of the Club — live
              sessions, course access, and a community holding the same line.
            </p>
          </div>
          <ul className="grid gap-4">
            {MENTORSHIP.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-navy-800 p-5"
              >
                <span
                  aria-hidden
                  className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-steel"
                />
                <span className="text-sm leading-relaxed text-white/80">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* How sessions run */}
      <div className="border-y border-white/10 bg-navy-800">
        <Section className="py-16">
          <Eyebrow>How sessions run</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-700 md:text-4xl">
            Live, structured, and built around the open.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-navy-700 p-6">
              <p className="font-display text-sm font-600 uppercase tracking-wide text-steel-light">
                Pre-market
              </p>
              <h3 className="mt-2 font-display text-xl font-700">
                Read the levels
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Walk into the session with a defined plan — bias, levels, and
                the setups we're hunting that morning.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-navy-700 p-6">
              <p className="font-display text-sm font-600 uppercase tracking-wide text-steel-light">
                The open
              </p>
              <h3 className="mt-2 font-display text-xl font-700">
                Coached live
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Mark walks the first hour with you — calling structure,
                discussing entries, and showing the framework in real time.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-navy-700 p-6">
              <p className="font-display text-sm font-600 uppercase tracking-wide text-steel-light">
                Review
              </p>
              <h3 className="mt-2 font-display text-xl font-700">
                Lock in learnings
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Post-session breakdowns of what worked, what didn't, and where
                the playbook held — so the next session is sharper.
              </p>
            </div>
          </div>
        </Section>
      </div>

      {/* Final CTA */}
      <Section className="py-20">
        <div className="rounded-2xl border border-steel/40 bg-navy-800 p-8 text-center md:p-12">
          <h2 className="font-display text-3xl font-700 md:text-4xl">
            Ready to trade with a coach in the room?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Mentorship is included with the Quarterly Club tier. One price.
            Everything in. No upsell maze.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={url}
              target={ctaDisabled ? undefined : "_blank"}
              rel={ctaDisabled ? undefined : "noopener noreferrer"}
              aria-disabled={ctaDisabled}
              className={`rounded-md px-5 py-3 text-sm font-600 transition-colors ${
                ctaDisabled
                  ? "bg-steel/40 text-white/70 cursor-not-allowed"
                  : "bg-steel text-white hover:bg-steel-dark"
              }`}
            >
              {ctaDisabled ? "Coming soon" : "Join Quarterly — €499"}
            </a>
            <Link
              href="/club"
              className="rounded-md border border-white/20 px-5 py-3 text-sm font-600 transition-colors hover:border-steel hover:text-steel-light"
            >
              Compare Club tiers
            </Link>
          </div>
        </div>
      </Section>

      <Section className="py-8">
        <p className="text-center text-xs text-white/30">{RISK_SHORT}</p>
      </Section>
    </>
  );
}
