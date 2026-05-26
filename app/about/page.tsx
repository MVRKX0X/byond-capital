import { Section, Button, Eyebrow } from "@/components/ui";
import { RISK_SHORT } from "@/lib/config";

export const metadata = {
  title: "About — Byond Capital",
  description:
    "The founder story, the trading philosophy, and the proprietary ORB and IBB frameworks behind Byond Capital.",
};

const FRAMEWORKS = [
  {
    short: "ORB",
    name: "Opening Range Breakout",
    desc: "Trade momentum out of the session open. Define the opening range, wait for the break, and execute against a rules-based template with defined risk. Built for the first hour of the futures session, where intent is clearest.",
  },
  {
    short: "IBB",
    name: "Initial Balance Breakout",
    desc: "Read where the market absorbs orders inside the initial balance, then trade the break of that level once absorption is confirmed. A patience-led complement to ORB for the days the open doesn't trend cleanly.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="bg-atmosphere">
        <Section className="py-20 md:py-24">
          <Eyebrow>Byond Capital</Eyebrow>
          <h1 className="mt-4 font-display text-5xl font-700 leading-[0.95] tracking-tight md:text-6xl text-balance">
            Beyond signals. Beyond noise.
            <br />
            <span className="text-steel">Beyond guesswork.</span>
          </h1>
          <div className="mt-7 max-w-3xl space-y-5 text-lg leading-relaxed text-white/75">
            <p>
              Byond Capital is a professional trading-education brand built on
              a simple conviction: most retail traders don&apos;t lose because
              they lack effort &mdash; they lose because they lack structure.
              We exist to fix that.
            </p>
            <p>
              Through our proprietary{" "}
              <span className="text-white">ORB</span> (Opening Range Breakout)
              and <span className="text-white">IBB</span> (Initial Balance
              Breakout) frameworks, we teach traders a clean, rules-based
              approach to the futures market &mdash; defined entries, defined
              risk, and a repeatable daily process. No order blocks, no fair
              value gaps, no recycled ICT theory. Just a method you can
              actually execute.
            </p>
            <p>
              What sets Byond Capital apart is the standard we hold ourselves
              to. We approach retail education with{" "}
              <span className="text-steel-light">institutional discipline</span>{" "}
              &mdash; the kind of structure, accountability, and process
              you&apos;d expect from a desk, made accessible to the
              self-employed trader building a skill around an existing life.
            </p>
            <p>
              Whether you start with our free playbook, join the Club, or step
              into mentorship, the goal is the same: to take you beyond
              signals, beyond noise, and beyond guesswork &mdash; to a way of
              trading you understand and own.
            </p>
          </div>
        </Section>
      </div>

      {/* Founder story */}
      <div className="border-t border-white/10">
        <Section className="py-16 md:py-20">
          <Eyebrow>The Story</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-700 md:text-5xl">
            From the chair to the charts.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            Byond Capital was started by a founder who built a serious business
            in the hair &amp; beauty industry before turning that same operator
            mindset on the markets.
          </p>
        </Section>
      </div>

      <Section className="py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6 text-lg leading-relaxed text-white/75">
            <p>
              The first chapter was a salon &mdash; then a brand, then a team,
              then a network of self-employed professionals across the
              hair &amp; beauty industry. Building it taught one thing above
              all: systems beat talent. The people who win in a craft business
              aren&apos;t the most gifted &mdash; they&apos;re the ones with a
              repeatable daily process.
            </p>
            <p>
              The second chapter was the markets. The same rules applied.
              Strategies that depended on feel didn&apos;t survive contact with
              real risk. The strategies that did survive were boring on paper:
              defined setups, clear invalidation, repeatable execution.
            </p>
            <p>
              Byond Capital is that approach, packaged as an education brand.
              Two proprietary frameworks &mdash; ORB and IBB &mdash; taught in
              plain language, without the acronym soup. A community that
              learns one method properly instead of chasing every new style.
            </p>
            <p>
              The frameworks are deliberately written so a self-employed
              professional &mdash; a stylist, a salon owner, a contractor
              &mdash; can fit them around real work. Trade the open, then get
              on with your day.
            </p>
          </div>

          <aside className="rounded-xl border border-white/10 bg-navy-800 p-7 h-fit">
            <Eyebrow>Principles</Eyebrow>
            <ul className="mt-5 space-y-4 text-white/80">
              {[
                "Education first, never financial advice",
                "Systems beat instinct",
                "One method, taught properly",
                "Plain language, no jargon",
                "Schedule-compatible for working people",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-steel" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      {/* Frameworks */}
      <div className="border-y border-white/10 bg-navy-800">
        <Section className="py-20">
          <Eyebrow>The Method</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-700">
            Two frameworks. One process.
          </h2>
          <p className="mt-4 max-w-2xl text-white/60">
            Built in-house, taught plainly. No order blocks. No fair value
            gaps. No acronym soup.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {FRAMEWORKS.map((f) => (
              <div
                key={f.short}
                className="rounded-xl border border-white/10 bg-navy-700 p-8"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-4xl font-700 text-steel">
                    {f.short}
                  </span>
                  <span className="text-sm uppercase tracking-wider text-white/40">
                    {f.name}
                  </span>
                </div>
                <p className="mt-4 leading-relaxed text-white/70">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/playbook">Read the ORB Playbook</Button>
          </div>
        </Section>
      </div>

      {/* Why trading fits self-employed */}
      <Section className="py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>The Fit</Eyebrow>
            <h2 className="mt-3 font-display text-4xl font-700">
              Built for people with a day job.
            </h2>
            <p className="mt-5 leading-relaxed text-white/70">
              Most members are self-employed &mdash; stylists, salon owners,
              freelancers, founders. The frameworks focus on the session open
              because that&apos;s where the cleanest structure shows up,
              quickly, in a bounded window of time.
            </p>
            <p className="mt-4 leading-relaxed text-white/70">
              Show up for the open. Trade your plan. Close the laptop. Go back
              to your business. That&apos;s the schedule we&apos;re building
              for.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-navy-800 p-8">
            <ul className="space-y-5">
              {[
                ["1–2 hours", "Typical daily screen time on the open"],
                ["Same window", "Sessions land in a predictable daily slot"],
                ["Defined risk", "Every trade has a stop and a target before entry"],
                ["Reviewed weekly", "A repeating loop, not a guessing game"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-start gap-4">
                  <span className="font-display text-2xl font-700 text-steel-light min-w-[6rem]">
                    {k}
                  </span>
                  <span className="text-white/70">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 text-xs text-white/30">{RISK_SHORT}</p>
      </Section>
    </>
  );
}
