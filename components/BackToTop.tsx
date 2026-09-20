"use client";

import { ArrowUp } from "lucide-react";
import { scrollToTarget } from "@/lib/scroll";

export default function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => scrollToTarget(0)}
      className="group inline-flex items-center gap-2 text-sm font-medium text-black"
    >
      Back to top
      <ArrowUp
        aria-hidden="true"
        className="size-4 transition-transform duration-500 group-hover:-translate-y-1"
      />
    </button>
  );
}
