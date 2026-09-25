import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SecondarySubNav } from "@/components/layout/SecondarySubNav";
import { socialCommunityTabs } from "./social-and-community_.nss";

const title = "Unnat Bharat Abhiyan (UBA) | Social & Community | MSAJCE";
const description =
  "Official Unnat Bharat Abhiyan (UBA) cell at Mohamed Sathak A.J. College of Engineering. Inspired by the Gandhian vision of self-sufficient village republics, connecting higher education with rural communities for transformational development.";

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

const ubaTransformationalPillars = [
  {
    code: "U1",
    title: "Connecting Higher Education with Local Communities",
    desc: "Enabling active processes that connect engineering and knowledge institutions directly with rural villages to address grass-root developmental challenges.",
  },
  {
    code: "U2",
    title: "Decentralized, Eco-Friendly Technologies",
    desc: "Deploying local resource-based, sustainable, and eco-friendly technologies to substitute centralized, polluting developmental paradigms.",
  },
  {
    code: "U3",
    title: "Self-Sufficient 'Village Republics'",
    desc: "Revitalizing the Gandhian vision where the basic needs of food, clothing, shelter, sanitation, healthcare, energy, livelihood, transportation, and education are locally met.",
  },
  {
    code: "U4",
    title: "Participatory Problem Solving",
    desc: "Engaging rural community members and local panchayat leadership in participatory diagnosis and co-creation of engineering solutions.",
  },
  {
    code: "U5",
    title: "Accelerating Sustainable & Inclusive Growth",
    desc: "Bridging the acute developmental disconnect between urban and rural areas to construct the architecture of an inclusive, self-reliant India.",
  },
];

const basicNeeds = [
  { need: "Food & Agriculture", focus: "Sustainable farming, soil fertility conservation & organic practices" },
  { need: "Clean Water & Sanitation", focus: "Groundwater recharge, water testing, filtration & village hygiene" },
  { need: "Renewable Energy", focus: "Solar street lighting, energy audits & clean domestic cookstoves" },
  { need: "Livelihood & Skills", focus: "Artisan tool modernization, SHG capacity building & youth vocations" },
  { need: "Healthcare & Wellness", focus: "Preventive health screening, mobile clinics & telemedicine support" },
  { need: "Eco-Friendly Shelter", focus: "Low-cost vernacular materials, thermal comfort & rural civil planning" },
  { need: "Transportation & Connectivity", focus: "All-weather village roads, mobility planning & digital infrastructure" },
  { need: "Digital & School Education", focus: "Computer literacy, smart classrooms & STEM mentorship for rural schools" },
];

function UBAPage() {
  const navigate = useNavigate();

  const handleSelectTab = (tabId: string) => {
    if (tabId === "uba") {
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
      {/* 2. SECTION A: Primary Canvas (White / #121214) — Overview & Philosophy    */}
      {/* ========================================================================= */}
      <section className="pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-12 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Transformational Change in Rural Development
            </h2>
          </div>

          {/* Full-Length Editorial Text Layout with User's Exact Content */}
          <div className="w-full space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
            <p>
              As foreseen by Gandhi Ji in his seminal work, &apos;Hind Swaraj&apos;, the western developmental paradigm, based on centralized technologies and urbanization, has given rise to serious problems like increasing inequity (leading to crime and violence), and climate change due to rapid ecological degradation. To ameliorate these problems, it is necessary to promote development of rural areas in tune with Gandhian vision of self-sufficient &apos;village republics&apos;, based on local resources and using decentralized, eco-friendly technologies so that the basic needs of food, clothing, shelter, sanitation, health care, energy, livelihood, transportation, and education are locally met.
            </p>
            <p>
              There are huge developmental disconnects between the rural and urban. Increasing urbanization is neither sustainable nor desirable. Unnat Bharat Abhiyan is inspired by the vision of transformational change in rural development processes by leveraging knowledge institutions to help build the architecture of an Inclusive India.
            </p>
            <p>
              Their mission is conceptualised as a movement to enable processes that connect institutes of higher education with local communities to address the development challenges of rural India through participatory processes and appropriate technologies for accelerating sustainable growth.
            </p>
          </div>

          {/* Core Transformational Pillars */}
          <div className="space-y-3 pt-2">
            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
              Core Transformational Pillars
            </h3>
            <div className="divide-y divide-border/40 font-libre">
              {ubaTransformationalPillars.map((pillar) => (
                <div
                  key={pillar.code}
                  className="py-3.5 sm:py-4 px-1 sm:px-2 flex items-start gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors"
                >
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs sm:text-sm mt-0.5 border border-foreground/20 shadow-2xs">
                    {pillar.code}
                  </span>
                  <div className="space-y-1 flex-1">
                    <h4 className="font-oswald font-bold text-sm sm:text-base text-foreground uppercase tracking-tight">
                      {pillar.title}
                    </h4>
                    <p className="w-full text-xs sm:text-sm text-foreground/80 font-libre leading-relaxed">
                      {pillar.desc}
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
      {/* 3. SECTION B: Secondary Canvas (#F3F3F2 / #18181B) — Rural Basic Needs    */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Locally Met Basic Needs Framework
            </h2>
          </div>

          <p className="w-full text-xs sm:text-sm text-foreground/90 font-libre font-medium leading-relaxed">
            In tune with the Gandhian vision of self-sufficient &apos;village republics&apos;, UBA focuses on ensuring that essential human necessities are sustainably and locally met through decentralized engineering interventions:
          </p>

          <div className="divide-y divide-border/40 font-libre">
            {basicNeeds.map((item, idx) => (
              <div
                key={idx}
                className="py-3.5 sm:py-4 px-1 sm:px-2 flex items-start gap-4 hover:bg-foreground/[0.02] transition-colors"
              >
                <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="space-y-1 flex-1">
                  <h3 className="font-oswald font-bold text-base text-foreground uppercase tracking-tight">
                    {item.need}
                  </h3>
                  <p className="w-full text-xs sm:text-sm text-foreground/80 font-libre leading-relaxed">
                    {item.focus}
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
