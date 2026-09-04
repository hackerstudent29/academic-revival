import { createFileRoute, Link } from "@tanstack/react-router";
import { AboutSubNav } from "@/components/layout/AboutSubNav";
import { Reveal } from "@/components/motion";
import { ShieldCheck, Award, FileText, Download, CheckCircle2, Building, ExternalLink } from "lucide-react";

const title = "Mandatory Disclosure & Accreditations — M.S.A.J. College of Engineering";
const description =
  "Official mandatory disclosure documents, AICTE approvals, Anna University affiliation, NAAC, IQAC, NIRF, and ARIIA certificates of MSAJCE.";

export const Route = createFileRoute("/about_/accreditations")({
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
  component: AccreditationsPage,
});

const accreditations = [
  {
    code: "AICTE",
    title: "AICTE New Delhi Approval",
    desc: "Approved by All India Council for Technical Education (AICTE), New Delhi for all B.E, B.Tech, and M.E programs.",
    status: "Approved",
  },
  {
    code: "ANNA UNIV",
    title: "Anna University Affiliation",
    desc: "Affiliated to Anna University, Chennai — premier technical university of Tamil Nadu.",
    status: "Affiliated",
  },
  {
    code: "GOVT TN",
    title: "Government of Tamil Nadu",
    desc: "Recognized by Higher Education Department, Government of Tamil Nadu.",
    status: "Recognized",
  },
  {
    code: "NAAC",
    title: "NAAC Accreditation",
    desc: "National Assessment and Accreditation Council (NAAC) institutional quality assurance.",
    status: "Accredited",
  },
  {
    code: "IQAC",
    title: "Internal Quality Assurance Cell",
    desc: "Established IQAC cell for continuous pedagogical improvement and academic auditing.",
    status: "Active Cell",
  },
  {
    code: "NIRF",
    title: "NIRF Participant",
    desc: "National Institutional Ranking Framework (NIRF) reporting under MoE, Govt of India.",
    status: "Participating",
  },
  {
    code: "ARIIA",
    title: "ARIIA 2021 Certified",
    desc: "Atal Ranking of Institutions on Innovation Achievements certified technical institute.",
    status: "Certified",
  },
  {
    code: "ISO",
    title: "ISO 9001 Quality System",
    desc: "ISO certified institutional management and laboratory standard compliance.",
    status: "Certified",
  },
];

export function AccreditationsPage() {
  return (
    <main className="bg-page-bg text-foreground min-h-screen pt-0 md:pt-1">
      {/* Secondary Sticky Sub-Nav Header */}
      <AboutSubNav />

      {/* Hero Showcase Section */}
      <section className="relative border-b border-border bg-gradient-to-b from-primary/10 via-background to-page-bg pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="flex flex-col gap-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-foreground/10 border border-foreground/20 text-foreground text-xs font-mono font-bold uppercase rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs w-max">
              Regulatory Compliance & Quality Framework
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-foreground font-oswald leading-none">
              Mandatory Disclosure & <span className="text-primary">Accreditations</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground font-libre mt-2 max-w-3xl">
              Official statutory compliance documents, AICTE approvals, Anna University affiliation details, NAAC portal, IQAC audits, and institutional certifications.
            </p>
          </div>
        </div>
      </section>

      {/* Accreditations Grid */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-16 font-libre">
        <div className="flex flex-col gap-3 mb-10">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
            // Statutory Approvals & Quality Rankings
          </span>
          <h2 className="text-3xl md:text-4xl font-black font-oswald uppercase text-foreground">
            Recognitions & Accreditations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accreditations.map((item) => (
            <div
              key={item.code}
              className="p-6 border border-border rounded-lg bg-card hover:border-primary/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 text-xs font-oswald font-black uppercase text-foreground bg-foreground/10 border border-foreground/20 rounded-sm">
                    {item.code}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary">
                    {item.status}
                  </span>
                </div>
                <h3 className="text-lg font-oswald font-bold uppercase text-foreground mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-libre text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-border/60 flex items-center gap-1.5 text-xs font-libre font-semibold text-primary">
                <CheckCircle2 size={15} /> Verified Standard
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Download Mandatory Disclosure Document Block */}
      <section className="border-t border-border bg-muted/20 py-12 md:py-16 font-libre">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="p-8 md:p-12 border border-border rounded-xl bg-card flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
                Mandatory Regulatory File
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-oswald uppercase text-foreground">
                Download Official Mandatory Disclosure PDF
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Contains complete institutional details including faculty list, lab equipment inventory, land records, AICTE extension approvals, fee structure, and hostel facilities.
              </p>
            </div>
            <a
              href="https://www.msajce-edu.in/about.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 text-xs font-oswald font-bold uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-colors shrink-0 shadow-xs"
            >
              <Download size={16} /> Official Portal &raquo;
            </a>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="border-t border-border bg-page-bg py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-libre font-semibold text-muted-foreground">
            Explore Overview, Vision & Mission, and Governing Council
          </span>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/about/overview"
              className="px-4 py-2 text-xs font-oswald font-bold uppercase tracking-wider border border-border rounded-sm hover:bg-muted transition-colors"
            >
              Overview &raquo;
            </Link>
            <Link
              to="/about/vision-mission"
              className="px-4 py-2 text-xs font-oswald font-bold uppercase tracking-wider border border-border rounded-sm hover:bg-muted transition-colors"
            >
              Vision & Mission &raquo;
            </Link>
            <Link
              to="/about/governing-council"
              className="px-4 py-2 text-xs font-oswald font-bold uppercase tracking-wider border border-border rounded-sm hover:bg-muted transition-colors"
            >
              Governing Council &raquo;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
