"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./TruthCard.module.css";
import { scalePop } from "../../animations/core";

const truths = [
  "What you resist is where your identity still lives.",
  "Presence doesn’t need proof. Only the mind demands validation.",
  "Silence is the only true answer.",
  "The seeker is the sought.",
  "Truth is not found, it is revealed.",
];

export default function TruthsPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate all truth cards on mount
    scalePop(`.${styles.coreTruthCard}`);
  }, []);

  return (
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
  );
}

function TruthCard({ text }: { text: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={styles.perspective}
      onClick={() => setFlipped((f) => !f)}
      tabIndex={0}
      style={{
        outline: "none",
      }}
    >
      <div
        className={styles.coreTruthCard}
        style={{
          backfaceVisibility: "hidden",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.6s cubic-bezier(0.4,0.2,0.2,1)",
        }}
      >
        {text}
      </div>
    </div>
  );
}
