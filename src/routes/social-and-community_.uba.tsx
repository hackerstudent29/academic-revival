import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SecondarySubNav } from "@/components/layout/SecondarySubNav";
import { socialCommunityTabs } from "./social-and-community_.nss";

const title = "Unnat Bharat Abhiyan (UBA) | Social & Community | MSAJCE";
const description =
  "Official Unnat Bharat Abhiyan (UBA) cell at Mohamed Sathak A.J. College of Engineering. Connecting engineering intellect with rural India through village adoption, water management, sustainable energy, and grass-root innovation.";

export const Route = createFileRoute("/social-and-community_/uba")({
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
  component: UBAPage,
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

function UBAPage() {
  const navigate = useNavigate();

  const handleSelectTab = (tabId: string) => {
    if (tabId === "uba") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    navigate({ to: `/social-and-community/${tabId}` });
  };

  const ubaThemes = [
    {
      code: "T1",
      title: "Sustainable Agriculture & Organic Systems",
      desc: "Promoting natural farming methods, eco-friendly fertilizers, soil fertility conservation, and cost-effective post-harvest storage techniques.",
    },
    {
      code: "T2",
      title: "Water Management & Rainwater Harvesting",
      desc: "Implementing rural watershed development, pond rejuvenation, purification infrastructure, and groundwater recharge systems.",
    },
    {
      code: "T3",
      title: "Renewable Energy & Solar Electrification",
      desc: "Deploying solar street lighting, biomass utilization, clean cookstove technologies, and energy-efficient rural appliances.",
    },
    {
      code: "T4",
      title: "Artisans, Livelihood & Basic Infrastructure",
      desc: "Upgrading local artisan tools, supporting rural women self-help groups (SHGs), and improving government school digital access.",
    },
  ];

  const ubaInterventions = [
    {
      title: "Adopted Village Cluster Baseline Surveys",
      category: "Field Research",
      detail:
        "Comprehensive household and village-level socio-economic surveys across adopted Gram Panchayats to diagnose civic challenges and technological gaps.",
    },
    {
      title: "Drinking Water Testing & Sanitation Upgradation",
      category: "Sanitation",
      detail:
        "Routine chemical and biological water quality analysis in village borewells, establishing filtration units, and promoting community hygiene standards.",
    },
    {
      title: "Smart Village Rural Technology Demonstrations",
      category: "Engineering Outreach",
      detail:
        "Engineering student projects providing low-cost agricultural sensors, drip irrigation automation, and eco-friendly waste management setups.",
    },
    {
      title: "Skill Development & Livelihood Workshops",
      category: "Capacity Building",
      detail:
        "Hands-on vocational training, digital payment onboarding, and government welfare scheme facilitation for rural youth and agricultural workers.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground pt-0 md:pt-1">
      {/* SECONDARY SUB-NAV HEADER */}
      <SecondarySubNav
        title="SOCIAL & COMMUNITY"
        tabs={socialCommunityTabs}
        activeTab="uba"
        onSelectTab={handleSelectTab}
        onTitleClick={() => handleSelectTab("uba")}
      />

      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Standard MSAJCE Hero (Docked Flush at Bottom)             */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_dsc6419.jpg"
            alt="Unnat Bharat Abhiyan (UBA) at Mohamed Sathak A.J. College of Engineering"
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
              Unnat Bharat Abhiyan (UBA)
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION A: Primary Canvas (White / #121214) — Overview & Mandate       */}
      {/* ========================================================================= */}
      <section className="pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-12 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Transforming Rural India Through Technical Intellect
            </h2>
          </div>

          <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
            Unnat Bharat Abhiyan (UBA) is a flagship national program of the Ministry of Education, Government of India. At Mohamed Sathak A. J. College of Engineering, UBA catalyzes institutional technical expertise to partner with rural communities, enabling holistic, sustainable economic development through grassroots engineering solutions and indigenous knowledge systems.
          </p>

          {/* Core Thematic Pillars */}
          <div className="space-y-3 pt-2">
            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
              Core Thematic Development Pillars
            </h3>
            <div className="divide-y divide-border/40 font-libre">
              {ubaThemes.map((th) => (
                <div
                  key={th.code}
                  className="py-3.5 sm:py-4 px-1 sm:px-2 flex items-start gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors"
                >
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs sm:text-sm mt-0.5 border border-foreground/20 shadow-2xs">
                    {th.code}
                  </span>
                  <div className="space-y-1 flex-1">
                    <h4 className="font-oswald font-bold text-sm sm:text-base text-foreground uppercase tracking-tight">
                      {th.title}
                    </h4>
                    <p className="w-full text-xs sm:text-sm text-foreground/80 font-libre leading-relaxed">
                      {th.desc}
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
      {/* 3. SECTION B: Secondary Canvas (#F3F3F2 / #18181B) — Grassroot Projects   */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Village Interventions &amp; Grassroot Projects
            </h2>
          </div>

          <div className="divide-y divide-border/40 font-libre">
            {ubaInterventions.map((act, idx) => (
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
