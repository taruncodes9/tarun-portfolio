"use client";

import { useRef } from "react";
import { useMarquee } from "@/hooks/useMarquee";

function List({ items, duplicate = false }: { items: readonly string[]; duplicate?: boolean }) {
  return (
    <ul
      // The duplicate exists only for the seamless loop: hide it from screen
      // readers, and drop it entirely for reduced-motion users (who get a
      // static, wrapping list instead).
      aria-hidden={duplicate || undefined}
      className={`flex shrink-0 items-center gap-10 pr-10 md:gap-16 md:pr-16 motion-reduce:flex-wrap ${
        duplicate ? "motion-reduce:hidden" : ""
      }`}
    >
      {items.map((item) => (
        <li
          key={item}
          className="whitespace-nowrap text-4xl font-bold tracking-tighter motion-reduce:whitespace-normal md:text-6xl"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Marquee({ items }: { items: readonly string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  useMarquee(ref);

  return (
    <div
      ref={ref}
      data-reveal
      role="group"
      aria-label="Skills"
      className="mt-24 overflow-hidden border-y border-white/15 py-8 md:mt-40"
    >
      <div data-marquee-track className="flex w-max motion-reduce:w-full motion-reduce:flex-wrap">
        <List items={items} />
        <List items={items} duplicate />
      </div>
    </div>
  );
}
