"use client";

import type { RefObject } from "react";
import { gsap } from "@/lib/gsap";
import { useMotionSafe } from "./useMotionSafe";

/**
 * Page-load sequence: headline lines rise out of their masks one by one,
 * then everything tagged [data-hero] (header, sub-headline, CTAs) fades in.
 */
export function useHeroIntro(scope: RefObject<HTMLElement | null>) {
  useMotionSafe(scope, (root) => {
    const q = gsap.utils.selector(root);

    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .fromTo(
        q("[data-line]"),
        { yPercent: 110, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, duration: 1.2, stagger: 0.12 },
      )
      .fromTo(
        q("[data-hero]"),
        { y: 24, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.1 },
        "-=0.7",
      );
  });
}
