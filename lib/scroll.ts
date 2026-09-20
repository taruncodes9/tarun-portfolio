import { gsap } from "@/lib/gsap";

/** Smooth-scrolls to a selector ("#work") or a pixel offset (0). Instant for reduced-motion users. */
export function scrollToTarget(target: string | number) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  gsap.to(window, {
    scrollTo: target,
    duration: reduce ? 0 : 1.2,
    ease: "power3.inOut",
    overwrite: "auto",
  });
}
