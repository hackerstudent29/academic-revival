import { createFileRoute, Link } from "@tanstack/react-router";
import { Magnetic, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Mail, Info, FileText, CheckCircle2, UserCheck, ShieldCheck, Download, GraduationCap, MapPin } from "lucide-react";

const title = "Admission Procedure 2026-2027 — MSAJCE";
const description = "Step-by-step admission procedure, application pathways, TNEA counselling guidelines, document checklists, and contact details for MSAJCE.";

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

const admissionPathways = [
  {
    title: "Government Quota Pathway",
    code: "TNEA CODE: 1301",
    subtitle: "Single Window Counselling",
    description: "Allocated through Anna University TNEA Single Window Counselling based on 10+2 PCM cutoffs. Select MSAJCE (Code 1301) during choice filling.",
    badge: "50% Sanctioned Intake",
  },
  {
    title: "Management Quota Pathway",
    code: "DIRECT ADMISSION",
    subtitle: "Consortium / Merit Allocation",
    description: "Direct admission for eligible candidates through online application form or campus admission cell based on academic merit and eligibility standards.",
    badge: "50% Sanctioned Intake",
  },
  {
    title: "NRI & Special Quota Pathway",
    code: "NRI / SPORTS QUOTA",
    subtitle: "Reserved Quota & Sports Grants",
    description: "5% reserved intake for NRI / NRI-sponsored candidates. Special fee concessions and sports quota grants for District, State, and National achievers.",
    badge: "5% NRI + Sports Quota",
  },
];

const procedureSteps = [
  {
    index: "01",
    title: "Download & Review Prospectus",
    body: "Review academic programmes, department specs, eligibility criteria, and campus facilities in the official College Prospectus 2026-2027.",
    actionText: "Download PDF",
    href: "/uploads/admission/College-Prospectus.pdf",
    external: true,
  },
  {
    index: "02",
    title: "Submit Online Application",
    body: "Complete the online application form with your candidate information, mark statements, and choice of engineering branches.",
    actionText: "Apply Online",
    href: "https://msajce-edu.in/admission_form.php",
    external: true,
  },
  {
    index: "03",
    title: "Document Verification",
    body: "Produce original certificates (SSLC, HSC, TC, Community Certificate) at the TNEA Facilitation Centre (TFC) or Campus Admission Office.",
    actionText: "Check Checklist",
    href: "#documents-checklist",
    external: false,
  },
  {
    index: "04",
    title: "Seat Allotment & Enrollment",
    body: "Receive formal seat allotment order, complete admission registration, and obtain joining instructions for the academic term.",
    actionText: "View Eligibility",
    href: "/admissions/eligibility",
    external: false,
  },
];

const requiredDocumentsUG = [
  { name: "10th Standard / SSLC Mark Sheet", notes: "Original + 3 copies (Proof of Date of Birth)" },
  { name: "11th Standard Mark Sheet", notes: "Original + 3 copies (where applicable)" },
  { name: "12th Standard / HSC Mark Sheet", notes: "Original + 3 copies (or equivalent statement of marks)" },
  { name: "Diploma Mark Sheets & Provisional Certificate", notes: "For Lateral Entry (Direct 2nd Year) applicants" },
  { name: "Transfer Certificate (TC) & Conduct Certificate", notes: "Issued by last studied institution" },
  { name: "Permanent Community Certificate", notes: "Card format for BC, BCM, MBC, DNC, SC, SCA, ST" },
  { name: "TNEA Allotment Order", notes: "Mandatory for Government Quota candidates" },
  { name: "First Graduate Certificate & Joint Declaration", notes: "If claiming TN First Graduate fee concession" },
  { name: "Nativity Certificate & Income Certificate", notes: "In electronic format (if claiming government scholarships)" },
  { name: "Migration Certificate & Passport Photos", notes: "For CBSE / ICSE / Other State candidates + 6 photos" },
];

const requiredDocumentsPG = [
  { name: "B.E. / B.Tech / B.Arch Degree / Provisional Certificate", notes: "Original + 3 copies" },
  { name: "Consolidated Semester Mark Sheets", notes: "All semester grade sheets" },
  { name: "TANCET / CEETA-PG / GATE Hall Ticket & Score Card", notes: "Valid entrance examination scorecard" },
  { name: "10th & 12th Standard Mark Sheets", notes: "Proof of sequential qualification (10+2+3/4 pattern)" },
  { name: "Transfer Certificate & Conduct Certificate", notes: "Issued by graduating college/university" },
  { name: "Community Certificate & Aadhaar Card Copy", notes: "For reservation verification and enrollment" },
];

function ProcedureHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/procedure_hero.jpg"
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
            Admission Procedure
          </h1>
        </div>
      </div>
    </section>
  );
}

