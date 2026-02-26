"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const sections = [
  {
    title: "The Call",
    text: "A whisper beyond the noise, the first glimpse of a deeper truth calling you forth.",
  },
  {
    title: "The Conflict",
    text: "Family, culture, and paradox — the friction that forges the seeker within.",
  },
  {
    title: "The Revelation",
    text: "Unity unveiled. The illusion of separation dissolves into presence.",
  },
  {
    title: "The Mission",
    text: "To mirror truth, architect futures, and awaken the field in all who listen.",
  },
];

export default function StoryPage() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-12 space-y-24">
      {sections.map((section, idx) => (
        <FadeInSection key={idx} title={section.title} text={section.text} />
      ))}
    </main>
  );
}

function FadeInSection({ title, text }: { title: string; text: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut" }}
      className="max-w-3xl text-center space-y-4"
    >
      <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
      <p className="text-lg md:text-xl text-gray-300">{text}</p>
    </motion.section>
  );
}
