import { createFileRoute, Link } from "@tanstack/react-router";
import { Stagger, StaggerItem } from "@/components/motion";
import { GraduationCap, Briefcase, Search, ArrowRight } from "lucide-react";
import { CourseCatalogSection } from "@/components/widgets/CourseCatalogSection";

const title = "Admissions 2026-2027 — Apply to MSAJCE";
const description =
  "Eligibility, application steps, documents and scholarships for undergraduate and postgraduate engineering admissions at MSAJCE.";

export const Route = createFileRoute("/admissions")({
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Admissions,
});

function Admissions() {
  const { level } = Route.useSearch();

  return (
    <main className="bg-background min-h-screen pt-0 md:pt-1">
      <section className="mx-auto max-w-[1440px] px-6 py-6 md:px-12 md:py-10">
        <Stagger gap={0.1} className="grid md:grid-cols-3 gap-6">
          <StaggerItem>
            <Link to="/admissions/eligibility" className="group flex flex-col justify-between h-full border border-border bg-card p-8 hover:bg-muted/50 transition-colors">
              <div>
                <GraduationCap className="h-8 w-8 text-primary mb-6" />
                <h3 className="text-xl font-bold uppercase tracking-tight text-primary font-oswald mb-3">Admission Eligibility</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">Check UG, PG, and Ph.D. criteria, community-wise cutoffs, and entry pathways.</p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-primary font-oswald">View details</span>
                <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </StaggerItem>
          
          <StaggerItem>
            <Link to="/admissions/procedure" className="group flex flex-col justify-between h-full border border-border bg-card p-8 hover:bg-muted/50 transition-colors">
              <div>
                <Briefcase className="h-8 w-8 text-primary mb-6" />
                <h3 className="text-xl font-bold uppercase tracking-tight text-primary font-oswald mb-3">Admission Procedure</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">Three simple steps to apply online, pay your fees, and confirm your seat.</p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-primary font-oswald">View details</span>
                <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link to="/admissions/scholarships" className="group flex flex-col justify-between h-full border border-border bg-card p-8 hover:bg-muted/50 transition-colors">
              <div>
                <Search className="h-8 w-8 text-primary mb-6" />
                <h3 className="text-xl font-bold uppercase tracking-tight text-primary font-oswald mb-3">Scholarship Programmes</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">Government and institutional financial assistance for eligible students.</p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-primary font-oswald">View details</span>
                <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </StaggerItem>
        </Stagger>
      </section>

      <section id="programmes" className="bg-background text-foreground border-t border-border">
        <CourseCatalogSection 
          initialLevel={level} 
          titleOverride="Programmes & Specializations" 
          showViewToggles={true} 
          defaultViewMode="table"
        />
      </section>
    </main>
  );
}
