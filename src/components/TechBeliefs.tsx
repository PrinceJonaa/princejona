/**
 * TechBeliefs Component
 * Placeholder for design philosophy, beliefs, frameworks, and diagrams.
 * Replace blocks with richer content and interactive/animated diagrams as desired.
 */
import React from "react";

const beliefs = [
  "AI should be trained on Presence, not just data.",
  "Every abstraction must reflect reality, not just conceal complexity.",
  "Product = Poetry: code, ritual, and interface are one.",
];

const frameworkSnippet = `// IST 4.0: Identity, Structure, Truth, Flow
type IST = {
  Identity: string;
  Structure: string;
  Truth: string;
  Flow: string;
};`;

const TechBeliefs: React.FC = () => (
  <section style={{
    padding: 40,
    color: "#e2e8f0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 32,
    width: "100%"
  }}>
    <h1 style={{ fontSize: 32, marginBottom: 12, color: "var(--color-text-main)" }}>
      Design Philosophy & Tech Beliefs
    </h1>
    <ul style={{ maxWidth: 600, width: "100%", fontSize: 20, margin: 0, padding: 0, listStyle: "none" }}>
      {beliefs.map(belief => (
        <li
          key={belief}
          style={{
            background: "#213046",
            borderRadius: 16,
            padding: "18px 22px",
            marginBottom: 16,
            boxShadow: "0 2px 10px #0002",
            color: "var(--color-text-main)"
          }}
        >
          <span style={{ color: "var(--color-text-accent)", marginRight: 10 }}>◆</span>
          {belief}
        </li>
      ))}
    </ul>
    <div style={{
      marginTop: 12,
      background: "#171718",
      borderRadius: 10,
      padding: 18,
      width: "100%",
      maxWidth: 500,
      fontFamily: "monospace",
      fontSize: 16,
      color: "var(--color-text-accent)",
      boxShadow: "0 1px 8px #0002"
    }}>
      <pre style={{ margin: 0 }}>{frameworkSnippet}</pre>
    </div>
    {/* Placeholder for interactive diagram area */}
    <div
      style={{
        marginTop: 34,
        width: 320,
        height: 200,
        background:
          "linear-gradient(135deg, #27293d 70%, #302d44 100%)",
        borderRadius: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--color-text-accent)",
        fontWeight: 700,
        fontSize: 21,
        letterSpacing: 1.2,
        boxShadow: "0 2px 12px #0001",
      }}
    >
      [Schematic Diagram Placeholder]
    </div>
  </section>
);

export default TechBeliefs;
