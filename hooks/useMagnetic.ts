"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { FINE_MOTION, useMotionSafe } from "./useMotionSafe";

/**
 * Magnetic hover. Attach the returned ref to a wrapper ("field"); its first
 * child is pulled toward the pointer while the pointer is inside the field.
 * Desktop pointers only, and skipped for reduced-motion users.
 */
export function useMagnetic<T extends HTMLElement = HTMLDivElement>(strength = 0.3) {
  const ref = useRef<T>(null);

  useMotionSafe(
    ref,
    (field) => {
      const target = field.firstElementChild as HTMLElement | null;
      if (!target) return;

      const xTo = gsap.quickTo(target, "x", { duration: 0.7, ease: "power3.out" });
      const yTo = gsap.quickTo(target, "y", { duration: 0.7, ease: "power3.out" });

      const onMove = (e: PointerEvent) => {
        // Measure the field (which never moves), not the target (which does).
        const r = field.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * strength);
        yTo((e.clientY - (r.top + r.height / 2)) * strength);
      };
      const onLeave = () => {
        xTo(0);
        yTo(0);
      };

      field.addEventListener("pointermove", onMove);
      field.addEventListener("pointerleave", onLeave);
      return () => {
        field.removeEventListener("pointermove", onMove);
        field.removeEventListener("pointerleave", onLeave);
      };
    },
    FINE_MOTION,
  );

  return ref;
}
