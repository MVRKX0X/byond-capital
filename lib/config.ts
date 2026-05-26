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

// The Byond Capital Method — two named frameworks. No ICT theory.
export const METHOD = {
  headline: "The Byond Capital Method",
  antiPositioning:
    "No order blocks. No fair value gaps. No recycled ICT theory. Two clear, named frameworks — built and traded live on NQ & MNQ futures.",
  frameworks: [
    {
      code: "ORB",
      name: "Opening Range Breakout",
      description:
        "A structured approach to the high-probability moves that follow the session open. Defined entries, defined risk, defined targets.",
    },
    {
      code: "IBB",
      name: "Initial Balance Breakout",
      description:
        "Reading where the market absorbs orders before expanding — catching the move when price breaks from consolidation.",
    },
  ],
};

// Live session times — reused across Club, Mentorship and Alpha pages.
export const SESSION_SCHEDULE = {
  headline: "Live Session Schedule",
  sessions: [
    {
      name: "London Session",
      time: "08:30",
      timezone: "UK / IRE",
      days: "Tuesday – Friday",
      note: "Mondays excluded",
    },
    {
      name: "New York Session",
      time: "15:00",
      timezone: "UK / IRE",
      days: "Monday – Thursday",
      note: "Fridays excluded",
    },
  ],
  scheduleAdvantages: [
    {
      title: "Two sessions, two time windows",
      body: "A morning London session and an afternoon New York session. Catch whichever fits around work, family or other commitments. Both sessions are recorded so nothing is ever missed.",
    },
    {
      title: "Working a 9–to–5? No problem",
      body: "The New York session runs at 15:00 UK/IRE — perfect if you trade on a lunch break or after work. Every session is recorded so you can review any trade at a time that suits you.",
    },
    {
      title: "Course on your own time",
      body: "The full 9-hour course is on demand. Work through it evenings, weekends or on breaks, at whatever pace suits you. No deadlines, no pressure.",
    },
    {
      title: "Trade when it suits you",
      body: "The ORB & IBB frameworks work across both sessions. Apply them in the morning, at lunch or in the evening — no need to be at a screen all day.",
    },
  ],
};

// Course product details — referenced across pricing tiers.
export const COURSE = {
  hours: 9,
  videos: 34,
  modules: 9,
  hostedOn: "No Tilt",
  summary:
    "34 videos across 9 structured modules. Beginner to advanced — strategy, psychology, risk and live application. Learn at your own pace.",
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
    blurb:
      "Flexible monthly access — cancel any time. Live Trading Floor, full course, community and tools.",
    cta: "Join Monthly",
    url: "https://notilt.co/#/c/byond/checkout/6",
    featured: false,
    features: [
      "Live Trading Floor (London + NY)",
      "Session recordings & playbacks",
      "9-hour on-demand course (34 videos)",
      "Discord community & exclusive tools",
      "Prop firm discounts & indicators",
    ],
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: "€499",
    cadence: "one-time",
    blurb:
      "Full access, pay once. Includes a 20-minute 1-on-1 onboarding call with Mark — cheaper than three months of the subscription.",
    cta: "Join Quarterly",
    url: "https://notilt.co/#/c/byond/checkout/2",
    featured: true,
    badge: "Best Value · includes Onboarding",
    features: [
      "Live Trading Floor (London + NY)",
      "Session recordings & playbacks",
      "9-hour on-demand course (34 videos)",
      "Discord community & exclusive tools",
      "Prop firm discounts & indicators",
      "⭐ 20-min 1-on-1 onboarding call with Mark",
    ],
  },
];

// Mentorship product (delivered via the Club tiers).
export const MENTORSHIP = {
  name: "Mentorship",
  included_with: "Monthly €179.99 / Quarterly €499 — Quarterly adds the onboarding call",
  summary:
    "Master the ORB & IBB frameworks. Trade live. Build real consistency.",
  includes: [
    "Live Trading Floor across both London & NY sessions",
    "Every session recorded — review trade setups on demand",
    "9-hour on-demand course on No Tilt (34 videos, 9 modules)",
    "Discord community access with focused traders",
    "Exclusive Byond Capital indicators & proprietary strategies",
    "Prop firm discounts and elite trading tools",
    "20-min 1-on-1 onboarding call with Mark (Quarterly only)",
  ],
  cta: "Choose your plan",
  ctaTier: "quarterly",
};

