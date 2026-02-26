import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import JsonLd from "@/components/seo/JsonLd";
import {
  getSiteGraphJsonLd,
  getVerificationMetadata,
  siteConfig,
} from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Prince Jona | iOS Developer · AI Systems Builder · Founder",
    template: "%s | Prince Jona",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: "technology",
  keywords: [
    "Prince Jona",
    "Jonathan Bonner",
    "Intervised LLC",
    "iOS Developer",
    "AI Systems Builder",
    "Full-Stack Engineer",
    "Swift",
    "Next.js",
    "TypeScript",
    "Brooklyn NY",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.companyName,
  alternates: {
    canonical: "/",
  },
  verification: getVerificationMetadata(),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Prince Jona | iOS Developer · AI Systems Builder · Founder",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Prince Jona — iOS, AI Systems, Intervised LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Jona | iOS Developer · AI Systems Builder · Founder",
    description: siteConfig.description,
    site: siteConfig.xHandle,
    creator: siteConfig.xHandle,
    images: [siteConfig.ogImagePath],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/icon-192x192.png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0d0d0d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isVercelDeployment = process.env.VERCEL === "1";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd data={getSiteGraphJsonLd()} />
        {children}
        {isVercelDeployment ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
      </body>
    </html>
  );
}
