import Link from "next/link";
import { Section, Eyebrow } from "@/components/ui";
import { ALPHA, RISK_SHORT, SITE } from "@/lib/config";

export const metadata = {
  title: "Alpha — Application-only mentorship — Byond Capital",
  description:
    "Alpha is everything in the Mentorship plus weekly 1:1 private calls with Mark. Direct access, application-only. Book a discovery call to see if it's a fit.",
};

export default function AlphaPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-atmosphere">
        <Section className="py-20 md:py-24">
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow>Alpha</Eyebrow>
            <span className="inline-flex items-center gap-2 rounded-full border border-steel/50 bg-steel/10 px-3 py-1 text-xs font-600 uppercase tracking-wide text-steel-light">
              <span className="h-1.5 w-1.5 rounded-full bg-steel animate-pulse" />
              Application-only
            </span>
          </div>
          <h1 className="mt-4 font-display text-5xl font-700 leading-[0.95] tracking-tight md:text-6xl text-balance">
            Direct access. Weekly 1:1 with Mark.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            {ALPHA.summary}
          </p>
          <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-white/70">
            {ALPHA.longDescription.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-end gap-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-white/40">Investment</p>
              <p className="mt-1 font-display text-4xl font-700 leading-none text-white md:text-5xl">
                {ALPHA.price}
              </p>
              <p className="mt-2 text-xs text-white/50">{ALPHA.priceCadence}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/book"
                className="rounded-md bg-steel px-5 py-3 text-sm font-600 text-white transition-colors hover:bg-steel-dark"
              >
                {ALPHA.cta}
              </Link>
              <Link
                href="/mentorship"
                className="rounded-md border border-white/20 px-5 py-3 text-sm font-600 transition-colors hover:border-steel hover:text-steel-light"
              >
                See Mentorship
              </Link>
            </div>
          </div>
          <p className="mt-3 text-xs text-white/40">
            {ALPHA.ctaNote}
          </p>
        </Section>
      </div>

      {/* What you'll achieve */}
      <Section className="py-20">
        <Eyebrow>What you'll achieve</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-700 md:text-4xl">
          Outcomes — not promises.
        </h2>
        <p className="mt-4 max-w-2xl text-white/60">
          Alpha is structured around real, measurable outcomes you build over the engagement. Nothing here is guaranteed — markets aren't — but these are the targets we work toward together.
        </p>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {ALPHA.achievements.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-navy-800 p-5"
            >
              <span aria-hidden className="mt-1 text-steel-light">→</span>
              <span className="text-sm leading-relaxed text-white/80">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Direct access — 1:1 detail */}
      <div className="border-y border-white/10 bg-navy-800">
        <Section className="py-20">
          <Eyebrow>The direct line</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-700 md:text-4xl">
            What "1-on-1" actually means.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {ALPHA.oneOnOneDetail.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-steel/30 bg-navy-700 p-6"
              >
                <h3 className="font-display text-xl font-700 text-steel-light">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* What's included */}
      <Section className="py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <Eyebrow>What's included</Eyebrow>
            <h2 className="mt-3 font-display text-4xl font-700">
              Mentorship — plus a direct line.
            </h2>
            <p className="mt-4 max-w-md text-white/60">
              Alpha is built for traders who want personal coaching, not just
              group sessions. You get every Mentorship benefit, plus weekly 1:1
              calls and direct access between them.
            </p>
          </div>
          <ul className="grid gap-4">
            {ALPHA.includes.map((item, i) => (
              <li
                key={item}
                className={`flex items-start gap-3 rounded-xl border p-5 ${
                  i === 1
                    ? "border-steel/50 bg-steel/5"
                    : "border-white/10 bg-navy-800"
                }`}
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

      {/* Who it's for / not for */}
      <div className="border-y border-white/10 bg-navy-800">
        <Section className="py-16">
          <Eyebrow>Be honest with yourself</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-700 md:text-4xl">
            Is Alpha a fit?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-steel/40 bg-navy-700 p-6">
              <h3 className="font-display text-lg font-600 text-steel-light">
                Alpha is for you if…
              </h3>
              <ul className="mt-4 space-y-3">
                {ALPHA.forYou.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/80"
                  >
                    <span aria-hidden className="mt-1 text-steel-light">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-navy-700 p-6">
              <h3 className="font-display text-lg font-600 text-white/80">
                Alpha is not for you if…
              </h3>
              <ul className="mt-4 space-y-3">
                {ALPHA.notForYou.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/60"
                  >
                    <span aria-hidden className="mt-1 text-white/40">
                      ×
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </div>

      {/* How application works */}
      <Section className="py-20">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-700 md:text-4xl">
          Application, then a conversation.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Book a discovery call",
              d: "Pick a time on Calendly. Free, 20–30 minutes, no pressure.",
            },
            {
              n: "02",
              t: "Talk it through",
              d: "We discuss your trading background, goals, and whether Alpha is the right move right now.",
            },
            {
              n: "03",
              t: "Decide together",
              d: "If it's a fit, we onboard you. If not, you'll leave with a clear next step — usually the Club or Mentorship.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="rounded-xl border border-white/10 bg-navy-800 p-6"
            >
              <p className="font-display text-2xl font-700 text-steel-light">
                {s.n}
              </p>
              <h3 className="mt-3 font-display text-xl font-700">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <div className="border-t border-white/10 bg-navy-800">
        <Section className="py-16">
          <div className="rounded-2xl border border-steel/40 bg-navy-700 p-8 text-center md:p-12">
            <h2 className="font-display text-3xl font-700 md:text-4xl">
              Ready for direct access?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              If you're serious about taking this from hobby to craft, book a
              discovery call. We'll see if Alpha is the right move.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/book"
                className="rounded-md bg-steel px-5 py-3 text-sm font-600 text-white transition-colors hover:bg-steel-dark"
              >
                Book a discovery call
              </Link>
              <Link
                href="/club"
                className="rounded-md border border-white/20 px-5 py-3 text-sm font-600 transition-colors hover:border-steel hover:text-steel-light"
              >
                Not yet — see Club
              </Link>
            </div>
            <p className="mt-4 text-xs text-white/40">
              {SITE.poweredByNoTilt}.
            </p>
          </div>
        </Section>
      </div>

      <Section className="py-8">
        <p className="text-center text-xs text-white/30">{RISK_SHORT}</p>
      </Section>
    </>
  );
}
