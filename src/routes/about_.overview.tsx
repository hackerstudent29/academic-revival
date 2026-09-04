import { createFileRoute, Link } from "@tanstack/react-router";
import { AboutSubNav } from "@/components/layout/AboutSubNav";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import {
  ArrowRight,
  MapPin,
  Building2,
  Cpu,
  Wifi,
  Library,
  Bus,
  CheckCircle2,
  Award,
  BookOpen,
} from "lucide-react";

const title = "Institution Overview — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official overview of Mohamed Sathak A.J. College of Engineering (MSAJCE), established in 2001, AICTE approved, Anna University affiliated, 70-acre Siruseri IT Park campus.";

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

const infrastructureItems = [
  {
    icon: MapPin,
    title: "70-Acre Green Campus",
    desc: "Sprawling, lush green campus located in Siruseri SIPCOT IT Park along Chennai's IT Corridor.",
  },
  {
    icon: Building2,
    title: "100+ IT MNC Surroundings",
    desc: "Directly surrounded by top tech giants like TCS, CTS, Intellect, Aspire, Steria, Polaris, and FSS.",
  },
  {
    icon: Cpu,
    title: "State-of-the-Art Labs",
    desc: "Advanced engineering laboratories, workshops, drawing halls, and industry-partnered technology centers.",
  },
  {
    icon: Wifi,
    title: "Smart Wi-Fi Campus",
    desc: "Spacious smart classrooms, seminar halls, and high-speed campus-wide Wi-Fi connectivity.",
  },
  {
    icon: Library,
    title: "50,000+ Volume Library",
    desc: "Comprehensive digital & physical library, research archives, and national e-journal subscriptions.",
  },
  {
    icon: Bus,
    title: "Seamless Transport Connectivity",
    desc: "Well-connected by Road, Rail, and Air to all major parts of Tamil Nadu and India.",
  },
];

const whyJoinPoints = [
  {
    num: "01",
    title: "Lush Environment at Siruseri IT Park",
    desc: "Located in a green, lush 70-acre environment inside Siruseri IT Park surrounded by 100+ leading IT industries like TCS, CTS, Infosys, Intellect, FSS, HCL, etc.",
  },
  {
    num: "02",
    title: "Industry Collaborative Technology Centers",
    desc: "State-of-the-art facilities equipped with dedicated industry collaborative technology centers and AICTE IDEA Labs.",
  },
  {
    num: "03",
    title: "Qualified & Dedicated Faculty Team",
    desc: "Supported by a team of highly qualified, experienced, and dedicated faculty members fostering mentorship and individual attention.",
  },
  {
    num: "04",
    title: "Smart Learning Academic Process",
    desc: "Well-defined academic process and digital learning tools that empower students with conceptual clarity and smart learning habits.",
  },
  {
    num: "05",
    title: "Competency-Based Industrial Projects",
    desc: "Students actively participate in real-world research projects, Industrial Hackathons, and national project competitions.",
  },
  {
    num: "06",
    title: "Professional Societies & Clubs",
    desc: "Vibrant professional societies, student chapters, and technical clubs driving innovative, peer-to-peer learning.",
  },
  {
    num: "07",
    title: "Cultural Student Exchange Program",
    desc: "International & domestic Student Exchange Programs promoting cultural exchange, diversity, and global technical perspectives.",
  },
  {
    num: "08",
    title: "Industry Expectations Alignment",
    desc: "Internships, Industrial Visits, Guest Lectures, and Seminars/Webinars delivered by active industry leaders.",
  },
  {
    num: "09",
    title: "Foreign Language Learning Facility",
    desc: "Specialized language communication facilities enabling fluency in English, German, and Japanese for international careers.",
  },
  {
    num: "10",
    title: "Value-Added Industry Courses",
    desc: "Comprehensive Value-Added Courses & Technology Certifications designed to bridge academic curriculum with corporate demands.",
  },
  {
    num: "11",
    title: "Outstanding Placement Track Record",
    desc: "Consistent high-volume placement record with premier multinational software, core engineering, and consulting firms.",
  },
  {
    num: "12",
    title: "Higher Education & Entrepreneurship",
    desc: "Personalized mentorship and incubation support for students pursuing higher studies abroad or founding tech startups.",
  },
];

