import { createFileRoute, Link } from "@tanstack/react-router";
import { Magnetic, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { motion } from "framer-motion";
import { Download, ArrowRight, Info, Plus } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";

const title = "Admission Eligibility — MSAJCE";
const description = "UG, PG, and Ph.D. eligibility criteria, community-wise cutoff marks, and entry pathways at Mohamed Sathak AJ College of Engineering.";

export const Route = createFileRoute("/admissions_/eligibility")({
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
  component: AdmissionsEligibility,
});

const hscAcademicCutoffs = [
  { community: "General Category (OC)", percent: "45.00%", subjects: "Mathematics, Physics & Chemistry" },
  { community: "Backward Class (including Backward Class Muslim)", percent: "40.00%", subjects: "Mathematics, Physics & Chemistry" },
  { community: "Most Backward Class (MBC & DNC)", percent: "40.00%", subjects: "Mathematics, Physics & Chemistry" },
  { community: "Scheduled Caste / SCA / ST", percent: "40.00%", subjects: "Mathematics, Physics & Chemistry" },
];

const hscVocationalCutoffs = [
  { community: "General Category (OC)", percent: "45.00%", subjects: "Vocational Theory, Practicals & Related Subjects" },
  { community: "Backward Class (including Backward Class Muslim)", percent: "40.00%", subjects: "Vocational Theory, Practicals & Related Subjects" },
  { community: "Most Backward Class (MBC & DNC)", percent: "40.00%", subjects: "Vocational Theory, Practicals & Related Subjects" },
  { community: "Scheduled Caste / SCA / ST", percent: "40.00%", subjects: "Vocational Theory, Practicals & Related Subjects" },
];

const lateralEntryCutoffs = [
  { community: "General Category (OC)", percent: "55.00%", criteria: "Aggregate in qualifying Diploma / B.Sc." },
  { community: "Backward Class (inc. BCM)", percent: "50.00%", criteria: "Aggregate in qualifying Diploma / B.Sc." },
  { community: "Most Backward Class (MBC & DNC)", percent: "45.00%", criteria: "Aggregate in qualifying Diploma / B.Sc." },
  { community: "Scheduled Caste / SCA / ST", percent: "Pass Mark", criteria: "Mere Pass in qualifying Diploma / B.Sc. exam" },
];

const pgEligibility = [
  {
    dept: "M.E. Computer Science and Engineering",
    duration: "2 Years",
    intake: "18 Seats",
    entryDegrees: [
      "B.E. / B.Tech. in CSE, IT, EEE, ECE, I&C, E&I, Electronics, or Instrumentation",
      "M.C.A. (10+2+3+3 pattern)",
      "M.Sc. 5-year Integrated (IT / CSE / Software Engineering)",
    ],
  },
  {
    dept: "M.E. Structural Engineering",
    duration: "2 Years",
    intake: "18 Seats",
    entryDegrees: ["B.E. Degree in Civil Engineering"],
  },
];

const phdCutoffs = [
  { category: "General Category", requirement: "Minimum 55% marks or CGPA 5.5 (10-point scale) in qualifying PG degree" },
  { category: "Relaxed Category (SC / ST / Differently-Abled)", requirement: "Minimum 50% marks or CGPA 5.0 (10-point scale) in qualifying PG degree" },
];

const phdDirectEntryConditions = [
  "Minimum 15 years of R&D Experience in National Research Laboratories / PSUs.",
  "Proven research credentials with 3 publications in peer-reviewed impact factor journals OR 2 approved international patents registered within the last 5 years.",
];

function EligibilityHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/eligibility_hero.jpg"
          alt="Admission Eligibility MSAJCE"
          className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-0">
        <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
          <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
            Admission Eligibility
          </h1>
        </div>
      </div>
    </section>
  );
}

