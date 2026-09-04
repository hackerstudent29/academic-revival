import { createFileRoute } from '@tanstack/react-router';
import { CourseCatalogSection } from '@/components/widgets/CourseCatalogSection';

const title = "Programmes Offered — MSAJCE";
const description =
  "Explore all undergraduate (B.E./B.Tech), postgraduate (M.E.), and doctoral research (Ph.D) engineering degree programmes offered at MSAJCE.";

interface ProgrammesSearch {
  level?: string | undefined;
  view?: 'list' | 'table' | 'grid' | undefined;
}

export const Route = createFileRoute('/programmes-offered')({
  validateSearch: (search: Record<string, unknown>): ProgrammesSearch => {
    return {
      level: search['level'] as string | undefined,
      view: search['view'] as ('list' | 'table' | 'grid') | undefined,
    };
  },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProgrammesOffered,
});

function ProgrammesOffered() {
  const { level, view } = Route.useSearch();
  const normalizedLevel = (level === "Doctorate" || level === "PhD") ? "Research (Ph.D)" : level;

  return (
    <main className="bg-background min-h-screen pt-0 md:pt-1">
      <CourseCatalogSection 
        initialLevel={normalizedLevel} 
        titleOverride="PROGRAMMES OFFERED" 
        showViewToggles={true} 
        defaultViewMode={view || "table"}
      />
    </main>
  );
}
