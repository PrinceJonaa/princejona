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

export default function TruthsContent() {
  return (
    <main className="flex flex-col items-center justify-center space-y-12 px-4 py-12">
      <h1 className="text-center text-4xl font-bold md:text-5xl">Core Truths</h1>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
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
    <motion.button
      type="button"
      onClick={() => setFlipped(!flipped)}
      className="perspective h-full w-full cursor-pointer appearance-none rounded-lg text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      aria-pressed={flipped}
      initial={false}
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={{ duration: 0.6 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="flex h-full w-full items-center justify-center rounded-lg border bg-black/20 p-6 text-lg shadow-md hover:bg-black/30"
        style={{
          backfaceVisibility: "hidden",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {text}
      </div>
    </motion.button>
  );
}
