"use client";

import { useRef } from "react";
import { useMarquee } from "@/hooks/useMarquee";

function List({
  items,
  duplicate = false,
  outline = false,
}: {
  items: readonly string[];
  duplicate?: boolean;
  outline?: boolean;
}) {
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
          className={`whitespace-nowrap text-4xl font-bold tracking-tighter motion-reduce:whitespace-normal md:text-6xl ${
            outline ? "marquee-outline" : ""
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function Track({
  items,
  direction,
  outline = false,
}: {
  items: readonly string[];
  direction: "left" | "right";
  outline?: boolean;
}) {
  return (
    <div
      data-marquee-track
      data-direction={direction}
      className="flex w-max motion-reduce:w-full motion-reduce:flex-wrap"
    >
      <List items={items} outline={outline} />
      <List items={items} duplicate outline={outline} />
    </div>
  );
}

export default function Marquee({ items }: { items: readonly string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  useMarquee(ref);
  const midpoint = Math.ceil(items.length / 2);
  const firstTrack = items.slice(0, midpoint);
  const secondTrack = items.slice(midpoint);

  return (
    <div
      ref={ref}
      data-reveal
      role="group"
      aria-label="Skills"
      className="mt-24 overflow-hidden border-y border-white/15 py-8 md:mt-40"
    >
      <div className="flex flex-col gap-6 md:gap-8">
        <Track items={firstTrack} direction="left" />
        <Track items={secondTrack} direction="right" outline />
      </div>
    </div>
  );
}
