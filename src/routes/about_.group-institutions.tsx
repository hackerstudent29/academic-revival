import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Building2, GraduationCap, Stethoscope, BookOpen, MapPin, ExternalLink } from "lucide-react";

const title = "Group of Institutions — Mohamed Sathak Trust";
const description =
  "Complete directory of the 18 educational institutions managed by Mohamed Sathak Trust across Chennai, Kilakarai, and Ramanathapuram.";

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

const chennaiInstitutions = [
  {
    name: "Mohamed Sathak A.J. College of Engineering (MSAJCE)",
    location: "Siruseri IT Park, OMR, Chennai",
    desc: "Autonomous engineering institution offering UG, PG, and PhD research programmes in Engineering, AI, and Technology.",
    isCurrent: true,
  },
  {
    name: "Mohamed Sathak A.J. Academy of Architecture",
    location: "Chennai",
    desc: "Council of Architecture (CoA) approved institution delivering premier B.Arch degree programmes.",
  },
  {
    name: "Mohamed Sathak College of Arts And Science",
    location: "Sholinganallur, OMR, Chennai",
    desc: "NAAC accredited co-educational institution offering 20+ UG and PG programmes in Science, Commerce, and Humanities.",
  },
  {
    name: "Mohamed Sathak A.J. College of Nursing",
    location: "Chennai",
    desc: "Modern nursing education center with clinical affiliations to top multispecialty hospitals in Chennai.",
  },
  {
    name: "Mohamed Sathak A.J. College of Pharmacy",
    location: "Sholinganallur, Chennai",
    desc: "PCI approved campus providing B.Pharm, M.Pharm, and Pharm.D doctoral pharmaceutical programmes.",
  },
  {
    name: "Mohamed Sathak A.J. College of Physiotherapy",
    location: "Chennai",
    desc: "Delivering Bachelor of Physiotherapy (BPT) with hands-on clinical training and rehabilitation practice.",
  },
  {
    name: "Mohamed Sathak Teacher Training College",
    location: "Chennai",
    desc: "NCTE recognized teacher training institution shaping future educators.",
  },
  {
    name: "Mohamed Sathak Matric & Hr. Sec. School",
    location: "Chennai",
    desc: "Providing holistic K-12 schooling with focus on academic excellence, sports, and value education.",
  },
];

const kilakaraiInstitutions = [
  {
    name: "Mohamed Sathak Engineering College (MSEC)",
    location: "Kilakarai, Ramanathapuram",
    desc: "Established in 1984 — the first self-financing engineering college in Tamil Nadu.",
  },
  {
    name: "Mohamed Sathak Hamid College of Arts & Science for Women",
    location: "Ramanathapuram",
    desc: "Empowering women with quality higher education in Arts, Science, Commerce, and Computer Applications.",
  },
  {
    name: "Syed Hameedha Arts & Science College",
    location: "Kilakarai, Ramanathapuram",
    desc: "Offering degree programmes in management, computer applications, and basic sciences.",
  },
  {
    name: "Mohamed Sathak Polytechnic College",
    location: "Kilakarai, Ramanathapuram",
    desc: "Diploma technical education across Mechanical, Civil, ECE, EEE, and Computer Engineering.",
  },
  {
    name: "Mohamed Sathak I.T.I. (Industrial Training Institute)",
    location: "Kilakarai, Ramanathapuram",
    desc: "Vocational trade training empowering youth with immediate technical self-employability.",
  },
  {
    name: "Syed Hameedha Arabic College",
    location: "Kilakarai, Ramanathapuram",
    desc: "Specialized institution dedicated to Oriental languages, literature, and Islamic studies.",
  },
  {
    name: "Mohamed Sathak Dastagir Matriculation Hr. Sec. School",
    location: "Kilakarai, Ramanathapuram",
    desc: "Holistic secondary and higher secondary education for rural and semi-urban students.",
  },
  {
    name: "Mohamed Sathak Kabeer Public School (CBSE)",
    location: "Kilakarai, Ramanathapuram",
    desc: "CBSE curriculum school delivering modern digital learning and sports facilities.",
  },
  {
    name: "Mohamed Sathak Dasthagir Teacher Training College",
    location: "Ramanathapuram",
    desc: "NCTE approved institution preparing skilled teaching professionals.",
  },
];

