import { Section, Eyebrow } from "@/components/ui";
import { ALPHA } from "@/lib/config";

export const metadata = {
  title: "Book a Call — Byond Capital",
  description:
    "Book a short fit call for the Alpha Mentorship Program or to ask about the Byond Capital Club. Calendar syncs in real time.",
};

export default function BookPage() {
  const embedUrl = process.env.NEXT_PUBLIC_BOOKING_EMBED_URL;

  return (
    <>
      <div className="bg-atmosphere">
        <Section className="py-20 md:py-24">
          <Eyebrow>Let&apos;s Talk</Eyebrow>
          <h1 className="mt-4 font-display text-5xl font-700 leading-[0.95] tracking-tight md:text-6xl text-balance">
            Book a call.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            Mainly for Alpha Mentorship enquiries ({ALPHA.price} /{" "}
            {ALPHA.term}). Short, no-pressure fit conversation — bring your
            questions, we&apos;ll tell you straight whether the program is
            right for you. Pick a slot that works and it syncs to the
            calendar in real time.
          </p>
        </Section>
      </div>

      <Section className="py-12">
        <div className={`overflow-hidden rounded-xl border border-white/10 ${embedUrl ? "bg-white" : "bg-navy-800"}`}>
          {embedUrl ? (
            <iframe
              src={embedUrl}
              className="h-[760px] w-full border-0"
              title="Book a call with Byond Capital"
              loading="lazy"
            />
          ) : (
            <div className="flex min-h-[480px] items-center justify-center bg-navy-800 p-10 text-center">
              <div>
                <p className="font-display text-xl text-white/60">
                  Calendar embed not configured yet.
                </p>
                <p className="mt-3 text-sm text-white/40">
                  Set{" "}
                  <code className="rounded bg-navy-700 px-1.5 py-0.5 text-steel-light">
                    NEXT_PUBLIC_BOOKING_EMBED_URL
                  </code>{" "}
                  in your environment to the Calendly / Google Calendar embed
                  URL.
                </p>
              </div>
            </div>
          )}
        </div>
      </Section>

      <Section className="py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["20 minutes", "Short, focused conversation"],
            ["Real calendar", "Booked slots block automatically"],
            ["No pressure", "If it's not a fit we'll tell you"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="rounded-xl border border-white/10 bg-navy-800 p-6"
            >
              <div className="font-display text-2xl font-700 text-steel-light">
                {k}
              </div>
              <p className="mt-2 text-sm text-white/60">{v}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
