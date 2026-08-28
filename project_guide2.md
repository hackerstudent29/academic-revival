# MSAJCE Website — Agent, Design & Build Guide (Updated)

This is the comprehensive project guide and single source of truth for the MSAJCE website. Any human or AI agent working on this project must read this before adding pages, components, or sections. Do not invent new colors, fonts, or external libraries without explicit approval.

---

## 1. Tech Stack & Core Libraries

| Layer | Choice | Notes |
|---|---|---|
| **Framework** | **TanStack Start v1** (`@tanstack/react-start`) | SSR + file-based routing. Never use react-router-dom or Next.js app router patterns. |
| **UI Library** | **React 19** + TypeScript | Modern React features, strong typing. |
| **Bundler** | **Vite** + `@tailwindcss/vite` | No `postcss.config.js` or `tailwind.config.js` used for configuration. |
| **Styling** | **Tailwind CSS v4** (CSS-first) | All variables and tokens live in `src/styles.css` under `@theme inline`. |
| **Components** | **shadcn/ui** on **Radix UI** | Reusable components are in `src/components/ui/*`. Reuse these whenever possible. |
| **Animation** | **Framer Motion** (`framer-motion` v13) & **GSAP** | Use `src/components/motion/` for standard reveals and page transitions. |
| **Smooth Scroll** | **Lenis** (`lenis`) | Handled globally in `__root.tsx`. Do not implement custom scroll hijacking. |
| **Icons** | **lucide-react** | The sole icon library used across the project. |
| **Carousels** | **Swiper** & **Embla** | Used for sliders, image galleries, and recruiter marquees. |
| **Forms** | **react-hook-form** + **zod** | Validation via `@hookform/resolvers`. |
| **Data Fetching** | **@tanstack/react-query** | Use `loader` for pre-fetching data and `useSuspenseQuery` for component fetching. |
| **Backend/DB** | **Supabase** (`@supabase/supabase-js`) | Used for database interactions, storage, and backend logic. |
| **Toasts** | **sonner** | Accessible and customizable toast notifications (`@/components/ui/sonner`). |

---

## 2. Design Language & Branding

**Aesthetic:** Bold, minimalist, editorial grid style (UAL/Central Saint Martins inspired) with an Apple-like polished feel. This means huge uppercase type, hairline rules, big margins, glassmorphic backdrop filters, and spring-based, restrained motion.

### Color Palette (Strictly Enforced)

Only these colors are permitted. Do not hardcode custom hex codes.

| Name | CSS Variable | Light Mode | Dark Mode |
|---|---|---|---|
| **Primary Blue** | `--primary-blue` | `#005DA6` | White (for contrast) |
| **White** | `--white` | `#FFFFFF` | `#FFFFFF` |
| **Dark Gray 1** | `--dark-gray-1` | `#616161` | Inverted/Adjusted |
| **Dark Gray 2** | `--dark-gray-2` | `#595959` | Inverted/Adjusted |
| **Black** | `--black` | `#000000` | `#000000` |

### Typography

- **Switzer:** Primary font for everything (headings, body), loaded globally.
- **Display Fonts:** Some custom assets (`GYOZAH.otf`, `RevoidDemo-Bold.otf`) are available but refer to existing components on when to use them.
- **Headings:** Use classes like `font-black uppercase tracking-tighter leading-[0.95]`.
- **Body Text:** Use `text-sm` or `text-base text-muted-foreground leading-relaxed`.
- **Labels/Eyebrows:** Use `text-[10px] font-black uppercase tracking-[0.2em]`.

### Spacing & Layout

- **Scale:** `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96` px mapped to standard Tailwind spacing (`p-4`, `m-8`, `gap-12`).
- **Section Rhythm:** Use `py-24 md:py-32` for consistent vertical rhythm.
- **Page Container:** Use `mx-auto max-w-[1440px] px-6 md:px-12` to bound main content.

### Theming Rules

- **Both Modes Required:** Every page and component must work seamlessly in both light and dark modes.
- **No Hardcoding:** Never use `text-white`, `bg-black`, or custom hex classes (`bg-[#...]`).
- **Semantic Tokens:** Exclusively use semantic Tailwind tokens: `bg-background`, `text-foreground`, `text-muted-foreground`, `bg-muted`, `bg-card`, `border-border`, `bg-primary`, etc.
- **Opacities:** Use opacity modifiers on semantic tokens (e.g., `text-foreground/60`, `border-foreground/12`).
- **Toggle:** The theme toggle persists to `localStorage['msajce-theme']` and animates via a view transition.

