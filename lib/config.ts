// Single source of truth for site-wide content. Prices in EUROS only.

export const SITE = {
  name: "Byond Capital",
  domain: "byondcapital.co",
  tagline: "Trading education, built like an institution.",
  contactEmail: "hello@byondcapital.co",
  poweredByNoTilt: "Course platform powered by No Tilt",
  social: {
    instagram: "https://instagram.com/byondcapital",
    youtube: "",
    x: "",
  },
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Club", href: "/club" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Alpha", href: "/alpha" },
  { label: "About", href: "/about" },
  { label: "Results", href: "/results" },
  { label: "Book a Call", href: "/book" },
];

// Club tiers — euros only. Three tiers: Free / Monthly / Quarterly.
export const CLUB_TIERS = [
  {
    id: "free",
    name: "Free",
    price: "€0",
    cadence: "",
    blurb: "Limited Discord access. Your entry into the community.",
    cta: "Join Free",
    url: "", // TBD — user is still creating the free-tier checkout
    featured: false,
    features: [
      "Limited Discord access",
      "Public announcements",
      "Community vibe check",
    ],
  },
  {
    id: "monthly",
    name: "Monthly",
    price: "€179.99",
    cadence: "/ month",
    blurb: "Full community access, education library, market analysis.",
    cta: "Join Monthly",
    url: "https://notilt.co/#/c/byond/checkout/6",
    featured: false,
    features: [
      "Full Discord access",
      "Education library + ORB & RAB course",
      "Daily market analysis",
      "Custom indicators",
    ],
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: "€499",
    cadence: "/ quarter",
    blurb:
      "Everything in Monthly, plus the live Mentorship — coached trading sessions with Mark.",
    cta: "Join Quarterly",
    url: "https://notilt.co/#/c/byond/checkout/2",
    featured: true,
    badge: "Best Value · includes Mentorship",
    features: [
      "Everything in Monthly",
      "Live trading sessions coached by Mark",
      "Weekly group breakdowns",
      "Priority support",
    ],
  },
];

// Mentorship product (included with Quarterly Club tier).
export const MENTORSHIP = {
  name: "Mentorship",
  included_with: "Quarterly Club tier (€499)",
  summary:
    "Live trading sessions coached personally by Mark, alongside the full Byond Capital course library.",
  includes: [
    "Live trading sessions on the open, coached by Mark in real time",
    "Full access to the ORB and RAB course library",
    "Group breakdowns of setups and post-session reviews",
    "Daily market analysis and pre-market notes",
    "Active Discord community + custom indicators",
  ],
  cta: "Join via Quarterly",
  ctaTier: "quarterly",
};

// Alpha — application-only, premium 1:1.
export const ALPHA = {
  name: "Alpha",
  applicationOnly: true,
  summary:
    "Everything in Mentorship — plus weekly 1:1 private calls with Mark. Direct access. Application-only.",
  includes: [
    "Everything in the Mentorship programme",
    "Weekly 1:1 private call with Mark",
    "Personalised trade reviews and account planning",
    "Direct messaging access between sessions",
    "Custom progress benchmarks and accountability",
  ],
  forYou: [
    "You're committed to treating this like a craft, not a get-rich-quick play",
    "You can show up for live sessions during the futures open",
    "You want direct, weekly access to a mentor — not a group chat",
    "You've done some self-study and are ready to refine, not start from zero",
  ],
  notForYou: [
    "You're looking for signals to copy without learning the method",
    "You want guaranteed returns — this is education, not a managed account",
    "You can't commit time for weekly 1:1 calls and homework",
    "You're not in a position to risk capital responsibly",
  ],
  cta: "Apply for Alpha",
  ctaNote:
    "Application-only. Click apply to book a discovery call — we'll see if it's a fit.",
};

// FAQ entries — reused on Contact page.
export const FAQS = [
  {
    q: "How much does it cost?",
    a: "The Club has a free tier for limited Discord access. Paid tiers are Monthly at €179.99 and Quarterly at €499 — the Quarterly tier includes the live Mentorship. Alpha is application-only, priced after the discovery call. All prices are in euros.",
  },
  {
    q: "What's the difference between Mentorship and Alpha?",
    a: "Mentorship is the live trading sessions coached by Mark, plus the course — included with the Quarterly Club tier. Alpha is everything in Mentorship plus a weekly 1:1 private call with Mark. Mentorship is open enrolment; Alpha is application-only.",
  },
  {
    q: "I'm a complete beginner — is this for me?",
    a: "Yes. The Club is built so beginners can follow a structured path from the basics into the ORB and RAB frameworks. Mentorship and Alpha are better suited to traders who already have some screen time and want live coaching to sharpen execution.",
  },
  {
    q: "How much time does it take?",
    a: "Most members focus on the futures open — typically the first hour or two of the session, plus time for review afterwards. The frameworks are designed to be a defined, repeatable daily process rather than a full-time job.",
  },
  {
    q: "What markets do you trade?",
    a: "The frameworks are taught primarily on futures, with a focus on index futures around the session open. The principles transfer to other liquid instruments, but futures is the home market.",
  },
  {
    q: "Do you give signals or trade alerts?",
    a: "No. Byond Capital is an education and community brand. We teach a method and walk markets together — we don't run a signals service or manage capital on your behalf.",
  },
  {
    q: "Can I cancel my membership?",
    a: "Yes. Monthly and quarterly memberships can be cancelled from your account at any time and won't renew at the next billing date. For Alpha, terms are confirmed on the discovery call.",
  },
  {
    q: "Is this financial advice?",
    a: "No. Byond Capital provides educational content only. Nothing on this site is financial, investment, or trading advice. Trading carries significant risk and you should only ever risk capital you can afford to lose.",
  },
];

// Testimonials — placeholder data, swap with cleared quotes before launch.
export const TESTIMONIALS = [
  {
    quote:
      "The structure was the missing piece for me. I stopped guessing and started actually trading a process.",
    name: "Member, Club",
    handle: "",
  },
  {
    quote:
      "The live sessions changed how I approach the open. Clean rules, no noise, finally a daily routine that holds up.",
    name: "Member, Mentorship",
    handle: "",
  },
  {
    quote:
      "Direct 1:1 calls in Alpha is what made the difference. Every trade I review I learn something.",
    name: "Member, Alpha",
    handle: "",
  },
  {
    quote:
      "I came in from zero. Six months in I have a defined playbook and a community that actually helps.",
    name: "Member, Club",
    handle: "",
  },
  {
    quote:
      "Refreshing to find a community that teaches a method instead of selling signals.",
    name: "Member, Club",
    handle: "",
  },
  {
    quote:
      "As a self-employed business owner the schedule fits perfectly — trade the open, then back to my day.",
    name: "Member, Club",
    handle: "",
  },
];

// Educational compliance copy — reused across the site.
export const RISK_SHORT =
  "Byond Capital provides trading education only. Not financial advice. Trading carries significant risk of loss.";

export const RISK_FULL =
  "Byond Capital provides educational content and training only. Nothing on this website constitutes financial, investment, or trading advice, or a recommendation to buy or sell any financial instrument. Trading futures and other leveraged products carries a high level of risk and may not be suitable for all investors. You could lose some or all of your invested capital. Past performance and any results shown are not indicative of future results. You should seek independent advice and only trade with capital you can afford to lose.";
