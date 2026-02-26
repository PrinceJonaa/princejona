import type { ProjectCardData } from "./types";

interface ProjectCardProps {
  project: ProjectCardData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasLiveLink = Boolean(project.href) && !project.isPrivate;

  return (
    <article className="portfolio-card flex h-full flex-col p-6">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-2xl font-semibold leading-tight text-white">{project.name}</h3>
        <div className="flex flex-wrap items-center gap-2">
          {project.badge ? <span className="portfolio-badge">{project.badge}</span> : null}
          {project.isPrivate ? (
            <span className="portfolio-badge portfolio-badge-private">private</span>
          ) : null}
        </div>
      </div>

      <p className="portfolio-muted text-base leading-relaxed">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={`${project.name}-${item}`} className="portfolio-chip">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6">
        {hasLiveLink ? (
          <a href={project.href} target="_blank" rel="noopener noreferrer" className="portfolio-btn">
            Live Link
          </a>
        ) : (
          <button
            type="button"
            className="portfolio-btn portfolio-btn-disabled"
            disabled
            aria-disabled="true"
          >
            Private Repo
          </button>
        )}
      </div>
    </article>
  );
}
