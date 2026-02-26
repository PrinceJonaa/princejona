import type { ServiceCardData } from "./types";

interface ServiceCardProps {
  service: ServiceCardData;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="portfolio-card flex h-full flex-col p-6">
      <h3 className="text-2xl font-semibold leading-tight text-white">{service.title}</h3>
      <p className="portfolio-muted mt-3 flex-1 text-base leading-relaxed">{service.description}</p>
      <div className="mt-6">
        <a
          href={service.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-btn"
        >
          {service.ctaLabel}
        </a>
      </div>
    </article>
  );
}
