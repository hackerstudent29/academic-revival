# Port the Academic Programmes and Why Join MSAJCE sections

Rebuild exactly the two sections from the uploaded Next.js code into this TanStack Start project, keeping their existing design, copy, images and animations unchanged. No redesign, no other sections.

## What gets built

1. **Academic Programmes section** — editorial split hero with a fading Swiper campus slideshow (4 slides, 4.2s autoplay, slide counter "01 / 04"), eyebrow pill "Studying at MSAJCE", headline with blue "Industry-Relevant", body copy, the 25+ / 95% / 100+ stats row, and the three CTAs. Below it, the "Explore Programmes by Level" header plus the 3 pathway cards (Undergraduate, Postgraduate, Doctoral & Research) with badges, hover lift and image zoom.
2. **Why Join MSAJCE section** — black section with sticky left title and crossfading image, and 4 scroll-triggered glass cards (Prime Location, Industry Tie-ups, State-of-the-Art Labs, Scholarships & Sports) that drive which image shows.

Both render on the home page, Why Join above/below Academic Programmes in the same order as the original page (Academic Programmes first, then Why Join).

## Technical notes

- New deps: `framer-motion` (motion), `swiper`, `lucide-react` (if not already present).
- New files: `src/components/AcademicProgrammesSection.tsx`, `src/components/WhyJoinSection.tsx`; `src/routes/index.tsx` rewritten to render them (placeholder removed).
- Next.js-only bits dropped: `"use client"`, `next/image`. Plain `<img>` is already used in these two sections.
- CSS tokens the sections depend on (`--primary-blue: #005DA6`, `--bg-color`, `--text-color`, `--border-color`, `--card-bg`) added to `src/styles.css` with the same dark defaults from the uploaded `index.css`. Swiper CSS imported in the component.
- Switzer/Lineal font files were not uploaded, so type falls back to the system sans stack; the sections' sizes and weights stay identical. If you upload the woff2 files, they can be wired in.
- Route `head()` gets the MSAJCE title/description from the uploaded layout.
