# AGENTS.md

## Mission

Build the Rino Jude personal portfolio exactly as described by the specification package in this folder.

## First action

Read:

1. `MASTER_SPEC.md`
2. `DESIGN_SYSTEM.md`
3. `PAGE_SPECIFICATIONS.md`
4. `COMPONENT_SPECIFICATIONS.md`
5. `ANIMATION_SPECIFICATIONS.md`
6. `INTERACTION_SPECIFICATIONS.md`
7. `CONTENT.md`
8. `PROJECT_DATA.md`
9. `EXPERIENCE_DATA.md`
10. `ASSET_MAP.md`
11. `TECHNICAL_ARCHITECTURE.md`
12. `RESPONSIVE_RULES.md`
13. `ACCESSIBILITY.md`
14. `PERFORMANCE.md`
15. `SEO.md`
16. `DO_DONT_RULES.md`

## Implementation rules

- Do not redesign the visual concept.
- Do not add libraries without need.
- Do not create fake content.
- Keep all content in data modules.
- Build responsive behavior from the start.
- Build accessibility into each component.
- Respect reduced motion.
- Keep the hero reveal isolated and optional.
- Prefer SVG/CSS for hand-drawn decorative assets.
- Make sure the portfolio still looks good if optional project media is absent.

## Content safety/accuracy rules

Some project facts are incomplete. Do not fill gaps with guesses.

The 3D-printed medical model has an unresolved CT/anatomical-region inconsistency in the source notes; use the neutral title and neutral description until verified.

The Iontophoresis project is a homemade prototype. Do not describe it as safe, certified, clinically validated, or ready for patient use.

The Smart Stethoscope is not described as AI-integrated. Do not invent an ML component.

The optional Stethoscope Amplifier Circuit is basic and should not be given disproportionate visual prominence.

## Visual QA requirement

Before declaring the build complete, inspect:

- desktop
- tablet
- mobile
- keyboard navigation
- reduced motion
- hero reveal
- project routing
- form states
- broken/absent media fallback

## Code quality

Prefer small, readable components over abstraction-heavy systems.

Use meaningful names.

Avoid magic numbers when a design token can be used.

Do not scatter inline styles unless they are computed interaction values.

## Completion definition

The site is complete only when it passes `FINAL_BUILD_CHECKLIST.md`.
