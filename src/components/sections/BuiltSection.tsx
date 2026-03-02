import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import { builtProjects } from "@/lib/work";

export default function BuiltSection() {
  return (
    <section id="built" className="portfolio-section">
      <div className="portfolio-container">
        <SectionTitle title="what i've shipped" />
        <p className="portfolio-section-intro mt-4 text-base">
          Core products, private R&amp;D tracks, and apps in active development.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {builtProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
