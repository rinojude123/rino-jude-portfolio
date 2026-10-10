# ANIMATION_SPECIFICATIONS.md

## Motion library

Use Framer Motion for meaningful component and scroll-driven motion.

Use CSS transitions for very small hover states where that is simpler.

## Timing guidance

- Micro hover: 150–220ms
- Standard UI: 250–420ms
- Draw-on-scroll: 500–950ms
- Section reveal: 450–800ms
- Hero reveal: continuous pointer-following with eased interpolation

Prefer ease-out / custom smooth easing. Avoid bouncy physics unless a tiny effect is truly useful.

## Required animations

### Preloader
Name draws/reveals as handwriting.

### Section entry
Content can fade/translate by a small distance. Keep movement restrained.

### Ink-draw-on-scroll
Selected SVG strokes animate their `pathLength`/stroke reveal when entering the viewport.

Trigger once per element by default.

### Project cards
Hover may reveal a second outline, tiny arrow movement, or underline drawing.

### Buttons
Border/underline writes itself on hover.

### Footer status
Text appears as handwritten erase/write rather than a simple crossfade.

### Hero reveal
Use pointer position mapped to a small mask. The mask should have smooth easing and no large cursor blob.

## Reduced motion

When `prefers-reduced-motion: reduce`:

- disable custom cursor movement
- disable hero reveal animation; show Image B normally
- remove parallax
- shorten/skip draw animations
- use immediate or very short opacity transitions

## Animation budget

Only one or two visually active areas should be competing for attention in the viewport. Avoid simultaneous full-card transforms, background motion, and cursor effects.
