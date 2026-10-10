import { AboutSection } from "../components/about/AboutSection.jsx";
import { ContactSection } from "../components/contact/ContactSection.jsx";
import { ExperienceSection } from "../components/experience/ExperienceSection.jsx";
import { EngineeringThread } from "../components/effects/EngineeringThread.jsx";
import { Footer } from "../components/footer/Footer.jsx";
import { Hero } from "../components/hero/Hero.jsx";
import { Navbar } from "../components/navigation/Navbar.jsx";
import { ProjectSection } from "../components/projects/ProjectSection.jsx";
import { SkillsSection } from "../components/skills/SkillsSection.jsx";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";
import { homeCanonical } from "../data/seo.js";
import { seo } from "../data/site.js";

export function Home() {
  useDocumentTitle(seo.defaultTitle, seo.defaultDescription, homeCanonical());

  return (
    <>
      <Navbar />
      <main id="main">
        <EngineeringThread />
        <Hero />
        <AboutSection />
        <ProjectSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}