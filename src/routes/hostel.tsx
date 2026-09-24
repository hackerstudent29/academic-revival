import { createFileRoute } from "@tanstack/react-router";

const title = "Hostel Facilities — M.S.A.J. College of Engineering, Chennai";
const description =
  "Comprehensive hostel facilities, boys and girls residence halls, mess timings, rules, games and study hours, and cafeteria at Mohamed Sathak A.J. College of Engineering.";

export const Route = createFileRoute("/hostel")({
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
  component: HostelPage,
});

const hostelRules = [
  "Students must occupy the rooms allotted to them by the Warden (Principal)",
  "Students should refrain from anti-social and undesirable activities such as consumption of alcohol, tobacco, gambling, ragging etc",
  "Students are responsible for the cleanliness of their rooms",
  "No student will be allowed to leave the hostel based on a phone call",
  "Parents are requested to give a list of authorized visitors / local guardians. Visitors not mentioned in the list will not be permitted to visit the students in the hostel",
  "Students will be permitted to go home only if the college is closed continuously for five days or more",
  "Any student wishing to attend a function in the house, marriage or any other ceremony will be permitted to go only if the request is made by the parents to the Principal",
  "Visitors are allowed on holidays from 11.00 A.M. to 6.00 P.M",
];

const messTimings = [
  { meal: "Breakfast", workingDays: "07:00 A.M. to 08:00 A.M.", holidays: "07:30 A.M. to 09:00 A.M." },
  { meal: "Lunch", workingDays: "01:00 P.M. to 01:45 P.M.", holidays: "12:30 P.M. to 02:00 P.M." },
  { meal: "Dinner", workingDays: "07:00 P.M. to 08:30 P.M.", holidays: "07:00 P.M. to 09:00 P.M." },
];

const canteenLeadership = [
  { role: "President", name: "Dr. K.S. Srinivasan", designation: "Principal" },
  { role: "Officer In-charge", name: "Dr. S. Vijayakumar", designation: "Chief Organization Officer" },
  { role: "Manager", name: "Mr. Arun", designation: "Manager" },
  { role: "Head - Student Affairs", name: "Dr. K.P. Santhosh Nathan", designation: "Head - Student Affairs" },
];

const canteenMembers = [
  "Dr. S. Vijayakumar",
  "Mr. Arun",
  "Mr. A. Abdul Gafoor",
];

const canteenKitchenStaff = [
  { name: "Mr. Abdul Rashid", role: "Cook" },
  { name: "Mr. Kannan", role: "Asst Cook" },
  { name: "Mr. Shankar", role: "Asst Cook" },
];

