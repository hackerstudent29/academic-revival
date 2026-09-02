import { createFileRoute } from '@tanstack/react-router';
import { CourseCatalogSection } from '@/components/widgets/CourseCatalogSection';

const title = "Programmes Offered — MSAJCE";
const description =
  "Explore all undergraduate (B.E./B.Tech), postgraduate (M.E.), and doctoral research (Ph.D) engineering degree programmes offered at MSAJCE.";

export const Route = createFileRoute('/programmes-offered')({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      level: search['level'] as string | undefined,
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
  const { level } = Route.useSearch();
  return (
    <main className="bg-background min-h-screen pt-4 md:pt-8">
      <CourseCatalogSection 
        initialLevel={level} 
        titleOverride="PROGRAMMES OFFERED" 
        showViewToggles={true} 
        defaultViewMode="table"
      />
    </main>
  );
}
