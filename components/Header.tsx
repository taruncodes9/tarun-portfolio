import ScrollLink from "./ScrollLink";
import { profile } from "@/data/content";

const links = [
  { href: "#about", label: "About", mobile: false },
  { href: "#work", label: "Work", mobile: true },
  { href: "#experience", label: "Experience", mobile: false },
  { href: "#contact", label: "Contact", mobile: true },
];

export default function Header() {
  return (
    // mix-blend-difference keeps the text legible over the white contact section.
    <header
      data-hero
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 bg-black/10 px-4 py-4 text-white backdrop-blur-md backdrop-saturate-150 mix-blend-difference sm:px-6 sm:py-5 md:px-10"
    >
      <ScrollLink href="#top" className="shrink-0 font-semibold tracking-tight">
        {profile.name}
      </ScrollLink>
      <nav aria-label="Primary">
        <ul className="flex gap-4 text-xs sm:gap-6 sm:text-sm md:gap-8">
          {links.map((l) => (
            <li key={l.href} className={l.mobile ? "" : "hidden sm:block"}>
              <ScrollLink
                href={l.href}
                className="opacity-70 transition-opacity duration-300 hover:opacity-100"
              >
                {l.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
