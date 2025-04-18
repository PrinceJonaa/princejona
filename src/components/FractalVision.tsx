/**
 * FractalVision Component
 * Placeholder for an animated, interactive diagram representing connections
 * between identity, work, and collective vision.
 * Replace SVG with your final visual code or animation library.
 */
import React from "react";

const NODE_SIZE = 48;

const FractalVision: React.FC = () => {
  return (
    <div
      style={{
        width: 400,
        height: 400,
        background: "radial-gradient(ellipse at center, #232858 70%, #161618 100%)",
        borderRadius: "2rem",
        boxShadow: "0 4px 32px #0003",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label="Fractal Vision diagram placeholder"
    >
      <svg width="300" height="300">
        <circle cx="150" cy="150" r={NODE_SIZE / 2} fill="#90cdf4" fillOpacity={0.7} />
        <text x="150" y="145" textAnchor="middle" fontSize="14" fill="var(--color-text-main)">Self</text>
        <circle cx="60" cy="220" r={NODE_SIZE / 2} fill="#ed8936" fillOpacity={0.7} />
        <text x="60" y="215" textAnchor="middle" fontSize="14" fill="var(--color-text-main)">Project</text>
        <circle cx="240" cy="220" r={NODE_SIZE / 2} fill="#38a169" fillOpacity={0.7} />
        <text x="240" y="215" textAnchor="middle" fontSize="14" fill="var(--color-text-main)">Humanity</text>
        <line x1="150" y1="150" x2="60" y2="220" stroke="#fff" strokeWidth="2" strokeDasharray="6 4" />
        <line x1="150" y1="150" x2="240" y2="220" stroke="#fff" strokeWidth="2" strokeDasharray="6 4" />
        <line x1="60" y1="220" x2="240" y2="220" stroke="#fff" strokeWidth="1" opacity="0.3" />
      </svg>
    </div>
  );
};

export default FractalVision;
