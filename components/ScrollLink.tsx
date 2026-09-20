"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { scrollToTarget } from "@/lib/scroll";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

/** In-page anchor with a GSAP smooth scroll. Falls back to a normal hash jump without JS. */
export default function ScrollLink({ href, onClick, children, ...rest }: Props) {
  return (
    <a
      href={href}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        e.preventDefault();
        scrollToTarget(href);
        history.replaceState(null, "", href);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
