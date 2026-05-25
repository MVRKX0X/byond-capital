// Resolves the API base URL.
//
// Production (Cloudflare Pages + Worker): set NEXT_PUBLIC_API_BASE_URL to
//   https://api.byondcapital.co
//   (or the workers.dev URL before DNS is on Cloudflare).
//
// Local dev: leave NEXT_PUBLIC_API_BASE_URL unset and run the Worker locally
//   with `cd worker && npm run dev` (defaults to http://localhost:8787).

export function apiBase(): string {
  const fromEnv = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (fromEnv && fromEnv.trim()) return fromEnv.replace(/\/+$/, "");
  return "http://localhost:8787";
}
