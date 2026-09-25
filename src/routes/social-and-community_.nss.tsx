import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SecondarySubNav, type SubNavTab } from "@/components/layout/SecondarySubNav";
import { DataGridContainer } from "@/components/ui/data-grid-table";
import { RedirectButton } from "@/components/ui/redirect-button";
import { FileText, ExternalLink } from "lucide-react";

const title = "National Service Scheme (NSS) | Social & Community | MSAJCE";
const description =
  "Official National Service Scheme (NSS) unit at Mohamed Sathak A.J. College of Engineering. Established in 2001 to promote selfless service, personality development through community outreach, and social welfare in and around Chennai.";

export const socialCommunityTabs: SubNavTab[] = [
  { id: "nss", label: "National Service Scheme (NSS)" },
  { id: "yrc", label: "Youth Red Cross (YRC)" },
  { id: "uba", label: "Unnat Bharat Abhiyan (UBA)" },
  { id: "ebsb", label: "EBSB Initiative" },
  { id: "karma", label: "AICTE KARMA" },
];

export const Route = createFileRoute("/social-and-community_/nss")({
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
  component: NSSPage,
});

/* Wave Divider Component: Section A -> Section B */
function WaveDividerAB() {
  return (
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
  );
}

interface NSSEvent {
  sNo: number;
  activity: string;
  date: string;
  reportUrl: string;
}

const nssEvents: NSSEvent[] = [
  {
    sNo: 1,
    activity: "Tobacco Awareness Rally",
    date: "26.06.2023",
    reportUrl: "https://www.msajce-edu.in/uploads/nss/01TobaccoAwareness.pdf",
  },
  {
    sNo: 2,
    activity: "Eye Screening Camp",
    date: "26.06.2023",
    reportUrl: "https://www.msajce-edu.in/uploads/nss/02EyeScreening.pdf",
  },
  {
    sNo: 3,
    activity: "International Yoga Day",
    date: "21.06.2023",
    reportUrl: "https://www.msajce-edu.in/uploads/nss/03YogaDay.pdf",
  },
  {
    sNo: 4,
    activity: "Motivational Speech",
    date: "09.06.2023",
    reportUrl: "https://www.msajce-edu.in/uploads/nss/04MotivationalSpeech.pdf",
  },
  {
    sNo: 5,
    activity: "Cancer Awareness Rally",
    date: "31.05.2023",
    reportUrl: "https://www.msajce-edu.in/uploads/nss/05CancerAwareness.pdf",
  },
  {
    sNo: 6,
    activity: "Blood Donation Camp",
    date: "17.05.2023",
    reportUrl: "https://www.msajce-edu.in/uploads/nss/06BloodDonation.pdf",
  },
  {
    sNo: 7,
    activity: "Kavalan SOS App Awareness Program",
    date: "20.04.2023",
    reportUrl: "https://www.msajce-edu.in/uploads/nss/07KavalanSOS.pdf",
  },
  {
    sNo: 8,
    activity: "Financial Education Program of NCFE",
    date: "16.03.2023",
    reportUrl: "https://www.msajce-edu.in/uploads/nss/08NCFE.pdf",
  },
  {
    sNo: 9,
    activity: "Drug Awareness Program for School Students",
    date: "10.02.2023",
    reportUrl: "https://www.msajce-edu.in/uploads/nss/09DrugAwareness.pdf",
  },
  {
    sNo: 10,
    activity: "Voters Day Awareness Program",
    date: "25.01.2023",
    reportUrl: "https://www.msajce-edu.in/uploads/nss/10VotersDay.pdf",
  },
  {
    sNo: 11,
    activity: "Dental Health Awareness Camp",
    date: "11.01.2023",
    reportUrl: "https://www.msajce-edu.in/uploads/nss/11DentalHealth.pdf",
  },
  {
    sNo: 12,
    activity: "Driving License Awareness Camp",
    date: "12.12.2022 & 13.12.2022",
    reportUrl: "https://www.msajce-edu.in/uploads/nss/12DrivingLicense.pdf",
  },
];

