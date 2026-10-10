# DESIGN_SYSTEM.md

## Visual language

Warm paper + graphite + ink. The site should resemble carefully made engineering pages without becoming a literal notebook application.

## Palette

Use a restrained monochrome/warm-paper palette.

```css
--paper: #F6F3EA;
--paper-elevated: #FBF9F3;
--ink: #1F1E1A;
--ink-soft: #4E4B44;
--graphite: #858078;
--graphite-faint: #D8D2C6;
--line: #2B2924;
--focus: #1F1E1A;
```

Do not introduce bright accent colors as a default UI language. Small real-image color in Hero Image A is intentional and separate from the site chrome.

## Typography

| Role | Font | Guidance |
|---|---|---|
| Headings | Space Grotesk | Strong, clean, slightly technical |
| Body/UI | DM Sans | Neutral, readable, modern |
| Technical labels | IBM Plex Mono | Metadata, numbering, categories, dimensions |
| Handwritten annotations | Caveat | Sparse margin notes and footer status only |

Load from a reliable web font provider or self-host optimized font files. Do not expose font files in source control unless intentionally bundled by the implementation.

## Type scale

Use responsive CSS `clamp()` values.

Suggested starting tokens:

```css
--fs-hero: clamp(3.2rem, 8vw, 7.5rem);
--fs-h2: clamp(2rem, 4vw, 4rem);
--fs-h3: clamp(1.25rem, 2vw, 1.8rem);
--fs-body: clamp(1rem, 1.1vw, 1.125rem);
--fs-small: 0.84rem;
--fs-mono: 0.72rem;
--fs-note: 1.05rem;
```

Heading line-height: 0.98–1.12.
Body line-height: 1.5–1.65.
Technical labels: 1.2–1.35.

## Layout

- Maximum content width: approximately 1200px.
- Desktop page side padding: approximately 5vw.
- Mobile page side padding: approximately 6vw.
- Section vertical spacing: generous but not excessive; generally 8–13rem desktop and 5–8rem mobile, adjusted by content.
- Use a consistent baseline rhythm; avoid arbitrary one-off offsets.

## Lines and borders

Primary hand-drawn line: about 1.5px visual weight.

Faint construction line: about 1px.

Do not use thick cartoon outlines.

Preferred implementation: reusable SVG/HTML line components with tiny intentional path irregularity rather than random filters applied to every element.

## Border treatment

Cards and section boundaries should feel slightly imperfect but controlled.

Use either:

- a stable hand-drawn SVG frame; or
- layered CSS borders/pseudo-elements with tiny offsets.

Do not randomly rotate whole cards or create intentionally broken layouts.

## Technical marks

Allowed:

- small crosshairs
- registration marks
- short dimension ticks
- tiny arrows
- circles
- short construction lines
- tiny grid fragments
- small labels like `01`, `PROJECT`, `STATUS`, `YEAR`

Avoid:

- giant diagrams
- full-page grids
- equations placed only for decoration
- random scribbles
- blueprint-blue backgrounds

## Handwriting

Caveat appears only for intentionally handwritten content such as:

- `currently experimenting ↓`
- `built this`
- `idea → prototype`
- `under development`
- `why not?`
- footer status

Keep handwriting readable and sparse.

## Buttons

Buttons remain recognizable as normal UI controls.

Primary treatment: text + restrained hand-drawn border/underline.

On hover, the border/underline can animate as a line being drawn.

Avoid pills with excessive rounding, glossy gradients, glassmorphism, or giant magnetic buttons.

## Image treatment

Do not place heavy filters over project images.

Hero images must preserve their transparent backgrounds.

Project media should use normal responsive image containers with a modest engineering-sheet frame.

## Depth

Depth comes from:

- faint graphite sketches
- tiny offset lines
- subtle paper/surface contrast
- restrained shadows

Do not use strong drop shadows or floating 3D cards.
