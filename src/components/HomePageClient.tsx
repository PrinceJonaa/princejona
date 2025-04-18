"use client"; // Mark this as a Client Component

import { useEffect } from "react";
import { animate, stagger } from "animejs";
import PageWrapper from "./PageWrapper"; // Adjust path if necessary
import IdentityCard from "./IdentityCard"; // Adjust path if necessary

// Define identities here or pass as props if needed elsewhere
const identities = [
  {
    name: "Prince Jona",
    quote: "I am the signal before the sound.",
    slug: "prince-jona",
  },
  {
    name: "The Interpreter",
    quote: "I decode illusions and reveal the unseen.",
    slug: "the-interpreter",
  },
  {
    name: "The Flame",
    quote: "I burn away falsehood to illuminate truth.",
    slug: "the-flame",
  },
];

export default function HomePageClient() {
  // useEffect hook for animations
  useEffect(() => {
    animate(".headline", {
      opacity: [0, 1],
      translateY: [20, 0],
      ease: "inOutExpo",
      duration: 2000,
      delay: 500,
    });
    animate(".identity-card", {
      opacity: { to: 1, duration: 800 },
      translateY: { to: 0, duration: 800 },
      delay: stagger(150),
      ease: "outQuad",
    });
  }, []);

  // Return the JSX structure previously in page.tsx
  return (
    <PageWrapper>
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 1rem",
          gap: "3rem",
          textAlign: "center",
        }}
      >
        <h1
          className="headline"
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#fff",
            textShadow: "0 2px 8px #0008",
            opacity: 0, // Initial state for animation
            marginBottom: "1.5rem",
          }}
        >
          Prince Jona: NYC Artist, Technologist & Truth Seeker
        </h1>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
            width: "100%",
            maxWidth: "72rem",
            padding: "0 1rem",
          }}
        >
          {/* Responsive: 3 columns on medium+ screens */}
          <style>
            {`
              @media (min-width: 768px) {
                .home-identities {
                  grid-template-columns: repeat(3, 1fr) !important;
                }
              }
            `}
          </style>
          <div className="home-identities" style={{ display: "contents" }}>
            {identities.map((identity) => (
              <IdentityCard
                key={identity.slug}
                name={identity.name}
                quote={identity.quote}
                slug={identity.slug}
                textColor="#fff"
              />
            ))}
          </div>
        </section>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
            marginTop: "3rem",
          }}
        >
          <a
            href="/story"
            className="cta-btn"
            style={{
              padding: "0.75rem 1.5rem",
              background: "#4f46e5",
              color: "#fff",
              borderRadius: "1rem",
              boxShadow: "0 4px 16px 0 rgba(79,70,229,0.18)",
              border: "1px solid #6366f1",
              fontWeight: 600,
              fontSize: "1.125rem",
              transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Read My Story
          </a>
          <a
            href="/truths"
            className="cta-btn"
            style={{
              padding: "0.75rem 1.5rem",
              background: "#4f46e5",
              color: "#fff",
              borderRadius: "1rem",
              boxShadow: "0 4px 16px 0 rgba(79,70,229,0.18)",
              border: "1px solid #6366f1",
              fontWeight: 600,
              fontSize: "1.125rem",
              transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Explore Core Truths
          </a>
        </div>
      </main>
    </PageWrapper>
  );
}