const nssObjectives = [
  { code: "O1", desc: "To work for / among the people" },
  { code: "O2", desc: "To enhance the knowledge of themselves and the community" },
  { code: "O3", desc: "To apply their study to practical use in justifying at least some of the difficulties" },
  { code: "O4", desc: "To gain skill in the exercise of democratic leadership" },
  { code: "O5", desc: "To gain skills in program development to enable them for self-employment" },
  { code: "O6", desc: "To bridge the gap between the educated and the uneducated masses" },
  { code: "O7", desc: "To promote the will to serve the weaker section of the community" },
];

const nssDuties = [
  { code: "D1", desc: "To establish relationship with the society" },
  { code: "D2", desc: "To identify needs, problems and resources of the community and relate his learning experience towards finding solutions to the problems identified" },
  { code: "D3", desc: "Plan programs and execute them" },
  { code: "D4", desc: "Record the activities systematically and assess the progress periodically" },
];

const nssCodeOfConduct = [
  { code: "C1", desc: "All volunteers should work under the guidance of a group leader nominated by the program officer" },
  { code: "C2", desc: "All volunteers should make themselves worthy of the confidence and cooperation of the group / community leadership" },
  { code: "C3", desc: "Volunteers should scrupulously avoid entering into any controversial issues" },
  { code: "C4", desc: "Volunteers should keep day-to-day record of their activities / experience" },
  { code: "C5", desc: "It is obligatory on the part of every volunteer to wear the NSS BADGE while on work" },
];

const nationalDays = [
  "National Youth Day",
  "Independence Day & Republic Day",
  "Road Safety Week",
  "Orphanage visit",
  "Polio drops programmes",
  "Annual Special Camp",
  "Swachh Bharat Programmes",
  "Orientation & Inauguration of Regular Activities",
  "Blood Donation Camps, Eye Check-up & Dental Camps",
  "Tree Plantation Programs",
  "Motivation Program for School Students",
  "Voters / Election Awareness Camp",
  "Flood Relief Camp",
];

