import Link from "next/link";
import { Section, Eyebrow } from "@/components/ui";
import { CLUB_TIERS, RISK_SHORT, SITE } from "@/lib/config";

export const metadata = {
  title: "Byond Capital Club — Membership",
  description:
    "Join the Byond Capital Club. Community, education, market analysis and the live Mentorship. From €179.99/month.",
};

export default function ClubPage() {
  return (
    <>
      <div className="bg-atmosphere">
        <Section className="py-20 md:py-24">
          <Eyebrow>Membership</Eyebrow>
          <h1 className="mt-4 font-display text-5xl font-700 leading-[0.95] tracking-tight md:text-6xl text-balance">
            The Byond Capital Club
          </h1>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-white/75">
            <p>
              The Byond Capital Club is where the method comes to life. It&apos;s
              a working community of traders learning, executing, and reviewing
              the same frameworks together &mdash; backed by a full education
              library, ongoing market analysis, and access to our custom
              indicators. This isn&apos;t a signals group you follow blindly;
              it&apos;s an environment built to make you a better, more
              independent trader.
            </p>
            <p>
              Inside, you get structured education on the ORB and RAB
              frameworks, regular breakdowns of live market conditions, and a
              community of people walking the same path &mdash; all organised
              so you always know what to study, what to watch, and what to work
              on next. Membership scales with your commitment, from a free
              entry tier through to{" "}
              <Link
                href="/mentorship"
                className="text-steel-light underline-offset-4 hover:underline"
              >
                Quarterly with live Mentorship
              </Link>
              . Institutional-grade structure at a retail price.
            </p>
          </div>
          <p className="mt-4 text-xs text-white/40">
            {SITE.poweredByNoTilt}.
          </p>
        </Section>
      </div>

      {/* Pricing tiers — 3 columns */}
      <Section className="py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {CLUB_TIERS.map((tier) => {
            const url = tier.url || "#";
            const ctaDisabled = !tier.url;
            return (
              <div
                key={tier.id}
                className={`flex flex-col rounded-xl border p-6 ${
                  tier.featured
                    ? "border-steel bg-navy-700 ring-1 ring-steel/40"
                    : "border-white/10 bg-navy-800"
                }`}
              >
                {tier.featured && tier.badge && (
                  <span className="mb-3 self-start rounded-full bg-steel px-3 py-1 text-xs font-600">
                    {tier.badge}
                  </span>
                )}
                <h3 className="font-display text-2xl font-700">{tier.name}</h3>
                <div className="mt-2">
                  <span className="font-display text-3xl font-700 text-steel-light">
                    {tier.price}
                  </span>
                  <span className="text-sm text-white/50"> {tier.cadence}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {tier.blurb}
                </p>
                {tier.features && (
                  <ul className="mt-5 space-y-2 text-sm text-white/70">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-steel" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <a
                  href={url}
                  target={ctaDisabled ? undefined : "_blank"}
                  rel={ctaDisabled ? undefined : "noopener noreferrer"}
                  aria-disabled={ctaDisabled}
                  className={`mt-6 rounded-md py-2.5 text-center text-sm font-600 transition-colors ${
                    tier.featured
                      ? "bg-steel text-white hover:bg-steel-dark"
                      : "border border-white/20 hover:border-steel hover:text-steel-light"
                  } ${ctaDisabled ? "opacity-60 cursor-not-allowed" : ""}`}
                >
                  {ctaDisabled ? "Coming soon" : tier.cta}
                </a>
              </div>
            );
          })}
        </div>
        <p className="mt-10 text-center text-xs text-white/40">
          Checkout {SITE.poweredByNoTilt.toLowerCase()}. Prices in euros. Cancel
          Monthly or Quarterly anytime from your account.
        </p>
      </Section>

      {/* Looking for more 1:1? */}
      <div className="border-y border-white/10 bg-navy-800">
        <Section className="py-16">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <Eyebrow>Looking for more direct access?</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-700 md:text-4xl">
                Alpha — application-only 1:1 mentorship.
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Everything in the Mentorship — plus a weekly private call with
                Mark. Direct access between sessions. Built for traders ready to
                go deeper than the Club.
              </p>
            </div>
            <div className="flex justify-start md:justify-end">
              <Link
                href="/alpha"
                className="inline-flex items-center gap-2 rounded-md border border-steel bg-steel/10 px-5 py-3 text-sm font-600 text-steel-light transition-colors hover:bg-steel/20"
              >
                Learn about Alpha
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Section>
      </div>

      <Section className="py-12">
        <p className="text-center text-xs text-white/30">{RISK_SHORT}</p>
      </Section>
    </>
  );
}
