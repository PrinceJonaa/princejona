export default function IntervisedSection() {
  return (
    <section className="portfolio-section portfolio-banner-edge">
      <div className="portfolio-banner">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Intervised LLC</h2>
        <p className="portfolio-banner-quote">&quot;Broadcast Outward&quot;</p>
        <p className="portfolio-muted mt-2 text-base md:text-lg">Founded 2021 · New York, NY</p>

        <ul className="mt-8 space-y-3 text-base leading-relaxed text-slate-100 md:text-lg">
          <li>→ iOS native apps — premium UX, on-device AI, offline-first</li>
          <li>→ AI memory systems — agents that maintain relational context</li>
          <li>→ Experiential web — sites that feel like entering something</li>
          <li>→ Brand identity — for artists, founders, and builders</li>
        </ul>

        <div className="mt-8">
          <a
            href="https://intervised.com"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-btn portfolio-btn-strong"
          >
            Start a Project →
          </a>
        </div>
      </div>
    </section>
  );
}
