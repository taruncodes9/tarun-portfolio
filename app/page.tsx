import Motion from "@/components/Motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

/**
 * Server component. Sections are plain markup tagged with data attributes
 * (data-line, data-hero, data-reveal, data-timeline...). <Motion> is the one
 * client boundary that finds those tags and animates them with GSAP.
 */
export default function Page() {
  return (
    <Motion>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
      </main>
      <Contact />
    </Motion>
  );
}