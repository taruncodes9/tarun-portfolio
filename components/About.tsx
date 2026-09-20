import Marquee from "./Marquee";
import { profile, skills } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="px-6 py-32 md:px-10 md:py-48">
      <div className="grid gap-10 md:grid-cols-12">
        <h2 data-reveal className="text-base font-medium md:col-span-3">
          About
        </h2>
        <p
          data-about-copy
          aria-label={profile.about}
          className="text-[length:clamp(1.75rem,3.6vw,3.5rem)] font-semibold leading-[1.1] tracking-tighter md:col-span-9"
        >
          {profile.about.split(" ").map((word, index) => (
            <span key={`${word}-${index}`} data-about-word aria-hidden="true" className="inline-block">
              {word}
              {index < profile.about.split(" ").length - 1 ? "\u00a0" : ""}
            </span>
          ))}
        </p>
      </div>

      <Marquee items={skills} />
    </section>
  );
}
