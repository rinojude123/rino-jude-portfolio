import { TechnicalLabel } from "./TechnicalLabel.jsx";
import { DrawOnScroll } from "../effects/DrawOnScroll.jsx";
import { SectionSketches } from "../effects/SketchDecorationLayer.jsx";

const UNDERLINES = [
  "M3 6 C 60 2, 120 9, 180 5 S 240 3, 257 6",
  "M2 5 C 50 8, 100 2, 150 6 S 220 8, 258 4",
  "M4 7 C 70 3, 110 8, 170 4 S 230 7, 256 5",
];

export function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <SectionSketches sectionId={id} />
      <div className="section-inner">{children}</div>
    </section>
  );
}

export function SectionHeading({ kicker, title }) {
  const variant = title.length % UNDERLINES.length;
  return (
    <header className="section-heading">
      <TechnicalLabel>{kicker}</TechnicalLabel>
      <div className="heading-title">
        <h2>{title}</h2>
        <DrawOnScroll
          className="heading-underline"
          d={UNDERLINES[variant]}
          width={260}
          height={10}
          stretch
        />
      </div>
    </header>
  );
}