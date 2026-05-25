/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export so the site can be hosted as static files.
  // Server-only API routes have been moved to a separate Express server (see server/api.js).
  output: "export",
  // Required for static export because we don't run next/image optimizer.
  images: { unoptimized: true },
  // Append trailing slashes so deployed paths like /club/ resolve via index.html.
  trailingSlash: true,
};
module.exports = nextConfig;
