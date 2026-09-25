import { useMemo } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Cpu,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Target,
  Activity,
  Award,
  BookOpen,
  Users,
  Calendar,
  ArrowRight,
  ArrowLeft,
  Building2,
  ExternalLink,
  Phone,
  Mail,
  FileText,
  Trophy,
  Globe,
  MapPin,
} from "lucide-react";
import { SecondarySubNav, type SubNavTab } from "@/components/layout/SecondarySubNav";
import { professionalSocieties, type ProfessionalSociety } from "@/data/studentLife";

const title = "Professional Societies | Student Life | MSAJCE";
const description =
  "Explore CSI, IETE, SAE, and ISHRAE professional body chapters at Mohamed Sathak A.J. College of Engineering. Industry standards, research papers, hackathons, and certifications.";

const societyNavTabs: SubNavTab[] = [
  { id: "csi", label: "CSI" },
  { id: "iete", label: "IETE" },
  { id: "sae", label: "SAE" },
  { id: "ishrae", label: "ISHRAE" },
];

export const Route = createFileRoute("/student-life_/professional-societies")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      society: typeof search.society === "string" ? search.society : "csi",
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
  component: ProfessionalSocietiesPage,
});

function ProfessionalSocietiesPage() {
  const navigate = useNavigate();
  const search = Route.useSearch();

  // Validate active society from URL query or default to csi
  const activeSocietyId = useMemo(() => {
    const valid = societyNavTabs.some((t) => t.id === search.society);
    return valid ? search.society : "csi";
  }, [search.society]);

  const activeIndex = useMemo(() => {
    const idx = professionalSocieties.findIndex((s) => s.id === activeSocietyId);
    return idx >= 0 ? idx : 0;
  }, [activeSocietyId]);

  const activeSociety: ProfessionalSociety = professionalSocieties[activeIndex] || professionalSocieties[0];

  const prevSociety = professionalSocieties[(activeIndex - 1 + professionalSocieties.length) % professionalSocieties.length];
  const nextSociety = professionalSocieties[(activeIndex + 1) % professionalSocieties.length];

  const handleSelectSociety = (societyId: string) => {
    navigate({
      search: { society: societyId },
      replace: true,
    });

    const el = document.getElementById("society-focus-container");
    if (el) {
      const headerOffset = typeof window !== "undefined" && window.innerWidth < 768 ? 115 : 125;
      const elementTop = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      if (window.pageYOffset > elementTop + 80) {
        window.scrollTo({
          top: Math.max(0, elementTop),
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground pt-0 md:pt-1">
      {/* SECONDARY SUB-NAV HEADER (4 Official Professional Chapters) */}
      <SecondarySubNav
        title="PROFESSIONAL SOCIETIES"
        tabs={societyNavTabs}
        activeTab={activeSocietyId}
        onSelectTab={handleSelectSociety}
        onTitleClick={() => handleSelectSociety("csi")}
      />

      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Vision & Mission Style Minimal Flush Docked Title         */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80"
            alt="Professional Societies and Technical Chapters at Mohamed Sathak A.J. College of Engineering"
            className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/why-join/industry.jpg";
            }}
          />
          {/* Subtle gradient overlay for depth and title legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        {/* Title Container: Docked Flush at Bottom of Hero */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-0">
          <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
              Professional Societies
            </h1>
          </div>
        </div>
      </section>

      {/* SECTION A: FOCUSED MINIMAL ACTIVE SOCIETY PROFILE */}
      <section id="society-focus-container" className="bg-white dark:bg-[#121214] py-8 sm:py-12 transition-colors">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12">
          
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeSociety.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {/* Society Identity Header */}
              <div className="border-b border-border/60 pb-6">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-oswald uppercase text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                      {activeSociety.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-foreground bg-foreground/10 px-2 py-0.5 rounded-xs">
                      {activeSociety.code}
                    </span>
                    <span className="text-xs font-bold font-oswald text-muted-foreground uppercase">
                      {activeSociety.membersCount}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-muted-foreground">
                    Chapter {String(activeIndex + 1).padStart(2, "0")} of 04
                  </span>
                </div>

                <div className="flex items-center gap-3 mt-1">
                  <div className="w-10 h-10 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    {activeSociety.id === "csi" && <Terminal className="w-5 h-5" />}
                    {activeSociety.id === "iete" && <Cpu className="w-5 h-5" />}
                    {activeSociety.id === "sae" && <Wrench className="w-5 h-5" />}
                    {activeSociety.id === "ishrae" && <Building2 className="w-5 h-5" />}
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-oswald uppercase tracking-tight text-foreground">
                    {activeSociety.name}
                  </h2>
                </div>

                <p className="text-sm sm:text-base font-bold font-oswald text-primary uppercase tracking-wide mt-2">
                  "{activeSociety.tagline}"
                </p>

                {/* CSI Special History & Vision Highlights */}
                {activeSociety.id === "csi" && activeSociety.history && (
                  <div className="mt-4 space-y-3">
                    <div className="p-4 border-l-2 border-primary bg-primary/[0.03] dark:bg-primary/[0.06] rounded-r-xs">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <span className="text-xs font-black font-oswald uppercase text-primary tracking-wider flex items-center gap-1">
                          <Globe className="w-3.5 h-3.5" />
                          The CSI Vision: "{activeSociety.visionMotto}"
                        </span>
                        {activeSociety.region && (
                          <span className="text-xs font-sans text-muted-foreground">
                            · {activeSociety.region}
                          </span>
                        )}
                        {activeSociety.chapter && (
                          <span className="text-xs font-bold font-oswald uppercase text-foreground bg-foreground/10 px-2 py-0.5 rounded-xs flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-primary" />
                            {activeSociety.chapter}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm font-sans text-foreground/80 leading-relaxed mt-2">
                        {activeSociety.history}
                      </p>
                    </div>

                    {/* Institutional Awards Badges */}
                    {activeSociety.awards && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                        {activeSociety.awards.map((award, idx) => (
                          <div
                            key={idx}
                            className="p-3 border border-primary/20 bg-primary/5 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs flex items-start gap-2.5 text-xs font-sans text-foreground/90 font-medium"
                          >
                            <Trophy className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                            <span>{award}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* IETE Special Publications & Establishment Highlights */}
                {activeSociety.id === "iete" && activeSociety.ietePublications && (
                  <div className="mt-4 space-y-3">
                    <div className="p-4 border-l-2 border-primary bg-primary/[0.03] dark:bg-primary/[0.06] rounded-r-xs">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-black font-oswald uppercase text-primary tracking-wider flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          Official IETE Publications &amp; Journals
                        </span>
                        {activeSociety.establishedDate && (
                          <span className="text-xs font-mono text-muted-foreground">
                            · Established: {activeSociety.establishedDate}
                          </span>
                        )}
                        <span className="text-xs font-bold font-oswald uppercase text-foreground bg-foreground/10 px-2 py-0.5 rounded-xs">
                          {activeSociety.membersCount}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {activeSociety.ietePublications.map((pub, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-background border border-primary/20 text-xs font-oswald uppercase text-foreground font-bold rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs flex items-center gap-1.5 shadow-2xs"
                          >
                            <span className="text-primary font-mono text-[11px] font-bold">{idx + 1}.</span>
                            {pub}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* SAE Special Milestones & National Competitions Highlights */}
                {activeSociety.id === "sae" && (
                  <div className="mt-4 space-y-3">
                    {/* College Milestones */}
                    {activeSociety.saeMilestones && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeSociety.saeMilestones.map((milestone, idx) => (
                          <div
                            key={idx}
                            className="p-3 border border-primary/20 bg-primary/5 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs flex items-start gap-2.5 text-xs font-sans text-foreground/90 font-medium"
                          >
                            <Trophy className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                            <span>{milestone}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Regional Section & Student Competitions */}
                    {activeSociety.saeCompetitions && (
                      <div className="p-4 border-l-2 border-primary bg-primary/[0.03] dark:bg-primary/[0.06] rounded-r-xs space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-black font-oswald uppercase text-primary tracking-wider flex items-center gap-1.5">
                            <Wrench className="w-3.5 h-3.5" />
                            SAE India Student Events &amp; Design Competitions
                          </span>
                          {activeSociety.region && (
                            <span className="text-xs font-sans text-muted-foreground">
                              · {activeSociety.region}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {activeSociety.saeCompetitions.map((comp, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 bg-background border border-border/80 text-[11px] font-oswald uppercase text-foreground font-semibold rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs"
                            >
                              {comp}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ISHRAE Special Government Linkages & Technical Domains Highlight */}
                {activeSociety.id === "ishrae" && (
                  <div className="mt-4 space-y-3">
                    <div className="p-4 border-l-2 border-primary bg-primary/[0.03] dark:bg-primary/[0.06] rounded-r-xs space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-black font-oswald uppercase text-primary tracking-wider flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5" />
                          National Repository &amp; Standards Developing Body
                        </span>
                        {activeSociety.establishedDate && (
                          <span className="text-xs font-mono text-muted-foreground">
                            · {activeSociety.establishedDate}
                          </span>
                        )}
                        {activeSociety.region && (
                          <span className="text-xs font-bold font-oswald uppercase text-foreground bg-foreground/10 px-2 py-0.5 rounded-xs">
                            {activeSociety.region}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {[
                          "National Building Code (BIS)",
                          "Energy Conservation Code (BEE)",
                          "Ozone Cell (MoEFCC)",
                          "Cold Chain Development (NCCD)",
                          "Sustainability & Green Buildings",
                          "Indoor Air Quality (IAQ)",
                          "Fire & Safety Standards",
                        ].map((domain, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-background border border-border/80 text-[11px] font-oswald uppercase text-foreground font-semibold rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs"
                          >
                            {domain}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Clean 2-Column Minimal Editorial Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-2">
                
                {/* Left Column: About & Core Objectives & Flagship Events */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h3 className="text-xs font-bold font-oswald uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5" />
                      About The Professional Chapter
                    </h3>
                    <p className="text-sm sm:text-base font-sans text-muted-foreground leading-relaxed">
                      {activeSociety.description}
                    </p>
                  </div>

                  {/* Mobile-Only Compact Showcase Image (renders cleanly right after About on mobile) */}
                  {activeSociety.image && (
                    <div className="block lg:hidden">
                      <div className="relative aspect-[16/10] max-h-[220px] w-full rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden border border-border/80 bg-muted shadow-xs">
                        <img
                          key={`mobile-${activeSociety.id}`}
                          src={activeSociety.image}
                          alt={`${activeSociety.name} showcase`}
                          className="w-full h-full object-cover block select-none pointer-events-none"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Core Objectives List */}
                  {activeSociety.objectives && activeSociety.objectives.length > 0 && (
                    <div className="pt-2">
                      <h3 className="text-sm font-black font-oswald uppercase tracking-wide text-foreground mb-3 flex items-center gap-1.5">
                        <Target className="w-4 h-4 text-primary" />
                        Strategic Mandate &amp; Objectives
                      </h3>
                      <div className="divide-y divide-border/60 border-y border-border/60">
                        {activeSociety.objectives.map((obj, i) => (
                          <div key={i} className="py-2.5 flex items-start gap-3">
                            <span className="text-xs font-black font-oswald text-foreground bg-foreground/10 px-2 py-0.5 rounded-xs shrink-0 mt-0.5">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <p className="text-xs sm:text-sm font-sans text-foreground/90 leading-relaxed">
                              {obj}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Flagship Events & Annual Conventions */}
                  <div className="pt-2">
                    <h4 className="text-xs font-bold font-oswald uppercase text-foreground tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      Flagship Conventions &amp; Competitions
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeSociety.flagshipEvents.map((evt, i) => (
                        <div key={i} className="p-2.5 border border-border/60 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs text-xs font-sans font-semibold text-foreground/90 bg-muted/30 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-xs bg-primary shrink-0" />
                          <span>{evt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Desktop Compact Stock Image + Benefits + Leadership */}
                <div className="lg:col-span-5 space-y-6 lg:pl-8 lg:border-l lg:border-border/60">
                  
                  {/* Desktop Perfectly Proportioned Compact Stock Image */}
                  {activeSociety.image && (
                    <div className="hidden lg:block">
                      <div className="relative aspect-[16/10] max-h-[240px] w-full rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden border border-border/80 bg-muted shadow-xs">
                        <img
                          key={`desktop-${activeSociety.id}`}
                          src={activeSociety.image}
                          alt={`${activeSociety.name} showcase`}
                          className="w-full h-full object-cover block select-none pointer-events-none"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Student Membership Benefits List */}
                  <div>
                    <h4 className="text-xs font-bold font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      Student Membership Privileges &amp; Benefits
                    </h4>
                    <div className="space-y-2">
                      {activeSociety.membershipBenefits.map((ben, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs font-sans text-muted-foreground">
                          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{ben}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Chapter Faculty Advisors & Student Chairs */}
                  <div className="pt-4 border-t border-border/60">
                    <h4 className="text-xs font-bold font-oswald uppercase text-foreground tracking-wider mb-2 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-primary" />
                      Faculty Advisory &amp; Student Executive
                    </h4>
                    <div className="p-3 border-l-2 border-primary bg-primary/5 rounded-r-xs">
                      <p className="text-xs font-sans text-foreground/90 font-medium leading-relaxed">
                        {activeSociety.studentChairs}
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              {/* SPECIAL TABLES SECTION FOR CSI (Styled as in Innovation & Incubation Cell) */}
              {activeSociety.id === "csi" && (
                <div className="pt-8 space-y-10 border-t border-border/60">
                  
                  {/* Table 1: Details of Nomination Authority */}
                  {activeSociety.nominationAuthorities && activeSociety.nominationAuthorities.length > 0 && (
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                          Institutional Governance
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black font-oswald uppercase text-foreground mt-0.5">
                          Details of Nomination Authority
                        </h3>
                        <p className="text-xs sm:text-sm font-sans text-muted-foreground">
                          Institutional representatives overseeing the Computer Society of India (CSI) student branch operations at MSAJCE.
                        </p>
                      </div>

                      <div className="overflow-x-auto border border-border rounded-none">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-primary/10 text-primary font-oswald uppercase text-xs">
                            <tr>
                              <th className="px-4 sm:px-6 py-3.5 font-bold w-14 text-center">S.No</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold">Name</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold">Designation</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold whitespace-nowrap">Contact No</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold whitespace-nowrap">E-Mail ID</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border font-sans text-muted-foreground">
                            {activeSociety.nominationAuthorities.map((auth, idx) => (
                              <tr key={idx} className="hover:bg-muted/50 transition-colors">
                                <td className="px-4 sm:px-6 py-3.5 font-medium text-foreground text-center">
                                  {String(idx + 1).padStart(2, "0")}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-bold font-oswald uppercase text-foreground whitespace-nowrap">
                                  {auth.name}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 text-xs sm:text-sm">
                                  {auth.designation}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-mono text-xs font-semibold text-foreground whitespace-nowrap">
                                  <a href={`tel:${auth.phone}`} className="hover:text-primary transition-colors flex items-center gap-1.5">
                                    <Phone className="w-3 h-3 text-primary" />
                                    {auth.phone}
                                  </a>
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 text-xs font-semibold whitespace-nowrap">
                                  <a href={`mailto:${auth.email}`} className="text-primary hover:underline flex items-center gap-1.5">
                                    <Mail className="w-3 h-3" />
                                    {auth.email}
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Table 2: CSI Office Bearers */}
                  {activeSociety.officeBearers && activeSociety.officeBearers.length > 0 && (
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                          Student Leadership Council
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black font-oswald uppercase text-foreground mt-0.5">
                          CSI Office Bearers
                        </h3>
                        <p className="text-xs sm:text-sm font-sans text-muted-foreground">
                          Elected student representatives leading technical symposiums, hackathons, and programming contests.
                        </p>
                      </div>

                      <div className="overflow-x-auto border border-border rounded-none">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-primary/10 text-primary font-oswald uppercase text-xs">
                            <tr>
                              <th className="px-4 sm:px-6 py-3.5 font-bold w-14 text-center">S.No</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold">Position</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold">Name</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold">Department</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold text-center whitespace-nowrap">Academic Batch</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border font-sans text-muted-foreground">
                            {activeSociety.officeBearers.map((bearer, idx) => (
                              <tr key={idx} className="hover:bg-muted/50 transition-colors">
                                <td className="px-4 sm:px-6 py-3.5 font-medium text-foreground text-center">
                                  {String(idx + 1).padStart(2, "0")}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-bold font-oswald uppercase text-primary whitespace-nowrap">
                                  <span className="px-2 py-0.5 bg-primary/10 border border-primary/20 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs text-xs">
                                    {bearer.position}
                                  </span>
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-bold font-sans text-foreground">
                                  {bearer.name}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-semibold font-sans text-foreground/80">
                                  {bearer.department}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-mono text-xs text-muted-foreground text-center whitespace-nowrap">
                                  {bearer.batch}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Table 3: CSI Workshops & Activities */}
                  {activeSociety.activitiesList && activeSociety.activitiesList.length > 0 && (
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                          Workshops &amp; Seminars
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black font-oswald uppercase text-foreground mt-0.5">
                          CSI Activities &amp; Technical Reports
                        </h3>
                        <p className="text-xs sm:text-sm font-sans text-muted-foreground">
                          Comprehensive record of guest lectures, interactive AI sessions, and inaugural conventions conducted by CSI MSAJCE.
                        </p>
                      </div>

                      <div className="overflow-x-auto border border-border rounded-none">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-primary/10 text-primary font-oswald uppercase text-xs">
                            <tr>
                              <th className="px-4 sm:px-6 py-3.5 font-bold w-14 text-center">S.No</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold">Name Of the Workshop / Event</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold">Resource Person</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold whitespace-nowrap">Date</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold text-center whitespace-nowrap">Participants</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold">Co-Ordinators</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold text-right whitespace-nowrap">Report</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border font-sans text-muted-foreground">
                            {activeSociety.activitiesList.map((act) => (
                              <tr key={act.sno} className="hover:bg-muted/50 transition-colors">
                                <td className="px-4 sm:px-6 py-3.5 font-medium text-foreground text-center">
                                  {String(act.sno).padStart(2, "0")}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-bold font-oswald uppercase text-foreground">
                                  {act.name}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 text-xs font-sans text-foreground/90 max-w-[220px]">
                                  {act.resourcePerson}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-mono text-xs text-muted-foreground whitespace-nowrap">
                                  {act.date}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-mono font-bold text-xs text-center text-primary whitespace-nowrap">
                                  <span className="px-2 py-0.5 bg-primary/10 rounded-xs">
                                    {act.participants}
                                  </span>
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 text-xs font-sans text-muted-foreground max-w-[200px]">
                                  {act.coordinators}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 text-right whitespace-nowrap">
                                  {act.reportUrl ? (
                                    <a
                                      href={act.reportUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary text-white text-xs font-bold font-oswald uppercase rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs hover:bg-primary/90 transition-colors cursor-pointer"
                                    >
                                      <span>View</span>
                                      <ExternalLink className="w-3 h-3" />
                                    </a>
                                  ) : (
                                    <span className="text-xs text-muted-foreground italic">N/A</span>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* SPECIAL TABLES SECTION FOR IETE (Styled as in Innovation & Incubation Cell) */}
              {activeSociety.id === "iete" && (
                <div className="pt-8 space-y-10 border-t border-border/60">
                  
                  {/* Table 1: IETE Students Forum Leadership & Branch Counselors */}
                  {activeSociety.ieteCounselors && activeSociety.ieteCounselors.length > 0 && (
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                          Institutional Governance &amp; Mentorship
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black font-oswald uppercase text-foreground mt-0.5">
                          IETE Students Forum Leadership &amp; Branch Counselors
                        </h3>
                        <p className="text-xs sm:text-sm font-sans text-muted-foreground">
                          Faculty counselors steering the IETE Students Forum (ISF) chapter operations and technical development at MSAJCE.
                        </p>
                      </div>

                      <div className="overflow-x-auto border border-border rounded-none">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-primary/10 text-primary font-oswald uppercase text-xs">
                            <tr>
                              <th className="px-4 sm:px-6 py-3.5 font-bold w-14 text-center">S.No</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold whitespace-nowrap">Designation / Role</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold">Faculty Counselor Name</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold">Department &amp; Institution</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold whitespace-nowrap text-right">Chapter Code</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border font-sans text-muted-foreground">
                            {activeSociety.ieteCounselors.map((counselor) => (
                              <tr key={counselor.sno} className="hover:bg-muted/50 transition-colors">
                                <td className="px-4 sm:px-6 py-3.5 font-medium text-foreground text-center">
                                  {String(counselor.sno).padStart(2, "0")}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-bold font-oswald uppercase text-primary whitespace-nowrap">
                                  <span className="px-2.5 py-0.5 bg-primary/10 border border-primary/20 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs text-xs">
                                    {counselor.role}
                                  </span>
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-bold font-sans text-foreground">
                                  {counselor.name}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 text-xs sm:text-sm">
                                  {counselor.department}, {counselor.institution}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-mono text-xs font-semibold text-foreground text-right whitespace-nowrap">
                                  <span className="px-2 py-0.5 bg-muted rounded-xs">
                                    {counselor.codeInfo || "School Code / Branch Code"}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Table 2: IETE Activities & Technical Events Conducted */}
                  {activeSociety.ieteActivities && activeSociety.ieteActivities.length > 0 && (
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                          Workshops, Seminars &amp; Technical Events
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black font-oswald uppercase text-foreground mt-0.5">
                          IETE Activities Conducted
                        </h3>
                        <p className="text-xs sm:text-sm font-sans text-muted-foreground">
                          Detailed log of semiconductor lectures, cyber physical workshops, IoT bootcamps, and technical quiz competitions.
                        </p>
                      </div>

                      <div className="overflow-x-auto border border-border rounded-none">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-primary/10 text-primary font-oswald uppercase text-xs">
                            <tr>
                              <th className="px-4 sm:px-6 py-3.5 font-bold w-14 text-center">S.No</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold">Name Of The Event</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold">Details Of Resource Person</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold whitespace-nowrap">Date Of The Event</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold text-center whitespace-nowrap">Target Audience</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold text-center whitespace-nowrap">No. Of Participants</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border font-sans text-muted-foreground">
                            {activeSociety.ieteActivities.map((act) => (
                              <tr key={act.sno} className="hover:bg-muted/50 transition-colors">
                                <td className="px-4 sm:px-6 py-3.5 font-medium text-foreground text-center">
                                  {String(act.sno).padStart(2, "0")}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-bold font-oswald uppercase text-foreground">
                                  {act.eventName}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 text-xs font-sans text-foreground/90 max-w-[260px] leading-relaxed">
                                  {act.resourcePerson}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-mono text-xs text-muted-foreground whitespace-nowrap">
                                  {act.date}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-mono text-xs text-center whitespace-nowrap">
                                  {act.targetAudience.includes("Won prizes") ? (
                                    <span className="px-2 py-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 rounded-xs text-[11px] font-semibold">
                                      {act.targetAudience}
                                    </span>
                                  ) : (
                                    <span className="px-2 py-0.5 bg-muted text-foreground/80 rounded-xs font-mono text-xs">
                                      {act.targetAudience}
                                    </span>
                                  )}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-mono font-bold text-xs text-center text-primary whitespace-nowrap">
                                  <span className="px-2.5 py-0.5 bg-primary/10 rounded-xs">
                                    {act.participants}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* SPECIAL TABLES SECTION FOR SAE (Styled as in Innovation & Incubation Cell) */}
              {activeSociety.id === "sae" && (
                <div className="pt-8 space-y-10 border-t border-border/60">
                  
                  {/* Table 1: SAE Collegiate Club Office Bearers */}
                  {activeSociety.saeOfficeBearers && activeSociety.saeOfficeBearers.length > 0 && (
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                          Collegiate Chapter Governance
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black font-oswald uppercase text-foreground mt-0.5">
                          SAE India - MSAJCE Collegiate Club Office Bearers
                        </h3>
                        <p className="text-xs sm:text-sm font-sans text-muted-foreground">
                          Faculty in-charge advisors and elected student officers leading mobility projects, automotive symposiums, and national challenges.
                        </p>
                      </div>

                      <div className="overflow-x-auto border border-border rounded-none">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-primary/10 text-primary font-oswald uppercase text-xs">
                            <tr>
                              <th className="px-4 sm:px-6 py-3.5 font-bold w-14 text-center">S.No</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold whitespace-nowrap">Designation / Role</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold">Officer Name</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold whitespace-nowrap">Role Category</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold">Department &amp; Institution</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border font-sans text-muted-foreground">
                            {activeSociety.saeOfficeBearers.map((bearer) => (
                              <tr key={bearer.sno} className="hover:bg-muted/50 transition-colors">
                                <td className="px-4 sm:px-6 py-3.5 font-medium text-foreground text-center">
                                  {String(bearer.sno).padStart(2, "0")}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-bold font-oswald uppercase text-primary whitespace-nowrap">
                                  <span className="px-2.5 py-0.5 bg-primary/10 border border-primary/20 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs text-xs">
                                    {bearer.position}
                                  </span>
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-bold font-sans text-foreground">
                                  {bearer.name}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-mono text-xs whitespace-nowrap">
                                  <span
                                    className={`px-2 py-0.5 rounded-xs font-semibold ${
                                      bearer.roleCategory === "Faculty Incharge"
                                        ? "bg-primary/15 text-primary border border-primary/20"
                                        : "bg-muted text-foreground/80"
                                    }`}
                                  >
                                    {bearer.roleCategory}
                                  </span>
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 text-xs sm:text-sm">
                                  {bearer.department}, MSAJCE
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Table 2: SAE Activities Conducted */}
                  {activeSociety.saeActivities && activeSociety.saeActivities.length > 0 && (
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                          Academic Year 2019–2020
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black font-oswald uppercase text-foreground mt-0.5">
                          SAE Activities Conducted
                        </h3>
                        <p className="text-xs sm:text-sm font-sans text-muted-foreground">
                          Inauguration of the collegiate chapter and hosting of the prestigious SAE-INDIA Southern Section TIER-II student convention.
                        </p>
                      </div>

                      <div className="overflow-x-auto border border-border rounded-none">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-primary/10 text-primary font-oswald uppercase text-xs">
                            <tr>
                              <th className="px-4 sm:px-6 py-3.5 font-bold w-14 text-center">S.No</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold whitespace-nowrap">Type Of Event</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold">Event Title</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold text-center whitespace-nowrap">Academic Year</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold whitespace-nowrap">Date</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold text-right whitespace-nowrap">Official Report</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border font-sans text-muted-foreground">
                            {activeSociety.saeActivities.map((act) => (
                              <tr key={act.sno} className="hover:bg-muted/50 transition-colors">
                                <td className="px-4 sm:px-6 py-3.5 font-medium text-foreground text-center">
                                  {String(act.sno).padStart(2, "0")}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-bold font-oswald uppercase text-foreground whitespace-nowrap">
                                  <span className="px-2 py-0.5 bg-muted rounded-xs text-xs font-sans font-semibold">
                                    {act.typeOfEvent}
                                  </span>
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-bold font-oswald uppercase text-foreground">
                                  {act.eventTitle}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-mono text-xs text-muted-foreground text-center whitespace-nowrap">
                                  {act.academicYear}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-mono text-xs text-muted-foreground whitespace-nowrap">
                                  {act.date}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 text-right whitespace-nowrap">
                                  {act.reportUrl ? (
                                    <a
                                      href={act.reportUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary text-white text-xs font-bold font-oswald uppercase rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs hover:bg-primary/90 transition-colors cursor-pointer"
                                    >
                                      <span>View</span>
                                      <ExternalLink className="w-3 h-3" />
                                    </a>
                                  ) : (
                                    <span className="text-xs text-muted-foreground italic">N/A</span>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* SPECIAL TABLES SECTION FOR ISHRAE (Styled as in Innovation & Incubation Cell) */}
              {activeSociety.id === "ishrae" && (
                <div className="pt-8 space-y-10 border-t border-border/60">
                  
                  {/* Table 1: ISHRAE Student Branch Chapter Office Bearers */}
                  {activeSociety.ishraeOfficeBearers && activeSociety.ishraeOfficeBearers.length > 0 && (
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                          Chapter Governance &amp; Student Executive
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black font-oswald uppercase text-foreground mt-0.5">
                          ISHRAE Student Branch Chapter Office Bearers
                        </h3>
                        <p className="text-xs sm:text-sm font-sans text-muted-foreground">
                          Faculty coordinators and elected student officers leading HVAC&amp;R technical chapters, workshops, and national conventions.
                        </p>
                      </div>

                      <div className="overflow-x-auto border border-border rounded-none">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-primary/10 text-primary font-oswald uppercase text-xs">
                            <tr>
                              <th className="px-4 sm:px-6 py-3.5 font-bold w-14 text-center">S.No</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold whitespace-nowrap">Designation / Role</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold">Officer Name</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold whitespace-nowrap">Role Category</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold">Department &amp; Institution</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border font-sans text-muted-foreground">
                            {activeSociety.ishraeOfficeBearers.map((bearer) => (
                              <tr key={bearer.sno} className="hover:bg-muted/50 transition-colors">
                                <td className="px-4 sm:px-6 py-3.5 font-medium text-foreground text-center">
                                  {String(bearer.sno).padStart(2, "0")}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-bold font-oswald uppercase text-primary whitespace-nowrap">
                                  <span className="px-2.5 py-0.5 bg-primary/10 border border-primary/20 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs text-xs">
                                    {bearer.position}
                                  </span>
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-bold font-sans text-foreground">
                                  {bearer.name}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-mono text-xs whitespace-nowrap">
                                  <span
                                    className={`px-2 py-0.5 rounded-xs font-semibold ${
                                      bearer.roleCategory === "Faculty Advisor"
                                        ? "bg-primary/15 text-primary border border-primary/20"
                                        : "bg-muted text-foreground/80"
                                    }`}
                                  >
                                    {bearer.roleCategory}
                                  </span>
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 text-xs sm:text-sm">
                                  {bearer.department}, MSAJCE
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Table 2: ISHRAE Student Branch Core Activities */}
                  {activeSociety.ishraeActivities && activeSociety.ishraeActivities.length > 0 && (
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                          Student Branch Mandate &amp; Professional Development
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black font-oswald uppercase text-foreground mt-0.5">
                          Activities of the Student Branch
                        </h3>
                        <p className="text-xs sm:text-sm font-sans text-muted-foreground">
                          Comprehensive initiatives undertaken by the MSAJCE student chapter to advance HVAC&amp;R engineering competencies.
                        </p>
                      </div>

                      <div className="overflow-x-auto border border-border rounded-none">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-primary/10 text-primary font-oswald uppercase text-xs">
                            <tr>
                              <th className="px-4 sm:px-6 py-3.5 font-bold w-14 text-center">S.No</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold whitespace-nowrap">Core Activity Domain</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold">Key Mandate &amp; Professional Opportunities</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold whitespace-nowrap">Technical Scope &amp; Benefits</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border font-sans text-muted-foreground">
                            {activeSociety.ishraeActivities.map((act) => (
                              <tr key={act.sno} className="hover:bg-muted/50 transition-colors">
                                <td className="px-4 sm:px-6 py-3.5 font-medium text-foreground text-center">
                                  {String(act.sno).padStart(2, "0")}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-bold font-oswald uppercase text-foreground whitespace-nowrap">
                                  {act.activityTitle}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 text-xs sm:text-sm text-foreground/90 leading-relaxed">
                                  {act.keyMandate}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 text-xs font-sans text-muted-foreground whitespace-nowrap">
                                  <span className="px-2 py-0.5 bg-muted rounded-xs">
                                    {act.scopeAndBenefit}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Table 3: National Governance & Statutory Framework */}
                  {activeSociety.ishraePartnerships && activeSociety.ishraePartnerships.length > 0 && (
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                          Statutory &amp; Inter-Ministerial Collaborations
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black font-oswald uppercase text-foreground mt-0.5">
                          National Technical Knowledge &amp; Standards Framework
                        </h3>
                        <p className="text-xs sm:text-sm font-sans text-muted-foreground">
                          Strategic engagements with Government Ministries, Bureau of Indian Standards, and global environmental bodies.
                        </p>
                      </div>

                      <div className="overflow-x-auto border border-border rounded-none">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-primary/10 text-primary font-oswald uppercase text-xs">
                            <tr>
                              <th className="px-4 sm:px-6 py-3.5 font-bold w-14 text-center">S.No</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold">Government Ministry / Statutory Entity</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold whitespace-nowrap">Technical Focus Area</th>
                              <th className="px-4 sm:px-6 py-3.5 font-bold">Institutional Collaboration Details</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border font-sans text-muted-foreground">
                            {activeSociety.ishraePartnerships.map((partner) => (
                              <tr key={partner.sno} className="hover:bg-muted/50 transition-colors">
                                <td className="px-4 sm:px-6 py-3.5 font-medium text-foreground text-center">
                                  {String(partner.sno).padStart(2, "0")}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-bold font-oswald uppercase text-foreground">
                                  {partner.partnerEntity}
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 font-mono text-xs whitespace-nowrap">
                                  <span className="px-2.5 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs font-semibold">
                                    {partner.technicalDomain}
                                  </span>
                                </td>
                                <td className="px-4 sm:px-6 py-3.5 text-xs sm:text-sm text-foreground/90 leading-relaxed">
                                  {partner.initiativeSummary}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* Sequential Society Navigation Controls */}
              <div className="pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => handleSelectSociety(prevSociety.id)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold font-oswald uppercase tracking-wider text-foreground hover:text-primary border border-border hover:border-primary/50 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous: {prevSociety.shortName}</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {professionalSocieties.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => handleSelectSociety(s.id)}
                      title={s.name}
                      className={`h-2 transition-all rounded-xs cursor-pointer ${
                        s.id === activeSociety.id
                          ? "w-8 bg-primary"
                          : "w-2 bg-muted hover:bg-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectSociety(nextSociety.id)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold font-oswald uppercase tracking-wider text-foreground hover:text-primary border border-border hover:border-primary/50 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs transition-colors cursor-pointer"
                >
                  <span>Next: {nextSociety.shortName}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* ORGANIC WAVE DIVIDER A -> B */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 md:h-16 lg:h-20 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* SECTION B: SCANNABLE ALL 4 CHAPTERS DIRECTORY */}
      <section className="bg-[#F3F3F2] dark:bg-[#18181B] py-10 sm:py-14 px-4 sm:px-6 md:px-12 transition-colors">
        <div className="max-w-[1440px] mx-auto space-y-6">
          <div className="border-b border-border/60 pb-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              All 4 Professional Societies
            </h2>
          </div>

          {/* Clean Editorial Table / Open Directory List (Strictly NO Cards) */}
          <div className="divide-y divide-border/60 border-y border-border/60 bg-transparent">
            {professionalSocieties.map((soc, idx) => {
              const isActive = soc.id === activeSociety.id;
              return (
                <div
                  key={soc.id}
                  onClick={() => handleSelectSociety(soc.id)}
                  className={`py-3.5 sm:py-4 px-2 sm:px-4 flex flex-col md:flex-row md:items-center justify-between gap-3 transition-colors cursor-pointer ${
                    isActive
                      ? "bg-primary/5 dark:bg-primary/10 border-l-4 border-primary pl-3"
                      : "hover:bg-foreground/[0.02]"
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <span className="text-xs font-mono font-bold text-muted-foreground w-6 shrink-0 mt-0.5 sm:mt-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base sm:text-lg font-black font-oswald uppercase text-foreground hover:text-primary transition-colors">
                          {soc.name}
                        </span>
                        {isActive && (
                          <span className="text-[10px] font-bold font-oswald uppercase bg-primary text-white px-2 py-0.5 rounded-xs">
                            Active
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-sans text-muted-foreground line-clamp-1 mt-0.5">
                        {soc.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pl-9 md:pl-0">
                    <span className="text-[11px] font-mono font-bold text-foreground bg-foreground/10 px-2 py-0.5 rounded-xs">
                      {soc.code}
                    </span>
                    <span className="text-[11px] font-bold font-oswald uppercase text-primary px-2.5 py-0.5 bg-primary/10 border border-primary/20 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                      {soc.category}
                    </span>
                    <span className="text-xs font-bold font-oswald uppercase text-primary flex items-center gap-1">
                      {isActive ? "Viewing" : "Explore"} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ORGANIC WAVE DIVIDER B -> A */}
      <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 md:h-16 lg:h-20 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* SECTION A: PROFESSIONAL CERTIFICATIONS & TEDx GATEWAY */}
      <section className="bg-white dark:bg-[#121214] py-10 sm:py-14 px-4 sm:px-6 md:px-12 transition-colors">
        <div className="max-w-[1440px] mx-auto space-y-10">
          
          <div>
            <div className="border-b border-border/60 pb-3 mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                Technical Chapters Impact
              </h2>
            </div>

            {/* 3 Major Impact Editorial Columns (No heavy card boxes) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-border/60">
              
              <div className="pt-4 md:pt-0 md:pr-6 space-y-2">
                <span className="text-xs font-black font-oswald uppercase text-primary">
                  National Competitions
                </span>
                <h3 className="text-xl font-black font-oswald uppercase text-foreground">
                  BAJA, SUPRA &amp; aQuest
                </h3>
                <p className="text-xs sm:text-sm font-sans text-muted-foreground leading-relaxed">
                  MSAJCE student teams consistently represent Tamil Nadu at premier national championships, engineering formula student cars, all-terrain buggies, and smart HVAC architectures.
                </p>
              </div>

              <div className="pt-4 md:pt-0 md:px-6 space-y-2">
                <span className="text-xs font-black font-oswald uppercase text-primary">
                  Core Industrial Hiring
                </span>
                <h3 className="text-xl font-black font-oswald uppercase text-foreground">
                  Corporate Fast-Tracks
                </h3>
                <p className="text-xs sm:text-sm font-sans text-muted-foreground leading-relaxed">
                  Direct networking with technical leaders from Tata Motors, Mahindra, Blue Star, Daikin, TCS, and Cognizant through chapter-exclusive conclaves and recruitment drives.
                </p>
              </div>

              <div className="pt-4 md:pt-0 md:pl-6 space-y-2">
                <span className="text-xs font-black font-oswald uppercase text-primary">
                  Research &amp; Publications
                </span>
                <h3 className="text-xl font-black font-oswald uppercase text-foreground">
                  Peer-Reviewed Journals
                </h3>
                <p className="text-xs sm:text-sm font-sans text-muted-foreground leading-relaxed">
                  Undergraduate students receive faculty mentorship to author and publish technical research papers in CSI Communications, IETE Journals, and national conventions.
                </p>
              </div>

            </div>
          </div>

          {/* Gateway Banner to TEDx */}
          <div className="border border-border/60 p-6 sm:p-8 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-muted/20">
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                Explore TEDxMSAJCE
              </h3>
            </div>
            
            <button
              type="button"
              onClick={() => navigate({ to: "/student-life/tedx" })}
              className="relative group overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-stone-200 dark:bg-neutral-800 text-foreground dark:text-white border border-stone-300 dark:border-neutral-700 px-5 py-2.5 font-bold font-oswald text-xs uppercase tracking-wider shrink-0 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                TEDx Chapter <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </span>
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}
