import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import Projects from "@/components/Projects";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#141414] text-white selection:bg-[#E50914] selection:text-white">
      <Navbar />
      <main>
        <HeroBanner />
        <Projects />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
      </main>
      <ContactSection />
    </div>
  );
}
