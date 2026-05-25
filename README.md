# Byond Capital

Marketing site for **Byond Capital** — trading club, mentorship and ORB
playbook. Education-first, EUR pricing, navy + steel brand.

## Stack

- **Frontend**: Next.js 14 (App Router) + Tailwind CSS, static export
- **API**: Cloudflare Worker (`worker/`) — `/api/lead`, `/api/contact`
- **Hosting**: Cloudflare Pages (static) + Cloudflare Workers (API)
- **Domain**: byondcapital.co (DNS on Cloudflare)

## Local dev

```bash
# 1. Install deps
npm install
cd worker && npm install && cd ..

# 2. Copy env vars
cp .env.example .env.local
# fill in values...

# 3. Run both processes in parallel
npm run dev                 # Next.js on :3000
cd worker && npm run dev    # Worker on :8787
```

## Deploy

### Cloudflare Pages (frontend)

The site is connected to GitHub. **Every push to `main` auto-deploys.**

Build settings in Cloudflare Pages dashboard:
- **Framework preset**: Next.js (Static HTML Export)
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/`
- **Node version**: 20

Set environment variables (Pages → Settings → Environment Variables → Production):
- `NEXT_PUBLIC_API_BASE_URL`
- `NEXT_PUBLIC_WHOP_FREE_URL`
- `NEXT_PUBLIC_WHOP_MONTHLY_URL`
- `NEXT_PUBLIC_WHOP_QUARTERLY_URL`
- `NEXT_PUBLIC_WHOP_ANNUAL_URL`
- `NEXT_PUBLIC_WHOP_VIP_URL`
- `NEXT_PUBLIC_BOOKING_EMBED_URL`
- `NEXT_PUBLIC_META_PIXEL_ID`

### Cloudflare Worker (API)

```bash
cd worker
npx wrangler login          # one-time
npx wrangler deploy

# Secrets (set once each — interactive prompt):
npx wrangler secret put MANYCHAT_WEBHOOK_URL
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put CONTACT_TO_EMAIL
npx wrangler secret put CONTACT_FROM_EMAIL
# or, if using webhook transport instead of Resend:
npx wrangler secret put CONTACT_WEBHOOK_URL
```

After deploy, the Worker is reachable at
`https://byond-capital-api.<your-subdomain>.workers.dev`. Once DNS for
`byondcapital.co` is on Cloudflare, uncomment the `routes` block in
`worker/wrangler.toml` and re-deploy to bind `api.byondcapital.co`.

## Project structure

```
app/                # Next.js App Router pages
components/         # Shared UI (Header, Footer, MetaPixel)
lib/
  config.ts         # Brand, pricing, FAQs, testimonials (single source)
  api.ts            # apiBase() — resolves Worker URL
public/             # Static assets, sitemap, robots, _headers
worker/             # Cloudflare Worker for /api/lead + /api/contact
  src/index.js      # Worker handler
  wrangler.toml     # Worker config
```

## Brand rules

- Colors: navy `#060C18` dominant, steel `#4A80C4` accent. **No purple anywhere.**
- Fonts: Barlow Condensed (headlines) / Barlow (body).
- Pricing in EUR only.
- Education-first — never positioned as financial advice.
- Persistent risk line in footer on every page; full disclaimer on `/legal`.
