"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
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

export default function StoryContent() {
  return (
    <main className="flex flex-col items-center justify-center space-y-24 px-4 py-12">
      {sections.map((section, idx) => (
        <FadeInSection key={idx} title={section.title} text={section.text} />
      ))}
      <nav className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/truths"
          className="rounded-full border border-white/25 px-4 py-2 text-sm text-white transition-colors hover:border-white/45"
        >
          Explore Core Truths
        </Link>
        <Link
          href="/"
          className="rounded-full border border-white/25 px-4 py-2 text-sm text-white transition-colors hover:border-white/45"
        >
          Back to Portfolio
        </Link>
      </nav>
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
      className="max-w-3xl space-y-4 text-center"
    >
      <h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
      <p className="text-lg text-gray-300 md:text-xl">{text}</p>
    </motion.section>
  );
}
