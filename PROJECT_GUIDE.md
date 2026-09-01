http://localhost:8080/programmes/civil-engineering# MSAJCE Website — Agent, Design & Build Guide

Single source of truth for anyone (human or AI agent) adding pages/sections to this project.
Read this file **before** writing any code. Do not invent new colors, fonts, or libraries.

---

## 1. Tech stack (fixed — do not swap)

| Layer | Choice | Notes |
|---|---|---|
| Framework | **TanStack Start v1** (`@tanstack/react-start`) | SSR + file-based routing. Never add react-router-dom / Next.js patterns. |
| UI | **React 19** + TypeScript | |
| Bundler | **Vite** + `@tailwindcss/vite` | No `postcss.config.js`, no `tailwind.config.js`. |
| Styling | **Tailwind CSS v4** (CSS-first) | All tokens live in `src/styles.css` under `@theme inline`. |
| Components | **shadcn/ui** on **Radix UI** | `src/components/ui/*` — already installed, reuse them. |
| Animation | **Framer Motion** (`framer-motion` v13) | Always go through `src/components/motion`. |
| Smooth scroll | **Lenis** | Mounted once in `SmoothScroll.tsx` via `__root.tsx`. |
| Icons | **lucide-react** | Only icon library allowed. |
| Carousels | **Swiper** (fade/slideshow), **Embla** (shadcn carousel) | |
| Forms | **react-hook-form** + **zod** (`@hookform/resolvers`) | |
| Data | **@tanstack/react-query** | loader `ensureQueryData` + `useSuspenseQuery`. |
| Toasts | **sonner** (`@/components/ui/sonner`) | There is no `use-toast`. |

Backend (if ever needed): Lovable Cloud + `createServerFn` from `@tanstack/react-start`. No Express, no edge-function folders.

---

## 2. Design language (MSAJCE skill — non-negotiable)

**Aesthetic:** bold minimalist editorial grid (UAL/Central Saint Martins style) — huge uppercase type, hairline rules, big margins — fused with Apple-like polish: `backdrop-filter` glass, spring easing, restrained motion.

### Palette — only these five colors exist
| Name | Value |
|---|---|
| Primary Blue | `#005DA6` |
| White | `#FFFFFF` |
| Dark Gray 1 | `#616161` |
| Dark Gray 2 | `#595959` |
| Black | `#000000` |

In dark mode `--primary-blue`/`--primary` resolve to **white** (blue lacks contrast on black). Extra tokens `sand` / `clay` / `navy` exist only for the ported editorial sections — do not introduce more.

### Typography
- **Switzer** for everything (headings + body), loaded from Fontshare via `<link>` in `src/routes/__root.tsx`.
- Mapped to `--font-sans` and `--font-display`.
- Headings: `font-black uppercase tracking-tighter leading-[0.95]`.
- Body: `text-sm/text-base text-muted-foreground leading-relaxed`.
- Eyebrows/labels: `text-[10px] font-black uppercase tracking-[0.2em]`.

### Spacing scale
`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96` px only → Tailwind `1 2 3 4 6 8 12 16 24`.
Section rhythm: `py-24 md:py-32`. Page container: `mx-auto max-w-[1440px] px-6 md:px-12`.

### Theming rules
- **Every** page/component must work in light **and** dark. Default is light.
- **Never** hardcode `text-white`, `bg-black`, or hex/`bg-[#...]`.
- Use semantic tokens only: `bg-background`, `text-foreground`, `text-muted-foreground`,
  `bg-muted`, `bg-card`, `border-border`, `bg-primary`/`text-primary-foreground`,
  and opacity variants like `text-foreground/60`, `border-foreground/12`.
- Theme toggle: `src/components/ThemeToggle.tsx` — toggles `.dark` on `<html>`, persists to `localStorage['msajce-theme']`, animates with a circular View-Transition reveal. A pre-paint inline script in `__root.tsx` prevents flash.
- Imagery is grayscale-filtered to hold the monochrome look; blue is an accent only.

---

## 3. Where things live

```
src/
  routes/               file-based routes (URL = filename)
    __root.tsx          html shell, fonts, theme script, header/footer, Lenis, ScrollToTop
    index.tsx           home (editorial split hero)
    about.tsx academics.tsx admissions.tsx placements.tsx campus-life.tsx contact.tsx
  components/
    SiteHeader.tsx      sticky glass navbar + mega-menu + mobile accordion
    SiteFooter.tsx      fixed reveal footer w/ staggered entrance + social icons
    FooterRevealWrapper.tsx  spacer/drawer mechanics for the footer reveal
    PageHero.tsx        REUSE THIS for every inner page hero
    Logo.tsx            theme-aware logo
    ThemeToggle.tsx SmoothScroll.tsx ScrollToTop.tsx
    HeroReel.tsx DynamicText.tsx RotatingWord.tsx RecruiterMarquee.tsx
    AcademicProgrammesSection.tsx WhyJoinSection.tsx AboutBannerSection.tsx
    motion/index.tsx    ← the animation kit (below)
    ui/                 shadcn primitives
  styles.css            ALL tokens, keyframes, .msajce-header-glass
  assets/               images + logo
```

