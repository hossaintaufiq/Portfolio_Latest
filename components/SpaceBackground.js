"use client";

import React, { useMemo } from "react";

/**
 * Lightweight client component that renders a space/black-hole background.
 * Uses CSS animations; no direct DOM fiddling or scripts.
 */

export default function SpaceBackground({ starCount = 90 }) {
  // Precompute star positions once per render
  const stars = useMemo(() => {
    return Array.from({ length: starCount }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: 3 + Math.random() * 6,
      delay: Math.random() * 6,
      opacity: 0.2 + Math.random() * 0.8,
    }));
  }, [starCount]);

  return (
    <div className="space-bg absolute inset-0 -z-10 pointer-events-none overflow-hidden">

      <div className="space-bg__core" />

      <div className="space-bg__ring ring--outer" />
      <div className="space-bg__ring ring--inner" />

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
