import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SecondarySubNav } from "@/components/layout/SecondarySubNav";
import { DataGridContainer } from "@/components/ui/data-grid-table";
import { ExternalLink } from "lucide-react";
import { socialCommunityTabs } from "./social-and-community_.nss";

const title = "Ek Bharat Shreshtha Bharat (EBSB) | Social & Community | MSAJCE";
const description =
  "Official Ek Bharat Shreshtha Bharat (EBSB) initiative at Mohamed Sathak A.J. College of Engineering. Celebrating national unity in diversity through state-pairing cultural exchanges between Tamil Nadu and Jammu & Kashmir.";

export const Route = createFileRoute("/social-and-community_/ebsb")({
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
  component: EBSBPage,
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

interface EBSBProgram {
  sNo: number;
  activity: string;
  partnerInstitution: string;
  weblink: string;
  linkText: string;
}

const ebsbPrograms: EBSBProgram[] = [
  {
    sNo: 1,
    activity:
      "Cultural Exchange Program Under Ek Bharath Shreshtha Bharath & Azadi Ka Amrit Mahotsav",
    partnerInstitution:
      "SSM College of Engineering, Parihaspora, Pattan, Baramulla, Jammu & Kashmir",
    weblink:
      "https://ekbharat.gov.in/activitycompleted/statepair_activity?statepair=Tamil+Nadu+%3a++Jammu-Kashmir+and+Ladakh&page=3",
    linkText: "National Portal",
  },
  {
    sNo: 2,
    activity:
      "Winter Iconic destination-Gulmarg Kashmir & Traditional Art of Kashmir (Carpet Weaving)",
    partnerInstitution:
      "SSM College of Engineering, Parihaspora, Pattan, Baramulla, Jammu & Kashmir",
    weblink:
      "https://drive.google.com/file/d/1-YxlhVjgN0SWfHJ3OcTBjrmvaadGgn5w/view?usp=share_link",
    linkText: "View Documentation",
  },
];

const ebsbObjectives = [
  {
    code: "O1",
    title: "Celebrate Unity in Diversity",
    desc: "To celebrate the idea of India as a nation wherein diverse linguistic, cultural and religious threads are held together into a composite national identity, strengthening the traditionally existing emotional bonds between the people of different regions.",
  },
  {
    code: "O2",
    title: "Promote National Integration",
    desc: "To foster the spirit of national integration through a sustained and structured cultural connect between denizens of different regions across paired States and Union Territories.",
  },
  {
    code: "O3",
    title: "Showcase Rich Heritage & Traditions",
    desc: "To showcase the rich heritage, customs, traditions, language, music, tourism, handicrafts, and cuisine of paired States, enabling student engineers to appreciate India's cultural richness and develop a shared sense of common identity.",
  },
  {
    code: "O4",
    title: "Establish Long-Term Institutional Engagements",
    desc: "To create an environment which promotes long-term engagements between paired educational institutions, encouraging academic exchanges, joint youth symposiums, and cultural dialogues.",
  },
  {
    code: "O5",
    title: "Promote Mutual Learning & Best Practices",
    desc: "To build an environment that encourages mutual learning between States by sharing experiences, educational innovations, and technical best practices across state borders.",
  },
];

function EBSBPage() {
  const navigate = useNavigate();

  const handleSelectTab = (tabId: string) => {
    if (tabId === "ebsb") {
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
        activeTab="ebsb"
        onSelectTab={handleSelectTab}
        onTitleClick={() => handleSelectTab("ebsb")}
      />

      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Standard MSAJCE Hero (Docked Flush at Bottom)             */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_dsc6470.jpg"
            alt="Ek Bharat Shreshtha Bharat (EBSB) at Mohamed Sathak A.J. College of Engineering"
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
              Ek Bharat Shreshtha Bharat (EBSB)
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
              About Ek Bharat Shreshtha Bharat
            </h2>
          </div>

          {/* Full-Length Editorial Text Layout */}
          <div className="w-full space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
            <p>
              Ek Bharat Shreshtha Bharat is an initiative launched by the Government of India to enhance unity in diversity of our nation India. EBSB was launched by Prime Minister Shri Narendra Modi during the Rashtriya Ekta Divas held on 31st October, 2015, to commemorate the birth anniversary of Sardar Vallabhbhai Patel to establish a sustained and structured cultural connect between denizens of different regions of India.
            </p>
            <p>
              India is a unique nation, whose fabric has been woven by diverse linguistic, cultural and religious threads, held together into a composite national identity by a rich history of cultural evolution.
            </p>
            <p>
              Ek Bharat Shreshtha Bharat programme aims to enhance interaction &amp; promote mutual understanding between people of different states/UTs through the concept of state/UT pairing. The states carry out activities to promote a sustained and structured cultural connect in the areas of language learning, culture, traditions &amp; music, tourism &amp; cuisine, sports and sharing of best practices, etc. Tamilnadu is paired with Jammu-Kashmir.
            </p>
          </div>

          {/* Institutional State Pairing Banner */}
          <div className="w-full p-4 sm:p-6 bg-foreground/[0.02] dark:bg-white/[0.02] border-l-4 border-primary border-t border-r border-b border-border/60 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-bold font-oswald uppercase tracking-widest text-primary">
                National State Pairing Mandate
              </span>
              <span className="text-xs font-mono font-bold text-muted-foreground">
                Tamil Nadu ⇄ Jammu &amp; Kashmir and Ladakh
              </span>
            </div>
            <p className="w-full text-xs sm:text-sm text-foreground font-libre leading-relaxed">
              <strong className="font-semibold text-foreground">Partner Institutional Framework:</strong> Mohamed Sathak A. J. College of Engineering, Chennai has conducted collaborative programmes with <strong className="font-semibold text-foreground">SSM College of Engineering, Parihaspora, Pattan, Baramulla, Jammu &amp; Kashmir</strong> under the Ek Bharat Shreshtha Bharat initiative.
            </p>
          </div>

          {/* Strategic Objectives */}
          <div className="space-y-3 pt-2">
            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
              Objectives of the Programme
            </h3>
            <div className="divide-y divide-border/40 font-libre">
              {ebsbObjectives.map((obj) => (
                <div
                  key={obj.code}
                  className="py-3.5 sm:py-4 px-1 sm:px-2 flex items-start gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors"
                >
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs sm:text-sm mt-0.5 border border-foreground/20 shadow-2xs">
                    {obj.code}
                  </span>
                  <div className="space-y-1 flex-1">
                    <h4 className="font-oswald font-bold text-sm sm:text-base text-foreground uppercase tracking-tight">
                      {obj.title}
                    </h4>
                    <p className="w-full text-xs sm:text-sm text-foreground/80 font-libre leading-relaxed">
                      {obj.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider A -> B */}
      <WaveDividerAB />

      {/* ========================================================================= */}
      {/* 3. SECTION B: Secondary Canvas (#F3F3F2 / #18181B) — Conducted Activities */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                Programmes Conducted Under EBSB
              </h2>
            </div>
            <span className="font-mono text-xs font-bold text-muted-foreground">
              Showing {ebsbPrograms.length} Completed Programmes
            </span>
          </div>

          <p className="w-full text-xs sm:text-sm text-foreground/90 font-libre font-medium leading-relaxed">
            Mohamed Sathak A J College of Engineering, Chennai has conducted 2 programmes with SSM College of Engineering, Parihaspora, Pattan, Baramulla, JK under EBSB.
          </p>

          {/* Publications Standard DataGrid Table */}
          <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
            <div className="overflow-x-auto bg-transparent">
              <table className="w-full text-left border-collapse min-w-[700px] text-xs sm:text-sm">
                <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                  <tr>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-20 text-center">
                      S.No.
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                      Activity
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                      Partner Institution
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right w-44">
                      Weblink
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 font-libre">
                  {ebsbPrograms.map((prog) => (
                    <tr
                      key={prog.sNo}
                      className="hover:bg-foreground/[0.02] transition-colors"
                    >
                      <td className="py-4 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                        {String(prog.sNo).padStart(2, "0")}
                      </td>
                      <td className="py-4 px-4">
                        <p className="font-libre text-xs sm:text-sm text-foreground font-semibold leading-relaxed">
                          {prog.activity}
                        </p>
                      </td>
                      <td className="py-4 px-4">
                        <p className="font-libre text-xs text-foreground/80 leading-relaxed">
                          {prog.partnerInstitution}
                        </p>
                      </td>
                      <td className="py-4 px-4 text-right whitespace-nowrap">
                        <a
                          href={prog.weblink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold font-oswald uppercase tracking-wider rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-primary text-white hover:bg-primary/90 transition-colors shadow-2xs"
                        >
                          <span>{prog.linkText}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
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
