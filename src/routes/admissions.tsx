import { useState, useMemo, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Magnetic, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/shared/PageHero";
import { ArrowRight, GraduationCap, Briefcase, Search, Plus, ArrowRight as ArrowRightIcon } from "lucide-react";
import { allCourses } from "@/lib/courseData";

const title = "Admissions 2026-2027 — Apply to MSAJCE";
const description =
  "Eligibility, application steps, documents and scholarships for undergraduate and postgraduate engineering admissions at MSAJCE.";

export const Route = createFileRoute("/admissions")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      level: search.level as string | undefined,
    }
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

const steps = [
  { n: "01", t: "Submit the application", d: "Complete the online form with your academic details and preferred branch." },
  { n: "02", t: "Document verification", d: "Upload marksheets, transfer certificate, community certificate and ID proof." },
  { n: "03", t: "Counselling & seat offer", d: "Attend counselling; merit and TNEA rank determine the seat allotment." },
  { n: "04", t: "Fee payment & joining", d: "Confirm the seat, pay fees and complete the orientation programme." },
];

const eligibility = [
  { level: "B.E. / B.Tech (Regular)", req: "Pass in 10+2 (HSC Academic/Vocational) with Physics, Chemistry and Mathematics with prescribed minimum percentage as per TN Govt and Anna University norms." },
  { level: "B.E. / B.Tech (Lateral Entry)", req: "Pass in Diploma examination in appropriate branch of Engineering or B.Sc. Degree with Mathematics for direct 2nd-year admission." },
  { level: "M.E. Programmes", req: "Recognized Bachelor's degree in appropriate branch with a valid TANCET, CEETA-PG, or GATE score." },
];



