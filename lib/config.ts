// Single source of truth for site-wide content. Prices in EUROS only.

export const SITE = {
  name: "Byond Capital",
  domain: "byondcapital.co",
  tagline: "Trading education, built like an institution.",
  contactEmail: "hello@byondcapital.co",
  social: {
    instagram: "https://instagram.com/byondcapital",
    youtube: "",
    x: "",
  },
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Club", href: "/club" },
  { label: "Alpha Mentorship", href: "/alpha-mentorship" },
  { label: "About", href: "/about" },
  { label: "Results", href: "/results" },
  { label: "Book a Call", href: "/book" },
];

// Club tiers — euros only.
export const CLUB_TIERS = [
  {
    id: "free",
    name: "Free",
    price: "€0",
    cadence: "",
    blurb: "Limited Discord access. Your entry into the community.",
    cta: "Join Free",
    envUrl: "NEXT_PUBLIC_WHOP_FREE_URL",
    featured: false,
  },
  {
    id: "monthly",
    name: "Monthly",
    price: "€129",
    cadence: "/ month",
    blurb: "Full community access, education library, market analysis.",
    cta: "Join Monthly",
    envUrl: "NEXT_PUBLIC_WHOP_MONTHLY_URL",
    featured: false,
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: "€300",
    cadence: "/ quarter",
    blurb: "Everything in Monthly, billed quarterly.",
    cta: "Join Quarterly",
    envUrl: "NEXT_PUBLIC_WHOP_QUARTERLY_URL",
    featured: false,
  },
  {
    id: "annual",
    name: "Annual",
    price: "€1,100",
    cadence: "/ year",
    blurb: "Best value. Full access for a full year.",
    cta: "Join Annual",
    envUrl: "NEXT_PUBLIC_WHOP_ANNUAL_URL",
    featured: true,
  },
  {
    id: "vip",
    name: "VIP",
    price: "€199",
    cadence: "/ month",
    blurb: "Monthly group call with the team. Capped at 20 members.",
    cta: "Apply for VIP",
    envUrl: "NEXT_PUBLIC_WHOP_VIP_URL",
    featured: false,
    cap: 20,
  },
];

export const ALPHA = {
  price: "€1,750",
  term: "3 months",
  monthlyEquivalent: "~€583 / month",
  includes: [
    "Weekly live sessions on the open",
    "Direct WhatsApp & voice access to your mentor",
    "Direct teaching of the ORB and RAB frameworks",
    "Weekly accountability and progress reviews",
    "Trade reviews and personalised feedback",
    "Private mentor-only resources and templates",
  ],
  forYou: [
    "You're committed to treating this like a craft, not a get-rich-quick play",
    "You can show up consistently for live sessions during the futures open",
    "You want structure, accountability, and a direct line to a mentor",
    "You've done some self-study and are ready to refine, not start from zero",
  ],
  notForYou: [
    "You're looking for signals to copy without learning the method",
    "You want guaranteed returns — this is education, not a managed account",
    "You can't commit at least a few hours per week to live sessions and homework",
    "You're not in a position to risk capital responsibly",
  ],
};

// Club benefits — what's included across paid tiers.
export const CLUB_FEATURES = [
  {
    title: "Private Discord",
    desc: "Daily chat, mentor presence, and a focused community of working traders.",
  },
  {
    title: "Education library",
    desc: "Structured lessons on the ORB and RAB frameworks, risk, and execution.",
  },
  {
    title: "Market analysis",
    desc: "Pre-market notes and session breakdowns to sharpen your read.",
  },
  {
    title: "Custom indicators",
    desc: "Access to the in-house indicators built around our frameworks.",
  },
  {
    title: "Live sessions",
    desc: "Recurring group sessions to walk the open and review setups together.",
  },
  {
    title: "Ongoing support",
    desc: "A team that actually answers — no faceless signal channel.",
  },
];

// FAQ entries — reused on Contact page.
export const FAQS = [
  {
    q: "How much does it cost?",
    a: "The Club has a free tier for limited Discord access. Paid tiers start at €129/month, with quarterly (€300) and annual (€1,100) options. The Alpha Mentorship Program is €1,750 for 3 months. All prices are in euros.",
  },
  {
    q: "I'm a complete beginner — is this for me?",
    a: "Yes. The Club is built so beginners can follow a structured path from the basics into the ORB and RAB frameworks. The Alpha Mentorship Program is better suited to traders who already have some screen time and want direct guidance to sharpen execution.",
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
    a: "Yes. Monthly and quarterly memberships can be cancelled from your Whop account at any time and won't renew at the next billing date. Annual memberships run for the full term. For mentorship cancellations, get in touch directly.",
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
      "The ORB sessions changed how I approach the open. Clean rules, no noise, finally a daily routine that holds up.",
    name: "Member, Alpha",
    handle: "",
  },
  {
    quote:
      "Direct mentor access in Alpha is what made the difference. Every trade I review I learn something.",
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
