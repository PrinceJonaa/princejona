import type { Metadata } from "next";
import OriginParallax from "../../components/OriginParallax";

export const metadata: Metadata = {
  title: "Origin Story | Prince Jona",
  description:
    "Explore the origin story of Prince Jona. A journey through myth, music, and the emergence of a new voice.",
  openGraph: {
    title: "Origin Story | Prince Jona",
    description: "The myth, the music, the journey.",
    url: "https://princejona.com/story",
  },
  twitter: {
    title: "Origin Story | Prince Jona",
    description: "Discover the beginnings of Prince Jona.",
  },
};

/**
 * Origin Story (The Myth) Page
 * Parallax scrolling experience for the hero’s journey.
 * Placeholder for a multi-section, visually rich timeline.
 */
export default function StoryPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Origin Story of Prince Jona",
    url: "https://princejona.com/story",
    description: metadata.description, // Reuse description from metadata
    image: "https://princejona.com/og.png", // Use main OG image or a specific one for the story
    datePublished: "2024-01-01", // Placeholder: Use actual publish date
    dateModified: new Date().toISOString().split("T")[0], // Use current date as modified
    author: {
      "@type": "Person",
      name: "Prince Jona",
      url: "https://princejona.com",
    },
    publisher: {
      // Consistent with layout publisher
      "@type": "Person",
      name: "Prince Jona",
      url: "https://princejona.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://princejona.com/story",
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data for Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen bg-gradient-to-b from-indigo-950 via-indigo-900 to-indigo-800 transition-colors duration-500">
        <OriginParallax />
      </main>
    </>
  );
}
