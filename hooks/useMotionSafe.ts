"use client";

import type { RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const FINE_MOTION =
  "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

type Cleanup = void | (() => void);

/**
 * Runs `setup` only when the media query matches (by default: the visitor has
 * NOT asked for reduced motion). Everything GSAP creates inside is reverted on
 * unmount, or when the preference changes, so content is never left hidden.
 */
export function useMotionSafe(
  scope: RefObject<HTMLElement | null>,
  setup: (root: HTMLElement) => Cleanup,
  query: string = MOTION_OK,
) {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;
      const mm = gsap.matchMedia();
      mm.add(query, () => setup(root));
      return () => mm.revert();
    },
    { scope },
  );
}
