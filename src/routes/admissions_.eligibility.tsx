import { createFileRoute, Link } from "@tanstack/react-router";
import { Magnetic, Reveal } from "@/components/motion";
import { PageHero } from "@/components/shared/PageHero";
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

function AdmissionsEligibility() {
  return (
    <main className="bg-background min-h-screen">
      <PageHero 
        eyebrow="ELIGIBILITY & SCHOLARSHIPS" 
        title="ADMISSION ELIGIBILITY" 
        description="Criteria for undergraduate, lateral entry, and postgraduate programmes." 
      />
      
      {/* Trust Badge Strip Equivalent: TNEA Code */}
      <div className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-[1440px] px-6 py-4 md:px-12 flex justify-end">
          <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">TNEA Counselling Code: 1301</span>
        </div>
      </div>

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
        <Reveal variant="rise" viewport={{ once: true }}>
          <Tabs defaultValue="ug" className="w-full">
            <TabsList className="mb-12 flex flex-wrap h-auto gap-2 bg-transparent">
              <TabsTrigger value="ug" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none border-b-2 border-transparent px-6 py-3 text-base font-bold uppercase tracking-widest text-muted-foreground data-[state=active]:text-foreground transition-colors shadow-none data-[state=active]:shadow-none data-[state=active]:bg-transparent">
                Undergraduate
              </TabsTrigger>
              <TabsTrigger value="pg" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none border-b-2 border-transparent px-6 py-3 text-base font-bold uppercase tracking-widest text-muted-foreground data-[state=active]:text-foreground transition-colors shadow-none data-[state=active]:shadow-none data-[state=active]:bg-transparent">
                Postgraduate
              </TabsTrigger>
              <TabsTrigger value="phd" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none border-b-2 border-transparent px-6 py-3 text-base font-bold uppercase tracking-widest text-muted-foreground data-[state=active]:text-foreground transition-colors shadow-none data-[state=active]:shadow-none data-[state=active]:bg-transparent">
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
                <div className="overflow-x-auto w-full">
                  <Table className="border border-border bg-card">
                    <TableHeader className="bg-muted">
                      <TableRow className="border-border">
                        <TableHead className="font-bold text-foreground">Community</TableHead>
                        <TableHead className="font-bold text-foreground">Minimum Average Marks (Maths, Physics, Chemistry Combined)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {hscAcademicCutoffs.map((row) => (
                        <TableRow key={row.community} className="border-border">
                          <TableCell className="font-medium text-foreground">{row.community}</TableCell>
                          <TableCell className="text-muted-foreground">{row.percent}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">1b. HSC (Vocational) Pathway</h3>
                <p className="text-base text-muted-foreground leading-relaxed max-w-[80ch]">
                  Pass in any one HSC (Vocational) subject with one related engineering subject (Mathematics, Physics, or Chemistry).
                </p>
                <div className="overflow-x-auto w-full">
                  <Table className="border border-border bg-card">
                    <TableHeader className="bg-muted">
                      <TableRow className="border-border">
                        <TableHead className="font-bold text-foreground">Community</TableHead>
                        <TableHead className="font-bold text-foreground">Minimum Average Marks (Vocational Theory, Practicals & Related Subjects Combined)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {hscVocationalCutoffs.map((row) => (
                        <TableRow key={row.community} className="border-border">
                          <TableCell className="font-medium text-foreground">{row.community}</TableCell>
                          <TableCell className="text-muted-foreground">{row.percent}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">1c. Direct Second Year (Lateral Entry)</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border border-border p-8 bg-card flex flex-col">
                    <h4 className="font-bold text-lg mb-4 text-foreground">Option A — Diploma Candidates</h4>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Pass in Diploma in appropriate branch of Engineering / Technology from the State Board of Technical Education and Training, Tamil Nadu, or equivalent.
                    </p>
                  </div>
                  <div className="border border-border p-8 bg-card flex flex-col">
                    <h4 className="font-bold text-lg mb-4 text-foreground">Option B — B.Sc. Candidates</h4>
                    <p className="text-base text-muted-foreground leading-relaxed mb-6">
                      Pass in a recognized B.Sc. Degree of minimum 3 years duration under the 10+2+3 pattern with core Mathematics at the degree level.
                    </p>
                    <Alert variant="destructive" className="mt-auto border-destructive/50 text-destructive bg-destructive/5 rounded-none">
                      <Info className="h-4 w-4" />
                      <AlertDescription className="ml-2 font-medium">Non-B.Sc. degree holders are not eligible.</AlertDescription>
                    </Alert>
                  </div>
                </div>

                <div className="overflow-x-auto w-full mt-8">
                  <Table className="border border-border bg-card">
                    <TableHeader className="bg-muted">
                      <TableRow className="border-border">
                        <TableHead className="font-bold text-foreground">Community</TableHead>
                        <TableHead className="font-bold text-foreground">Minimum Cutoff Marks (Lateral Entry)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {lateralEntryCutoffs.map((row) => (
                        <TableRow key={row.community} className="border-border">
                          <TableCell className="font-medium text-foreground">{row.community}</TableCell>
                          <TableCell className="text-muted-foreground">{row.percent}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
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

              <div className="grid md:grid-cols-2 gap-8">
                {pgEligibility.map(dept => (
                  <div key={dept.dept} className="border border-border p-8 bg-card flex flex-col">
                    <h4 className="font-black text-xl uppercase tracking-tight text-foreground mb-2">{dept.dept}</h4>
                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Duration: {dept.duration}</p>
                    <h5 className="text-sm font-bold text-foreground mb-4">Eligible Entry Degrees:</h5>
                    <ul className="list-disc pl-5 space-y-3 text-base text-muted-foreground marker:text-primary">
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
                <div className="overflow-x-auto w-full">
                  <Table className="border border-border bg-card">
                    <TableHeader className="bg-muted">
                      <TableRow className="border-border">
                        <TableHead className="font-bold text-foreground">Category</TableHead>
                        <TableHead className="font-bold text-foreground">Requirement</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {phdCutoffs.map((row) => (
                        <TableRow key={row.category} className="border-border">
                          <TableCell className="font-medium text-foreground w-1/3">{row.category}</TableCell>
                          <TableCell className="text-muted-foreground leading-relaxed">{row.requirement}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
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
        <Reveal variant="rise" viewport={{ once: true }}>
          <div className="mt-24 pt-12 border-t border-border">
            <h4 className="text-sm font-black uppercase tracking-widest text-foreground mb-8">Related Programmes</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              <div className="flex flex-col border-t border-border/50 divide-y divide-border/50">
                <div className="py-3 text-sm text-foreground hover:text-primary transition-colors"><Link to="/programmes/artificial-intelligence-data-science">B.Tech Artificial Intelligence and Data Science</Link></div>
                <div className="py-3 text-sm text-foreground hover:text-primary transition-colors"><Link to="/programmes/computer-science">B.E. Computer Science & Engineering</Link></div>
                <div className="py-3 text-sm text-foreground hover:text-primary transition-colors"><Link to="/programmes/civil-engineering">B.E. Civil Engineering</Link></div>
              </div>
              <div className="flex flex-col border-t border-border/50 divide-y divide-border/50">
                <div className="py-3 text-sm text-foreground hover:text-primary transition-colors"><Link to="/programmes/computer-science-pg">M.E. Computer Science & Engineering</Link></div>
                <div className="py-3 text-sm text-foreground hover:text-primary transition-colors"><Link to="/programmes/structural-engineering">M.E. Structural Engineering</Link></div>
                <div className="py-3 text-sm text-foreground hover:text-primary transition-colors">Ph.D Research Programmes</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Closing CTA row */}
        <Reveal variant="rise" viewport={{ once: true }}>
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
                className="group flex w-full sm:w-auto items-center justify-between gap-4 border border-border bg-background px-8 py-5 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-muted"
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
