import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SecondarySubNav } from "@/components/layout/SecondarySubNav";
import { socialCommunityTabs } from "./social-and-community_.nss";

const title = "Youth Red Cross (YRC) | Social & Community | MSAJCE";
const description =
  "Official Youth Red Cross (YRC) unit at Mohamed Sathak A.J. College of Engineering. Promoting health, hygiene, emergency first-aid readiness, voluntary blood donation, and international humanitarian service.";

export const Route = createFileRoute("/social-and-community_/yrc")({
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
  component: YRCPage,
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

function YRCPage() {
  const navigate = useNavigate();

  const handleSelectTab = (tabId: string) => {
    if (tabId === "yrc") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    navigate({ to: `/social-and-community/${tabId}` });
  };

  const yrcPrinciples = [
    {
      code: "P1",
      title: "Protection of Health & Life",
      desc: "Promoting hygiene, disease prevention awareness, nutrition education, and personal safety practices among youth and local communities.",
    },
    {
      code: "P2",
      title: "Service to the Sick & Suffering",
      desc: "Extending compassionate assistance, first-aid support, and emergency medical relief to vulnerable populations without discrimination.",
    },
    {
      code: "P3",
      title: "Promotion of National & International Friendship",
      desc: "Cultivating universal fellowship, mutual understanding, tolerance, and human dignity across regional, social, and cultural barriers.",
    },
    {
      code: "P4",
      title: "Disaster Preparedness & Relief",
      desc: "Equipping student volunteers with certified emergency response, rescue coordination, and humanitarian relief capabilities during crises.",
    },
  ];

  const yrcActivities = [
    {
      title: "Certified Emergency First-Aid & CPR Workshops",
      category: "Life Safety",
      detail:
        "Practical certified training sessions conducted in collaboration with the Indian Red Cross Society (IRCS), equipping volunteers with vital life-support techniques.",
    },
    {
      title: "Voluntary Blood Donation & Typing Camps",
      category: "Healthcare",
      detail:
        "Periodic donor recruitment, blood grouping drives, and emergency on-call blood supply linkages for critical medical institutions and rural hospitals.",
    },
    {
      title: "Community Health & Hygiene Outreach",
      category: "Sanitation",
      detail:
        "Medical screening camps, eye-care clinics, oral hygiene drives, and communicable disease prevention campaigns organized for neighboring suburban and rural areas.",
    },
    {
      title: "Disaster Management & Fire Safety Drills",
      category: "Emergency Readiness",
      detail:
        "Hands-on mock rescue simulations, fire evacuation drills, and industrial safety awareness sessions organized in coordination with state emergency services.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground pt-0 md:pt-1">
      {/* SECONDARY SUB-NAV HEADER */}
      <SecondarySubNav
        title="SOCIAL & COMMUNITY"
        tabs={socialCommunityTabs}
        activeTab="yrc"
        onSelectTab={handleSelectTab}
        onTitleClick={() => handleSelectTab("yrc")}
      />

      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Standard MSAJCE Hero (Docked Flush at Bottom)             */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_dsc6410.jpg"
            alt="Youth Red Cross (YRC) at Mohamed Sathak A.J. College of Engineering"
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
              Youth Red Cross (YRC)
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION A: Primary Canvas (White / #121214) — Overview & Principles    */}
      {/* ========================================================================= */}
      <section className="pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-12 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Motto: Through Humanity to Peace
            </h2>
          </div>

          <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
            The Youth Red Cross (YRC) wing of Mohamed Sathak A. J. College of Engineering is an integral chapter of the Indian Red Cross Society (IRCS). Dedicated to instilling humanitarian spirit, emergency medical alertness, and compassionate service among engineering youth, YRC trains students to act decisively during medical crises and societal emergencies.
          </p>

          {/* Guiding Principles */}
          <div className="space-y-3 pt-2">
            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
              Guiding Principles &amp; Focus Areas
            </h3>
            <div className="divide-y divide-border/40 font-libre">
              {yrcPrinciples.map((pr) => (
                <div
                  key={pr.code}
                  className="py-3.5 sm:py-4 px-1 sm:px-2 flex items-start gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors"
                >
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs sm:text-sm mt-0.5 border border-foreground/20 shadow-2xs">
                    {pr.code}
                  </span>
                  <div className="space-y-1 flex-1">
                    <h4 className="font-oswald font-bold text-sm sm:text-base text-foreground uppercase tracking-tight">
                      {pr.title}
                    </h4>
                    <p className="w-full text-xs sm:text-sm text-foreground/80 font-libre leading-relaxed">
                      {pr.desc}
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
      {/* 3. SECTION B: Secondary Canvas (#F3F3F2 / #18181B) — Campaigns & Drives   */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Humanitarian Campaigns &amp; Health Drives
            </h2>
          </div>

          <div className="divide-y divide-border/40 font-libre">
            {yrcActivities.map((act, idx) => (
              <div
                key={idx}
                className="py-4 sm:py-5 px-1 sm:px-2 flex items-start gap-4 hover:bg-foreground/[0.02] transition-colors"
              >
                <span className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-oswald font-bold text-base sm:text-lg text-foreground uppercase tracking-tight">
                      {act.title}
                    </h3>
                    <span className="text-[11px] font-bold font-oswald uppercase tracking-wider px-2 py-0.5 rounded-tl-md rounded-br-md rounded-tr-2xs rounded-bl-2xs bg-primary/10 text-primary border border-primary/20">
                      {act.category}
                    </span>
                  </div>
                  <p className="w-full text-xs sm:text-sm text-foreground/80 font-libre leading-relaxed">
                    {act.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
