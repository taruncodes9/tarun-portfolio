"use client";

import type { RefObject } from "react";
import { gsap } from "@/lib/gsap";
import { useMotionSafe } from "./useMotionSafe";

/**
 * Infinite marquees. Each track holds two identical lists, so moving it by
 * half its width lands exactly on the duplicate copy and loops seamlessly.
 * Eases down to a crawl while hovered.
 */
export function useMarquee(scope: RefObject<HTMLElement | null>, duration = 40) {
  useMotionSafe(scope, (root) => {
    const tracks = Array.from(root.querySelectorAll<HTMLElement>("[data-marquee-track]"));
    if (tracks.length === 0) return;
    const pixelsPerSecond = 70;

    const loops = tracks.map((track) => {
      const direction = track.dataset.direction === "right" ? 1 : -1;
      gsap.set(track, { xPercent: direction === 1 ? -50 : 0 });
      return gsap.to(track, {
        xPercent: direction === 1 ? 0 : -50,
        ease: "none",
        duration: (track.scrollWidth / 2) / pixelsPerSecond || duration,
        repeat: -1,
      });
    });

    const slow = () =>
      gsap.to(loops, { timeScale: 0.2, duration: 0.6, overwrite: "auto" });
    const normal = () =>
      gsap.to(loops, { timeScale: 1, duration: 0.6, overwrite: "auto" });

    root.addEventListener("pointerenter", slow);
    root.addEventListener("pointerleave", normal);
    return () => {
      root.removeEventListener("pointerenter", slow);
      root.removeEventListener("pointerleave", normal);
    };
  });
}
