import { site } from "../../data/site.js";
import { Annotation } from "../common/Annotation.jsx";
import { Section, SectionHeading } from "../common/Section.jsx";
import { ScrollReveal } from "../effects/ScrollReveal.jsx";

export function AboutSection() {
  return (
    <Section id="about">
      <SectionHeading kicker="PROFILE / 02" title="About" />
      <ScrollReveal>
        <div className="about-grid">
          <p>{site.about}</p>
          <div>
            <div className="field-list">
              {site.aboutFields.map((field) => (
                <span className="field-chip" key={field}>
                  {field}
                </span>
              ))}
            </div>
            <Annotation style={{ marginTop: "1.2rem" }}>{site.annotations.about}</Annotation>
            <p className="technical-label" style={{ marginTop: "1.8rem" }}>
              {site.education.program} · {site.education.years}
            </p>
            <p className="technical-label">{site.education.school}</p>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}