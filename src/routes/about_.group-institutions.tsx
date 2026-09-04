import { createFileRoute, Link } from "@tanstack/react-router";
import { AboutSubNav } from "@/components/layout/AboutSubNav";
import { Reveal } from "@/components/motion";
import { Building2, MapPin, GraduationCap, School, BookOpen, ExternalLink, Award } from "lucide-react";

const title = "Group of Institutions — Mohamed Sathak Trust";
const description =
  "Comprehensive directory of 18 educational institutions operated by Mohamed Sathak Trust across Chennai, Kilakarai, and Ramanathapuram.";

export const Route = createFileRoute("/about_/group-institutions")({
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
  component: GroupInstitutionsPage,
});

const chennaiInstitutions = [
  {
    name: "Mohamed Sathak A.J. College of Engineering",
    category: "Engineering & Technology",
    desc: "AICTE approved, Anna University affiliated 70-acre engineering campus inside Siruseri IT Park.",
    badge: "Flagship Engineering",
  },
  {
    name: "Mohamed Sathak A.J. Academy of Architecture",
    category: "Architecture & Design",
    desc: "Council of Architecture approved B.Arch degree program.",
    badge: "Architecture",
  },
  {
    name: "Mohamed Sathak College of Arts And Science",
    category: "Arts & Science",
    desc: "Established in 1991, offering UG/PG degrees in computer science, commerce, and humanities.",
    badge: "Arts & Science",
  },
  {
    name: "Mohamed Sathak A.J. College of Nursing",
    category: "Healthcare & Nursing",
    desc: "Indian Nursing Council approved B.Sc. Nursing & Postgraduate nursing studies.",
    badge: "Nursing",
  },
  {
    name: "Mohamed Sathak A.J. College of Pharmacy",
    category: "Pharmacy Sciences",
    desc: "Pharmacy Council of India (PCI) approved B.Pharm & M.Pharm programs.",
    badge: "Pharmacy",
  },
  {
    name: "Mohamed Sathak A.J. College of Physiotherapy",
    category: "Physiotherapy & Health",
    desc: "Bachelor & Master of Physiotherapy (BPT & MPT) professional clinical training.",
    badge: "Physiotherapy",
  },
  {
    name: "Mohamed Sathak Teacher Training College",
    category: "Teacher Education",
    desc: "NCTE recognized B.Ed & Diploma in Elementary Education.",
    badge: "Education",
  },
  {
    name: "Mohamed Sathak Matric & Hr. Sec. School",
    category: "K-12 Schooling",
    desc: "State Board secondary & higher secondary school education.",
    badge: "Matriculation",
  },
];

const kilakaraiInstitutions = [
  {
    name: "Mohamed Sathak Engineering College",
    category: "Engineering (Est. 1984)",
    desc: "First self-financing engineering college in Tamil Nadu, established at Kilakarai in 1984.",
    badge: "Pioneer College (1984)",
  },
  {
    name: "Mohamed Sathak Hamid College of Arts and Science for Women",
    category: "Women's Higher Education",
    desc: "Empowering women scholars in arts, science, and commerce disciplines.",
    badge: "Women's College",
  },
  {
    name: "Syed Hameedha Arts & Science College",
    category: "Arts & Science",
    desc: "Co-educational undergraduate and postgraduate higher education in Kilakarai.",
    badge: "Arts & Science",
  },
  {
    name: "Mohamed Sathak Polytechnic College",
    category: "Diploma Polytechnic",
    desc: "DOTE & AICTE approved 3-year technical diploma programs.",
    badge: "Polytechnic",
  },
  {
    name: "Mohamed Sathak I.T.I.",
    category: "Industrial Training",
    desc: "NCVT approved trade certifications and technical skill development.",
    badge: "Vocational ITI",
  },
  {
    name: "Syed Hameedha Arabic College",
    category: "Arabic & Islamic Studies",
    desc: "Specialized language, cultural, and theological studies.",
    badge: "Languages",
  },
  {
    name: "Mohamed Sathak Dastagir Matriculation Hr. Sec. School",
    category: "Schooling",
    desc: "Premier matriculation higher secondary school in Ramanathapuram.",
    badge: "Matriculation",
  },
  {
    name: "Mohamed Sathak Kabeer Public School (CBSE)",
    category: "CBSE Schooling",
    desc: "Central Board of Secondary Education affiliated modern school.",
    badge: "CBSE",
  },
  {
    name: "Mohamed Sathak Dasthagir Teacher Training College",
    category: "Teacher Education",
    desc: "NCTE approved teacher development institute.",
    badge: "Teacher Training",
  },
];

