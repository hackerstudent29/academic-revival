import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

import {
  Users,
  Briefcase,
  Award,
  CheckCircle2,
  Calendar,
  Sparkles,
  Globe2,
  Search,
  ExternalLink,
  MapPin,
  GraduationCap,
  Download,
  HeartHandshake,
  MessageSquareQuote,
  FileText,
  Video,
  Building2,
  Image as ImageIcon,
} from "lucide-react";

import { SecondarySubNav, type SubNavTab } from "@/components/layout/SecondarySubNav";
import { DataGridContainer, SearchBar, TablePagination } from "@/components/ui/data-grid-table";
import { CustomDropdown, type DropdownOption } from "@/components/ui/custom-dropdown";
import { RedirectButton } from "@/components/ui/redirect-button";

const smoothEase = [0.16, 1, 0.3, 1] as const;

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

function WaveDividerBA() {
  return (
    <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
      <svg
        viewBox="0 0 1440 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-10 sm:h-14 md:h-16 lg:h-20 block preserve-3d"
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

const title = "MSAJCE Alumni Association — Official Portal & Global Network";
const description =
  "Official Alumni Association of Mohamed Sathak A. J. College of Engineering (Reg. No: SRG/Chengalpattu/16/2021). Reconnecting 15,000+ engineering alumni across 25+ countries.";

export const Route = createFileRoute("/student-community_/alumni")({
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
  component: AlumniPage,
});

/* Helper Component: Formatted Alumni Details & Achievers Grid */
function FormattedAlumniDetails({ details }: { details: string }) {
  if (!details) return null;

  // Multiline lists (e.g. 25 Alumni Achievers or multi-person lists)
  if (details.includes("\n")) {
    const rawLines = details.split("\n").map((l) => l.trim()).filter(Boolean);
    if (rawLines.length === 0) return null;
    const firstLine = rawLines[0] || "";
    const hasHeader = !firstLine.match(/^(\d+)[\.\)]/);
    const headerLine = hasHeader ? firstLine : null;
    const listLines = hasHeader ? rawLines.slice(1) : rawLines;

    return (
      <div className="space-y-2.5 my-1 font-libre">
        {headerLine && (
          <div className="text-xs font-oswald uppercase font-bold text-primary tracking-wide border-b border-border/40 pb-1">
            {headerLine.replace(/:$/, "")}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[360px] overflow-y-auto pr-1">
          {listLines.map((line, idx) => {
            const match = line.match(/^(\d+)[\.\)]\s*(.*)/);
            const num = (match && match[1]) ? match[1] : (idx + 1).toString();
            const content = (match && match[2]) ? match[2] : line;

            let name = content;
            let company = "";

            if (content && content.includes(" - ")) {
              const parts = content.split(/\s+-\s+/);
              name = parts[0] || "";
              company = parts.slice(1).join(" • ");
            } else if (content && content.includes(" – ")) {
              const parts = content.split(/\s+–\s+/);
              name = parts[0] || "";
              company = parts.slice(1).join(" • ");
            }

            return (
              <div
                key={idx}
                className="p-2.5 bg-background border border-border/60 rounded-none text-xs space-y-0.5 shadow-2xs"
              >
                <div className="font-bold text-foreground font-oswald uppercase">
                  <span className="text-primary font-mono mr-1.5">#{num.padStart(2, "0")}</span>
                  {name}
                </div>
                {company && (
                  <div className="text-[11px] font-mono text-muted-foreground truncate">
                    {company}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Single-line details
  return (
    <div className="text-xs sm:text-sm font-libre text-foreground/90 leading-relaxed font-normal">
      {details}
    </div>
  );
}

/* Institutional Benchmark Metrics */
const heroStats = [
  { value: "15,000+", label: "Global Alumni Network" },
  { value: "19", label: "Graduation Batches" },
  { value: "25+", label: "Countries Represented" },
  { value: "50+", label: "Years of Sathak Legacy" },
];

/* Official Registered 7 Constitutional Objectives */
const registeredObjectives = [
  "To foster a sense of connectedness back to the institution.",
  "To establish and renew student relationships across all engineering streams.",
  "To involve alumni actively in various academic council and college activities.",
  "To provide financial assistance to needful students by way of funds and scholarships.",
  "To gather and maintain a live database of employment opportunities and assist in placements.",
  "To arrange expert teaching and technical training classes for current undergraduates.",
  "To contribute enthusiastically for the overall infrastructural and academic upgrading of the institution.",
];

/* Office Bearers Roster with Official Photos & Academic Years */
const officeBearersByYear: Record<
  string,
  Array<{ sNo: number; name: string; role: string; designation: string; category: string; photo?: string }>
> = {
  "2024 - Till Now": [
    {
      sNo: 1,
      name: "Dr. K. S. Srinivasan",
      role: "President",
      designation: "Principal, MSAJCE",
      category: "Faculty Head",
      photo: "https://www.msajce-edu.in/images/alumni/principal.jpg",
    },
    {
      sNo: 2,
      name: "Mr. Ahamed Jameel A.M.T",
      role: "Secretary",
      designation: "Alumnus (B.E. CSE)",
      category: "Alumni Leader",
      photo: "https://www.msajce-edu.in/images/alumni/AhamedJameelAMT.jpg",
    },
    {
      sNo: 3,
      name: "Administrative Officer",
      role: "Treasurer",
      designation: "MSAJCE Administration",
      category: "Administration",
    },
    {
      sNo: 4,
      name: "Mr. J. Abdul Rahman",
      role: "Vice President",
      designation: "Alumnus (B.E. ECE)",
      category: "Alumni Leader",
    },
    {
      sNo: 5,
      name: "Mr. M.M. Syed Sultan Allaudeen",
      role: "Joint Secretary",
      designation: "Alumnus (B.E. Mech)",
      category: "Alumni Executive",
    },
    {
      sNo: 6,
      name: "Mr. Asim Ali L",
      role: "Joint Secretary",
      designation: "Alumnus (B.E. IT)",
      category: "Alumni Executive",
    },
    {
      sNo: 7,
      name: "Mr. Abdul Majeed Shiblee",
      role: "Joint Secretary",
      designation: "Alumnus (B.E. Civil)",
      category: "Alumni Executive",
    },
    {
      sNo: 8,
      name: "Mr. Mikail Ismail",
      role: "Program Coordinator",
      designation: "Alumnus (B.E. EEE)",
      category: "Alumni Executive",
    },
  ],
  "2023 - 2024": [
    { sNo: 1, name: "Dr. K. S. Srinivasan", role: "President", designation: "Principal, MSAJCE", category: "Faculty Head", photo: "https://www.msajce-edu.in/images/alumni/principal.jpg" },
    { sNo: 2, name: "Mr. Ahamed Jameel A.M.T", role: "Secretary", designation: "Alumnus (B.E. CSE)", category: "Alumni Leader", photo: "https://www.msajce-edu.in/images/alumni/AhamedJameelAMT.jpg" },
    { sNo: 3, name: "Administrative Officer", role: "Treasurer", designation: "MSAJCE Administration", category: "Administration" },
    { sNo: 4, name: "Mr. J. Abdul Rahman", role: "Vice President", designation: "Alumnus", category: "Alumni Leader" },
  ],
  "2022 - 2023": [
    { sNo: 1, name: "Dr. K. S. Srinivasan", role: "President", designation: "Principal, MSAJCE", category: "Faculty Head", photo: "https://www.msajce-edu.in/images/alumni/principal.jpg" },
    { sNo: 2, name: "Mr. Syed Sultan", role: "Secretary", designation: "Alumnus", category: "Alumni Leader" },
    { sNo: 3, name: "Administrative Officer", role: "Treasurer", designation: "MSAJCE Administration", category: "Administration" },
  ],
  "2021 - 2022": [
    { sNo: 1, name: "Dr. K. S. Srinivasan", role: "President", designation: "Principal, MSAJCE", category: "Faculty Head", photo: "https://www.msajce-edu.in/images/alumni/principal.jpg" },
    { sNo: 2, name: "Mr. Asim Ali L", role: "Secretary", designation: "Alumnus", category: "Alumni Leader" },
    { sNo: 3, name: "Administrative Officer", role: "Treasurer", designation: "MSAJCE Administration", category: "Administration" },
  ],
  "2020 - 2021": [
    { sNo: 1, name: "Dr. K. S. Srinivasan", role: "President", designation: "Principal, MSAJCE", category: "Faculty Head", photo: "https://www.msajce-edu.in/images/alumni/principal.jpg" },
    { sNo: 2, name: "Mr. Abdul Majeed Shiblee", role: "Secretary", designation: "Alumnus", category: "Alumni Leader" },
    { sNo: 3, name: "Administrative Officer", role: "Treasurer", designation: "MSAJCE Administration", category: "Administration" },
  ],
};

const executiveMembers = [
  "Mr. Mohamed Yasar",
  "Mr. Noorul Jaman",
  "Mr. N. Naveen",
  "Mr. Mohammed Umar Farook B.",
];

/* Global Alumni Regional Chapters */
const globalChapters = [
  {
    region: "Middle East Chapter",
    hubs: "Dubai • Riyadh • Qatar • Abu Dhabi",
    count: "4,200+",
    focus: "Civil, Petroleum & Enterprise Infrastructure",
  },
  {
    region: "North America Chapter",
    hubs: "Silicon Valley • Seattle • Texas • Toronto",
    count: "2,800+",
    focus: "AI Research, Cloud Architecture & Software Engg.",
  },
  {
    region: "India & SAARC Chapter",
    hubs: "Chennai • Bengaluru • Hyderabad • Mumbai",
    count: "6,500+",
    focus: "Enterprise SaaS, R&D Hubs & Technology Startups",
  },
  {
    region: "Europe & UK Chapter",
    hubs: "London • Frankfurt • Amsterdam • Dublin",
    count: "1,500+",
    focus: "Automotive Tech, Renewable Energy & Doctoral Studies",
  },
];

/* Key Initiatives & Activities */
const associationActivities = [
  {
    title: "Alumni Technical Masterclasses & Guest Lectures",
    icon: Sparkles,
    frequency: "Monthly",
    description:
      "Global technology architects and senior alumni return to conduct interactive masterclasses on Cloud Native Systems, AI, VLSI, and Green Building engineering.",
  },
  {
    title: "Endowment Scholarship & Merit Student Aid",
    icon: Award,
    frequency: "Semester-wise",
    description:
      "Voluntary alumni contribution fund providing merit-cum-means financial assistance, examination fee waivers, and project incubation grants to deserving engineering undergraduates.",
  },
  {
    title: "Mock Interview Drills & Corporate Referrals",
    icon: Briefcase,
    frequency: "Ongoing",
    description:
      "One-on-one resume audits, technical screening sessions, and direct corporate referral pipelines linking final-year students with Tier-1 companies.",
  },
  {
    title: "Annual Alumni Homecoming Reunion & ARENA Fests",
    icon: Calendar,
    frequency: "Annual",
    description:
      "Flagship annual homecoming festival bringing together batches on campus alongside inter-batch sports tournaments, networking dinners, and cultural galas.",
  },
];

/* Featured Alumni Leaders Spotlights */
const alumniSpotlights = [
  {
    name: "Mohamed Rilwan",
    batch: "B.E. CSE (Class of 2012)",
    role: "Senior Cloud Architect",
    company: "Amazon Web Services (AWS)",
    location: "Seattle, USA",
    quote: "The technical grounding and lab discipline at MSAJCE laid the foundation for solving hyper-scale distributed computing challenges.",
  },
  {
    name: "Syed Abid Ali",
    batch: "B.E. ECE (Class of 2015)",
    role: "Lead Hardware Engineer",
    company: "Qualcomm R&D",
    location: "Bengaluru, India",
    quote: "Our professors encouraged hands-on circuit design and project innovation that gave me a distinct edge during silicon engineering interviews.",
  },
  {
    name: "Fathima Farhana",
    batch: "B.E. Civil (Class of 2018)",
    role: "Project Director",
    company: "L&T Infrastructure",
    location: "Dubai, UAE",
    quote: "From site visits to structural simulation software, MSAJCE gave me the confidence to lead mega-infrastructure projects in the Gulf region.",
  },
];

/* Scholarship Contribution Tiers */
const scholarshipTiers = [
  {
    title: "Merit-Cum-Means Tuition Grant",
    amount: "₹25,000 / student",
    beneficiaries: "35+ Students / Year",
    description: "Covers annual tuition fee subsidy for economically underprivileged engineering students maintaining high academic performance.",
  },
  {
    title: "Semester Examination Fee Waiver",
    amount: "₹5,000 / semester",
    beneficiaries: "60+ Students / Year",
    description: "Direct financial sponsorship covering Anna University autonomous examination registration fees for deserving undergraduates.",
  },
  {
    title: "Final Year Capstone Project Incubation Fund",
    amount: "₹15,000 / project team",
    beneficiaries: "15 Teams / Year",
    description: "Grants for hardware prototyping, IoT sensors, PCB fabrication, and Cloud deployment credits for innovative student capstones.",
  },
];

export interface AlumniActivityItem {
  sNo: number;
  programme: string;
  details: string;
  date: string;
  pdfUrl?: string;
}

export const alumniContributionsData: AlumniActivityItem[] = [
  {
    sNo: 1,
    programme: "Silver Jubilee Event",
    details: "Alumni Guest of Honour - Anbazhagan, Saranraj Saravanan and Mohammed Ateeq",
    date: "17.04.2026",
  },
  {
    sNo: 2,
    programme: "Engineers Edge 3.0",
    details: "Alumni Abdur Rahim Saleh - CEO - V5 Innovations",
    date: "08.04.2026",
  },
  {
    sNo: 3,
    programme: "Attended AAC Meeting",
    details: "Alumni Deepak from 2011 - 2015 Batch",
    date: "13.02.2026",
  },
  {
    sNo: 4,
    programme: 'A Session on "My Story Successful Innovators"',
    details: "Alumni Diwakaran - Managing Director - DKM Enterprises",
    date: "17.09.2025",
  },
  {
    sNo: 5,
    programme: 'Student got placed in "The BIM Engineers" Company',
    details: "Reference Alumni - Ahamed Jameel, Alumni Secretary - 1 Student got placed in EEE Dept",
    date: "08.09.2025",
  },
  {
    sNo: 6,
    programme: "Student Internship at StayIndiaDigital",
    details: "Reference Alumni - Ahamed Jameel, Alumni Secretary - 6 Students got placed in AIDS and CSBS Dept",
    date: "10.07.2025",
  },
  {
    sNo: 7,
    programme: "Student Internship at StayIndiaDigital",
    details: "Reference Alumni - Ahamed Jameel, Alumni Secretary - 3 Students got placed in AIDS and CSBS Dept",
    date: "01.07.2025",
  },
  {
    sNo: 8,
    programme: "Project X Hackathon",
    details: "Alumni Aniruddhan Narayanan - 2006 - 2010 Batch - Guest of Honor for the session",
    date: "10.04.2025",
  },
  {
    sNo: 9,
    programme: "International Women's Day Celebration",
    details: "Honoured Women Achiever Award to Alumni:\n1. Ms. Vani Parachuri (2003 - 2007 Batch)\n2. Ms. P.Rosiah (2006 - 2010 Batch)",
    date: "08.03.2025",
  },
  {
    sNo: 10,
    programme: "Silver Jubilee Reunion Meet 2025",
    details: "MSAJCE Alumni Sports Pavilion - The Alumni of 2001 - 2005 Batch & MSAJCE Alumni Association Donated on the occasion of Silver Jubilee Year 2025",
    date: "01.02.2025",
  },
  {
    sNo: 11,
    programme: "Silver Jubilee Reunion Meet 2025",
    details: "More than 500 + Alumnus have particpated for the Alumni Meet Function",
    date: "01.02.2025",
  },
  {
    sNo: 12,
    programme: 'A Session on "From Idea to Impact : Exploring Opportunities in the Startup Eco System"',
    details: "Alumni Naveen Zahir - Founder and CEO of Drop Truck",
    date: "04.12.2024",
  },
  {
    sNo: 13,
    programme: 'A Session on "Core Industries Unlocked - Pathways for tomorrow innovators"',
    details: "Alumni Diwakaran - Managing Director - KDM Enterprises",
    date: "03.12.2024",
  },
  {
    sNo: 14,
    programme: 'A Session on "Electro Magnetic Fields in Modern Application"',
    details: "Alumni Imran Javeed - Assistant Professor Veltech University",
    date: "28.11.2024",
  },
  {
    sNo: 15,
    programme: 'A Session on "Motivationals Session by Successful Innovators"',
    details: "Alumni Shiblee - Founder of Debugger Shirts",
    date: "20.11.2024",
  },
  {
    sNo: 16,
    programme: 'A Session on "Empowering our Educational Journey the role of Quality Assurance"',
    details: "Alumni Juveriya Khan - Senior Quality Assurance Manager - DMCG, Dubai.",
    date: "14.11.2024",
  },
  {
    sNo: 17,
    programme: 'A Session on "Preparing for the Future : Skills,Technologies and Mindset for Engineering Students"',
    details: "Alumni Lubna Amathul Wadhoodh - PMP, Product Consultant - Vembu Technologies",
    date: "25.10.2024",
  },
  {
    sNo: 18,
    programme: 'A Session on "Front Static Pages to dynamic Applications"',
    details: "Alumni Titus Vimalraj - Front End Engineer Amazon",
    date: "14.09.2024",
  },
  {
    sNo: 19,
    programme: "Alumni Association Meet",
    details: "Around 17 Alumni have participated and discuss about upcoming activities for the college students welfare.",
    date: "09.03.2024",
  },
  {
    sNo: 20,
    programme: "Mentoring Session",
    details: "Alumni Ms. Misbah Khairunissa A, Interacted with college students and provided counselling",
    date: "06.01.2024",
  },
  {
    sNo: 21,
    programme: "Placement Recruitment at Lightenz Technovations Pvt Ltd.",
    details: 'Alumni Shanmugasarathy hired one student from the 2023 batch for his company "Lightenz Technovations Pvt Ltd."',
    date: "05.01.2024",
  },
  {
    sNo: 22,
    programme: "GoldenGuru Award in Producing Youngminds",
    details: "Our college was awarded one of the best college in OMR and all our teaching staff were honored with a personalized certificate. Event By GRT jewellers. Event Conceptualized and executed by Alumni Ashwin.C and his team",
    date: "01.12.2023",
  },
  {
    sNo: 23,
    programme: 'Awareness session "You are important"',
    details: "Alumnae Akila Rajesh Participated for this awareness session.",
    date: "25.11.2023",
  },
  {
    sNo: 24,
    programme: "Engineer's Edge 2k23",
    details: "Alumni Karthikeyan and Lubna Amathul Participated Guest of Honour for this event.",
    date: "02.11.2023",
  },
  {
    sNo: 25,
    programme: "Alumni Association Meet",
    details: "Around 16 Alumni have participated and discuss about upcoming activities for the college students welfare.",
    date: "28.10.2023",
  },
  {
    sNo: 26,
    programme: "NBA Visit",
    details: "23 Alumnus have participated for NBA Inspection from various department and Batches",
    date: "30.09.2023",
  },
  {
    sNo: 27,
    programme: "A Session on Opportunities in the IT world",
    details: "Alumni Rahul Murali Product Manager, Thoughtworks and Vinoth Kumar Manickam Lead Developer Striven",
    date: "15.09.2023",
  },
  {
    sNo: 28,
    programme: "A Session on Solid Principle",
    details: "Alumni Sivanathan - Manager, Software Engineering ADF Data Science Pvt Limited",
    date: "13.09.2023",
  },
  {
    sNo: 29,
    programme: "A Session on Revolutionizing Design Efficiency: Unleashing the Power of CAD Automation",
    details: "Alumni Mohamed Ateeq, Senior Engineer, Hubbel Incorporated Chennai.",
    date: "09.09.2023",
  },
  {
    sNo: 30,
    programme: "A Session on Procurement and Supply Chain Management",
    details: "Alumni Umar Farooq - KK Wind Solutions India Private Limited Chennai.",
    date: "02.09.2023",
  },
  {
    sNo: 31,
    programme: "A Session on AWS - Hosting Static / Dynamic websites",
    details: "Alumni FHM Afzal Bijli, Founder - Webxo360",
    date: "12.08.2023",
  },
  {
    sNo: 32,
    programme: "A Session on VLSI",
    details: "External Trainer arranged by MSAJCE Alumni Association , Resource Person Md Ilyas - CEO Managing an E Learning Platform and IT Expert Training",
    date: "23.08.2023",
  },
  {
    sNo: 33,
    programme: "A Session on Early Stage Entrepreneurs",
    details: "Alumni Akther Ilyas , Founder Skit Media",
    date: "02.08.2023",
  },
  {
    sNo: 34,
    programme: "A Session on Devops - Kubernets and Containers",
    details: "Alumni Arun Natarajan , Emirates Bank Dubai - Principal Consultant",
    date: "08.08.2023",
  },
  {
    sNo: 35,
    programme: "A Session on Solar PV System Basics and Commercial Overview",
    details: "Alumni Shaik Fathaullah S - Daystar Solar - Technical Sales Engineer",
    date: "04.08.2023",
  },
  {
    sNo: 36,
    programme: "Student Internship at Sportasy",
    details: "Alumni - Sabarish, Founder - Sportasy - 3 Students Completed the Internship from IT Dept",
    date: "27.07.2023",
  },
  {
    sNo: 37,
    programme: "Placement Recruitment at Platform 3 Solutions",
    details: "Reference Alumni Ahamed Jameel A.M.T , Alumni Secretary - 3 Students got placed in CSE Dept",
    date: "12.07.2023",
  },
  {
    sNo: 38,
    programme: "A Session on Career Guidance & Job opportunities",
    details: "Alumni Syed Faiyaz Hussain , Digital Product Manager - Elevance Health",
    date: "28.06.2023",
  },
  {
    sNo: 39,
    programme: "Student Internship at JFX Events & Media",
    details: "Alumni - V.Ganesh, Managing Director - JFX Events & Media - 15 Students Completed the Internship from CSE Dept",
    date: "21.06.2023",
  },
  {
    sNo: 40,
    programme: "A Session on Robotics",
    details: "Alumni Majed Arafat A , IT Consultant - TCS",
    date: "10.05.2023",
  },
  {
    sNo: 41,
    programme: "A Session on Embedded System",
    details: "Alumni Sarathy , Consultant Embedded System Architect",
    date: "05.04.2023",
  },
  {
    sNo: 42,
    programme: "SGuest Lecture on Motivational Speech",
    details: "Alumni Abur Raheem, Founder and Director - V5 Innovation",
    date: "30.03.2023",
  },
  {
    sNo: 43,
    programme: "A Session on Voice over IP",
    details: "Alumni Anbazhagan A T , Technical Manager CTS",
    date: "22.03.2023",
  },
  {
    sNo: 44,
    programme: "A Session on Digital Marketing",
    details: "Alumni Md Afroze , Managing Director - J Digitals",
    date: "17.03.2023",
  },
  {
    sNo: 45,
    programme: "A Session on AI Technology",
    details: "External Trainer arranged by MSAJCE Alumni Association, Resource Person - Anisha Intel Corporation",
    date: "10.03.2023",
  },
  {
    sNo: 46,
    programme: "Alumni Meet 2009 - 2020 Batch",
    details: "More than 300 Alumnus have particpated for the Alumni Meet Function",
    date: "11.02.2023",
  },
  {
    sNo: 47,
    programme: "NAAC Meeting",
    details: "16 Alumnus have participated for NAAC Inspection from various department and Batches",
    date: "23.01.2023",
  },
  {
    sNo: 48,
    programme: "Entrpreneurship Skill - National Youth Day",
    details: "Alumni Md Rameez, Founder - Zeemrah Energy and Alumni Zubair Proprietor - USITE",
    date: "12.01.2023",
  },
  {
    sNo: 49,
    programme: "Student Internship at Hasna Technology, Chennai",
    details: "Alumni Mr. Ahamed Jameel - Technical Consultant, HCL",
    date: "02.11.2022",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/01HasnaTechnology.pdf",
  },
  {
    sNo: 50,
    programme: "Students from CSE and IT take part in the debugging activity for the new app developed by Edvoy technologies Pvt Ltd, Chennai.",
    details: "Alumni Mohamed Yasar, Edvoy Technologies, Chennai.",
    date: "03.12.2022",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/02EdvoyTechnologies.pdf",
  },
  {
    sNo: 51,
    programme: "Placement Recruitment at J Digitals",
    details: "Alumni Mr.Mohamed Afrose, CEO, J digital",
    date: "10.11.2022",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/03JDigital.pdf",
  },
  {
    sNo: 52,
    programme: "Intro to Intermed Interpersonal Skills",
    details: "Mrs.Akila Rajesh, Head-Sales and Marketing Voora Property Developers Pvt Ltd",
    date: "03.12.2022",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/04InterpersonalSkills.pdf",
  },
  {
    sNo: 53,
    programme: "A Session on How to Positively face HR Interview",
    details: "Alumini Syed Haja Shreef S, Recruitment Specialist, Sacalene Pepole Works Solution.",
    date: "23.09.2022",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/howpositively.pdf",
  },
  {
    sNo: 54,
    programme: "A seminar on Cyber security Trends and Hygiene",
    details: "Alumni Mohamed Samir",
    date: "19.11.2022",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/Cyber-Security-2022.pdf",
  },
  {
    sNo: 55,
    programme: "Online Mock Interview on Hr and technical interview for final year students",
    details: "Conducted by Alumni Mohamed Hussain TR, Senior Deveops Engineer, Intel Corporation",
    date: "05.11.2022",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/Mock-Interview.pdf",
  },
  {
    sNo: 56,
    programme: "Motivational Talk",
    details: "Alumni Misbah Khairunnisa, Senior Manager Organizational Development, Savista",
    date: "15.10.2022",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/Motivational-Talk.pdf",
  },
  {
    sNo: 57,
    programme: "Student Internship at Customer Labs, Chennai",
    details: "Alumni Mr. Asim Ali, CMO, Customer Labs",
    date: "02.08.2022",
  },
  {
    sNo: 58,
    programme: "Cricket Match between Alumni Association Members and Current Juniors",
    details: "Inter-batch friendly cricket tournament fostering junior-senior connection",
    date: "27.08.2022",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/Cricket-Match-Alumni-Juniors.pdf",
  },
  {
    sNo: 59,
    programme: "Placement Training Program",
    details: "Technical Presentation by Alumini Saravanan Perumal, L&T",
    date: "04.08.2022",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/L&T.pdf",
  },
  {
    sNo: 60,
    programme: "Placement Training Program",
    details: "Alumini Talk on Recent trends, challenges and Opportunities in current scenario by Alumini Mr. G.ABDUR RAHMAN SALIH, CEO, V5",
    date: "03.08.2022",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/salih.pdf",
  },
  {
    sNo: 61,
    programme: "Placement Training Program",
    details: "Webinar on Deveops Automation by Alumini Saravanan Perumal, Principal Consultant, Wipro Technologies.",
    date: "12.08.2021",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/Devops-Automation.pdf",
  },
  {
    sNo: 62,
    programme: "International Webinar on Art Of Thinking Big Online Mode",
    details: "Mr.A.AADIL IBRAHIM.A (Alumnus), Founder of “Cameraman” Entrepreneur Public Speaker by Passion. Division Level Runner in International speech Contest 2019 & 2020",
    date: "11.06.2020",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/Embedded-IOT-Boot.pdf",
  },
  {
    sNo: 63,
    programme: "Participated as resource person for FDP on Embedded & Iot Boot Camp",
    details: "Mr. M. Prabakaran (Alumni) Senior Software Architect in Caterpiller",
    date: "29.05.2019",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/Art-of-Thinking.pdf",
  },
  {
    sNo: 64,
    programme: "Performance in Recruitment",
    details: "Mr. Syed Haja Sheriff Alumini ECE",
    date: "09.01.2019",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/Performance-in-Recruitment.pdf",
  },
  {
    sNo: 65,
    programme: "Md Sathak Group of Institutions Participated in Entrepreneur Meeting",
    details: "Regional Alumni Entrepreneurship Delegation & Meeting",
    date: "Year 2019",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/Performance-in-Recruitment.pdf",
  },
];

export const institutionRecognitionsData: AlumniActivityItem[] = [
  {
    sNo: 1,
    programme: 'Invited as guest of honour for First Year Induction',
    details: "Alumni Guest of Honour - Azarudeen and Sakthi Ajay",
    date: "07.09.2026",
  },
  {
    sNo: 2,
    programme: "Engineers Day 2025",
    details: "Honoured 25 Alumni Achievers:\n1. Rajeswari Kumaresan - Cisco Systems Inc - USA\n2. Ranjani Rajagopalan - Mphasis - Senior Technical Lead\n3. Benny Diwakar S - Bank of America - Assistant Vice President\n4. Sheik Mohamed Rizwan - DXC TECHNOLOGY - Associate Manager\n5. Pavithra Elumalai - TCS - IT Consultant\n6. Shanmugam V - Zyple Software Solutions Pvt Ltd - CEO\n7. Mohammed Rameez - Zeemrah Energy - Founder\n8. Gatheejathul Kubra - Sha's Online Academy - Founder\n9. Manimala - Akamai Technology - Data Analyst\n10. Aniruddhan Narayanan - Pfizer Healthcare India Pvt Ltd - Manager\n11. Fayaz Ahamed - Recode Solutions - Senior Solution Architect\n12. Noorul Jaman J - Mindgate Solutions Pvt Ltd - Senior Manager\n13. Abrar Ahamed - Commercial Bank of Dubai - Enterprise Consultant\n14. Aswin Panneerselvam - Spark Group - Director\n15. N.Nazhrudeen - Xperthom Technologies - Business Head\n16. Nasarullah - Wipro Limited - Senior Techno Functional Lead\n17. Razik Fareed - YUBI - Senior Director\n18. Syed Atheeq Ur Rahman - Bahwan Cybertek - Manager\n19. H Barakath Nisha - Wipro Limited - Senior Software Engineer\n20. Linga Prabhu V - Mithran Engineering - CEO\n21. Narenthiran - Virtana Corporation - Team Lead\n22. AbdulHameed N - Rambal Hitech Engineers - Manager\n23. Jamal Shagul Ameedh - General Electric (GE) - Commercial Manager\n24. Mohamed Fazil - Equate Petrochemical - Senior Instrument Engineer\n25. Meeraan Sha - Zoho Corporation - Technical Consultant",
    date: "04.10.2025",
  },
  {
    sNo: 3,
    programme: 'A Session on "An Introduction to Industry Preparedness"',
    details: "Alumni Aniruddhan - Manager - PFIZER Healthcare India Pvt Ltd",
    date: "07.08.2025",
  },
  {
    sNo: 4,
    programme: 'A Session on "How to Get Yourself into IT Sector"',
    details: "Alumni Deepak - Chief Technology Officer - MH Doodle Solutions",
    date: "06.08.2025",
  },
  {
    sNo: 5,
    programme: "Attended Academic Advisory Board Meeting",
    details: "Alumni Deepak from 2011 - 2015 Batch",
    date: "16.07.2025",
  },
  {
    sNo: 6,
    programme: "Silver Jubilee Reunion Meet 2025",
    details: "1. Alumni Ahamed Jameel A.M.T (2001 - 2005 Batch) - Lifetime Achievement Award\n2. J.Abdul Rahaman (2001 - 2005 Batch) - Outstanding Alumni Award\n3. M.M. Syed Sultan Allaudeen (2003 - 2007 Batch) - Distinguished Service Award\n4. Yasar (2002 - 2006 Batch) - Distinguished Service Award\n5. Asim Ali L - Outstanding Young Alumni Award - 2025",
    date: "01.02.2025",
  },
  {
    sNo: 7,
    programme: "Alumni Association Meet",
    details: "Around 23 Alumni have participated and discuss about upcoming activities for the college students welfare.",
    date: "26.10.2024",
  },
  {
    sNo: 8,
    programme: "Engineers Day 2024",
    details: "Honoured Alumni Achievers:\n1. Md Kamaal Yasin - Associate Consultant - TCS\n2. A.S. Balagurunathan - HCL Tech - Project Manager\n3. Chandra Bose - CMA CGM GBSI PVT Ltd - Deputy General Manager\n4. Ameena Bathool - Zuora India Pvt Ltd - Senior Technical Writer\n5. Sivanathan Balaguru - ADF Datascience pvt ltd - Manager, Software Engineering\n6. Sabarish SR - Blossomfield Gamingzone Pvt Ltd - Founder & CEO",
    date: "16.09.2024",
  },
  {
    sNo: 9,
    programme: "Invited as guest of honour for First Year Induction",
    details: "Alumni Rahul Murali , Product Manager, Thoughtworks Technologies",
    date: "09.09.2024",
  },
  {
    sNo: 10,
    programme: "Planning and Monitoring committee meeting",
    details: "Alumni Dr Ezhilazhagan C - Associate Professor , Veltech",
    date: "08.07.2024",
  },
  {
    sNo: 11,
    programme: "Overall Board of Studies Meeting",
    details: "Alumni Deepak VR - Senior Data Engineer, Manuh Solutions Pvt Ltd",
    date: "06.07.2024",
  },
  {
    sNo: 12,
    programme: "Board of Studies meet for Civil Dept",
    details: "Alumni Akila Rajeshwari - Associate Vice President, Casagrand Builder Private Limited",
    date: "18.06.2024",
  },
  {
    sNo: 13,
    programme: "Board of Studies meet for Faculty CSE and IT Dept",
    details: "Alumni Sivanathan - ADF Data Science Pvt Ltd, Manager",
    date: "28.05.2024",
  },
  {
    sNo: 14,
    programme: 'Invited as Guest of Honour for "International Conference on Research and Development in Engineering,Science and Technology)',
    details: "Alumni Sheikh Azharuddin - IT Operation Head NRFSI",
    date: "24.05.2024",
  },
  {
    sNo: 15,
    programme: "Invited as Guest of Honour for Annual Day Celebration",
    details: "Alumni Suresh Kumar Scientist as invited Guest of Honour",
    date: "09.03.2024",
  },
  {
    sNo: 16,
    programme: "Invited as Guest of Honour for Festaverse Celebration",
    details: "Alumni Aadil Ibrahim, Entrepreneur Public Speaker",
    date: "05.03.2024",
  },
  {
    sNo: 17,
    programme: "Invited as Guest of Honour for Womens Day Celebration",
    details: "Alumni Lakshmi Narayanan, Senior HR from Valeo",
    date: "04.03.2024",
  },
  {
    sNo: 18,
    programme: "Planning and Monitoring Board Meeting",
    details: "Alumni Majed Arafat attended the meeting",
    date: "16.12.2023",
  },
  {
    sNo: 19,
    programme: "Attended Academic Advisory Board Meeting",
    details: "Alumni Secretary Ahamed Jameel and Alumni Executive Member - Srikkanth K",
    date: "09.12.2023",
  },
  {
    sNo: 20,
    programme: "Golden Jubilee Celebration at Mohamed Sathak Trust in Keelakarai",
    details: "1. Alumni Ahamed Jameel (Alumni Secretary) Received 'Best Alumni Service Award'\n2. Alumni Md Rizwan and Alumni Purushothaman Honoured Guest of Honour",
    date: "14.10.2023",
  },
  {
    sNo: 21,
    programme: "Engineers Day 2023",
    details: "Honoured Alumni Achievers:\n1. Alumni Majed Arafat A - IT Consultant - TCS\n2. Alumni Abdurrahim Salih - GV Academy of Education - Best Entrepreneur\n3. Alumni Misbah Khairunnissa - Savista - Senior Manager\n4. Alumni S Ram Prabhu - QBurst Technologies Private limited - Senior QA Engineer\n5. Alumni Mikail Ismail - KLA - Technical Writer",
    date: "16.09.2023",
  },
  {
    sNo: 22,
    programme: "Invited as guest of honour for First Year Induction",
    details: "Alumni Sheikh Azharuddin , Nissan Renault Financial Services India Ltd - IT Operation Head",
    date: "11.09.2023",
  },
  {
    sNo: 23,
    programme: "Attended Planning and Monitoring Meeting",
    details: "Alumni Majed Arafat, IT Consultant TCS, Alumni Jaleel Founder Kings Travels and Alumni Samir Fidelity National Financial - Cyber Security Manager",
    date: "20.05.2023",
  },
  {
    sNo: 24,
    programme: "Attended Academic Advisory Board Meeting",
    details: "Alumni Secretary Ahamed Jameel, Alumni Misbah - Savista Senior HR Manager and Alumni Shiblee - Founder Debugger",
    date: "13.05.2023",
  },
  {
    sNo: 25,
    programme: "Invited as Guest of Honour",
    details: "Alumni Nazeef Hussain",
    date: "24.03.2023",
  },
  {
    sNo: 26,
    programme: "Invited as Guest of Honour for Annual Day Celebration",
    details: "Alumni Secretary Ahamed Jameel, Alumni Abdul Rahman - Managing Director Blue Bell Business Management and Alumni Sathish Charan Writer/Director - Film Industry.",
    date: "18.03.2023",
  },
  {
    sNo: 27,
    programme: "Invited as Guest of Honour for BSM Cricket Trophy",
    details: "Alumni Secretary Ahamed Jameel and Alumni Sabarish Inauguration the Function",
    date: "12.03.2023",
  },
  {
    sNo: 28,
    programme: "Invited as Guest of Honour for Womens Day Celebration",
    details: "Alumni Akila Rajesh , Voora Property Developer Pvt Ltd - Sales and Marketing Head",
    date: "10.03.2023",
  },
  {
    sNo: 29,
    programme: "Alumni Meet",
    details: "Ahamed Jameel (Alumni Secretary) receives the MSAJCE's Outstanding Alumni Award for 2023",
    date: "01.02.2023",
  },
  {
    sNo: 30,
    programme: "Invited as guest of honour for First Year Induction",
    details: "Alumni Lakshmi Narayanan - Societe General, HR Talent Aquistition",
    date: "14.11.2022",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/1-Induction-2022.pdf",
  },
  {
    sNo: 31,
    programme: "Invited as Special guest for Graduation Day where Alumni Association Secretary",
    details: "Mr.Ahamed Jameel - Technical Consultant, HCL gave a speech to college graduates",
    date: "29.10.2022",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/2-Graduation-Day-2022.pdf",
  },
  {
    sNo: 32,
    programme: "Invited as a guest of honour for Symposium Tech Unity",
    details: "Alumni K Srikkant, Technical Architects, Teleapps and Mohamed Afroze, CEO, Jdigitals participated as Guest of Honour",
    date: "28.10.2022",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/3-Symposium.pdf",
  },
  {
    sNo: 33,
    programme: "First Alumni Association Meet in Chennai",
    details: "Organized by MSAJCE",
    date: "15.10.2022",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/4-First-Alumni-Association-Meet.pdf",
  },
  {
    sNo: 34,
    programme: "Invited as Guest of Honour for Inter college Symposium Event",
    details: "Alumni K Srikanth, Standard Chartered , Technical Architect and Alumni Afroze , J Digital CEO",
    date: "02.10.2022",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/5-Academic-Advisory.pdf",
  },
  {
    sNo: 35,
    programme: "Attended Academic Advisory Board Meeting",
    details: "Ahamed Jameel - Technical Consulatant, HCL and N Feroz Khan, delivery Mangaer, MAERSK, Chennai was Appointed as Governing Council Member for the institution",
    date: "01.10.2022",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/5-Academic-Advisory.pdf",
  },
  {
    sNo: 36,
    programme: "Engineers Day Celebration",
    details: "Best Alumni of Decade awarded to Ahamed Jameel - Technical Consulatant, HCL. Best Engineers Award:\n1. J Abdul Rahman - Managing Director, Blue Bell Business Management\n2. MM Syed Sultan Allaudeen\n3. A Raju\n4. L Asim Ali\n5. N Feroz Khan",
    date: "17.09.2022",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/6-Engineers-Day.pdf",
  },
  {
    sNo: 37,
    programme: "Invited as Jurie member for College Juniors Project Exhibition",
    details: "1. J Abdul Rahman 2. MM Syed Sultan Allaudeen 3. A Raju 4. L Asim Ali 5. N Feroz Khan 6. Ahamed Jameel",
    date: "17.09.2022",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/7-Project-Exhibition.pdf",
  },
  {
    sNo: 38,
    programme: "Invited Alumni Dr.Ezhil as chief guest for Teachers Day",
    details: "Awarded Best Teacher of the year by the College",
    date: "03.09.2022",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/8-Teachers-Day.pdf",
  },
  {
    sNo: 39,
    programme: "Alumni Meet 2008, 2009 and 2010 Batch",
    details: "Organized by MSAJCE",
    date: "05.03.2022",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/9-Alumni%20Meet.pdf",
  },
  {
    sNo: 40,
    programme: "Engineers Day Event",
    details: "Alumni Saravanan, Ashiq, Ganesh, Shiblee, Thahir and Jaleel Honoured Best Engineers award by the college",
    date: "23.10.2021",
  },
  {
    sNo: 41,
    programme: "Invited as an Guest of Honour for First Year Induction",
    details: "Alumni Ashwin C, Director, Pixtronics",
    date: "22.10.2021",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/11-Induction-2021.pdf",
  },
  {
    sNo: 42,
    programme: "Alumni Meet 2005, 2006 and 2007 Batch",
    details: "Organized by MSAJCE",
    date: "13.02.2021",
    pdfUrl: "https://www.msajce-edu.in/images/alumni/12-Alumni%20Meet.pdf",
  },
];

export interface DistinguishedAlumnus {
  sNo: number;
  name: string;
  batch: string;
  credentials: string;
  company: string;
}

export const distinguishedAlumniData: DistinguishedAlumnus[] = [
  { sNo: 1, name: "Mr. Purushothaman. N", batch: "2001-2005", credentials: "Assistant Vice President", company: "Standard Chartered" },
  { sNo: 2, name: "Ms. Sabana Yasmi .S", batch: "2001-2005", credentials: "Vice President", company: "DBS Bank" },
  { sNo: 3, name: "Mr. Saravanan Perumal", batch: "2001-2005", credentials: "Senior Manager", company: "LTI MINDTREE" },
  { sNo: 4, name: "Mr. Mohammed Fareed", batch: "2001-2005", credentials: "Program Manager", company: "Lululemon - Canada" },
  { sNo: 5, name: "Mr. Ahamed Jameel .A.M.T", batch: "2001-2005", credentials: "Technical Consultant", company: "HCL" },
  { sNo: 6, name: "Mr. Feroz Khan .N", batch: "2001-2005", credentials: "General Manager", company: "Maersk" },
  { sNo: 7, name: "Mr. Fayad Ahamed", batch: "2001-2005", credentials: "Project Manager", company: "Union Insurance Company Dubai" },
  { sNo: 8, name: "Mr. Mohammed Azeem", batch: "2001-2005", credentials: "Senior Manager Sales", company: "Allied Motors, Dubai" },
  { sNo: 9, name: "Mr. Srikanth K", batch: "2001-2005", credentials: "Technical Architect", company: "TeleApps" },
  { sNo: 10, name: "Mr. Majed Arafat", batch: "2001-2005", credentials: "IT Consultant", company: "TCS" },
  { sNo: 11, name: "Mr. Santhosh Kumar V", batch: "2001-2005", credentials: "Technical Architect", company: "HCL" },
  { sNo: 12, name: "Mr. Anbazhagan AT", batch: "2001-2005", credentials: "Technical Manager", company: "CTS" },
  { sNo: 13, name: "Mr. Balagurunathan", batch: "2001-2005", credentials: "Project Manager", company: "HCL" },
  { sNo: 14, name: "Dr Ezhilazhagan C", batch: "2001-2005", credentials: "Associate Professor", company: "Vel Tech" },
  { sNo: 15, name: "Mr. Suresh Kumar N", batch: "2001-2005", credentials: "Scientist E", company: "INCOIS" },
  { sNo: 16, name: "Mr. Mohammed Kamaal Yasin", batch: "2001-2005", credentials: "Service Delivery Manager", company: "TCS" },
  { sNo: 17, name: "Mr. Abdul Jaleel", batch: "2001-2005", credentials: "Infra Manager", company: "Emirates" },
  { sNo: 18, name: "Mr. Imran Sheik", batch: "2002-2006", credentials: "Customer Success Manager", company: "Firmex, Canada" },
  { sNo: 19, name: "Mr. Md Yasar", batch: "2002-2006", credentials: "Product Owner Manager", company: "Edvoy" },
  { sNo: 20, name: "Mr. Raju .A", batch: "2002-2006", credentials: "Infra Technology Manager", company: "CTS" },
  { sNo: 21, name: "Mr. Syed Faiyaz Hussain", batch: "2002-2006", credentials: "Digital Product Manager", company: "Anthem, USA" },
  { sNo: 22, name: "Ms. Harini Raman", batch: "2002-2006", credentials: "Business Analyst", company: "IBM" },
  { sNo: 23, name: "Mr. Hafeez Rahman", batch: "2002-2006", credentials: "Manager", company: "AL ZARA TRADING AND CONTRACTING" },
  { sNo: 24, name: "Mr. Mohamed Yusuff Shah", batch: "2002-2006", credentials: "Senior Accountant Manager", company: "Indian Audit and Accounts Department" },
  { sNo: 25, name: "Ms. Uma Maheshwari G", batch: "2002-2006", credentials: "Principal Member of Technical Staff", company: "Oracle India" },
  { sNo: 26, name: "Mr. Chandra Bose", batch: "2003-2007", credentials: "Senior Delivery Manager", company: "CMA CGM India" },
  { sNo: 27, name: "Mr. Ahmed Mubeen", batch: "2003-2007", credentials: "Manager", company: "Lighthouse Navigation Singapore Pte Ltd" },
  { sNo: 28, name: "Mr. Arun Natarajan", batch: "2003-2007", credentials: "Principle Consultant", company: "Emirates National Bank of Dubai" },
  { sNo: 29, name: "Mr. Ashik Mohamed", batch: "2004-2008", credentials: "Manager - IT", company: "Hyundai Motors Group" },
  { sNo: 30, name: "Mr. Mohamed Thahir N", batch: "2004-2008", credentials: "Lead - QA & CART Team", company: "Zoho Corporation" },
  { sNo: 31, name: "Ms. Misbah Khairunissa A", batch: "2005-2009", credentials: "Senior HR Manager", company: "Savista" },
  { sNo: 32, name: "Ms. Reshma M", batch: "2005-2009", credentials: "Project Manager", company: "HCL" },
  { sNo: 33, name: "Mr. Nizamuddin K", batch: "2005-2009", credentials: "Business Development Manager", company: "Touchline Technologies Pvt Ltd" },
  { sNo: 34, name: "Mr. Abubucker Siddiq", batch: "2005-2009", credentials: "Deputy Manager", company: "Transys Global forwarding Pvt. Ltd." },
  { sNo: 35, name: "Ms. Lakshmi Narayanan", batch: "2005-2009", credentials: "HR Manager", company: "Valeo" },
  { sNo: 36, name: "Mr. Ahmad Abdullateef", batch: "2005-2009", credentials: "Principal Software Architect", company: "Microsoft" },
  { sNo: 37, name: "Mr. Mohamed Hussain T R", batch: "2006-2010", credentials: "Staff Devops Engineer", company: "ARM Embedded Technologies" },
  { sNo: 38, name: "Mr. Sivanathan", batch: "2006-2010", credentials: "Manager", company: "ADF Data Science Pvt Ltd" },
  { sNo: 39, name: "Mr. Rahul Murali", batch: "2006-2010", credentials: "Lead Product Manager", company: "Thoughtworks" },
  { sNo: 40, name: "Mr. Vinoth Kumar Manickam", batch: "2006-2010", credentials: "Lead Developer", company: "Striven" },
  { sNo: 41, name: "Mr. Sathakathulla E", batch: "2006-2010", credentials: "eApps Testing Lead", company: "Hitachi Energy Global Services Pvt Ltd" },
  { sNo: 42, name: "Mr. Noorul Jaman", batch: "2007-2011", credentials: "Product Manager - QA", company: "Mind Gate Solutions Pvt Ltd" },
  { sNo: 43, name: "Mr. Shaik Salaudeen", batch: "2007-2011", credentials: "Technical Lead", company: "NTT Data Business Solutions" },
  { sNo: 44, name: "Mr. Sakthi Ajay", batch: "2007-2011", credentials: "Senior Consultant", company: "Virtusa" },
  { sNo: 45, name: "Mr. Sheikh Azharuddin", batch: "2008-2012", credentials: "IT Operations Head", company: "Nissan Renault Financial Services India Limited" },
  { sNo: 46, name: "Ms. Akila Rajesh", batch: "2008-2012", credentials: "Sales and Marketing Head", company: "Voora Property Developer Pvt Ltd" },
  { sNo: 47, name: "Mr. Deiva", batch: "2008-2012", credentials: "Senior Manager", company: "SPR Construction Pvt Ltd" },
  { sNo: 48, name: "Mr. Nasarullah S", batch: "2009-2013", credentials: "Tech Lead", company: "Wipro Ltd" },
  { sNo: 49, name: "Mr. Feroz Khan S", batch: "2009-2013", credentials: "SDET 2", company: "Vonage" },
  { sNo: 50, name: "Mr. Marzook Ahamed", batch: "2010-2014", credentials: "Assistant Manager", company: "PIXELS - DUBAI" },
  { sNo: 51, name: "Mr. Mohamed Yousuf Shariff", batch: "2010-2014", credentials: "Tax Consultant", company: "Shariff and Co" },
  { sNo: 52, name: "Mr. Muhamed Samir", batch: "2011-2015", credentials: "Cyber Security Manager", company: "Fidelity National Financial" },
  { sNo: 53, name: "M. Sharmela", batch: "2011-2015", credentials: "Senior Product Analyst", company: "Photon Interactive Pvt Ltd" },
  { sNo: 54, name: "Mr. Vignesh", batch: "2011-2015", credentials: "Senior BIM Modeler", company: "MCC Engineering Singapore Pte.Ltd" },
  { sNo: 55, name: "Mr. Harish N", batch: "2012-2016", credentials: "Technical Support Engineer", company: "iOPEX Technologies" },
  { sNo: 56, name: "Mr. Ram Prabhu S", batch: "2012-2016", credentials: "Senior QA Engineer", company: "QBurst Technologies Private limited" },
  { sNo: 57, name: "Ms. Reshma Rahila S", batch: "2013-2017", credentials: "Senior Software Engineer", company: "Prodapt Solutions Pvt Ltd" },
  { sNo: 58, name: "Mr. Mohammed Asif", batch: "2013-2017", credentials: "QAQC Civil Inspector", company: "Samsung C & T" },
  { sNo: 59, name: "Mr. Syed Haja Shereef S", batch: "2014 - 2018", credentials: "Recruitment Specialist", company: "Scaleneworks" },
  { sNo: 60, name: "Mr. Shanthoshkumar J", batch: "2014 - 2018", credentials: "Senior Software Engineer", company: "Broadcom" },
  { sNo: 61, name: "Mr. Safeeq Ahamed S", batch: "2015 - 2019", credentials: "Design Engineer", company: "KONE Elevators" },
  { sNo: 62, name: "Mr. Shaik Fathhullah S", batch: "2015 - 2019", credentials: "Technical & Sales Engineer", company: "Daystar Solar" },
  { sNo: 63, name: "Mr. Md Mubarak", batch: "2016 - 2020", credentials: "MEP Team Leader", company: "EJADAH UAE" },
  { sNo: 64, name: "Mr. Md Junaid A", batch: "2016 - 2020", credentials: "Estimation / Quantity Surveyor Engineer", company: "ELEMEC Electrical Contracting LLC" },
  { sNo: 65, name: "Mr. Sabari Murugan", batch: "2016 - 2020", credentials: "Associate Design Engineer", company: "Wall Technology" },
  { sNo: 66, name: "Mr. Jawahar Shalim", batch: "2017-2021", credentials: "Team Leader", company: "Milkbasket" },
  { sNo: 67, name: "Mr. Abdul Mukshith A", batch: "2017-2021", credentials: "Senior BIM Engineer", company: "MICRON ELECTRICALS" },
  { sNo: 68, name: "Mr. Mohamed Ali Hasan", batch: "2017-2021", credentials: "Operation Head", company: "Veena Jewellers" },
  { sNo: 69, name: "Mr. Imran L", batch: "2017-2021", credentials: "Site Engineer", company: "Al Rasheediah Safety and Security est, Abudhabi" },
  { sNo: 70, name: "Mr. Shamsudeen A", batch: "2018-2022", credentials: "Software Engineer", company: "HCL" },
  { sNo: 71, name: "Mr. Nadir Khan", batch: "2019 - 2023", credentials: "Supply Chain Engineer", company: "Inaithiram Impex Internet Pvt Ltd" },
  { sNo: 72, name: "Mr. Sathiyan", batch: "2019 - 2023", credentials: "Software Engineer", company: "Relevantz Technology Services Pvt Ltd" },
  { sNo: 73, name: "Mr. Md Zaid", batch: "2019 - 2023", credentials: "Software Engineer", company: "TCS" },
  { sNo: 74, name: "Ms. Senthamizh Selvi", batch: "2013", credentials: "Business Development Executive", company: "Corporate Sector" },
  { sNo: 75, name: "Mr. Aadil Ibrahim .A", batch: "2014", credentials: "Home Elevator Advisor", company: "Independent Advisor" },
  { sNo: 76, name: "Mr. Mohan Kumar", batch: "2014", credentials: "CEO / Founder", company: "Tech Enterprise" },
  { sNo: 77, name: "Ms. Yousuf Zulaikha", batch: "2014", credentials: "AR Specialist", company: "Tech Services" },
  { sNo: 78, name: "Mr. Vignesh .S", batch: "2014", credentials: "PMO - Auditor", company: "Quality Audit" },
  { sNo: 79, name: "Mr. Kannan .R", batch: "2014", credentials: "NDT Level-2 Inspector", company: "Industrial Inspection" },
  { sNo: 80, name: "Mr. Mohamed Abdullah .S", batch: "2015", credentials: "Automation Engineer", company: "Automation Industry" },
  { sNo: 81, name: "Mr. Kalil Ahmed .B", batch: "2015", credentials: "Electrical Design Engineer", company: "Power & Energy" },
  { sNo: 82, name: "Mr. Harikrishna", batch: "2016", credentials: "Insurance Surveyor", company: "Risk Assessment" },
  { sNo: 83, name: "Ms. Preeta Rani .S", batch: "2017", credentials: "Assistant Engineer", company: "Engineering Services" },
  { sNo: 84, name: "Mr. Nadeem .S", batch: "2017", credentials: "HVAC Plant Engineer", company: "HVAC Services" },
];

export interface AlumniScholarshipItem {
  sNo: number;
  studentName: string;
  batchDept: string;
  date: string;
}

export const alumniScholarshipsData: AlumniScholarshipItem[] = [
  { sNo: 1, studentName: "Fayiz Muhsin A", batchDept: "2025 - 2029 / B.Tech ACT", date: "03.09.2026" },
  { sNo: 2, studentName: "Shaheem U", batchDept: "2026 - 2030 / ECE", date: "03.09.2026" },
  { sNo: 3, studentName: "Jaasira Raihan K R", batchDept: "2026 - 2030 / CSE", date: "03.09.2026" },
  { sNo: 4, studentName: "Mohamed Humdhan I", batchDept: "2024 - 2028 / AIDS", date: "09.07.2026" },
  { sNo: 5, studentName: "Mohamed Uawais A", batchDept: "2023 - 2027 / CSE", date: "18.06.2026" },
  { sNo: 6, studentName: "Mohamed Humdhan I", batchDept: "2024 - 2028 / AIDS", date: "10.05.2026" },
  { sNo: 7, studentName: "Priyadharshini S", batchDept: "2023 - 2027 / CSBS", date: "07.03.2026" },
  { sNo: 8, studentName: "Revathi A", batchDept: "2024 - 2028 / ECE", date: "07.03.2026" },
  { sNo: 9, studentName: "Sireesh B", batchDept: "2024 - 2028 / ECE", date: "07.03.2026" },
  { sNo: 10, studentName: "Mohammed Shahul Hameed B", batchDept: "2024 - 2028 / ECE", date: "06.03.2026" },
  { sNo: 11, studentName: "Rahya N", batchDept: "2025 - 2029 / ECE", date: "05.03.2026" },
  { sNo: 12, studentName: "Rahini Mugil J", batchDept: "2025 - 2029 / Mech", date: "04.03.2026" },
  { sNo: 13, studentName: "Gopika R", batchDept: "2025 - 2029 / ECE ACT", date: "04.03.2026" },
  { sNo: 14, studentName: "Sujatha R", batchDept: "2025 - 2029 / CSE", date: "04.03.2026" },
  { sNo: 15, studentName: "Harini R", batchDept: "2024 - 2028 / AIML", date: "04.03.2026" },
  { sNo: 16, studentName: "Prathiba M", batchDept: "2025 - 2029 / ECE", date: "04.03.2026" },
  { sNo: 17, studentName: "Doorika M", batchDept: "2025 - 2029 / EEE", date: "04.03.2026" },
  { sNo: 18, studentName: "Jafeer Mohamed J", batchDept: "2024 - 2028 / AIDS", date: "04.03.2026" },
  { sNo: 19, studentName: "Rahim Basha W", batchDept: "2023 - 2027 / AIML", date: "27.02.2026" },
  { sNo: 20, studentName: "Mohamed ZiamZian A", batchDept: "2025 - 2029 / IT", date: "26.02.2026" },
  { sNo: 21, studentName: "Ameer Shahith M", batchDept: "2023 - 2027 / CSE", date: "26.02.2026" },
  { sNo: 22, studentName: "Abdullah N", batchDept: "2023 - 2027 / IT", date: "26.02.2026" },
  { sNo: 23, studentName: "Pirivindhan A", batchDept: "2024 - 2028 / AIDS", date: "26.02.2026" },
  { sNo: 24, studentName: "Afreen Fathim .S", batchDept: "2024 - 2028 / VLSI", date: "25.02.2026" },
  { sNo: 25, studentName: "Afasr Ali .N", batchDept: "2024 - 2028 / AIML", date: "24.02.2026" },
  { sNo: 26, studentName: "Afrin Fathima .B", batchDept: "2023 - 2027 / IT", date: "24.02.2026" },
  { sNo: 27, studentName: "Pragatha", batchDept: "2023 - 2027 / CSE", date: "22.02.2026" },
  { sNo: 28, studentName: "Samira Farhana .T", batchDept: "2025 - 2029 / AIML", date: "22.02.2026" },
  { sNo: 29, studentName: "Md Suhail .F", batchDept: "2024 - 2028 / CSE", date: "22.02.2026" },
  { sNo: 30, studentName: "Mahira Sultana", batchDept: "2023 - 2027 / ECE", date: "22.02.2026" },
  { sNo: 31, studentName: "Mohamed Salman .J", batchDept: "2023 - 2027 / ECE", date: "20.09.2025" },
  { sNo: 32, studentName: "Afrin Fathima", batchDept: "2023 - 2027 / IT", date: "26.08.2025" },
  { sNo: 33, studentName: "Harini R", batchDept: "2024 - 2028 / AIML", date: "06.08.2025" },
  { sNo: 34, studentName: "Samira Farhana T", batchDept: "2025 - 2029 / AIML", date: "06.08.2025" },
  { sNo: 35, studentName: "Indhuja I", batchDept: "2024 - 2028 / IT", date: "29.05.2025" },
  { sNo: 36, studentName: "Abu Jabar Mubarak U", batchDept: "2022 - 2026 / CSBS", date: "29.05.2025" },
  { sNo: 37, studentName: "Md Abdul Kalam N", batchDept: "2022 - 2026 / CSBS", date: "29.05.2025" },
  { sNo: 38, studentName: "Nazmi A", batchDept: "2022 - 2026 / CSE", date: "29.05.2025" },
  { sNo: 39, studentName: "Amirudeen F", batchDept: "2022 - 2026 / IT", date: "29.05.2025" },
  { sNo: 40, studentName: "Md Ashraf", batchDept: "2022 - 2026 / CSE", date: "29.05.2025" },
  { sNo: 41, studentName: "F.Md Suhail", batchDept: "2024 - 2028 / CSE", date: "29.05.2025" },
  { sNo: 42, studentName: "Md Sarhan K", batchDept: "2022 - 2026 / MECH", date: "29.05.2025" },
  { sNo: 43, studentName: "Mohamed Ashraf", batchDept: "2022 - 2026 / ECE", date: "07.04.2025" },
  { sNo: 44, studentName: "M.S.Shajaneshwar", batchDept: "2022 - 2026 / CSE", date: "26.03.2025" },
  { sNo: 45, studentName: "M.Mohamed Ashraf", batchDept: "2022 - 2026 / CSE", date: "25.03.2025" },
  { sNo: 46, studentName: "Afrin Fathima B", batchDept: "2023 - 2027 / IT", date: "25.03.2025" },
  { sNo: 47, studentName: "M.Mohamed Rasim", batchDept: "2023 - 2027 / IT", date: "13.03.2025" },
  { sNo: 48, studentName: "Zakir Hussain", batchDept: "2022 - 2026 / ECE", date: "12.03.2025" },
  { sNo: 49, studentName: "Rahim Basha W", batchDept: "2024 - 2028 / CSE AIML", date: "12.03.2025" },
  { sNo: 50, studentName: "Pragatha", batchDept: "2023 - 2027 / CSE", date: "12.03.2025" },
  { sNo: 51, studentName: "Mahira Sultana", batchDept: "2022 - 2027 / ECE", date: "07.03.2025" },
  { sNo: 52, studentName: "Md Sajith", batchDept: "2022 - 2026 / ECE", date: "07.03.2025" },
  { sNo: 53, studentName: "B.Dhanalakshmi", batchDept: "2023 - 2027 / IT", date: "07.03.2025" },
  { sNo: 54, studentName: "Nilofer Nisha", batchDept: "2022 - 2026 / ECE", date: "07.03.2025" },
  { sNo: 55, studentName: "MSAJCE Alumni Association Sponsored Sports Jersey to Hockey Team", batchDept: "Institutional Sponsorship", date: "30.09.2024" },
  { sNo: 56, studentName: "V.Abinaya", batchDept: "2021 - 2025 / ECE", date: "01.08.2024" },
  { sNo: 57, studentName: "M.Mohamed Afsal", batchDept: "2022 - 2026 / IT", date: "12.05.2024" },
  { sNo: 58, studentName: "B.Dhanalakshmi", batchDept: "2022 - 2026 / IT", date: "12.05.2024" },
  { sNo: 59, studentName: "Pragatha", batchDept: "2023 - 2027 / CSE", date: "16.03.2024" },
  { sNo: 60, studentName: "Md Abdul Kalam", batchDept: "2022 - 2026 / CSBS", date: "16.03.2024" },
  { sNo: 61, studentName: "Nazmi A", batchDept: "2022 - 2026 / CSE", date: "16.03.2024" },
  { sNo: 62, studentName: "Abu Jabar Mubarak", batchDept: "2022 - 2026 / CSBS", date: "16.03.2024" },
  { sNo: 63, studentName: "Nilofer Nisha", batchDept: "2022 - 2026 / ECE", date: "16.03.2024" },
  { sNo: 64, studentName: "Shaik Irfan", batchDept: "2021 - 2025 / Mech", date: "16.03.2024" },
  { sNo: 65, studentName: "Md Rasin", batchDept: "2023 - 2027 / IT", date: "15.03.2024" },
  { sNo: 66, studentName: "Farhan Basha T", batchDept: "2021 - 2025 / CSE", date: "13.03.2024" },
  { sNo: 67, studentName: "Ahamed Sheik", batchDept: "2021 - 2025 / CSE", date: "09.03.2024" },
  { sNo: 68, studentName: "Amirudeen", batchDept: "2022 - 2026 / IT", date: "09.03.2024" },
  { sNo: 69, studentName: "N. Abdullah", batchDept: "2022 - 2026 / IT", date: "09.03.2024" },
  { sNo: 70, studentName: "Md Sajith", batchDept: "2022 - 2026 / ECE", date: "09.03.2024" },
  { sNo: 71, studentName: "Ahamed Sheik", batchDept: "2021 - 2025 / CSE", date: "09.11.2023" },
  { sNo: 72, studentName: "MSAJCE Alumni Association Sponsored Sports Jersey to Cricket & Football Team", batchDept: "Institutional Sponsorship", date: "01.11.2023" },
  { sNo: 73, studentName: "Tech Unity - Sponsored for College Symposium Event", batchDept: "Institutional Sponsorship", date: "16.10.2023" },
  { sNo: 74, studentName: "Parvez Nabi Z", batchDept: "2023 - 2027 / IT", date: "02.08.2023" },
  { sNo: 75, studentName: "Amirudeen F", batchDept: "2022 - 2026 / IT", date: "08.08.2023" },
  { sNo: 76, studentName: "Fahd Ahmed Khan K", batchDept: "2023 - 2027 / ECE", date: "11.09.2023" },
  { sNo: 77, studentName: "Pragatha M", batchDept: "2023 - 2027 / CSE", date: "04.09.2023" },
  { sNo: 78, studentName: "Abdullah N", batchDept: "2023 - 2027 / IT", date: "04.09.2023" },
  { sNo: 79, studentName: "Ijas Ahamed R", batchDept: "2023 - 2027 / MECH", date: "04.09.2023" },
  { sNo: 80, studentName: "Md Sajith S", batchDept: "2022 - 2026 / ECE", date: "04.09.2023" },
  { sNo: 81, studentName: "Md Khaja Nawaz A", batchDept: "2020 - 2024 / CSE", date: "04.09.2023" },
  { sNo: 82, studentName: "Codeathon - Symposium Sponsorship", batchDept: "Institutional Sponsorship", date: "08.05.2023" },
  { sNo: 83, studentName: "Md Sajith S", batchDept: "2022 - 2026 / ECE", date: "07.04.2023" },
  { sNo: 84, studentName: "Md Sajith S", batchDept: "2022 - 2026 / ECE", date: "06.04.2023" },
  { sNo: 85, studentName: "Syeda Zuha Tasneem", batchDept: "2021 - 2025 / CSE", date: "29.03.2023" },
  { sNo: 86, studentName: "Md Khaja Nawaz A", batchDept: "2020 - 2024 / CSE", date: "29.03.2023" },
  { sNo: 87, studentName: "Farhan Basha T", batchDept: "2021 - 2025 / CSE", date: "24.03.2023" },
  { sNo: 88, studentName: "Abdullah S", batchDept: "2020 - 2024 / IT", date: "18.03.2023" },
  { sNo: 89, studentName: "BSM Cricket Trophy Tournament Sponsorship", batchDept: "Institutional Sponsorship", date: "24.02.2023" },
  { sNo: 90, studentName: "Sponsored Smart Board Device", batchDept: "Institutional Equipment", date: "23.01.2023" },
  { sNo: 91, studentName: "Top Performer - Dept Wise Awards", batchDept: "Academic Excellence", date: "15.10.2022" },
  { sNo: 92, studentName: "Cricket Kit Sponsored", batchDept: "Sports Sponsorship", date: "07.10.2022" },
  { sNo: 93, studentName: "Abdullah S", batchDept: "2020 - 2024 / IT", date: "15.09.2022" },
  { sNo: 94, studentName: "Ashwini A", batchDept: "2019 - 2023 / ECE", date: "08.09.2022" },
  { sNo: 95, studentName: "Akshaya K", batchDept: "2019 - 2023 / ECE", date: "08.09.2022" },
  { sNo: 96, studentName: "Md Sajith S", batchDept: "2022 - 2026 / ECE", date: "11.08.2022" },
  { sNo: 97, studentName: "Aayathul Mufarak A", batchDept: "2019 - 2023 / MECH", date: "02.08.2022" },
  { sNo: 98, studentName: "Assifa A", batchDept: "2019 - 2023 / ECE", date: "02.09.2023" },
  { sNo: 99, studentName: "Farhan Basha T", batchDept: "2021 - 2025 / CSE", date: "29.06.2022" },
  { sNo: 100, studentName: "Aayathul Mufarak A", batchDept: "2019 - 2023 / MECH", date: "30.03.2022" },
  { sNo: 101, studentName: "Parveen Begum M", batchDept: "2018 - 2022 / CSE", date: "30.03.2022" },
  { sNo: 102, studentName: "Aayathul Mufarak A", batchDept: "2019 - 2023 / MECH", date: "13.02.2021" },
  { sNo: 103, studentName: "Akshaya K", batchDept: "2019 - 2023 / ECE", date: "13.02.2021" },
];

const alumniSubNavTabs: SubNavTab[] = [
  { id: "overview", label: "Overview" },
  { id: "office-bearers", label: "Office Bearers" },
  { id: "activities", label: "Activities & Initiatives" },
  { id: "alumni-list", label: "Distinguished Alumni" },
  { id: "scholarship", label: "Scholarships" },
  { id: "reunion", label: "Reunions & Feedback" },
];

/* Dropdown Filter Options (Standardized MSAJCE Table Filters) */
const tenureYearOptions: DropdownOption[] = Object.keys(officeBearersByYear).map((yr) => ({
  value: yr,
  label: yr,
}));

const activityYearOptions: DropdownOption[] = [
  { value: "ALL", label: "All Years" },
  { value: "2026", label: "Year 2026" },
  { value: "2025", label: "Year 2025" },
  { value: "2024", label: "Year 2024" },
  { value: "2023", label: "Year 2023" },
  { value: "2022", label: "Year 2022" },
  { value: "2021 & Earlier", label: "2021 & Earlier" },
];

const batchEraOptions: DropdownOption[] = [
  { value: "ALL", label: "All Batch Eras" },
  { value: "2001-2005", label: "Batch 2001 - 2005" },
  { value: "2006-2010", label: "Batch 2006 - 2010" },
  { value: "2011-2015", label: "Batch 2011 - 2015" },
  { value: "2016-2023", label: "Batch 2016 - 2023" },
];

const scholarshipDeptOptions: DropdownOption[] = [
  { value: "ALL", label: "All Departments" },
  { value: "CSE", label: "CSE & CSBS" },
  { value: "ECE", label: "ECE, EEE & VLSI" },
  { value: "IT", label: "Information Tech (IT)" },
  { value: "AIDS & AIML", label: "AIDS, AIML & ACT" },
  { value: "Institutional", label: "Institutional / Merit" },
];

const PAGE_SIZE = 35;

function AlumniPage() {
  const [selectedYear, setSelectedYear] = useState<string>("2024 - Till Now");
  const [searchQuery, setSearchQuery] = useState("");
  const [bearerPage, setBearerPage] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "overview" | "office-bearers" | "activities" | "alumni-list" | "scholarship" | "reunion"
  >("overview");

  /* Activities State */
  const [activitiesSubTab, setActivitiesSubTab] = useState<"contributions" | "recognitions">("contributions");
  const [activitySearch, setActivitySearch] = useState("");
  const [activityYearFilter, setActivityYearFilter] = useState("ALL");
  const [activityPage, setActivityPage] = useState(1);

  /* Distinguished Alumni State */
  const [distinguishedSearch, setDistinguishedSearch] = useState("");
  const [distinguishedBatchFilter, setDistinguishedBatchFilter] = useState("ALL");
  const [distinguishedPage, setDistinguishedPage] = useState(1);

  /* Scholarship State */
  const [scholarshipSearch, setScholarshipSearch] = useState("");
  const [scholarshipDeptFilter, setScholarshipDeptFilter] = useState("ALL");
  const [scholarshipPage, setScholarshipPage] = useState(1);

  const currentBearers = officeBearersByYear[selectedYear] || [];
  const filteredBearers = currentBearers.filter(
    (b) =>
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.designation.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const paginatedBearers = filteredBearers.slice(
    (bearerPage - 1) * PAGE_SIZE,
    bearerPage * PAGE_SIZE
  );

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased selection:bg-primary selection:text-white"
    >
      {/* SECONDARY SUB-NAV HEADER (Directly Below Main Site Header) */}
      <SecondarySubNav
        title="MSAJCE ALUMNI"
        tabs={alumniSubNavTabs}
        activeTab={activeTab}
        action={
          <RedirectButton
            href="https://enrollonline.co.in/Registration/Apply/MSAJCE"
            label="Register"
            className="px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs"
          />
        }
        onSelectTab={(tabId) => {
          setActiveTab(tabId as any);
          const contentEl = document.getElementById("alumni-content-hub");
          if (contentEl) {
            contentEl.scrollIntoView({ behavior: "smooth" });
          }
        }}
        onTitleClick={() => {
          setActiveTab("overview");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      <div className="flex-1 pt-0 md:pt-1">
        {/* ========================================================================= */}
        {/* 1. DYNAMIC HERO BANNER: Full Hero for Overview, Compact for Other Tabs    */}
        {/* ========================================================================= */}
        {activeTab === "overview" ? (
          /* Full Institution-Style Hero with Docked Alumni Stats (Overview Tab Only) */
          <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[calc(100svh-104px)] md:min-h-[calc(100vh-116px)] flex flex-col justify-end">
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                key="alumni-hero-bg"
                src="https://www.msajce-edu.in/images/alumni/heade-Alumni.jpg"
                alt="MSAJCE Alumni Network Header"
                className="w-full h-full object-cover object-center brightness-[0.85] filter contrast-105 select-none pointer-events-none rounded-none"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/alumni_section.jpg";
                }}
              />
              {/* Subtle gradient overlay for depth and title legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
            </div>

            {/* Title Container: Fading Translucent Backdrop, Title & Register Action */}
            <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-12 sm:pt-16 md:pt-20 pb-4 sm:pb-6 md:pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05, ease: smoothEase }}
                className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15"
              >
                <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-[1.1]">
                  OUR ALUMNI
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: smoothEase }}
                className="shrink-0"
              >
                <RedirectButton
                  href="https://enrollonline.co.in/Registration/Apply/MSAJCE"
                  label="Register in Alumni Portal"
                  className="px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm"
                />
              </motion.div>
            </div>

            {/* Fading Facts & Figures Docked Stats Strip (Smooth Gradient Fade, No Harsh Line, Maroon Figures) */}
            <div className="relative z-10 w-full bg-gradient-to-t from-black via-black/80 to-transparent pt-8 sm:pt-10 md:pt-14 pb-5 sm:pb-6 md:pb-8">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
                <div className="flex items-center justify-between gap-4 mb-3 sm:mb-4">
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black font-oswald uppercase tracking-wide text-primary">
                    Facts &amp; Figures
                  </h2>
                  <span className="text-[10px] sm:text-[11px] md:text-xs font-oswald uppercase tracking-widest text-white/50 hidden sm:inline">
                    Institutional Benchmark Metrics
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 md:divide-x md:divide-white/15">
                  {heroStats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.15 + idx * 0.06, ease: smoothEase }}
                      className="first:pl-0 md:pl-4 lg:pl-6 space-y-0.5 sm:space-y-1"
                    >
                      <div className="font-oswald text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-primary tracking-tight leading-none">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-white/85 font-libre leading-snug pt-0.5 sm:pt-1">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : (
          /* Standard Compact Hero Banner for Other Alumni Tabs (Office Bearers, Activities, Distinguished Alumni, Scholarships, Reunions) */
          <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
            <div className="absolute inset-0 z-0">
              <img
                key={activeTab}
                src="https://www.msajce-edu.in/images/alumni/heade-Alumni.jpg"
                alt="MSAJCE Alumni Network"
                className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/alumni_section.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1440px] w-full px-3.5 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 md:pt-24 pb-0">
              <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
                <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
                  {alumniSubNavTabs.find((t) => t.id === activeTab)?.label ?? "Our Alumni"}
                </h1>
              </div>
            </div>
          </section>
        )}

      {/* ========================================================================= */}
      {/* 2. OFFICIAL CONTENT HUB (Matching msajce-edu.in/alumni.php)                */}
      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* 2. OFFICIAL CONTENT HUB — EDITORIAL MINIMAL & ALTERNATING WAVE DESIGN     */}
      {/* ========================================================================= */}
      <section id="alumni-content-hub" className="py-0">
        {/* MAIN TAB CONTENT DISPLAY */}

        {/* TAB 1: OVERVIEW & OBJECTIVES */}
        {activeTab === "overview" && (
          <div>
            {/* Section A: Overview */}
            <div className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#121214]">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="space-y-4 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    MSAJCE Alumni Association Overview
                  </h2>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
                    Alumni association of Mohamed Sathak A.J. College of Engineering welcomes you all to join us. This association is formed to reconnect and foster intellectual and emotional relationships between alumni and parent organization. Also bring in a good will and voluntary commitment to support future engineers of the institution and provide industry-institute relationship and enthusiastically participate in various activities organized by the college.
                  </p>
                </div>

                {/* PDF Report Download & Register Action Row */}
                <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
                  <div className="space-y-0.5">
                    <h4 className="text-sm sm:text-base font-bold font-oswald uppercase text-foreground">
                      MSAJCE Alumnus Strength in Social Media Platform
                    </h4>
                    <p className="text-xs text-muted-foreground font-libre">
                      Official Analytical Report &amp; Global Registration
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <RedirectButton
                      href="https://enrollonline.co.in/Registration/Apply/MSAJCE"
                      label="Register in Alumni Portal"
                      className="px-5 py-2.5"
                    />
                    <RedirectButton
                      href="https://www.msajce-edu.in/images/alumni/AlumnusStrength-SocialMedia.pdf"
                      label="Download PDF"
                      className="px-5 py-2.5"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Wave Divider A → B */}
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

            {/* Section B: Official Constitutional Objectives */}
            <div className="py-12 sm:py-16 md:py-20 bg-[#F3F3F2] dark:bg-[#18181B]">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    Official Constitutional Objectives
                  </h3>
                </div>

                {/* Open Editorial List without Cards */}
                <div className="divide-y divide-border/40 border-y border-border/40 font-libre">
                  {registeredObjectives.map((obj, idx) => (
                    <div key={idx} className="py-4.5 flex items-start gap-4 sm:gap-6">
                      <span className="font-oswald font-black text-sm sm:text-base text-primary shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed">
                        {obj}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Wave Divider B → A */}
            <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
              <svg
                viewBox="0 0 1440 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-10 sm:h-14 md:h-16 lg:h-20 block preserve-3d"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
                  className="fill-white dark:fill-[#121214]"
                />
              </svg>
            </div>

            {/* Section C: Global Regional Chapters */}
            <div className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#121214]">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                  Global Regional Chapters
                </h3>

                <div className="divide-y divide-border/40 border-y border-border/40">
                  {globalChapters.map((ch) => (
                    <div key={ch.region} className="py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <h4 className="text-lg font-bold font-oswald uppercase text-foreground">
                          {ch.region}
                        </h4>
                        <p className="text-xs sm:text-sm font-libre text-muted-foreground">
                          <strong className="text-foreground">Domain:</strong> {ch.focus}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {ch.hubs.split(" • ").map((hub) => (
                          <span key={hub} className="px-3 py-1 bg-muted/60 text-foreground font-libre text-xs font-semibold border border-border/40 rounded-tl-sm rounded-br-sm rounded-tr-none rounded-bl-none">
                            {hub}
                          </span>
                        ))}
                        <span className="px-3 py-1 bg-primary text-white font-oswald font-bold text-xs uppercase tracking-wider rounded-tl-sm rounded-br-sm rounded-tr-none rounded-bl-none">
                          {ch.count}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Wave Divider A → B */}
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

            {/* Section D: Campus & Alumni Showcase (Compact Proportionate Layout) */}
            <div className="py-8 sm:py-10 md:py-12 bg-[#F3F3F2] dark:bg-[#18181B]">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    MSAJCE Campus &amp; Alumni Showcase
                  </h3>
                  <RedirectButton
                    href="https://www.msajce-edu.in/images/alumni/AlumniAssociationRodMap.jpg"
                    label="View High-Res Roadmap"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Embedded College Video */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold font-oswald uppercase text-foreground">
                      Campus &amp; Alumni Video
                    </h4>
                    <div className="relative w-full aspect-video overflow-hidden bg-black border border-border/60 rounded-md">
                      <iframe
                        src="https://www.youtube-nocookie.com/embed/aNVaQWh1Pp4?rel=0&modestbranding=1&controls=1&playsinline=1"
                        title="MSAJCE College & Alumni Feature Video"
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  {/* Main Alumni Gathering Image */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold font-oswald uppercase text-foreground">
                      Alumni Main Assembly
                    </h4>
                    <div className="relative w-full aspect-video overflow-hidden border border-border/60 bg-black rounded-md">
                      <img
                        key="alumni-gathering"
                        src="https://www.msajce-edu.in/images/alumni/Alumni-Main.jpg"
                        alt="MSAJCE Alumni Association Main Assembly"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/images/alumni_section.jpg";
                        }}
                      />
                    </div>
                  </div>

                  {/* Alumni Association Roadmap Graphic (Compact & Proportionate) */}
                  <div className="space-y-2 md:col-span-2 lg:col-span-1">
                    <h4 className="text-sm font-bold font-oswald uppercase text-foreground">
                      Alumni Association Roadmap
                    </h4>
                    <a
                      href="https://www.msajce-edu.in/images/alumni/AlumniAssociationRodMap.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative w-full aspect-video overflow-hidden border border-border/60 bg-black/90 group rounded-md cursor-zoom-in"
                      title="Click to view full-resolution roadmap"
                    >
                      <img
                        key="alumni-roadmap"
                        src="https://www.msajce-edu.in/images/alumni/AlumniAssociationRodMap.jpg"
                        alt="MSAJCE Alumni Association Roadmap"
                        className="w-full h-full object-contain p-1"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-oswald uppercase tracking-wider font-bold">
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Enlarge Roadmap</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: OFFICE BEARERS */}
        {activeTab === "office-bearers" && (
          <div>
            {/* Section 1 (White / #121214 Canvas): Council Roster Table */}
            <div className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#121214] transition-colors">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="space-y-4 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    Office Bearers Council Roster
                  </h2>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
                    Official governing council of Mohamed Sathak A. J. College of Engineering Alumni Association (Reg. No: SRG/Chengalpattu/16/2021) elected to oversee student mentoring, institutional relations, and global chapter development.
                  </p>
                </div>

                {/* Search & Tenure Year Dropdown Toolbar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                  <SearchBar
                    placeholder="Search office bearer, role, designation..."
                    value={searchQuery}
                    onValueChange={(val) => {
                      setSearchQuery(val);
                      setBearerPage(1);
                    }}
                    containerClassName="w-full sm:w-80 shrink-0"
                  />

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="text-xs font-oswald font-bold text-muted-foreground uppercase whitespace-nowrap">
                      Tenure Year:
                    </span>
                    <CustomDropdown
                      options={tenureYearOptions}
                      value={selectedYear}
                      onChange={(val) => {
                        setSelectedYear(val);
                        setBearerPage(1);
                      }}
                      className="w-full sm:w-auto"
                    />
                  </div>
                </div>

                {/* Official Publications DataGrid Table Standard */}
                <DataGridContainer id="bearers-table-container" className="bg-white dark:bg-[#121214] shadow-xs">
                  <div className="overflow-x-auto bg-transparent">
                    <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                      <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                        <tr>
                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16">S.No</th>
                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-20">Photo</th>
                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[220px]">Name of Alumni / Official</th>
                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[240px]">Designation &amp; Role</th>
                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right w-40">Category</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/40 font-libre">
                        {paginatedBearers.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="py-8 text-center text-sm font-libre text-muted-foreground">
                              No office bearer found matching "{searchQuery}".
                            </td>
                          </tr>
                        ) : (
                          paginatedBearers.map((b) => (
                            <tr key={b.name + b.role} className="hover:bg-foreground/[0.02] transition-colors">
                              <td className="py-3.5 px-4 font-libre text-xs text-muted-foreground whitespace-nowrap">
                                {b.sNo}
                              </td>
                              <td className="py-2.5 px-4">
                                <div className="w-10 h-10 overflow-hidden border border-border/60 bg-muted shrink-0 rounded-xs">
                                  {b.photo ? (
                                    <img
                                      key={b.name}
                                      src={b.photo}
                                      alt={b.name}
                                      className="w-full h-full object-cover"
                                      onError={(e) => {
                                        (e.target as HTMLImageElement).src = "/images/favicon.png";
                                      }}
                                    />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-oswald font-bold text-xs">
                                      {b.name.charAt(0)}
                                    </div>
                                  )}
                                </div>
                              </td>
                              <td className="py-3.5 px-4 font-bold font-oswald uppercase text-foreground text-sm sm:text-base">
                                {b.name}
                              </td>
                              <td className="py-3.5 px-4 font-oswald font-bold uppercase text-primary text-sm">
                                {b.role} <span className="text-xs font-normal text-muted-foreground font-libre capitalize">({b.designation})</span>
                              </td>
                              <td className="py-3.5 px-4 text-right whitespace-nowrap">
                                <span className="px-2.5 py-1 bg-foreground/5 text-foreground font-libre text-[11px] font-semibold uppercase border border-border/40 inline-block rounded-tl-sm rounded-br-sm rounded-tr-none rounded-bl-none">
                                  {b.category}
                                </span>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                  <TablePagination
                    currentPage={bearerPage}
                    totalRecords={filteredBearers.length}
                    pageSize={PAGE_SIZE}
                    onPageChange={(p) => {
                      setBearerPage(p);
                      document.getElementById("bearers-table-container")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    label="office bearers"
                  />
                </DataGridContainer>
              </div>
            </div>

            {/* Wave Divider A → B */}
            <WaveDividerAB />

            {/* Section 2 (#F3F3F2 / #18181B Canvas): Executive Committee */}
            <div className="py-12 sm:py-16 md:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="space-y-4 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    Executive Committee Members ({selectedYear})
                  </h2>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
                    The Executive Committee oversees the strategic execution of alumni mentoring, campus engagement, and student career readiness programs across all engineering faculties during the elected tenure.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-libre">
                  {executiveMembers.map((m, idx) => (
                    <div
                      key={m}
                      className="p-4 bg-white dark:bg-[#121214] border border-border/60 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs space-y-1 shadow-2xs hover:border-foreground/30 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-primary">
                          #{String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="px-2 py-0.5 text-[10px] font-oswald uppercase tracking-wider bg-foreground/5 text-foreground/80 border border-border/40 rounded-tl-sm rounded-br-sm">
                          Executive
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-foreground font-oswald uppercase pt-1">
                        {m}
                      </div>
                      <div className="text-[11px] text-muted-foreground font-libre">
                        Tenure {selectedYear}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Wave Divider B → A */}
            <WaveDividerBA />

            {/* Section 3 (White / #121214 Canvas): Constitutional Duties */}
            <div className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#121214] transition-colors">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="space-y-4 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    Constitutional Duties &amp; Portfolio Responsibilities
                  </h2>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
                    Key operational domains and statutory mandates established under the official alumni association bylaws in accordance with the Tamil Nadu Societies Registration Act, 1975.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-libre">
                  {[
                    {
                      role: "Presidential & Vice Presidential Stewardship",
                      desc: "Strategic guidance, presiding over Annual General Body meetings, representing alumni interests at Academic Council forums, and approving strategic institutional collaborations.",
                      code: "DIR-01",
                    },
                    {
                      role: "Secretariat & Operational Administration",
                      desc: "Maintaining the statutory register of members, issuing notices of general assemblies, recording official minutes, managing digital correspondence, and organizing annual homecomings.",
                      code: "DIR-02",
                    },
                    {
                      role: "Treasury & Endowment Audit Oversight",
                      desc: "Managing the official association bank account, overseeing scholarship fund disbursements, publishing audited annual financial statements, and ensuring statutory compliance.",
                      code: "DIR-03",
                    },
                    {
                      role: "Academic Liaison & Student Career Mentoring",
                      desc: "Organizing industry guest lectures, facilitating corporate campus recruitments, securing internships, reviewing curriculum in Board of Studies meetings, and evaluating student innovations.",
                      code: "DIR-04",
                    },
                  ].map((item) => (
                    <div
                      key={item.code}
                      className="p-5 sm:p-6 bg-background dark:bg-[#18181B] border border-border/60 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs space-y-2 shadow-2xs hover:border-foreground/30 transition-colors"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-oswald font-bold text-base sm:text-lg text-foreground uppercase tracking-tight">
                          {item.role}
                        </h3>
                        <span className="font-mono text-xs font-bold text-primary shrink-0">
                          {item.code}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Wave Divider A → B */}
            <WaveDividerAB />

            {/* Section 4 (#F3F3F2 / #18181B Canvas): Leadership Transition & Secretariat */}
            <div className="py-12 sm:py-16 md:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="space-y-4 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    Leadership Transition &amp; Secretariat Enrollment
                  </h2>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
                    The Office Bearers Council meets quarterly to review ongoing student mentorship initiatives, evaluate scholarship allocations, and expand international regional chapters. All engineering graduates are encouraged to connect with the secretariat.
                  </p>
                </div>

                <div className="pt-4 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
                  <div className="space-y-0.5">
                    <h4 className="text-sm sm:text-base font-bold font-oswald uppercase text-foreground">
                      Join the Governing Network
                    </h4>
                    <p className="text-xs text-muted-foreground font-libre">
                      Register as an active alumni representative or coordinate departmental reunions.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <RedirectButton
                      href="https://enrollonline.co.in/Registration/Apply/MSAJCE"
                      label="Register in Alumni Council"
                      className="px-5 py-2.5"
                    />
                    <RedirectButton
                      href="mailto:alumni@msajce-edu.in"
                      label="Contact Secretariat"
                      className="px-5 py-2.5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ACTIVITIES & INITIATIVES */}
        {activeTab === "activities" && (
          <div>
            <div className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#121214]">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    Alumni Initiatives &amp; Institutional Recognitions
                  </h2>

                  {/* Sub-Tab Selector Buttons */}
                  <div className="flex items-center gap-2 bg-muted/40 p-1 border border-border/40 self-start md:self-auto rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs">
                    <button
                      onClick={() => {
                        setActivitiesSubTab("contributions");
                        setActivityPage(1);
                      }}
                      className={`px-4 py-2 text-xs font-oswald uppercase font-bold tracking-wider transition-all rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs ${
                        activitiesSubTab === "contributions"
                          ? "bg-primary text-white shadow-xs"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Alumni Contributions (65)
                    </button>
                    <button
                      onClick={() => {
                        setActivitiesSubTab("recognitions");
                        setActivityPage(1);
                      }}
                      className={`px-4 py-2 text-xs font-oswald uppercase font-bold tracking-wider transition-all rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs ${
                        activitiesSubTab === "recognitions"
                          ? "bg-primary text-white shadow-xs"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Institutional Recognitions (42)
                    </button>
                  </div>
                </div>

                {/* Search & Year Filter Toolbar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <SearchBar
                    placeholder="Search programme, alumni, date..."
                    value={activitySearch}
                    onValueChange={(val) => {
                      setActivitySearch(val);
                      setActivityPage(1);
                    }}
                    containerClassName="w-full sm:w-80 shrink-0"
                  />

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="text-xs font-oswald font-bold text-muted-foreground uppercase whitespace-nowrap">
                      Year:
                    </span>
                    <CustomDropdown
                      options={activityYearOptions}
                      value={activityYearFilter}
                      onChange={(val) => {
                        setActivityYearFilter(val);
                        setActivityPage(1);
                      }}
                      className="w-full sm:w-auto"
                    />
                  </div>
                </div>

                {/* Official Publications DataGrid Table Standard */}
                {(() => {
                  const targetData = activitiesSubTab === "contributions" ? alumniContributionsData : institutionRecognitionsData;

                  const filtered = targetData.filter((item) => {
                    const matchesSearch =
                      item.programme.toLowerCase().includes(activitySearch.toLowerCase()) ||
                      item.details.toLowerCase().includes(activitySearch.toLowerCase()) ||
                      item.date.toLowerCase().includes(activitySearch.toLowerCase());

                    if (!matchesSearch) return false;
                    if (activityYearFilter === "ALL") return true;
                    if (activityYearFilter === "2021 & Earlier") {
                      return (
                        item.date.endsWith("2021") ||
                        item.date.endsWith("2020") ||
                        item.date.endsWith("2019") ||
                        item.date.includes("2019")
                      );
                    }
                    return item.date.endsWith(activityYearFilter);
                  });

                  const paginatedActivities = filtered.slice(
                    (activityPage - 1) * PAGE_SIZE,
                    activityPage * PAGE_SIZE
                  );

                  return (
                    <div className="space-y-3">
                      <div className="text-xs font-mono text-muted-foreground">
                        Showing {filtered.length === 0 ? 0 : (activityPage - 1) * PAGE_SIZE + 1} –{" "}
                        {Math.min(activityPage * PAGE_SIZE, filtered.length)} of {filtered.length} records{" "}
                        {filtered.length !== targetData.length && `(filtered from ${targetData.length})`}
                      </div>

                      <DataGridContainer id="activities-table-container" className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16">S.No</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[220px]">Name Of The Programme</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[340px]">Alumni Details &amp; Contributions</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-32">Date</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right w-32">Report</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {paginatedActivities.length === 0 ? (
                                <tr>
                                  <td colSpan={5} className="py-8 text-center text-sm font-libre text-muted-foreground">
                                    No records found matching query "{activitySearch}".
                                  </td>
                                </tr>
                              ) : (
                                paginatedActivities.map((item) => (
                                  <tr key={item.sNo + item.programme} className="hover:bg-foreground/[0.02] transition-colors">
                                    <td className="py-3.5 px-4 font-libre text-xs text-muted-foreground whitespace-nowrap">
                                      {item.sNo}
                                    </td>
                                    <td className="py-3.5 px-4 font-bold font-oswald text-foreground text-sm leading-snug">
                                      {item.programme}
                                    </td>
                                    <td className="py-3.5 px-4 text-xs sm:text-sm text-foreground/90 leading-relaxed font-libre">
                                      <FormattedAlumniDetails details={item.details} />
                                    </td>
                                    <td className="py-3.5 px-4 font-libre text-xs text-primary whitespace-nowrap font-semibold">
                                      {item.date}
                                    </td>
                                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                                      {item.pdfUrl ? (
                                        <RedirectButton
                                          href={item.pdfUrl}
                                          label="PDF"
                                          icon={<FileText className="w-3.5 h-3.5" />}
                                        />
                                      ) : (
                                        <span className="text-xs text-muted-foreground">—</span>
                                      )}
                                    </td>
                                  </tr>
                                ))
                              )}
                            </tbody>
                          </table>
                        </div>
                        <TablePagination
                          currentPage={activityPage}
                          totalRecords={filtered.length}
                          pageSize={PAGE_SIZE}
                          onPageChange={(p) => {
                            setActivityPage(p);
                            document.getElementById("activities-table-container")?.scrollIntoView({ behavior: "smooth", block: "start" });
                          }}
                          label="programme records"
                        />
                      </DataGridContainer>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Wave Divider A → B */}
            <WaveDividerAB />

            {/* Section 2 (#F3F3F2 / #18181B Canvas): Flagship Alumni Pillars */}
            <div className="py-12 sm:py-16 md:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="space-y-4 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    Flagship Alumni Pillars &amp; Industry Interaction
                  </h2>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
                    Four foundational pillars driving structured alumni engagement across undergraduate faculties, providing students with direct access to modern industrial practices.
                  </p>
                </div>

                <div className="divide-y divide-border/40 border-y border-border/40 font-libre">
                  {associationActivities.map((act) => (
                    <div key={act.title} className="py-5 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-bold font-oswald uppercase text-foreground">
                          {act.title}
                        </h3>
                        <span className="text-xs font-oswald font-bold uppercase text-primary">
                          {act.frequency}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/80 font-libre leading-relaxed">
                        {act.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Wave Divider B → A */}
            <WaveDividerBA />

            {/* Section 3 (White / #121214 Canvas): Mentorship & Career Readiness */}
            <div className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#121214] transition-colors">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="space-y-4 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    Student Mentorship &amp; Industry Readiness Channels
                  </h2>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
                    Senior alumni across global tech leaders, research labs, and startups provide hands-on coaching, technical interview drills, and career roadmapping.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-libre">
                  {[
                    {
                      title: "Technical Stack Readiness & Cloud Workshops",
                      desc: "Hands-on weekend bootcamps led by senior engineering alumni covering Docker, Kubernetes, AWS architecture, full-stack React/Next.js, and generative AI engineering workflows.",
                      code: "MNT-01",
                    },
                    {
                      title: "Corporate Mock Interviews & Portfolio Reviews",
                      desc: "Simulated technical interview panels and resume debugging clinics conducted prior to campus placement drives to build confidence and polish problem-solving articulation.",
                      code: "MNT-02",
                    },
                    {
                      title: "Global Higher Education & Research Advisory",
                      desc: "Alumni pursuing MS, M.Tech, and Ph.D. degrees in the US, UK, Germany, and Australia mentor undergraduates through GRE, IELTS, university shortlisting, and SOP drafting.",
                      code: "MNT-03",
                    },
                    {
                      title: "Startup Incubation & Capstone Product Mentoring",
                      desc: "Alumni startup founders evaluate final-year engineering projects, assisting student teams in patent filings, MVP validation, and venture seed grant applications.",
                      code: "MNT-04",
                    },
                  ].map((ch) => (
                    <div
                      key={ch.code}
                      className="p-5 sm:p-6 bg-background dark:bg-[#18181B] border border-border/60 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs space-y-2 shadow-2xs hover:border-foreground/30 transition-colors"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-oswald font-bold text-base sm:text-lg text-foreground uppercase tracking-tight">
                          {ch.title}
                        </h3>
                        <span className="font-mono text-xs font-bold text-primary shrink-0">
                          {ch.code}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                        {ch.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Wave Divider A → B */}
            <WaveDividerAB />

            {/* Section 4 (#F3F3F2 / #18181B Canvas): Archival & Collaboration */}
            <div className="py-12 sm:py-16 md:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="space-y-4 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    Departmental Interaction Archival &amp; Collaboration
                  </h2>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
                    Every engineering department at MSAJCE maintains an accredited interaction ledger documenting alumni lectures, technical webinars, and placement contributions for institutional NAAC and NBA compliances.
                  </p>
                </div>

                <div className="pt-4 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
                  <div className="space-y-0.5">
                    <h4 className="text-sm sm:text-base font-bold font-oswald uppercase text-foreground">
                      Propose an Alumni Session
                    </h4>
                    <p className="text-xs text-muted-foreground font-libre">
                      Share your industry expertise through a technical webinar or student mentoring panel.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <RedirectButton
                      href="https://enrollonline.co.in/Registration/Apply/MSAJCE"
                      label="Propose a Guest Lecture"
                      className="px-5 py-2.5"
                    />
                    <RedirectButton
                      href="https://www.msajce-edu.in/images/alumni/AlumnusStrength-SocialMedia.pdf"
                      label="Download Activity Summary"
                      className="px-5 py-2.5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: DISTINGUISHED ALUMNI */}
        {activeTab === "alumni-list" && (
          <div>
            {/* Section A: Directory */}
            <div className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#121214]">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    Distinguished Alumni &amp; Industry Leaders
                  </h2>
                </div>

                {/* Search & Batch Era Filter Toolbar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <SearchBar
                    placeholder="Search alumnus, role, company..."
                    value={distinguishedSearch}
                    onValueChange={(val) => {
                      setDistinguishedSearch(val);
                      setDistinguishedPage(1);
                    }}
                    containerClassName="w-full sm:w-80 shrink-0"
                  />

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="text-xs font-oswald font-bold text-muted-foreground uppercase whitespace-nowrap">
                      Batch Era:
                    </span>
                    <CustomDropdown
                      options={batchEraOptions}
                      value={distinguishedBatchFilter}
                      onChange={(val) => {
                        setDistinguishedBatchFilter(val);
                        setDistinguishedPage(1);
                      }}
                      className="w-full sm:w-auto"
                    />
                  </div>
                </div>

                {/* Data Filtering */}
                {(() => {
                  const filtered = distinguishedAlumniData.filter((item) => {
                    const matchesSearch =
                      item.name.toLowerCase().includes(distinguishedSearch.toLowerCase()) ||
                      item.credentials.toLowerCase().includes(distinguishedSearch.toLowerCase()) ||
                      item.company.toLowerCase().includes(distinguishedSearch.toLowerCase()) ||
                      item.batch.toLowerCase().includes(distinguishedSearch.toLowerCase());

                    if (!matchesSearch) return false;
                    if (distinguishedBatchFilter === "ALL") return true;

                    if (distinguishedBatchFilter === "2001-2005") {
                      return item.batch.includes("2001") || item.batch.includes("2002") || item.batch.includes("2003") || item.batch.includes("2004") || item.batch.includes("2005");
                    }
                    if (distinguishedBatchFilter === "2006-2010") {
                      return item.batch.includes("2006") || item.batch.includes("2007") || item.batch.includes("2008") || item.batch.includes("2009") || item.batch.includes("2010");
                    }
                    if (distinguishedBatchFilter === "2011-2015") {
                      return item.batch.includes("2011") || item.batch.includes("2012") || item.batch.includes("2013") || item.batch.includes("2014") || item.batch.includes("2015");
                    }
                    if (distinguishedBatchFilter === "2016-2023") {
                      return item.batch.includes("2016") || item.batch.includes("2017") || item.batch.includes("2018") || item.batch.includes("2019") || item.batch.includes("2020") || item.batch.includes("2021") || item.batch.includes("2022") || item.batch.includes("2023");
                    }
                    return true;
                  });

                  const paginatedDistinguished = filtered.slice(
                    (distinguishedPage - 1) * PAGE_SIZE,
                    distinguishedPage * PAGE_SIZE
                  );

                  return (
                    <div className="space-y-3">
                      <div className="text-xs font-mono text-muted-foreground">
                        Showing {filtered.length === 0 ? 0 : (distinguishedPage - 1) * PAGE_SIZE + 1} –{" "}
                        {Math.min(distinguishedPage * PAGE_SIZE, filtered.length)} of {filtered.length} alumni leaders{" "}
                        {filtered.length !== distinguishedAlumniData.length && `(filtered from ${distinguishedAlumniData.length})`}
                      </div>

                      <DataGridContainer id="distinguished-table-container" className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16">S.No</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[220px]">Name Of Alumnus</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-32">Batch</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[240px]">Designation / Credentials</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[240px]">Industry / Enterprise</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {paginatedDistinguished.length === 0 ? (
                                <tr>
                                  <td colSpan={5} className="py-8 text-center text-sm font-libre text-muted-foreground">
                                    No alumni records found matching "{distinguishedSearch}".
                                  </td>
                                </tr>
                              ) : (
                                paginatedDistinguished.map((item) => (
                                  <tr key={item.sNo + item.name} className="hover:bg-foreground/[0.02] transition-colors">
                                    <td className="py-3.5 px-4 font-libre text-xs text-muted-foreground whitespace-nowrap">
                                      {item.sNo}
                                    </td>
                                    <td className="py-3.5 px-4 font-bold font-oswald uppercase text-foreground text-sm">
                                      {item.name}
                                    </td>
                                    <td className="py-3.5 px-4 font-libre text-xs text-muted-foreground whitespace-nowrap">
                                      {item.batch}
                                    </td>
                                    <td className="py-3.5 px-4 font-libre text-xs text-foreground font-medium">
                                      {item.credentials}
                                    </td>
                                    <td className="py-3.5 px-4 font-oswald font-bold uppercase text-primary text-xs sm:text-sm">
                                      {item.company}
                                    </td>
                                  </tr>
                                ))
                              )}
                            </tbody>
                          </table>
                        </div>
                        <TablePagination
                          currentPage={distinguishedPage}
                          totalRecords={filtered.length}
                          pageSize={PAGE_SIZE}
                          onPageChange={(p) => {
                            setDistinguishedPage(p);
                            document.getElementById("distinguished-table-container")?.scrollIntoView({ behavior: "smooth", block: "start" });
                          }}
                          label="alumni leaders"
                        />
                      </DataGridContainer>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Wave Divider A → B */}
            <WaveDividerAB />

            {/* Section 2 (#F3F3F2 / #18181B Canvas): Global Industry Sectors */}
            <div className="py-12 sm:py-16 md:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="space-y-4 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    Alumni Leadership Across Key Enterprise Sectors
                  </h2>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
                    Graduates of MSAJCE hold distinguished leadership positions across Fortune 500 multinationals, deep-tech research organizations, and foundational infrastructure projects worldwide.
                  </p>
                </div>

                <div className="divide-y divide-border/40 border-y border-border/40 font-libre">
                  {[
                    { sector: "Enterprise Cloud & Software Engineering", count: "5,400+ Alumni", companies: "Google • Microsoft • Amazon • Cisco • Oracle • IBM" },
                    { sector: "AI Systems, Data & Product Innovation", count: "2,600+ Alumni", companies: "Cognizant • TCS • Infosys • Wipro • Accenture • Capgemini" },
                    { sector: "SaaS Platforms & Tech Startups", count: "1,800+ Alumni", companies: "Zoho • Freshworks • Chargebee • Guvi • SaaS Founders" },
                    { sector: "Civil Infrastructure & Metro Rail", count: "2,100+ Alumni", companies: "L&T Construction • Shapoorji Pallonji • Chennai Metro Rail • Gulf Infrastructure" },
                    { sector: "Automotive, Aerospace & Embedded VLSI", count: "1,900+ Alumni", companies: "Ford • Hyundai • Bosch • Renault Nissan • Visteon • Valeo" },
                  ].map((sec) => (
                    <div key={sec.sector} className="py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="text-base sm:text-lg font-bold font-oswald uppercase text-foreground">
                          {sec.sector}
                        </h3>
                        <p className="text-xs sm:text-sm font-libre text-muted-foreground">
                          {sec.companies}
                        </p>
                      </div>
                      <span className="text-xs font-oswald font-black uppercase text-primary shrink-0">
                        {sec.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Wave Divider B → A */}
            <WaveDividerBA />

            {/* Section 3 (White / #121214 Canvas): Entrepreneurial Ecosystem */}
            <div className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#121214] transition-colors">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="space-y-4 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    Entrepreneurial Ventures &amp; Startup Ecosystem
                  </h2>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
                    A vibrant community of alumni entrepreneurs driving technological innovation, job creation, and campus startup incubation across domestic and global markets.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-libre">
                  {[
                    {
                      title: "Venture Incubation & High-Impact Startups",
                      desc: "Over 45+ registered enterprises founded by MSAJCE alumni operating across enterprise SaaS, AI automation, construction technology, and industrial cybersecurity.",
                      tag: "45+ Startups",
                    },
                    {
                      title: "Direct Talent Acquisition & Pre-Placement",
                      desc: "Alumni-founded firms offer exclusive campus hiring tracks, technical apprenticeships, and summer software residencies specifically tailored for MSAJCE engineering students.",
                      tag: "Direct Hiring",
                    },
                    {
                      title: "Innovation Patents & Prototype Commercialization",
                      desc: "Experienced alumni CTOs mentor student inventors, reviewing provisional patent drafts and guiding hardware/software prototypes toward market readiness.",
                      tag: "R&D Mentoring",
                    },
                  ].map((p) => (
                    <div
                      key={p.title}
                      className="p-5 sm:p-6 bg-background dark:bg-[#18181B] border border-border/60 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs space-y-2 shadow-2xs hover:border-foreground/30 transition-colors"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-oswald font-bold text-base text-foreground uppercase tracking-tight">
                          {p.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-foreground/85 font-libre leading-relaxed">
                        {p.desc}
                      </p>
                      <div className="pt-2">
                        <span className="px-2.5 py-1 bg-primary/10 text-primary font-oswald font-bold text-xs uppercase tracking-wider rounded-tl-sm rounded-br-sm inline-block">
                          {p.tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Wave Divider A → B */}
            <WaveDividerAB />

            {/* Section 4 (#F3F3F2 / #18181B Canvas): Global Network Enrollment */}
            <div className="py-12 sm:py-16 md:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="space-y-4 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    Global Alumni Network Directory Enrollment
                  </h2>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
                    Reconnect with classmates, professors, and over 15,000+ engineering alumni across 25+ nations. Register or update your professional coordinates to be featured in the official directory.
                  </p>
                </div>

                <div className="pt-4 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
                  <div className="space-y-0.5">
                    <h4 className="text-sm sm:text-base font-bold font-oswald uppercase text-foreground">
                      Update Professional Profile
                    </h4>
                    <p className="text-xs text-muted-foreground font-libre">
                      Keep your designation, organization, and country updated for alumni chapter invitations.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <RedirectButton
                      href="https://enrollonline.co.in/Registration/Apply/MSAJCE"
                      label="Update Directory Profile"
                      className="px-5 py-2.5"
                    />
                    <RedirectButton
                      href="mailto:alumni@msajce-edu.in"
                      label="Nominate an Alumnus"
                      className="px-5 py-2.5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: SCHOLARSHIP CONTRIBUTION */}
        {activeTab === "scholarship" && (
          <div>
            {/* Section A: Overview & Beneficiaries Register */}
            <div className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#121214]">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-1">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                      Alumni Scholarship &amp; Financial Aid Disbursal
                    </h2>
                    <p className="text-xs sm:text-sm font-libre text-muted-foreground">
                      Cumulative Fund Disbursed: <strong className="text-foreground font-bold">₹42,64,900</strong> (103 Beneficiaries)
                    </p>
                  </div>

                  <RedirectButton
                    href="https://www.feepayr.com/"
                    label="Contribute Online (FeePayr)"
                  />
                </div>

                {/* Search & Department Filter Toolbar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <SearchBar
                    placeholder="Search student, department, date..."
                    value={scholarshipSearch}
                    onValueChange={(val) => {
                      setScholarshipSearch(val);
                      setScholarshipPage(1);
                    }}
                    containerClassName="w-full sm:w-80 shrink-0"
                  />

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="text-xs font-oswald font-bold text-muted-foreground uppercase whitespace-nowrap">
                      Department:
                    </span>
                    <CustomDropdown
                      options={scholarshipDeptOptions}
                      value={scholarshipDeptFilter}
                      onChange={(val) => {
                        setScholarshipDeptFilter(val);
                        setScholarshipPage(1);
                      }}
                      className="w-full sm:w-auto"
                    />
                  </div>
                </div>

                {/* Beneficiaries Data Table (Official Publications DataGrid Standard) */}
                {(() => {
                  const filtered = alumniScholarshipsData.filter((item) => {
                    const matchesSearch =
                      item.studentName.toLowerCase().includes(scholarshipSearch.toLowerCase()) ||
                      item.batchDept.toLowerCase().includes(scholarshipSearch.toLowerCase()) ||
                      item.date.toLowerCase().includes(scholarshipSearch.toLowerCase());

                    if (!matchesSearch) return false;
                    if (scholarshipDeptFilter === "ALL") return true;

                    if (scholarshipDeptFilter === "CSE") return item.batchDept.includes("CSE") || item.batchDept.includes("CSBS");
                    if (scholarshipDeptFilter === "ECE") return item.batchDept.includes("ECE") || item.batchDept.includes("EEE") || item.batchDept.includes("VLSI");
                    if (scholarshipDeptFilter === "IT") return item.batchDept.includes("IT");
                    if (scholarshipDeptFilter === "AIDS & AIML") return item.batchDept.includes("AIDS") || item.batchDept.includes("AIML") || item.batchDept.includes("ACT");
                    if (scholarshipDeptFilter === "Institutional") return item.batchDept.includes("Institutional") || item.batchDept.includes("Academic") || item.batchDept.includes("Sports");

                    return true;
                  });

                  const paginatedScholarships = filtered.slice(
                    (scholarshipPage - 1) * PAGE_SIZE,
                    scholarshipPage * PAGE_SIZE
                  );

                  return (
                    <div className="space-y-3">
                      <div className="text-xs font-mono text-muted-foreground">
                        Showing {filtered.length === 0 ? 0 : (scholarshipPage - 1) * PAGE_SIZE + 1} –{" "}
                        {Math.min(scholarshipPage * PAGE_SIZE, filtered.length)} of {filtered.length} disbursal records{" "}
                        {filtered.length !== alumniScholarshipsData.length && `(filtered from ${alumniScholarshipsData.length})`}
                      </div>

                      <DataGridContainer id="scholarships-table-container" className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16">S.No</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[280px]">Student / Beneficiary Name</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[260px]">Batch / Department / Program</th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right w-36">Disbursal Date</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {paginatedScholarships.length === 0 ? (
                                <tr>
                                  <td colSpan={4} className="py-8 text-center text-sm font-libre text-muted-foreground">
                                    No scholarship record found matching "{scholarshipSearch}".
                                  </td>
                                </tr>
                              ) : (
                                paginatedScholarships.map((item) => (
                                  <tr key={item.sNo + item.studentName + item.date} className="hover:bg-foreground/[0.02] transition-colors">
                                    <td className="py-3.5 px-4 font-libre text-xs text-muted-foreground whitespace-nowrap">
                                      {item.sNo}
                                    </td>
                                    <td className="py-3.5 px-4 font-bold font-oswald uppercase text-foreground text-sm sm:text-base">
                                      {item.studentName}
                                    </td>
                                    <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-muted-foreground">
                                      {item.batchDept}
                                    </td>
                                    <td className="py-3.5 px-4 font-libre text-xs text-right text-primary font-semibold whitespace-nowrap">
                                      {item.date}
                                    </td>
                                  </tr>
                                ))
                              )}
                            </tbody>
                          </table>
                        </div>
                        <TablePagination
                          currentPage={scholarshipPage}
                          totalRecords={filtered.length}
                          pageSize={PAGE_SIZE}
                          onPageChange={(p) => {
                            setScholarshipPage(p);
                            document.getElementById("scholarships-table-container")?.scrollIntoView({ behavior: "smooth", block: "start" });
                          }}
                          label="disbursal records"
                        />
                      </DataGridContainer>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Wave Divider A → B */}
            <WaveDividerAB />

            {/* Section 2 (#F3F3F2 / #18181B Canvas): Scholarship Categories */}
            <div className="py-12 sm:py-16 md:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="space-y-4 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    Alumni Scholarship Endowment Categories
                  </h2>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
                    Four targeted endowment categories ensuring financial inclusivity, rewarding academic merit, and assisting undergraduate scholars facing sudden socioeconomic hardships.
                  </p>
                </div>

                <div className="divide-y divide-border/40 border-y border-border/40 font-libre">
                  {scholarshipTiers.map((tier) => (
                    <div key={tier.title} className="py-5 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg font-bold font-oswald uppercase text-foreground">
                          {tier.title}
                        </h3>
                        <span className="text-sm font-oswald font-black text-primary">
                          {tier.amount}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-foreground/80 font-libre leading-relaxed">
                        {tier.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Wave Divider B → A */}
            <WaveDividerBA />

            {/* Section 3 (White / #121214 Canvas): Governance & Selection Protocol */}
            <div className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#121214] transition-colors">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="space-y-4 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    Governance, Eligibility &amp; Selection Protocol
                  </h2>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
                    Endowment grants are disbursed through a transparent four-stage institutional screening protocol governed jointly by the Alumni Scholarship Board and college academic leadership.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-libre">
                  {[
                    {
                      title: "Academic Diligence & Semester Performance",
                      desc: "Undergraduates must maintain consistent academic standing with a minimum 7.5 CGPA and zero active arrears in university semester examinations.",
                      code: "CRIT-01",
                    },
                    {
                      title: "Verified Family Income & Socioeconomic Need",
                      desc: "Applicants submit government-verified family income certificates and parental occupation records evaluated by the institutional social screening committee.",
                      code: "CRIT-02",
                    },
                    {
                      title: "Departmental Faculty Endorsement",
                      desc: "Confidential recommendations from the Head of Department and Class Advisor assessing student conduct, laboratory discipline, and technical dedication.",
                      code: "CRIT-03",
                    },
                    {
                      title: "Direct Academic Ledger Crediting",
                      desc: "Approved scholarships are credited directly toward the student's institutional tuition fee account with transparent electronic receipt generation.",
                      code: "CRIT-04",
                    },
                  ].map((crit) => (
                    <div
                      key={crit.code}
                      className="p-5 sm:p-6 bg-background dark:bg-[#18181B] border border-border/60 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs space-y-2 shadow-2xs hover:border-foreground/30 transition-colors"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-oswald font-bold text-base sm:text-lg text-foreground uppercase tracking-tight">
                          {crit.title}
                        </h3>
                        <span className="font-mono text-xs font-bold text-primary shrink-0">
                          {crit.code}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                        {crit.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Wave Divider A → B */}
            <WaveDividerAB />

            {/* Section 4 (#F3F3F2 / #18181B Canvas): Named Endowments & Contribution */}
            <div className="py-12 sm:py-16 md:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="space-y-4 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    Support the Alumni Endowment Fund
                  </h2>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
                    Alumni individuals, graduation batches, or corporate employers can establish named scholarship endowments or contribute directly to the revolving student financial aid corpus.
                  </p>
                </div>

                <div className="pt-4 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
                  <div className="space-y-0.5">
                    <h4 className="text-sm sm:text-base font-bold font-oswald uppercase text-foreground">
                      Contribute to Student Financial Aid
                    </h4>
                    <p className="text-xs text-muted-foreground font-libre">
                      100% of your contributions go directly toward student tuition relief and innovation grants.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <RedirectButton
                      href="https://www.feepayr.com/"
                      label="Contribute via FeePayr"
                      className="px-5 py-2.5"
                    />
                    <RedirectButton
                      href="mailto:alumni@msajce-edu.in"
                      label="Establish Named Endowment"
                      className="px-5 py-2.5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: REUNION & ALUMNI FEEDBACK VIDEOS */}
        {activeTab === "reunion" && (
          <div>
            {/* Section A: Main Reunion Celebrations */}
            <div className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#121214]">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="space-y-4 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    Annual Alumni Meet &amp; Homecoming Program
                  </h2>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
                    Alumni Meet 2k23 reunited over 300+ graduates across 2009–2020 batches on campus to reconnect with faculty, guide students, and strengthen institutional ties.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <RedirectButton
                    href="https://www.msajce-edu.in/uploads/alumni/AlumniMeetBanner.pdf"
                    label="Invitation PDF"
                    icon={<FileText className="w-3.5 h-3.5" />}
                  />
                  <RedirectButton
                    href="https://photos.app.goo.gl/Qg5EabymfsW948G37"
                    label="View Photos"
                    icon={<ImageIcon className="w-3.5 h-3.5" />}
                  />
                </div>

                {/* Banner Showcase */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div className="overflow-hidden border border-border/60 bg-black aspect-[16/9] rounded-md">
                    <img
                      key="alumni-meet-banner"
                      src="https://www.msajce-edu.in/images/alumni/AlumniMeetBanner.jpg"
                      alt="Alumni Meet 2k23 Main Banner"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/alumni_section.jpg";
                      }}
                    />
                  </div>

                  <div className="overflow-hidden border border-border/60 bg-black aspect-[16/9] rounded-md">
                    <img
                      key="alumni-meet-invitation"
                      src="https://www.msajce-edu.in/images/alumni/AlumniMee-23Invitation.jpg"
                      alt="Alumni Meet 2k23 Official Invitation"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Wave Divider A → B */}
            <WaveDividerAB />

            {/* Section 2 (#F3F3F2 / #18181B Canvas): Alumni Video Testimonials */}
            <div className="py-12 sm:py-16 md:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="space-y-4 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    Alumni Video Feedback &amp; Testimonials
                  </h2>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
                    Hear directly from our engineering graduates as they share memories, faculty mentorship experiences, corporate milestones, and advice for current students.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-libre">
                  {[
                    { title: "Alumni Testimonial — Industry Career Insights", videoId: "AxvzRz-jycU", author: "MSAJCE Graduate" },
                    { title: "Alumni Feedback — Academic Experience & Placement Support", videoId: "CjYcjDT_aJM", author: "MSAJCE Alumnus" },
                    { title: "Alumni Speech — Corporate Growth & Mentorship", videoId: "JSebNUSUYIo", author: "Senior Engineer Alumnus" },
                    { title: "Alumni Interaction — Engineering Innovation", videoId: "fmqwx1AMTt4", author: "Tech Architect Alumnus" },
                    { title: "Alumni Reflection — Sathak Trust Educational Legacy", videoId: "B1_eMR-UT5g", author: "Entrepreneur Alumnus" },
                    { title: "Alumni Sharing — Global Work Opportunities", videoId: "8bTUbZ07EjA", author: "International Alumnus" },
                    { title: "Alumni Guest Speaker — Tech & Software Trends", videoId: "3F9TT-FFbSs", author: "Lead Developer Alumnus" },
                    { title: "Alumni Panel — Career Readiness & Skillsets", videoId: "U1KJs4WX51A", author: "Project Manager Alumnus" },
                    { title: "Alumni Journey — From MSAJCE to Global Success", videoId: "tiIZ2TCSI3w", author: "Enterprise Consultant" },
                  ].map((vid) => (
                    <div key={vid.videoId} className="space-y-2">
                      <div className="aspect-[16/9] w-full overflow-hidden bg-black border border-border/60 rounded-md">
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${vid.videoId}`}
                          title={vid.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold font-oswald uppercase text-foreground leading-snug">
                        {vid.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Wave Divider B → A */}
            <WaveDividerBA />

            {/* Section 3 (White / #121214 Canvas): Milestone Reunions */}
            <div className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#121214] transition-colors">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="space-y-4 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    Historical Homecoming Assemblies
                  </h2>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
                    Archival spotlight on Alumni Meet 2021 celebrating the pioneer batches of 2005, 2006, and 2007. Graduates gathered on campus to commemorate 15 years of professional achievement and honor veteran faculty members.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="overflow-hidden border border-border/60 bg-black aspect-[21/9] min-h-[220px] rounded-md">
                    <img
                      key="alumni-meet-2021"
                      src="https://www.msajce-edu.in/images/alumni/AlumniMeet2021.jpg"
                      alt="Alumni Meet 2021 2005-2007 Batches Assembly"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/alumni_section.jpg";
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-libre pt-1">
                    <span>Grand Auditorium Assembly • Batches 2005, 2006 &amp; 2007</span>
                    <span className="font-oswald uppercase tracking-wider font-bold text-foreground">Archival Edition</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Wave Divider A → B */}
            <WaveDividerAB />

            {/* Section 4 (#F3F3F2 / #18181B Canvas): Organize Your Batch Reunion */}
            <div className="py-12 sm:py-16 md:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
              <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 xl:px-16 space-y-8">
                <div className="space-y-4 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    Organize Your Batch Reunion
                  </h2>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
                    Returning to campus is a cherished milestone. The Alumni Relations Cell coordinates comprehensive campus logistics for decennial, silver jubilee, and batch-specific reunion gatherings on campus.
                  </p>
                </div>

                <div className="pt-4 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
                  <div className="space-y-0.5">
                    <h4 className="text-sm sm:text-base font-bold font-oswald uppercase text-foreground">
                      Plan a Campus Homecoming
                    </h4>
                    <p className="text-xs text-muted-foreground font-libre">
                      Our team coordinates auditorium bookings, faculty invitations, photography, and refreshments.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <RedirectButton
                      href="mailto:alumni@msajce-edu.in"
                      label="Request Batch Reunion"
                      className="px-5 py-2.5"
                    />
                    <RedirectButton
                      href="https://photos.app.goo.gl/Qg5EabymfsW948G37"
                      label="Browse Reunion Archive"
                      className="px-5 py-2.5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      </div>
    </motion.main>
  );
}
