# COMPONENT_SPECIFICATIONS.md

## Core layout

- `PageShell`
- `Section`
- `SectionHeading`
- `HandDrawnLine`
- `TechnicalLabel`
- `Annotation`
- `HandDrawnButton`

## Navigation

- `Navbar`
- `NavLink`

## Hero

- `Hero`
- `HeroContent`
- `HeroVisual`
- `HeroReveal`
- `CustomCursor`

`HeroReveal` owns the pointer-mask logic. Keep it isolated so it can be disabled for touch and reduced motion.

## Projects

- `ProjectSection`
- `ProjectGrid`
- `ProjectCard`
- `ProjectMeta`
- `ProjectDetail`
- `ProjectMedia`
- `ProjectProcess`

## Skills

- `SkillsSection`
- `SkillGroup`
- `SkillTag`

## Experience

- `ExperienceSection`
- `ExperienceTimeline`
- `ExperienceCard`

## Contact

- `ContactSection`
- `ContactLinks`
- `ContactForm`
- `FormField`

## Footer

- `Footer`
- `AnimatedStatus`
- `SeeYouMark`

## Effects

- `Preloader`
- `ScrollReveal`
- `DrawOnScroll`
- `SketchDecorationLayer`

## Component rules

Components should be small enough to reason about, but do not create a component for every wrapper.

Keep all portfolio copy/data out of visual components.

Do not bury content in JSX when it can live in structured data files.
