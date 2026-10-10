import { featuredProjects } from "../../data/projects.js";
import { Section, SectionHeading } from "../common/Section.jsx";
import { ScrollReveal } from "../effects/ScrollReveal.jsx";
import { SectionSketches } from "../effects/SketchDecorationLayer.jsx";
import { ProjectDeck } from "./ProjectDeck.jsx";

export function ProjectSection() {
  return (
    <Section id="work">
      <SectionSketches sectionId="projects" />
      <SectionHeading kicker="SELECTED WORK / 03" title="Projects" />
      <ScrollReveal>
        <ProjectDeck projects={featuredProjects} />
      </ScrollReveal>
    </Section>
  );
}