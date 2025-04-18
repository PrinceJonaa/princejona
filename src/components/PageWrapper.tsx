"use client";

import { useEffect, useRef } from "react";
import { fadeInPage } from "../animations/pageTransitions";

/**
 * PageWrapper
 * Wraps page content and animates entrance using Anime.js.
 */
export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fadeInPage(".page");
  }, []);

  return (
    <div ref={wrapperRef} className="page" style={{ opacity: 0, transform: "translateY(40px)" }}>
      {children}
    </div>
  );
}