const groupStats = [
  { value: "18", label: "Educational Institutions" },
  { value: "25,000+", label: "Active Students" },
  { value: "100,000+", label: "Global Alumni Network" },
  { value: "50+ Years", label: "Educational Service" },
];

export function GroupOfInstitutionsPage() {
  return (
    <main className="bg-page-bg text-foreground min-h-screen pt-0 md:pt-1">
      {/* Header & Sub-Nav Title */}
      <section className="relative border-b border-border bg-page-bg pt-4 md:pt-6 pb-12 md:pb-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          {/* Secondary Sub-Nav Header */}
          <div className="mb-4">
            <span className="text-sm sm:text-base md:text-lg xl:text-xl font-black font-oswald uppercase text-primary tracking-wider">
              ABOUT MSAJCE // NETWORK OF EXCELLENCE
            </span>
          </div>

          <div className="flex flex-col gap-3 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground font-oswald leading-none">
              Group of Institutions <br />
              <span className="text-primary font-oswald">Mohamed Sathak Trust</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground font-sans mt-2">
              Mohamed Sathak Trust operates 18 premier educational institutions across Tamil Nadu, serving thousands of students across Engineering, Architecture, Health Sciences, Arts & Science, and Schooling.
            </p>
          </div>

          {/* Key Group Stats */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-8">
            {groupStats.map((st) => (
              <div key={st.label} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-oswald">
                  {st.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-sans mt-1">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutions in Chennai */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-16">
        <div className="flex items-center gap-3 border-b border-border pb-4 mb-8">
          <div className="w-10 h-10 rounded-sm bg-primary/10 text-primary flex items-center justify-center">
            <Building2 size={20} />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">Chennai Region</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground font-oswald">
              Institutions in Chennai (8)
            </h2>
          </div>
        </div>

        <Stagger gap={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {chennaiInstitutions.map((inst) => (
            <StaggerItem
              key={inst.name}
              variant="rise"
              className={`bg-card border rounded-sm p-6 shadow-xs flex flex-col justify-between ${
                inst.isCurrent ? "border-primary ring-1 ring-primary/20" : "border-border"
              }`}
            >
              <div>
                {inst.isCurrent && (
                  <span className="inline-block px-2.5 py-0.5 bg-primary text-primary-foreground text-[10px] font-mono font-bold uppercase tracking-widest rounded-xs mb-3">
                    Current Campus
                  </span>
                )}
                <h3 className="text-base font-bold text-foreground font-oswald uppercase mb-2 leading-snug">
                  {inst.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-primary font-medium font-sans mb-3">
                  <MapPin size={13} /> {inst.location}
                </div>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                  {inst.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Institutions in Kilakarai & Ramanathapuram */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-16 border-t border-border">
        <div className="flex items-center gap-3 border-b border-border pb-4 mb-8">
          <div className="w-10 h-10 rounded-sm bg-primary/10 text-primary flex items-center justify-center">
            <GraduationCap size={20} />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-primary uppercase tracking-widest">Southern Region</span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground font-oswald">
              Institutions in Kilakarai & Ramanathapuram (9)
            </h2>
          </div>
        </div>

        <Stagger gap={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kilakaraiInstitutions.map((inst) => (
            <StaggerItem
              key={inst.name}
              variant="rise"
              className="bg-card border border-border rounded-sm p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-foreground font-oswald uppercase mb-2 leading-snug">
                  {inst.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-primary font-medium font-sans mb-3">
                  <MapPin size={13} /> {inst.location}
                </div>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                  {inst.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-border bg-page-bg py-10">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-semibold text-muted-foreground font-sans">
            Have questions about admissions or campus visits across Mohamed Sathak institutions?
          </span>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-primary/90 transition-colors font-oswald"
          >
            Contact Admissions &raquo;
          </Link>
        </div>
      </section>
    </main>
  );
}

