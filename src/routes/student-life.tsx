import { useState, useEffect } from "react";
import { createFileRoute, useNavigate, useSearch } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Utensils,
  Trophy,
  Home as HomeIcon,
  Code,
  Palette,
  Music,
  Mic,
  Camera,
  HeartHandshake,
  Cpu,
  GraduationCap,
  Terminal,
  Wrench,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Video,
  Award,
  BookOpen,
  Globe2,
  ExternalLink,
  ShieldCheck
} from "lucide-react";
import { SecondarySubNav, type SubNavTab } from "@/components/layout/SecondarySubNav";
import {
  studentLifeOverview,
  studentHubAmenities,
  studentClubs,
  professionalSocieties,
  tedxData
} from "@/data/studentLife";

const title = "Student Life | Student Hub, Clubs, Societies & TEDx | MSAJCE";
const description =
  "Experience vibrant student life at Mohamed Sathak A.J. College of Engineering. Explore the Student Hub, 24+ active clubs, IEEE/CSI/SAE professional chapters, and our official TEDx chapter.";

export const Route = createFileRoute("/student-life")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      tab: (search['tab'] as string) || "hub",
    };
  },
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
  component: StudentLifePage,
});

const tabs: SubNavTab[] = [
  { id: "hub", label: "Student Hub" },
  { id: "clubs", label: "Clubs & Societies" },
  { id: "professional", label: "Professional Societies" },
  { id: "tedx", label: "Our TEDx Chapter" },
];

