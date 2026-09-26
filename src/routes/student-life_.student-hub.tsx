import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { DataGridContainer } from "@/components/ui/data-grid-table";
import { studentHubAmenities } from "@/data/studentLife";

const title = "Student Hub & Campus Amenities | Campus Life | MSAJCE";
const description =
  "Explore the Student Hub at Mohamed Sathak A.J. College of Engineering: Student Activity Centre, Central Dining, Sports Complex, Residences, and Student Council.";

const campusWelfareServices = [
  {
    sno: 1,
    title: "Health & Wellness Clinic",
    category: "Medical & Health",
    tag: "24/7 Support",
    scope: "First-aid centre, resident nurse, visiting physicians, emergency ambulance service, and confidential student wellness support.",
  },
  {
    sno: 2,
    title: "Stationery & Reprographic Hub",
    category: "Academic Support",
    tag: "On-Campus",
    scope: "High-speed photocopying, spiral binding, engineering drawing materials, academic stationery, and technical poster printing.",
  },
  {
    sno: 3,
    title: "Student Counseling Desk",
    category: "Student Guidance",
    tag: "Confidential",
    scope: "One-on-one psychological counseling, academic stress management, peer mentorship, and personal guidance services.",
  },
];

const studentCouncilWings = [
  {
    sno: 1,
    wing: "Academic Affairs Wing",
    jurisdiction: "Liaises with academic leadership on curriculum feedback, library resources, and student study groups.",
    frequency: "Bi-weekly",
  },
  {
    sno: 2,
    wing: "Student Welfare & Amenities Wing",
    jurisdiction: "Monitors cafeteria hygiene, hostel facilities, campus transport logistics, and clinic readiness.",
    frequency: "Weekly",
  },
  {
    sno: 3,
    wing: "Cultural & Events Coordination",
    jurisdiction: "Coordinates inter-departmental competitions, college cultural festival, fine arts showcases, and open-mic sessions.",
    frequency: "Monthly",
  },
  {
    sno: 4,
    wing: "Sports & Fitness Committee",
    jurisdiction: "Coordinates inter-collegiate athletic tournaments, annual sports day, and fitness facility operations.",
    frequency: "Fortnightly",
  },
];

