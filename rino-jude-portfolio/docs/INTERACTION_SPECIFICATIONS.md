# INTERACTION_SPECIFICATIONS.md

## Cursor

Default cursor: simple hand-drawn/pencil-like pointer.

Do not use a giant circle, trailing blob, magnetic cursor, or WebGL cursor.

Hero behavior:

- same cursor becomes the reveal tool
- small circular or rounded-square reveal mask
- pointer movement has slight lag
- mask reveals Image A over Image B
- interaction ends smoothly when leaving hero

Disable on touch/coarse pointers.

## Navigation

- anchor scroll on Home
- project detail route does not hijack browser navigation
- preserve normal keyboard navigation

## Hover

Use subtle hand-drawn underline/border draw.

No exaggerated scale, tilt, or parallax on cards.

## Scroll

Use ordinary document scrolling.

No scroll-jacking.

Selected engineering marks draw themselves into place when their section enters the viewport.

## Project cards

The whole card may be clickable, but maintain a visible `VIEW PROJECT →` affordance.

## Forms

Submit button must clearly communicate state.

Never block submission behind animation.

## Touch behavior

All content and actions remain accessible without hover.

Decorations may disappear on small screens.
