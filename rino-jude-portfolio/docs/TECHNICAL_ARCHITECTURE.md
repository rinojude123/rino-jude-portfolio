# TECHNICAL_ARCHITECTURE.md

## Stack

- React
- Vite
- React Router
- Framer Motion
- Plain CSS with CSS variables and small scoped/component styles

No Tailwind requirement. The visual system depends on precise custom CSS/SVG, so plain CSS keeps the styling explicit and lightweight.

No AOS.
No WebGL.
No large UI/animation framework.
No icon library required; simple SVG icons should be authored in code.

## Dependency rule

Keep dependencies minimal. Add a package only when it removes substantial complexity.

Base dependency set:

```text
react
react-dom
react-router-dom
framer-motion
```

## Data architecture

All content lives in centralized data modules.

Suggested:

```text
src/data/site.js
src/data/projects.js
src/data/skills.js
src/data/experience.js
src/data/navigation.js
```

Components consume the data; components do not own the master content.

## Recommended source tree

```text
src/
├── app/
│   ├── App.jsx
│   └── routes.jsx
├── components/
│   ├── common/
│   ├── navigation/
│   ├── hero/
│   ├── about/
│   ├── projects/
│   ├── skills/
│   ├── experience/
│   ├── contact/
│   ├── footer/
│   └── effects/
├── data/
│   ├── site.js
│   ├── navigation.js
│   ├── projects.js
│   ├── skills.js
│   └── experience.js
├── hooks/
│   ├── usePrefersReducedMotion.js
│   ├── usePointer.js
│   └── useScrollTrigger.js
├── pages/
│   ├── Home.jsx
│   ├── ProjectDetail.jsx
│   └── NotFound.jsx
├── styles/
│   ├── globals.css
│   ├── tokens.css
│   └── utilities.css
├── assets/
│   └── (only if imported through the bundler)
├── main.jsx
└── vite-env.d.ts
```

Static media that does not need bundler transforms should live under `public/`.

## Routing

Home route:

`/`

Project detail route:

`/project/:slug`

Not found:

`*`

When navigating from a project detail page back to Home sections, use normal links and browser history.

## Hero reveal implementation

Preferred implementation:

- one clipped/masked image layer for Image A
- Image B below it
- CSS mask/clip-path or an SVG mask, whichever is more robust across target browsers
- pointer position stored in a requestAnimationFrame loop or motion value
- Framer Motion smooth interpolation
- disable on coarse pointers and reduced motion

Do not create a full-canvas WebGL solution.

## Scroll draw implementation

Use SVG `pathLength` or stroke-dash animations for selected lines/arrows. Trigger using Intersection Observer or Framer Motion viewport support.

Keep the number of animated paths small.

## Contact form architecture

Use a small provider adapter so the UI is independent of the service.

Example interface:

```js
async function submitContactForm(payload) {}
```

The endpoint/provider is configured by environment variables. Do not commit API secrets.

The UI must support success/error states without leaking implementation details to the visitor.

## SEO architecture

Maintain site metadata in one configuration module and render route-aware title/description for project pages.

Each project page receives:

- title
- description
- canonical path
- Open Graph title/description/image

Generate static `robots.txt` and `sitemap.xml` for deployment.

## Image architecture

Hero images: high priority because they are above the fold.

Project images: lazy load below the fold.

Use modern formats where practical and provide dimensions to reduce layout shift.

## CSS architecture

Use:

- global tokens
- section-level classes
- component classes
- low specificity selectors

Avoid huge utility class strings and deeply nested selectors.

## Error handling

- Form submission errors are user-readable.
- Broken optional project media falls back to a neutral media placeholder.
- Unknown project slug goes to the Not Found page.
- Hero image loading failure must not remove hero text/content.

## Browser/device rules

Test:

- desktop pointer
- mobile touch
- tablet
- keyboard-only navigation
- reduced-motion preference

## Build commands

Use the conventional Vite commands:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Add `npm run lint` and `npm run format` only if the chosen project setup includes the corresponding tooling. Do not add tooling only for appearances.
