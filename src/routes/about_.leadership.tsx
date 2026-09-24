import { createFileRoute } from "@tanstack/react-router";

const title = "Leadership Message — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official message from Dr. K.S. Srinivasan Ph.D, Principal of Mohamed Sathak A.J. College of Engineering, to parents and prospective students.";

export const Route = createFileRoute("/about_/leadership")({
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
  component: LeadershipPage,
});

export function LeadershipPage() {
  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased min-h-screen selection:bg-primary selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Title Docked Flush with Hero Section End                  */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/procedure_hero.jpg"
            alt="Mohamed Sathak A.J. College of Engineering Campus Architecture"
            className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
            }}
          />
          {/* Subtle gradient overlay for depth and title legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        {/* Title Container: Docked Flush at Bottom of Hero with Correct Container Alignment */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-0">
          <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
              Leadership Message
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PRINCIPAL'S ADDRESS: Clean Editorial Structure (No Unwanted Lines)     */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start">
            {/* Left Column: Authentic Photo & Credentials */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="relative w-full rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm overflow-hidden shadow-xl bg-muted border border-border/40 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3]">
                <img
                  src="/images/about/principal.jpg"
                  alt="Dr. K.S. Srinivasan Ph.D, Principal"
                  className="w-full h-full object-cover pointer-events-none select-none"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                  }}
                />
              </div>

              <div className="pt-1">
                <h3 className="text-lg sm:text-xl font-black font-oswald uppercase tracking-tight text-foreground">
                  Dr. K.S. Srinivasan Ph.D
                </h3>
                <p className="font-libre text-xs sm:text-sm font-medium text-foreground/75 mt-0.5">
                  Principal, Mohamed Sathak A.J. College of Engineering
                </p>
              </div>
            </div>

            {/* Right Column: Structured Narrative Content */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-tight text-primary leading-tight">
                Dear Parents and Prospective Students
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                  As Principal, I am impressed by the commitment of our management and the faculty
                  for the provision of an excellent all-round education with state of the art
                  facilities to our students so that they become multidimensional rather than
                  uni-dimensional. Acquiring information is no longer the main focus of education;
                  instead the main aim of education is to build the powers of human mind and spirit.
                  MSAJCE believes in providing our students an environment which is rich in
                  knowledge and supportive for their extra curricular interests. We evaluate our
                  students on the basis of their physical, mental, social, emotional and
                  intellectual development. As a result, I assure that, MSAJCE is dedicated to
                  developing skilled and outstanding students who can pursue their interest and
                  strength to the best of their ability. As a result our enriched students will be
                  able to actively face Industry 4.0 challenges as well as build a strong society
                  for a better world. To meet these needs, we practice a holistic approach with
                  enabled new structure that stimulates the young minds in terms of innovative and
                  creative thinking with great freedom to learn with different perceptiveness.
                </p>
                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                  I welcome you all and wish a Memorable Studentship. I hope you will able to
                  achieve greater heights and bring laurels our Institute.
                </p>
              </div>

              {/* Structured Valediction */}
              <div className="pt-4 flex flex-col items-end text-right space-y-0.5">
                <span className="font-libre text-sm sm:text-base font-semibold text-foreground/90">
                  Best Wishes
                </span>
                <span className="font-oswald font-black text-lg sm:text-xl text-primary uppercase tracking-tight">
                  Dr. K.S. Srinivasan Ph.D
                </span>
                <span className="font-libre text-xs sm:text-sm font-medium text-foreground/75">
                  Principal
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
