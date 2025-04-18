/**
 * Offerings Component
 * Placeholder for interactive doors/cards representing offerings.
 * Clicking each card could open a modal or unique micro-experience.
 */
import React from "react";

const offerings = [
  { label: "Presence", icon: "🜂", color: "#805ad5" },
  { label: "Teaching", icon: "📖", color: "#319795" },
  { label: "Translation", icon: "🔤", color: "#ed8936" },
  { label: "Reflection", icon: "🪞", color: "#b83280" },
  { label: "Music", icon: "🎵", color: "#2b6cb0" },
  { label: "Mirrors", icon: "🔮", color: "#ecc94b" },
];

const Offerings: React.FC = () => (
  <section style={{
    padding: 40,
    display: "flex",
    flexWrap: "wrap",
    gap: 32,
    justifyContent: "center",
  }}>
    {offerings.map(offering => (
      <div
        key={offering.label}
        style={{
          background: offering.color,
          color: "var(--color-text-main)",
          borderRadius: "1rem",
          width: 180,
          height: 180,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 16px #0004",
          fontSize: 22,
          cursor: "pointer",
          transition: "transform 0.2s",
        }}
        tabIndex={0}
        role="button"
        aria-label={offering.label}
        // Future: onClick={() => openOffering(offering)}
      >
        <div style={{ fontSize: 46, marginBottom: 18 }}>{offering.icon}</div>
        <div style={{ fontWeight: 700, color: "var(--color-text-accent)" }}>{offering.label}</div>
        {/* Placeholder for door opening animation or modal */}
      </div>
    ))}
  </section>
);

export default Offerings;
