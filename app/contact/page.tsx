import { Section, Eyebrow } from "@/components/ui";
import { FAQS, SITE } from "@/lib/config";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact & FAQ — Byond Capital",
  description:
    "Frequently asked questions and a direct contact form. Get answers about the Club, Alpha Mentorship, and the ORB / RAB frameworks.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-atmosphere">
        <Section className="py-20 md:py-24">
          <Eyebrow>Questions</Eyebrow>
          <h1 className="mt-4 font-display text-5xl font-700 leading-[0.95] tracking-tight md:text-6xl text-balance">
            Contact &amp; FAQ
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            Most questions are answered below. If yours isn&apos;t, send a
            message — we read every one and reply by email.
          </p>
        </Section>
      </div>

      <Section className="py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-700">
              The usual questions.
            </h2>
            <div className="mt-8 space-y-3">
              {FAQS.map((item, i) => (
                <details
                  key={item.q}
                  className="group rounded-lg border border-white/10 bg-navy-800 open:border-steel/40"
                  {...(i === 0 ? { open: true } : {})}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4">
                    <span className="font-display text-lg font-600 text-white">
                      {item.q}
                    </span>
                    <span className="mt-1 text-steel-light transition-transform group-open:rotate-45">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-sm leading-relaxed text-white/70">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-xl border border-white/10 bg-navy-800 p-7">
              <Eyebrow>Send a Message</Eyebrow>
              <h2 className="mt-3 font-display text-2xl font-700">
                Get in touch.
              </h2>
              <p className="mt-2 text-sm text-white/60">
                We reply to{" "}
                <a
                  href={`mailto:${SITE.contactEmail}`}
                  className="text-steel-light hover:underline"
                >
                  {SITE.contactEmail}
                </a>
                .
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
