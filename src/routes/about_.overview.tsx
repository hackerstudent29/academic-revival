import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  MapPin,
  Users,
  BookOpen,
  GraduationCap,
  Globe,
  Award,
  Sparkles,
  Zap,
  Languages,
  Rocket,
  Briefcase,
  Layers,
} from "lucide-react";

const title = "Institution Overview — M.S.A.J. College of Engineering, Chennai";
const description =
  "Comprehensive overview of Mohamed Sathak A.J. College of Engineering (MSAJCE), established in 2001, AICTE approved, Anna University affiliated, 70-acre Siruseri IT Park campus.";

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

const overviewStats = [
  { label: "Established Date", value: "5th July 2001", sub: "Under Mohamed Sathak Trust" },
  { label: "Campus Size", value: "70 Acres", sub: "Sprawling Green Campus" },
  { label: "Location", value: "SIPCOT IT Park", sub: "Siruseri, OMR Chennai" },
  { label: "Affiliation", value: "Anna Univ.", sub: "Approved by AICTE & Govt. of TN" },
];

const whyJoinPoints = [
  {
    icon: MapPin,
    title: "Lush IT Park Environment",
    desc: "Located in a green, lush environment at Siruseri IT Park surrounded by 100+ leading IT industries like TCS, CTS, Infosys, Intellect, FSS, HCL, etc.",
  },
  {
    icon: Building2,
    title: "Industry Collaborative Centers",
    desc: "State-of-the-art facilities equipped with industry collaborative technology centers.",
  },
  {
    icon: Users,
    title: "Qualified & Dedicated Faculty",
    desc: "Qualified, experienced, and dedicated team of faculty members supporting student growth.",
  },
  {
    icon: BookOpen,
    title: "Smart Learning Framework",
    desc: "Well-defined academic process ensuring student smart learning and conceptual clarity.",
  },
  {
    icon: Zap,
    title: "Competency-Based Learning",
    desc: "Active involvement in research & industrial projects, Industrial Hackathons, and Project competitions.",
  },
  {
    icon: Sparkles,
    title: "Clubs & Professional Chapters",
    desc: "Professional society, club activities, and student chapter activities enabling innovative learning.",
  },
  {
    icon: Globe,
    title: "Cultural Student Exchange",
    desc: "Student Exchange Programs fostering global perspectives and cultural learning.",
  },
  {
    icon: Briefcase,
    title: "Industrial Expectations Alignment",
    desc: "Internships, Industrial Visits, Guest Lectures, and Seminars/Webinars by Industrial Experts.",
  },
  {
    icon: Languages,
    title: "Language Learning Facility",
    desc: "Specialized Communication Language Learning facility covering English, German, and Japanese.",
  },
  {
    icon: Layers,
    title: "Value Added Courses",
    desc: "Value Added Courses & Technology Training designed to bridge the gap between institute and industry.",
  },
  {
    icon: Award,
    title: "Good Placement Record",
    desc: "Consistent placement track record with top-tier MNCs and corporate industry partners.",
  },
  {
    icon: Rocket,
    title: "Higher Ed & Entrepreneurship",
    desc: "Comprehensive support for higher studies, competitive exams, and becoming a successful entrepreneur.",
  },
];

export function InstitutionOverviewPage() {
  return (
    <main className="bg-page-bg text-foreground min-h-screen">
      {/* Page Hero */}
      <section className="relative border-b border-border bg-page-bg py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="flex flex-col gap-4 max-w-4xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-primary">
              About MSAJCE // Institution Overview
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground">
              MSAJCE — An Overview
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground mt-2">
              The Mohamed Sathak A.J. College of Engineering (MSAJCE), established on 5th July 2001 under the aegis of Mohamed Sathak Trust, is approved by AICTE New Delhi, affiliated to Anna University Chennai and Government of Tamil Nadu. MSAJCE strives to continuously upgrade its facilities to provide quality technical education to meet industrial and societal needs, by providing skill-based training with state-of-the-art facilities.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-border pt-8">
            {overviewStats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold tracking-tight text-primary font-display">
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

      {/* Main Narrative & Infrastructure Overview */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Reveal variant="slide-right">
              <span className="text-[11px] font-mono font-bold tracking-widest text-primary uppercase">
                // Campus Infrastructure & Ecosystem
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground mt-2">
                Sprawling 70-Acre Campus in Siruseri IT Park
              </h2>
            </Reveal>
            <Reveal variant="slide-right" delay={0.1}>
              <p className="text-base leading-relaxed text-muted-foreground">
                The college campus, sprawling over 70 acres of greenery located inside the SIPCOT IT Park, Siruseri, is surrounded by multinational IT companies such as TCS, CTS, Intellect, Aspire, Steria, Polaris, FSS, etc.
              </p>
            </Reveal>
            <Reveal variant="slide-right" delay={0.2}>
              <p className="text-base leading-relaxed text-muted-foreground">
                MSAJCE has good infrastructure facilities such as spacious classrooms, drawing halls, laboratories, seminar halls, computer facilities with internet and Wi-Fi connectivity, library, workshops, auditorium, and playground. The college is well connected by Road, Rail, and Air from various parts of the country.
              </p>
            </Reveal>
            <Reveal variant="slide-right" delay={0.3}>
              <p className="text-base leading-relaxed text-muted-foreground">
                A team of well-qualified and experienced faculty supports the teaching and learning process. The college provides equal importance for academic, co-curricular, and extracurricular activities. MSAJCE provides all kinds of training for the professional and overall transformation of the students.
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

          <div className="lg:col-span-5">
            <Reveal variant="scale" className="relative rounded-lg overflow-hidden border border-border bg-card shadow-md aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop"
                alt="MSAJCE Campus Environment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-sm font-semibold tracking-wide">
                  70 Acres of lush green campus inside SIPCOT IT Park Siruseri
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Join MSAJCE ? Section */}
      <section className="bg-page-bg border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="max-w-3xl mb-14">
            <span className="text-[11px] font-mono font-bold tracking-widest text-primary uppercase block mb-2">
              Key Advantages // Student Growth
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
              Why Join MSAJCE ?
            </h2>
            <p className="text-base text-muted-foreground mt-3">
              Explore the key reasons why Mohamed Sathak A.J. College of Engineering is the preferred destination for ambitious engineering aspirants.
            </p>
          </div>

          <Stagger gap={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyJoinPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <StaggerItem
                  key={item.title}
                  variant="rise"
                  className="bg-card border border-border p-6 rounded-md shadow-xs flex flex-col justify-between hover:border-primary/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-muted-foreground">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Bottom Route Navigation */}
      <section className="border-t border-border bg-page-bg py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-semibold text-muted-foreground">
            Explore Vision & Mission, Leadership, and Trust History
          </span>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/about/vision-mission"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider border border-border rounded-md hover:bg-muted transition-colors"
            >
              Vision & Mission &raquo;
            </Link>
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
