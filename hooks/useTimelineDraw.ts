"use client";

import type { RefObject } from "react";
import { gsap } from "@/lib/gsap";
import { useMotionSafe } from "./useMotionSafe";

/** Draws the experience timeline line as you scroll, and pops each dot in as it's reached. */
export function useTimelineDraw(scope: RefObject<HTMLElement | null>) {
  useMotionSafe(scope, (root) => {
    const q = gsap.utils.selector(root);
    const track = q("[data-timeline]")[0];
    const line = q("[data-timeline-line]")[0];
    if (!track || !line) return;

    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        transformOrigin: "top center",
        scrollTrigger: {
          trigger: track,
          start: "top 70%",
          end: "bottom 60%",
          scrub: 0.6,
        },
      },
    );

    q("[data-timeline-dot]").forEach((dot) => {
      gsap.fromTo(
        dot,
        { scale: 0 },
        {
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: { trigger: dot, start: "top 75%", once: true },
        },
      );
    });
  });
}
