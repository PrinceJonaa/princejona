import type { Metadata } from "next";
// We might replace or refactor the Offerings component later
// import Offerings from "../../components/Offerings";

export const metadata: Metadata = {
  title: "Services & Offerings | Intervised LLC",
  description:
    "Explore creative, tech, spiritual, and marketing services offered by Prince Jona through Intervised LLC. Videography, AI solutions, coaching, and more.",
  openGraph: {
    title: "Services & Offerings | Intervised LLC",
    description: "Creative, tech, and spiritual solutions by Prince Jona.",
    url: "https://princejona.com/offerings",
  },
  twitter: {
    title: "Services & Offerings | Intervised LLC",
    description: "Explore services from Intervised LLC.",
  },
};

// Define service packages data (can be moved to a separate file later)
const servicePackages = [
  {
    name: "VISION STARTER",
    description: "Great for artists, creators, and small businesses",
    price: "$250",
    features: [
      "1 Music Video or Reel (up to 60s)",
      "10 Edited Photos",
      "Basic Mixing or Mastering",
      "1 Social Post Strategy (Caption + Hashtags)",
    ],
    schemaType: "Service",
    serviceCategory: "Creative Services", // Or more specific
  },
  {
    name: "CREATOR MODE",
    description: "For consistent content creators, brands & ministries",
    price: "$600",
    features: [
      "3 Reels or Shortform Videos",
      "25 Edited Photos",
      "Full Song Mixing + Mastering",
      "VCDF Viral Caption Strategy",
      "1-Hour Strategy Call (Brand, AI, or Social)",
    ],
    schemaType: "Service",
    serviceCategory: "Creative Services & Marketing",
  },
  {
    name: "TRUTH BROADCAST BUNDLE",
    description: "Your full-stack brand activation with AI, tech, and spirit",
    price: "$1500",
    features: [
      "5 Reels / Music Videos",
      "1 Livestream Setup",
      "AI Bot / Chat Assistant Setup (IST/FUS)",
      "Social Media Growth Plan",
      "Website + Portfolio Page Setup",
      "1 Custom Workshop or Devotional Pack",
    ],
    schemaType: "Service",
    serviceCategory: "Comprehensive Creative, Tech & Spiritual Solutions",
  },
];

/**
 * Offerings Page
 * Details the services provided by Intervised LLC.
 */
export default function OfferingsPage() {
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Intervised LLC Services & Offerings",
    url: "https://princejona.com/offerings",
    description: metadata.description,
    isPartOf: {
      "@type": "WebSite",
      url: "https://princejona.com",
      name: "Prince Jona",
    },
    mainEntity: {
      // Could list the service packages here if not rendering them individually with schema
      "@type": "ItemList",
      itemListElement: servicePackages.map((pkg, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: pkg.name,
          description: pkg.description,
          // Potentially add URL fragment: url: `https://princejona.com/offerings#${pkg.name.toLowerCase().replace(' ', '-')}`
        },
      })),
    },
    provider: {
      // Link to the Organization schema defined in layout
      "@type": "Organization",
      "@id": "https://princejona.com/#intervised",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <main
        style={{
          minHeight: "100vh",
          background: "#171a25",
          color: "#fff",
          padding: "3rem 1rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "2rem",
            textShadow: "0 2px 8px #0008",
          }}
        >
          Intervised LLC - Services & Offerings
        </h1>
        <p
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto 2rem auto",
            fontSize: "1.1rem",
            lineHeight: 1.6,
            color: "#ccc",
          }}
        >
          Blending art, coding, psychology, and street wisdom into experiences
          that awaken, uplift, and resonate. Explore our packages designed for
          impact.
        </p>

        {/* Section for Service Packages */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "2rem auto",
          }}
        >
          {servicePackages.map((pkg) => (
            // Individual Service Card Component (to be created or integrated)
            <div
              key={pkg.name}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "1rem",
                padding: "1.5rem",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* Add Service Schema for individual package here */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": pkg.schemaType, // "Service"
                    name: pkg.name,
                    description: pkg.description,
                    category: pkg.serviceCategory,
                    provider: {
                      "@type": "Organization",
                      "@id": "https://princejona.com/#intervised",
                    },
                    // Potentially add offers property with price
                    offers: {
                      "@type": "Offer",
                      price: pkg.price,
                      priceCurrency: "USD", // Assuming USD
                    },
                    // Add areaServed if applicable
                  }),
                }}
              />
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                  color: "#a78bfa", // Accent color
                }}
              >
                {pkg.name}
              </h2>
              <p style={{ fontStyle: "italic", marginBottom: "1rem", color: "#bbb" }}>
                {pkg.description}
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
                {pkg.features.map((feature) => (
                  <li key={feature} style={{ marginBottom: "0.5rem" }}>{feature}</li>
                ))}
              </ul>
              <p style={{ fontSize: "1.2rem", fontWeight: "bold", textAlign: "right" }}>
                {pkg.price}
              </p>
              {/* Add Booking Link/Button Here */}
              {/* <a href="YOUR_SQUARE_LINK" style={{...}}>Book Now</a> */}
            </div>
          ))}
        </section>

        {/* Placeholder for other service pillars if not covered by packages */}
        {/* <section><h2>Other Services (Creative, Tech, Spiritual, Marketing)</h2>...</section> */}

        {/* <Offerings />  We are replacing this for now */}
      </main>
    </>
  );
}
