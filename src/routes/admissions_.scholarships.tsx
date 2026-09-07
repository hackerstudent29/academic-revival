import { createFileRoute, Link } from "@tanstack/react-router";
import { Magnetic, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { motion } from "framer-motion";
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

function ScholarshipsHero() {
  return (
    <section className="relative w-full overflow-hidden h-auto lg:h-[75vh] flex flex-col lg:block">
      {/* Desktop Image */}
      <motion.div 
        initial={{ width: "100%" }}
        animate={{ width: "60%" }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-y-0 right-0 z-10 hidden lg:block pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop" 
          alt="Students learning and securing scholarships" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Accent sliding block (The Blue Edge) */}
      <motion.div 
        initial={{ width: "0%" }}
        animate={{ width: "51%" }}
        transition={{ duration: 1.2, delay: 0.05, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-y-0 left-0 bg-primary z-20 hidden lg:block shadow-2xl"
        style={{ clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)" }}
      />

      {/* Sliding Background from Left with Diagonal Edge */}
      <motion.div 
        initial={{ width: "0%" }}
        animate={{ width: "50%" }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-y-0 left-0 bg-background z-30 hidden lg:block"
        style={{ clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)" }}
      />

      {/* Mobile Image */}
      <div className="w-full h-[300px] relative lg:hidden block z-10">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop" 
          alt="Students learning and securing scholarships" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-[48%] px-6 py-12 md:py-16 lg:px-10 xl:px-12 flex flex-col justify-center z-40 relative lg:absolute lg:inset-y-0 lg:left-0 h-full bg-background lg:bg-transparent">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[9px] font-bold tracking-widest uppercase text-primary">Eligibility & Scholarships</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tight text-primary mb-5 text-balance">
            Scholarship <br/>
            Programmes
          </h1>
          
          <p className="text-sm md:text-base font-medium text-muted-foreground leading-relaxed max-w-md">
            Government and institutional financial assistance. Explore AICTE, MHRD, and Ministry-funded schemes for eligible students at MSAJCE.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ScholarshipsPage() {
  return (
    <main className="bg-background min-h-screen">
      <ScholarshipsHero />

      {/* Trust Badge Strip */}
      <div className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-[1440px] px-6 py-4 md:px-12 flex justify-end">
          <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">TNEA Counselling Code: 1301</span>
        </div>
      </div>

      <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-12 md:py-32">
        <Reveal variant="rise">
          <p className="text-base text-muted-foreground leading-relaxed max-w-[80ch] mb-16">
            MSAJCE students can access AICTE, Ministry of Minority Affairs, MHRD, and Ministry of Labour scholarship schemes based on category, income, and academic eligibility.
          </p>
        </Reveal>

        <div className="flex flex-col border-t border-border mt-8 mb-20">
          <div className="hidden lg:flex px-4 py-3 bg-muted text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <div className="w-[25%]">Scheme Name</div>
            <div className="w-[35%]">Eligibility</div>
            <div className="w-[15%]">Funding Agency</div>
            <div className="w-[15%]">Amount</div>
            <div className="w-[10%]">TN Quota</div>
          </div>
          <Stagger gap={0.1}>
            {scholarshipMatrix.map((row) => (
              <StaggerItem key={row.scheme}>
                <div className="flex flex-col lg:flex-row px-4 py-6 border-b border-border/50 hover:bg-foreground/[0.02] transition-colors group gap-4 lg:gap-0">
                  <div className="w-full lg:w-[25%] flex flex-col items-start justify-center pr-4">
                    <span className="font-bold text-foreground text-sm tracking-wide group-hover:text-primary transition-colors">{row.scheme}</span>
                    <span className="mt-2 inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-primary align-middle">
                      {row.tag}
                    </span>
                  </div>
                  <div className="w-full lg:w-[35%] text-muted-foreground text-sm leading-relaxed flex items-center pr-4">{row.eligibility}</div>
                  <div className="w-full lg:w-[15%] text-muted-foreground text-sm flex items-center pr-4">
                    <span className="lg:hidden text-[10px] font-bold uppercase tracking-widest text-muted-foreground mr-2">Agency:</span>
                    {row.agency}
                  </div>
                  <div className="w-full lg:w-[15%] font-medium text-foreground text-base flex items-center pr-4">
                    <span className="lg:hidden text-[10px] font-bold uppercase tracking-widest text-muted-foreground mr-2">Amount:</span>
                    {row.amount}
                  </div>
                  <div className="w-full lg:w-[10%] text-muted-foreground text-sm flex items-center">
                    <span className="lg:hidden text-[10px] font-bold uppercase tracking-widest text-muted-foreground mr-2">TN Quota:</span>
                    {row.quota}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal variant="mask">
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
        <Reveal variant="rise">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 py-8 border-y border-border">
            <div className="flex items-start gap-4">
              <Info className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-[80ch]">
                Scholarship eligibility depends on category, income, and academic performance. Verify current-year income limits and required documents with the Admission Helpdesk before applying.
              </p>
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
                to="/contact"
                className="group flex w-full sm:w-auto items-center justify-between gap-4 border border-foreground/20 bg-background px-8 py-5 text-sm font-bold uppercase tracking-widest text-foreground transition-all hover:bg-foreground hover:text-background"
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
