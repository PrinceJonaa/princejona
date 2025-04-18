/**
 * OriginParallax Component
 * Placeholder for a parallax-scrolling myth/hero's journey timeline.
 * Replace with images, illustrations, or animation as desired.
 */
import React from "react";

const sections = [
  {
    label: "The Call",
    desc: "The moment you woke up to your greater purpose.",
    color: "#7286d3",
  },
  {
    label: "The Conflict",
    desc: "The struggle and challenge—what you had to overcome.",
    color: "#fbab7e",
  },
  {
    label: "The Revelation",
    desc: "What was revealed to you? How did it transform your path?",
    color: "#92b9bd",
  },
  {
    label: "The Mission",
    desc: "The ongoing invitation—how you now move in the world.",
    color: "#cceabb",
  },
];

const OriginParallax: React.FC = () => {
  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      {sections.map((section) => (
        <section
          key={section.label}
          className="min-h-[90vh] flex flex-col justify-center items-center relative z-10 font-sans transition-all duration-500"
          style={{
            background: "linear-gradient(135deg, #232858 70%, #161618 100%)",
            color: "#fff",
            padding: "2.5rem 1rem",
            boxShadow: "0 8px 40px #0004",
          }}
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-lg max-w-2xl w-full text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-2">{section.label}</h2>
            <p className="text-lg leading-relaxed text-white/90">{section.desc}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default OriginParallax;
