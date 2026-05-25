import { Section, Eyebrow } from "@/components/ui";
import { CLUB_TIERS, CLUB_FEATURES, RISK_SHORT } from "@/lib/config";

export const metadata = {
  title: "Byond Capital Club — Membership",
  description:
    "Join the Byond Capital Club. Community, education, market analysis and indicator access. Membership from €129/month.",
};

// Wire each tier to its Whop URL via env var. Falls back to "#" until configured.
const WHOP_URLS: Record<string, string | undefined> = {
  free: process.env.NEXT_PUBLIC_WHOP_FREE_URL,
  monthly: process.env.NEXT_PUBLIC_WHOP_MONTHLY_URL,
  quarterly: process.env.NEXT_PUBLIC_WHOP_QUARTERLY_URL,
  annual: process.env.NEXT_PUBLIC_WHOP_ANNUAL_URL,
  vip: process.env.NEXT_PUBLIC_WHOP_VIP_URL,
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
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            A community of working traders learning a defined method. Discord
            access, a full education library, ongoing market analysis, and the
            in-house indicators built around our frameworks. Checkout is handled
            securely through Whop.
          </p>
        </Section>
      </div>

      {/* Pricing tiers */}
      <Section className="py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {CLUB_TIERS.map((tier) => {
            const url = WHOP_URLS[tier.id] || "#";
            const ctaDisabled = url === "#";
            return (
              <div
                key={tier.id}
                className={`flex flex-col rounded-xl border p-6 ${
                  tier.featured
                    ? "border-steel bg-navy-700"
                    : "border-white/10 bg-navy-800"
                }`}
              >
                {tier.featured && (
                  <span className="mb-3 self-start rounded-full bg-steel px-3 py-1 text-xs font-600">
                    Best Value
                  </span>
                )}
                <h3 className="font-display text-2xl font-700">{tier.name}</h3>
                <div className="mt-2">
                  <span className="font-display text-3xl font-700 text-steel-light">
                    {tier.price}
                  </span>
                  <span className="text-sm text-white/50"> {tier.cadence}</span>
                </div>
                {tier.cap && (
                  <p className="mt-2 inline-flex items-center gap-2 text-xs font-600 uppercase tracking-wide text-steel-light">
                    <span className="h-1.5 w-1.5 rounded-full bg-steel animate-pulse" />
                    Limited · {tier.cap} seats
                  </p>
                )}
                <p className="mt-4 flex-1 text-sm leading-relaxed text-white/60">
                  {tier.blurb}
                </p>
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
                  {tier.cta}
                </a>
              </div>
            );
          })}
        </div>
        <p className="mt-10 text-center text-xs text-white/40">
          Checkout via Whop. Prices in euros. Cancel monthly or quarterly anytime
          from your Whop account.
        </p>
      </Section>

      {/* What you get */}
      <div className="border-y border-white/10 bg-navy-800">
        <Section className="py-20">
          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
            <div className="md:col-span-1">
              <Eyebrow>Inside the Club</Eyebrow>
              <h2 className="mt-3 font-display text-4xl font-700">
                What you get.
              </h2>
              <p className="mt-4 max-w-md text-white/60">
                Every paid tier includes the full Club experience. Annual is
                better value; VIP adds a monthly group call with the team.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 md:col-span-2">
              {CLUB_FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-white/10 bg-navy-700 p-6"
                >
                  <h3 className="font-display text-lg font-600 text-steel-light">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {f.desc}
                  </p>
                </div>
              ))}
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
