# ACCESSIBILITY.md

## Required

- semantic `header`, `nav`, `main`, `section`, `footer`
- one meaningful `h1`
- logical heading hierarchy
- native buttons/links, not clickable `div`s
- keyboard-focusable controls
- visible focus states
- form labels and error messages
- descriptive link text
- useful alt text for project media and hero images
- decorative SVGs marked as decorative
- sufficient contrast

## Motion

Respect `prefers-reduced-motion: reduce`.

When reduced motion is enabled:

- no cursor-following reveal
- no parallax
- no long draw animations
- no repeated motion loops that convey no content

## Hero

The Image A reveal is decorative/experiential. Hero meaning must remain understandable from static content and Image B.

## Mobile/touch

Never hide information behind hover.

## Forms

Use programmatically associated labels, `aria-describedby` for errors, and `aria-live` for submission state where appropriate.
