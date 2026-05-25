import { Section, Button, Eyebrow } from "@/components/ui";
import { ALPHA, RISK_SHORT, TESTIMONIALS } from "@/lib/config";
import Link from "next/link";

const OFFERS = [
  {
    name: "Free ORB Playbook",
    desc: "Our opening-range breakout method, written up as a free playbook. Start here.",
    href: "/playbook",
    cta: "Get the Playbook",
  },
  {
    name: "Byond Capital Club",
    desc: "Community, education library, market analysis and indicator access. From €129/mo.",
    href: "/club",
    cta: "See Membership",
  },
  {
    name: "Alpha Mentorship",
    desc: `Premium mentorship — ${ALPHA.price} / ${ALPHA.term}. Direct mentor access and live sessions.`,
    href: "/alpha-mentorship",
    cta: "Learn More",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="bg-atmosphere">
        <Section className="py-24 md:py-32">
          <div className="max-w-3xl">
            <Eyebrow>The Trader&apos;s Education Brand</Eyebrow>
            <h1 className="mt-5 font-display text-5xl font-700 leading-[0.95] tracking-tight text-balance md:text-7xl">
              Trade with structure.
              <br />
              <span className="text-steel">Not with guesswork.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Byond Capital teaches the proprietary ORB and RAB frameworks — a
              clean, rules-based approach to trading the futures open. No jargon.
              No noise. Just structure.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/playbook">Get the Free Playbook</Button>
              <Button href="/book" variant="ghost">
                Book a Call
              </Button>
            </div>
          </div>
        </Section>
      </div>

      {/* Trust bar */}
      <div className="border-y border-white/10 bg-navy-800">
        <Section className="flex flex-wrap items-center justify-around gap-8 py-8 text-center">
          {[
            ["Community", "Active members across Discord"],
            ["Frameworks", "Proprietary ORB & RAB methods"],
            ["Approach", "Education-first, structure-led"],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="font-display text-xl font-700 text-steel-light">
                {k}
              </div>
              <div className="text-sm text-white/50">{v}</div>
            </div>
          ))}
        </Section>
      </div>

      {/* Offers */}
      <Section className="py-20">
        <Eyebrow>Where to start</Eyebrow>
        <h2 className="mt-3 font-display text-4xl font-700 md:text-5xl">
          Three ways in.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {OFFERS.map((o) => (
            <div
              key={o.name}
              className="flex flex-col rounded-xl border border-white/10 bg-navy-700 p-7 transition-colors hover:border-steel/50"
            >
              <h3 className="font-display text-2xl font-600">{o.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                {o.desc}
              </p>
              <Link
                href={o.href}
                className="mt-6 text-sm font-600 text-steel-light hover:text-steel"
              >
                {o.cta} →
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Framework teaser */}
      <div className="border-y border-white/10 bg-navy-800">
        <Section className="py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <Eyebrow>The Method</Eyebrow>
              <h2 className="mt-3 font-display text-4xl font-700">ORB &amp; RAB</h2>
              <p className="mt-4 leading-relaxed text-white/70">
                Two frameworks, built in-house. The Opening Range Breakout (ORB)
                trades momentum out of the session open. The Range Absorption
                Breakout (RAB) reads where the range gets defended before it
                breaks. Both are rules-based and teachable — no order blocks, no
                fair value gaps, no acronym soup.
              </p>
              <div className="mt-7">
                <Button href="/about" variant="ghost">
                  How we trade
                </Button>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-navy-600 p-8">
              <p className="text-sm uppercase tracking-wider text-white/40">
                Plain-language, by design
              </p>
              <ul className="mt-5 space-y-4">
                {[
                  "Defined entries, stops and targets",
                  "A repeatable daily process",
                  "Built for the futures open",
                  "Taught, not gatekept",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-steel" />
                    <span className="text-white/80">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </div>

      {/* Testimonials */}
      <Section className="py-20">
        <Eyebrow>What members say</Eyebrow>
        <h2 className="mt-3 font-display text-4xl font-700 md:text-5xl">
          Built around real members.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-xl border border-white/10 bg-navy-800 p-7"
            >
              <svg
                width="24"
                height="20"
                viewBox="0 0 28 22"
                fill="none"
                className="text-steel"
                aria-hidden
              >
                <path
                  d="M0 22V13.5C0 9.7 0.9 6.5 2.8 4C4.7 1.4 7.5 0 11.3 0V4.5C9.4 4.5 7.9 5.1 6.9 6.3C5.9 7.5 5.4 9 5.4 10.8H11.3V22H0ZM16.7 22V13.5C16.7 9.7 17.6 6.5 19.5 4C21.4 1.4 24.2 0 28 0V4.5C26.1 4.5 24.6 5.1 23.6 6.3C22.6 7.5 22.1 9 22.1 10.8H28V22H16.7Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="mt-4 flex-1 text-white/80 leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 text-sm font-600 text-steel-light">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/results"
            className="text-sm font-600 text-steel-light hover:text-steel"
          >
            Read more results →
          </Link>
        </div>
      </Section>

      {/* Lead capture */}
      <Section className="py-20">
        <div className="rounded-2xl border border-steel/30 bg-gradient-to-br from-navy-700 to-navy-800 p-10 text-center md:p-14">
          <h2 className="font-display text-4xl font-700 md:text-5xl text-balance">
            Get the ORB Playbook free.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/60">
            Drop your email and we&apos;ll send the playbook straight over. No
            spam — just the method.
          </p>
          <div className="mt-8">
            <Button href="/playbook">Get the Playbook</Button>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-xs text-white/30">
            {RISK_SHORT}
          </p>
        </div>
      </Section>
    </>
  );
}
