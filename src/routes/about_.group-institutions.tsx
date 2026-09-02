import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Building2, GraduationCap, Stethoscope, BookOpen, MapPin, ExternalLink } from "lucide-react";

const title = "Group of Institutions — Mohamed Sathak Trust";
const description =
  "Overview of the 18+ educational institutions managed by Mohamed Sathak Trust across Engineering, Arts & Science, Medical Sciences, and Schools.";

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
  component: GroupOfInstitutionsPage,
});

const categories = [
  {
    name: "Engineering & Architecture",
    icon: Building2,
    institutions: [
      {
        name: "Mohamed Sathak A.J. College of Engineering (MSAJCE)",
        location: "Siruseri IT Park, OMR, Chennai",
        desc: "Autonomous campus offering 14 UG, PG, and PhD research programmes in Engineering, AI, and Technology.",
        isCurrent: true,
      },
      {
        name: "Mohamed Sathak Engineering College (MSEC)",
        location: "Kilakarai, Ramanathapuram",
        desc: "Established in 1980 — the first self-financing engineering college in Tamil Nadu.",
      },
      {
        name: "Mohamed Sathak A.J. Academy of Architecture",
        location: "Chennai",
        desc: "Council of Architecture (CoA) approved institution delivering B.Arch degree programmes.",
      },
    ],
  },
  {
    name: "Arts & Science Colleges",
    icon: BookOpen,
    institutions: [
      {
        name: "Mohamed Sathak College of Arts & Science",
        location: "Sholinganallur, OMR, Chennai",
        desc: "NAAC accredited co-educational institution offering 20+ UG and PG programmes in Science, Commerce, and Humanities.",
      },
      {
        name: "Mohamed Sathak Hamid College of Arts & Science for Women",
        location: "Ramanathapuram",
        desc: "Empowering women with quality higher education, arts, and computer science degrees.",
      },
      {
        name: "Syed Hameedha Arts & Science College",
        location: "Kilakarai, Ramanathapuram",
        desc: "Offering degree programmes in management, computer applications, and basic sciences.",
      },
    ],
  },
  {
    name: "Medical & Health Sciences",
    icon: Stethoscope,
    institutions: [
      {
        name: "Mohamed Sathak A.J. College of Pharmacy",
        location: "Sholinganallur, Chennai",
        desc: "PCI approved campus providing B.Pharm, M.Pharm, and Pharm.D doctoral programmes.",
      },
      {
        name: "Mohamed Sathak College of Nursing",
        location: "Kilakarai, Ramanathapuram",
        desc: "INC & TNC recognized college offering B.Sc and M.Sc Nursing degrees.",
      },
      {
        name: "Mohamed Sathak A.J. College of Nursing",
        location: "Chennai",
        desc: "Modern nursing education center with clinical affiliations to top multispecialty hospitals.",
      },
      {
        name: "Mohamed Sathak College of Physiotherapy",
        location: "Kilakarai, Ramanathapuram",
        desc: "Offering Bachelor of Physiotherapy (BPT) with hands-on hospital internships.",
      },
    ],
  },
  {
    name: "Polytechnics & Schools",
    icon: GraduationCap,
    institutions: [
      {
        name: "Mohamed Sathak Polytechnic College",
        location: "Kilakarai, Ramanathapuram",
        desc: "Diploma technical education across Mechanical, Civil, ECE, EEE, and Computer Engineering.",
      },
      {
        name: "Mohamed Sathak Matriculation Higher Secondary School",
        location: "Chennai & Kilakarai",
        desc: "Providing holistic K-12 education nurturing academic, sports, and leadership skills.",
      },
      {
        name: "Mohamed Sathak Teacher Training Institute",
        location: "Ramanathapuram",
        desc: "NCTE approved teacher training institution shaping future educators.",
      },
    ],
  },
];

const groupStats = [
  { value: "18+", label: "Institutions" },
  { value: "25,000+", label: "Active Students" },
  { value: "100,000+", label: "Global Alumni" },
  { value: "50+ Years", label: "Educational Legacy" },
];

export function GroupOfInstitutionsPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Page Hero */}
      <section className="relative border-b border-border bg-page-bg py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-primary">
              About MSAJCE // Network of Excellence
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground">
              Group of Institutions
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground mt-2">
              Mohamed Sathak Trust operates 18+ premier educational institutions across Tamil Nadu, nurturing thousands of professionals in Engineering, Medicine, Arts, and Sciences.
            </p>
          </div>

          {/* Group Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-border pt-8">
            {groupStats.map((st) => (
              <div key={st.label} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-display">
                  {st.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutions Directory Categories */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24 flex flex-col gap-16">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div key={cat.name} className="flex flex-col gap-8">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-foreground">
                  {cat.name}
                </h2>
              </div>

              <Stagger gap={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.institutions.map((inst) => (
                  <StaggerItem
                    key={inst.name}
                    variant="rise"
                    className={`bg-card border rounded-md p-6 shadow-xs flex flex-col justify-between ${
                      inst.isCurrent ? "border-primary ring-1 ring-primary/20" : "border-border"
                    }`}
                  >
                    <div>
                      {inst.isCurrent && (
                        <span className="inline-block px-2.5 py-0.5 bg-primary text-primary-foreground text-[10px] font-mono font-bold uppercase tracking-widest rounded-xs mb-3">
                          Current Campus
                        </span>
                      )}
                      <h3 className="text-base font-bold text-foreground mb-2 leading-snug">
                        {inst.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-primary font-medium mb-3">
                        <MapPin size={13} /> {inst.location}
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {inst.desc}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          );
        })}
      </section>

      {/* Footer Navigation */}
      <section className="border-t border-border bg-page-bg py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-semibold text-muted-foreground">
            Have questions about admissions or campus visits?
          </span>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-md hover:bg-primary/90 transition-colors shadow-sm"
          >
            Contact Admissions &raquo;
          </Link>
        </div>
      </section>
    </main>
  );
}