---

## 3. Project Structure

```text
src/
├── assets/                 # Static assets, local imagery, and logos
├── components/
│   ├── layout/             # Global layout elements (SiteHeader, SiteFooter)
│   ├── motion/             # Centralized animation kit (Reveal, Stagger, Magnetic)
│   ├── sections/           # Large page-level reusable blocks (AboutBanner, WhyJoin, etc.)
│   ├── shared/             # Generic shared components across different contexts
│   ├── typography/         # Specialized text components
│   ├── ui/                 # shadcn/ui primitives (Button, Dialog, etc.)
│   └── widgets/            # Interactive standalone pieces (Chatbot, Marquee, HeroReel)
│   └── (root)              # Specialized components like DeveloperCard, CrowdCanvas
├── content/                # Markdown or local content data (e.g., departments)
├── data/                   # Static JSON or TS data arrays
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities, configs, Supabase client
├── routes/                 # File-based routing (TanStack Router)
│   ├── __root.tsx          # App shell, global context, navbar, footer, lenis setup
│   ├── index.tsx           # Homepage
│   ├── about.tsx           # About Us
│   ├── academics.tsx       # Academics overview
│   ├── curriculum.tsx      # Curriculum page
│   ├── admissions.tsx      # Admissions information
│   ├── campus-life.tsx     # Campus Life details
│   ├── contact.tsx         # Contact Form & Details
│   ├── credits.tsx         # Credits / Developer Showcase
│   ├── placements.tsx      # Placements & Recruiters
│   ├── student-housing.tsx # Housing details
│   ├── events.$eventId.tsx # Dynamic Event Detail page
│   ├── programmes.index.tsx# List of all programmes
│   └── programmes.$courseId.tsx # Dynamic Programme Detail page
├── router.tsx              # Router configuration
├── routeTree.gen.ts        # AUTO-GENERATED route tree (DO NOT EDIT)
├── server.ts               # Server-side functions and entry logic
├── start.ts                # Start instance config
└── styles.css              # Global styles, Tailwind `@theme` configuration, keyframes
```

---

## 4. Reusable Components Arsenal

When building new pages, compose them using these existing pieces before building from scratch.

### 4.1 Sections (`src/components/sections/`)
- `AboutBannerSection.tsx`: Two-column ranking + grayscale slideshow.
- `AcademicProgrammesSection.tsx`: Sand-toned editorial grid listing academic paths.
- `ContactSection.tsx`: Forms and location data.
- `NewsAndEventsSection.tsx`: Feed of upcoming events.
- `TestimonialSection.tsx`: Carousel/Grid of student/alumni quotes.
- `WhyJoinSection.tsx`: Numbered index rows with hover expand functionality.

### 4.2 Widgets (`src/components/widgets/`)
- `CampusVideoReveal.tsx`: Interactive video player component.
- `ChatbotWidget.tsx`: Persistent or modal AI/Help chatbot.
- `DepartmentHighlightsGrid.tsx`: Bento-style grid for department stats.
- `HeroReel.tsx`: Dynamic scrolling image reel.
- `KeyDriversAccordion.tsx`: Accordion for core institutional values.
- `RecruiterMarquee.tsx`: Infinite scrolling logo strip for top recruiters.

### 4.3 Motion Kit (`src/components/motion/`)
Always import from here instead of using raw `motion.div`.

- `<Reveal variant="rise|blur|mask|clip|tilt|scale">`: One-shot in-view reveal.
- `<Stagger gap delay>` + `<StaggerItem>`: For lists, link stacks, and card grids.
- `<SplitText>`: Headline letter/word entrance animations.
- `<Parallax speed>`: Scroll-linked image/text drift.
- `<Magnetic>`: Interactive buttons/elements that pull toward the cursor.
- `<CountUp to>`: Spring-driven animated stat numbers.

*Rules for Motion:* Reveals should fire once (`viewport={{ once: true }}`), stagger gaps between `0.05–0.09s`. Do not over-animate. Use CSS keyframes in `styles.css` for simple continuous effects.

---

## 5. Routing (TanStack Start)