function StudentLifePage() {
  const search = useSearch({ from: "/student-life" });
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>(search.tab || "hub");
  const [clubFilter, setClubFilter] = useState<string>("all");

  useEffect(() => {
    if (search.tab && search.tab !== activeTab) {
      setActiveTab(search.tab);
    }
  }, [search.tab]);

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    navigate({ to: "/student-life", search: { tab: tabId } });
  };

  const filteredClubs = clubFilter === "all"
    ? studentClubs
    : studentClubs.filter(c => c.category === clubFilter);

  return (
    <main className="min-h-screen bg-background text-foreground pt-0 md:pt-1">
      {/* Secondary Sticky Sub-Nav Header */}
      <SecondarySubNav
        title="STUDENT LIFE"
        tabs={tabs}
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onTitleClick={() => handleSelectTab("hub")}
      />

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#9E2339] via-[#861E30] to-[#671422] text-white pt-10 pb-16 px-4 sm:px-6 md:px-12 border-b border-primary/20">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-sm text-xs font-bold font-oswald uppercase tracking-wider text-white border border-white/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Empowering Student Excellence
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-oswald uppercase tracking-tight leading-[1.05]">
              {activeTab === "hub" && "Student Hub & Campus Amenities"}
              {activeTab === "clubs" && "Student Clubs & Societies"}
              {activeTab === "professional" && "International Professional Chapters"}
              {activeTab === "tedx" && "TEDxMSAJCE Chapter"}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90 font-sans leading-relaxed">
              {studentLifeOverview.description}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/15">
            {studentLifeOverview.stats.map((st, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-oswald text-white">{st.value}</span>
                <span className="text-xs sm:text-sm font-sans font-semibold text-white/80">{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Tab Content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-10">
        <AnimatePresence mode="wait">
          {/* TAB 1: STUDENT HUB */}
          {activeTab === "hub" && (
            <motion.div
              key="tab-hub"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-foreground/10 pb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black font-oswald uppercase text-foreground">
                    Campus Life Amenities & Student Spaces
                  </h2>
                  <p className="text-sm text-muted-foreground font-sans mt-1">
                    State-of-the-art facilities dedicated to recreation, wellness, dining, and community engagement.
                  </p>
                </div>
              </div>

              {/* Grid of Amenities */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {studentHubAmenities.map((item) => (
                  <div
                    key={item.id}
                    className="group flex flex-col bg-card dark:bg-[#18181B] border border-foreground/10 rounded-sm overflow-hidden shadow-xs hover:border-primary/50 transition-colors"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80";
                        }}
                      />
                      <div className="absolute top-3 left-3 bg-primary text-white text-xs font-black font-oswald uppercase px-2.5 py-1 rounded-sm shadow-md flex items-center gap-1.5">
                        {item.category === "recreation" && <Users className="w-3.5 h-3.5" />}
                        {item.category === "dining" && <Utensils className="w-3.5 h-3.5" />}
                        {item.category === "fitness" && <Trophy className="w-3.5 h-3.5" />}
                        {item.category === "welfare" && <HomeIcon className="w-3.5 h-3.5" />}
                        <span>{item.category}</span>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-black font-oswald uppercase text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm font-sans text-muted-foreground mt-2 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="mt-4 pt-4 border-t border-foreground/10">
                          <h4 className="text-xs font-bold font-oswald uppercase text-primary tracking-wider mb-2">
                            Key Highlights:
                          </h4>
                          <ul className="space-y-1.5">
                            {item.highlights.map((hl, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs font-sans text-foreground/80">
                                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                <span>{hl}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Student Council & Voice Banner */}
              <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-6 sm:p-8 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold font-oswald uppercase text-primary tracking-wider">
                    Student Governance & Leadership
                  </span>
                  <h3 className="text-2xl font-black font-oswald uppercase text-foreground">
                    MSAJCE Student Council
                  </h3>
                  <p className="text-sm font-sans text-muted-foreground max-w-2xl leading-relaxed">
                    The elected Student Council acts as the official bridge between students and executive leadership, ensuring student voices, event proposals, and welfare needs are actively addressed.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleSelectTab("clubs")}
                  className="relative group overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-stone-200 dark:bg-neutral-800 text-foreground dark:text-white border border-stone-300 dark:border-neutral-700 px-6 py-3 font-bold font-oswald text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                    Explore Student Clubs
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                    <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  </span>
                </button>
              </div>
            </motion.div>
          )}

          {/* TAB 2: CLUBS & SOCIETIES */}
          {activeTab === "clubs" && (
            <motion.div
              key="tab-clubs"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-foreground/10 pb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black font-oswald uppercase text-foreground">
                    Student Clubs & Cultural Societies
                  </h2>
                  <p className="text-sm text-muted-foreground font-sans mt-1">
                    Student-led forums driving technical innovation, cultural arts, media production, and social impact.
                  </p>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "all", label: "All Clubs" },
                    { id: "technical", label: "Technical" },
                    { id: "cultural", label: "Cultural & Arts" },
                    { id: "media", label: "Media" },
                    { id: "social", label: "Social Service" },
                  ].map(f => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setClubFilter(f.id)}
                      className={`px-3 py-1.5 text-xs font-bold font-oswald uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                        clubFilter === f.id
                          ? "bg-primary text-primary-foreground shadow-xs"
                          : "bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clubs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredClubs.map((club) => (
                  <div
                    key={club.id}
                    className="group bg-card dark:bg-[#18181B] border border-foreground/10 rounded-sm p-6 flex flex-col justify-between hover:border-primary/50 transition-colors shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-bold font-oswald uppercase text-primary px-2 py-0.5 bg-primary/10 border border-primary/20 rounded-xs">
                          {club.badge || club.category}
                        </span>
                        <span className="text-xs font-sans text-muted-foreground font-semibold">
                          {club.membersCount}
                        </span>
                      </div>

                      <h3 className="text-xl font-black font-oswald uppercase text-foreground group-hover:text-primary transition-colors">
                        {club.name}
                      </h3>
                      <p className="text-xs font-bold font-oswald uppercase text-primary/90 mt-1">
                        "{club.tagline}"
                      </p>
                      <p className="text-sm font-sans text-muted-foreground mt-3 leading-relaxed">
                        {club.description}
                      </p>

                      <div className="mt-4 pt-4 border-t border-foreground/10">
                        <h4 className="text-xs font-bold font-oswald uppercase text-foreground tracking-wider mb-2">
                          Key Initiatives:
                        </h4>
                        <ul className="space-y-1.5">
                          {club.activities.map((act, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs font-sans text-foreground/80">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Flagship Annual Festivals Showcase */}
              <div className="mt-12 bg-card dark:bg-[#18181B] border border-foreground/10 rounded-sm p-6 sm:p-8">
                <h3 className="text-2xl font-black font-oswald uppercase text-primary mb-2">
                  Annual Flagship Festivals
                </h3>
                <p className="text-sm text-muted-foreground font-sans mb-6">
                  Major state-level annual college conventions hosted on MSAJCE campus.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 border border-foreground/10 rounded-sm bg-background">
                    <span className="text-xs font-black font-oswald uppercase text-primary">Annual Cultural Fest</span>
                    <h4 className="text-lg font-black font-oswald uppercase text-foreground mt-1">TAKSHASHILA</h4>
                    <p className="text-xs text-muted-foreground font-sans mt-2">
                      3-day inter-collegiate cultural extravaganza featuring music battles, dance troupes, drama, and celebrity star nights.
                    </p>
                  </div>
                  <div className="p-4 border border-foreground/10 rounded-sm bg-background">
                    <span className="text-xs font-black font-oswald uppercase text-primary">Technical Symposium</span>
                    <h4 className="text-lg font-black font-oswald uppercase text-foreground mt-1">INNOVIX</h4>
                    <p className="text-xs text-muted-foreground font-sans mt-2">
                      National level technical symposium with paper presentations, hackathons, robotics racing, and CAD modeling contests.
                    </p>
                  </div>
                  <div className="p-4 border border-foreground/10 rounded-sm bg-background">
                    <span className="text-xs font-black font-oswald uppercase text-primary">Sports Championship</span>
                    <h4 className="text-lg font-black font-oswald uppercase text-foreground mt-1">SPORTS FIESTA</h4>
                    <p className="text-xs text-muted-foreground font-sans mt-2">
                      Annual athletic meet and inter-department sports tournament spanning cricket, football, basketball, and athletics.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: PROFESSIONAL SOCIETIES */}
          {activeTab === "professional" && (
            <motion.div
              key="tab-professional"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="border-b border-foreground/10 pb-4">
                <h2 className="text-2xl sm:text-3xl font-black font-oswald uppercase text-foreground">
                  International & National Professional Body Chapters
                </h2>
                <p className="text-sm text-muted-foreground font-sans mt-1">
                  Connecting MSAJCE engineering students directly with global industry standards, research networks, and professional credentials.
                </p>
              </div>

              {/* Professional Chapters Grid */}
              <div className="space-y-8">
                {professionalSocieties.map((soc) => (
                  <div
                    key={soc.id}
                    className="bg-card dark:bg-[#18181B] border border-foreground/10 rounded-sm p-6 sm:p-8 shadow-xs hover:border-primary/50 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-foreground/10 pb-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center text-primary shrink-0">
                          {soc.id === "ieee" && <Cpu className="w-6 h-6" />}
                          {soc.id === "iste" && <GraduationCap className="w-6 h-6" />}
                          {soc.id === "csi" && <Terminal className="w-6 h-6" />}
                          {soc.id === "sae" && <Wrench className="w-6 h-6" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-2xl font-black font-oswald uppercase text-foreground">
                              {soc.name}
                            </h3>
                            <span className="text-xs font-bold font-oswald text-primary bg-primary/10 px-2 py-0.5 rounded-xs">
                              {soc.code}
                            </span>
                          </div>
                          <p className="text-xs font-sans text-muted-foreground mt-0.5">{soc.studentChairs}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm font-sans text-foreground/90 leading-relaxed mb-6">
                      {soc.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      <div className="bg-background/80 p-4 border border-foreground/10 rounded-sm">
                        <h4 className="text-xs font-bold font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          Core Objectives:
                        </h4>
                        <ul className="space-y-2">
                          {soc.objectives.map((obj, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs font-sans text-foreground/80">
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                              <span>{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-background/80 p-4 border border-foreground/10 rounded-sm">
                        <h4 className="text-xs font-bold font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5" />
                          Membership & Student Benefits:
                        </h4>
                        <ul className="space-y-2">
                          {soc.membershipBenefits.map((ben, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs font-sans text-foreground/80">
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span>{ben}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 4: OUR TEDX CHAPTER */}
          {activeTab === "tedx" && (
            <motion.div
              key="tab-tedx"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Header Box */}
              <div className="bg-card dark:bg-[#18181B] border border-foreground/10 rounded-sm p-6 sm:p-8 relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E62B1E]/10 border border-[#E62B1E]/30 rounded-xs text-xs font-black font-oswald uppercase text-[#E62B1E] mb-3">
                      <span>TEDx Licensee Chapter</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black font-oswald uppercase text-foreground tracking-tight">
                      TEDxMSAJCE
                    </h2>
                    <p className="text-lg font-bold font-oswald text-primary uppercase mt-1">
                      "{tedxData.theme}"
                    </p>
                    <p className="text-sm font-sans text-muted-foreground mt-3 max-w-3xl leading-relaxed">
                      {tedxData.description}
                    </p>
                  </div>
                </div>

                {/* TEDx Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-foreground/10">
                  {tedxData.stats.map((st, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-2xl font-black font-oswald text-primary">{st.value}</span>
                      <span className="text-xs font-sans text-muted-foreground font-semibold">{st.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Speakers Section */}
              <div>
                <h3 className="text-2xl font-black font-oswald uppercase text-foreground mb-6 flex items-center gap-2">
                  <Video className="w-5 h-5 text-primary" />
                  Featured TEDx Speakers & Talks
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tedxData.speakers.map((spk) => (
                    <div
                      key={spk.id}
                      className="group bg-card dark:bg-[#18181B] border border-foreground/10 rounded-sm overflow-hidden flex flex-col sm:flex-row hover:border-primary/50 transition-colors shadow-xs"
                    >
                      <div className="sm:w-2/5 relative aspect-[4/3] sm:aspect-auto overflow-hidden bg-muted">
                        <img
                          src={spk.image}
                          alt={spk.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        {spk.videoDuration && (
                          <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold font-oswald uppercase px-2 py-0.5 rounded-xs">
                            {spk.videoDuration}
                          </span>
                        )}
                      </div>
                      <div className="sm:w-3/5 p-5 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-bold font-oswald uppercase text-primary tracking-wider">
                            TEDx Talk
                          </span>
                          <h4 className="text-lg font-black font-oswald uppercase text-foreground leading-snug group-hover:text-primary transition-colors">
                            "{spk.talkTitle}"
                          </h4>
                          <h5 className="text-xs font-bold font-sans text-foreground mt-2">
                            {spk.name}
                          </h5>
                          <p className="text-[11px] font-sans text-muted-foreground">
                            {spk.designation}
                          </p>
                          <p className="text-xs font-sans text-foreground/80 mt-3 leading-relaxed">
                            {spk.summary}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TED Integrity Statement & Call to Action */}
              <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h4 className="text-sm font-bold font-oswald uppercase text-foreground tracking-wider">
                    TEDx Community Guidelines
                  </h4>
                  <ul className="mt-2 space-y-1 text-xs text-muted-foreground font-sans">
                    {tedxData.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
