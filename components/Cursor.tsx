"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { FINE_MOTION, useMotionSafe } from "@/hooks/useMotionSafe";

const INTERACTIVE = "a, button, [data-cursor]";

/**
 * Minimal cursor: a small white dot that inverts whatever is underneath
 * (mix-blend-difference), so it works on both the black and white sections.
 * It grows over links, buttons, and anything tagged [data-cursor].
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);

  useMotionSafe(
    dot,
    (el) => {
      const html = document.documentElement;
      html.classList.add("has-custom-cursor");

      gsap.set(el, { xPercent: -50, yPercent: -50 });
      const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });
      let visible = false;

      const onMove = (e: PointerEvent) => {
        if (e.pointerType !== "mouse") return;
        if (!visible) {
          visible = true;
          gsap.set(el, { x: e.clientX, y: e.clientY });
          gsap.to(el, { autoAlpha: 1, duration: 0.3, overwrite: "auto" });
        }
        xTo(e.clientX);
        yTo(e.clientY);
      };

      const onOver = (e: PointerEvent) => {
        const hit = (e.target as Element | null)?.closest?.(INTERACTIVE);
        gsap.to(el, {
          scale: hit ? 4 : 1,
          duration: 0.5,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      const hide = () => gsap.to(el, { autoAlpha: 0, duration: 0.2, overwrite: "auto" });
      const unhide = () => {
        if (visible) gsap.to(el, { autoAlpha: 1, duration: 0.2, overwrite: "auto" });
      };

      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerover", onOver);
      html.addEventListener("mouseleave", hide);
      html.addEventListener("mouseenter", unhide);

      return () => {
        html.classList.remove("has-custom-cursor");
        window.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerover", onOver);
        html.removeEventListener("mouseleave", hide);
        html.removeEventListener("mouseenter", unhide);
      };
    },
    FINE_MOTION,
  );

  return (
    <div
      ref={dot}
      aria-hidden="true"
      className="pointer-events-none invisible fixed left-0 top-0 z-[100] h-3.5 w-3.5 rounded-full bg-white mix-blend-difference"
    />
  );
}
