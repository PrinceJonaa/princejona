"use client";

import { useEffect } from "react";
import { animate } from "animejs";
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
  useEffect(() => {
    animate(".headline", {
      opacity: [0, 1],
      translateY: [20, 0],
      ease: "inOutExpo",
      duration: 2000,
      delay: 500,
    });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center space-y-12">
      <h1 className="headline text-4xl md:text-6xl font-bold opacity-0">
        I architect futures, decode illusions, and mirror truth.
      </h1>

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
        <a
          href="/story"
          className="px-6 py-3 border rounded-full hover:bg-black/20 transition"
        >
          Read My Story
        </a>
        <a
          href="/truths"
          className="px-6 py-3 border rounded-full hover:bg-black/20 transition"
        >
          Explore Core Truths
        </a>
      </div>
    </main>
  );
}
