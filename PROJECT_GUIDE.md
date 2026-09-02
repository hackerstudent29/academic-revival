# MSAJCE Website — Master Architecture & Project Guide

Single source of truth for anyone (human developer or AI assistant) working on this repository.

---

## 1. Tech Stack (Fixed)

| Layer | Choice | Purpose / Notes |
|---|---|---|
| Framework | **TanStack Start v1** (`@tanstack/react-start`) | SSR + file-based routing in `src/routes/`. |
| UI Library | **React 19** + TypeScript | Strictly typed components & props. |
| Bundler & CSS | **Vite** + `@tailwindcss/vite` | Tailwind v4 CSS-first configuration via `src/styles.css`. |
| Design Tokens | **Academic Maroon Red (`#9E2339`)** | Mapped via `--primary` token in `src/styles.css`. |
| Typography | **Oswald** (Display) + **Libre Franklin** (Body) | Global font stacks enforced across all components. |
| Components | **shadcn/ui** on **Radix UI** | Located in `src/components/ui/`. |
| Motion | **Framer Motion** (`framer-motion` v13) | Smooth page reveals & entrance animations (`src/components/motion`). |
| Icons | **lucide-react** | Single icon system across site. |
| State/Query | **@tanstack/react-query** | Data fetching loaders. |

---

## 2. Directory Architecture

```
msajce-college-website/
├── .agents/
│   └── skills/
│       └── msajce-design/         # MSAJCE Design System Skill & Guidelines
│           └── SKILL.md
├── public/                        # Static Public Assets
│   ├── images/                    # General UI & campus hero images
│   ├── logos/                     # Partner & accreditation logos
│   ├── uploads/                   # Content uploads
│   └── videos/                    # Campus video showcases
├── src/
│   ├── assets/                    # Bundled Asset Imports
│   ├── components/                # Modular React Components
│   │   ├── layout/                # SiteHeader, SecondarySubNav, SiteFooter
│   │   ├── modals/                # Interactive Lightboxes & Placement Modals
│   │   ├── motion/                # CountUp, Reveal, SplitText, Stagger
│   │   ├── sections/              # Page Section Modules (Home, About, Placements, Contact)
│   │   ├── shared/                # PageHero, Breadcrumbs, Reusable Shields
│   │   ├── typography/            # Heading & Text Primitives
│   │   ├── ui/                    # Base UI Controls (Button, Accordion, Dialog, etc.)
│   │   └── widgets/               # Domain Widgets (DepartmentHighlights, KeyDrivers, Catalog)
│   ├── content/
│   │   └── departments/           # Department Markdown Specs (msajce_civil.md, msajce_cse.md, etc.)
│   ├── data/                      # Local JSON/Data Stores
│   ├── hooks/                     # Custom React Hooks
│   ├── lib/                       # Data Registries & Utilities
│   │   ├── courseData.ts          # Department & Course Data Registry
│   │   ├── eventsData.ts          # Campus Events Data Store
│   │   ├── facultyData.ts         # Faculty Registry Data Store
│   │   ├── placementData.ts       # Placement Statistics Data Store
│   │   └── utils.ts               # Tailwind Class Merging Utility (cn)
│   ├── routes/                    # TanStack Start File-Based Routes
│   │   ├── __root.tsx             # Root Layout, Theme & Scroll Provider
│   │   ├── index.tsx              # Main Homepage
│   │   ├── about_.overview.tsx    # College Overview Page
│   │   ├── campus-life.tsx        # Campus Life & Facilities
│   │   ├── contact.tsx            # Contact & Enquiries Page
│   │   ├── placements.tsx         # Placement Cell Page
│   │   ├── programmes-offered.tsx # Academic Catalog
│   │   └── programmes.$courseId.tsx # Department Specification Page
│   ├── styles.css                 # Centralized Tailwind v4 Theme & Font Tokens
│   ├── router.tsx                 # Router Configuration
│   └── start.ts                   # TanStack Start Entrypoint
├── scripts/                       # Maintenance & Ingestion Scripts
│   ├── formatDepartments.js
│   ├── migrate_content.ts
│   └── upload_to_supabase.mjs
├── AGENTS.md                      # AI Assistant Rules & Lovable Sync Directives
├── PROJECT_GUIDE.md               # Master Architecture Guide
├── package.json
└── vite.config.ts
```

---

## 3. Design System Rules

1. **Brand Colors**:
   - Light Mode: **Academic Maroon Red (`#9E2339`)** (`--primary: #9E2339`).
   - Dark Mode: **Radiant Crimson (`#E11D48`)** (`--primary: #E11D48`).
2. **Dark Theme Background (`#121214`)**:
   - All pages and section backgrounds in dark mode use **Universal Neutral Dark Charcoal (`#121214`)** with zero blue tint.
   - NEVER touch or modify Light Theme colors (`#F9F9F8` warm off-white).
3. **Typography**:
   - `Oswald`: Headings, Section Titles, Display Font, Secondary Sub-Nav headers, Count-up Numbers.
   - `Libre Franklin`: Body text, Paragraphs, Articles, Inputs, Labels.
4. **Hero & Media Rules**:
   - No fake video play buttons over static hero images.
   - No floating bottom-right text pill badges on images.
   - Hero buttons use boxy asymmetrical rectangular shapes (`rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs` or `rounded-sm`).
   - No zoom/popup hover animations on images (`scale-105`/`scale-110`). Keep images flat and static.
