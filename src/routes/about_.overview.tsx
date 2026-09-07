import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import {
  ArrowRight,
  MapPin,
  Building2,
  Wifi,
  Library,
  Bus,
  Cpu,
  CheckCircle2,
  Sparkles,
  Zap,
  Globe,
  Award,
  BookOpen,
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
  { label: "Est. Date", value: "05 JULY 2001", sub: "Mohamed Sathak Trust" },
  { label: "Campus Size", value: "70 ACRES", sub: "Siruseri SIPCOT IT Park" },
  { label: "Location", value: "OMR CHENNAI", sub: "IT Corridor Hub" },
  { label: "Approvals", value: "AICTE & ANNA UNIV", sub: "Govt of Tamil Nadu" },
];

const infrastructureItems = [
  {
    icon: MapPin,
    title: "70-Acre Green Campus",
    desc: "Sprawling, lush green campus located in Siruseri SIPCOT IT Park along Chennai's premier IT Corridor.",
    tag: "Environment",
  },
  {
    icon: Building2,
    title: "100+ IT MNC Ecosystem",
    desc: "Directly surrounded by tech giants like TCS, CTS, Intellect, Aspire, Steria, Polaris, FSS, Infosys, and HCL.",
    tag: "Industry Hub",
  },
  {
    icon: Cpu,
    title: "Advanced Engineering Labs",
    desc: "State-of-the-art laboratories, workshops, drawing halls, and industry-partnered technology centers.",
    tag: "R&D Labs",
  },
  {
    icon: Wifi,
    title: "Smart Wi-Fi Infrastructure",
    desc: "Spacious smart classrooms, seminar halls, auditorium, and high-speed campus-wide Wi-Fi connectivity.",
    tag: "Smart Campus",
  },
  {
    icon: Library,
    title: "Central Digital Library",
    desc: "Comprehensive physical & digital library, research archives, and national/international e-journal subscriptions.",
    tag: "Knowledge Base",
  },
  {
    icon: Bus,
    title: "Seamless Transport Hub",
    desc: "Well connected by Road, Rail, and Air from all major parts of Chennai, Tamil Nadu, and across India.",
    tag: "Connectivity",
  },
];

const whyJoinPoints = [
  {
    num: "01",
    title: "Lush Environment at Siruseri IT Park",
    desc: "Located in a green, lush 70-acre environment inside Siruseri IT Park surrounded by 100+ leading IT industries like TCS, CTS, Infosys, Intellect, FSS, HCL, etc.",
    badge: "Prime Location",
  },
  {
    num: "02",
    title: "Industry Collaborative Technology Centers",
    desc: "State-of-the-art facilities equipped with dedicated industry collaborative technology centers and AICTE IDEA Labs.",
    badge: "AICTE IDEA Lab",
  },
  {
    num: "03",
    title: "Qualified & Dedicated Faculty Team",
    desc: "Supported by a team of highly qualified, experienced, and dedicated faculty members fostering personalized mentorship.",
    badge: "Expert Mentors",
  },
  {
    num: "04",
    title: "Smart Learning Academic Process",
    desc: "Well-defined academic processes and digital tools that empower students with conceptual clarity and smart learning habits.",
    badge: "Smart Pedagogy",
  },
  {
    num: "05",
    title: "Competency-Based Industrial Projects",
    desc: "Students actively participate in real-world research projects, Industrial Hackathons, and national project competitions.",
    badge: "Hackathons",
  },
  {
    num: "06",
    title: "Professional Societies & Club Activities",
    desc: "Vibrant professional societies, student chapters, and technical clubs enabling innovative, peer-to-peer learning.",
    badge: "Student Clubs",
  },
  {
    num: "07",
    title: "Cultural Student Exchange Program",
    desc: "International & domestic Student Exchange Programs promoting cultural learning, diversity, and global technical perspectives.",
    badge: "Global Exposure",
  },
  {
    num: "08",
    title: "Industry Expectations Alignment",
    desc: "Internships, Industrial Visits, Guest Lectures, and Seminars/Webinars delivered by active industry leaders.",
    badge: "Internships",
  },
  {
    num: "09",
    title: "Foreign Language Learning Facility",
    desc: "Specialized language communication facilities enabling fluency in English, German, and Japanese for global career readiness.",
    badge: "German & Japanese",
  },
  {
    num: "10",
    title: "Value-Added Industry Courses",
    desc: "Comprehensive Value-Added Courses & Technology Certifications designed to bridge academic curriculum with corporate demands.",
    badge: "Certifications",
  },
  {
    num: "11",
    title: "Outstanding Placement Track Record",
    desc: "Consistent high-volume placement record with premier multinational software, core engineering, and consulting firms.",
    badge: "Top Placements",
  },
  {
    num: "12",
    title: "Higher Education & Entrepreneurship",
    desc: "Personalized mentorship and incubation support for students pursuing higher studies abroad or founding tech startups.",
    badge: "Startup Incubation",
  },
];

