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