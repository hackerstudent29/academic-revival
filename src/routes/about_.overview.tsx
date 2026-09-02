import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ArrowRight, CheckCircle2, Award, Building2, MapPin, Users, BookOpen } from "lucide-react";

const title = "Institution Overview — M.S.A.J. College of Engineering, Chennai";
const description =
  "Discover MSAJCE campus overview, AICTE approval, Anna University affiliation, NBA & NAAC accreditations, and Siruseri IT Park location.";

export const Route = createFileRoute("/about_/overview")({
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
  component: InstitutionOverviewPage,
});

const keyStats = [
  { label: "Established", value: "2001", sub: "25+ Years of Service" },
  { label: "Affiliation", value: "Anna Univ.", sub: "Approved by AICTE" },
  { label: "Location", value: "OMR IT Park", sub: "Siruseri, Chennai" },
  { label: "Placement Rate", value: "90%+", sub: "Consistently Maintained" },
];

const highlights = [
  {
    icon: Building2,
    title: "Prime Tech Hub Location",
    description:
      "Situated inside the SIPCOT IT Park in Siruseri, Chennai — surrounded by multinational technology companies like TCS, Cognizant, and Syntel.",
  },
  {
    icon: Award,
    title: "Accreditations & Approvals",
    description:
      "Approved by AICTE New Delhi, affiliated to Anna University Chennai, accredited by NBA, and certified with ISO 9001:2015 standards.",
  },
  {
    icon: BookOpen,
    title: "Industry-Aligned Curriculum",
    description:
      "Offers 14 UG programmes, PG programmes, and doctoral research centers designed in collaboration with corporate tech partners.",
  },
  {
    icon: Users,
    title: "State-of-the-Art Facilities",
    description:
      "Advanced R&D laboratories, AICTE-approved IDEA Lab, 50,000+ volume library, 1000-seater auditorium, and modern hostels.",
  },
];

export function InstitutionOverviewPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Editorial Page Hero */}
      <section className="relative border-b border-border bg-page-bg py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-primary">
              About MSAJCE // Overview
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground">
              Engineering with Purpose & Integrity
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground mt-2">
              Mohamed Sathak A.J. College of Engineering (MSAJCE) is a premier engineering institution in Chennai, dedicated to technical excellence, ethical leadership, and innovation since 2001.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-border pt-8">
            {keyStats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl md:text-4xl font-bold tracking-tight text-primary font-display">
                  {stat.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-foreground mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-muted-foreground mt-0.5">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Narrative & Image Section */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Reveal variant="slide-right">
              <span className="text-[11px] font-mono font-bold tracking-widest text-primary uppercase">
                // Campus Snapshot
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground mt-2">
                A Hub for Technical Innovators
              </h2>
            </Reveal>
            <Reveal variant="slide-right" delay={0.1}>
              <p className="text-base leading-relaxed text-muted-foreground">
                Established under the aegis of the Mohamed Sathak Trust, MSAJCE has evolved into one of the top engineering colleges on Chennai’s IT Corridor. Spanning a lush campus in Siruseri IT Park, the college provides students with an immersive academic experience directly connected to industry giants.
              </p>
            </Reveal>
            <Reveal variant="slide-right" delay={0.2}>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our outcome-based education (OBE) model ensures students master technical fundamentals, gain hands-on laboratory experience, and engage in real-world engineering projects from their early semesters.
              </p>
            </Reveal>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/about/vision-mission"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-md hover:bg-primary/90 transition-colors shadow-sm"
              >
                Vision & Mission <ArrowRight size={14} />
              </Link>
              <Link
                to="/about/leadership"
                className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-md hover:bg-muted transition-colors"
              >
                Leadership Messages
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Reveal variant="scale" className="relative rounded-lg overflow-hidden border border-border bg-muted shadow-md aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                alt="MSAJCE Students Collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-sm font-semibold tracking-wide">
                  State-of-the-art learning environments on Chennai's IT Corridor
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Key Institutional Highlights */}
      <section className="bg-page-bg border-y border-border py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-mono font-bold tracking-widest text-primary uppercase block mb-2">
              Why MSAJCE // Key Highlights
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground">
              Excellence across Infrastructure, Faculty & Placements
            </h2>
          </div>

          <Stagger gap={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem
                  key={item.title}
                  variant="rise"
                  className="bg-card border border-border p-6 rounded-md shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-5">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Quick Navigation Footer Row */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-8">
          <div>
            <h3 className="text-xl font-bold text-foreground">Explore The Institution</h3>
            <p className="text-sm text-muted-foreground">Discover our leadership, trust, and network of institutions.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/about/trust"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider border border-border rounded-md hover:bg-muted transition-colors"
            >
              The Trust &raquo;
            </Link>
            <Link
              to="/about/group-institutions"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider border border-border rounded-md hover:bg-muted transition-colors"
            >
              Group of Institutions &raquo;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
