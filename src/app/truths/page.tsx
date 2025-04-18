import { useState, useEffect, useRef } from "react";
import type { Metadata } from "next";
import styles from "./TruthCard.module.css";
import { scalePop } from "../../animations/core";

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

const truths = [
  "What you resist is where your identity still lives.",
  "Presence doesn’t need proof. Only the mind demands validation.",
  "Silence is the only true answer.",
  "The seeker is the sought.",
  "Truth is not found, it is revealed.",
];


function TruthCard({ text }: { text: string }) {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null); // Ref for potential future use

  // Define schema for this specific truth card (optional, could be complex)
  // const truthSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "Quotation", // Or CreativeWork
  //   text: text,
  //   spokenByCharacter: { // Or author if appropriate
  //     "@type": "Person",
  //     name: "Prince Jona"
  //   }
  // };

  return (
    // Consider adding aria-live or role="button" for accessibility if interaction changes content significantly
    <div
      className={styles.perspective}
      onClick={() => setFlipped((f) => !f)}
      tabIndex={0}
      style={{
        outline: "none",
      }}
    >
      <div
        ref={cardRef}
        className={styles.coreTruthCard}
        style={{
          backfaceVisibility: "hidden",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.6s cubic-bezier(0.4,0.2,0.2,1)",
        }}
      >
        {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(truthSchema) }} /> */}
        {text}
      </div>
      {/* Optional: Back side of the card if needed */}
      {/* <div className={styles.coreTruthCardBack} style={{ transform: flipped ? 'rotateY(0deg)' : 'rotateY(-180deg)', ... }}> Back Content </div> */}
    </div>
  );
}

// Add CollectionPage schema at the Page level
export default function TruthsPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  // NOTE: Client-side effects need the "use client" directive.
  // If animations are essential, we might need to move the schema generation
  // to a server component parent or use a different approach.
  // For now, keeping the schema generation here, assuming static export or SSR.
  useEffect(() => {
    scalePop(`.${styles.coreTruthCard}`);
  }, []);

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Core Truths",
    url: "https://princejona.com/truths",
    description: metadata.description,
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
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 1rem",
          gap: "3rem",
          background: "linear-gradient(to bottom, #1e1b4b, #312e81, #3730a3)",
          transition: "background 0.5s",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            textAlign: "center",
            color: "#fff",
            textShadow: "0 2px 8px #0008",
            marginBottom: "1.5rem",
          }}
        >
          Core Truths
        </h1>
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            maxWidth: "72rem",
            width: "100%",
          }}
        >
          {/* Responsive: 3 columns on medium+ screens */}
          <style>
            {`
              @media (min-width: 768px) {
                .truths-grid {
                  grid-template-columns: repeat(3, 1fr) !important;
                }
              }
            `}
          </style>
          <div className="truths-grid" style={{ display: "contents" }}>
            {truths.map((truth, idx) => (
              <TruthCard key={idx} text={truth} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
