import { experience } from "../../data/experience.js";
import { Section, SectionHeading } from "../common/Section.jsx";
import { ScrollReveal } from "../effects/ScrollReveal.jsx";

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeading kicker="TIMELINE / 05" title="Experience" />
      <div className="timeline">
        {experience.map((entry) => (
          <ScrollReveal key={entry.id}>
            <article className="experience-card">
              <p className="dates">{entry.dates}</p>
              <h3>{entry.company}</h3>
              <p className="technical-label" style={{ margin: "0.35rem 0 0.7rem" }}>
                {entry.role}
              </p>
              <p>{entry.summary}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
