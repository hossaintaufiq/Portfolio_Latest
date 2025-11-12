"use client";

import React, { useState, useEffect } from "react";

/**
 * Lightweight client component that renders a space/black-hole background.
 * Uses CSS animations and defers Math.random() until mounting to prevent Next.js Hydration Errors.
 */

// Helper function to generate the stars
function generateStars(starCount) {
  return Array.from({ length: starCount }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: 3 + Math.random() * 6,
    delay: Math.random() * 6,
    opacity: 0.2 + Math.random() * 0.8,
  }));
}

export default function SpaceBackground({ starCount = 90 }) {
  // 1. Initialize state with an empty array (safe for SSR)
  const [stars, setStars] = useState([]);

  // 2. Run the star generation ONLY after the component mounts on the client
  useEffect(() => {
    // We can run the calculation here because we are guaranteed to be on the client
    setStars(generateStars(starCount));
  }, [starCount]);

  return (
    <div className="space-bg absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      
      {/* Black Hole Core elements */}
      <div className="space-bg__core" />

      <div className="space-bg__ring ring--outer" />
      <div className="space-bg__ring ring--inner" />

      {/* Star rendering section */}
      <div className="space-bg__stars" aria-hidden>
        {stars.map((s, i) => (
          <span
            key={i}
            className="space-bg__star"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
              opacity: s.opacity,
            }}
          />
        ))}
      </div>
    </div>
  );
}