function NSSPage() {
  const navigate = useNavigate();

  const handleSelectTab = (tabId: string) => {
    if (tabId === "nss") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    navigate({ to: `/social-and-community/${tabId}` });
  };

  return (
    <main className="min-h-screen bg-background text-foreground pt-0 md:pt-1">
      {/* SECONDARY SUB-NAV HEADER */}
      <SecondarySubNav
        title="SOCIAL & COMMUNITY"
        tabs={socialCommunityTabs}
        activeTab="nss"
        onSelectTab={handleSelectTab}
        onTitleClick={() => handleSelectTab("nss")}
      />

      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Standard MSAJCE Hero (Docked Flush at Bottom)             */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_dsc6402.jpg"
            alt="National Service Scheme (NSS) at Mohamed Sathak A.J. College of Engineering"
            className="w-full h-full object-cover object-center brightness-[0.70] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-3.5 sm:px-6 md:px-8 xl:px-12 pt-14 sm:pt-18 md:pt-20 pb-0">
          <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-4 py-3 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
              National Service Scheme (NSS)
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION A: Primary Canvas (White / #121214) — Overview & Objectives   */}
      {/* ========================================================================= */}
      <section className="pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-12 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Personality Development Through Community Service
            </h2>
          </div>

          {/* Full-Length Editorial Text Layout */}
          <div className="w-full space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
            <p>
              With the goal to uphold the need of selfless service and to encourage the spirit of social service to &quot;Serve the downtrodden in the society&quot; and &quot;Personality Development through Community Service&quot; among the young students, Mohamed Sathak AJ College of Engineering (MSAJCE), Chennai, established National Service Scheme (NSS) at institute level in the year 2001. Presently, NSS unit of MSAJCE has over 100 active members from various disciplines of 1st year and 2nd year, working rigorously for the betterment of society in and around Chennai.
            </p>
            <p>
              Our NSS unit has carried out blood donation camps, Awareness programmes on &apos;Health and Hygiene&apos;, Consumer Rights, Environmental Protection, AIDS awareness programme etc.
            </p>
          </div>

          {/* Core Objectives List */}
          <div className="space-y-3 pt-2">
            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
              Objectives of NSS
            </h3>
            <div className="divide-y divide-border/40 font-libre">
              {nssObjectives.map((obj) => (
                <div
                  key={obj.code}
                  className="py-3 sm:py-3.5 px-1 sm:px-2 flex items-start gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors"
                >
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs sm:text-sm mt-0.5 border border-foreground/20 shadow-2xs">
                    {obj.code}
                  </span>
                  <p className="w-full text-xs sm:text-sm text-foreground font-libre leading-relaxed pt-1">
                    {obj.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Duties of NSS Volunteers */}
          <div className="space-y-3 pt-4">
            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
              Duties of NSS Volunteers
            </h3>
            <div className="divide-y divide-border/40 font-libre">
              {nssDuties.map((duty) => (
                <div
                  key={duty.code}
                  className="py-3 sm:py-3.5 px-1 sm:px-2 flex items-start gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors"
                >
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                    {duty.code}
                  </span>
                  <p className="w-full text-xs sm:text-sm text-foreground font-libre leading-relaxed pt-1">
                    {duty.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Code of Conduct */}
          <div className="space-y-3 pt-4">
            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
              Code of Conduct for NSS Volunteers
            </h3>
            <div className="divide-y divide-border/40 font-libre">
              {nssCodeOfConduct.map((item) => (
                <div
                  key={item.code}
                  className="py-3 sm:py-3.5 px-1 sm:px-2 flex items-start gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors"
                >
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs sm:text-sm mt-0.5 border border-foreground/20 shadow-2xs">
                    {item.code}
                  </span>
                  <p className="w-full text-xs sm:text-sm text-foreground font-libre leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider A -> B */}
      <WaveDividerAB />

      {/* ========================================================================= */}
      {/* 3. SECTION B: Secondary Canvas (#F3F3F2 / #18181B) — Events & Reports     */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Events Organized on Days of National Importance
            </h2>
          </div>

          {/* Observances Badges List */}
          <div className="flex flex-wrap gap-2.5">
            {nationalDays.map((day, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider font-oswald rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-stone-300 dark:border-neutral-700 bg-white dark:bg-[#121214] text-foreground shadow-2xs"
              >
                {day}
              </span>
            ))}
          </div>

          {/* NSS Events Table Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                NSS Activities &amp; Documentation Reports
              </h3>
            </div>
            <span className="font-mono text-xs font-bold text-muted-foreground">
              Showing {nssEvents.length} Official Events
            </span>
          </div>

          {/* Publications Standard DataGrid Table */}
          <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
            <div className="overflow-x-auto bg-transparent">
              <table className="w-full text-left border-collapse min-w-[700px] text-xs sm:text-sm">
                <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                  <tr>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                      S.No
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                      Name of the Activity
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-44">
                      Date
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right w-36">
                      Report
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 font-libre">
                  {nssEvents.map((event) => (
                    <tr
                      key={event.sNo}
                      className="hover:bg-foreground/[0.02] transition-colors"
                    >
                      <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                        {String(event.sNo).padStart(2, "0")}
                      </td>
                      <td className="py-3.5 px-4">
                        <p className="font-libre text-xs sm:text-sm text-foreground font-semibold leading-relaxed">
                          {event.activity}
                        </p>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap font-mono text-xs text-foreground/80">
                        {event.date}
                      </td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <RedirectButton
                          href={event.reportUrl}
                          label="View Report"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DataGridContainer>
        </div>
      </section>
    </main>
  );
}
