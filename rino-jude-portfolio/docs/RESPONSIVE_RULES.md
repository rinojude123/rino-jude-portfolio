# RESPONSIVE_RULES.md

## General

Responsive behavior is structural, not a desktop layout squeezed into a phone.

## Breakpoints

Use a small number of meaningful breakpoints rather than many micro-breakpoints.

Suggested:

- mobile: `< 768px`
- tablet: `768px–1099px`
- desktop: `1100px+`

Adjust only where content actually requires it.

## Navbar

Desktop: horizontal links.

Mobile: compact menu trigger with a simple hand-drawn open/close line treatment. Do not introduce a fullscreen animated menu spectacle.

## Hero

Desktop:
- split visual/text composition
- reveal interaction active on fine pointers

Tablet:
- narrower visual scale
- reveal may remain active if pointer accuracy permits

Mobile:
- vertical composition
- reveal disabled
- decorations reduced

## About

Desktop may use two columns.

Mobile becomes single column.

## Projects

Desktop: grid, ideally 2–3 columns depending on content width.

Tablet: 2 columns when comfortable.

Mobile: 1 column.

Cards must never require hover to reveal critical information.

## Skills

Desktop: grouped multi-column layout.

Mobile: stacked groups with clear category labels.

## Experience

Desktop: timeline/side markers.

Mobile: simplify into stacked cards with the same chronological order.

## Contact

Desktop: two-column contact + form.

Mobile: stacked.

## Decorations

On mobile:

- hide decorations that collide with text
- move margin notes below nearby content where useful
- remove large decorative geometry rather than shrinking it into awkward positions
- keep key lines/annotations only when they aid the visual rhythm
