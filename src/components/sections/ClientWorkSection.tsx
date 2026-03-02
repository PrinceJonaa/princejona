import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import { clientProjects } from "@/lib/work";

export default function ClientWorkSection() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <SectionTitle title="deployed for clients" />
        <p className="portfolio-section-intro mt-4 text-base">
          Production websites and digital systems launched for artists, founders, and teams.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {clientProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