// Alpha — application-only, premium 1:1.
export const ALPHA = {
  name: "Alpha",
  applicationOnly: true,
  price: "£1,750",
  priceCadence: "3-month initial term · renewable monthly thereafter",
  priceNote: "Application-only — your fit is confirmed on the discovery call.",
  tagline: "Direct access. Real results. No gatekeepers, no delays — no matter where you are or when you trade.",
  summary:
    "Everything in Mentorship — plus direct WhatsApp access, a weekly 1:1 with Mark, and a tailored framework built around your goals.",
  longDescription: [
    "The Alpha Mentorship Program is the highest-touch way to learn the Byond Capital method — built for traders who are done dabbling and ready to commit to a process. Structured around a three-month initial engagement, you work directly with Mark through live sessions, with WhatsApp message, voice note and call access for the moments that matter: a setup you're unsure about, a decision in real time, a habit you need to break.",
    "This is mentorship in the real sense — accountability, feedback, and direct teaching of the ORB and IBB frameworks until they're genuinely yours. Alpha is intentionally not a shortcut and not a signals service. It's for traders willing to put in the screen time and follow a structured process, with someone in their corner to compress the learning curve and keep them honest.",
    "If you want to stop trading on instinct and start trading like it's a craft, this is the room.",
  ],
  achievements: [
    "Build a repeatable, rules-based trading process around the ORB & IBB frameworks",
    "Develop the discipline to execute your plan — and identify exactly where you're leaking edge",
    "Gain confidence reading NQ/MNQ futures live, in real time — not just in hindsight",
    "Eliminate tilt — trade with a clear head, consistent sizing and structured review habits",
    "Have a direct line to your mentor whenever you need a second opinion on a setup",
  ],
  includes: [
    "Everything in the Mentorship programme",
    "Direct WhatsApp access — message, voice note & call Mark any time",
    "Weekly dedicated 1-on-1 session, scheduled any day Monday–Saturday",
    "Tailored framework built around your goals, level and specific weaknesses",
    "Copy trading & automation setups — mirror live setups on supported platforms",
    "Exclusive indicators including Anchored VWAP, and prop-firm discounts",
  ],
  oneOnOneDetail: [
    {
      title: "Direct WhatsApp access",
      body: "Message, voice note and call your mentor directly — no gatekeepers, no delays. Get answers while the market is live, not hours later.",
    },
    {
      title: "Weekly personal session — 6 days flexible",
      body: "Choose any day Monday to Saturday for your weekly 1-on-1 — morning, afternoon or evening. Built entirely around your schedule, your timezone, and your trading goals.",
    },
    {
      title: "Tailored framework",
      body: "Built around your goals, your current level and your specific weaknesses — no generic advice, no copy-paste curriculum.",
    },
    {
      title: "Mark Gray — Lead Mentor",
      body: "Creator of the ORB & IBB frameworks. Multi-year NQ/MNQ futures track record. Experienced trader and business builder with real skin in the game — not just a course seller.",
    },
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
    "Application-only. Click apply to book a discovery call — we'll confirm fit and exact terms.",
};

// FAQ entries — reused on Contact page.
export const FAQS = [
  {
    q: "How much does it cost?",
    a: "The Club has a free tier for limited Discord access. Paid tiers are Monthly at €179.99 and Quarterly at €499 — the Quarterly tier includes the live Mentorship. Alpha is application-only, priced after the discovery call. All prices are in euros.",
  },
  {
    q: "What's the difference between the Monthly and Quarterly plans?",
    a: "Both plans give you full access — Live Trading Floor, recordings, 9-hour course, Discord and tools. The €499 Quarterly plan is one-time, includes a 20-minute 1-on-1 onboarding call with Mark, and works out cheaper than three months of the €179.99 Monthly subscription. The Monthly plan is rolling and can be cancelled at any time.",
  },
  {
    q: "What's the difference between Mentorship and Alpha?",
    a: "Mentorship is the group programme — the Live Trading Floor coached by Mark plus the full course, delivered through the Monthly or Quarterly Club plans. Alpha is the high-touch 1-on-1 programme: direct WhatsApp access, a weekly personal session and a tailored framework, structured as a three-month initial engagement at £1,750. Mentorship is open enrolment; Alpha is application-only.",
  },
  {
    q: "I'm a complete beginner — is this for me?",
    a: "Yes. The 9-hour course starts from the fundamentals, and the live sessions show the ORB & IBB frameworks applied in real time so you learn by watching, not just reading. The Club is built so beginners can follow a structured path; Alpha is better suited to traders who already have screen time and want 1-on-1 coaching to sharpen execution.",
  },
  {
    q: "I work full-time — can I still keep up?",
    a: "Yes. There are two sessions a day — London at 08:30 UK/IRE and New York at 15:00 UK/IRE — so you can catch whichever fits your schedule. Everything is recorded, and the course is fully on demand. Trade live when you can, catch up when you can't.",
  },
  {
    q: "What markets do you trade?",
    a: "The ORB and IBB frameworks are built and traded live on NQ and MNQ futures — the Nasdaq 100 e-mini and micro e-mini. The principles transfer to other liquid index futures, but NQ/MNQ is the home market.",
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
