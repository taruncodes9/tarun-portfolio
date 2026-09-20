"use client";

import type { RefObject } from "react";
import { gsap } from "@/lib/gsap";
import { useMotionSafe } from "./useMotionSafe";

/** Fades in and lifts every [data-reveal] element once as it enters the viewport. */
export function useScrollReveal(scope: RefObject<HTMLElement | null>) {
  useMotionSafe(scope, (root) => {
    const q = gsap.utils.selector(root);

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
  });
}
