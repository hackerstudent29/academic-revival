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
        <section className="py-5 sm:py-7 md:py-8 bg-white dark:bg-[#121214] transition-colors">
          <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-3 sm:mb-4">
              Technical Chapters Overview &amp; Charters
            </h2>

            {/* Active Chapter Detailed Spotlight (Cardless Open Layout) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSociety.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
                className="space-y-6 pt-2"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border/40 pb-3">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block">
                      Chapter Code: {activeSociety.code}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-oswald uppercase tracking-tight text-foreground">
                      {activeSociety.name}
                    </h3>
                  </div>
                  {activeSociety.establishedDate && (
                    <span className="font-mono text-xs sm:text-sm font-bold text-muted-foreground">
                      Est. {activeSociety.establishedDate}
                    </span>
                  )}
                </div>

                <div className="space-y-4">
                  {activeSociety.tagline && (
                    <p className="font-oswald text-sm sm:text-base uppercase tracking-wide text-primary font-semibold">
                      "{activeSociety.tagline}"
                    </p>
                  )}

                  <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                    {activeSociety.description}
                  </p>

                  {/* Chapter Nomination / Faculty Incharge Authorities */}
                  {activeSociety.nominationAuthorities && activeSociety.nominationAuthorities.length > 0 && (
                    <div className="pt-4 border-t border-border/40 space-y-3">
                      <h4 className="text-xs sm:text-sm font-bold font-oswald uppercase tracking-wider text-primary">
                        Nomination Authorities &amp; Branch Counselors
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {activeSociety.nominationAuthorities.map((auth, idx) => (
                          <div key={idx} className="p-3.5 border-l-2 border-primary bg-foreground/[0.02] space-y-1">
                            <span className="font-oswald font-bold uppercase text-foreground text-sm block">
                              {auth.name}
                            </span>
                            <span className="text-xs text-muted-foreground font-libre block">
                              {auth.designation}
                            </span>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1 text-xs font-mono text-foreground/80">
                              <span>Tel: {auth.phone}</span>
                              <span>Email: {auth.email}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Wave Divider A -> B */}
        <WaveDividerAB />

        {/* ========================================================================= */}
        {/* 4. SECTION 2: Canvas B (#F3F3F2 / #18181B) — Executive Office Bearers      */}
        {/* ========================================================================= */}
        <section className="py-5 sm:py-7 md:py-8 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
          <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-3 sm:mb-4">
              Executive Committee &amp; Office Bearers
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
                        Position / Office
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider min-w-[200px]">
                        Name of Member
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[160px]">
                        Department
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-36 text-right">
                        Tenure / Batch
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-libre">
                    {/* Render active chapter's office bearers */}
                    {activeSociety.officeBearers && activeSociety.officeBearers.length > 0 &&
                      activeSociety.officeBearers.map((bearer, idx) => (
                        <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                            {String(idx + 1).padStart(2, "0")}
                          </td>
                          <td className="py-3.5 px-4 font-oswald font-bold uppercase text-primary text-xs sm:text-sm whitespace-nowrap">
                            {bearer.position}
                          </td>
                          <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-sm">
                            {bearer.name}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground/85 whitespace-nowrap">
                            {bearer.department}
                          </td>
                          <td className="py-3.5 px-4 text-right font-mono font-medium text-foreground text-xs whitespace-nowrap">
                            {bearer.batch}
                          </td>
                        </tr>
                      ))}

                    {/* IETE Counselors */}
                    {activeSociety.ieteCounselors && activeSociety.ieteCounselors.length > 0 &&
                      activeSociety.ieteCounselors.map((c, idx) => (
                        <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                            {String(c.sno).padStart(2, "0")}
                          </td>
                          <td className="py-3.5 px-4 font-oswald font-bold uppercase text-primary text-xs sm:text-sm whitespace-nowrap">
                            {c.role}
                          </td>
                          <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-sm">
                            {c.name}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground/85 whitespace-nowrap">
                            {c.department}
                          </td>
                          <td className="py-3.5 px-4 text-right font-mono font-medium text-foreground text-xs whitespace-nowrap">
                            {c.codeInfo || "Faculty / Executive"}
                          </td>
                        </tr>
                      ))}

                    {/* SAE Office Bearers */}
                    {activeSociety.saeOfficeBearers && activeSociety.saeOfficeBearers.length > 0 &&
                      activeSociety.saeOfficeBearers.map((s, idx) => (
                        <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                            {String(s.sno).padStart(2, "0")}
                          </td>
                          <td className="py-3.5 px-4 font-oswald font-bold uppercase text-primary text-xs sm:text-sm whitespace-nowrap">
                            {s.position}
                          </td>
                          <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-sm">
                            {s.name}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground/85 whitespace-nowrap">
                            {s.department}
                          </td>
                          <td className="py-3.5 px-4 text-right font-mono font-medium text-foreground text-xs whitespace-nowrap">
                            {s.roleCategory}
                          </td>
                        </tr>
                      ))}

                    {/* ISHRAE Office Bearers */}
                    {activeSociety.ishraeOfficeBearers && activeSociety.ishraeOfficeBearers.length > 0 &&
                      activeSociety.ishraeOfficeBearers.map((ish, idx) => (
                        <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                            {String(ish.sno).padStart(2, "0")}
                          </td>
                          <td className="py-3.5 px-4 font-oswald font-bold uppercase text-primary text-xs sm:text-sm whitespace-nowrap">
                            {ish.position}
                          </td>
                          <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-sm">
                            {ish.name}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground/85 whitespace-nowrap">
                            {ish.department}
                          </td>
                          <td className="py-3.5 px-4 text-right font-mono font-medium text-foreground text-xs whitespace-nowrap">
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
        <section className="py-5 sm:py-7 md:py-8 bg-white dark:bg-[#121214] transition-colors">
          <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-3 sm:mb-4">
              Technical Activities, Symposiums &amp; Workshops
            </h2>

            {/* Official Publications DataGrid Table for Activities */}
            <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
              <div className="overflow-x-auto bg-transparent">
                <table className="w-full text-left border-collapse min-w-[700px] text-xs sm:text-sm">
                  <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                    <tr>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                        S.No
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                        Event Title / Workshop Name
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                        Date / Period
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                        Resource Person / Focus
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right w-36">
                        Participation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-libre">
                    {/* CSI Activities */}
                    {activeSociety.activitiesList && activeSociety.activitiesList.length > 0 &&
                      activeSociety.activitiesList.map((act) => (
                        <tr key={act.sno} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                            {String(act.sno).padStart(2, "0")}
                          </td>
                          <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-sm">
                            {act.name}
                          </td>
                          <td className="py-3.5 px-4 font-mono font-semibold text-foreground text-xs whitespace-nowrap">
                            {act.date}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground/85 leading-relaxed">
                            {act.resourcePerson}
                          </td>
                          <td className="py-3.5 px-4 text-right font-mono font-semibold text-foreground text-xs whitespace-nowrap">
                            {act.participants}
                          </td>
                        </tr>
                      ))}

                    {/* IETE Activities */}
                    {activeSociety.ieteActivities && activeSociety.ieteActivities.length > 0 &&
                      activeSociety.ieteActivities.map((ia) => (
                        <tr key={ia.sno} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                            {String(ia.sno).padStart(2, "0")}
                          </td>
                          <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-sm">
                            {ia.eventName}
                          </td>
                          <td className="py-3.5 px-4 font-mono font-semibold text-foreground text-xs whitespace-nowrap">
                            {ia.date}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground/85 leading-relaxed">
                            {ia.resourcePerson}
                          </td>
                          <td className="py-3.5 px-4 text-right font-mono font-semibold text-foreground text-xs whitespace-nowrap">
                            {ia.participants}
                          </td>
                        </tr>
                      ))}

                    {/* SAE Activities */}
                    {activeSociety.saeActivities && activeSociety.saeActivities.length > 0 &&
                      activeSociety.saeActivities.map((sa) => (
                        <tr key={sa.sno} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                            {String(sa.sno).padStart(2, "0")}
                          </td>
                          <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-sm">
                            {sa.eventTitle}
                          </td>
                          <td className="py-3.5 px-4 font-mono font-semibold text-foreground text-xs whitespace-nowrap">
                            {sa.date}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground/85 leading-relaxed">
                            {sa.typeOfEvent}
                          </td>
                          <td className="py-3.5 px-4 text-right font-mono font-semibold text-foreground text-xs whitespace-nowrap">
                            Active Chapter
                          </td>
                        </tr>
                      ))}

                    {/* ISHRAE Activities */}
                    {activeSociety.ishraeActivities && activeSociety.ishraeActivities.length > 0 &&
                      activeSociety.ishraeActivities.map((ishAct) => (
                        <tr key={ishAct.sno} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                            {String(ishAct.sno).padStart(2, "0")}
                          </td>
                          <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-sm">
                            {ishAct.activityTitle}
                          </td>
                          <td className="py-3.5 px-4 font-mono font-semibold text-foreground text-xs whitespace-nowrap">
                            Annual Cycle
                          </td>
                          <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground/85 leading-relaxed">
                            {ishAct.keyMandate}
                          </td>
                          <td className="py-3.5 px-4 text-right font-mono font-semibold text-foreground text-xs whitespace-nowrap">
                            Student Delegates
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
        <section className="py-5 sm:py-7 md:py-8 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
          <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-3 sm:mb-4">
              Professional Membership Privileges &amp; Industry Pathways
            </h2>

            {/* Clean Open Editorial List */}
            <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full">
              {membershipPrivileges.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3.5 sm:py-4 px-1 sm:px-3 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 hover:bg-foreground/[0.015] transition-colors w-full"
                >
                  <div className="md:w-80 shrink-0 flex items-center gap-3">
                    <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs sm:text-sm border border-foreground/20">
                      0{idx + 1}
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
