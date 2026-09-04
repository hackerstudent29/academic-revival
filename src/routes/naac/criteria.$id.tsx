import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileText, ChevronRight, Download } from "lucide-react";
import { Reveal } from "@/components/motion";

import naacData from "@/data/naac.json";

export const Route = createFileRoute("/naac/criteria/$id")({
  component: CriterionDetail,
});

function CriterionDetail() {
  const { id } = Route.useParams();
  
  const criterion = naacData.criteria.find(c => c.id === id);

  if (!criterion) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[#F7F7F5] dark:bg-[#121214]">
        <h2 className="text-2xl font-oswald text-foreground">Criterion Not Found</h2>
        <Link to="/naac" className="mt-4 text-primary hover:underline">Return to NAAC Portal</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F5] dark:bg-[#121214] pb-24">
      {/* HEADER */}
      <div className="bg-card border-b border-border py-8 md:py-12">
        <div className="mx-auto max-w-[1000px] px-6 md:px-12 w-full">
          <Reveal variant="slide-up">
            <Link to="/naac" className="inline-flex items-center text-sm font-bold uppercase tracking-widest font-mono text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" /> NAAC / CRITERIA / {criterion.number}
            </Link>
            
            <div className="flex items-start gap-6 md:gap-8">
              <div className="hidden md:flex text-6xl md:text-8xl font-black font-oswald text-primary/20">
                {criterion.number}
              </div>
              <div>
                <h1 className="text-3xl md:text-5xl font-black font-oswald uppercase text-foreground mb-4 leading-tight">
                  {criterion.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium font-sans">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-sm font-bold">
                    Criterion {criterion.number}
                  </span>
                  <span className="border border-border bg-background px-4 py-2 rounded-sm">
                    {criterion.score} Maximum Marks
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* METRICS */}
      <div className="mx-auto max-w-[1000px] px-6 md:px-12 w-full pt-16">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[2px] w-12 bg-primary"></div>
            <h2 className="text-2xl md:text-3xl font-black font-oswald uppercase text-foreground">Metrics</h2>
          </div>
        </Reveal>

        <div className="space-y-6">
          {criterion.metrics.map((metric, idx) => (
            <Reveal key={idx} variant="slide-up" delay={idx * 0.05}>
              <div className="bg-card border border-border p-6 md:p-8 rounded-sm hover:border-primary/50 transition-colors shadow-sm">
                
                {/* Metric Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <span className="bg-primary/10 text-primary font-black font-oswald text-lg px-3 py-1 rounded-sm shrink-0">
                      {metric.number}
                    </span>
                    <p className="text-base md:text-[17px] font-sans text-foreground leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                  {metric.score > 0 && (
                    <span className="shrink-0 font-mono text-sm font-bold text-muted-foreground bg-background border border-border px-3 py-1 rounded-sm">
                      Score: {metric.score}
                    </span>
                  )}
                </div>

                {/* Metric Documents */}
                {metric.links.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-3">
                    {metric.links.map((link, lIdx) => (
                      <a 
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-3 p-3 rounded-sm bg-background border border-border hover:border-primary transition-colors"
                      >
                        <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary shrink-0 transition-colors mt-0.5" />
                        <span className="text-sm font-sans font-medium text-foreground group-hover:text-primary transition-colors flex-1 line-clamp-2">
                          {link.title || "View Document"}
                        </span>
                        <Download className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                      </a>
                    ))}
                  </div>
                )}

              </div>
            </Reveal>
          ))}

          {criterion.metrics.length === 0 && (
            <div className="text-center py-12 text-muted-foreground font-sans bg-card border border-dashed border-border rounded-sm">
              No metrics available for this criterion.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
