import { Section, Button, Eyebrow } from "@/components/ui";
import { RISK_FULL, TESTIMONIALS } from "@/lib/config";

export const metadata = {
  title: "Results — Byond Capital",
  description:
    "Member testimonials and feedback from the Byond Capital community. Education outcomes, not investment performance promises.",
};

export default function ResultsPage() {
  return (
    <>
      <div className="bg-atmosphere">
        <Section className="py-20 md:py-24">
          <Eyebrow>Member Results</Eyebrow>
          <h1 className="mt-4 font-display text-5xl font-700 leading-[0.95] tracking-tight md:text-6xl text-balance">
            What members say.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            Education outcomes from real members of the Club and the Alpha
            Mentorship Program. Trading is hard — these are stories of
            structure, process and progress, not guaranteed returns.
          </p>
          <div className="mt-6 rounded-md border border-steel/30 bg-navy-700/60 px-5 py-3 max-w-2xl">
            <p className="text-xs leading-relaxed text-white/60">
              Results vary. Past performance is not indicative of future
              results. Trading carries significant risk of loss.
            </p>
          </div>
        </Section>
      </div>

      <Section className="py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-xl border border-white/10 bg-navy-800 p-7"
            >
              <svg
                width="28"
                height="22"
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
              <blockquote className="mt-5 flex-1 leading-relaxed text-white/80">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 text-sm font-600 text-steel-light">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Risk-callout */}
      <Section className="py-12">
        <div className="rounded-lg border border-white/10 bg-navy-800 p-6">
          <Eyebrow>Important Risk Notice</Eyebrow>
          <p className="mt-3 text-xs leading-relaxed text-white/50">
            {RISK_FULL}
          </p>
        </div>
      </Section>

      <Section className="py-16">
        <div className="rounded-2xl border border-steel/30 bg-gradient-to-br from-navy-700 to-navy-800 p-10 text-center md:p-14">
          <h2 className="font-display text-4xl font-700 md:text-5xl text-balance">
            Start with the playbook.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/60">
            See the method before you join. Free, sent straight to your inbox.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/playbook">Get the Free Playbook</Button>
            <Button href="/club" variant="ghost">
              See Membership
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
