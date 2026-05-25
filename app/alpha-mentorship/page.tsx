import { Section, Button, Eyebrow } from "@/components/ui";
import { ALPHA, RISK_SHORT, TESTIMONIALS } from "@/lib/config";

export const metadata = {
  title: "Alpha Mentorship Program — Byond Capital",
  description: `Premium trading mentorship. ${ALPHA.price} for ${ALPHA.term}. Direct mentor access, live sessions, and the ORB & RAB frameworks.`,
};

const ALPHA_TESTIMONIALS = TESTIMONIALS.filter((t) =>
  t.name.toLowerCase().includes("alpha")
);

export default function AlphaPage() {
  return (
    <>
      <div className="bg-atmosphere">
        <Section className="py-20 md:py-24">
          <Eyebrow>Premium Mentorship</Eyebrow>
          <h1 className="mt-4 font-display text-5xl font-700 leading-[0.95] tracking-tight md:text-6xl text-balance">
            Alpha Mentorship Program
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            The highest-touch way to learn the Byond Capital method. A 12-week
            mentorship with direct access to a mentor, weekly live sessions, and
            accountability built around the futures open.
          </p>
          <div className="mt-7 flex flex-wrap items-end gap-x-6 gap-y-2">
            <div>
              <span className="font-display text-5xl font-700 text-steel-light">
                {ALPHA.price}
              </span>
              <span className="text-white/50"> / {ALPHA.term}</span>
            </div>
            <span className="text-sm text-white/40">
              {ALPHA.monthlyEquivalent}
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/book">Book a Call</Button>
            <Button href="/club" variant="ghost">
              Compare with Club
            </Button>
          </div>
          <p className="mt-5 max-w-xl text-sm text-white/50">
            Alpha is application-based. The call is a short fit conversation —
            you tell us where you're at, we tell you straight whether the
            program is right for you.
          </p>
        </Section>
      </div>

      {/* What's included */}
      <Section className="py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Included</Eyebrow>
            <h2 className="mt-3 font-display text-4xl font-700">
              What you get in 12 weeks.
            </h2>
            <ul className="mt-7 space-y-4">
              {ALPHA.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-steel" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-navy-800 p-8">
            <Eyebrow>The Format</Eyebrow>
            <h3 className="mt-3 font-display text-2xl font-700">
              Application + call, not instant checkout.
            </h3>
            <p className="mt-4 text-white/70">
              We deliberately don't let people buy Alpha with a click. We want
              to make sure the program fits where you are as a trader and that
              you'll get the most out of three months of mentorship.
            </p>
            <ol className="mt-6 space-y-3 text-sm text-white/70">
              <li>
                <span className="font-600 text-steel-light">1.</span> Book a
                short call below.
              </li>
              <li>
                <span className="font-600 text-steel-light">2.</span> Quick fit
                conversation about your trading and goals.
              </li>
              <li>
                <span className="font-600 text-steel-light">3.</span> If it's a
                fit, we get you set up and start week one.
              </li>
            </ol>
          </div>
        </div>
      </Section>

      {/* Who it's for / not for */}
      <div className="border-y border-white/10 bg-navy-800">
        <Section className="py-20">
          <Eyebrow>Fit</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-700">
            Who Alpha is for &mdash; and who it isn&apos;t.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-steel/30 bg-navy-700 p-7">
              <h3 className="font-display text-xl font-700 text-steel-light">
                This is for you if&hellip;
              </h3>
              <ul className="mt-5 space-y-3">
                {ALPHA.forYou.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-white/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-steel" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-navy-700 p-7">
              <h3 className="font-display text-xl font-700 text-white/80">
                This isn&apos;t for you if&hellip;
              </h3>
              <ul className="mt-5 space-y-3">
                {ALPHA.notForYou.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-white/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </div>

      {/* Mentorship testimonials */}
      {ALPHA_TESTIMONIALS.length > 0 && (
        <Section className="py-20">
          <Eyebrow>Mentorship Feedback</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-700">
            From Alpha members.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {ALPHA_TESTIMONIALS.map((t, i) => (
              <figure
                key={i}
                className="rounded-xl border border-white/10 bg-navy-800 p-7"
              >
                <blockquote className="text-white/80 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm font-600 text-steel-light">
                  — {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-10 text-xs text-white/40">{RISK_SHORT}</p>
        </Section>
      )}

      {/* Final CTA */}
      <Section className="py-16">
        <div className="rounded-2xl border border-steel/30 bg-gradient-to-br from-navy-700 to-navy-800 p-10 text-center md:p-14">
          <h2 className="font-display text-4xl font-700 md:text-5xl text-balance">
            Ready to apply?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/60">
            Book a short fit call. {ALPHA.price} for {ALPHA.term}, in euros.
          </p>
          <div className="mt-8">
            <Button href="/book">Book a Call</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
