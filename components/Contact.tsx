import { ArrowUpRight } from "lucide-react";
import BackToTop from "./BackToTop";
import Magnetic from "./Magnetic";
import { profile } from "@/data/content";

const externalLinks = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
];

export default function Contact() {
  return (
    // Inverted section: the one place the page flips to a white background.
    <footer id="contact" className="bg-white px-6 pb-8 pt-32 text-black md:px-10 md:pt-48">
      <h2
        data-reveal
        className="text-[length:clamp(3.25rem,13vw,14rem)] font-bold leading-[0.88] tracking-tightest"
      >
        Let&apos;s build
        <br />
        something.
      </h2>

      <div
        data-reveal
        className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-6 md:mt-24"
      >
        <Magnetic>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-14 items-center rounded-full bg-black px-8 text-base font-semibold text-white transition-colors duration-300 hover:bg-gray-800"
          >
            {profile.email}
          </a>
        </Magnetic>

        {externalLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xl font-medium underline decoration-gray-400 underline-offset-8 transition-colors duration-300 hover:decoration-black"
          >
            {link.label}
            <ArrowUpRight aria-hidden="true" className="size-5" />
          </a>
        ))}
      </div>

      <div className="mt-24 flex items-center justify-between border-t border-black/15 pt-6 md:mt-40">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <BackToTop />
      </div>
    </footer>
  );
}