Never edit `src/routeTree.gen.ts` (generated).

---

## 4. Animation kit — `@/components/motion`

Import from here instead of using raw `motion.div` for reveals.

```ts
SPRING_SOFT    = { type:"spring", stiffness:120, damping:20, mass:0.9 }  // default sections
SPRING_SNAPPY  = { type:"spring", stiffness:420, damping:30, mass:0.6 }  // hovers, toggles
SPRING_BOUNCY  = { type:"spring", stiffness:260, damping:14, mass:0.8 }  // playful accents
EASE_EDITORIAL = [0.22, 1, 0.36, 1]                                      // non-spring tweens
```

| Component | Use |
|---|---|
| `<Reveal variant="rise\|blur\|mask\|clip\|tilt\|scale">` | one-shot in-view reveal |
| `<Stagger gap delay>` + `<StaggerItem>` | lists, link stacks, card grids |
| `<SplitText>` | headline letter/word entrance |
| `<Parallax speed>` | scroll-linked image/text drift |
| `<Magnetic>` | CTA buttons that pull toward the cursor |
| `<CountUp to>` | spring-driven stat numbers |

Rules: reveals fire once (`viewport={{ once:true }}`), stagger gaps `0.05–0.09s`, never animate more than ~8 items at once, respect `prefers-reduced-motion`. Keyframe-based effects (`msajce-marquee`, `msajce-reel`, `msajce-theme-reveal`) live in `styles.css`.

---

## 5. How to build a NEW page so it matches the site

1. **Create the route file** — `src/routes/<name>.tsx`; `createFileRoute("/<name>")` must match the filename exactly (dots = slashes, `index.tsx` = leaf).
2. **Add `head()` metadata** — unique `title` (<60 chars), `description` (<160), `og:title`, `og:description`, `og:type`, `twitter:card`. Never reuse another page's copy.
3. **Skeleton** (copy this shape):

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Stagger, StaggerItem, Parallax } from "@/components/motion";
import { PageHero } from "@/components/PageHero";

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

const items = [ /* data-driven, never repeat markup */ ];

function PageName() {
  return (
    <main className="bg-background">
      <PageHero eyebrow="Section" title="Big editorial headline" description="Supporting line." />

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
        <Reveal variant="mask">
          <h2 className="text-[8vw] font-black uppercase leading-[0.95] tracking-tighter text-foreground md:text-[4vw]">
            Section title
          </h2>
        </Reveal>

        <Stagger gap={0.07} className="mt-12 grid gap-px border-t border-border md:grid-cols-3">
          {items.map((it) => (
            <StaggerItem key={it.title}>
              <article className="group border-b border-border bg-card p-8 transition-colors hover:bg-muted">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{it.tag}</span>
                <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-foreground">{it.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </main>
  );
}
```

4. **Add it to navigation** in `src/components/SiteHeader.tsx` (desktop mega-menu group + mobile accordion) and, if top-level, to `SiteFooter.tsx`.
5. **Link with `<Link to="/page-name">`** from `@tanstack/react-router` — never `<a href>` for internal routes.
6. **Check both themes** and mobile (394px) before calling it done.

### Section-pattern library to pick from
- Editorial split hero (`index.tsx`) — text left, full-bleed image column right.
- Hairline stat band with `CountUp`.
- Numbered index rows w/ hover expand (`WhyJoinSection`).
- Sand-toned editorial grid (`AcademicProgrammesSection`).
- Two-column ranking + grayscale slideshow (`AboutBannerSection`).
- Infinite text marquee (`RecruiterMarquee`).

---

## 6. Hard rules checklist

- [ ] No new fonts, colors, or icon libraries.
- [ ] No hardcoded color utilities or hex values.
- [ ] Light **and** dark verified.
- [ ] Repeated markup replaced by `.map()` over a data array.
- [ ] Animations via `@/components/motion`, spring physics, `once: true`.
- [ ] Unique `head()` per route; one `<h1>` per page; alt text on images; `loading="lazy"`.
- [ ] Container `max-w-[1440px] px-6 md:px-12`; section `py-24 md:py-32`.
- [ ] `createFileRoute` string matches filename; `routeTree.gen.ts` untouched.
- [ ] Mobile-first: test at 394px, 768px, 1280px.

---

## 7. Commands

```bash
bun install     # deps
bun run dev     # dev server on :8080
bun run build   # production build
bun run lint
```