export function GroupInstitutionsPage() {
  return (
    <main className="bg-page-bg text-foreground min-h-screen pt-0 md:pt-1">
      {/* Secondary Sticky Sub-Nav Header */}
      <AboutSubNav />

      {/* Hero Showcase Section */}
      <section className="relative border-b border-border bg-gradient-to-b from-primary/10 via-background to-page-bg pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="flex flex-col gap-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-foreground/10 border border-foreground/20 text-foreground text-xs font-mono font-bold uppercase rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs w-max">
              Network of Educational Excellence
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-foreground font-oswald leading-none">
              Group of <span className="text-primary">Institutions</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground font-libre mt-2 max-w-3xl">
              Mohamed Sathak Trust operates <strong>18 educational institutions</strong> across Tamil Nadu, spanning Engineering, Architecture, Arts & Science, Pharmacy, Nursing, Physiotherapy, Vocational ITI, and K-12 Schooling.
            </p>
          </div>

          {/* Quick Regional Counts */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-8">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-black font-oswald text-primary">18</span>
              <span className="text-xs font-bold font-oswald uppercase text-foreground mt-1">Total Institutions</span>
              <span className="text-[11px] font-libre text-muted-foreground">Managed by Mohamed Sathak Trust</span>
            </div>
            <div className="flex flex-col md:border-l md:border-border md:pl-6">
              <span className="text-3xl md:text-4xl font-black font-oswald text-primary">8</span>
              <span className="text-xs font-bold font-oswald uppercase text-foreground mt-1">Chennai Cluster</span>
              <span className="text-[11px] font-libre text-muted-foreground">Engineering, Architecture, Health</span>
            </div>
            <div className="flex flex-col md:border-l md:border-border md:pl-6">
              <span className="text-3xl md:text-4xl font-black font-oswald text-primary">9</span>
              <span className="text-xs font-bold font-oswald uppercase text-foreground mt-1">Kilakarai & Ramnad</span>
              <span className="text-[11px] font-libre text-muted-foreground">Engineering, Polytechnic, Schools</span>
            </div>
            <div className="flex flex-col md:border-l md:border-border md:pl-6">
              <span className="text-3xl md:text-4xl font-black font-oswald text-primary">1984</span>
              <span className="text-xs font-bold font-oswald uppercase text-foreground mt-1">Historic Legacy</span>
              <span className="text-[11px] font-libre text-muted-foreground">1st Self-Financing Engg. College</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chennai Institutions Grid */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-16 font-libre">
        <div className="flex flex-col gap-3 mb-10">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
            // Capital Region Campus Cluster
          </span>
          <h2 className="text-3xl md:text-4xl font-black font-oswald uppercase text-foreground">
            Institutions in Chennai (8)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {chennaiInstitutions.map((inst) => (
            <div
              key={inst.name}
              className="p-6 border border-border rounded-lg bg-card hover:border-primary/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 text-xs font-oswald font-bold uppercase text-foreground bg-foreground/10 border border-foreground/20 rounded-sm">
                    {inst.badge}
                  </span>
                </div>
                <h3 className="text-lg font-oswald font-bold uppercase text-foreground mb-2 leading-snug">
                  {inst.name}
                </h3>
                <p className="text-xs font-libre text-muted-foreground leading-relaxed">
                  {inst.desc}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-border/60 text-xs font-mono font-bold text-primary uppercase">
                Location: Chennai
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kilakarai & Ramanathapuram Institutions Grid */}
      <section className="border-t border-border bg-muted/20 py-12 md:py-16 font-libre">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="flex flex-col gap-3 mb-10">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              // Southern Heritage Campus Cluster
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-oswald uppercase text-foreground">
              Institutions in Kilakarai & Ramanathapuram (9)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kilakaraiInstitutions.map((inst) => (
              <div
                key={inst.name}
                className="p-6 border border-border rounded-lg bg-card hover:border-primary/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 text-xs font-oswald font-bold uppercase text-foreground bg-foreground/10 border border-foreground/20 rounded-sm">
                      {inst.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-oswald font-bold uppercase text-foreground mb-2 leading-snug">
                    {inst.name}
                  </h3>
                  <p className="text-xs font-libre text-muted-foreground leading-relaxed">
                    {inst.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-border/60 text-xs font-mono font-bold text-primary uppercase">
                  Location: Kilakarai / Ramanathapuram
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="border-t border-border bg-page-bg py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-libre font-semibold text-muted-foreground">
            Explore Governing Council and Mandatory Disclosures
          </span>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/about/governing-council"
              className="px-4 py-2 text-xs font-oswald font-bold uppercase tracking-wider border border-border rounded-sm hover:bg-muted transition-colors"
            >
              Governing Council &raquo;
            </Link>
            <Link
              to="/about/accreditations"
              className="px-4 py-2 text-xs font-oswald font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors"
            >
              Mandatory Disclosure &raquo;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
