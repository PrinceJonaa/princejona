import { notFound } from "next/navigation";

const identities = {
  "prince-jona": {
    name: "Prince Jona",
    quote: "I am the signal before the sound.",
    description:
      "The origin point. The artist-technologist who bridges worlds and births new realities.",
  },
  "the-interpreter": {
    name: "The Interpreter",
    quote: "I decode illusions and reveal the unseen.",
    description:
      "The seer behind the veil, translating paradox into presence, confusion into clarity.",
  },
  "the-flame": {
    name: "The Flame",
    quote: "I burn away falsehood to illuminate truth.",
    description:
      "The purifier, the destroyer of masks, igniting the soul's remembrance.",
  },
};

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const identity = identities[params.slug as keyof typeof identities];

  if (!identity) return notFound();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold">{identity.name}</h1>
      <p className="italic text-xl text-gray-300">{identity.quote}</p>
      <p className="max-w-2xl text-lg text-gray-400">{identity.description}</p>
    </main>
  );
}