export function InstitutionOverviewPage() {
  return (
    <main className="bg-page-bg text-foreground min-h-screen pt-0 md:pt-1">
      {/* Secondary Sticky Sub-Nav Header */}
      <AboutSubNav />

      {/* SFCM Full-Bleed Hero Showcase Section */}
      <section className="relative border-b border-border bg-gradient-to-b from-primary/10 via-background to-page-bg pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="flex flex-col gap-5 max-w-4xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-foreground/10 border border-foreground/20 text-foreground text-xs font-mono font-bold uppercase rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs w-max">
              About MSAJCE // Institution Overview
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-foreground font-oswald leading-none">
              Mohamed Sathak A.J. <br />
              <span className="text-primary">College of Engineering</span>
            </h1>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-libre mt-2">
              The Mohamed Sathak A.J. College of Engineering (MSAJCE), established on <strong>5th July 2001</strong> under the aegis of Mohamed Sathak Trust, is approved by AICTE New Delhi, affiliated to Anna University Chennai and Government of Tamil Nadu. MSAJCE strives to continuously upgrade its facilities to provide quality technical education to meet industrial and societal needs by providing skill-based training with state-of-the-art facilities.
            </p>
          </div>

          {/* High-Impact Stat Highlights Row */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8">
            {overviewStats.map((stat, idx) => (
              <div key={stat.label} className={`flex flex-col ${idx > 0 ? "md:border-l md:border-border md:pl-8" : ""}`}>
                <span className="text-2xl md:text-4xl font-black font-oswald tracking-tight text-primary">
                  {stat.value}
                </span>
                <span className="text-xs font-bold font-oswald uppercase text-foreground mt-2">
                  {stat.label}
                </span>
                <span className="text-[11px] font-libre text-muted-foreground mt-0.5">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Overview Narrative & 70-Acre Campus Showcase */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6 font-libre">
            <Reveal variant="slide-right">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                // Campus Snapshot & Ecosystem
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground font-oswald mt-2">
                Sprawling 70-Acre Campus in Siruseri IT Park
              </h2>
            </Reveal>

            <Reveal variant="slide-right" delay={0.1}>
              <div className="pl-6 border-l-4 border-primary my-2 bg-primary/5 py-4 pr-4 rounded-r-md">
                <p className="text-base sm:text-lg font-semibold leading-relaxed text-foreground font-libre">
                  The college campus, sprawling over 70 acres of greenery located inside the SIPCOT IT Park, Siruseri, is surrounded by multinational IT companies such as TCS, CTS, Intellect, Aspire, Steria, Polaris, FSS, etc.
                </p>
              </div>
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
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-xs font-oswald font-bold uppercase tracking-widest rounded-sm hover:bg-primary/90 transition-colors shadow-xs"
              >
                Vision & Mission <ArrowRight size={14} />
              </Link>
              <Link
                to="/about/governing-council"
                className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-6 py-3 text-xs font-oswald font-bold uppercase tracking-widest rounded-sm hover:bg-muted transition-colors"
              >
                Governing Council &raquo;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal variant="scale" className="relative rounded-lg overflow-hidden border border-border bg-muted shadow-xs aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop"
                alt="MSAJCE 70-Acre Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                  Campus Ecosystem
                </span>
                <span className="text-white text-base font-bold font-oswald tracking-tight mt-1">
                  70 Acres of Greenery inside SIPCOT IT Park Siruseri, OMR Chennai
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Infrastructure Facilities List */}
      <section className="border-y border-border py-12 md:py-20 bg-muted/20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-2">
              Infrastructure & Facilities
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground font-oswald">
              State-of-the-Art Institutional Facilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructureItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 border border-border rounded-lg bg-card hover:border-primary/50 transition-colors flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-sm bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-oswald font-bold uppercase text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm font-libre text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Join MSAJCE ? — SFCM 12 Pillars List */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-2">
            Key Advantages // Why Join MSAJCE ?
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground font-oswald">
            12 Pillars of Student Transformation
          </h2>
          <p className="text-base font-libre text-muted-foreground mt-3">
            Explore the key reasons why Mohamed Sathak A.J. College of Engineering is the preferred destination for ambitious engineering aspirants.
          </p>
        </div>

        <Stagger gap={0.04} className="flex flex-col divide-y divide-border border-y border-border bg-card rounded-lg overflow-hidden border">
          {whyJoinPoints.map((point) => (
            <StaggerItem
              key={point.num}
              variant="rise"
              className="py-6 px-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-foreground/[0.02] transition-colors"
            >
              <div className="md:col-span-1">
                <span className="text-xs font-mono font-black text-primary tracking-widest uppercase">
                  {point.num}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-lg font-oswald font-bold uppercase text-foreground leading-snug">
                  {point.title}
                </h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-sm font-libre text-muted-foreground leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Navigation Footer */}
      <section className="border-t border-border bg-page-bg py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-libre font-semibold text-muted-foreground">
            Explore Vision & Mission, Leadership, and Trust History
          </span>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/about/vision-mission"
              className="px-4 py-2 text-xs font-oswald font-bold uppercase tracking-wider border border-border rounded-sm hover:bg-muted transition-colors"
            >
              Vision & Mission &raquo;
            </Link>
            <Link
              to="/about/leadership"
              className="px-4 py-2 text-xs font-oswald font-bold uppercase tracking-wider border border-border rounded-sm hover:bg-muted transition-colors"
            >
              Leadership Messages &raquo;
            </Link>
            <Link
              to="/about/trust"
              className="px-4 py-2 text-xs font-oswald font-bold uppercase tracking-wider border border-border rounded-sm hover:bg-muted transition-colors"
            >
              The Trust &raquo;
            </Link>
            <Link
              to="/about/governing-council"
              className="px-4 py-2 text-xs font-oswald font-bold uppercase tracking-wider border border-border rounded-sm hover:bg-muted transition-colors"
            >
              Governing Council &raquo;
            </Link>
            <Link
              to="/about/group-institutions"
              className="px-4 py-2 text-xs font-oswald font-bold uppercase tracking-wider border border-border rounded-sm hover:bg-muted transition-colors"
            >
              Group of Institutions &raquo;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
