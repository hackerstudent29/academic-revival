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
*   **Strict Ban on Cards / Boxy Containers**:
    - **MANDATORY**: STRICTLY DO NOT use card components or boxed card containers (`bg-card`, rounded boxed card frames, card shadows) for page components and elements unless the user explicitly and personally asks for cards.
    - Always use clean, open editorial lists, transparent tables, and crisp divider lines (`divide-y divide-border` / `border-b border-border`) instead of cards.
*   **Multi-Section Alternating Wave Background Design (Mandatory for All Multi-Section Pages & Tabs)**:
    - **Rule**: Whenever creating or restructuring any page, tab, or view with **two or more sections**, you MUST use the alternating organic wave background color split design (as implemented in `/library`).
    - **No Harsh In-Between Divider Lines**: STRICTLY DO NOT add harsh horizontal divider lines (`border-t border-border` or `<hr>`) between sections or before visual galleries. The organic wave transitions provide the natural, clean visual boundary.
    - **Canvas Alternation**:
      - **Section A (Primary Canvas)**: `bg-white dark:bg-[#121214]`
      - **Wave Divider A → B**:
        ```tsx
        <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
          <svg
            viewBox="0 0 1440 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10 sm:h-14 md:h-16 lg:h-20 block preserve-3d"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
              className="fill-[#F3F3F2] dark:fill-[#18181B]"
            />
          </svg>
        </div>
        ```
      - **Section B (Secondary Canvas)**: `bg-[#F3F3F2] dark:bg-[#18181B]`
      - **Wave Divider B → A**:
        ```tsx
        <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
          <svg
            viewBox="0 0 1440 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10 sm:h-14 md:h-16 lg:h-20 block preserve-3d"
            preserveAspectRatio="none"
          >
            <path
              d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
              className="fill-white dark:fill-[#121214]"
            />
          </svg>
        </div>
        ```
*   **Hero Sections**: Do NOT use grid lines or architectural background patterns. Use signature maroon red gradient (`from-[#9E2339] via-[#861E30] to-[#671422]`).
*   **Hero Image Showcase Rules**:
    - **No Video Overlay Icons**: Do NOT add play buttons, video play circles, or video player UI overlays over static hero images. Images must be rendered as clean static media showcases.
    - **No Floating Overlay Badges**: Do NOT add floating bottom-right text pill badges over hero images.
    - **Strict Ban on Text Overlays over Images**: STRICTLY DO NOT paste or overlay text, labels, badges, captions, or gradient text overlays on top of images in galleries, cards, or media showcases across any pages or tabs. Images must be rendered cleanly and purely as static media showcases with zero text pasted over them.
    - **Boxy Asymmetrical Button & Badge Shape**: Buttons and badges on hero blocks must use boxy asymmetrical rectangular shapes (`rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs` or `rounded-sm` with crisp borders) rather than plain fully-rounded pills (`rounded-full`).
    - **Component Remounting & Fallback**: Images must use `key={item.id}` or `key={course.slug}` to force fresh element remounting and specify a local fallback (`/images/eligibility_hero.jpg`) in `onError`.
*   **Image Radii & Animation Constraints**: Use minimal edge curves (`rounded-lg` or `rounded-md`, `0.25rem` radius). Strictly avoid image zoom/popup hover effects (`scale-105`/`scale-110`). Images must stay flat and static on hover.
*   **Typography Section Titles**: Never add trailing dots `.` to section headings or tab titles (e.g. `CAMPUS FACILITIES`, NOT `CAMPUS FACILITIES.`).
*   **Tight Header & Content Spacing**: When creating new pages or section layouts, enforce tight top padding between the header and main content (`pt-0 md:pt-1` on main container and `pt-2 md:pt-4` on top section wrapper). Strictly prevent excessive top margins or dead whitespace under the top navigation header.

### Mandatory Typography System (Hardcoded for All Current & Upcoming Pages)

