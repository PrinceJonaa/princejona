import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import type { ProjectCardData } from "./types";

const projects: ProjectCardData[] = [
  {
    name: "The-Arc",
    description: "Native iOS 26 app — actively shipping, hottest repo this week",
    stack: ["Swift 6", "iOS 26", "Xcode"],
    href: "https://github.com/PrinceJonaa/The-Arc",
  },
  {
    name: "Mirror-OS",
    description: "Phenomenological truth engine — AI that reasons relationally",
    stack: ["Python", "AI"],
    href: "https://github.com/PrinceJonaa/Mirror-OS",
  },
  {
    name: "StatefulREPL",
    description: "AI REPL with persistent memory across sessions",
    stack: ["Python", "AI Systems"],
    href: "https://github.com/PrinceJonaa/StatefulREPL",
  },
  {
    name: "Web Novel Reader",
    description: "Offline-first iOS story library with save-for-later",
    stack: ["Swift", "SwiftUI", "iOS"],
    href: "https://princejonaa.github.io/Web-Novel-Reader/",
  },
  {
    name: "elite-mind-glasses",
    description: "On-device AI that helps you see any situation through elite decision frameworks",
    stack: ["TypeScript", "On-device AI"],
    isPrivate: true,
  },
  {
    name: "VibeCloud",
    description: "Music × mood cloud sync IOS Music App— presence-aware audio",
    stack: ["Swift", "SwiftUI"],
    isPrivate: true,
  },
];

export default function BuiltSection() {
  return (
    <section id="built" className="portfolio-section">
      <div className="portfolio-container">
        <SectionTitle title="what i've shipped" />
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