function AdmissionsProcedurePage() {
  return (
    <main className="bg-background text-foreground min-h-screen pt-0 md:pt-1 font-sans">

      <ProcedureHero />

      {/* Main Container */}
      <section className="mx-auto max-w-[1440px] px-6 py-10 md:px-12 md:py-16 space-y-16">
        
        {/* ── 1. BEFORE YOU APPLY & ENTRY PATHWAYS ── */}
        <Reveal variant="rise" once={true}>
          <div className="space-y-8">
            <div className="border-b border-border pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-black uppercase font-oswald tracking-widest text-primary block mb-1">
                  ENTRY PATHWAYS & CODES
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-foreground font-oswald">
                  ADMISSION PATHWAYS
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-sm shrink-0">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-xs font-bold uppercase font-oswald text-primary">TNEA Counselling Code: 1301</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 border-t border-b border-border py-8">
              {admissionPathways.map((pathway, idx) => (
                <div 
                  key={pathway.title}
                  className={`flex flex-col justify-between space-y-4 ${
                    idx !== 0 ? "md:border-l md:border-border md:pl-8" : ""
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary font-oswald bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-sm">
                        {pathway.code}
                      </span>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-foreground/80 font-sans">
                        {pathway.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-oswald uppercase text-foreground leading-tight">
                      {pathway.title}
                    </h3>

                    <span className="text-xs font-bold uppercase tracking-wider font-oswald text-primary/90 block">
                      {pathway.subtitle}
                    </span>

                    <p className="text-sm text-muted-foreground leading-relaxed font-sans pt-1">
                      {pathway.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── 2. STEP-BY-STEP ADMISSION PROCEDURE TIMELINE ── */}
        <Reveal variant="rise" once={true}>
          <div className="space-y-8">
            <div className="border-b border-border pb-6">
              <span className="text-xs font-black uppercase font-oswald tracking-widest text-primary block mb-1">
                EXECUTION TIMELINE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-foreground font-oswald">
                ADMISSION TIMELINE & STEPS
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-3xl leading-relaxed">
                Follow these four sequential steps to complete your admission process smoothly from brochure review to final seat allotment.
              </p>
            </div>

            <Stagger gap={0.08} className="flex flex-col gap-0 border-t border-border">
              {procedureSteps.map((step) => (
                <StaggerItem key={step.index}>
                  {step.external ? (
                    <a 
                      href={step.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border py-8 md:py-10 transition-all hover:bg-muted/40 px-4 md:px-6 rounded-sm"
                    >
                      <div className="flex items-start md:items-center gap-6">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-black font-oswald text-primary/40 group-hover:text-primary transition-colors shrink-0">
                          {step.index}
                        </span>
                        <div className="space-y-1 max-w-2xl">
                          <h3 className="text-xl sm:text-2xl font-bold font-oswald uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                            {step.body}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-3 self-end md:self-auto pt-2 md:pt-0">
                        <span className="text-xs font-bold uppercase tracking-wider font-oswald text-primary">
                          {step.actionText}
                        </span>
                        <div className="w-10 h-10 rounded-sm border border-border bg-card flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                          <ArrowUpRight className="w-4 h-4 text-foreground group-hover:text-primary-foreground transition-colors" />
                        </div>
                      </div>
                    </a>
                  ) : (
                    <Link 
                      to={step.href as any}
                      className="group relative flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border py-8 md:py-10 transition-all hover:bg-muted/40 px-4 md:px-6 rounded-sm"
                    >
                      <div className="flex items-start md:items-center gap-6">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-black font-oswald text-primary/40 group-hover:text-primary transition-colors shrink-0">
                          {step.index}
                        </span>
                        <div className="space-y-1 max-w-2xl">
                          <h3 className="text-xl sm:text-2xl font-bold font-oswald uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                            {step.body}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-3 self-end md:self-auto pt-2 md:pt-0">
                        <span className="text-xs font-bold uppercase tracking-wider font-oswald text-primary">
                          {step.actionText}
                        </span>
                        <div className="w-10 h-10 rounded-sm border border-border bg-card flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                          <ArrowUpRight className="w-4 h-4 text-foreground group-hover:text-primary-foreground transition-colors" />
                        </div>
                      </div>
                    </Link>
                  )}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>

        {/* ── 3. REQUIRED DOCUMENTS CHECKLIST SECTION ── */}
        <Reveal variant="rise" once={true}>
          <div id="documents-checklist" className="space-y-8 pt-4">
            <div className="border-b border-border pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-black uppercase font-oswald tracking-widest text-primary block mb-1">
                  MANDATORY VERIFICATION CERTIFICATES
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-foreground font-oswald">
                  REQUIRED DOCUMENTS CHECKLIST
                </h2>
              </div>
              <div className="text-xs font-semibold text-muted-foreground flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary shrink-0" />
                <span>Originals + 3 Self-Attested Sets</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* UG Document Checklist */}
              <div className="bg-card border border-border p-6 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs space-y-6">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <GraduationCap className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold font-oswald text-lg uppercase text-foreground">
                      Undergraduate (B.E. / B.Tech / Lateral Entry)
                    </h3>
                    <span className="text-xs text-muted-foreground">Original certificates required during joining verification</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {requiredDocumentsUG.map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-background border border-border/60 rounded-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <span className="text-sm font-semibold text-foreground block leading-tight">{doc.name}</span>
                        <span className="text-xs text-muted-foreground block">{doc.notes}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PG Document Checklist */}
              <div className="bg-card border border-border p-6 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs space-y-6">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <UserCheck className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold font-oswald text-lg uppercase text-foreground">
                      Postgraduate (M.E. / M.Arch) & Ph.D.
                    </h3>
                    <span className="text-xs text-muted-foreground">Entrance scorecard & qualifying degree documents</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {requiredDocumentsPG.map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-background border border-border/60 rounded-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <span className="text-sm font-semibold text-foreground block leading-tight">{doc.name}</span>
                        <span className="text-xs text-muted-foreground block">{doc.notes}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-muted/40 border border-border rounded-sm space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase font-oswald text-primary">
                    <Info className="w-4 h-4 shrink-0" />
                    <span>Important Note for Reserved Categories & Scholarships</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Community and Income certificates must be in electronic card format issued by competent Revenue Authorities in Tamil Nadu to claim First Graduate, Post-Matric, or AICTE Pragati/Saksham scholarships.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

        {/* ── 4. ADMISSION HELPDESK & OFFICE CONTACTS ── */}
        <Reveal variant="rise" once={true}>
          <div className="bg-card border border-border p-8 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs space-y-8">
            <div className="border-b border-border pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-black uppercase font-oswald tracking-widest text-primary block mb-1">
                  OFFICIAL ADMISSION CELL
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground font-oswald">
                  ADMISSION HELPDESK & CAMPUS CONTACTS
                </h2>
              </div>
              <span className="text-xs font-bold uppercase font-oswald text-primary bg-primary/10 px-3 py-1.5 rounded-sm">
                Officer: Mr. A. Abdul Gafoor
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Phone Helpline */}
              <div className="flex items-start gap-4 p-4 bg-background border border-border rounded-sm">
                <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold font-oswald uppercase text-muted-foreground block">Admission Helplines</span>
                  <div className="flex flex-col text-sm font-semibold text-foreground">
                    <a href="tel:+919940004500" className="hover:text-primary transition-colors">+91 99400 04500</a>
                    <a href="tel:04427470024" className="hover:text-primary transition-colors">044-2747 0024</a>
                    <a href="tel:+919940004506" className="hover:text-primary transition-colors">+91 99400 04506</a>
                  </div>
                </div>
              </div>

              {/* Email Contacts */}
              <div className="flex items-start gap-4 p-4 bg-background border border-border rounded-sm">
                <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold font-oswald uppercase text-muted-foreground block">Official Email Contacts</span>
                  <div className="flex flex-col text-sm font-semibold text-foreground">
                    <a href="mailto:admission@msajce-edu.in" className="hover:text-primary transition-colors break-all">admission@msajce-edu.in</a>
                    <a href="mailto:msajce.office@gmail.com" className="hover:text-primary transition-colors break-all">msajce.office@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Location Address */}
              <div className="flex items-start gap-4 p-4 bg-background border border-border rounded-sm">
                <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold font-oswald uppercase text-muted-foreground block">Admission Cell Campus Address</span>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                    Mohamed Sathak A.J. College of Engineering,<br />
                    Inside SIPCOT IT Park, Egattur, Siruseri,<br />
                    Chennai – 603103, Tamil Nadu, India.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

        {/* ── 5. CLOSING CTA ROW (EXCLUDING ONLINE FEE PAYMENT) ── */}
        <Reveal variant="rise" once={true}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border pt-10">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-xl font-bold font-oswald uppercase text-foreground">Ready to Apply for 2026-2027 Admissions?</h3>
              <p className="text-xs text-muted-foreground">Complete your application online or check detailed cutoff eligibility rules.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
              <Magnetic>
                <a 
                  href="https://msajce-edu.in/admission_form.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-primary px-6 py-4 text-xs font-bold uppercase tracking-wider text-primary-foreground font-oswald rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs transition-opacity hover:opacity-90"
                >
                  <span>Apply Online</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Magnetic>
              <Magnetic>
                <Link 
                  to="/admissions/eligibility"
                  className="group flex items-center justify-center gap-3 border border-border bg-card px-6 py-4 text-xs font-bold uppercase tracking-wider text-foreground font-oswald rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs transition-colors hover:border-primary"
                >
                  <span>Check Eligibility</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
            </div>
          </div>
        </Reveal>

      </section>
    </main>
  );
}
