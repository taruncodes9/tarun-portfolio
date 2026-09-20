import Magnetic from "./Magnetic";
import ScrollLink from "./ScrollLink";
import { profile } from "@/data/content";

const lines = ["Full-Stack", "Web", "Developer."];

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-svh flex-col justify-end px-6 pb-10 pt-32 md:px-10 md:pb-14"
    >
      <h1
        aria-label={lines.join(" ")}
        className="text-[length:clamp(3rem,15.5vw,16rem)] font-bold leading-[0.88] tracking-tightest"
      >
        {lines.map((line) => (
          // The wrapper is the mask. Vertical padding (cancelled by negative
          // margin) stops descenders like the "p" in "Developer" from clipping.
          <span
            key={line}
            aria-hidden="true"
            className="-my-[0.1em] block overflow-hidden py-[0.1em]"
          >
            <span data-line className="block">
              {line}
            </span>
          </span>
        ))}
      </h1>

      <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
        <p data-hero className="max-w-md text-lg text-gray-400 md:text-xl">
          {profile.tagline}
        </p>

        <div data-hero className="flex flex-wrap items-center gap-x-6 gap-y-5 sm:gap-x-10">
          <Magnetic>
            <ScrollLink
              href="#work"
              className="inline-flex h-14 items-center rounded-full bg-white px-8 text-base font-semibold text-black transition-colors duration-300 hover:bg-gray-200"
            >
              View Work
            </ScrollLink>
          </Magnetic>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-gray-400 underline decoration-gray-600 underline-offset-8 transition-colors duration-300 hover:text-white hover:decoration-white"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
