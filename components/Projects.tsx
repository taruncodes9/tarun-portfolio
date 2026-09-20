"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { FINE_MOTION, useMotionSafe } from "@/hooks/useMotionSafe";
import { projects } from "@/data/content";
import { ProjectVisual } from "./ProjectVisuals";

const GAP = 40; // px between the pointer and the preview panel

export default function Projects() {
  const root = useRef<HTMLElement>(null);

  // Hover behaviour (fine pointers only): the hovered title nudges right, the
  // other rows dim, and a schematic preview follows the pointer.
  useMotionSafe(
    root,
    (section) => {
      const list = section.querySelector<HTMLElement>("[data-project-list]");
      const preview = section.querySelector<HTMLElement>("[data-project-preview]");
      if (!list || !preview) return;

      const rows = gsap.utils.toArray<HTMLElement>("[data-project-row]", list);
      const inners = rows.map((r) => r.querySelector<HTMLElement>("[data-project-inner]"));
      const titles = rows.map((r) => r.querySelector<HTMLElement>("[data-project-title]"));
      const visuals = gsap.utils.toArray<HTMLElement>("[data-project-visual]", preview);

      gsap.set(preview, { yPercent: -50, scale: 0.92, autoAlpha: 0 });
      const xTo = gsap.quickTo(preview, "x", { duration: 0.6, ease: "power3.out" });
      const yTo = gsap.quickTo(preview, "y", { duration: 0.6, ease: "power3.out" });

      let side: "left" | "right" = "right";
      let shown = false;

      // Follow the pointer; flip to its left side near the right edge of the screen.
      const place = (e: PointerEvent, instant: boolean) => {
        const nextSide =
          e.clientX + GAP + preview.offsetWidth > window.innerWidth - 16 ? "left" : "right";
        if (nextSide !== side || instant) {
          side = nextSide;
          const xPercent = side === "left" ? -100 : 0;
          if (instant) gsap.set(preview, { xPercent });
          else gsap.to(preview, { xPercent, duration: 0.5, ease: "power3.out" });
        }
        const x = e.clientX + (side === "left" ? -GAP : GAP);
        if (instant) gsap.set(preview, { x, y: e.clientY });
        else {
          xTo(x);
          yTo(e.clientY);
        }
      };

      const show = (index: number, e: PointerEvent) => {
        visuals.forEach((v, i) => gsap.set(v, { autoAlpha: i === index ? 1 : 0 }));
        inners.forEach((el, i) =>
          gsap.to(el, {
            opacity: i === index ? 1 : 0.3,
            duration: 0.4,
            ease: "power3.out",
            overwrite: "auto",
          }),
        );
        titles.forEach((el, i) =>
          gsap.to(el, {
            x: i === index ? 24 : 0,
            duration: 0.6,
            ease: "power3.out",
            overwrite: "auto",
          }),
        );
        if (!shown) {
          shown = true;
          place(e, true);
          gsap.to(preview, {
            autoAlpha: 1,
            scale: 1,
            duration: 0.5,
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      };

      const hide = () => {
        shown = false;
        inners.forEach((el) =>
          gsap.to(el, { opacity: 1, duration: 0.4, ease: "power3.out", overwrite: "auto" }),
        );
        titles.forEach((el) =>
          gsap.to(el, { x: 0, duration: 0.6, ease: "power3.out", overwrite: "auto" }),
        );
        gsap.to(preview, {
          autoAlpha: 0,
          scale: 0.92,
          duration: 0.35,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      const onMove = (e: PointerEvent) => {
        if (shown) place(e, false);
      };

      const enterHandlers = rows.map((row, i) => {
        const handler = (e: PointerEvent) => show(i, e);
        row.addEventListener("pointerenter", handler);
        return handler;
      });
      list.addEventListener("pointermove", onMove);
      list.addEventListener("pointerleave", hide);

      return () => {
        rows.forEach((row, i) => row.removeEventListener("pointerenter", enterHandlers[i]));
        list.removeEventListener("pointermove", onMove);
        list.removeEventListener("pointerleave", hide);
      };
    },
    FINE_MOTION,
  );

  return (
    <section ref={root} id="work" className="px-6 py-32 md:px-10 md:py-48">
      <h2 data-reveal className="mb-12 text-base font-medium md:mb-20">
        Selected projects
      </h2>

      <ul data-project-list className="border-t border-white/15">
        {projects.map((project) => (
          <li
            key={project.title}
            data-reveal
            data-project-row
            data-cursor
            className="border-b border-white/15"
          >
            <div
              data-project-inner
              className="grid gap-5 py-10 md:grid-cols-12 md:gap-8 md:py-14"
            >
              <h3
                data-project-title
                className="text-[length:clamp(2rem,5.2vw,5rem)] font-bold leading-none tracking-tighter md:col-span-7"
              >
                {project.title}
              </h3>
              <div className="md:col-span-5 md:pt-1">
                <p className="text-lg text-gray-400">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/*
        Keep this a direct child of <section>. It is position: fixed, and any
        ancestor with a transform (like the reveal wrappers) would re-anchor it.
      */}
      <div
        data-project-preview
        aria-hidden="true"
        className="pointer-events-none invisible fixed left-0 top-0 z-40 h-60 w-80 overflow-hidden bg-white text-black"
      >
        {projects.map((project) => (
          <div key={project.title} data-project-visual className="invisible absolute inset-0">
            <ProjectVisual kind={project.visual} />
          </div>
        ))}
      </div>
    </section>
  );
}
