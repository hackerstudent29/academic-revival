import { createFileRoute } from '@tanstack/react-router';
import { CourseCatalogSection } from '@/components/widgets/CourseCatalogSection';

interface ProgrammesSearch {
  level?: string | undefined;
  view?: 'list' | 'table' | 'grid' | undefined;
}

export const Route = createFileRoute('/programmes/')({
  validateSearch: (search: Record<string, unknown>): ProgrammesSearch => {
    return {
      level: search['level'] as string | undefined,
      view: search['view'] as ('list' | 'table' | 'grid') | undefined,
    };
  },
  component: ProgrammesIndex,
});

function ProgrammesIndex() {
  const { level, view } = Route.useSearch();
  
  // Normalize level strings so Doctorate or Research (Ph.D) map seamlessly
  const normalizedLevel = (level === "Doctorate" || level === "PhD") ? "Research (Ph.D)" : level;

  return (
    <main className="bg-background min-h-screen pt-0 md:pt-1">
      <CourseCatalogSection 
        initialLevel={normalizedLevel} 
        titleOverride="PROGRAMMES OFFERED" 
        defaultViewMode={view || "table"} 
      />
    </main>
  );
}