const campusLivingGuidelines = [
  {
    title: "Academic Integrity & Community Respect",
    desc: "Upholding high ethical standards, intellectual honesty, mutual dignity, and inclusive fellowship across all student academic and recreational spheres.",
  },
  {
    title: "Campus Decorum & Safety Protocols",
    desc: "Strict adherence to safety standards, zero-tolerance policy towards harassment or ragging, respectful campus access timing, and emergency readiness.",
  },
  {
    title: "Eco-Conscious Campus Living",
    desc: "Active participation in sustainable resource management, campus cleanliness drives, energy efficiency practices, and plastic-free green zone compliance.",
  },
  {
    title: "Student Mentorship & Constructive Dialogue",
    desc: "Collaborative engagement with faculty mentors, constructive feedback via official council channels, and support for junior peer scholars.",
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

export const Route = createFileRoute("/student-life_/student-hub")({
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
  component: StudentHubPage,
});

function StudentHubPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#121214] text-foreground font-libre antialiased flex flex-col selection:bg-primary selection:text-white pt-0 md:pt-1">
      <div className="flex-1">
        {/* ========================================================================= */}
        {/* 2. DYNAMIC HERO BANNER: Institution-Style Theme-Adaptive Banner           */}
        {/* ========================================================================= */}
        <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
              alt="Student Hub at Mohamed Sathak A.J. College of Engineering"
              className="w-full h-full object-cover object-center brightness-[0.70] filter contrast-105 select-none pointer-events-none rounded-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
              }}
            />
            {/* Gradient Overlay for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          </div>

          {/* Title Container: Theme-Adaptive Frame Docked Flush at Bottom */}
          <div className="relative z-10 mx-auto max-w-[1440px] w-full px-3.5 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 md:pt-24 pb-0">
            <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 shadow-2xl max-w-full w-auto border-t border-r border-border dark:border-white/15">
              <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none whitespace-nowrap">
                Student Hub
              </h1>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. SECTION 1: Canvas A (White / #121214) — Campus Amenities & Facilities   */}
        {/* ========================================================================= */}
        <section className="py-5 sm:py-7 md:py-8 bg-white dark:bg-[#121214] transition-colors">
          <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-3 sm:mb-4">
              Campus Amenities &amp; Facilities
            </h2>

            {/* Editorial Amenities Showcase: Clean divider lines, flat static media, zero cards */}
            <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full">
              {studentHubAmenities.map((amenity) => (
                <div
                  key={amenity.id}
                  className="py-8 first:pt-4 last:pb-4 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start hover:bg-foreground/[0.015] transition-colors"
                >
                  {/* Clean Static Media Showcase: Flat, no hover zoom, minimal radius */}
                  <div className="lg:col-span-5 relative w-full aspect-[16/10] overflow-hidden rounded-md border border-border/40 bg-muted/20">
                    <img
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full h-full object-cover select-none pointer-events-none"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/eligibility_hero.jpg";
                      }}
                    />
                  </div>

                  {/* Amenity Narrative & Details */}
                  <div className="lg:col-span-7 space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                      {amenity.title}
                    </h3>

                    <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                      {amenity.description}
                    </p>

                    {/* Highlights Bullet List */}
                    <div className="pt-2">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {amenity.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm font-libre text-foreground/85">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wave Divider A -> B */}
        <WaveDividerAB />

        {/* ========================================================================= */}
        {/* 4. SECTION 2: Canvas B (#F3F3F2 / #18181B) — Welfare & Health Services     */}
        {/* ========================================================================= */}
        <section className="py-5 sm:py-7 md:py-8 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
          <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-3 sm:mb-4">
              Campus Welfare &amp; Health Services
            </h2>

            {/* Official Publications DataGrid Table */}
            <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
              <div className="overflow-x-auto bg-transparent">
                <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                  <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                    <tr>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                        S.No
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[200px]">
                        Service / Facility
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[150px]">
                        Category
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-32">
                        Availability
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                        Operational Scope &amp; Deliverables
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-libre">
                    {campusWelfareServices.map((service) => (
                      <tr key={service.sno} className="hover:bg-foreground/[0.02] transition-colors">
                        <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                          {String(service.sno).padStart(2, "0")}
                        </td>
                        <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-sm whitespace-nowrap">
                          {service.title}
                        </td>
                        <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground/80 whitespace-nowrap">
                          {service.category}
                        </td>
                        <td className="py-3.5 px-4 font-libre text-xs sm:text-sm whitespace-nowrap">
                          <span className="px-2.5 py-0.5 bg-primary/10 border border-primary/20 text-primary font-oswald uppercase text-xs font-bold rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                            {service.tag}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground leading-relaxed">
                          {service.scope}
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
        {/* 5. SECTION 3: Canvas A (White / #121214) — Student Council & Governance   */}
        {/* ========================================================================= */}
        <section className="py-5 sm:py-7 md:py-8 bg-white dark:bg-[#121214] transition-colors">
          <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-3 sm:mb-4">
              Student Council &amp; Governance
            </h2>

            {/* Official Publications DataGrid Table */}
            <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
              <div className="overflow-x-auto bg-transparent">
                <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                  <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                    <tr>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                        S.No
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[220px]">
                        Council Wing
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                        Primary Responsibilities &amp; Jurisdiction
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-36">
                        Schedule
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-libre">
                    {studentCouncilWings.map((wing) => (
                      <tr key={wing.sno} className="hover:bg-foreground/[0.02] transition-colors">
                        <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                          {String(wing.sno).padStart(2, "0")}
                        </td>
                        <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-sm whitespace-nowrap">
                          {wing.wing}
                        </td>
                        <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground leading-relaxed">
                          {wing.jurisdiction}
                        </td>
                        <td className="py-3.5 px-4 font-libre text-xs sm:text-sm whitespace-nowrap">
                          <span className="font-oswald uppercase text-xs font-bold text-primary">
                            {wing.frequency}
                          </span>
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
        {/* 6. SECTION 4: Canvas B (#F3F3F2 / #18181B) — Living Guidelines & Conduct   */}
        {/* ========================================================================= */}
        <section className="py-5 sm:py-7 md:py-8 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
          <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-3 sm:mb-4">
              Campus Living Guidelines &amp; Code of Conduct
            </h2>

            {/* Clean Open Editorial List */}
            <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full">
              {campusLivingGuidelines.map((item, idx) => (
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
