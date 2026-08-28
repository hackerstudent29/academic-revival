import { createFileRoute, Link } from "@tanstack/react-router";
import { Magnetic, Reveal } from "@/components/motion";
import { PageHero } from "@/components/shared/PageHero";
import { KeyDriversAccordion } from "@/components/widgets/KeyDriversAccordion";
import { Download, ArrowRight, Info } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const title = "Scholarship Programmes — MSAJCE";
const description = "AICTE, MHRD, and Ministry-funded scholarship schemes for B.E./B.Tech students at Mohamed Sathak AJ College of Engineering — eligibility, amount, and quota.";

export const Route = createFileRoute("/admissions_/scholarships")({
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
  component: ScholarshipsPage,
});

const scholarshipMatrix = [
  {
    scheme: "Pragati Scholarship Scheme",
    tag: "Girl Students",
    eligibility: "Max 2 girl children per family; annual family income < ₹8,00,000",
    agency: "AICTE",
    amount: "₹50,000 / year",
    quota: "800 slots",
  },
  {
    scheme: "Saksham Scholarship Scheme",
    tag: "Specially-Abled",
    eligibility: "Disability level ≥ 40%; annual family income < ₹8,00,000",
    agency: "AICTE",
    amount: "₹50,000 / year",
    quota: "All Eligible Candidates",
  },
  {
    scheme: "Merit-cum-Means Scholarship",
    tag: "Minority Community",
    eligibility: "Minimum 50% marks in final exam; annual family income < ₹2,50,000",
    agency: "Ministry of Minority Affairs",
    amount: "₹20,000/yr tuition + ₹12,000/yr (hostellers) or ₹6,000/yr (day scholars)",
    quota: "1,075 (Muslim) · 1,173 (Christian)",
  },
  {
    scheme: "Central Sector Scheme",
    tag: "Merit + Low Income",
    eligibility: "Minimum 80% marks in final exam; annual family income < ₹8,00,000",
    agency: "MHRD",
    amount: "₹10,000 / year",
    quota: "4,883 slots",
  },
  {
    scheme: "Wards of Beedi / Mine / Cine Workers",
    tag: "Labour Welfare",
    eligibility: "Ward of registered Beedi/Mine/Cine worker; family income < ₹10,000/month",
    agency: "Ministry of Labour & Employment",
    amount: "₹15,000 / year",
    quota: "All Eligible Candidates",
  },
];

const scholarshipDetails = [
  {
    title: "A. Pragati Scholarship Scheme (AICTE)",
    body: "For female students admitted to 1st year B.E./B.Tech or 2nd year Lateral Entry. Restricted to a maximum of two girl children per family. Combined annual family income from all sources must be less than ₹8.00 Lakhs. Benefit: ₹50,000 per annum, paid directly for tuition fee, college fees, computer purchase, books, and equipment. 800 designated slots for Tamil Nadu state candidates.",
  },
  {
    title: "B. Saksham Scholarship Scheme (AICTE)",
    body: "For differently-abled students advancing into technical degree courses. Requires a valid disability certificate indicating 40% or higher disability level. Combined annual family income must be under ₹8.00 Lakhs. Benefit: ₹50,000 per annum. Open to all eligible candidates, no capping on total scholarships awarded.",
  },
  {
    title: "C. Merit-cum-Means Scholarship",
    body: "For economically weak meritorious students from notified Minority Communities (Muslims, Christians, Sikhs, Buddhists, Jains, Parsis). Requires minimum 50% aggregate marks in the final qualifying examination and annual family income not exceeding ₹2.50 Lakhs. Course fee component up to ₹20,000 per annum (or actual fee, whichever is lower). Maintenance allowance: hostellers ₹1,200/month (₹12,000/year for 10 months), day scholars ₹600/month (₹6,000/year for 10 months). 1,075 slots for Muslim candidates and 1,173 slots for Christian candidates in Tamil Nadu.",
  },
  {
    title: "D. Central Sector Scheme",
    body: "For meritorious students from low-income families pursuing higher education. Requires above 80th percentile (minimum 80% aggregate) in the relevant stream of Class XII board examination, and annual family income under ₹8.00 Lakhs. Benefit: ₹10,000 per annum at UG level for 3 years. 4,883 slots earmarked for Tamil Nadu state board/counselling quotas.",
  },
  {
    title: "E. Wards of Beedi / Mine / Cine Workers",
    body: "For wards of registered workers in Beedi manufacturing, Mining, or Cine sectors. Parents must possess a valid Identity Card issued by the Labour Welfare Organisation. Total monthly family income must not exceed ₹10,000. Benefit: ₹15,000 per annum, direct benefit transfer. Open to all eligible candidates fulfilling scheme criteria.",
  },
];

