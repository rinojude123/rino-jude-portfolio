# IMPLEMENTATION_FLOW.md

## Exact handoff flow after the specification package

### Phase 1 — Give the package to the primary coding agent

Use one coding-capable agent as the main builder (Codex, Claude Code, Cursor Agent, or equivalent).

Give it the entire `RinoJude_Portfolio_MasterSpec` folder/zip.

Tell it to:

1. Read `MASTER_SPEC.md` first.
2. Read `AGENTS.md` before coding.
3. Read the referenced specification files.
4. Build the full React + Vite application.
5. Implement the Home page and project detail template.
6. Implement the design system before polishing individual sections.
7. Add responsive and accessibility behavior during implementation, not afterward.
8. Run the build and resolve errors.

### Phase 2 — Add the real assets

Place:

- `hero-color.webp`/`.png`
- `hero-sketch.webp`/`.png`
- `Rino-Jude-Resume.pdf`

in the paths defined by `ASSET_MAP.md`.

Add project media only when real files are available.

### Phase 3 — Local verification

Run:

```bash
npm install
npm run dev
npm run build
npm run preview
```

Verify every route, link, form state, animation, and mobile behavior.

### Phase 4 — Code/technical cleanup

Use Cursor or another code-focused agent after the first complete build to:

- inspect architecture
- remove unnecessary dependencies
- fix bugs
- simplify duplicated logic
- verify responsive CSS
- verify performance
- verify accessibility
- confirm all content is centralized

Do not use this phase to redesign the visual concept.

### Phase 5 — Visual/interaction QA

Use a browser-capable visual agent such as Antigravity or equivalent to open the actual running site and inspect:

- spacing
- typography
- paper/ink visual consistency
- hand-drawn borders
- annotations
- hero image alignment
- cursor/reveal behavior
- ink-draw-on-scroll
- footer handwriting animation
- project card behavior
- mobile/tablet positioning

Corrections should be made against the specification files, not based on adding new visual ideas.

### Phase 6 — Final QA

Run every item in `FINAL_BUILD_CHECKLIST.md`.

Check at minimum:

- desktop
- tablet
- mobile
- keyboard-only navigation
- reduced-motion preference
- slow/normal network behavior
- production build

### Phase 7 — Deploy

Push the completed project to GitHub.

Deploy to Vercel.

Verify the production URL, direct project-detail URLs, resume link, social links, contact form, metadata, sitemap, and robots file.

### Phase 8 — Final polish

Only after the site is functional and visually correct should tiny copy/spacing fixes be made.

Do not introduce new sections, new effects, or a new design direction.
