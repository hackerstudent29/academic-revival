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
    <section className="relative w-full overflow-hidden h-auto lg:h-[70vh] flex flex-col lg:block">
      {/* Desktop Image Showcase */}
      <motion.div 
        initial={{ width: "100%" }}
        animate={{ width: "58%" }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-y-0 right-0 z-10 hidden lg:block pointer-events-none"
      >
        <img 
          src="/images/procedure_hero.jpg" 
          alt="Students going through admission procedure at MSAJCE" 
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop";
          }}
        />
      </motion.div>

      {/* Accent sliding diagonal block */}
      <motion.div 
        initial={{ width: "0%" }}
        animate={{ width: "50%" }}
        transition={{ duration: 1.2, delay: 0.05, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-y-0 left-0 bg-primary z-20 hidden lg:block shadow-2xl"
        style={{ clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)" }}
      />

      {/* Sliding Background from Left */}
      <motion.div 
        initial={{ width: "0%" }}
        animate={{ width: "49%" }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-y-0 left-0 bg-background z-30 hidden lg:block"
        style={{ clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)" }}
      />

      {/* Mobile Image */}
      <div className="w-full h-[260px] relative lg:hidden block z-10">
        <img 
          src="/images/procedure_hero.jpg" 
          alt="Students going through admission procedure at MSAJCE" 
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop";
          }}
        />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-[48%] px-6 py-10 md:py-14 lg:px-10 xl:px-12 flex flex-col justify-center z-40 relative lg:absolute lg:inset-y-0 lg:left-0 h-full bg-background lg:bg-transparent">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-sm bg-primary animate-pulse" />
            <span className="text-xs font-black uppercase font-oswald tracking-widest text-primary">TNEA CODE: 1301 // ADMISSIONS 2026-2027</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tight text-foreground font-oswald mb-4 text-balance">
            ADMISSION <br className="hidden sm:inline"/>
            PROCEDURE
          </h1>
          
          <p className="text-sm md:text-base font-medium text-muted-foreground leading-relaxed max-w-md font-sans">
            Step-by-step guidance for undergraduate (B.E. / B.Tech), lateral entry, postgraduate (M.E.), and Ph.D. admissions at Mohamed Sathak A.J. College of Engineering.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="https://msajce-edu.in/admission_form.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider font-oswald rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs shadow-xs hover:opacity-90 transition-opacity"
            >
              <span>Apply Online Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="/uploads/admission/College-Prospectus.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border bg-card text-foreground text-xs font-bold uppercase tracking-wider font-oswald rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:border-primary transition-colors"
            >
              <Download className="w-4 h-4 text-primary" />
              <span>Download Prospectus</span>
            </a>
          </div>
        </motion.div>
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
