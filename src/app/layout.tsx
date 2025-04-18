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
                    "https://open.spotify.com/artist/4oLxy1WTGaWi2D5bCwRkzP",
                    "https://music.apple.com/us/artist/prince-jona/1654646579",
                    "https://www.tiktok.com/@princejonaofficial",
                    "https://www.youtube.com/channel/UC-G1r2j4pz0aHm2hK37ZAGw",
                    "https://soundcloud.com/princejona",
                    "https://www.instagram.com/princejonaa/",
                    // Add others like LinkedIn, GitHub if available
                  ],
                  jobTitle: "Artist, Technologist, Founder of Intervised LLC",
                  description:
                    "NYC-based multi-dimensional polymath operating at the intersection of creativity, spirituality, psychology, and technical mastery. Founder of Intervised LLC.",
                  knowsAbout: [
                    "Music Production",
                    "Videography",
                    "Artificial Intelligence (AI)",
                    "Web Development",
                    "IT Support",
                    "Network Engineering",
                    "Spiritual Coaching",
                    "IFS",
                    "DBT",
                    "CBT",
                    "IST Framework",
                    "FUS Framework",
                    "Non-duality",
                    "Christian Ministry",
                    "Social Media Marketing",
                  ],
                  image: {
                    "@type": "ImageObject",
                    url: "https://princejona.com/og.png", // Use a representative image URL
                    width: 1200,
                    height: 630,
                  },
                  // Add more details if relevant: worksFor, alumniOf, etc.
                },
                {
                  "@type": "Organization",
                  "@id": "https://princejona.com/#intervised", // Anchor for Intervised LLC
                  name: "Intervised LLC",
                  url: "https://princejona.com", // Use main site URL until specific one exists
                  founder: {
                    "@type": "Person",
                    name: "Prince Jona",
                    url: "https://princejona.com", // Link back to the Person schema
                  },
                  sameAs: ["https://www.instagram.com/intervised.llc/"],
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "intervisedllc@gmail.com",
                    contactType: "Customer Service", // Or 'Sales', 'Technical Support' etc.
                  },
                  description:
                    "A creative-tech-spiritual agency built for impact. Blending art, coding, psychology, and street wisdom into experiences that awaken, uplift, and resonate.",
                  // Potentially add logo URL if available:
                  // logo: {
                  //   "@type": "ImageObject",
                  //   url": "https://princejona.com/intervised-logo.png", // Replace with actual logo URL
                  // },
                  // List core service types
                  serviceType: [
                    "Creative Services",
                    "Videography",
                    "Photography",
                    "Music Production",
                    "Content Creation",
                    "Tech Solutions",
                    "AI & Automation Setup",
                    "IT Services",
                    "Web Development",
                    "App Development",
                    "Streaming Setup Services",
                    "Spiritual & Psychological Products",
                    "AI Coaching Bots",
                    "Workshops",
                    "Ministry Integration",
                    "Social Media & Branding",
                    "Community & Ministry Development",
                  ],
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
