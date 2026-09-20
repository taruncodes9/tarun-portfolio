"use client";

import type { RefObject } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useMotionSafe } from "./useMotionSafe";

/** Fades in and lifts every [data-reveal] element once as it enters the viewport. */
export function useScrollReveal(scope: RefObject<HTMLElement | null>) {
  useMotionSafe(scope, (root) => {
    const q = gsap.utils.selector(root);
    const aboutCopy = q("[data-about-copy]")[0];
    const aboutWords = q("[data-about-word]");

    if (aboutCopy && aboutWords.length > 0) {
      gsap.fromTo(
        aboutWords,
        { y: "0.8em", autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.035,
          scrollTrigger: { trigger: aboutCopy, start: "top 82%", once: true },
        },
      );
    }

    q("[data-reveal]").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 32, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        },
      );
    });

    ScrollTrigger.refresh();
  });
}
