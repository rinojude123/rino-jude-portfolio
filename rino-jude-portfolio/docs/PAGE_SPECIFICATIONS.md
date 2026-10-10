# PAGE_SPECIFICATIONS.md

## Preloader

- Full viewport overlay matching paper background.
- Centered `Rino Jude`.
- Lightweight writing/drawing reveal.
- Exit immediately once app is ready.
- No artificial long wait.
- Reduced-motion version: quick opacity/clip reveal.

## Navbar

- Fixed or sticky only if it does not interfere with the sketchbook composition.
- Transparent/paper surface; no glass panel.
- Compact and readable.
- Underline draw on hover.

## Hero

Layout:

- Text/content block on left/upper area depending on viewport.
- Hero visual occupies the opposing area with enough negative space.
- Image B base; Image A reveal layer aligned exactly.
- Faint graphite construction lines behind but separate from the actual image files.

Desktop interaction:

1. Pointer uses custom hand-drawn cursor.
2. Pointer moves with a small easing lag.
3. Reveal mask follows pointer.
4. Image A is visible only inside the reveal mask.
5. Leaving the hero ends the reveal smoothly.

Mobile:

- Disable reveal interaction.
- Show Image B statically.
- Keep the illustration and text comfortably separated.

## About

Use a simple split or two-column section:

- concise statement
- field/interest grouping
- one or two sparse annotations

No long biography.

## Projects

Each card is a normal card expressed as an engineering sheet.

Recommended card skeleton:

```text
[01] [DOMAIN]

[PROJECT IMAGE / VISUAL]

PROJECT TITLE
one or two short lines

TECH / DOMAIN LABELS
VIEW PROJECT →
```

Use variable card heights only when media naturally requires it; otherwise align card rhythm.

## Skills

Use grouped blocks rather than percentages.

Each block should show a category label and a tidy set of technology names.

## Experience

Timeline with:

- year/date marker in IBM Plex Mono
- company
- role
- short description
- subtle arrow/line relationship

Do not over-animate the timeline.

## Contact

Suggested two-column desktop layout:

Left: short invitation + direct contact links.
Right: form.

Fields:

- Name
- Email
- Message
- Submit

Required validation should be clear and keyboard accessible.

## Footer

Minimal final block with generous whitespace.

The status handwriting should be one focal micro-interaction rather than a separate section.
