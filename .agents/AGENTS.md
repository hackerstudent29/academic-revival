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
> **No Video Play Overlays & No Floating Badges on Images**: When adding image components or hero image showcases, NEVER overlay fake video play buttons/circles or floating bottom-right text pill badges.
> **Boxy Asymmetrical Button & Badge Shapes**: Buttons and badges on hero components must use boxy asymmetrical rectangular shapes (`rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs` or `rounded-sm`) rather than generic fully rounded pills (`rounded-full`).
> **No Image Zoom/Popup Animations**: Strictly avoid using zoom or popup hover effects (e.g., `group-hover:scale-105` or `scale-110`). Images must remain flat and static on hover.
> **Universal #121214 Dark Theme Background**: In Dark Mode (`.dark`), all pages and sections use **`#121214` (Neutral Dark Charcoal)** with zero blue tint. NEVER touch Light Mode colors (`#F9F9F8` / `#F3F3F2`).
> **Vision & Mission Badges**: Badges for `V`, `V1`, `M1`, `M2`, `M3` must use **Black / High-Contrast Dark font** (`text-foreground font-oswald font-black bg-foreground/10 border-foreground/20`).
> **Secondary Sub-Nav Headers**: Concise department titles must render in a larger, prominent font size (`text-sm sm:text-base md:text-lg xl:text-xl font-black font-oswald uppercase text-primary`).
> **Tight Header Spacing**: When creating new pages or section layouts, keep spacing between the top sticky header and main content minimal (`pt-0 md:pt-1` on `<main>` / `pt-2 md:pt-4` on section wrapper). NEVER leave large dead padding or empty gaps above page content.
> **No AI Symbols or Eyebrow Sentences**: NEVER add AI symbols (such as Lucide `Sparkles`) or introductory eyebrows/sentences (e.g. `Welcome to the Learning Centre`). Use only the clean, direct section title.
> **Authentic Real Photographs (No AI Imagery)**: Always use authentic, real architectural and campus photography. Strictly avoid AI-generated images that look synthetic or artificial.
> **Signature Asymmetrical Border Design for Images**: Images and media showcases must use our signature boxy asymmetrical corner styling (`rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs` or `rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs`) with a crisp border (`border border-border`) and subtle shadow.
> **Strict Ban on Cards**: STRICTLY DO NOT use card components or boxed card containers (`bg-card`, rounded boxed card frames, card shadows) for page components and elements unless the user explicitly and personally requests cards. Use clean, open editorial lists, transparent tables, and crisp divider lines (`divide-y divide-border` / `border-b border-border`) instead.
> **Multi-Section Alternating Wave Background Design**: Whenever creating or restructuring any page, tab, or view with two or more sections, you MUST use our signature alternating organic wave background color split design (as demonstrated in `/library`). Alternate between Section A (`bg-white dark:bg-[#121214]`) and Section B (`bg-[#F3F3F2] dark:bg-[#18181B]`) separated by smooth organic wave SVGs. NEVER add harsh horizontal divider lines (`border-t border-border` or `<hr>`) between sections or before visual galleries; the wave transitions provide the natural, elegant visual boundary.