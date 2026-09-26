import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone, Mail, ExternalLink, Info } from "lucide-react";
import { RedirectButton } from "@/components/ui/redirect-button";

const title = "Admission Procedure — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official 3-step admission procedure, online application form, fee payment portal, and brochure downloads for Mohamed Sathak A.J. College of Engineering.";

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
  {
    step: "1",
    title: "Download Prospectus & Review Guidelines",
    description: "Review comprehensive degree programmes, department specializations, intake capacity, and eligibility criteria in the official MSAJCE Admission Brochure.",
    actionText: "Download Prospectus PDF",
    href: "/uploads/admission/College-Prospectus.pdf",
    isExternal: true,
  },
  {
    step: "2",
    title: "Complete Online Application Form",
    description: "Fill in your personal, academic, and contact details via the official online admission portal. Upload required certificates for verification.",
    actionText: "Access Application Portal",
    href: "https://msajce-edu.in/admission_form.php",
    isExternal: true,
  },
  {
    step: "3",
    title: "Complete Fee Payment & Seat Confirmation",
    description: "Pay the required registration or semester tuition fee through the secure online payment portal to finalize your seat reservation.",
    actionText: "Pay Fees Online",
    href: "https://msajce-edu.in/feepayment.php",
    isExternal: true,
  },
];

const helpdeskContacts = [
  {
    category: "Phone Helpline & Mobile Assistance",
    details: [
      "Mobile Helpline: +91 99400 04500",
      "Landline Desk: 044-2747 0024 / 044-2747 0023",
      "Transport & Hostel Inquiries: +91 98408 86992",
    ],
  },
  {
    category: "Official Email Communications",
    details: [
      "Admissions Desk: admission@msajce-edu.in",
      "Administrative Office: msajce.office@gmail.com",
      "Principal Office: principal@msajce-edu.in",
    ],
  },
];

export function AdmissionsProcedurePage() {
  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased selection:bg-primary selection:text-white min-h-screen pt-0 md:pt-1">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Title Docked Flush with Hero Section End                  */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/procedure_hero.jpg"
            alt="Admission Procedure MSAJCE"
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
              Admission Procedure
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION A: Institutional Overview & 3-Step Procedure                   */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Institutional Overview */}
          <div className="mb-10 w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-4">
              Institutional Overview &amp; Admission Guidelines
            </h2>
            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full mb-4">
              Admissions to undergraduate B.E. / B.Tech and postgraduate M.E., MBA, and MCA degree programmes at Mohamed Sathak A.J. College of Engineering are conducted transparently through Tamil Nadu Engineering Admissions (TNEA Counseling Code <strong>1301</strong>) single-window counseling and Consortium Management Quota seats. Candidates must review their academic eligibility, obtain their cut-off marks verification, and follow our streamlined 3-step admission process to secure enrollment.
            </p>

            {/* Open Editorial Quick Link (No Box Cards) */}
            <div className="mt-6 py-3.5 px-2 border-y border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Info className="w-5 h-5 text-primary shrink-0" />
                <p className="text-xs sm:text-sm text-foreground font-libre font-medium">
                  Have questions about community cutoffs or entry requirements before applying?
                </p>
              </div>
              <RedirectButton
                to="/admissions/eligibility"
                label="Check Eligibility"
                waveColor="#9E2339"
              />
            </div>
          </div>

          {/* Points Layout: 3-Step Procedure */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-6 sm:mb-8">
              3-Step Admission Process
            </h2>

            <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full">
              {procedureSteps.map((item) => (
                <div
                  key={item.step}
                  className="py-5 sm:py-6 px-2 sm:px-4 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 hover:bg-foreground/[0.015] transition-colors w-full"
                >
                  <div className="flex items-start gap-3.5 sm:gap-4 flex-1">
                    <span className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/10 text-primary font-oswald font-black text-sm sm:text-base border border-primary/20 shadow-2xs">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold font-oswald uppercase text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 pt-2 md:pt-0 pl-11 md:pl-0">
                    <RedirectButton
                      href={item.href}
                      label={item.actionText}
                      waveColor="#9E2339"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider A -> B */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 md:h-16 lg:h-20 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 3. SECTION B: Admissions Helpdesk & Support (Strictly Card-Free)          */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-2">
              Admissions Helpdesk &amp; Support
            </h2>
            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
              Our dedicated admissions team is available to assist you with eligibility verification, application submission, document requirements, and fee structures.
            </p>
          </div>

          {/* Open Editorial List Layout (Zero Cards) */}
          <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full mb-10">
            {helpdeskContacts.map((contact, idx) => (
              <div
                key={idx}
                className="py-5 px-2 sm:px-4 flex flex-col md:flex-row md:items-start justify-between gap-4 hover:bg-foreground/[0.015] transition-colors w-full"
              >
                <div className="flex items-center gap-3 shrink-0 md:w-1/3">
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm border border-primary/20 shadow-2xs">
                    {idx + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-oswald uppercase text-foreground">
                    {contact.category}
                  </h3>
                </div>

                <div className="space-y-1.5 font-libre text-sm sm:text-base text-foreground md:w-2/3 pl-10 md:pl-0">
                  {contact.details.map((line, lineIdx) => (
                    <p key={lineIdx} className="leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <RedirectButton
              href="https://msajce-edu.in/admission_form.php"
              label="Apply Online Now"
              waveColor="#9E2339"
            />
            <RedirectButton
              href="https://msajce-edu.in/feepayment.php"
              label="Pay Fees Online"
              waveColor="#9E2339"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
