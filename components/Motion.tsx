"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import { useHeroIntro } from "@/hooks/useHeroIntro";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTimelineDraw } from "@/hooks/useTimelineDraw";

/** The single client boundary for page-wide animation. `children` stay server-rendered. */
export default function Motion({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useHeroIntro(ref);
  useScrollReveal(ref);
  useTimelineDraw(ref);

  // Web fonts change layout height; recalculate trigger positions once loaded.
  useEffect(() => {
    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh();
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
