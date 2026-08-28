import { createFileRoute, Link } from "@tanstack/react-router";
import { Magnetic, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/shared/PageHero";
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

function AdmissionsProcedurePage() {
  return (
    <main className="bg-background min-h-screen">
      <PageHero 
        eyebrow="EXPLORE ADMISSIONS" 
        title="ADMISSION PROCEDURE" 
        description="Three steps to secure your seat." 
      />

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
        {/* Before you apply note */}
        <Reveal variant="rise" viewport={{ once: true }}>
          <div className="mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-border bg-muted p-6 md:p-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <Info className="h-5 w-5 shrink-0" />
                Before you apply
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-[65ch]">
                Admission requirements differ by entry route — first-year HSC admission, lateral entry into second year, postgraduate (M.E.), or Ph.D. Check your eligibility first.
              </p>
            </div>
            <Magnetic>
              <Link 
                to="/admissions/eligibility"
                className="group flex w-full md:w-auto shrink-0 items-center justify-between gap-4 border border-foreground/15 bg-card px-6 py-4 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <span>View Admission Eligibility</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Magnetic>
          </div>
        </Reveal>

        <Stagger gap={0.09} className="flex flex-col gap-0 border-t border-border" viewport={{ once: true }}>
          {procedureSteps.map((step) => (
            <StaggerItem key={step.index}>
              <a 
                href={step.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-border py-12 md:py-16 hover:bg-muted/50 transition-colors px-6 md:px-8 -mx-6 md:-mx-8 overflow-hidden"
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background transition-colors group-hover:bg-primary group-hover:border-primary">
                    <ArrowUpRight className="h-5 w-5 text-foreground transition-colors group-hover:text-primary-foreground" />
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Helpdesk / contact block */}
        <Reveal variant="rise" viewport={{ once: true }}>
          <div className="mt-24 grid md:grid-cols-2 gap-12 border-t border-border pt-16">
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
                  <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Phone</h4>
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:+919940004500" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">+91 99400 04500</a>
                  <a href="tel:04427470024" className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">044-2747 0024</a>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Email</h4>
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
        <Reveal variant="rise" viewport={{ once: true }}>
          <div className="mt-16 flex flex-col sm:flex-row items-center gap-6 border-t border-border pt-12">
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
                className="group flex w-full sm:w-auto items-center justify-between gap-4 border border-border bg-background px-8 py-5 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-muted"
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
