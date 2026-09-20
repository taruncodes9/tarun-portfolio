"use client";

import type { RefObject } from "react";
import { gsap } from "@/lib/gsap";
import { useMotionSafe } from "./useMotionSafe";

/**
 * Infinite marquee. The track holds two identical lists, so moving it -50%
 * lands exactly on the start of the second copy and loops seamlessly.
 * Eases down to a crawl while hovered.
 */
export function useMarquee(scope: RefObject<HTMLElement | null>, duration = 40) {
  useMotionSafe(scope, (root) => {
    const track = root.querySelector<HTMLElement>("[data-marquee-track]");
    if (!track) return;

    const loop = gsap.to(track, { xPercent: -50, ease: "none", duration, repeat: -1 });

    const slow = () => gsap.to(loop, { timeScale: 0.2, duration: 0.6, overwrite: "auto" });
    const normal = () => gsap.to(loop, { timeScale: 1, duration: 0.6, overwrite: "auto" });

    root.addEventListener("pointerenter", slow);
    root.addEventListener("pointerleave", normal);
    return () => {
      root.removeEventListener("pointerenter", slow);
      root.removeEventListener("pointerleave", normal);
    };
  });
}
