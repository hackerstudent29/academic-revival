---
name: msajce-design
description: Design system rules and guidelines for MSAJCE website, using Oswald for headings/titles/display and Libre Franklin for all body text/paragraphs/labels across all pages and existing components, with Academic Maroon Red (#9E2339) as the single signature brand color, universal #121214 dark background, and strict component typography.
---

# MSAJCE Premium Academic Heritage Design System Guidelines

## Brand & Foundations

*   **Single Brand Color**: **Academic Maroon Red (`#9E2339`)** is the sole brand color across the entire website in Light Mode. In Dark Mode, it maps to High-Contrast Radiant Crimson (`#E11D48`).
*   **Universal Dark Mode Background (`#121214`)**:
    - In Dark Mode (`.dark`), all page backgrounds and section blocks use **Universal Neutral Dark Charcoal (`#121214`)** (`--background: #121214` and `--page-bg: #121214`) with ZERO blue tint. Cards use elevated dark neutral (`#18181B`).
    - **Light Theme Protection**: NEVER touch or modify Light Theme colors (`#F9F9F8` warm off-white and `#F3F3F2` page background).
*   **Design Aesthetic**: Bold, minimalist grid structure, strong margins, editorial type hierarchy (UAL style) fused with Apple-like smooth transitions, blur effects (`backdrop-filter`), and clean layouts.
*   **No Cards / Boxy Fills**: Prefer clean typographic alignment, open white space, and grids for data rather than putting content inside colored background "cards" or boxes.
*   **Hero Sections**: Do NOT use grid lines or architectural background patterns. Use signature maroon red gradient (`from-[#9E2339] via-[#861E30] to-[#671422]`).
*   **Hero Image Showcase Rules**:
    - **No Video Overlay Icons**: Do NOT add play buttons, video play circles, or video player UI overlays over static hero images. Images must be rendered as clean static media showcases.
    - **No Floating Overlay Badges**: Do NOT add floating bottom-right text pill badges over hero images.
    - **Boxy Asymmetrical Button & Badge Shape**: Buttons and badges on hero blocks must use boxy asymmetrical rectangular shapes (`rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs` or `rounded-sm` with crisp borders) rather than plain fully-rounded pills (`rounded-full`).
    - **Component Remounting & Fallback**: Images must use `key={item.id}` or `key={course.slug}` to force fresh element remounting and specify a local fallback (`/images/eligibility_hero.jpg`) in `onError`.
*   **Image Radii & Animation Constraints**: Use minimal edge curves (`rounded-lg` or `rounded-md`, `0.25rem` radius). Strictly avoid image zoom/popup hover effects (`scale-105`/`scale-110`). Images must stay flat and static on hover.
*   **Typography Section Titles**: Never add trailing dots `.` to section headings or tab titles (e.g. `CAMPUS FACILITIES`, NOT `CAMPUS FACILITIES.`).

### Mandatory Typography System (Applied Across All Pages & Components)

*   **Headings / Titles / Display / Big Numbers (`Oswald`)**:
    - **Font**: `Oswald` (with `Outfit` fallback).
    - **Utility Classes**: `font-oswald`, `font-display`, `font-serif`, `headline-xl`, `headline-lg`, `headline-md`.
    - **Global Enforcement**: Automatically applied to all `h1, h2, h3, h4, h5, h6`, page hero titles, section banners, card titles, count-up numbers, footer column titles (`GOVERNANCE`, `QUICK LINKS`), and secondary sub-nav headers.
    - **Secondary Sub-Nav Headers**: Concise department titles in the sticky sub-nav header must render in a larger, prominent font size (`text-sm sm:text-base md:text-lg xl:text-xl font-black font-oswald uppercase text-primary`).

*   **Body Text / Sentences / Paragraphs / Articles & Labels (`Libre Franklin`)**:
    - **Font**: `Libre Franklin` (with `Switzer` / `Roboto` fallbacks).
    - **Utility Classes**: `font-libre`, `font-sans`, `font-body`, `body-lg`, `body-md`, `label-md`, `label-sm`.
    - **Global Enforcement**: Automatically applied to all `p`, `li`, `ul`, `ol`, `blockquote`, `dt`, `dd`, `td`, `th`, `article`, `main`, inputs, textareas, selects, and UI `label` elements.

*   **Vision & Mission Badges (`V`, `V1`, `M1`, `M2`, `M3`)**:
    - Must use **Black / High-Contrast Dark font** (`text-foreground font-oswald font-black bg-foreground/10 border-foreground/20`).

*   **Testimonial & Alumni Cards**:
    - Pull quote text must be sized prominently (`text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-foreground`).
    - Author Name: **Academic Maroon Red (`text-primary font-oswald font-black uppercase text-lg`)**.
    - Position / Title: **Dark Gray / Black (`text-foreground/80 font-sans font-semibold text-xs`)**.

### Centralized Palette & Theme Tokens (`src/styles.css`)

*   **Light Mode (`:root`)**:
    - `--primary`: `#9E2339` (Academic Maroon Red)
    - `--background`: `#F9F9F8` (Warm academic off-white)
    - `--page-bg`: `#F3F3F2` (Warm page neutral)
    - `--foreground`: `#1A1C1C`

*   **Dark Mode (`.dark`)**:
    - `--primary`: `#E11D48` (Radiant Crimson)
    - `--background`: `#121214` (Universal Neutral Dark Charcoal — zero blue tint)
    - `--page-bg`: `#121214` (Universal Neutral Dark Charcoal)
    - `--card`: `#18181B` (Elevated dark neutral)
    - `--foreground`: `#D4D4D4`

## Implementation Guidelines

*   **Tokens live in `src/styles.css`**: `:root` holds light theme tokens, `.dark` holds dark theme tokens.
*   **Never hardcode** fixed hex values directly in TSX components when standard CSS variables or Tailwind semantic classes (`font-oswald`, `font-sans`, `bg-primary`, `text-primary`, `bg-background`, `bg-page-bg`) can be used.
*   **Theme toggle**: `src/components/ThemeToggle.tsx` toggles the `dark` class on `<html>` and persists to `localStorage['msajce-theme']`.
