import ServiceCard from "./ServiceCard";
import SectionTitle from "./SectionTitle";
import type { ServiceCardData } from "./types";

const services: ServiceCardData[] = [
  {
    title: "iOS App Development",
    description: "Native Swift apps, iOS 26 ready, on-device AI integration",
    ctaLabel: "Let's Build →",
    ctaHref: "https://intervised.com/services",
  },
  {
    title: "AI Systems",
    description: "Stateful agents, memory systems, truth-aware AI frameworks",
    ctaLabel: "Let's Build →",
    ctaHref: "https://intervised.com/services",
  },
  {
    title: "Web & Brand",
    description: "Experiential Next.js sites, full brand identity, booking systems",
    ctaLabel: "Let's Build →",
    ctaHref: "https://intervised.com/services",
  },
];

export default function HireMeSection() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <SectionTitle title="work with me" />
        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
