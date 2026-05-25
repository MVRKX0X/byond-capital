import { Section, Eyebrow } from "@/components/ui";
import { RISK_FULL, SITE } from "@/lib/config";

export const metadata = {
  title: "Legal & Risk Disclaimer — Byond Capital",
  description:
    "Full risk disclaimer, terms of use, privacy policy and cookie notice for Byond Capital.",
};

export default function LegalPage() {
  return (
    <div className="bg-atmosphere">
      <Section className="py-20 md:py-24">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-4 font-display text-5xl font-700 leading-[0.95] tracking-tight md:text-6xl text-balance">
          Legal &amp; risk disclaimer.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
          Byond Capital is an educational brand. This page sets out the legal
          framing for everything published on this site.
        </p>
      </Section>

      <Section className="pb-20">
        <div className="grid gap-10 md:grid-cols-4">
          <aside className="md:col-span-1">
            <nav className="sticky top-24 space-y-2 text-sm">
              {[
                ["#risk", "Risk Disclaimer"],
                ["#terms", "Terms of Use"],
                ["#privacy", "Privacy Policy"],
                ["#cookies", "Cookie Notice"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="block text-white/50 hover:text-steel-light"
                >
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          <div className="md:col-span-3 space-y-12 text-white/70 leading-relaxed">
            {/* Risk disclaimer */}
            <section id="risk" className="scroll-mt-24">
              <h2 className="font-display text-3xl font-700 text-white">
                Full risk disclaimer
              </h2>
              <div className="mt-5 rounded-lg border border-steel/30 bg-navy-800 p-6">
                <p>{RISK_FULL}</p>
              </div>
            </section>

            {/* Terms */}
            <section id="terms" className="scroll-mt-24">
              <h2 className="font-display text-3xl font-700 text-white">
                Terms of use
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  By using this website you agree to use it lawfully and not
                  for any purpose that infringes the rights of others. All
                  content on this site — including text, frameworks, branding
                  and indicators — is the intellectual property of Byond
                  Capital and may not be redistributed, resold, or rebranded
                  without written permission.
                </p>
                <p>
                  Membership purchases and mentorship enrolments are handled
                  through Whop and are governed by Whop&apos;s own terms in
                  addition to ours. Memberships may be cancelled in line with
                  the cadence purchased; annual memberships run the full term.
                </p>
                <p className="text-sm text-white/50">
                  These terms are provided as a placeholder. Final terms of
                  service should be reviewed by qualified legal counsel before
                  launch.
                </p>
              </div>
            </section>

            {/* Privacy */}
            <section id="privacy" className="scroll-mt-24">
              <h2 className="font-display text-3xl font-700 text-white">
                Privacy policy
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  We collect the personal data you give us — typically your
                  name and email address when you opt in to the ORB Playbook,
                  contact us, or book a call. We use that data to deliver the
                  content you requested, to send educational follow-ups, and
                  to respond to your enquiries.
                </p>
                <p>
                  We rely on third-party processors to run the site: Whop
                  (membership and payments), Calendly or Google Calendar
                  (booking), ManyChat (messaging and email automation), and
                  Meta (advertising and analytics). Each of these processors
                  is contractually bound to handle your data lawfully.
                </p>
                <p>
                  You can unsubscribe from emails at any time using the link
                  in the footer of any message we send, or by emailing{" "}
                  <a
                    href={`mailto:${SITE.contactEmail}`}
                    className="text-steel-light hover:underline"
                  >
                    {SITE.contactEmail}
                  </a>
                  . You also have the right under EU/UK data-protection law
                  to access, correct, or delete your personal data.
                </p>
                <p className="text-sm text-white/50">
                  This policy is provided as a placeholder. A full GDPR-aligned
                  privacy notice should be reviewed by qualified legal counsel
                  before launch.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section id="cookies" className="scroll-mt-24">
              <h2 className="font-display text-3xl font-700 text-white">
                Cookie notice
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  This site uses cookies and similar technologies to operate
                  the site and, where you consent, to measure traffic and
                  serve advertising via Meta Pixel and similar tools.
                  Essential cookies are required for the site to function.
                  Non-essential cookies are only set with your consent.
                </p>
                <p className="text-sm text-white/50">
                  A consent banner should be wired up before serving traffic
                  from the EU/UK.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="scroll-mt-24">
              <h2 className="font-display text-3xl font-700 text-white">
                Contact
              </h2>
              <p className="mt-5">
                Legal or privacy enquiries:{" "}
                <a
                  href={`mailto:${SITE.contactEmail}`}
                  className="text-steel-light hover:underline"
                >
                  {SITE.contactEmail}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </Section>
    </div>
  );
}
