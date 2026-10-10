# ASSET_MAP.md

## Asset strategy

Use real user-provided assets where they exist. Generate simple engineering marks with code/SVG. Avoid stock images.

## Required assets

| Asset | Required | Suggested filename | Location | Notes |
|---|---|---|---|---|
| Hero Image A | YES | `hero-color.webp` or `.png` | `public/images/hero/` | Transparent background; full-color illustration |
| Hero Image B | YES | `hero-sketch.webp` or `.png` | `public/images/hero/` | Transparent background; monochrome Meta Quest sketch; aligned with A |
| Resume | YES | `Rino-Jude-Resume.pdf` | `public/` | Download target; use current approved resume |
| Favicon | YES | `favicon.svg` | `public/` | Simple custom mark; code/SVG preferred |
| OG image | YES | `og-image.png` | `public/` | 1200×630 preferred; restrained branding |

## Project media

Current state: no confirmed project screenshots/videos are required for the initial build.

Create a media slot system so media can be inserted later without restructuring components.

Recommended future filenames:

```text
public/projects/post-icu-readmission/01-overview.webp
public/projects/post-icu-readmission/02-pipeline.webp
public/projects/pneumonia-detection/01-model.webp
public/projects/smart-stethoscope/01-device.webp
...
```

Do not create fake placeholder screenshots that look like real project results. If a project has no media, use a code-generated neutral engineering frame or a simple typographic treatment.

## Decorative assets

Do not download external decorative images.

Create these in code/SVG:

- hand-drawn arrows
- crosshairs
- dimension ticks
- section lines
- sketch circles
- small construction marks
- technical label boxes

## Hero image requirements

### Image A

- full-color illustrated version
- face visible
- dark charcoal tux/suit
- white open-collar shirt
- seated pose
- HP laptop
- transparent background

### Image B

- monochrome sketch/ink version
- Meta Quest headset
- same body pose, framing, laptop, and alignment as A
- detailed hand-drawn line work
- transparent background

The two images must be dimensionally and compositionally aligned so the reveal mask does not expose obvious misregistration.

## Fonts

Use:

- Space Grotesk
- DM Sans
- IBM Plex Mono
- Caveat

Use a reliable remote provider or self-host an optimized subset if licensing/hosting permits. Keep font loading non-blocking.

## Optional later assets

- project photos
- project demo videos
- GitHub repository links
- project paper link
- certificate scans

These must never be fabricated.

## Asset organization

```text
public/
├── favicon.svg
├── og-image.png
├── Rino-Jude-Resume.pdf
├── images/
│   └── hero/
│       ├── hero-color.webp
│       └── hero-sketch.webp
└── projects/
    ├── post-icu-readmission/
    ├── pneumonia-detection/
    ├── smart-stethoscope/
    ├── automated-medical-report-generation/
    ├── 3d-printed-medical-model/
    ├── scara-robot/
    ├── smart-walking-stick/
    └── iontophoresis-device/
```
