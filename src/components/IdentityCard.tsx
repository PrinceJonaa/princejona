"use client";

import Link from "next/link";

interface IdentityCardProps {
  name: string;
  quote: string;
  slug: string;
}

export default function IdentityCard({ name, quote, slug }: IdentityCardProps) {
  return (
    <Link
      href={`/identity/${slug}`}
      className="block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background group"
    >
      <div
        className="relative p-6 border rounded-lg shadow-md cursor-pointer transition-transform duration-300 bg-black/20 group-hover:bg-black/30 group-focus-visible:bg-black/30 group-hover:scale-105 group-focus-visible:scale-105"
      >
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <p className="italic text-gray-300">{quote}</p>
      </div>
    </Link>
  );
}
