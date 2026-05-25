import Link from "next/link";
import { NAV, SITE, RISK_SHORT } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-800">
      <div className="mx-auto max-w-content px-6 py-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 font-display text-xl font-700 tracking-wide">
              <img
                src="/logo-mark.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-md object-cover"
              />
              <span>
                BYOND <span className="text-steel">CAPITAL</span>
              </span>
            </div>
            <p className="mt-2 text-sm text-white/50">{SITE.tagline}</p>
            <div className="mt-5 flex items-center gap-3">
              {SITE.social.instagram && (
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/70 hover:border-steel hover:text-steel-light"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </a>
              )}
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {NAV.concat([
              { label: "Contact", href: "/contact" },
              { label: "Legal", href: "/legal" },
            ]).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/60 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/40">{RISK_SHORT}</p>
          <p className="mt-4 text-xs text-white/30">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.{" "}
            <Link href="/legal" className="underline hover:text-white/60">
              Full risk disclaimer
            </Link>
            .
          </p>
          <p className="mt-2 text-xs text-white/30">{SITE.poweredByNoTilt}.</p>
        </div>
      </div>
    </footer>
  );
}
