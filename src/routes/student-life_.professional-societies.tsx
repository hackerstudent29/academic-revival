import { useState, useMemo, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { SecondarySubNav } from "@/components/layout/SecondarySubNav";
import { DataGridContainer } from "@/components/ui/data-grid-table";
import { professionalSocieties, type ProfessionalSociety } from "@/data/studentLife";

const title = "Professional Societies | Technical Chapters | Campus Life | MSAJCE";
const description =
  "Explore official CSI, IETE, SAEINDIA, and ISHRAE professional chapters at Mohamed Sathak A.J. College of Engineering. Industry standards, technical symposiums, hackathons, and certifications.";

const societyNavTabs = [
  { id: "csi", label: "Computer Society of India (CSI)" },
  { id: "iete", label: "Institution of Electronics and Telecommunication Engineers (IETE)" },
  { id: "sae", label: "SAEINDIA (Mobility & Automotive)" },
  { id: "ishrae", label: "ISHRAE (HVAC & Thermal)" },
];

const membershipPrivileges = [
  {
    title: "Global Professional Body Credentials",
    desc: "Direct student membership identification, recognized internationally by professional engineering institutions, industry hiring boards, and academic research bodies.",
  },
  {
    title: "Access to High-Impact Technical Journals & Digital Libraries",
    desc: "Full institutional digital access to IEEE, CSI, IETE, and SAE technical papers, conference proceedings, design standards, and emerging technology whitepapers.",
  },
  {
    title: "National Design Competitions & Flagship Hackathons",
    desc: "Direct collegiate eligibility and institutional sponsorship for national championships including BAJA SAEINDIA, SUPRA, Smart India Hackathon, and ACREX India.",
  },
  {
    title: "Corporate Mentorship & Industrial Internship Pathways",
    desc: "Periodic technical masterclasses, project evaluations, and direct recruitment pathways through industry fellow networks across IT, telecommunications, and core manufacturing.",
  },
];

/* Organic Alternating Wave Dividers */
function WaveDividerAB() {
  return (
    <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
      <svg
        viewBox="0 0 1440 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-5 sm:h-7 md:h-9 block preserve-3d"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
          className="fill-[#F3F3F2] dark:fill-[#18181B]"
        />
      </svg>
    </div>
  );
}

function WaveDividerBA() {
  return (
    <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
      <svg
        viewBox="0 0 1440 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-5 sm:h-7 md:h-9 block preserve-3d"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
          className="fill-white dark:fill-[#121214]"
        />
      </svg>
    </div>
  );
}

interface SocietySearch {
  society?: string | undefined;
}

export const Route = createFileRoute("/student-life_/professional-societies")({
  validateSearch: (search: Record<string, unknown>): SocietySearch => {
    return {
      society: typeof search["society"] === "string" ? (search["society"] as string) : undefined,
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
  const navigate = Route.useNavigate();
  const { society } = Route.useSearch();
  const [selectedSocietyId, setSelectedSocietyId] = useState<string>(() => {
    if (society && societyNavTabs.some((s) => s.id === society)) {
      return society;
    }
    return "csi";
  });

  useEffect(() => {
    if (society && societyNavTabs.some((s) => s.id === society)) {
      setSelectedSocietyId(society);
    }
  }, [society]);

  const handleSelectSociety = (societyId: string) => {
    setSelectedSocietyId(societyId);
    navigate({
      search: { society: societyId },
      replace: true,
    });
  };

  const activeSociety: ProfessionalSociety = useMemo(() => {
    return professionalSocieties.find((s) => s.id === selectedSocietyId) || professionalSocieties[0];
  }, [selectedSocietyId]);

  return (
    <main className="min-h-screen bg-white dark:bg-[#121214] text-foreground font-libre antialiased flex flex-col selection:bg-primary selection:text-white">
      {/* 1. Sticky Secondary SubNav Header */}
      <SecondarySubNav
        title="PROFESSIONAL SOCIETIES"
        tabs={societyNavTabs}
        activeTab={selectedSocietyId}
        onSelectTab={handleSelectSociety}
        onTitleClick={() => handleSelectSociety("csi")}
      />

      <div className="flex-1 pt-0 md:pt-1">
        {/* ========================================================================= */}
        {/* 2. DYNAMIC HERO BANNER: Institution-Style Theme-Adaptive Banner           */}
        {/* ========================================================================= */}
        <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80"
              alt="Professional Societies and Technical Chapters at Mohamed Sathak A.J. College of Engineering"
              className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/why-join/industry.jpg";
              }}
            />
            {/* Gradient Overlay for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          </div>

          {/* Title Container: Theme-Adaptive Frame Docked Flush at Bottom */}
          <div className="relative z-10 mx-auto max-w-[1440px] w-full px-3.5 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 md:pt-24 pb-0">
            <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 shadow-2xl max-w-full w-auto border-t border-r border-border dark:border-white/15">
              <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none whitespace-nowrap">
                PROFESSIONAL SOCIETIES
              </h1>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. SECTION 1: Canvas A (White / #121214) — Technical Chapters Spotlight   */}
        {/* ========================================================================= */}
        <section className="pt-10 sm:pt-14 md:pt-16 lg:pt-20 pb-6 sm:pb-8 md:pb-10 bg-white dark:bg-[#121214] transition-colors">
          <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSociety.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
                className="space-y-6"
              >
                {/* Section Title */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                  {activeSociety.name}
                </h2>

                {activeSociety.id === "csi" ? (
                  <>
                    {/* History of CSI */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground mb-1">
                        History of CSI
                      </h3>
                      <p className="font-oswald text-sm sm:text-base uppercase tracking-wide text-primary font-semibold mb-2">
                        The CSI Vision: &quot;lT for Masses&quot;
                      </p>
                      <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                        {activeSociety.history}
                      </p>
                    </div>

                    {/* Region - VII */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground mb-1">
                        Region – VII
                      </h3>
                      <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                        {activeSociety.region}
                      </p>
                    </div>

                    {/* Kanchipuram Chapter */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground mb-1">
                        Kanchipuram Chapter
                      </h3>
                      <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                        {activeSociety.description}
                      </p>
                    </div>

                    {/* Institutional Awards with Round Circular Badges 1, 2 */}
                    {activeSociety.awards && activeSociety.awards.length > 0 && (
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground mb-3">
                          Chapter Awards &amp; Institutional Recognition
                        </h3>
                        <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full">
                          {activeSociety.awards.map((award, idx) => (
                            <div
                              key={idx}
                              className="py-3 px-1 sm:px-3 flex items-center gap-3.5 hover:bg-foreground/[0.015] transition-colors w-full"
                            >
                              <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm border border-primary/20 shadow-2xs">
                                {idx + 1}
                              </span>
                              <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                                {award}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* DETAILS OF NOMINATION AUTHORITY - Publications DataGrid Table */}
                    {activeSociety.nominationAuthorities && activeSociety.nominationAuthorities.length > 0 && (
                      <div className="pt-2">
                        <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground mb-3">
                          DETAILS OF NOMINATION AUTHORITY
                        </h3>
                        <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                          <div className="overflow-x-auto bg-transparent">
                            <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                              <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                                <tr>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                                    S.No
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[180px]">
                                    Name
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider min-w-[260px]">
                                    Designation
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[140px]">
                                    Phone
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[200px]">
                                    E-Mail
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border/40 font-libre">
                                {activeSociety.nominationAuthorities.map((auth, idx) => (
                                  <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                                    <td className="py-3.5 px-4 text-center font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                                      {idx + 1}
                                    </td>
                                    <td className="py-3.5 px-4 font-libre font-bold text-xs sm:text-sm text-foreground whitespace-nowrap">
                                      {auth.name}
                                    </td>
                                    <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground">
                                      {auth.designation}
                                    </td>
                                    <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground whitespace-nowrap">
                                      <a href={`tel:${auth.phone}`} className="hover:text-primary transition-colors">
                                        {auth.phone}
                                      </a>
                                    </td>
                                    <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-primary whitespace-nowrap">
                                      <a href={`mailto:${auth.email}`} className="hover:underline">
                                        {auth.email}
                                      </a>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </DataGridContainer>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {/* General Chapter Overview for IETE, SAE, ISHRAE */}
                    <div className="space-y-4">
                      {activeSociety.tagline && (
                        <p className="font-oswald text-sm sm:text-base uppercase tracking-wide text-primary font-semibold">
                          {activeSociety.tagline}
                        </p>
                      )}

                      <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                        {activeSociety.description}
                      </p>

                      {/* IETE Counselors Table */}
                      {activeSociety.ieteCounselors && activeSociety.ieteCounselors.length > 0 && (
                        <div className="pt-2">
                          <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground mb-3">
                            DETAILS OF BRANCH COUNSELORS
                          </h3>
                          <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                            <div className="overflow-x-auto bg-transparent">
                              <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                                <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                                  <tr>
                                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                                      S.No
                                    </th>
                                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[180px]">
                                      Role
                                    </th>
                                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider min-w-[200px]">
                                      Name
                                    </th>
                                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[160px]">
                                      Department
                                    </th>
                                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[200px]">
                                      Code / Institution
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-border/40 font-libre">
                                  {activeSociety.ieteCounselors.map((c, idx) => (
                                    <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                                      <td className="py-3.5 px-4 text-center font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                                        {c.sno}
                                      </td>
                                      <td className="py-3.5 px-4 font-libre font-bold text-xs sm:text-sm text-primary whitespace-nowrap">
                                        {c.role}
                                      </td>
                                      <td className="py-3.5 px-4 font-libre font-semibold text-xs sm:text-sm text-foreground whitespace-nowrap">
                                        {c.name}
                                      </td>
                                      <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground whitespace-nowrap">
                                        {c.department}
                                      </td>
                                      <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                                        {c.codeInfo || c.institution}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </DataGridContainer>
                        </div>
                      )}

                      {/* SAE Milestones */}
                      {activeSociety.saeMilestones && activeSociety.saeMilestones.length > 0 && (
                        <div className="pt-2">
                          <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground mb-3">
                            SAEINDIA Chapter Milestones
                          </h3>
                          <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full">
                            {activeSociety.saeMilestones.map((m, idx) => (
                              <div
                                key={idx}
                                className="py-3 px-1 sm:px-3 flex items-center gap-3.5 hover:bg-foreground/[0.015] transition-colors w-full"
                              >
                                <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm border border-primary/20 shadow-2xs">
                                  {idx + 1}
                                </span>
                                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                                  {m}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* SAE Competitions */}
                      {activeSociety.saeCompetitions && activeSociety.saeCompetitions.length > 0 && (
                        <div className="pt-2">
                          <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground mb-3">
                            National Competitions &amp; Flagship Challenges
                          </h3>
                          <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full">
                            {activeSociety.saeCompetitions.map((comp, idx) => (
                              <div
                                key={idx}
                                className="py-3 px-1 sm:px-3 flex items-center gap-3.5 hover:bg-foreground/[0.015] transition-colors w-full"
                              >
                                <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm border border-primary/20 shadow-2xs">
                                  {idx + 1}
                                </span>
                                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                                  {comp}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Objectives */}
                      {activeSociety.objectives && activeSociety.objectives.length > 0 && (
                        <div className="pt-2">
                          <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground mb-3">
                            Chapter Objectives
                          </h3>
                          <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full">
                            {activeSociety.objectives.map((obj, idx) => (
                              <div
                                key={idx}
                                className="py-3 px-1 sm:px-3 flex items-center gap-3.5 hover:bg-foreground/[0.015] transition-colors w-full"
                              >
                                <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm border border-primary/20 shadow-2xs">
                                  {idx + 1}
                                </span>
                                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                                  {obj}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Wave Divider A -> B */}
        <WaveDividerAB />

        {/* ========================================================================= */}
        {/* 4. SECTION 2: Canvas B (#F3F3F2 / #18181B) — Executive Office Bearers      */}
        {/* ========================================================================= */}
        <section className="py-6 sm:py-8 md:py-10 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
          <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-4 sm:mb-6">
              {activeSociety.id === "csi" ? "CSI OFFICE BEARERS" : "EXECUTIVE COMMITTEE & OFFICE BEARERS"}
            </h2>

            {/* Official Publications DataGrid Table for Office Bearers */}
            <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
              <div className="overflow-x-auto bg-transparent">
                <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                  <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                    <tr>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                        S.No
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[180px]">
                        Position
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider min-w-[200px]">
                        Name
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[140px]">
                        Department
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-36 text-right">
                        Batch
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-libre">
                    {/* Render active chapter's office bearers */}
                    {activeSociety.officeBearers && activeSociety.officeBearers.length > 0 &&
                      activeSociety.officeBearers.map((bearer, idx) => (
                        <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-3.5 px-4 text-center font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                            {idx + 1}
                          </td>
                          <td className="py-3.5 px-4 font-libre font-bold text-xs sm:text-sm text-primary whitespace-nowrap">
                            {bearer.position}
                          </td>
                          <td className="py-3.5 px-4 font-libre font-semibold text-xs sm:text-sm text-foreground">
                            {bearer.name}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground whitespace-nowrap">
                            {bearer.department}
                          </td>
                          <td className="py-3.5 px-4 text-right font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                            {bearer.batch}
                          </td>
                        </tr>
                      ))}

                    {/* IETE Counselors */}
                    {activeSociety.id === "iete" && activeSociety.ieteCounselors && activeSociety.ieteCounselors.length > 0 &&
                      activeSociety.ieteCounselors.map((c, idx) => (
                        <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-3.5 px-4 text-center font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                            {c.sno}
                          </td>
                          <td className="py-3.5 px-4 font-libre font-bold text-xs sm:text-sm text-primary whitespace-nowrap">
                            {c.role}
                          </td>
                          <td className="py-3.5 px-4 font-libre font-semibold text-xs sm:text-sm text-foreground">
                            {c.name}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground whitespace-nowrap">
                            {c.department}
                          </td>
                          <td className="py-3.5 px-4 text-right font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                            {c.codeInfo || "Faculty Counselor"}
                          </td>
                        </tr>
                      ))}

                    {/* SAE Office Bearers */}
                    {activeSociety.id === "sae" && activeSociety.saeOfficeBearers && activeSociety.saeOfficeBearers.length > 0 &&
                      activeSociety.saeOfficeBearers.map((s, idx) => (
                        <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-3.5 px-4 text-center font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                            {s.sno}
                          </td>
                          <td className="py-3.5 px-4 font-libre font-bold text-xs sm:text-sm text-primary whitespace-nowrap">
                            {s.position}
                          </td>
                          <td className="py-3.5 px-4 font-libre font-semibold text-xs sm:text-sm text-foreground">
                            {s.name}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground whitespace-nowrap">
                            {s.department}
                          </td>
                          <td className="py-3.5 px-4 text-right font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                            {s.roleCategory}
                          </td>
                        </tr>
                      ))}

                    {/* ISHRAE Office Bearers */}
                    {activeSociety.id === "ishrae" && activeSociety.ishraeOfficeBearers && activeSociety.ishraeOfficeBearers.length > 0 &&
                      activeSociety.ishraeOfficeBearers.map((ish, idx) => (
                        <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-3.5 px-4 text-center font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                            {ish.sno}
                          </td>
                          <td className="py-3.5 px-4 font-libre font-bold text-xs sm:text-sm text-primary whitespace-nowrap">
                            {ish.position}
                          </td>
                          <td className="py-3.5 px-4 font-libre font-semibold text-xs sm:text-sm text-foreground">
                            {ish.name}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground whitespace-nowrap">
                            {ish.department}
                          </td>
                          <td className="py-3.5 px-4 text-right font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                            {ish.roleCategory}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </DataGridContainer>
          </div>
        </section>

        {/* Wave Divider B -> A */}
        <WaveDividerBA />

        {/* ========================================================================= */}
        {/* 5. SECTION 3: Canvas A (White / #121214) — Technical Events & Activities  */}
        {/* ========================================================================= */}
        <section className="py-6 sm:py-8 md:py-10 bg-white dark:bg-[#121214] transition-colors">
          <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-4 sm:mb-6">
              Activities
            </h2>

            {/* Official Publications DataGrid Table for Activities */}
            <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
              <div className="overflow-x-auto bg-transparent">
                <table className="w-full text-left border-collapse min-w-[760px] text-xs sm:text-sm">
                  <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                    <tr>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                        S.No
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider min-w-[200px]">
                        Name Of the Workshop
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider min-w-[240px]">
                        Resource Person
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-28">
                        Date
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-center w-36">
                        No. Of Participants
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider min-w-[200px]">
                        Co-Ordinators
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-center w-24">
                        View
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-libre">
                    {/* CSI Activities */}
                    {activeSociety.id === "csi" && activeSociety.activitiesList && activeSociety.activitiesList.length > 0 &&
                      activeSociety.activitiesList.map((act) => (
                        <tr key={act.sno} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-3.5 px-4 text-center font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                            {act.sno}
                          </td>
                          <td className="py-3.5 px-4 font-libre font-semibold text-xs sm:text-sm text-foreground">
                            {act.name}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground leading-relaxed">
                            {act.resourcePerson}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                            {act.date}
                          </td>
                          <td className="py-3.5 px-4 text-center font-libre text-xs sm:text-sm text-foreground whitespace-nowrap">
                            {act.participants}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground">
                            {act.coordinators}
                          </td>
                          <td className="py-3.5 px-4 text-center font-libre whitespace-nowrap">
                            {act.reportUrl ? (
                              <a
                                href={act.reportUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-oswald font-bold uppercase tracking-wider bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs border border-primary/20 shadow-2xs"
                              >
                                View
                              </a>
                            ) : (
                              <span className="text-muted-foreground text-xs">—</span>
                            )}
                          </td>
                        </tr>
                      ))}

                    {/* IETE Activities */}
                    {activeSociety.id === "iete" && activeSociety.ieteActivities && activeSociety.ieteActivities.length > 0 &&
                      activeSociety.ieteActivities.map((ia) => (
                        <tr key={ia.sno} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-3.5 px-4 text-center font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                            {ia.sno}
                          </td>
                          <td className="py-3.5 px-4 font-libre font-semibold text-xs sm:text-sm text-foreground">
                            {ia.eventName}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground leading-relaxed">
                            {ia.resourcePerson}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                            {ia.date}
                          </td>
                          <td className="py-3.5 px-4 text-center font-libre text-xs sm:text-sm text-foreground whitespace-nowrap">
                            {ia.participants}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-muted-foreground">
                            Audience: {ia.targetAudience}
                          </td>
                          <td className="py-3.5 px-4 text-center font-libre text-muted-foreground text-xs whitespace-nowrap">
                            —
                          </td>
                        </tr>
                      ))}

                    {/* SAE Activities */}
                    {activeSociety.id === "sae" && activeSociety.saeActivities && activeSociety.saeActivities.length > 0 &&
                      activeSociety.saeActivities.map((sa) => (
                        <tr key={sa.sno} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-3.5 px-4 text-center font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                            {sa.sno}
                          </td>
                          <td className="py-3.5 px-4 font-libre font-semibold text-xs sm:text-sm text-foreground">
                            {sa.eventTitle}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground leading-relaxed">
                            {sa.typeOfEvent}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                            {sa.date}
                          </td>
                          <td className="py-3.5 px-4 text-center font-libre text-xs sm:text-sm text-foreground whitespace-nowrap">
                            Active Chapter
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground">
                            SAEINDIA Collegiate Chapter
                          </td>
                          <td className="py-3.5 px-4 text-center font-libre whitespace-nowrap">
                            {sa.reportUrl ? (
                              <a
                                href={sa.reportUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-oswald font-bold uppercase tracking-wider bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs border border-primary/20 shadow-2xs"
                              >
                                View
                              </a>
                            ) : (
                              <span className="text-muted-foreground text-xs">—</span>
                            )}
                          </td>
                        </tr>
                      ))}

                    {/* ISHRAE Activities */}
                    {activeSociety.id === "ishrae" && activeSociety.ishraeActivities && activeSociety.ishraeActivities.length > 0 &&
                      activeSociety.ishraeActivities.map((ishAct) => (
                        <tr key={ishAct.sno} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-3.5 px-4 text-center font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                            {ishAct.sno}
                          </td>
                          <td className="py-3.5 px-4 font-libre font-semibold text-xs sm:text-sm text-foreground">
                            {ishAct.activityTitle}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground leading-relaxed">
                            {ishAct.keyMandate}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                            Annual Cycle
                          </td>
                          <td className="py-3.5 px-4 text-center font-libre text-xs sm:text-sm text-foreground whitespace-nowrap">
                            Student Delegates
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground">
                            {ishAct.scopeAndBenefit}
                          </td>
                          <td className="py-3.5 px-4 text-center font-libre text-muted-foreground text-xs whitespace-nowrap">
                            —
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </DataGridContainer>
          </div>
        </section>

        {/* Wave Divider A -> B */}
        <WaveDividerAB />

        {/* ========================================================================= */}
        {/* 6. SECTION 4: Canvas B (#F3F3F2 / #18181B) — Membership Privileges        */}
        {/* ========================================================================= */}
        <section className="py-6 sm:py-8 md:py-10 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
          <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-4 sm:mb-6">
              Professional Membership Privileges &amp; Industry Pathways
            </h2>

            {/* Clean Open Editorial List with Round Circular Badges 1, 2, 3, 4 */}
            <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full">
              {membershipPrivileges.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3.5 sm:py-4 px-1 sm:px-3 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 hover:bg-foreground/[0.015] transition-colors w-full"
                >
                  <div className="md:w-80 shrink-0 flex items-center gap-3">
                    <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm border border-primary/20 shadow-2xs">
                      {idx + 1}
                    </span>
                    <h3 className="font-oswald font-bold text-base sm:text-lg text-foreground uppercase tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
