/**
 * PortalExperience Component
 * Placeholder for the secret/hidden truth experience.
 * Evolve with interactive, meditative, or generative visuals.
 */
import React from "react";

const PortalExperience: React.FC = () => (
  <div
    style={{
      width: 520,
      height: 360,
      borderRadius: "2rem",
      backdropFilter: "blur(10px)",
      background: "linear-gradient(135deg, #fdc5f5bb 40%, #b1b2ff77 100%)",
      boxShadow: "0 8px 40px #0007, 0 1.5px 12px #fff3 inset",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 36,
      textAlign: "center",
      color: "#3a1c5a",
      fontWeight: 600,
    }}
  >
    <h2 style={{
      fontSize: 38,
      marginBottom: 10,
      letterSpacing: 1.5,
      color: "var(--color-text-accent)",
      textShadow: "0 2px 12px #fff9",
    }}>
      The Portal
    </h2>
    <div style={{
      fontSize: 21,
      marginBottom: 24,
      color: "var(--color-text-main)",
      fontWeight: 400,
      textShadow: "0 1px 8px #fff6",
    }}>
      “You have entered the innermost chamber.<br />Here, language dissolves. Only direct truth remains.”
    </div>
    <svg width={220} height={180} style={{ marginBottom: 22 }}>
      <ellipse cx={110} cy={90} rx={90} ry={72} fill="#fff5" />
      <ellipse cx={110} cy={90} rx={54} ry={44} fill="#cfb4fc88" />
      <ellipse cx={110} cy={90} rx={32} ry={20} fill="#e0c4ffcc" />
      <circle cx={110} cy={90} r={6} fill="var(--color-text-accent)" />
    </svg>
    <div style={{
      fontSize: 18,
      color: "var(--color-text-muted)",
    }}>
      [A visual representation of presence. Expand this experience ~ ]
    </div>
  </div>
);

export default PortalExperience;