export function HostelPage() {
  return (
    <main className="bg-white dark:bg-[#121214] text-foreground min-h-screen pt-0 md:pt-1 font-sans selection:bg-primary selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Standard MSAJCE Hero (Title Docked Flush at Bottom)       */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[260px] sm:min-h-[300px] md:min-h-[360px] flex flex-col justify-end">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/procedure_hero.jpg"
            alt="MSAJCE Hostel Facilities"
            className="w-full h-full object-cover object-center brightness-[0.65] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        {/* Title Container: Docked Flush at Bottom of Hero */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-0">
          <div className="inline-block border-l-4 border-primary bg-white/95 dark:bg-[#121214]/95 text-foreground px-4 sm:px-6 md:px-8 py-3 sm:py-4 backdrop-blur-md shadow-2xl border-t border-r border-border dark:border-white/15">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-oswald uppercase text-foreground tracking-tight leading-none">
              HOSTEL FACILITIES
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 1: Canvas A (White / #121214) — HOSTEL OVERVIEW & COMPARISON TABLE */}
      {/* ========================================================================= */}
      <section className="w-full bg-white dark:bg-[#121214] py-10 sm:py-16 transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              HOSTEL CAPACITY &amp; INFRASTRUCTURE
            </h2>
          </div>

          {/* Transparent Editorial Table (Strictly Zero Cards) */}
          <div className="overflow-x-auto border-t border-b border-border">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-primary/40 bg-foreground/[0.02]">
                  <th className="py-3.5 px-4 font-oswald text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground">
                    Facility / Parameter
                  </th>
                  <th className="py-3.5 px-4 font-oswald text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
                    Boys Hostel
                  </th>
                  <th className="py-3.5 px-4 font-oswald text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
                    Girls Hostel
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm sm:text-base font-libre">
                <tr className="hover:bg-foreground/[0.02] transition-colors">
                  <td className="py-3.5 px-4 font-bold font-oswald uppercase text-foreground text-xs sm:text-sm">
                    Location
                  </td>
                  <td className="py-3.5 px-4 text-foreground font-medium">
                    Inside the Campus
                  </td>
                  <td className="py-3.5 px-4 text-foreground font-medium">
                    At Sholinganallur (5 KM away from campus)
                  </td>
                </tr>
                <tr className="hover:bg-foreground/[0.02] transition-colors">
                  <td className="py-3.5 px-4 font-bold font-oswald uppercase text-foreground text-xs sm:text-sm">
                    No. of Blocks
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-foreground">
                    3 Blocks
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-foreground">
                    1 Block
                  </td>
                </tr>
                <tr className="hover:bg-foreground/[0.02] transition-colors">
                  <td className="py-3.5 px-4 font-bold font-oswald uppercase text-foreground text-xs sm:text-sm">
                    No. of Rooms (Non-AC)
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-foreground">
                    233 Rooms
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-foreground">
                    71 Rooms
                  </td>
                </tr>
                <tr className="hover:bg-foreground/[0.02] transition-colors">
                  <td className="py-3.5 px-4 font-bold font-oswald uppercase text-foreground text-xs sm:text-sm">
                    No. of Rooms (AC)
                  </td>
                  <td className="py-3.5 px-4 font-mono font-bold text-foreground">
                    6 Rooms
                  </td>
                  <td className="py-3.5 px-4 font-mono text-muted-foreground">
                    -
                  </td>
                </tr>
                <tr className="hover:bg-foreground/[0.02] transition-colors">
                  <td className="py-3.5 px-4 font-bold font-oswald uppercase text-foreground text-xs sm:text-sm">
                    Persons per Room
                  </td>
                  <td className="py-3.5 px-4 font-medium text-foreground">
                    2 Persons per Room
                  </td>
                  <td className="py-3.5 px-4 font-medium text-foreground">
                    3 Persons per Room
                  </td>
                </tr>
                <tr className="hover:bg-foreground/[0.02] transition-colors">
                  <td className="py-3.5 px-4 font-bold font-oswald uppercase text-foreground text-xs sm:text-sm">
                    Facility Available
                  </td>
                  <td className="py-3.5 px-4 text-foreground font-medium" colSpan={2}>
                    Cot, Chair, Lamp, Fan and Water Heater. WiFi Facility and TV Hall
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WAVE DIVIDER 1: Canvas A (White / #121214) -> Canvas B (#F3F3F2 / #18181B) */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — BOYS & GIRLS RESIDENCE DETAILS  */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-10 sm:py-16 transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12 space-y-12">
          {/* Boys Hostel Narrative */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              BOYS HOSTEL
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
              <p>
                A home away from home provided for both boys and girls separately accommodating 480 boy students and 210 girl students. All the rooms are well furnished with modern amenities such as cot, mattress with pillows, bed-sprds, individual cup-boards, chair-table with lamp and wall hangers. Each room accommodate only 2 persons.
              </p>
              <p>
                A hygienic canteen is available for dining within the premises. An entertainment hall with LCD- TV, indoor game facilities, reading room with news papers and popular magazines are available. The Hostel has land-line telephone and Wi-Fi internet access.
              </p>
              <p>
                Further, for the benefit of the hostellers, the College Main Library and the Computer Centre are kept open till 7:00 PM to all the above facilities.
              </p>
              <p>
                We are sure that the students will feel more at home and concentrate on their studies, facilitated by the serene atmosphere, filled with greenery, surrounding the Hostel.
              </p>
            </div>
          </div>

          {/* Girls Hostel Narrative */}
          <div className="space-y-4 pt-6 border-t border-border">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              GIRLS HOSTEL
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
              <p>
                The MSAJCE Girls Hostel is situated at Sholinganallur - 5 KM away from the campus. This hostel is located at main posh area with safety and security. Everything is available at the entrance of the Hostel. There are about 71 rooms, which can accommodate 3 girl students per room. All the rooms are well furnished with modern amenities such as cot, mattress with pillows, bed-spreads, individual cup-boards, chair-table with lamp for study purpose and wall hangers. Each room is provided with bath and toilet facilities, wash basin and mirror. An entertainment hall with LCD- TV, indoor game facilities, reading room with News Papers and popular magazines are some of the distinct additions. The Hostel is connected with communication facilities such as land-line telephone and Wi-Fi internet access.
              </p>
              <p>
                Further, for the benefit of the hostellers, Library facility and the Computer facility made available till 9:00 pm, which can be effectively utilized to widen their knowledge and skill.
              </p>
              <p>
                With all the above facilities, we are sure that the girls will feel more at home and concentrate on their studies, facilitated by the serene atmosphere, filled with greenery, surrounding the Hostel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WAVE DIVIDER 2: Canvas B (#F3F3F2 / #18181B) -> Canvas A (White / #121214) */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 3: Canvas A (White / #121214) — HOSTEL RULES & REGULATIONS        */}
      {/* ========================================================================= */}
      <section className="w-full bg-white dark:bg-[#121214] py-10 sm:py-16 transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              HOSTEL RULES &amp; REGULATIONS
            </h2>
          </div>

          <div className="border-t border-b border-border divide-y divide-border">
            {hostelRules.map((rule, idx) => (
              <div
                key={idx}
                className="py-3.5 sm:py-4 flex items-start gap-4 hover:bg-foreground/[0.02] transition-colors px-2"
              >
                <span className="text-xs sm:text-sm font-mono font-bold text-primary shrink-0 mt-0.5">
                  #{String(idx + 1).padStart(2, "0")}
                </span>
                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WAVE DIVIDER 3: Canvas A (White / #121214) -> Canvas B (#F3F3F2 / #18181B) */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 4: Canvas B (#F3F3F2 / #18181B) — DINING HALL, MESS & TV TIMINGS  */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-10 sm:py-16 transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12 space-y-12">
          {/* Dining Hall Intro */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              DINING HALL &amp; MESS
            </h2>
            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
              Hostel Mess is run by the Management through private contractor under the guidance of the Principal and Administrative officer. Vegetarian and Non-Vegetarian food is served in the hostel. Mess charges are collected on an annual basis at the time of admission. Parents and guests are allowed to consume food by paying for them. The mess hall is spacious with a dining hall and kitchen. Separate seating arrangements are made for both boys and girls..
            </p>
          </div>

          {/* Mess Timings Table */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
              MESS TIMINGS
            </h3>
            <div className="overflow-x-auto border-t border-b border-border">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary/40 bg-foreground/[0.02]">
                    <th className="py-3 px-4 font-oswald text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground">
                      Meal
                    </th>
                    <th className="py-3 px-4 font-oswald text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
                      Working Days
                    </th>
                    <th className="py-3 px-4 font-oswald text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
                      Holidays
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm sm:text-base font-libre">
                  {messTimings.map((row) => (
                    <tr key={row.meal} className="hover:bg-foreground/[0.02] transition-colors">
                      <td className="py-3 px-4 font-bold font-oswald uppercase text-foreground text-xs sm:text-sm">
                        {row.meal}
                      </td>
                      <td className="py-3 px-4 font-mono font-medium text-foreground">
                        {row.workingDays}
                      </td>
                      <td className="py-3 px-4 font-mono font-medium text-foreground">
                        {row.holidays}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Games, TV & Study Hours Table */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
              GAMES, TV AND STUDY HOURS TIMINGS
            </h3>
            <div className="overflow-x-auto border-t border-b border-border">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary/40 bg-foreground/[0.02]">
                    <th className="py-3 px-4 font-oswald text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
                      Working Days
                    </th>
                    <th className="py-3 px-4 font-oswald text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
                      Holidays
                    </th>
                    <th className="py-3 px-4 font-oswald text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
                      Study Hours - Morning
                    </th>
                    <th className="py-3 px-4 font-oswald text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
                      Study Hours - Evening
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm sm:text-base font-libre">
                  <tr className="hover:bg-foreground/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-mono font-medium text-foreground">
                      04:30 P.M. to 06:00 P.M.
                    </td>
                    <td className="py-3.5 px-4 font-mono font-medium text-foreground">
                      09:00 A.M. to 12:00 P.M. <br />
                      01:00 P.M. to 06:00 P.M.
                    </td>
                    <td className="py-3.5 px-4 font-mono font-medium text-foreground">
                      05:00 A.M. to 07:00 A.M.
                    </td>
                    <td className="py-3.5 px-4 font-mono font-medium text-foreground">
                      06:00 P.M. to 07:00 P.M. <br />
                      09:00 P.M. to 10:30 P.M.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WAVE DIVIDER 4: Canvas B (#F3F3F2 / #18181B) -> Canvas A (White / #121214) */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 5: Canvas A (White / #121214) — CAFETERIA & CANTEEN COMMITTEE     */}
      {/* ========================================================================= */}
      <section className="w-full bg-white dark:bg-[#121214] py-10 sm:py-16 transition-colors pb-16 sm:pb-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12 space-y-12">
          {/* Cafeteria Intro */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              CAFETERIA
            </h2>
            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
              MSAJCE has the facility of a spacious and hygienic cafeteria that caters to the taste of all students. It can conveniently accommodate 100 students at a time. The cafeteria is provided with modern furniture, electrical cooking and storing facilities which provides delicious breakfast, lunch, snacks and beverages both for students and staff at reasonable rates. Separate space is available for students and staff .It is well maintained with effective service. It remains open on all working days from 8.00 am to 8.00 pm.
            </p>
          </div>

          {/* Canteen Committee */}
          <div className="space-y-6 pt-6 border-t border-border">
            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
              CANTEEN COMMITTEE
            </h3>

            {/* Leadership Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-border border-t border-b border-border py-4">
              {canteenLeadership.map((item, idx) => (
                <div key={idx} className="first:pl-0 sm:pl-4 pt-3 sm:pt-0">
                  <span className="text-xs font-mono uppercase text-primary font-bold block">
                    {item.role}
                  </span>
                  <span className="text-base sm:text-lg font-bold font-oswald uppercase text-foreground block mt-1">
                    {item.name}
                  </span>
                  <span className="text-xs text-muted-foreground font-sans block mt-0.5">
                    {item.designation}
                  </span>
                </div>
              ))}
            </div>

            {/* Committee Members & Staff Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Committee Members */}
              <div className="space-y-3">
                <h4 className="text-sm sm:text-base font-bold font-oswald uppercase tracking-wider text-foreground">
                  Committee Members
                </h4>
                <ul className="divide-y divide-border border-t border-b border-border">
                  {canteenMembers.map((member, idx) => (
                    <li key={idx} className="py-2.5 text-sm sm:text-base font-medium font-libre text-foreground">
                      {member}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Kitchen Staff */}
              <div className="space-y-3">
                <h4 className="text-sm sm:text-base font-bold font-oswald uppercase tracking-wider text-foreground">
                  Canteen Staff
                </h4>
                <ul className="divide-y divide-border border-t border-b border-border">
                  {canteenKitchenStaff.map((staff, idx) => (
                    <li key={idx} className="py-2.5 flex items-center justify-between text-sm sm:text-base font-medium font-libre text-foreground">
                      <span>{staff.name}</span>
                      <span className="text-xs font-mono uppercase text-muted-foreground">{staff.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed italic border-l-2 border-primary pl-3">
              Our canteen is effectively functioning to satisfy the needs of students and staff with a variety of delicious food items at affordable rates
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
