"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { animate } from "animejs";

interface IdentityCardProps {
  name: string;
  quote: string;
  slug: string;
  textColor?: string; // Optional custom color for name/title
}

export default function IdentityCard({ name, quote, slug, textColor }: IdentityCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    el.addEventListener("mouseenter", () => {
      animate(el, {
        scale: 1.05,
        duration: 300,
        ease: "inOutQuad",
      });
    });

    el.addEventListener("mouseleave", () => {
      animate(el, {
        scale: 1,
        duration: 300,
        ease: "inOutQuad",
      });
    });
  }, []);

  return (
    <Link href={`/identity/${slug}`}>
      <div
        ref={cardRef}
        className="identity-card"
        id={slug}
        style={{
          position: "relative",
          padding: "1.5rem",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "0.75rem",
          boxShadow: "0 2px 12px 0 rgba(0,0,0,0.12)",
          background: "rgba(0,0,0,0.20)",
          cursor: "pointer",
          transition: "transform 0.3s, background 0.3s",
          opacity: 0,
          transform: "translateY(20px)",
        }}
      >
        <h2
          style={{
            color: textColor || "#fff",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
          }}
        >
          {name}
        </h2>
        <p style={{ color: "#fff", opacity: 0.8, fontStyle: "italic" }}>{quote}</p>
      </div>
    </Link>
  );
}
