<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
> [!IMPORTANT]
> **Hardcoded Typography System (Strictly Enforced on All Existing & Upcoming Pages)**:
> - **Page Hero Titles**: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-oswald uppercase text-foreground tracking-tight leading-none` (docked flush at the hero end `pb-0`, inside theme-adaptive container `bg-white/95 dark:bg-[#121214]/95 text-foreground border-border dark:border-white/15 border-l-4 border-primary`). Never add trailing periods `.`.
> - **Page Section Titles**: `text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary` (Universal standard derived from *"An artistic community on the south side"* & *"Why Join MSAJCE"*). Never add trailing periods `.`. Never add AI eyebrows, kickers, or introductory fluff above it.
> - **Secondary Subheadings / Subsections**: `text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground`.
> - **Body Text / Narrative Paragraphs / Articles / Descriptions**: `text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed`.
> - **Secondary Sub-Nav Department Titles**: `text-sm sm:text-base md:text-lg xl:text-xl font-black font-oswald uppercase text-primary`.
> - **Vision & Mission Badges (`V`, `V1`, `M1-3`, `QP`)**: `text-foreground font-oswald font-black bg-foreground/10 border-foreground/20`.
>
> **Strict Content Fidelity (User-Provided Content ONLY)**:
> - **MANDATORY**: Use ONLY the content provided by the user for any page or section.
> - **Strictly Banned**: NEVER invent, extrapolate, hallucinate, or pad pages with fabricated text, fake statistics, synthetic awards, dummy quotes, or unrequested secondary navbars/sections. If the user provides 3 sentences, render only those 3 sentences cleanly and beautifully without padding.
>
> **Strict Page Minimalism (Reference: `/library` & `/about/overview`)**:
> - **Strict Ban on Cards**: STRICTLY DO NOT use card components or boxed card containers (`bg-card`, rounded boxed card frames, card drop shadows) for page components and elements unless the user explicitly and personally requests cards. Use clean, open editorial lists, transparent tables, and minimal spacing.
> - **Strict Ban on Unwanted Lines**: STRICTLY DO NOT use `<hr>` tags or harsh horizontal divider lines (`border-t border-border`) between sections or before galleries. Visual separation is achieved purely through alternating wave backgrounds or natural breathing room.
> - **Multi-Section Alternating Wave Background Design**: Whenever creating or restructuring any page, tab, or view with two or more sections, you MUST use our signature alternating organic wave background color split design (as demonstrated in `/library`). Alternate between Section A (`bg-white dark:bg-[#121214]`) and Section B (`bg-[#F3F3F2] dark:bg-[#18181B]`) separated by smooth organic wave SVGs.
> - **Tight Header Spacing**: Spacing between the top sticky header and main content must remain minimal (`pt-0 md:pt-1` on `<main>` / `pt-2 md:pt-4` on section wrapper). NEVER leave large dead padding or empty gaps above page content.
> - **No AI Symbols or Eyebrow Sentences**: NEVER add AI symbols (such as Lucide `Sparkles`) or introductory eyebrows/sentences (e.g. `ABOUT MSAJCE // ...` or `Welcome to...`). Use only the clean, direct section title.
> - **No Video Play Overlays & No Floating Badges on Images**: When adding image components or hero image showcases, NEVER overlay fake video play buttons/circles or floating bottom-right text pill badges.
> - **Boxy Asymmetrical Button & Badge Shapes**: Buttons and badges on hero and content components must use boxy asymmetrical rectangular shapes (`rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs` or `rounded-sm`) rather than generic fully rounded pills (`rounded-full`).
> - **No Image Zoom/Popup Animations**: Strictly avoid using zoom or popup hover effects (e.g., `group-hover:scale-105` or `scale-110`). Images must remain flat and static on hover.
> - **Authentic Real Photographs (No AI Imagery)**: Always use authentic, real architectural and campus photography. Strictly avoid AI-generated images that look synthetic or artificial.
> - **Universal #121214 Dark Theme Background**: In Dark Mode (`.dark`), all pages and sections use **`#121214` (Neutral Dark Charcoal)** with zero blue tint. NEVER touch Light Mode colors (`#F9F9F8` / `#F3F3F2`).