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
      className="block relative p-6 border rounded-lg shadow-md transition-transform duration-300 bg-black/20 hover:bg-black/30 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:scale-105"
    >
      <h2 className="text-2xl font-semibold mb-2">{name}</h2>
      <p className="italic text-gray-300">{quote}</p>
    </Link>
  );
}
