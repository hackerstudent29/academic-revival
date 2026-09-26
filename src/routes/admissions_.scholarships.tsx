import { createFileRoute } from "@tanstack/react-router";
import { DataGridContainer } from "@/components/ui/data-grid-table";
import { Award, CheckCircle2 } from "lucide-react";

const title = "Scholarship Programmes — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official AICTE, State Government, Central Government, and Mohamed Sathak Trust scholarship schemes for B.E./B.Tech students at MSAJCE.";

export const Route = createFileRoute("/admissions_/scholarships")({
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
  component: ScholarshipsPage,
});

interface ScholarshipItem {
  sno: number;
  scheme: string;
  category: string;
  eligibility: string;
  agency: string;
  amount: string;
  quota: string;
}

const scholarshipMatrix: ScholarshipItem[] = [
  {
    sno: 1,
    scheme: "Pragati Scholarship Scheme",
    category: "Girl Students in STEM",
    eligibility: "Max 2 girl children per family; annual family income < ₹8,00,000",
    agency: "AICTE, New Delhi",
    amount: "₹50,000 / year",
    quota: "800 Designated TN Slots",
  },
  {
    sno: 2,
    scheme: "Saksham Scholarship Scheme",
    category: "Specially-Abled Students",
    eligibility: "Disability level ≥ 40%; annual family income < ₹8,00,000",
    agency: "AICTE, New Delhi",
    amount: "₹50,000 / year",
    quota: "All Eligible Candidates",
  },
  {
    sno: 3,
    scheme: "Merit-cum-Means Minority Scholarship",
    category: "Minority Communities",
    eligibility: "Minimum 50% marks in final exam; annual family income < ₹2,50,000",
    agency: "Ministry of Minority Affairs",
    amount: "₹20,000/yr tuition + Maintenance",
    quota: "1,075 (Muslim) · 1,173 (Christian)",
  },
  {
    sno: 4,
    scheme: "Central Sector Scheme for Higher Education",
    category: "Merit + Low Income",
    eligibility: "Minimum 80% marks in 12th Board; annual family income < ₹8,00,000",
    agency: "MHRD, Govt. of India",
    amount: "₹10,000 / year",
    quota: "4,883 TN Slots",
  },
  {
    sno: 5,
    scheme: "Wards of Beedi / Mine / Cine Workers",
    category: "Labour Welfare",
    eligibility: "Ward of registered Beedi/Mine/Cine worker; income < ₹10,000/month",
    agency: "Ministry of Labour",
    amount: "₹15,000 / year",
    quota: "All Eligible Candidates",
  },
  {
    sno: 6,
    scheme: "TN First Graduate Tuition Concession",
    category: "First Generation Learners",
    eligibility: "First graduate in family admitted through TNEA single-window counseling",
    agency: "Government of Tamil Nadu",
    amount: "₹25,000 / year Tuition Waiver",
    quota: "All TNEA Eligible Candidates",
  },
  {
    sno: 7,
    scheme: "Post-Matric SC / ST / Converted Christian",
    category: "SC / ST / SCA",
    eligibility: "SC/ST/SCA students; annual family income < ₹2,50,000",
    agency: "Adidravidar Welfare Dept.",
    amount: "100% Tuition Fee Waiver",
    quota: "All Eligible Candidates",
  },
  {
    sno: 8,
    scheme: "Mohamed Sathak Trust Merit Concession",
    category: "Academic & Sports Excellence",
    eligibility: "High PCM cutoff (>90%) or State/National level sports medalists",
    agency: "Mohamed Sathak Trust",
    amount: "Institutional Fee Concession",
    quota: "Trust Earmarked Quota",
  },
];