| Text Category | Font Family | Tailwind Utility Class String | Purpose / Applied Elements |
|---|---|---|---|
| **Page Hero Title** | `Oswald` | `text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-oswald uppercase text-foreground tracking-tight leading-none` | Hero banner titles. Must be inside theme-adaptive container (`bg-white/95 dark:bg-[#121214]/95 text-foreground border-border dark:border-white/15 border-l-4 border-primary`), docked flush with hero bottom (`pb-0`). No trailing periods. |
| **Page Section Title** | `Oswald` | `text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary` | Universal standard across all page sections (modeled on *"An artistic community on the south side"* & *"Why Join MSAJCE"*). No trailing periods. No AI eyebrows or kicker fluff above. |
| **Secondary Subheadings / Subsections** | `Oswald` | `text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground` | Subsection headers, division headers, institutional categories. |
| **Body Text / Paragraphs / Narrative** | `Libre Franklin` | `text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed` | All descriptive paragraphs, Principal's message, vision/mission statements, list items, policy articles. |
| **Secondary Sub-Nav Department Titles** | `Oswald` | `text-sm sm:text-base md:text-lg xl:text-xl font-black font-oswald uppercase text-primary` | Sticky secondary department navigation headers. |
| **Vision & Mission Badges (`V`, `V1`, `M1-3`, `QP`)** | `Oswald` | `text-foreground font-oswald font-black bg-foreground/10 border-foreground/20` | Acronym and milestone badges. Must use black/high-contrast dark text. |
| **Data Table Headers** | `Oswald` | `font-oswald font-black uppercase text-xs tracking-wider text-foreground whitespace-nowrap` | Table and DataGrid column headers. |
| **Data Table Cells** | `Libre Franklin` | `font-libre text-xs sm:text-sm text-foreground` | Table cells and data values. |
| **Pull Quotes & Testimonials** | `Libre Franklin` | `text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-foreground` | Large pull quotes in editorial sections. |

### Strict Content Fidelity (User-Provided Content ONLY)

*   **MANDATORY**: Use ONLY the content provided by the user for any page or section.
*   **Strictly Banned**: NEVER invent, extrapolate, hallucinate, or pad pages with fabricated text, fake statistics, synthetic awards, dummy quotes, or unrequested secondary navbars/sections.
*   **Minimal & Authentic**: If the user provides 3 sentences, render only those 3 sentences cleanly and beautifully without artificial expansion or padding.

### Strict Page Minimalism Guidelines (Reference: `/library` & `/about/overview`)

*   **Strict Ban on Cards**: STRICTLY DO NOT use card components or boxed card containers (`bg-card`, rounded boxed card frames, card shadows) for page components and elements unless the user explicitly and personally requests cards. Use clean, open editorial lists, transparent tables, and crisp divider lines (`divide-y divide-border` / `border-b border-border`) instead.
*   **Full-Length Editorial Text Layout (Strict Ban on `max-w-4xl` / `max-w-prose`)**:
    - **MANDATORY**: All narrative paragraphs, descriptive text, overview articles, policy statements, and highlight/quote blocks must span **full width (`w-full`)** across to the right container edge with standard container padding (`max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12`).
    - **Strictly Banned**: NEVER restrict text width with `max-w-prose`, `max-w-2xl`, `max-w-3xl`, or `max-w-4xl`. Text must run all the way from the left boundary to the right boundary padding before wrapping to the next line.
*   **Mandatory Standard Table Component (`DataGridContainer` from Publications)**:
    - **Rule**: Whenever asked to "use table component" or render data tables for any page or section, you MUST strictly use the official Publications DataGrid table standard from `@/components/ui/data-grid-table`:
      ```tsx
      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
        <div className="overflow-x-auto bg-transparent">
          <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
              <tr>
                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap ...">
                  ...
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40 font-libre">
              <tr className="hover:bg-foreground/[0.02] transition-colors">
                <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground">...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DataGridContainer>
      ```
*   **Strict Ban on Unwanted Lines**: STRICTLY DO NOT use `<hr>` tags or harsh horizontal divider lines (`border-t border-border`) between sections or before visual galleries. Visual separation is achieved purely through alternating wave backgrounds or natural breathing room.
*   **Multi-Section Alternating Wave Background Design**: Whenever creating or restructuring any page, tab, or view with two or more sections, you MUST use our signature alternating organic wave background color split design (as demonstrated in `/library`). Alternate between Section A (`bg-white dark:bg-[#121214]`) and Section B (`bg-[#F3F3F2] dark:bg-[#18181B]`) separated by smooth organic wave SVGs.
*   **Tight Header Spacing**: Spacing between the top sticky header and main content must remain minimal (`pt-0 md:pt-1` on `<main>` / `pt-2 md:pt-4` on section wrapper). NEVER leave large dead padding or empty gaps above page content.
*   **No AI Symbols or Eyebrow Sentences**: NEVER add AI symbols (such as Lucide `Sparkles`) or introductory eyebrows/sentences (e.g. `ABOUT MSAJCE // ...` or `Welcome to...`). Use only the clean, direct section title.
*   **No Video Play Overlays & No Floating Badges on Images**: Images must be clean static media showcases without fake video play circles or floating pill badges.
*   **Boxy Asymmetrical Button & Badge Shapes**: Buttons and badges on hero and content components must use boxy asymmetrical rectangular shapes (`rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs` or `rounded-sm`) rather than generic fully rounded pills (`rounded-full`).
*   **No Image Zoom/Popup Animations**: Strictly avoid using zoom or popup hover effects (e.g., `group-hover:scale-105` or `scale-110`). Images must remain flat and static on hover.
*   **Authentic Real Photographs**: Always use authentic, real architectural and campus photography. Strictly avoid AI-generated images that look synthetic or artificial.

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
