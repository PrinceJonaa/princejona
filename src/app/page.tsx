"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import IdentityCard from "../components/IdentityCard";

const identities = [
  {
    name: "Prince Jona",
    quote: "I am the signal before the sound.",
    slug: "prince-jona",
  },
  {
    name: "The Interpreter",
    quote: "I decode illusions and reveal the unseen.",
    slug: "the-interpreter",
  },
  {
    name: "The Flame",
    quote: "I burn away falsehood to illuminate truth.",
    slug: "the-flame",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center space-y-12">
      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
      >
        I architect futures, decode illusions, and mirror truth.
      </motion.h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {identities.map((identity) => (
          <IdentityCard
            key={identity.slug}
            name={identity.name}
            quote={identity.quote}
            slug={identity.slug}
          />
        ))}
      </section>
      <div className="flex flex-wrap justify-center gap-4 mt-12">
        <Link
          href="/story"
          className="px-6 py-3 border rounded-full hover:bg-black/20 transition focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background focus:outline-none"
        >
          Read My Story
        </Link>
        <Link
          href="/truths"
          className="px-6 py-3 border rounded-full hover:bg-black/20 transition focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background focus:outline-none"
        >
          Explore Core Truths
        </Link>
      </div>
    </main>
  );
}
