import Link from "next/link";
import { Section, Eyebrow } from "@/components/ui";
import {
  MENTORSHIP,
  RISK_SHORT,
  SITE,
  CLUB_TIERS,
  SESSION_SCHEDULE,
  METHOD,
} from "@/lib/config";

export const metadata = {
  title: "Mentorship — Byond Capital",
  description:
    "Master the ORB & IBB frameworks. Trade live across London and New York sessions. Full course, community, and 1-on-1 onboarding included.",
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

      {/* The method */}
      <div className="border-y border-white/10 bg-navy-800">
        <Section className="py-16">
          <Eyebrow>{METHOD.headline}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-700 md:text-4xl">
            Two frameworks. One repeatable process.
          </h2>
          <p className="mt-4 max-w-2xl text-white/60">
            {METHOD.antiPositioning}
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {METHOD.frameworks.map((f) => (
              <div
                key={f.code}
                className="rounded-xl border border-white/10 bg-navy-700 p-7"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-4xl font-700 text-steel">
                    {f.code}
                  </span>
                  <span className="text-sm uppercase tracking-wider text-white/40">
                    {f.name}
                  </span>
                </div>
                <p className="mt-4 leading-relaxed text-white/70">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Live session schedule */}
      <Section className="py-16">
        <Eyebrow>{SESSION_SCHEDULE.headline}</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-700 md:text-4xl">
          Two sessions a day. Catch whichever fits.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SESSION_SCHEDULE.sessions.map((s) => (
            <div
              key={s.name}
              className="rounded-xl border border-steel/30 bg-navy-800 p-7"
            >
              <p className="font-display text-sm font-600 uppercase tracking-wide text-steel-light">
                {s.name}
              </p>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="font-display text-5xl font-700 tracking-tight">
                  {s.time}
                </span>
                <span className="text-sm uppercase tracking-wider text-white/50">
                  {s.timezone}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="text-sm text-white/70">{s.days}</span>
                <span className="rounded-md bg-red-500/15 px-2 py-1 text-xs font-600 text-red-300">
                  {s.note}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {SESSION_SCHEDULE.scheduleAdvantages.map((a) => (
            <div
              key={a.title}
              className="rounded-xl border border-white/10 bg-navy-800 p-6"
            >
              <h3 className="font-display text-lg font-700">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

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
