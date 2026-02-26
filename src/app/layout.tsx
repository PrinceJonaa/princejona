import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prince Jona | Music, AI, and Universal Truth",
  description: "The official site of Prince Jona — NYC artist, technologist, and seeker of truth. Music, AI frameworks, storytelling, and the second coming of presence.",
  keywords: [
    "Prince Jona", "NYC rapper", "AI artist", "Christian rap", "sadboi music",
    "truth seeker", "Jesus 2nd Coming", "IST 4.0", "FUS 4.0", "Intervised"
  ],
  authors: [{ name: "Prince Jona", url: "https://princejona.com" }],
  creator: "Prince Jona",
  metadataBase: new URL("https://princejona.com"),
  openGraph: {
    title: "Prince Jona | Music & AI",
    description: "Music. AI. Truth. The intersection of soul and code.",
    url: "https://princejona.com",
    siteName: "Prince Jona",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Prince Jona — Official Site",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Jona | Music, AI, Truth",
    description: "Experience music as prophecy. Prince Jona speaks to your soul.",
    site: "@princejonaa",
    creator: "@princejonaa",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