const detailedSchemes = [
  "A. AICTE Pragati Scholarship for Girl Students: Grants ₹50,000 per annum for tuition fees, computer purchase, and books for female candidates admitted to 1st year B.E./B.Tech or 2nd year Lateral Entry.",
  "B. AICTE Saksham Scholarship for Specially-Abled Students: Provides ₹50,000 per annum for differently-abled scholars with qualifying disability level of 40% or higher.",
  "C. Merit-cum-Means Minority Scholarship: Offers up to ₹20,000 per annum tuition assistance plus maintenance allowances for Muslim, Christian, Jain, and Sikh minority students.",
  "D. Central Sector Scheme of Scholarships: Provides ₹10,000 per annum for top 20th percentile scorers in 10+2 Higher Secondary Board Examinations.",
  "E. Tamil Nadu First Graduate Concession: Grants full ₹25,000 per annum tuition fee waiver for first-generation higher education learners admitted via TNEA counseling.",
  "F. Post-Matric SC/ST/SCA Welfare Scholarship: 100% tuition fee reimbursement for SC/ST students whose annual family income is under ₹2.50 Lakhs per annum.",
  "G. Mohamed Sathak Trust Merit & Sports Concession: Special institutional financial concessions awarded for academic rank holders (>90% PCM) and sports champions.",
];

export function ScholarshipsPage() {
  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased selection:bg-primary selection:text-white min-h-screen pt-0 md:pt-1">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Title Docked Flush with Hero Section End                  */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/procedure_hero.jpg"
            alt="Scholarship Programmes MSAJCE"
            className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-0">
          <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
              Scholarship Programmes
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION A: Institutional Overview & Official Scholarship Matrix        */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Overview */}
          <div className="mb-10 w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-4">
              Institutional Overview &amp; Financial Support
            </h2>
            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full mb-4">
              Mohamed Sathak A.J. College of Engineering facilitates comprehensive financial assistance schemes funded by AICTE, Ministry of Education, State Government Welfare Departments, and Mohamed Sathak Trust. We ensure that meritorious, deserving, minority, and economically challenged students receive tuition fee concessions, maintenance stipends, and full fee waivers to pursue higher engineering education without financial barriers.
            </p>
          </div>

          {/* Official Publications Standard DataGrid Table */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-6">
              Government &amp; Institutional Scholarship Matrix
            </h2>

            <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
              <div className="overflow-x-auto bg-transparent">
                <table className="w-full text-left border-collapse min-w-[750px] text-xs sm:text-sm">
                  <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                    <tr>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-14">
                        S.No
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                        Scholarship Scheme
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                        Target Category
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                        Eligibility Criteria
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                        Sanctioning Agency
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                        Financial Benefit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-libre">
                    {scholarshipMatrix.map((item) => (
                      <tr key={item.sno} className="hover:bg-foreground/[0.02] transition-colors">
                        <td className="py-3.5 px-4 font-oswald font-bold text-primary text-xs sm:text-sm whitespace-nowrap">
                          {item.sno}
                        </td>
                        <td className="py-3.5 px-4 font-libre font-bold text-foreground text-xs sm:text-sm">
                          {item.scheme}
                        </td>
                        <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground">
                          {item.category}
                        </td>
                        <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground">
                          {item.eligibility}
                        </td>
                        <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground whitespace-nowrap">
                          {item.agency}
                        </td>
                        <td className="py-3.5 px-4 font-libre font-bold text-xs sm:text-sm text-primary whitespace-nowrap">
                          {item.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DataGridContainer>
          </div>
        </div>
      </section>

      {/* Wave Divider A -> B */}
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

      {/* ========================================================================= */}
      {/* 3. SECTION B: Points Layout — Detailed Scheme Guidelines                 */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-2">
              Detailed Scheme Breakdown &amp; Directives
            </h2>
            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed max-w-3xl">
              Application procedures, document verification steps, and disbursement terms for all eligible government and trust financial assistance schemes.
            </p>
          </div>

          <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full">
            {detailedSchemes.map((schemeText, idx) => (
              <div
                key={idx}
                className="py-3.5 sm:py-4 px-2 sm:px-4 flex items-center gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors w-full"
              >
                <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm border border-primary/20 shadow-2xs">
                  {idx + 1}
                </span>
                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                  {schemeText}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
