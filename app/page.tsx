import { Section, Button, Eyebrow } from "@/components/ui";
import { RISK_SHORT, TESTIMONIALS } from "@/lib/config";
import Link from "next/link";

const OFFERS = [
  {
    name: "Byond Capital Club",
    desc: "Community, education, market analysis and indicators. From €179.99/mo. Quarterly tier includes the live Mentorship.",
    href: "/club",
    cta: "See Membership",
  },
  {
    name: "Mentorship",
    desc: "Live trading sessions coached by Mark, plus the full course. Included with the Quarterly Club tier (€499).",
    href: "/mentorship",
    cta: "See Mentorship",
  },
  {
    name: "Alpha (1:1)",
    desc: "Mentorship plus weekly 1:1 calls with Mark. Direct access, application-only.",
    href: "/alpha",
    cta: "Apply for Alpha",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — the eye-catcher */}
      <div className="bg-atmosphere relative overflow-hidden">
        {/* Subtle radial accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at 70% 30%, rgba(74,128,196,0.18), transparent 55%)",
          }}
        />
        <Section className="relative py-28 md:py-40">
          <div className="max-w-4xl">
            <Eyebrow>The Trader&apos;s Education Brand</Eyebrow>
            <h1 className="mt-6 font-display text-6xl font-700 leading-[0.95] tracking-tight text-balance md:text-8xl">
              Trade with structure.
              <br />
              <span className="text-steel">Not with guesswork.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
              Institutional discipline. Retail price. A method you can actually
              execute.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/playbook">Get the Free Playbook</Button>
              <Button href="/club" variant="ghost">
                See the Club
              </Button>
            </div>
          </div>
        </Section>
      </div>

      {/* About Byond Capital — descriptive section right below hero */}
      <Section className="py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:items-start md:gap-16">
          <div>
            <Eyebrow>About Byond Capital</Eyebrow>
            <h2 className="mt-3 font-display text-4xl font-700 leading-tight md:text-5xl">
              Beyond signals.
              <br />
              Beyond noise.
              <br />
              <span className="text-steel">Beyond guesswork.</span>
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-white/75">
            <p>
              Byond Capital is a professional trading-education brand built on a
              simple conviction: most retail traders don&apos;t lose because
              they lack effort — they lose because they lack structure. We
              exist to fix that.
            </p>
            <p>
              Through our proprietary{" "}
              <span className="text-white">ORB</span> (Opening Range Breakout)
              and <span className="text-white">IBB</span> (Initial Balance
              Breakout) frameworks, we teach traders a clean, rules-based
              approach to NQ &amp; MNQ futures — defined entries, defined risk,
              and a repeatable daily process. No order blocks, no fair value
              gaps, no recycled ICT theory. Just a method you can actually
              execute.
            </p>
            <p>
              We approach retail education with{" "}
              <span className="text-steel-light">institutional discipline</span>{" "}
              — the kind of structure, accountability, and process you&apos;d
              expect from a desk, made accessible to the self-employed trader
              building a skill around an existing life.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-600 text-steel-light hover:text-steel"
              >
                Read more about us
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Trust bar */}
      <div className="border-y border-white/10 bg-navy-800">
        <Section className="flex flex-wrap items-center justify-around gap-8 py-8 text-center">
          {[
            ["Community", "Active members across Discord"],
            ["Frameworks", "Proprietary ORB & IBB methods"],
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
              <h2 className="mt-3 font-display text-4xl font-700">ORB &amp; IBB</h2>
              <p className="mt-4 leading-relaxed text-white/70">
                Two frameworks, built in-house, traded live on NQ &amp; MNQ
                futures. The Opening Range Breakout (ORB) trades momentum out
                of the session open. The Initial Balance Breakout (IBB) reads
                where the market absorbs orders before expanding. Both are
                rules-based and teachable — no order blocks, no fair value gaps,
                no recycled ICT theory.
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
