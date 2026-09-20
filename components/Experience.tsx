import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-32 md:px-10 md:py-48">
      <div className="grid gap-12 md:grid-cols-12">
        <h2 data-reveal className="text-base font-medium md:col-span-3">
          Experience
        </h2>

        {/* The timeline line is drawn on scroll by useTimelineDraw. */}
        <div data-timeline className="relative md:col-span-9">
          <span aria-hidden="true" className="absolute bottom-0 left-[7px] top-2 w-px bg-white/15" />
          <span
            aria-hidden="true"
            data-timeline-line
            className="absolute bottom-0 left-[7px] top-2 w-px origin-top bg-white"
          />

          <ol className="pl-10 md:pl-14">
            {experience.map((item) => (
              <li key={item.role} className="relative pb-20 last:pb-0">
                <span
                  aria-hidden="true"
                  data-timeline-dot
                  className="absolute -left-10 top-1 size-[15px] rounded-full bg-white md:-left-14"
                />
                <div data-reveal>
                  <p className="text-sm text-gray-500">{item.period}</p>
                  <h3 className="mt-2 text-3xl font-bold tracking-tighter md:text-5xl">
                    {item.role}
                  </h3>
                  <p className="mt-4 max-w-xl text-lg text-gray-400">{item.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
