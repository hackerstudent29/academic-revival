---
name: ocean-wave-button
description: Rules, CSS keyframes, and React component standards for MSAJCE Liquid Ocean Wave Fill Effect and Boxy Asymmetrical Buttons.
---

# MSAJCE Liquid Ocean Wave Button Fill Effect Skill Guide

## Overview
This skill defines the canonical standard for buttons across the MSAJCE website. All buttons follow a sharp, boxy asymmetrical geometry in default state, and trigger a dynamic rolling **Liquid Ocean Wave Fill Effect** on hover using signature Academic Maroon Red (`#9E2339`).

---

## 1. Design & Layout Specification

### Default State (Not Hovered)
- **Shape / Geometry**: Sharp boxy asymmetrical corners (`rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs`).
- **Color Palette**: Medium-light stone grey fill `bg-stone-200/90` (`dark:bg-neutral-800`), crisp dark text `text-foreground` (`dark:text-white`), and subtle border `border-stone-300` (`dark:border-neutral-700`).
- **Typography**: Bold uppercase Oswald font (`font-bold font-oswald text-xs uppercase tracking-wider`).
- **Wave Overlay State**: The ocean wave layer is completely hidden 150% below the button base (`translate-y-[150%]`), leaving zero red bleed in default state.

### Hover State
- **Wave Elevation**: Liquid container transitions up (`group-hover:translate-y-0`) with a smooth 500ms `ease-out` transition.
- **Wave Crest Animation**: Continuous horizontal undulating ripple powered by `@keyframes ocean-wave-ripple` (`.animate-ocean-wave` and `.animate-ocean-wave-reverse`).
- **Full Coverage**: Container height is 140% (`h-[140%]`), ensuring 100% solid maroon red coverage from top to bottom with zero gap at the base.
- **Text Color**: Smoothly transitions to high-contrast crisp white (`group-hover:text-white`).

---

## 2. CSS Keyframes Definition ([`src/styles.css`](file:///d:/.gemini/msajce%20college%20website%20final/src/styles.css))

```css
/* Ocean Wave Liquid Fill Effect Keyframes */
@keyframes ocean-wave-ripple {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-20%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-ocean-wave {
  animation: ocean-wave-ripple 3.2s ease-in-out infinite;
}

.animate-ocean-wave-reverse {
  animation: ocean-wave-ripple 2.4s ease-in-out infinite reverse;
}
```

---

## 3. Reusable React SVG Wave Overlay Structure

```tsx
<span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
  <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
    {/* Ocean Wave Crest SVG (Primary) */}
    <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
      <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
      </svg>
    </span>
    {/* Secondary Depth Layer Wave */}
    <span className="absolute -top-4 left-0 w-[200%] h-5 opacity-40 pointer-events-none block">
      <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave-reverse" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,30 C200,-30 400,90 600,10 C800,-40 1000,70 1200,20 L1200,120 L0,120 Z" />
      </svg>
    </span>
  </span>
</span>
```

---

## 4. Universal Component Integration ([`src/components/ui/button.tsx`](file:///d:/.gemini/msajce%20college%20website%20final/src/components/ui/button.tsx))

All UI buttons rendered via `<Button>` component automatically include the Ocean Wave Fill overlay unless explicitly disabled via `disableWave` or using `ghost`/`link` variants.