function AdmissionsEligibility() {
  const [activeFilter, setActiveFilter] = useState<string>("ug");

  return (
    <main className="bg-page-bg text-foreground min-h-screen">
      <EligibilityHero />
      
      {/* Trust Badge Strip Equivalent: TNEA Code */}
      <div className="border-b border-border bg-card/60">
        <div className="mx-auto max-w-[1440px] px-6 py-4 md:px-12 flex justify-end">
          <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">TNEA Counselling Code: 1301</span>
        </div>
      </div>

      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-16 font-sans">
        
        {/* Title Block matching Programmes Offered catalogue */}
        <div className="mb-8 border-b border-border pb-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary block mb-2 font-mono">
            ADMISSIONS & CRITERIA
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground">
            ADMISSION ELIGIBILITY
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-3xl">
            Select a study level below to explore qualification requirements, community cutoff marks, and entry criteria.
          </p>
        </div>

        {/* ── EVENLY SPACED LEVEL BUTTONS BAR ── */}
        <div className="mb-12 border-b border-border pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <button 
              onClick={() => setActiveFilter("ug")}
              className={`w-full px-4 py-3 border flex items-center justify-center gap-2 text-xs md:text-sm font-bold transition-colors cursor-pointer uppercase tracking-wider ${
                activeFilter === "ug" ? "bg-foreground text-background border-foreground shadow-xs" : "border-border/80 bg-card/50 text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              Undergraduate Programmes <Plus size={16} />
            </button>

            <button 
              onClick={() => setActiveFilter("lateral")}
              className={`w-full px-4 py-3 border flex items-center justify-center gap-2 text-xs md:text-sm font-bold transition-colors cursor-pointer uppercase tracking-wider ${
                activeFilter === "lateral" ? "bg-foreground text-background border-foreground shadow-xs" : "border-border/80 bg-card/50 text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              Direct 2nd Year (Lateral) <Plus size={16} />
            </button>

            <button 
              onClick={() => setActiveFilter("pg")}
              className={`w-full px-4 py-3 border flex items-center justify-center gap-2 text-xs md:text-sm font-bold transition-colors cursor-pointer uppercase tracking-wider ${
                activeFilter === "pg" ? "bg-foreground text-background border-foreground shadow-xs" : "border-border/80 bg-card/50 text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              Postgraduate Programmes <Plus size={16} />
            </button>

            <button 
              onClick={() => setActiveFilter("phd")}
              className={`w-full px-4 py-3 border flex items-center justify-center gap-2 text-xs md:text-sm font-bold transition-colors cursor-pointer uppercase tracking-wider ${
                activeFilter === "phd" ? "bg-foreground text-background border-foreground shadow-xs" : "border-border/80 bg-card/50 text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              Doctoral Studies (Ph.D.) <Plus size={16} />
            </button>
          </div>
        </div>

        {/* ── CONTENT MATRIX (Matching Scholarships & Catalogue Table Layout) ── */}
        <Reveal variant="rise" once={true}>
          <div className="space-y-16">

            {/* 1. UNDERGRADUATE SECTION */}
            {activeFilter === "ug" && (
              <div className="space-y-12">
                
                {/* HSC Academic */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">HSC Academic Pathway</h3>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-[80ch]">
                    Candidates must have passed 10+2 / HSC (Academic) or its equivalent examination with Physics, Chemistry, and Mathematics.
                  </p>
                  
                  <div className="flex flex-col border-t border-border mt-6">
                    <div className="hidden md:flex px-4 py-3 bg-muted/60 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      <div className="w-[40%]">Community / Category</div>
                      <div className="w-[40%]">Required Subject Combination</div>
                      <div className="w-[20%] text-right">Minimum Average PCM %</div>
                    </div>
                    <Stagger gap={0.08}>
                      {hscAcademicCutoffs.map((row) => (
                        <StaggerItem key={row.community}>
                          <div className="flex flex-col md:flex-row px-4 py-5 border-b border-border/50 hover:bg-foreground/[0.02] transition-colors group gap-2 md:gap-0 items-baseline">
                            <div className="w-full md:w-[40%] font-bold text-foreground text-sm tracking-wide">{row.community}</div>
                            <div className="w-full md:w-[40%] text-muted-foreground text-sm">{row.subjects}</div>
                            <div className="w-full md:w-[20%] md:text-right font-medium text-foreground text-lg font-mono">{row.percent}</div>
                          </div>
                        </StaggerItem>
                      ))}
                    </Stagger>
                  </div>
                </div>

                {/* HSC Vocational */}
                <div className="space-y-6 pt-4">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">HSC Vocational Pathway</h3>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-[80ch]">
                    Pass in any one HSC (Vocational) subject with one related engineering subject (Mathematics, Physics, or Chemistry).
                  </p>
                  
                  <div className="flex flex-col border-t border-border mt-6">
                    <div className="hidden md:flex px-4 py-3 bg-muted/60 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      <div className="w-[40%]">Community / Category</div>
                      <div className="w-[40%]">Evaluation Pattern</div>
                      <div className="w-[20%] text-right">Minimum Average %</div>
                    </div>
                    <Stagger gap={0.08}>
                      {hscVocationalCutoffs.map((row) => (
                        <StaggerItem key={row.community}>
                          <div className="flex flex-col md:flex-row px-4 py-5 border-b border-border/50 hover:bg-foreground/[0.02] transition-colors group gap-2 md:gap-0 items-baseline">
                            <div className="w-full md:w-[40%] font-bold text-foreground text-sm tracking-wide">{row.community}</div>
                            <div className="w-full md:w-[40%] text-muted-foreground text-sm">{row.subjects}</div>
                            <div className="w-full md:w-[20%] md:text-right font-medium text-foreground text-lg font-mono">{row.percent}</div>
                          </div>
                        </StaggerItem>
                      ))}
                    </Stagger>
                  </div>
                </div>

              </div>
            )}

            {/* 2. LATERAL ENTRY SECTION */}
            {activeFilter === "lateral" && (
              <div className="space-y-8 pt-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">Direct Second Year (Lateral Entry)</h3>
                
                <div className="grid md:grid-cols-2 gap-12 pt-2">
                  <div className="flex flex-col">
                    <h4 className="font-bold text-lg mb-4 text-foreground uppercase tracking-tight">Option A — Diploma Candidates</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Pass in Diploma in appropriate branch of Engineering / Technology from the State Board of Technical Education and Training, Tamil Nadu, or equivalent.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-lg mb-4 text-foreground uppercase tracking-tight">Option B — B.Sc. Candidates</h4>
                    <p className="text-base text-muted-foreground leading-relaxed mb-6">
                      Pass in a recognized B.Sc. Degree of minimum 3 years duration under the 10+2+3 pattern with core Mathematics at the degree level.
                    </p>
                    <Alert variant="destructive" className="mt-auto border-none bg-destructive/5 rounded-sm p-4">
                      <Info className="h-4 w-4" />
                      <AlertDescription className="ml-2 font-medium text-xs uppercase tracking-wider">Non-B.Sc. degree holders are not eligible.</AlertDescription>
                    </Alert>
                  </div>
                </div>

                <div className="flex flex-col border-t border-border mt-6">
                  <div className="hidden md:flex px-4 py-3 bg-muted/60 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    <div className="w-[40%]">Community / Category</div>
                    <div className="w-[40%]">Qualifying Criteria</div>
                    <div className="w-[20%] text-right">Minimum Cutoff %</div>
                  </div>
                  <Stagger gap={0.08}>
                    {lateralEntryCutoffs.map((row) => (
                      <StaggerItem key={row.community}>
                        <div className="flex flex-col md:flex-row px-4 py-5 border-b border-border/50 hover:bg-foreground/[0.02] transition-colors group gap-2 md:gap-0 items-baseline">
                          <div className="w-full md:w-[40%] font-bold text-foreground text-sm tracking-wide">{row.community}</div>
                          <div className="w-full md:w-[40%] text-muted-foreground text-sm">{row.criteria}</div>
                          <div className="w-full md:w-[20%] md:text-right font-medium text-foreground text-lg font-mono">{row.percent}</div>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
                <p className="text-xs text-muted-foreground max-w-4xl leading-relaxed mt-2">
                  * As per G.O. (Ms.) No.263, Higher Education (J2) Dept (30.6.2008) & Govt Letter No.5464/J1/2011-1 (4.7.2011). For grade-based certificates, actual percentage marks must be produced.
                </p>
              </div>
            )}

            {/* 3. POSTGRADUATE SECTION */}
            {activeFilter === "pg" && (
              <div className="space-y-8 pt-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">Postgraduate (M.E.) Programmes</h3>
                <p className="text-base text-muted-foreground leading-relaxed max-w-[80ch]">
                  Postgraduate engineering admissions are conducted under Anna University & Tamil Nadu Government norms via entrance examinations and qualifying degree scores.
                </p>

                <div className="grid md:grid-cols-2 gap-12 pt-2">
                  {pgEligibility.map(dept => (
                    <div key={dept.dept} className="flex flex-col py-6 border-t border-border">
                      <h4 className="font-black text-xl uppercase tracking-tight text-foreground mb-2">{dept.dept}</h4>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6">Duration: {dept.duration} // Intake: {dept.intake}</p>
                      <h5 className="text-sm font-bold text-foreground mb-4">Eligible Entry Degrees:</h5>
                      <ul className="list-disc pl-5 space-y-3 text-base text-muted-foreground marker:text-foreground/30">
                        {dept.entryDegrees.map((degree, idx) => (
                          <li key={idx} className="leading-relaxed">{degree}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-bold text-lg text-foreground mb-3">TANCET / CEETA-PG / GATE Selection Process</h4>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-[80ch]">
                    Admission through Tamil Nadu Common Entrance Test (TANCET / CEETA-PG) conducted by Anna University, or a valid GATE score. Standard government reservation norms apply to qualifying degree aggregate scores.
                  </p>
                </div>
              </div>
            )}

            {/* 4. DOCTORAL SECTION */}
            {activeFilter === "phd" && (
              <div className="space-y-8 pt-4">
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">Doctoral Studies (Ph.D.)</h3>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1">MECHANICAL ENGINEERING</span>
                </div>

                <div className="space-y-4">
                  <h4 className="font-black text-xl uppercase tracking-tight text-foreground">Academic Qualifications</h4>
                  <ul className="list-disc pl-5 space-y-3 text-base text-muted-foreground marker:text-primary max-w-[80ch]">
                    <li className="leading-relaxed"><strong className="text-foreground font-medium">Primary requirement:</strong> Master's Degree (M.E. / M.Tech. / M.S. by Research) in the relevant branch of Engineering or Technology, recognized by Anna University.</li>
                    <li className="leading-relaxed"><strong className="text-foreground font-medium">Pattern requirement:</strong> sequential qualifications — 10th → HSC → UG → PG.</li>
                  </ul>
                </div>

                <div className="space-y-4 pt-4 border-t border-border/50">
                  <h4 className="font-black text-xl uppercase tracking-tight text-foreground">Minimum Performance Requirements</h4>
                  <div className="flex flex-col border-t border-border mt-4">
                    <div className="hidden md:flex px-4 py-3 bg-muted/60 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      <div className="w-1/3">Category</div>
                      <div className="w-2/3">Requirement</div>
                    </div>
                    <Stagger gap={0.08}>
                      {phdCutoffs.map((row) => (
                        <StaggerItem key={row.category}>
                          <div className="flex flex-col md:flex-row px-4 py-6 border-b border-border/50 hover:bg-foreground/[0.02] transition-colors group">
                            <div className="w-full md:w-1/3 font-bold text-foreground text-sm tracking-wide pr-4">{row.category}</div>
                            <div className="w-full md:w-2/3 font-medium text-muted-foreground text-base leading-relaxed">{row.requirement}</div>
                          </div>
                        </StaggerItem>
                      ))}
                    </Stagger>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-border/50">
                  <h4 className="font-black text-xl uppercase tracking-tight text-foreground">Direct B.E. Entry Track <span className="text-muted-foreground font-medium lowercase text-base">(Alternate Professional Track)</span></h4>
                  <p className="text-base text-foreground font-medium leading-relaxed max-w-[80ch]">
                    Candidates holding a Bachelor's Degree in Engineering/Technology can directly register subject to:
                  </p>
                  <ul className="list-decimal pl-5 space-y-3 text-base text-muted-foreground marker:font-bold marker:text-foreground max-w-[80ch]">
                    {phdDirectEntryConditions.map((cond, idx) => (
                      <li key={idx} className="leading-relaxed pl-2">{cond}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

          </div>
        </Reveal>

        {/* Programmes reference list */}
        <Reveal variant="rise" once={true}>
          <div className="mt-24 pt-12 border-t border-border">
            <h4 className="text-sm font-black uppercase tracking-widest text-foreground mb-8">Related Programmes</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              <div className="flex flex-col border-t border-border/50 divide-y divide-border/50">
                <div className="py-3 text-sm text-foreground hover:text-primary transition-colors"><Link to="/programmes" search={{ level: "Undergraduate" }}>B.Tech Artificial Intelligence and Data Science</Link></div>
                <div className="py-3 text-sm text-foreground hover:text-primary transition-colors"><Link to="/programmes" search={{ level: "Undergraduate" }}>B.E. Computer Science & Engineering</Link></div>
                <div className="py-3 text-sm text-foreground hover:text-primary transition-colors"><Link to="/programmes" search={{ level: "Undergraduate" }}>B.E. Civil Engineering</Link></div>
              </div>
              <div className="flex flex-col border-t border-border/50 divide-y divide-border/50">
                <div className="py-3 text-sm text-foreground hover:text-primary transition-colors"><Link to="/programmes" search={{ level: "Postgraduate" }}>M.E. Computer Science & Engineering</Link></div>
                <div className="py-3 text-sm text-foreground hover:text-primary transition-colors"><Link to="/programmes" search={{ level: "Postgraduate" }}>M.E. Structural Engineering</Link></div>
                <div className="py-3 text-sm text-foreground hover:text-primary transition-colors">Ph.D Research Programmes</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Closing CTA row */}
        <Reveal variant="rise" once={true}>
          <div className="mt-16 flex flex-col sm:flex-row items-center gap-6 border-t border-border pt-12">
            <Magnetic>
              <a 
                href="/uploads/admission/College-Prospectus.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full sm:w-auto items-center justify-between gap-4 bg-primary px-8 py-5 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:opacity-90"
              >
                <span>Download Brochure</span>
                <Download className="h-4 w-4" />
              </a>
            </Magnetic>
            <Magnetic>
              <Link 
                to="/programmes"
                search={{ level: undefined }}
                className="group flex w-full sm:w-auto items-center justify-between gap-4 border border-foreground/20 bg-background px-8 py-5 text-sm font-bold uppercase tracking-widest text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                <span>View Programmes Offered</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
