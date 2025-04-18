import type { Metadata } from "next";
import TruthsPageClient from "../../components/TruthsPageClient"; // Import the new client component

// Define truths here for schema generation, or import from a shared source
const truths = [
  "What you resist is where your identity still lives.",
  "Presence doesn’t need proof. Only the mind demands validation.",
  "Silence is the only true answer.",
  "The seeker is the sought.",
  "Truth is not found, it is revealed.",
];

export const metadata: Metadata = {
  title: "Core Truths | Prince Jona",
  description:
    "Explore fundamental truths and principles guiding the work and perspective of Prince Jona.",
  openGraph: {
    title: "Core Truths | Prince Jona",
    description: "Fundamental principles for navigating reality.",
    url: "https://princejona.com/truths",
  },
  twitter: {
    title: "Core Truths | Prince Jona",
    description: "Explore fundamental truths with Prince Jona.",
  },
};

// This Server Component handles metadata and structured data, then renders the Client Component for UI/interaction
export default function TruthsPage() {
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
      name: "Core Truths",
      url: "https://princejona.com/truths",
      description: metadata.description ?? "Core truths explored by Prince Jona.", // Fallback description
      isPartOf: {
      "@type": "WebSite",
      url: "https://princejona.com",
      name: "Prince Jona",
    },
    hasPart: truths.map((truthText, index) => ({
      "@type": "CreativeWork", // Using CreativeWork as a simple representation
      position: index + 1,
      name: `Truth ${index + 1}`, // Generic name
      text: truthText,
      // Potentially add url fragment identifier if cards had unique IDs: url: `https://princejona.com/truths#truth-${index}`
    })),
    author: {
      "@type": "Person",
      name: "Prince Jona",
      url: "https://princejona.com",
    },
    publisher: {
      "@type": "Person",
      name: "Prince Jona",
      url: "https://princejona.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      {/* Render the client component which contains the UI and useEffect/useState logic */}
      <TruthsPageClient />
    </>
  );
}
