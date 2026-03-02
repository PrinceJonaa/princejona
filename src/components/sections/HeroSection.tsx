import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="portfolio-section pb-10 pt-20">
      <div className="portfolio-container text-center">
        <p className="portfolio-kicker">Brooklyn, NY · Intervised LLC</p>
        <h1 className="portfolio-title-display mt-4 font-bold text-white">Prince Jona</h1>
        <p className="portfolio-muted mx-auto mt-4 max-w-4xl text-base md:text-xl">
          iOS Developer · AI Systems Builder · Full-Stack Engineer · Founder
        </p>
        <p className="portfolio-section-intro mx-auto mt-4 text-base md:text-lg">
          Founder of Intervised LLC · Building The-Arc on iOS 26 · Shipping AI memory systems · Based
          in Brooklyn, NY
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="#built" className="portfolio-btn">
            View Work
          </Link>
          <Link href="#ai-overview" className="portfolio-btn portfolio-btn-secondary">
            AI Overview
          </Link>
          <a
            href="https://intervised.com/services"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-btn portfolio-btn-secondary"
          >
            Hire Me
          </a>
          <a
            href="https://github.com/PrinceJonaa"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-btn portfolio-btn-secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
