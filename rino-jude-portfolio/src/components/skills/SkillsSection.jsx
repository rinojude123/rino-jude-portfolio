import { skills } from "../../data/skills.js";
import { Section, SectionHeading } from "../common/Section.jsx";
import { ScrollReveal } from "../effects/ScrollReveal.jsx";

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeading kicker="TOOLING / 04" title="Skills" />
      <div className="skills-grid">
        {skills.map((group) => (
          <ScrollReveal key={group.id}>
            <article className="skill-group">
              <h3>{group.category}</h3>
              <div className="skill-items">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}