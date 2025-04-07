"use client";

import React from "react";
import { useRef } from "react";
import { animate } from "animejs";

export default function Home() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    if (headingRef.current) {
      animate(headingRef.current, {
        translateY: -20,
        direction: "alternate",
        duration: 500,
        easing: "easeInOutQuad",
      });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1
        ref={headingRef}
        onClick={handleClick}
        className="text-4xl font-bold cursor-pointer"
      >
        Click Me
      </h1>
    </main>
  );
}
