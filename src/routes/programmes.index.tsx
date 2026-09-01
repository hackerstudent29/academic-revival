import { createFileRoute } from '@tanstack/react-router';
import { CourseCatalogSection } from '@/components/widgets/CourseCatalogSection';

export const Route = createFileRoute('/programmes/')({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      level: search.level as string | undefined,
    };
  },
  component: ProgrammesIndex,
});

function ProgrammesIndex() {
  const { level } = Route.useSearch();
  return (
    <main className="bg-background min-h-screen pt-4 md:pt-8">
      <CourseCatalogSection initialLevel={level} titleOverride="ACADEMIC PROGRAMMES & DEPARTMENTS" />
    </main>
  );
}

