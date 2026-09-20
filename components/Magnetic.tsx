"use client";

import type { ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";

/**
 * Wraps a button or link so it drifts toward the pointer. The padded outer
 * "field" widens the pull zone; negative margin cancels the padding so layout
 * is unchanged. Keep the wrapped element as the only child.
 */
export default function Magnetic({
  children,
  strength = 0.3,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useMagnetic<HTMLDivElement>(strength);

  return (
    <div ref={ref} className="-m-5 inline-block p-5">
      <div className="inline-block">{children}</div>
    </div>
  );
}
