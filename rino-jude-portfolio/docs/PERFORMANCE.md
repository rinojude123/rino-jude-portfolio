# PERFORMANCE.md

## Targets

The site should feel instant and light on mid-range mobile devices.

## Rules

- avoid WebGL
- avoid background video
- avoid autoplay media
- lazy-load project images
- compress Hero and project media
- provide intrinsic image dimensions
- use modern image formats
- keep animation work GPU-friendly and small
- avoid layout-triggering animation properties such as large width/height changes
- prefer transform/opacity/path animations
- do not run scroll listeners continuously when Intersection Observer or Framer Motion viewport triggers are enough
- disable non-essential effects on reduced motion and low-power/mobile contexts when appropriate

## Hero

Hero images are the largest visual assets, so optimize them carefully. Transparent PNG is acceptable if needed for quality, but WebP/AVIF should be evaluated for size and alpha support during implementation.

## JS

Keep React tree shallow where possible. Do not ship unused packages.

## Runtime safety

The custom cursor should only run on fine pointer devices.

The reveal animation should use a single shared pointer/motion state, not one event listener per decorative element.
