---
name: msajce-design
description: Design system rules and guidelines for MSAJCE website, using Oswald for headings/titles/display and Libre Franklin for all body text/paragraphs/labels across all pages and existing components, with Academic Maroon Red (#9E2339) as the single signature brand color.
---

# MSAJCE Premium Academic Heritage Design System Guidelines

## Brand & Foundations

*   **Single Brand Color**: **Academic Maroon Red (`#9E2339`)** is the sole brand color across the entire website. No secondary blue, gold, or green colors are used.
*   **Warm Academic Off-White Neutrals**: Page background (`#F9F9F8` / `#F3F3F2`) and card surfaces (`#FAF9F6`) use warm off-white tones. Avoid sterile pure white (`#FFFFFF`) backgrounds.
*   **Design Aesthetic**: Bold, minimalist grid structure, strong margins, editorial type hierarchy (UAL style) fused with Apple-like smooth transitions, blur effects (`backdrop-filter`), and clean layouts.
*   **No Cards / Boxy Fills**: Prefer clean typographic alignment, open white space, and grids for data rather than putting content inside colored background "cards" or boxes.
*   **Hero Sections**: Do NOT use the `PageHero` component with the grid background style for new pages. Create custom, sleek typography-driven hero sections for new pages instead.
*   **Hero Image Showcase Rules**:
    - **No Video Overlay Icons**: Do NOT add play buttons, video play circles, or video player UI overlays over static hero images. Images must be rendered as clean static media showcases.
    - **No Floating Overlay Badges**: Do NOT add floating bottom-right text pill badges over hero images.
    - **Boxy Asymmetrical Button & Badge Shape**: Buttons and badges on hero blocks must use boxy asymmetrical rectangular shapes (`rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs` or `rounded-sm` with crisp borders) rather than plain fully-rounded pills (`rounded-full`).
*   **Image Radii**: Use minimal edge curves for images (e.g., `rounded-lg` or `rounded-md`, `0.25rem` radius). Do NOT use excessively large curves like `rounded-3xl`. Strictly avoid image zoom/popup hover effects (`scale-105`/`scale-110`).
*   **Spacing Scale**: Use 8px grid units: `4/8/12/16/24/32/48/64/96`.

### Mandatory Typography System (Applied Across All Pages & Components)

*   **Headings / Titles / Display / Big Numbers (`Oswald`)**:
    - **Font**: `Oswald` (with `Outfit` fallback).
    - **Utility Classes**: `font-oswald`, `font-display`, `font-serif`, `headline-xl`, `headline-lg`, `headline-md`.
    - **Global Enforcement**: Automatically applied to all `h1, h2, h3, h4, h5, h6`, page hero titles, section banners, card titles, count-up numbers, and table headers.
    - **Specs**:
      - `headline-xl`: 48px, line-height 1.2, font-weight 700, uppercase.
      - `headline-lg`: 36px (28px mobile), line-height 1.2, font-weight 600, uppercase.
      - `headline-md`: 24px, line-height 1.3, font-weight 500.

*   **Body Text / Sentences / Paragraphs / Articles & Labels (`Libre Franklin`)**:
    - **Font**: `Libre Franklin` (with `Switzer` / `Roboto` fallbacks).
    - **Utility Classes**: `font-libre`, `font-sans`, `font-body`, `body-lg`, `body-md`, `label-md`, `label-sm`.
    - **Global Enforcement**: Automatically applied to all `p`, `li`, `ul`, `ol`, `blockquote`, `dt`, `dd`, `td`, `th`, `article`, `main`, inputs, textareas, selects, and UI `label` elements across all pages and existing components.
    - **Specs**:
      - `body-lg`: 18px, line-height 1.6, font-weight 400.
      - `body-md`: 16px, line-height 1.5, font-weight 400.
      - `label-md`: 14px, line-height 1.2, font-weight 600, letter-spacing 0.05em.
      - `label-sm`: 12px, line-height 1.2, font-weight 500.

### Centralized Single-Color Palette & Theming
All colors are centralized in `src/styles.css` using CSS custom variables:

*   **Signature Brand Color (Academic Maroon Red)**: `#9E2339` (Use `bg-primary`, `text-primary`, `border-primary`, `bg-secondary`, `text-secondary`, or `var(--primary)`).
*   **Warm Academic Neutrals**: `#F9F9F8` / `#FAF9F6` (Light background/cards), `#F3F3F2` (Page bg), `#1A1C1C` (Foreground text).

**Theme Toggle Rule (Light & Dark Theme)**:
*   **Rule**: Every page, component, or layout added or modified must support both Light and Dark themes.
*   **Default State**: The website defaults to **light mode**.
*   **CSS Variable Mapping**: In Light Mode, `--primary`, `--secondary`, and `--accent` map to Academic Maroon Red (`#9E2339`). In Dark Mode, they map to High-Contrast Radiant Crimson (`#E11D48`).

## Implementation in this project

*   **Tokens live in `src/styles.css`**: `:root` holds light theme tokens, `.dark` holds dark theme tokens. Defines font family stacks `--font-display: "Oswald", "Outfit", sans-serif` and `--font-sans: "Libre Franklin", "Switzer", "Roboto", sans-serif`.
*   **Never hardcode** fixed hex values directly in TSX components when standard CSS variables or Tailwind semantic classes (`headline-lg`, `body-md`, `label-md`, `bg-primary`, `text-primary`) can be used.
*   **Theme toggle**: `src/components/ThemeToggle.tsx` toggles the `dark` class on `<html>` and persists to `localStorage['msajce-theme']`.
