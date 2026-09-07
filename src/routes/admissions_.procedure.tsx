import { createFileRoute, Link } from "@tanstack/react-router";
import { Magnetic, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Mail, Info } from "lucide-react";

const title = "Admission Procedure — MSAJCE";
const description = "Steps to apply, pay fees, and confirm your seat at Mohamed Sathak AJ College of Engineering.";

export const Route = createFileRoute("/admissions_/procedure")({
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
  component: AdmissionsProcedurePage,
});

const procedureSteps = [
  { index: "01", title: "Download Brochure", body: "Review programmes, intake, and eligibility in the Admission Brochure & Guidelines 2026-2027.", href: "/uploads/admission/College-Prospectus.pdf" },
  { index: "02", title: "Apply Online", body: "Complete the online application form with your academic and personal details.", href: "https://msajce-edu.in/admission_form.php" },
  { index: "03", title: "Pay Fee & Confirm", body: "Complete online fee payment to confirm your seat.", href: "https://msajce-edu.in/feepayment.php" },
];

function ProcedureHero() {
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
          src="/images/procedure_hero.jpg" 
          alt="Students going through admission procedure" 
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
          src="/images/procedure_hero.jpg" 
          alt="Students going through admission procedure" 
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
            <span className="text-[9px] font-bold tracking-widest uppercase text-primary">Explore Admissions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tight text-primary mb-5 text-balance">
            Admission <br/>
            Procedure
          </h1>
          
          <p className="text-sm md:text-base font-medium text-muted-foreground leading-relaxed max-w-md">
            Three steps to secure your seat. Download the brochure, apply online, and complete your fee payment to confirm admission at Mohamed Sathak AJ College of Engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function AdmissionsProcedurePage() {
  return (
    <main className="bg-background min-h-screen">
      <ProcedureHero />

      <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-12 md:py-32">
        {/* Before you apply note */}
        <Reveal variant="rise">
          <div className="mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-8 border-y border-border">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-foreground flex items-center gap-2">
                <Info className="h-5 w-5 shrink-0 text-primary" />
                Before you apply
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-[65ch]">
                Admission requirements differ by entry route — first-year HSC admission, lateral entry into second year, postgraduate (M.E.), or Ph.D. Check your eligibility first.
              </p>
            </div>
            <Magnetic>
              <Link 
                to="/admissions/eligibility"
                className="group flex w-full md:w-auto shrink-0 items-center justify-between gap-4 border border-foreground/20 px-6 py-4 text-sm font-bold uppercase tracking-widest text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                <span>View Admission Eligibility</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Magnetic>
          </div>
        </Reveal>

        <Stagger gap={0.09} className="flex flex-col gap-0 border-t border-border">
          {procedureSteps.map((step) => (
            <StaggerItem key={step.index}>
              <a 
                href={step.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-border py-12 md:py-16 transition-all hover:bg-foreground/[0.02] px-4 md:px-8 -mx-4 md:-mx-8"
              >
                {/* Large Background Numeral */}
                <div className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 text-[15vw] md:text-[8vw] font-black leading-none text-foreground/5 transition-colors group-hover:text-foreground/10 select-none z-0">
                  {step.index}
                </div>

                <div className="relative z-10 flex flex-col gap-4 max-w-2xl mt-8 md:mt-0 md:ml-32 lg:ml-48">
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>

                <div className="relative z-10 shrink-0 flex items-center gap-4 mt-6 md:mt-0">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary md:opacity-0 md:-translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0">Proceed</span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/20 bg-background transition-colors group-hover:bg-primary group-hover:border-primary">
                    <ArrowUpRight className="h-5 w-5 text-foreground transition-colors group-hover:text-primary-foreground" />
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Helpdesk / contact block */}
        <Reveal variant="rise">
          <div className="mt-24 grid md:grid-cols-2 gap-12 pt-12">
            <div>
              <h3 className="text-3xl font-black uppercase tracking-tight text-foreground mb-4">Need Help?</h3>
              <p className="text-base text-muted-foreground leading-relaxed max-w-[40ch]">
                Our admissions team is here to assist you. Contact us for any questions about the application process, eligibility, or fee payment.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground">Phone</h4>
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:+919940004500" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">+91 99400 04500</a>
                  <a href="tel:04427470024" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">044-2747 0024</a>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground">Email</h4>
                </div>
                <div className="flex flex-col gap-1">
                  <a href="mailto:msajce.office@gmail.com" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors break-words">msajce.office@gmail.com</a>
                  <a href="mailto:admission@msajce-edu.in" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors break-words">admission@msajce-edu.in</a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Closing CTA row */}
        <Reveal variant="rise">
          <div className="mt-16 flex flex-col sm:flex-row items-center gap-6 pt-12 border-t border-border">
            <Magnetic>
              <a 
                href="https://msajce-edu.in/admission_form.php"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full sm:w-auto items-center justify-between gap-4 bg-primary px-8 py-5 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:opacity-90"
              >
                <span>Apply Online</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Magnetic>
            <Magnetic>
              <a 
                href="https://msajce-edu.in/feepayment.php"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full sm:w-auto items-center justify-between gap-4 border border-foreground/20 bg-background px-8 py-5 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <span>Pay Fee</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