function Admissions() {
  const { level } = Route.useSearch();
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState<string | null>(level || null);
  const hasUrlFilter = !!level;

  // Keep internal state in sync with URL changes
  useEffect(() => {
    if (level) {
      setLevelFilter(level);
      // Optional: scroll to programmes if a level is selected
      const el = document.getElementById("programmes");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [level]);

  const filteredCourses = useMemo(() => {
    return allCourses.filter(course => {
      const matchSearch = course.name.toLowerCase().includes(search.toLowerCase());
      const matchLevel = levelFilter ? course.level === levelFilter : true;
      return matchSearch && matchLevel;
    });
  }, [search, levelFilter]);

  return (
    <main className="bg-background min-h-screen">
      <PageHero 
        eyebrow="ADMISSIONS 2026-2027" 
        title="APPLY TO MSAJCE" 
        description="Eligibility, application steps, documents and scholarships for undergraduate and postgraduate engineering admissions." 
      />

      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-16">
        <Stagger gap={0.1} className="grid md:grid-cols-3 gap-6" viewport={{ once: true }}>
          <StaggerItem>
            <Link to="/admissions/eligibility" className="group flex flex-col justify-between h-full border border-border bg-card p-8 hover:bg-muted/50 transition-colors">
              <div>
                <GraduationCap className="h-8 w-8 text-primary mb-6" />
                <h3 className="text-xl font-bold uppercase tracking-tight text-foreground mb-3">Admission Eligibility</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Check UG, PG, and Ph.D. criteria, community-wise cutoffs, and entry pathways.</p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-foreground">View details</span>
                <ArrowRightIcon className="h-5 w-5 text-foreground transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </StaggerItem>
          
          <StaggerItem>
            <Link to="/admissions/procedure" className="group flex flex-col justify-between h-full border border-border bg-card p-8 hover:bg-muted/50 transition-colors">
              <div>
                <Briefcase className="h-8 w-8 text-primary mb-6" />
                <h3 className="text-xl font-bold uppercase tracking-tight text-foreground mb-3">Admission Procedure</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Three simple steps to apply online, pay your fees, and confirm your seat.</p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-foreground">View details</span>
                <ArrowRightIcon className="h-5 w-5 text-foreground transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </StaggerItem>

          <StaggerItem>
            <Link to="/admissions/scholarships" className="group flex flex-col justify-between h-full border border-border bg-card p-8 hover:bg-muted/50 transition-colors">
              <div>
                <Search className="h-8 w-8 text-primary mb-6" />
                <h3 className="text-xl font-bold uppercase tracking-tight text-foreground mb-3">Scholarship Programmes</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Government and institutional financial assistance for eligible students.</p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-foreground">View details</span>
                <ArrowRightIcon className="h-5 w-5 text-foreground transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </StaggerItem>
        </Stagger>
      </section>

      <section id="programmes" className="bg-background text-foreground py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          {/* Header / Search */}
          <div className="border-b border-border pb-4 mb-6">
            <div className="relative flex items-center">
              <Search className="absolute left-0 text-muted-foreground" size={24} />
              <input 
                type="text"
                placeholder="Search for a course..."
                className="w-full bg-transparent pl-10 pr-10 py-3 text-xl md:text-2xl text-foreground placeholder:text-muted-foreground focus:outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ArrowRightIcon className="absolute right-0 text-foreground" size={24} />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            {hasUrlFilter ? (
              <div className="flex flex-wrap gap-3">
                <div className="px-5 py-2 border border-foreground bg-foreground text-background text-sm font-bold flex items-center gap-2">
                  {levelFilter} Programmes
                </div>
                <Link to="/programmes" className="px-4 py-2 border border-border text-muted-foreground hover:border-foreground text-sm flex items-center gap-2 transition-colors">
                  View all study options
                </Link>
              </div>
            ) : (
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => setLevelFilter(levelFilter === "Undergraduate" ? null : "Undergraduate")}
                  className={`px-4 py-2 border flex items-center gap-2 text-sm transition-colors ${levelFilter === "Undergraduate" ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:border-foreground"}`}
                >
                  Undergraduate {levelFilter === "Undergraduate" ? <span className="rotate-45 block transition-transform"><Plus size={16} /></span> : <Plus size={16} />}
                </button>
                <button 
                  onClick={() => setLevelFilter(levelFilter === "Postgraduate" ? null : "Postgraduate")}
                  className={`px-4 py-2 border flex items-center gap-2 text-sm transition-colors ${levelFilter === "Postgraduate" ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:border-foreground"}`}
                >
                  Postgraduate {levelFilter === "Postgraduate" ? <span className="rotate-45 block transition-transform"><Plus size={16} /></span> : <Plus size={16} />}
                </button>
                <button 
                  onClick={() => setLevelFilter(levelFilter === "Research (Ph.D)" ? null : "Research (Ph.D)")}
                  className={`px-4 py-2 border flex items-center gap-2 text-sm transition-colors ${levelFilter === "Research (Ph.D)" ? "bg-foreground text-background border-foreground" : "border-border text-muted-foreground hover:border-foreground"}`}
                >
                  Research (Ph.D) {levelFilter === "Research (Ph.D)" ? <span className="rotate-45 block transition-transform"><Plus size={16} /></span> : <Plus size={16} />}
                </button>
              </div>
            )}
            <div className="text-sm text-muted-foreground">
              Showing results 1 - {filteredCourses.length} of {allCourses.length}
            </div>
          </div>

          {/* Results List */}
          <div className="flex flex-col border-t border-border">
            {filteredCourses.map((course, idx) => (
              <Link 
                to={`/programmes/${course.slug}` as any} 
                key={idx} 
                className="flex flex-col md:flex-row gap-6 md:gap-8 py-8 border-b border-border group cursor-pointer hover:bg-muted/50 transition-colors -mx-4 px-4 md:-mx-8 md:px-8 rounded-sm"
              >
                {/* Image */}
                <div className="w-full md:w-[360px] shrink-0 overflow-hidden bg-muted h-[220px]">
                  <img 
                    src={course.image} 
                    alt={course.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col md:flex-row gap-8 md:gap-12">
                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 block">Course</span>
                    <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-bold tracking-tight text-foreground group-hover:underline underline-offset-8 decoration-1 leading-tight flex items-center gap-3">
                      {course.name}
                      <ArrowRightIcon className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={28} strokeWidth={3} />
                    </h3>
                  </div>
                  
                  <div className="flex-1 md:max-w-[280px] lg:max-w-xs flex flex-col pt-1">
                    <div className="flex justify-between border-b border-border pb-4 mb-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-1">Department:</span>
                        <span className="text-sm font-semibold text-foreground leading-tight">{course.department}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-1">Level:</span>
                        <span className="text-sm font-semibold text-foreground leading-tight">{course.level}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 border-b border-border pb-4 mb-4">
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground block mb-1">Intake</span>
                        <span className="text-sm font-semibold text-foreground">{course.intake}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground block mb-1">Govt Quota</span>
                        <span className="text-sm font-semibold text-foreground">{course.govtQuota}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground block mb-1">Mgmt Quota</span>
                        <span className="text-sm font-semibold text-foreground">{course.managementQuota}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            
            {filteredCourses.length === 0 && (
              <div className="py-16 text-center text-muted-foreground text-lg">
                No courses found matching your criteria.
              </div>
            )}

            <div className="mt-8 text-xs text-muted-foreground leading-relaxed max-w-4xl">
              * Five percent (5%) of seats within Approved Intake shall be allowed for admission under NRI category. In the event of non-availability of students in NRI seats, the seats shall be given to general candidates as per merit.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
