# Rino Jude — Portfolio

Personal portfolio for Rino Jude, a Biomedical Engineering student. Built from the Master Spec as a React + Vite single-page site with project detail routes.

## Locked direction

Normal portfolio structure. Experimental sketchbook / engineering visual language. Do not redesign the concept while implementing.

## Setup

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Environment

Copy `.env.example` to `.env` if you need production values:

- `VITE_SITE_URL` — canonical origin used for metadata
- `VITE_FORM_ENDPOINT` — hosted form endpoint (JSON POST). Leave empty to keep the form in a visible error state that points to email.

## Assets still needed

Place the approved files here when they are ready:

- `public/images/hero/hero-color.webp` (or `.png`) — Image A
- `public/images/hero/hero-sketch.webp` (or `.png`) — Image B
- `public/Rino-Jude-Resume.pdf`
- `public/og-image.png` (1200×630)

Until the illustrated hero pair is supplied, aligned SVG stand-ins are used so the reveal interaction can be developed. Update `src/data/site.js` after swapping files.

## Content source

Copy lives in `src/data/`. Spec documents are in `docs/`.
