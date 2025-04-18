/**
 * VisualJournal Component
 * Placeholder for a visual journal or changelog. Displays a list of projects/entries
 * as cards or a simple timeline.
 */
import React from "react";

const entries = [
  { title: "Prophecy Engine", date: "2025-02-01", summary: "Started building an AI for presence-based inquiry and creative flow.", color: "#7f9cf5" },
  { title: "The Mirror Project", date: "2024-12-10", summary: "Launched guided reflection spaces blending tech with meditative experience.", color: "#68d391" },
  { title: "Boundary Framework", date: "2024-10-18", summary: "Shared the first version of the IST/FUS framework for personal sovereignty.", color: "#f6ad55" },
];

const VisualJournal: React.FC = () => {
  return (
    <section style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: 40,
      paddingBottom: 40,
      width: "100%",
      gap: 32,
    }}>
      <h1 style={{ color: "#fff", fontSize: 32, marginBottom: 16, textShadow: "0 2px 8px #0008" }}>Mission Log</h1>
      <div style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: 600,
        gap: 24,
      }}>
        {entries.map((entry) => (
          <div
            key={entry.title}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg text-white space-y-2 mb-2"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div className="text-2xl font-bold text-white drop-shadow mb-1">{entry.title}</div>
            <div className="text-sm text-white/70 mb-1">{entry.date}</div>
            <div className="text-lg leading-relaxed text-white/90">{entry.summary}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisualJournal;
