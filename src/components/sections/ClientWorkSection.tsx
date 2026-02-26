import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import type { ProjectCardData } from "./types";

const clientProjects: ProjectCardData[] = [
  {
    name: "Intervised LLC",
    description: "Creative & technology studio — iOS apps, AI systems, experiential web",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://intervised.com",
  },
  {
    name: "Hondo School of Sounds",
    description:
      "Private & group music lessons for kids and adults — piano, violin, viola, flute, percussion. Package-based booking.",
    stack: ["Next.js", "Vercel"],
    href: "https://hondoschoolofsounds.vercel.app",
  },
  {
    name: "CoeurDesire",
    description: "Spiritual coaching & blessings platform",
    stack: ["Next.js", "TypeScript"],
    href: "https://coeur-desire.vercel.app",
  },
  {
    name: "music-mirror",
    description: "Interactive music experience — presence meets sound",
    stack: ["HTML", "CSS", "JS"],
    href: "https://music-mirror-six.vercel.app",
  },
];

export default function ClientWorkSection() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <SectionTitle title="deployed for clients" />
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {clientProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
