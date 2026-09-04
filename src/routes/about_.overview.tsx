import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import {
  ArrowRight,
  MapPin,
  Building2,
  Users,
  Wifi,
  Library,
  Bus,
  Cpu,
  CheckCircle2,
  Sparkles,
  Compass,
} from "lucide-react";

const title = "Institution Overview — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official overview of Mohamed Sathak A.J. College of Engineering (MSAJCE), established 5th July 2001, AICTE approved, Anna University affiliated, 70-acre Siruseri IT Park campus.";

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
  { label: "Campus Size", value: "70 Acres", sub: "Green Campus in Siruseri IT Park" },
  { label: "Location", value: "SIPCOT IT Park", sub: "Siruseri, OMR Chennai" },
  { label: "Approvals", value: "AICTE & Anna Univ", sub: "Govt of Tamil Nadu Recognized" },
];

const infrastructureItems = [
  {
    icon: MapPin,
    title: "70-Acre Green Campus",
    desc: "Sprawling, lush green campus located in Siruseri SIPCOT IT Park along Chennai's premier IT Corridor.",
  },
  {
    icon: Building2,
    title: "100+ IT MNC Surroundings",
    desc: "Directly surrounded by top tech giants like TCS, CTS, Intellect, Aspire, Steria, Polaris, FSS, Infosys, and HCL.",
  },
  {
    icon: Cpu,
    title: "State-of-the-Art Labs & Workshops",
    desc: "Advanced engineering laboratories, workshops, drawing halls, and industry-partnered technology centers.",
  },
  {
    icon: Wifi,
    title: "Smart Wi-Fi Campus",
    desc: "Spacious smart classrooms, seminar halls, auditorium, and high-speed campus-wide Wi-Fi connectivity.",
  },
  {
    icon: Library,
    title: "Central Library & Digital Archives",
    desc: "Comprehensive physical & digital library, research archives, and national/international e-journal subscriptions.",
  },
  {
    icon: Bus,
    title: "Seamless Transport Connectivity",
    desc: "Well connected by Road, Rail, and Air to all major parts of Chennai, Tamil Nadu, and across India.",
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
    desc: "Supported by a team of highly qualified, experienced, and dedicated faculty members fostering personalized mentorship.",
  },
  {
    num: "04",
    title: "Smart Learning Academic Process",
    desc: "Well-defined academic processes and digital tools that empower students with conceptual clarity and smart learning habits.",
  },
  {
    num: "05",
    title: "Competency-Based Industrial Projects",
    desc: "Students actively participate in real-world research projects, Industrial Hackathons, and national project competitions.",
  },
  {
    num: "06",
    title: "Professional Societies & Club Activities",
    desc: "Vibrant professional societies, student chapters, and technical clubs enabling innovative, peer-to-peer learning.",
  },
  {
    num: "07",
    title: "Cultural Student Exchange Program",
    desc: "International & domestic Student Exchange Programs promoting cultural learning, diversity, and global technical perspectives.",
  },
  {
    num: "08",
    title: "Industry Expectations Alignment",
    desc: "Internships, Industrial Visits, Guest Lectures, and Seminars/Webinars delivered by active industry leaders.",
  },
  {
    num: "09",
    title: "Foreign Language Learning Facility",
    desc: "Specialized language communication facilities enabling fluency in English, German, and Japanese for global career readiness.",
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
      {/* Editorial Header & Hero Section */}
      <section className="relative border-b border-border pt-4 md:pt-6 pb-12 md:pb-16 bg-page-bg">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          {/* Secondary Sub-Nav Header Title */}
          <div className="mb-4">
            <span className="text-sm sm:text-base md:text-lg xl:text-xl font-black font-oswald uppercase text-primary tracking-wider">
              ABOUT MSAJCE // INSTITUTION OVERVIEW
            </span>
          </div>

          <div className="flex flex-col gap-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground font-oswald leading-none">
              Mohamed Sathak A.J. <br />
              <span className="text-primary font-oswald">College of Engineering</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground font-sans font-normal mt-2">
              The <strong>Mohamed Sathak A.J. College of Engineering (MSAJCE)</strong>, established on <strong>5th July 2001</strong> under the aegis of Mohamed Sathak Trust, is approved by AICTE New Delhi, affiliated to Anna University Chennai, and recognized by the Government of Tamil Nadu. MSAJCE strives to continuously upgrade its facilities to provide quality technical education to meet industrial and societal needs by providing skill-based training with state-of-the-art infrastructure.
            </p>
          </div>

          {/* Key Stats Row */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-8">
            {overviewStats.map((stat, idx) => (
              <div key={stat.label} className={`flex flex-col ${idx > 0 ? "md:border-l md:border-border md:pl-6" : ""}`}>
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary font-oswald">
                  {stat.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-foreground font-sans mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-muted-foreground font-sans mt-0.5">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Narrative & 70-Acre Campus Section */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Reveal variant="slide-right">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                // Campus Environment & Ecosystem
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground font-oswald mt-1">
                70-Acre Green Campus inside SIPCOT IT Park, Siruseri
              </h2>
            </Reveal>

            <Reveal variant="slide-right" delay={0.1}>
              <div className="pl-5 border-l-4 border-primary my-2">
                <p className="text-base sm:text-lg font-semibold leading-relaxed text-foreground font-sans">
                  The college campus, sprawling over 70 acres of lush greenery located inside the SIPCOT IT Park, Siruseri, is surrounded by multinational IT giants such as TCS, CTS, Intellect, Aspire, Steria, Polaris, FSS, Infosys, and HCL.
                </p>
              </div>
            </Reveal>

            <Reveal variant="slide-right" delay={0.2}>
              <p className="text-base leading-relaxed text-muted-foreground font-sans">
                MSAJCE boasts exceptional infrastructure facilities including spacious smart classrooms, drawing halls, advanced laboratories, seminar halls, computer facilities with campus-wide Wi-Fi connectivity, central library, workshops, auditorium, and extensive sports playgrounds. The campus is seamlessly connected by Road, Rail, and Air from all parts of India.
              </p>
            </Reveal>

            <Reveal variant="slide-right" delay={0.3}>
              <p className="text-base leading-relaxed text-muted-foreground font-sans">
                A team of highly qualified and experienced faculty members supports the teaching-learning process. The institution gives equal emphasis to academic rigor, co-curricular activities, and extracurricular developments, delivering comprehensive training for the overall transformation of students into industry-ready leaders.
              </p>
            </Reveal>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/about/vision-mission"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-primary/90 transition-colors font-oswald"
              >
                Vision & Mission <ArrowRight size={14} />
              </Link>
              <Link
                to="/about/leadership"
                className="inline-flex items-center gap-2 border border-border bg-transparent text-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-muted transition-colors font-oswald"
              >
                Leadership Messages
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal variant="scale" className="relative rounded-lg overflow-hidden border border-border bg-card shadow-sm aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop"
                alt="MSAJCE 70-Acre Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                  Siruseri IT Park, OMR Chennai
                </span>
                <span className="text-white text-base font-bold tracking-tight font-oswald uppercase mt-1">
                  70 Acres Sprawling Educational Campus
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Infrastructure Facilities Grid */}
      <section className="border-y border-border py-12 md:py-20 bg-page-bg">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
              Infrastructure & Facilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground font-oswald">
              State-of-the-Art Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 divide-y md:divide-y-0 divide-border">
            {infrastructureItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="py-6 border-b border-border flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-sm bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground font-oswald uppercase mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12 Pillars of Student Transformation ("Why Join MSAJCE ?") */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-20">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            Key Institutional Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground font-oswald">
            Why Join MSAJCE ?
          </h2>
          <p className="text-base text-muted-foreground font-sans mt-2">
            12 core pillars of excellence that transform ambitious engineering aspirants into globally competitive technocrats.
          </p>
        </div>

        {/* Editorial Bordered List */}
        <Stagger gap={0.04} className="flex flex-col divide-y divide-border border-y border-border">
          {whyJoinPoints.map((point) => (
            <StaggerItem
              key={point.num}
              variant="rise"
              className="py-6 md:py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-foreground/[0.02] transition-colors px-2"
            >
              <div className="md:col-span-1">
                <span className="text-sm font-mono font-black text-primary tracking-widest uppercase">
                  {point.num}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-lg font-bold text-foreground font-oswald uppercase leading-snug">
                  {point.title}
                </h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Quick Navigation Footer */}
      <section className="border-t border-border bg-page-bg py-10">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-semibold text-muted-foreground font-sans">
            Explore Vision & Mission, Leadership Messages, and Group of Institutions
          </span>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/about/vision-mission"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-muted transition-colors font-oswald"
            >
              Vision & Mission &raquo;
            </Link>
            <Link
              to="/about/leadership"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-muted transition-colors font-oswald"
            >
              Leadership Messages &raquo;
            </Link>
            <Link
              to="/about/trust"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-muted transition-colors font-oswald"
            >
              The Trust &raquo;
            </Link>
            <Link
              to="/about/group-institutions"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-muted transition-colors font-oswald"
            >
              Group of Institutions &raquo;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

