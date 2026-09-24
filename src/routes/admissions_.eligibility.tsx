import { createFileRoute, Link } from "@tanstack/react-router";
import { Magnetic, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { motion } from "framer-motion";
import { Download, ArrowRight, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";

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
  { community: "General Category", percent: "45.00%" },
  { community: "Backward Class (including Backward Class Muslim)", percent: "40.00%" },
  { community: "MBC & DNC", percent: "40.00%" },
  { community: "SC / SCA / ST", percent: "40.00%" },
];

const hscVocationalCutoffs = [
  { community: "General Category", percent: "45.00%" },
  { community: "Backward Class (including Backward Class Muslim)", percent: "40.00%" },
  { community: "MBC & DNC", percent: "40.00%" },
  { community: "SC / SCA / ST", percent: "40.00%" },
];

const lateralEntryCutoffs = [
  { community: "General Category", percent: "55.00%" },
  { community: "Backward Class (inc. BCM)", percent: "50.00%" },
  { community: "MBC & DNC", percent: "45.00%" },
  { community: "SC / SCA / ST", percent: "Mere Pass in qualifying Diploma/B.Sc. exam" },
];

const pgEligibility = [
  {
    dept: "M.E. Computer Science and Engineering",
    duration: "2 Years",
    entryDegrees: [
      "B.E. / B.Tech. in CSE, IT, EEE, ECE, I&C, E&I, Electronics, or Instrumentation",
      "M.C.A. (10+2+3+3 pattern)",
      "M.Sc. 5-year Integrated (IT / CSE / Software Engineering)",
    ],
  },
  {
    dept: "M.E. Structural Engineering",
    duration: "2 Years",
    entryDegrees: ["B.E. Degree in Civil Engineering"],
  },
];

const phdCutoffs = [
  { category: "General Category", requirement: "Minimum 55% marks or CGPA 5.5 (10-point scale) in qualifying PG degree" },
  { category: "Relaxed Category (SC / ST / Differently-Abled)", requirement: "Minimum 50% marks or CGPA 5.0 (10-point scale)" },
];

const phdDirectEntryConditions = [
  "Minimum 15 years of R&D Experience in National Research Laboratories / PSUs.",
  "Proven research credentials with 3 publications in peer-reviewed impact factor journals OR 2 approved international patents registered within the last 5 years.",
];

function EligibilityHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/eligibility_hero.jpg"
          alt="Mohamed Sathak A.J. College of Engineering Campus Architecture"
          className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
          }}
        />
        {/* Subtle gradient overlay for depth and contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
      </div>

      {/* Title Container: Docked Flush at Bottom of Hero */}
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
  return (
    <main className="bg-background min-h-screen">
      <EligibilityHero />
      
      {/* Trust Badge Strip Equivalent: TNEA Code */}
      <div className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-[1440px] px-6 py-4 md:px-12 flex justify-end">
          <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">TNEA Counselling Code: 1301</span>
        </div>
      </div>

      <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-12 md:py-32">
        <Reveal variant="rise">
          <Tabs defaultValue="ug" className="w-full">
            <TabsList className="mb-12 flex flex-wrap h-auto gap-8 bg-transparent border-b border-border w-full justify-start rounded-none p-0">
              <TabsTrigger value="ug" className="data-[state=active]:border-foreground data-[state=active]:text-foreground border-b-2 border-transparent px-0 py-4 text-sm font-black uppercase tracking-widest text-muted-foreground transition-all shadow-none rounded-none bg-transparent hover:text-foreground">
                Undergraduate
              </TabsTrigger>
              <TabsTrigger value="pg" className="data-[state=active]:border-foreground data-[state=active]:text-foreground border-b-2 border-transparent px-0 py-4 text-sm font-black uppercase tracking-widest text-muted-foreground transition-all shadow-none rounded-none bg-transparent hover:text-foreground">
                Postgraduate
              </TabsTrigger>
              <TabsTrigger value="phd" className="data-[state=active]:border-foreground data-[state=active]:text-foreground border-b-2 border-transparent px-0 py-4 text-sm font-black uppercase tracking-widest text-muted-foreground transition-all shadow-none rounded-none bg-transparent hover:text-foreground">
                Ph.D.
              </TabsTrigger>
            </TabsList>

            {/* TAB 1 — Undergraduate */}
            <TabsContent value="ug" className="space-y-16 animate-in fade-in duration-500">
              
              <div className="space-y-6">
                <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">1a. HSC (Academic) Pathway</h3>
                <p className="text-base text-muted-foreground leading-relaxed max-w-[80ch]">
                  Candidates must have passed 10+2 / HSC (Academic) or its equivalent examination with Physics, Chemistry, and Mathematics.
                </p>
                <div className="flex flex-col border-t border-border mt-8">
                  <div className="flex px-4 py-3 bg-muted text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    <div className="w-1/2">Community</div>
                    <div className="w-1/2">Minimum Average Marks (Maths, Physics, Chemistry Combined)</div>
                  </div>
                  <Stagger gap={0.1}>
                    {hscAcademicCutoffs.map((row) => (
                      <StaggerItem key={row.community}>
                        <div className="flex px-4 py-6 border-b border-border/50 hover:bg-foreground/[0.02] transition-colors group">
                          <div className="w-1/2 font-bold text-foreground text-sm tracking-wide">{row.community}</div>
                          <div className="w-1/2 font-medium text-foreground text-lg">{row.percent}</div>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">1b. HSC (Vocational) Pathway</h3>
                <p className="text-base text-muted-foreground leading-relaxed max-w-[80ch]">
                  Pass in any one HSC (Vocational) subject with one related engineering subject (Mathematics, Physics, or Chemistry).
                </p>
                <div className="flex flex-col border-t border-border mt-8">
                  <div className="flex px-4 py-3 bg-muted text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    <div className="w-1/2">Community</div>
                    <div className="w-1/2">Minimum Average Marks (Vocational Theory, Practicals & Related Subjects Combined)</div>
                  </div>
                  <Stagger gap={0.1}>
                    {hscVocationalCutoffs.map((row) => (
                      <StaggerItem key={row.community}>
                        <div className="flex px-4 py-6 border-b border-border/50 hover:bg-foreground/[0.02] transition-colors group">
                          <div className="w-1/2 font-bold text-foreground text-sm tracking-wide">{row.community}</div>
                          <div className="w-1/2 font-medium text-foreground text-lg">{row.percent}</div>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">1c. Direct Second Year (Lateral Entry)</h3>
                <div className="grid md:grid-cols-2 gap-12 pt-4">
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

                <div className="flex flex-col border-t border-border mt-8">
                  <div className="flex px-4 py-3 bg-muted text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    <div className="w-1/2">Community</div>
                    <div className="w-1/2">Minimum Cutoff Marks (Lateral Entry)</div>
                  </div>
                  <Stagger gap={0.1}>
                    {lateralEntryCutoffs.map((row) => (
                      <StaggerItem key={row.community}>
                        <div className="flex px-4 py-6 border-b border-border/50 hover:bg-foreground/[0.02] transition-colors group">
                          <div className="w-1/2 font-bold text-foreground text-sm tracking-wide">{row.community}</div>
                          <div className="w-1/2 font-medium text-foreground text-lg">{row.percent}</div>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
                <p className="text-xs text-muted-foreground max-w-4xl leading-relaxed mt-4">
                  * As per G.O. (Ms.) No.263, Higher Education (J2) Dept (30.6.2008) & Govt Letter No.5464/J1/2011-1 (4.7.2011). For grade-based certificates, actual percentage marks must be produced; otherwise only minimum grade equivalent marks will be calculated.
                </p>
              </div>
            </TabsContent>

            {/* TAB 2 — Postgraduate */}
            <TabsContent value="pg" className="space-y-12 animate-in fade-in duration-500">
              <p className="text-lg text-foreground leading-relaxed max-w-[80ch] font-medium">
                Postgraduate engineering admissions are conducted under Anna University & Tamil Nadu Government norms via entrance examinations and qualifying degree scores.
              </p>

              <div className="grid md:grid-cols-2 gap-12 pt-4">
                {pgEligibility.map(dept => (
                  <div key={dept.dept} className="flex flex-col py-6 border-t border-border">
                    <h4 className="font-black text-xl uppercase tracking-tight text-foreground mb-2">{dept.dept}</h4>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6">Duration: {dept.duration}</p>
                    <h5 className="text-sm font-bold text-foreground mb-4">Eligible Entry Degrees:</h5>
                    <ul className="list-disc pl-5 space-y-3 text-base text-muted-foreground marker:text-foreground/30">
                      {dept.entryDegrees.map((degree, idx) => (
                        <li key={idx} className="leading-relaxed">{degree}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-6">
                <p className="text-sm text-muted-foreground italic flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Eligibility for other M.E. programmes available on request.
                </p>
                <div className="border-t border-border pt-8">
                  <h4 className="font-bold text-lg text-foreground mb-4">Selection Process</h4>
                  <p className="text-base text-muted-foreground leading-relaxed max-w-[80ch]">
                    Admission through Tamil Nadu Common Entrance Test (TANCET / CEETA-PG) conducted by Anna University, or a valid GATE score. Standard government reservation norms apply to qualifying degree aggregate scores.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* TAB 3 — Ph.D. */}
            <TabsContent value="phd" className="space-y-12 animate-in fade-in duration-500">
              <div className="mb-8 border-b border-border pb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1.5">PH.D. — MECHANICAL ENGINEERING</span>
              </div>
              
              <div className="space-y-6">
                <h4 className="font-black text-2xl uppercase tracking-tight text-foreground">Academic Qualifications</h4>
                <ul className="list-disc pl-5 space-y-4 text-base text-muted-foreground marker:text-primary max-w-[80ch]">
                  <li className="leading-relaxed"><strong className="text-foreground font-medium">Primary requirement:</strong> Master's Degree (M.E. / M.Tech. / M.S. by Research) in the relevant branch of Engineering or Technology, recognized by Anna University.</li>
                  <li className="leading-relaxed"><strong className="text-foreground font-medium">Pattern requirement:</strong> sequential qualifications — 10th → HSC → UG → PG.</li>
                </ul>
              </div>

              <div className="space-y-6 pt-6 border-t border-border/50">
                <h4 className="font-black text-2xl uppercase tracking-tight text-foreground">Minimum Performance Requirements</h4>
                <div className="flex flex-col border-t border-border mt-8">
                  <div className="flex px-4 py-3 bg-muted text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    <div className="w-1/3">Category</div>
                    <div className="w-2/3">Requirement</div>
                  </div>
                  <Stagger gap={0.1}>
                    {phdCutoffs.map((row) => (
                      <StaggerItem key={row.category}>
                        <div className="flex px-4 py-6 border-b border-border/50 hover:bg-foreground/[0.02] transition-colors group">
                          <div className="w-1/3 font-bold text-foreground text-sm tracking-wide pr-4">{row.category}</div>
                          <div className="w-2/3 font-medium text-muted-foreground text-base leading-relaxed">{row.requirement}</div>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </div>

              <div className="space-y-6 pt-6 border-t border-border/50">
                <h4 className="font-black text-2xl uppercase tracking-tight text-foreground">Alternate Research & Professional Track <span className="text-muted-foreground font-medium lowercase text-lg">(Direct B.E. Entry)</span></h4>
                <p className="text-base text-foreground font-medium leading-relaxed max-w-[80ch]">
                  Candidates holding a Bachelor's Degree in Engineering/Technology can directly register subject to:
                </p>
                <ul className="list-decimal pl-5 space-y-4 text-base text-muted-foreground marker:font-bold marker:text-foreground max-w-[80ch]">
                  {phdDirectEntryConditions.map((cond, idx) => (
                    <li key={idx} className="leading-relaxed pl-2">{cond}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </Reveal>

        {/* Programmes reference list */}
        <Reveal variant="rise">
          <div className="mt-24 pt-12 border-t border-border">
            <h4 className="text-sm font-black uppercase tracking-widest text-foreground mb-8">Related Programmes</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              <div className="flex flex-col border-t border-border/50 divide-y divide-border/50">
                <div className="py-3 text-sm text-foreground hover:text-primary transition-colors"><Link to="/programmes/$courseId" params={{ courseId: "artificial-intelligence-data-science" }}>B.Tech Artificial Intelligence and Data Science</Link></div>
                <div className="py-3 text-sm text-foreground hover:text-primary transition-colors"><Link to="/programmes/$courseId" params={{ courseId: "computer-science" }}>B.E. Computer Science & Engineering</Link></div>
                <div className="py-3 text-sm text-foreground hover:text-primary transition-colors"><Link to="/programmes/$courseId" params={{ courseId: "civil-engineering" }}>B.E. Civil Engineering</Link></div>
              </div>
              <div className="flex flex-col border-t border-border/50 divide-y divide-border/50">
                <div className="py-3 text-sm text-foreground hover:text-primary transition-colors"><Link to="/programmes/$courseId" params={{ courseId: "computer-science-pg" }}>M.E. Computer Science & Engineering</Link></div>
                <div className="py-3 text-sm text-foreground hover:text-primary transition-colors"><Link to="/programmes/$courseId" params={{ courseId: "structural-engineering" }}>M.E. Structural Engineering</Link></div>
                <div className="py-3 text-sm text-foreground hover:text-primary transition-colors">Ph.D Research Programmes</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Closing CTA row */}
        <Reveal variant="rise">
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
                search={{ level: "UG" }}
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