- **File-Based Routing:** Every file in `src/routes/` maps to a URL. 
- **Auto-generation:** TanStack Router automatically generates `routeTree.gen.ts`. **Do not edit this file manually.** If there are conflicts or it's missing, run the build process or `npx @tanstack/router-cli generate` to regenerate it.
- **Dynamic Routes:** Use `$` syntax for dynamic segments (e.g., `events.$eventId.tsx`). Extract params using the `Route.useParams()` hook.
- **Navigation:** Always use the `<Link>` component from `@tanstack/react-router`. Never use raw `<a href="...">` for internal routing to ensure client-side navigation.

---

## 6. How to Build a New Page (Agent Instructions)

Whenever an AI Agent is tasked with creating a new page, follow this exact workflow:

1. **Create the Route File:**
   Create a new file in `src/routes/` corresponding to the URL (e.g., `src/routes/research.tsx`). Use `.` to indicate nested paths (e.g., `src/routes/departments.civil.tsx`).

2. **Define Metadata:**
   Always include `head()` metadata. Make the `title` concise (<60 chars) and the `description` descriptive (<160 chars). Include OpenGraph and Twitter card tags.

3. **Scaffold the Route:**
   Copy this exact structure to start:

   ```tsx
   import { createFileRoute } from "@tanstack/react-router";
   import { Reveal, Stagger, StaggerItem } from "@/components/motion";
   import { PageHero } from "@/components/PageHero"; // Use if available, or build custom hero

   const title = "Page Name — MSAJCE";
   const description = "One clear sentence under 160 characters.";

   export const Route = createFileRoute("/page-name")({
     head: () => ({
       meta: [
         { title },
         { name: "description", content: description },
         { property: "og:title", content: title },
         { property: "og:description", content: description },
         { property: "og:type", content: "website" },
         { name: "twitter:card", content: "summary_large_image" },
       ],
     }),
     component: PageName,
   });

   const pageData = [ /* Data driven content goes here */ ];

   function PageName() {
     return (
       <main className="bg-background min-h-screen">
         {/* Standard Inner Page Hero */}
         <PageHero 
           eyebrow="Section Name" 
           title="BIG EDITORIAL HEADLINE" 
           description="Supporting line goes here." 
         />

         {/* Standard Content Section */}
         <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
           <Reveal variant="mask">
             <h2 className="text-[8vw] font-black uppercase leading-[0.95] tracking-tighter text-foreground md:text-[4vw]">
               Section Title
             </h2>
           </Reveal>

           <Stagger gap={0.07} className="mt-12 grid gap-px border-t border-border md:grid-cols-3">
             {pageData.map((item, index) => (
               <StaggerItem key={index}>
                 <article className="group border-b border-border bg-card p-8 transition-colors hover:bg-muted">
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                     {item.tag}
                   </span>
                   <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-foreground">
                     {item.title}
                   </h3>
                   <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                     {item.body}
                   </p>
                 </article>
               </StaggerItem>
             ))}
           </Stagger>
         </section>
       </main>
     );
   }
   ```

4. **Integrate Existing Components:**
   Look at `src/components/sections/` and `src/components/widgets/` to see if existing blocks can be used instead of building custom grid layouts.

5. **Update Navigation:**
   Update `src/components/layout/SiteHeader.tsx` (mega-menu and mobile accordion) and `src/components/layout/SiteFooter.tsx` if the page needs to be globally accessible.

6. **Validate Constraints:**
   Test responsiveness (especially mobile at 394px) and toggle between Dark and Light mode to ensure text contrast and semantic variables are functioning properly.

---

## 7. Hard Rules Checklist for Agents

- [ ] **No Custom Colors:** Do not introduce new colors, fonts, or icons.
- [ ] **Semantic Theming:** Every element uses `bg-background`, `text-foreground`, `border-border`, etc. Light/Dark mode MUST work flawlessly.
- [ ] **Data-Driven UI:** Map over data arrays for repetitive elements instead of copying and pasting JSX blocks.
- [ ] **Motion:** Use the `@/components/motion` kit exclusively. Do not write raw `motion.div` configs unless building a completely novel interaction.
- [ ] **SEO Setup:** Provide a unique `head()` payload for every route. 
- [ ] **Correct Link usage:** Import and use `<Link to="...">` from `@tanstack/react-router`. No `<a href="...">` for internal pages.
- [ ] **Image Zoom Warning:** STRICTLY avoid using zoom or popup hover effects (e.g., `group-hover:scale-105`) on image components as per project guidelines. Keep designs flat and static regarding image scaling on hover.
- [ ] **Do Not Edit Gen Files:** Never modify `src/routeTree.gen.ts`.
