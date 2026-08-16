import { Link } from "@tanstack/react-router";

const levels = [
  { label: "Undergraduates", to: "/academics" },
  { label: "Postgraduates", to: "/academics" },
  { label: "Professional & Continuing Education", to: "/academics" },
] as const;

export function AcademicProgrammesSection() {
  return (
    <>
      {/* Spacer to prevent margin collapse with the recruiter marquee */}
      <div className="h-16 w-full bg-transparent md:h-24 lg:h-32" />

      <section
        id="academic-programmes"
        className="relative w-full bg-sand pt-16 pb-16 text-sand-foreground lg:pt-20 lg:pb-24"
      >
        <div className="mx-auto w-full max-w-[1440px] px-8 md:px-16">
          <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:gap-16 xl:gap-20">
            {/* Left image */}
            <div className="relative h-[400px] w-full shrink-0 lg:h-[600px] lg:w-[44%]">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                alt="MSAJCE students collaborating in a classroom"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Right content */}
            <div className="flex w-full flex-col justify-center lg:w-[56%]">
              <span className="text-sm font-bold tracking-wide">Studying at MSAJCE</span>

              <h2 className="mt-4 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem]">
                Shape Your Future with
                <br />
                MSAJCE&rsquo;s Industry-relevant Programmes
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-relaxed opacity-70">
                Our innovative curriculum equips students with critical thinking, leadership skills, and a
                global perspective, preparing them to excel in diverse, rapidly evolving industries.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/academics"
                  className="border-2 border-current px-6 py-3.5 text-sm font-bold transition-colors hover:bg-sand-foreground hover:text-sand"
                >
                  Find a Programme &raquo;
                </Link>
                <Link
                  to="/admissions"
                  className="border-2 border-current px-6 py-3.5 text-sm font-bold transition-colors hover:bg-sand-foreground hover:text-sand"
                >
                  Admissions Information &raquo;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom banner */}
        <div className="mx-auto mt-12 flex w-full max-w-[1440px] justify-start px-8 md:px-16 lg:mt-16">
          <div className="flex w-full flex-col items-start justify-between gap-6 border-t-[6px] border-navy bg-clay p-6 text-clay-foreground md:p-8 lg:p-10 xl:flex-row xl:items-center">
            <h3 className="max-w-sm text-xl font-bold leading-tight md:text-2xl">
              Explore programmes by academic levels
            </h3>

            <div className="flex flex-wrap items-center gap-3">
              {levels.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="border border-clay-foreground/50 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-clay-foreground hover:text-clay"
                >
                  {l.label} &raquo;
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