function ScholarshipsPage() {
  return (
    <main className="bg-background min-h-screen">
      <PageHero 
        eyebrow="ELIGIBILITY & SCHOLARSHIPS" 
        title="SCHOLARSHIP PROGRAMMES" 
        description="Government and institutional financial assistance for eligible students." 
      />

      {/* Trust Badge Strip */}
      <div className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-[1440px] px-6 py-4 md:px-12 flex justify-end">
          <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">TNEA Counselling Code: 1301</span>
        </div>
      </div>

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
        <Reveal variant="rise" viewport={{ once: true }}>
          <p className="text-base text-muted-foreground leading-relaxed max-w-[80ch] mb-16">
            MSAJCE students can access AICTE, Ministry of Minority Affairs, MHRD, and Ministry of Labour scholarship schemes based on category, income, and academic eligibility.
          </p>
        </Reveal>

        <Reveal variant="rise" viewport={{ once: true }}>
          <div className="overflow-x-auto w-full mb-20 pb-4">
            <Table className="border border-border bg-card min-w-[850px]">
              <TableHeader className="bg-muted">
                <TableRow className="border-border">
                  <TableHead className="font-bold text-foreground">Scheme Name</TableHead>
                  <TableHead className="font-bold text-foreground">Eligibility</TableHead>
                  <TableHead className="font-bold text-foreground">Funding Agency</TableHead>
                  <TableHead className="font-bold text-foreground">Amount</TableHead>
                  <TableHead className="font-bold text-foreground">TN Quota</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {scholarshipMatrix.map((row) => (
                  <TableRow key={row.scheme} className="border-border">
                    <TableCell className="font-medium text-foreground whitespace-nowrap">
                      {row.scheme}
                      <span className="ml-3 inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-primary align-middle">
                        {row.tag}
                      </span>
                    </TableCell>
                    <TableCell className="text-muted-foreground leading-relaxed py-4">{row.eligibility}</TableCell>
                    <TableCell className="text-muted-foreground whitespace-nowrap">{row.agency}</TableCell>
                    <TableCell className="text-muted-foreground whitespace-nowrap font-medium text-foreground">{row.amount}</TableCell>
                    <TableCell className="text-muted-foreground">{row.quota}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Reveal>

        <Reveal variant="mask" viewport={{ once: true }}>
          <div className="mb-16">
            <h2 className="text-[8vw] font-black uppercase leading-[0.95] tracking-tighter text-foreground md:text-[4vw] mb-4">
              Scheme Details
            </h2>
            <KeyDriversAccordion 
              drivers={scholarshipDetails.map(d => ({ title: d.title, description: d.body }))} 
            />
          </div>
        </Reveal>

        {/* Note block */}
        <Reveal variant="rise" viewport={{ once: true }}>
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 border border-border bg-muted p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Info className="h-6 w-6 text-foreground shrink-0 mt-0.5" />
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-[80ch]">
                Scholarship eligibility depends on category, income, and academic performance. Verify current-year income limits and required documents with the Admission Helpdesk before applying.
              </p>
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
                to="/contact"
                className="group flex w-full sm:w-auto items-center justify-between gap-4 border border-border bg-background px-8 py-5 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-muted"
              >
                <span>Enquire Now</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