export function InstitutionOverviewPage() {
  return (
    <main className="bg-page-bg text-foreground min-h-screen pt-0 md:pt-1 font-sans">
      {/* SECTION 1: Asymmetric Hero Banner */}
      <section className="relative border-b border-border pt-4 md:pt-6 pb-12 md:pb-16 bg-page-bg">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          {/* Secondary Sub-Nav Header */}
          <div className="mb-4">
            <span className="text-sm sm:text-base md:text-lg xl:text-xl font-black font-oswald uppercase text-primary tracking-wider">
              ABOUT MSAJCE // INSTITUTION OVERVIEW
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground font-oswald leading-none">
                Mohamed Sathak A.J. <br />
                <span className="text-primary font-oswald">College of Engineering</span>
              </h1>

              <div className="p-4 bg-card border-l-4 border-primary rounded-r-sm my-2">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground font-sans font-normal">
                  Established on <strong>5th July 2001</strong> under the aegis of Mohamed Sathak Trust, MSAJCE is approved by AICTE New Delhi, affiliated to Anna University Chennai, and recognized by the Government of Tamil Nadu.
                </p>
              </div>

              <p className="text-base leading-relaxed text-muted-foreground font-sans">
                MSAJCE strives to continuously upgrade its facilities to provide quality technical education to meet industrial and societal needs by providing skill-based training with state-of-the-art infrastructure and strong industry partnerships.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/about/vision-mission"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-primary/90 transition-colors font-oswald"
                >
                  Vision & Mission <ArrowRight size={14} />
                </Link>
                <Link
                  to="/about/leadership"
                  className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-muted transition-colors font-oswald"
                >
                  Leadership Messages
                </Link>
              </div>
            </div>

            {/* Right Asymmetric Blueprint Card */}
            <div className="lg:col-span-4 bg-card border border-border p-6 rounded-sm shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-3">
                  Quick Institutional Blueprint
                </span>
                <div className="space-y-4 divide-y divide-border">
                  {overviewStats.map((st) => (
                    <div key={st.label} className="pt-3 first:pt-0">
                      <span className="text-xs font-mono text-muted-foreground uppercase block">{st.label}</span>
                      <span className="text-xl font-black text-primary font-oswald block mt-0.5">{st.value}</span>
                      <span className="text-[11px] text-foreground font-medium block">{st.sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 70-Acre Ecosystem Narrative */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <Reveal variant="scale" className="relative rounded-sm overflow-hidden border border-border bg-card shadow-sm aspect-[4/3]">
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

          <div className="lg:col-span-6 flex flex-col gap-5">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              // Campus Environment & Location Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground font-oswald">
              Inside SIPCOT IT Park Surrounded by 100+ IT MNCs
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground font-sans">
              The college campus, sprawling over 70 acres of lush greenery located inside the SIPCOT IT Park, Siruseri, is surrounded by multinational IT giants such as TCS, CTS, Intellect, Aspire, Steria, Polaris, FSS, Infosys, and HCL.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground font-sans">
              MSAJCE boasts exceptional infrastructure facilities including spacious smart classrooms, drawing halls, advanced laboratories, seminar halls, computer facilities with Wi-Fi connectivity, central library, workshops, auditorium, and extensive sports grounds.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold uppercase rounded-xs">
                TCS & CTS Adjacent
              </span>
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold uppercase rounded-xs">
                AICTE IDEA Lab
              </span>
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold uppercase rounded-xs">
                Wi-Fi Smart Campus
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 6-Tile Infrastructure Grid */}
      <section className="border-y border-border py-12 md:py-20 bg-page-bg">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
              Infrastructure Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground font-oswald">
              State-of-the-Art Institutional Facilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructureItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-card border border-border p-6 rounded-sm shadow-xs flex flex-col justify-between hover:border-primary/50 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-sm bg-primary/10 text-primary flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-muted text-muted-foreground border border-border rounded-xs">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground font-oswald uppercase mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: 12 Pillars of Student Transformation Grid */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-20">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            Core Educational Value
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground font-oswald">
            Why Join MSAJCE ?
          </h2>
          <p className="text-base text-muted-foreground font-sans mt-2">
            12 core pillars of excellence that transform ambitious engineering aspirants into globally competitive technocrats.
          </p>
        </div>

        {/* 2-Column Asymmetric Tile Grid */}
        <Stagger gap={0.04} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyJoinPoints.map((point) => (
            <StaggerItem
              key={point.num}
              variant="rise"
              className="bg-card border border-border p-6 rounded-sm shadow-xs hover:border-primary/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-mono font-black text-primary tracking-widest uppercase">
                    PILLAR #{point.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-xs">
                    {point.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground font-oswald uppercase mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Navigation Footer */}
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
