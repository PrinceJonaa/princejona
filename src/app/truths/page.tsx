"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const truths = [
  "What you resist is where your identity still lives.",
  "Presence doesn’t need proof. Only the mind demands validation.",
  "Silence is the only true answer.",
  "The seeker is the sought.",
  "Truth is not found, it is revealed.",
];

export default function TruthsPage() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-12 space-y-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center">Core Truths</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {truths.map((truth) => (
          <TruthCard key={truth} text={truth} />
        ))}
      </div>
    </main>
  );
}

function TruthCard({ text }: { text: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      onClick={() => setFlipped(!flipped)}
      className="cursor-pointer perspective"
      initial={false}
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={{ duration: 0.6 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="p-6 border rounded-lg shadow-md bg-black/20 hover:bg-black/30 text-lg flex items-center justify-center"
        style={{
          backfaceVisibility: "hidden",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {text}
      </div>
    </motion.div>
  );
}
