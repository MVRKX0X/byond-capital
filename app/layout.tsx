import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description:
    "Byond Capital is a professional trading-education brand. Join the Club, follow the ORB and IBB frameworks, and learn to trade with structure.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-mark.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: "Professional trading education. Join the Byond Capital Club.",
    url: `https://${SITE.domain}`,
    siteName: SITE.name,
    type: "website",
    images: [
      {
        url: `https://${SITE.domain}/og-image.jpg`,
        width: 1536,
        height: 1024,
        alt: "Byond Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: "Professional trading education. Join the Byond Capital Club.",
    images: [`https://${SITE.domain}/og-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body min-h-screen flex flex-col">
        <MetaPixel />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
