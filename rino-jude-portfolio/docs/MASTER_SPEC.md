# MASTER_SPEC.md

## 1. Project identity

**Site:** Rino Jude — Personal Portfolio
**Role shown:** Biomedical Engineering Student
**Goal:** Present Rino as a biomedical engineering student who explores multiple technology fields, learns by building, and experiments with how different disciplines can work together.

Locked About statement:

> I'm a Biomedical Engineering student exploring different fields of technology, learning how they work, and experimenting with how they can come together.

No tagline.

## 2. Core product principle

The site must feel like a polished professional portfolio expressed through a digital engineering/sketchbook visual language. The visual layer is experimental; the information architecture is conventional and easy to understand.

Rule:

**Everything can look hand-drawn, but nothing should feel poorly designed.**

## 3. Page flow

```text
PRELOADER
  ↓
NAVBAR
  ↓
HERO
  ↓
ABOUT
  ↓
PROJECTS
  ↓
SKILLS
  ↓
EXPERIENCE
  ↓
CONTACT
  ↓
FOOTER
```

There is no separate About, Resume, Contact, or Projects index page.

Individual project detail pages are permitted and are used from project cards where useful: `/project/:slug`.

## 4. Navigation

Desktop navigation:

`RINO JUDE | WORK | ABOUT | SKILLS | EXPERIENCE | CONTACT`

Navigation uses ordinary anchor scrolling. On project detail pages, `WORK` returns to the Projects section on Home.

Hover treatment: a subtle hand-drawn underline draws under the active/hovered label.

Do not use magnetic navigation, scroll hijacking, oversized nav animations, or floating navigation gimmicks.

## 5. Hero

Content:

- Rino Jude
- Biomedical Engineering Student
- Locked About statement
- Primary CTA: `VIEW WORK →`
- Secondary CTA: `RESUME ↗`

Visuals:

- Image B is the default/base hero image.
- Image B: monochrome sketch/ink illustration, Meta Quest headset, same pose and composition as Image A, tuxedo/dark charcoal suit, white shirt, HP laptop, transparent background.
- Image A: full-color illustration, same pose/composition/body/framing as Image B, face visible, tuxedo/dark charcoal suit, white shirt, HP laptop, transparent background.
- On desktop pointer movement, a small cursor-following circular/square reveal mask reveals Image A over Image B.
- The reveal mask has smooth cursor lag and follows the hand-drawn cursor.
- Normal cursor: small pencil/hand-drawn pointer.
- The cursor/reveal interaction is disabled on touch devices.
- Hero background may contain faint separate pencil/graphite depth lines; do not bake website decorations into the hero image.

Signature idea:

**sketch → finished creation**

Do not add a large HUD, giant WebGL effect, full-screen 3D scene, or glowing futuristic interface.

## 6. About

Keep concise. Use a clean engineering-style profile layout.

Suggested content structure:

- Short locked intro statement.
- Small group of relevant fields explored: healthcare, software/web, AI/ML, embedded systems, IoT, instrumentation, design/3D, automation.
- Sparse margin note such as `currently experimenting ↓`.

Do not add a separate “currently exploring” section.

## 7. Projects

Use standard portfolio cards with engineering-sheet styling.

Desktop: responsive grid.
Mobile: one card per row, clean vertical stack.

Card content:

- small project number
- title
- concise description
- domain / technology labels
- optional result metric
- `VIEW PROJECT →`

Hover:

- subtle hand-drawn secondary outline/offset line
- small annotation/arrow may appear
- no scale-heavy 3D tilt

The home page may show all selected projects in one continuous Projects section. There is no separate Projects index page.

## 8. Skills

Display only current portfolio-relevant technical skills. Do not show fake proficiency percentages.

Categories:

1. AI / Machine Learning
2. Software / Web Development
3. Biomedical Engineering / Instrumentation
4. Embedded Systems / Electronics / IoT
5. Design / 3D
6. Automation

Regulatory / Quality skills from the resume are intentionally excluded from the portfolio Skills section.

## 9. Experience

Use an engineering-style vertical timeline/cards.

Experience entries:

- Code Bind — Web Development Intern — May 2024–June 2024
- GEM Hospital — Biomedical Intern — Dec 2025–Jan 2026
- Appin Technology — Digital Marketing Intern — May 2026–June 2026

Content is sourced from the current resume and should not be embellished.

## 10. Contact

Normal professional contact section.

Show:

- email
- LinkedIn
- GitHub
- contact form

The form should have a clean, accessible state model: idle, submitting, success, error.

No chat widget, chatbot, oversized contact gimmick, or animated map.

## 11. Footer

Show:

- Rino Jude
- Biomedical Engineering Student
- LinkedIn / GitHub / email links
- small handwritten animated status
- `see you →`

Status animation cycles through a small controlled word set such as:

`still building`, `still exploring`, `still learning`, `still creating`, `still experimenting`, `still discovering`, `still improving`, `still understanding`, `still questioning`, `still making`

The status should visually erase/write as if handwritten. Do not merely crossfade text.

## 12. Preloader

Custom lightweight preloader displaying exactly:

`Rino Jude`

The name should be drawn/written into view. The preloader must never block the page for a fixed artificial delay. Hide it when the application is ready; provide a fast fallback for reduced motion and slower devices.

## 13. Motion policy

Framer Motion is the main motion system.

Motion exists only to reinforce the sketch/engineering language.

Required motion families:

- border/line drawing
- annotation/handwriting reveals
- selected scroll-entry animations
- subtle section transition/thread movement
- card hover refinement
- hero reveal interaction
- footer erase/write
- preloader name drawing

Add one new explicit motion pattern:

**ink-draw-on-scroll:** selected borders, arrows, separators, and engineering marks draw themselves as the user reaches a section.

Do not animate every element independently.

Reduced motion must disable cursor reveal and non-essential movement while keeping content accessible.

## 14. Responsive behavior

Desktop receives the full visual treatment.

Tablet simplifies decorative positioning.

Mobile keeps all information architecture but removes/repositions decorations that become awkward. Do not force desktop annotations into mobile layouts.

Hero reveal is disabled on touch devices and replaced by the static Image B presentation, with Image A still available through a normal accessible alternative/detail interaction only if needed.

## 15. Performance

Prioritize low JavaScript cost, optimized images, responsive image dimensions, lazy-loading of below-the-fold media, no unnecessary animation libraries, no WebGL dependency, and no heavy canvas implementation.

## 16. Accessibility

Use semantic HTML, visible keyboard focus, accessible navigation, meaningful image alt text, form labels/errors, sufficient text contrast, reduced-motion handling, and non-pointer alternatives for important interactions.

The hero reveal must never be the only way to understand the hero content.

## 17. SEO

Use a descriptive page title, meta description, canonical URL, Open Graph metadata, Twitter/X card metadata where appropriate, semantic heading hierarchy, descriptive project URLs/slugs, and `sitemap.xml`/`robots.txt` for deployment.

## 18. Security and privacy

No secrets in client code.

Do not store visitor form submissions in local storage.

Use environment variables for configurable form endpoints if a hosted form endpoint is used.

Do not collect unnecessary analytics or personal information.

## 19. Deployment target

Primary target: GitHub repository + Vercel deployment.

The site must work from a clean clone with the documented install/build commands.
