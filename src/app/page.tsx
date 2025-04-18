import type { Metadata } from "next";
import HomePageClient from "../components/HomePageClient"; // Import the new client component

export const metadata: Metadata = {
  title: "Prince Jona | NYC Artist, Technologist & Truth Seeker",
  description:
    "Explore the world of Prince Jona – a unique blend of music, AI innovation, and spiritual exploration based in NYC. Discover projects, stories, and core truths.",
  // Overriding keywords for homepage specificity if desired, or remove to use layout's
  keywords: [
    "Prince Jona",
    "NYC artist",
    "technologist",
    "AI music",
    "spiritual rap",
    "truth seeker",
    "web development",
    "creative coder",
  ],
  openGraph: {
    // Specific OG data for the homepage, inheriting others from layout
    title: "Prince Jona | NYC Artist, Technologist & Truth Seeker",
    description: "Explore the world of Prince Jona – music, AI, and truth.",
    url: "https://princejona.com", // Canonical URL for this page
    images: [
      {
        url: "/og.png", // Ensure this image is relevant to the homepage
        width: 1200,
        height: 630,
        alt: "Prince Jona - Homepage",
      },
    ],
  },
  twitter: {
    // Specific Twitter card data for the homepage
    title: "Prince Jona | NYC Artist, Technologist & Truth Seeker",
    description: "Discover Prince Jona: Music, AI, and the quest for truth.",
    images: ["/og.png"], // Ensure this image is relevant
  },
};

// This is now a Server Component responsible only for metadata and rendering the client part
export default function Home() {
  // Render the client component which contains the UI and useEffect logic
  return <HomePageClient />;
}
