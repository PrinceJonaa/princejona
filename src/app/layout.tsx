import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SectionNav from "../components/SectionNav";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  url: "https://princejona.com",
                  name: "Prince Jona",
                  description:
                    "The official site of Prince Jona — NYC artist, technologist, and seeker of truth. Music, AI frameworks, storytelling, and the second coming of presence.",
                  author: {
                    "@type": "Person",
                    name: "Prince Jona",
                  },
                  publisher: {
                    "@type": "Person", // Or Organization if applicable
                    name: "Prince Jona",
                  },
                  inLanguage: "en-US",
                },
                {
                  "@type": "Person",
                  name: "Prince Jona",
                  url: "https://princejona.com",
                  sameAs: [
                    // Add social media/other relevant profile links here
                    // e.g., "https://twitter.com/princejonaa",
                    // "https://www.linkedin.com/in/yourprofile",
                    // "https://github.com/yourusername"
                  ],
                  jobTitle: "Artist & Technologist", // Adjust as needed
                  description:
                    "NYC artist, technologist, and seeker of truth. Exploring music, AI, and universal principles.",
                  image: {
                    "@type": "ImageObject",
                    url: "https://princejona.com/og.png", // Use a representative image URL
                    width: 1200,
                    height: 630,
                  },
                  // Add more details if relevant: worksFor, alumniOf, etc.
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ minHeight: "100vh", background: "#11071a" }}
      >
        <SectionNav />
        <div
          id="main-content"
          style={{
            marginLeft: 200,
            transition: "margin-left 0.25s cubic-bezier(.77,0,.18,1)",
            minHeight: "100vh",
          }}
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
