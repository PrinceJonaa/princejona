import Link from "next/link";

interface IdentityCardProps {
  name: string;
  quote: string;
  slug: string;
}

export default function IdentityCard({ name, quote, slug }: IdentityCardProps) {
  return (
    <Link href={`/identity/${slug}`}>
      <div
        className="relative p-6 border rounded-lg shadow-md cursor-pointer transition-transform duration-300 ease-in-out bg-black/20 hover:bg-black/30 hover:scale-105"
      >
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <p className="italic text-gray-300">{quote}</p>
      </div>
    </Link>
  );
}
