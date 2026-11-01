"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

const INTERACTIVE = "a, button, [role='button'], input, textarea, select, [data-interactive]";

export default function Cursor() {
  const haloRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop devices with a fine pointer (mouse/trackpad)
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || prefersReducedMotion) return;

    const halo = haloRef.current;
    const dot = dotRef.current;
    if (!halo || !dot) return;

    // Center both elements
    gsap.set([halo, dot], { xPercent: -50, yPercent: -50, autoAlpha: 0 });

    const xHaloTo = gsap.quickTo(halo, "x", { duration: 0.5, ease: "power2.out" });
    const yHaloTo = gsap.quickTo(halo, "y", { duration: 0.5, ease: "power2.out" });

    const xDotTo = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power1.out" });
    const yDotTo = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power1.out" });

    let isVisible = false;

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;

      if (!isVisible) {
        isVisible = true;
        gsap.set([halo, dot], { x: e.clientX, y: e.clientY });
        gsap.to([halo, dot], { autoAlpha: 1, duration: 0.3 });
      }

      xHaloTo(e.clientX);
      yHaloTo(e.clientY);
      xDotTo(e.clientX);
      yDotTo(e.clientY);
    };

    const onPointerOver = (e: PointerEvent) => {
      const target = (e.target as Element | null)?.closest?.(INTERACTIVE);
      if (target) {
        gsap.to(halo, {
          scale: 1.8,
          opacity: 0.35,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(dot, {
          scale: 1.5,
          backgroundColor: "#E50914",
          duration: 0.3,
        });
      } else {
        gsap.to(halo, {
          scale: 1,
          opacity: 0.18,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(dot, {
          scale: 1,
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          duration: 0.3,
        });
      }
    };

    const onMouseLeave = () => {
      gsap.to([halo, dot], { autoAlpha: 0, duration: 0.25 });
      isVisible = false;
    };

    const onMouseEnter = () => {
      gsap.to([halo, dot], { autoAlpha: 1, duration: 0.25 });
      isVisible = true;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Netflix Red Ambient Light Halo (Large soft glowing red flare) */}
      <div
        ref={haloRef}
        aria-hidden="true"
        className="pointer-events-none invisible fixed left-0 top-0 z-[60] h-28 w-28 rounded-full bg-red-600/20 blur-2xl will-change-transform"
      />

      {/* Modern micro-dot indicator */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none invisible fixed left-0 top-0 z-[61] h-1.5 w-1.5 rounded-full bg-white/40 ring-1 ring-white/20 will-change-transform transition-colors"
      />
    </>
  );
}
