"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { animate } from "animejs";

interface IdentityCardProps {
  name: string;
  quote: string;
  slug: string;
}

export default function IdentityCard({ name, quote, slug }: IdentityCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    el.addEventListener("mouseenter", () => {
      animate(el, {
        scale: 1.05,
        duration: 300,
        ease: "inOutQuad",
      });
    });

    el.addEventListener("mouseleave", () => {
      animate(el, {
        scale: 1,
        duration: 300,
        ease: "inOutQuad",
      });
    });
  }, []);

  return (
    <Link href={`/identity/${slug}`}>
      <div
        ref={cardRef}
        className="relative p-6 border rounded-lg shadow-md cursor-pointer transition-transform duration-300 bg-black/20 hover:bg-black/30"
      >
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <p className="italic text-gray-300">{quote}</p>
      </div>
    </Link>
  );
}
