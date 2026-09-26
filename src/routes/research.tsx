import { useState, useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Reveal } from "@/components/motion";
import { motion, AnimatePresence } from "framer-motion";
import { SecondarySubNav } from "@/components/layout/SecondarySubNav";
import { DataGridContainer } from "@/components/ui/data-grid-table";
import { 
  BookOpen, 
  Lightbulb, 
  Rocket, 
  Award, 
  CheckCircle2, 
  Search,
  ExternalLink,
  ShieldCheck,
  UserCheck,
  Star,
  Target,
  FileText,
  ArrowRight
} from "lucide-react";

const title = "Research & Innovation | MSAJCE";
const description = "Research & Development Cell, Publications, Patents, MoE Institution's Innovation Council (IIC), and NISP Startup Ecosystem at Mohamed Sathak A.J. College of Engineering.";

export const Route = createFileRoute("/research")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      tab: (search['tab'] as string) || "overview",
    };
  },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: UnifiedResearchPage,
});

// --- DATA DEFINITIONS ---

const subNavTabs = [
  { id: "overview", label: "Overview" },
  { id: "publications", label: "Publications" },
  { id: "patents", label: "Patents & IPR" },
  { id: "iic", label: "Innovation Council (IIC)" },
  { id: "startup-ecosystem", label: "Startup Ecosystem" },
];

// Overview Data
const researchStats = [
  { label: "Anna University Approved Supervisors", value: "7", icon: UserCheck },
  { label: "Patents Published & Filed", value: "23+", icon: Lightbulb },
  { label: "Books & Book Chapters Published", value: "31+", icon: BookOpen },
  { label: "Registered Copyrights", value: "10", icon: ShieldCheck },
];

const objectivesList = [
  "To encourage students and faculty members to carry out research in Engineering, Technology, Science, and Humanities by providing necessary infrastructure.",
  "To create zeal among students and faculty towards research and innovation and publish findings in reputed conferences and journals.",
  "To assist students to apply funding under student project schemes to agencies like TNSCST, MSME, and IEI (I).",
  "To work closely with industry to understand real-world requirements, resulting in new products and institute-industry collaboration.",
  "To support the government by taking up sponsored research projects offered by TNSCST, DST, AICTE, UGC, ISRO, DRDO, CSIR, and DBT.",
  "To enhance general research capability of budding engineers through participation in conferences, seminars, workshops, and project competitions.",
  "To organize various workshops, seminars, and training programs related to promotion of research.",
  "To encourage both students and faculty to apply for copyrights and patents."
];

const advisoryCommittee = [
  { name: "Dr. B. Janarthanan", role: "Convener", designation: "Head - Research, MSAJCE, Chennai" },
  { name: "Dr. Srinivasan", role: "External Advisor", designation: "Secretary, TNSCST, Chennai" },
  { name: "Dr. Parthiban", role: "External Advisor", designation: "Associate Professor / Production, NIT Trichy" },
  { name: "Dr. B. Sheela Rani", role: "External Advisor", designation: "Dean Research, Sathyabama University, Chennai" },
  { name: "Dr. Sabitha Ramakrishnan", role: "External Advisor", designation: "Professor, Dept of Instrumentation, MIT Chennai" },
  { name: "Ph.D Qualified Faculty", role: "Members", designation: "All Doctorate Faculty Members, MSAJCE" },
];

const supervisorsData = [
  { name: "Dr. K.S. Srinivasan", refNo: "1440364", dept: "ECE / Admin", area: "VLSI Design, Digital Signal & Image Processing" },
  { name: "Dr. I. Manju", refNo: "3040008", dept: "EEE", area: "VLSI Design, Video Processing" },
  { name: "Dr. B. Janarthanan", refNo: "2620054", dept: "Mechanical", area: "Machine Design, Mechanical Vibrations, Vehicle Dynamics" },
  { name: "Dr. G. Ramesh", refNo: "4120175", dept: "Mechanical", area: "Natural Fiber, Composite Material, Mathematical Modeling" },
  { name: "Dr. S. Prasath", refNo: "4220015", dept: "Mechanical", area: "Welding Technology, Materials Engineering, Manufacturing Engineering" },
  { name: "Dr. A. Suvitha", refNo: "2070720", dept: "Chemistry (S&H)", area: "Inorganic Chemistry" },
  { name: "Dr. M. Vigneshkumar", refNo: "3910019", dept: "Civil Engineering", area: "Remote Sensing, GIS, Survey & Geology, Environmental Engineering" },
];

// Publications Data
const booksData = [
  { id: 1, authors: "Dr. K.S. Srinivasan", title: "Communication Theory", isbn: "978-81-89638-43-6" },
  { id: 2, authors: "Dr. K.S. Srinivasan", title: "Principles of Communication Engineering", isbn: "978-81-87721-95-6" },
  { id: 3, authors: "Dr. K.S. Srinivasan", title: "Electric Circuits and Electronic Devices", isbn: "978-81-8472-085-3" },
  { id: 4, authors: "Dr. K.S. Srinivasan", title: "Basic Electrical and Electronics Engineering", isbn: "978-81-8472-086-0" },
  { id: 5, authors: "Dr. K.S. Srinivasan", title: "Digital Communication", isbn: "978-81-89638-19-1" },
  { id: 6, authors: "Dr. K.S. Srinivasan", title: "Electronic Devices", isbn: "978-81-8472-254-3" },
  { id: 7, authors: "Dr. K.S. Srinivasan", title: "Electronic Devices and Circuits", isbn: "978-81-8472-101-0" },
  { id: 8, authors: "Dr. K.S. Srinivasan", title: "Electronic Circuits I", isbn: "978-81-8472-100-3" },
  { id: 9, authors: "Dr. K.S. Srinivasan", title: "Electronic Circuits II", isbn: "978-81-89638-16-0" },
  { id: 10, authors: "Dr. K.S. Srinivasan", title: "Electronics and Microprocessors", isbn: "978-81-89638-19-1" },
  { id: 11, authors: "Dr. K.S. Srinivasan", title: "Digital Signal Processing", isbn: "81-87721-46-4" },
  { id: 12, authors: "Dr. K.S. Srinivasan", title: "Electric Circuit Theory", isbn: "978-81-938894-2-8" },
  { id: 13, authors: "Dr. K.S. Srinivasan", title: "Electronic Devices and Circuits (As per JNTU Syllabus)", isbn: "978-81-89638-08-5" },
  { id: 14, authors: "Dr. E. Dhiravidachelvi", title: "Fundamentals of Electrical Measuring Instruments", isbn: "978-93-83409-35-8" },
  { id: 15, authors: "Dr. E. Dhiravidachelvi", title: "Data Science for COVID-19 (Elsevier)", isbn: "978-0-12-824536-1" },
  { id: 16, authors: "Dr. E. Dhiravidachelvi", title: "Applications of Big Data in Health Care", isbn: "978-0-820203-6" },
  { id: 17, authors: "Dr. E. Dhiravidachelvi", title: "Monograph on Fundamentals of Electrical Measuring Instruments", isbn: "978-93-83409-35-8" },
  { id: 18, authors: "Dr. K.S. Srinivasan, Dr. P. Subramanian, Mr. D. Weslin", title: "Wireless Sensor Networks", isbn: "978-81-954927-4-9" },
  { id: 19, authors: "Mr. C. Daniel", title: "Impact of Lockdown for Research Scholars", isbn: "978-93-90853-50-2" },
  { id: 20, authors: "Mr. S. Senthil Pandi", title: "Machine Learning", isbn: "978-93-91373-85-6" },
  { id: 21, authors: "Mr. S. Senthil Pandi", title: "Computer Networks", isbn: "202041033273" },
  { id: 22, authors: "Dr. I. Manju, Dr. E. Dhiravidachelvi, Mrs. G. Premalatha", title: "Digital Communication and Computer Networks", isbn: "819549276-2" },
];

// Patents & Copyrights Data
const officialPatents = [
  { id: 1, inventors: "Dr. E. Dhiravidachelvi", title: "Design and implementation of a disaster management system using IoT and cloud computing techniques for a connected building to save lives with early warnings", patentNo: "2020101867", status: "Granted" },
  { id: 2, inventors: "Dr. E. Dhiravidachelvi, Mrs. E. Jayanthi, Mrs. I. Suganthi, Mr. J. Raja, Mr. S. Naveenkumar", title: "Vehicular Edge Computing Using A Smart Embedded System For Intelligent Transportation", patentNo: "202041033273", status: "Published" },
  { id: 3, inventors: "Mr. K. Vairaperumal", title: "Battery Swapping Smart Station for Future E-Vehicle Transportation", patentNo: "202141021897 A", status: "Published" },
  { id: 4, inventors: "Mr. Chintala Venkatesh", title: "A Vehicle Tire Control System at curved roads using intelligent interfaces and support vector machines", patentNo: "202141025111 A", status: "Published" },
  { id: 5, inventors: "Mrs. D. Hema Sumitha", title: "Real time based IOT Enabled Smart Metering System", patentNo: "202141026200 A", status: "Published" },
  { id: 6, inventors: "Mrs. G. Premalatha, Dr. E. Dhiravidachelvi", title: "Fundamentals of Electrical Measuring Instruments", patentNo: "202141014294 A", status: "Published" },
  { id: 7, inventors: "Mr. M. Kamarajan, Mr. M. Ashokkumar", title: "Wireless sensor network for long-term environmental checking for internet of things application", patentNo: "202141061248", status: "Published" },
  { id: 8, inventors: "Mr. M. Kamarajan", title: "Deep learning based automatic eye cataract detection algorithm using MATLAB", patentNo: "202141061583 A", status: "Published" },
  { id: 9, inventors: "Mr. S.R. Mohan", title: "Refrigerator with food warming apparatus attachment", patentNo: "365189001", status: "Granted" },
  { id: 10, inventors: "Mr. D. Weslin, Mr. V. Vigneshwaran", title: "A method and a device of Wireless Master Joystick Controller for Robotics", patentNo: "202241071210", status: "Published" },
  { id: 11, inventors: "Dr. K.S. Srinivasan, Mrs. Jayanthi", title: "A Smart Device to Monitoring the Optic Cable and Inform the Users in Case of any Discrepancies", patentNo: "202241071306", status: "Published" },
  { id: 12, inventors: "Dr. Someshwaran, Mr. Tharani Kumar", title: "Machine Learning - based closed-loop mixture of concrete equipment and the method", patentNo: "202241071309", status: "Published" },
  { id: 13, inventors: "Dr. Balakrishnan, Mr. Vinothkumar", title: "Dedicated drone-based testing of building's strength located in a hazardous environment", patentNo: "202241071308", status: "Published" },
  { id: 14, inventors: "Dr. B. Janarthanam", title: "Unmanned Aerial Vehicle", patentNo: "202041047806 A", status: "Published" },
  { id: 15, inventors: "Mr. S. Senthil Pandi, Sankareswaran", title: "Computer implemented method of image classification with extreme learning machine", patentNo: "201941054497 A", status: "Published" },
  { id: 16, inventors: "Mr. A. Syed Ismail", title: "An AI & ML based system for building architecture & map designing", patentNo: "202141050400", status: "Published" },
  { id: 17, inventors: "Mrs. G. Premalatha, Dr. E. Dhiravidachelvi", title: "Real time crowd analysis using static video surveillance", patentNo: "202141014294", status: "Published" },
  { id: 18, inventors: "Mr. S.R. Mohan, Mr. V. Vigneshwaran, Mr. D. Sakthivel", title: "Study on Mechanical Characterization of Graphene reinforced Aluminium Metal Matrix Composites", patentNo: "202141012155", status: "Published" },
  { id: 19, inventors: "Dr. S. Prasath", title: "Friction stir welding of dissimilar aluminium alloys using tapered threaded tool profile", patentNo: "202141005812", status: "Published" },
  { id: 20, inventors: "Dr. B. Muthu Kumar", title: "Type – 2 Diabetes detection and estimation from glucose levels by feature detection using machine learning algorithm", patentNo: "202041023885", status: "Published" },
  { id: 21, inventors: "Dr. G. Ramesh, Mr. S. Syed Abudhahir", title: "Smart Painting Roller with Temperature Sensor to Detect the Temperature of Wall and Paint", patentNo: "202241071203", status: "Published" },
  { id: 22, inventors: "Mrs. I.S. Suganthi, Mrs. Priyadharshini", title: "Design a Micro Strip Patch for Spectrum Utilization in Cognitive Radio Networks", patentNo: "202241071307", status: "Published" },
  { id: 23, inventors: "Dr. I. Manju, Mr. C. Venkatesh", title: "ML Strategy for Performance Enhancement of Phase Change Material for a Smart Control Solar Application", patentNo: "202241071305", status: "Published" }
];

const officialCopyrights = [
  { id: 1, authors: "Dr. R. Senthilkumar, G. Ramesh", title: "Engineering Practices Lab", number: "L - 78730 / 2018" },
  { id: 2, authors: "Mr. Chintala Venkatesh, Mrs. R. Abirami", title: "Labview Manual", number: "7675/2022-CO" },
  { id: 3, authors: "Dr. R. Senthil Kumar, Mr. P. Saravanan, Mr. D. Sakthivel", title: "Computer Aided Design - Course Manual", number: "11415/2022-CO" },
  { id: 4, authors: "Dr. G. Ramesh, Mr. S.R. Mohan, Mr. V. Vigneswara", title: "Computer Aided Design And Manufacturing - Laboratory Manual", number: "11417/2022-CO" },
  { id: 5, authors: "Dr. S. Prasath, Mr. A. Muhammed Ifran, Mr. J. Rajesh", title: "Meterology And Measurements - Laboratory Manual", number: "11418/2022-CO" },
  { id: 6, authors: "Dr. R. Senthil Kumar, Dr. S. Prasath, Mr. J. Rajesh", title: "Manufacturing Technology - Laboratory Manual", number: "11420/2022-CO" },
  { id: 7, authors: "Dr. B. Janarthanan, Mr. P. Saravanan, Mr. S.R. Mohan", title: "Computer Aided Simulation And Analysis - Laboratory Manual", number: "11412/2022-CO" },
  { id: 8, authors: "Dr. R. Senthil Kumar, Mr. P. Saravanan, Mr. D. Sakthivel", title: "Computer Aided Machine Drawing - Laboratory Manual", number: "11409/2022-CO" },
  { id: 9, authors: "Dr. K.S. Srinivasan, Dr. I. Manju, Ms. K. Gayathri", title: "Revit Architecture Lab Manual", number: "22218/2021-CO" },
  { id: 10, authors: "Dr. K.S. Srinivasan, Dr. I. Manju, Mr. K. Vairaperumal", title: "Bot Lab Manual", number: "22219/2021-CO" }
];

// IIC Data
const officialActivities = [
  { id: 1, name: "Design of Flexible Pavement using IRC", type: "Self-Driven Activity" },
  { id: 2, name: "Computer Architecture Workshop", type: "Self-Driven Activity" },
  { id: 3, name: "Virtual Workshop on Machine Learning", type: "Self-Driven Activity" },
  { id: 4, name: "Online Workshop on Programming Skills", type: "Self-Driven Activity" },
  { id: 5, name: "Technological Innovation and Academia Industry Collaboration under Self-Reliant India", type: "Self-Driven Activity" },
  { id: 6, name: "FDP on Kinematics of Machinery", type: "Self-Driven Activity" },
  { id: 7, name: "FDP on Teaching Engineering Graphics using ICT Tools", type: "Self-Driven Activity" },
  { id: 8, name: "Virtual Workshop on Research Methodologies", type: "Self-Driven Activity" },
  { id: 9, name: "Basic Refrigeration and Airconditioning Seminar", type: "Self-Driven Activity" },
  { id: 10, name: "Converting Ideas to Entrepreneurship", type: "Self-Driven Activity" },
  { id: 11, name: "National Webinar on Research, Innovation and Ranking", type: "MIC Driven Activity" },
  { id: 12, name: "Orientation session for all students & faculties by Innovation Ambassador(s)", type: "IIC Calendar Activity" },
  { id: 13, name: "Session on 'How to plan for Start-up and legal & Ethical Steps'", type: "IIC Calendar Activity" },
  { id: 14, name: "IIC Council Meeting — Review of Q2 progress & Planning of Q3", type: "IIC Calendar Activity" },
  { id: 15, name: "IIC Annual Report Submission", type: "MIC Driven Activity" },
  { id: 16, name: "Concrete Technology Workshop", type: "Self-Driven Activity" },
  { id: 17, name: "National Level Awareness Programme on Entrepreneurship", type: "Self-Driven Activity" },
  { id: 18, name: "Workshop on Design Thinking, Critical Thinking and Innovation Design", type: "IIC Calendar Activity" },
  { id: 19, name: "AKAM Celebration", type: "MIC Driven Activity" },
  { id: 20, name: "Workshop on 'Entrepreneurship and Innovation as Career Opportunity'", type: "IIC Calendar Activity" },
  { id: 21, name: "Orientation Session on IIC4.0 & Features", type: "MIC Driven Activity" },
  { id: 22, name: "Awareness Programme on IPR", type: "Self-Driven Activity" },
  { id: 23, name: "Session on Problem Solving and Ideation Workshop", type: "IIC Calendar Activity" },
  { id: 24, name: "Workshop on Entrepreneurship Skill, Attitude and Behaviour Development", type: "IIC Calendar Activity" },
  { id: 25, name: "Alumni Talk and Interaction", type: "Self-Driven Activity" },
  { id: 26, name: "Internal Hackathon to select team for Smart India Hackathon (SIH)", type: "Self-Driven Activity" }
];

const iicOverviewPoints = [
  { title: "Local Innovation Ecosystem", desc: "Create a vibrant local innovation ecosystem within the campus across all engineering disciplines." },
  { title: "Start-up Support Mechanism", desc: "Build a robust start-up supporting mechanism and pre-incubation infrastructure in Higher Education Institutions." },
  { title: "Atal Ranking Preparation", desc: "Prepare institute for Atal Ranking of Institutions on Innovation Achievements Framework (ARIIA)." },
  { title: "Idea Pre-incubation", desc: "Establish functional ecosystem for scouting innovative ideas and pre-incubating student prototypes." },
  { title: "Cognitive Ability Development", desc: "Develop cognitive ability and problem-solving skills for technology students through national hackathons." },
];

const committeeMembers = [
  { role: "Head of Institution", name: "Dr. K.S. Srinivasan", designation: "Principal, MSAJCE" },
  { role: "President, IIC", name: "Dr. B. Janarthanan", designation: "Professor & Head - Research, Dept of Mechanical, MSAJCE" },
  { role: "Vice President, IIC", name: "Dr. I. Manju", designation: "Professor & Head, Dept of EEE, MSAJCE" },
  { role: "External Member", name: "Dr. M. Kanthababu", designation: "Professor, Anna University, Chennai" },
  { role: "External Member", name: "Dr. N. Alagumurthi", designation: "Professor, Pondicherry Engineering College" },
  { role: "External Member", name: "Mr. N.S. Srinivasan", designation: "DGM, L&T Infrastructure Development Projects Ltd" },
  { role: "External Member", name: "Venkatakrishnan Sankaran", designation: "Vice-President, Levergent Technologies" },
  { role: "External Mentor Member", name: "Mr. D. Gowri Shankar", designation: "Asst. Professor, New Prince Shri Bhavani College of Engg" },
  { role: "Internal Member", name: "Dr. R. Senthilkumar", designation: "Associate Professor, MSAJCE" }
];

// NISP / Startup Ecosystem Data
const shortTermObjectives = [
  "To help student groups to prototype their innovative ideas.",
  "To improve innovation, creative, and design thinking among the student community.",
  "Incubation facility for faculty-driven startups and student/alumni startups.",
  "Organize FDPs, seminars, workshops, and distinguished talks for students, faculty, and alumni.",
  "Strengthen Institute-Industry Interaction Cell activities and effectively use outcomes for achieving the mission."
];

const longTermObjectives = [
  "Associate with DST, CII, MSME, and other academic institutions for transferring world-class facilities for MSAJCE IEDC activities.",
  "Improve quality of research work among students to attain patents that can be commercially used in production.",
  "Provide a platform for students to develop innovative products with global recognition and generate business opportunities.",
  "Generate revenue through consultancy work and student startups.",
  "Spread awareness to students and faculty regarding IPR-related activities.",
  "Strategic partnership linkages with Entrepreneurship Development Institute of India (EDII, Chennai) and National Innovation Foundation (NIF).",
  "Procure funding from AICTE for Entrepreneurship Development Cell."
];

const nispCommittee = [
  { name: "Dr. K.S. Srinivasan", role: "President", designation: "Principal, Mohamed Sathak A.J. College of Engineering" },
  { name: "Mr. Prakadesh Subramanian", role: "Incubation Coordinator", designation: "Strategic Partner, SIIF, Chennai" },
  { name: "Mr. Parvez Aalam", role: "Incubation Coordinator", designation: "CEO, Crescent Innovation Incubation Council, Chennai" },
  { name: "Mr. Thiyagaraja Gupta", role: "Patent Expert", designation: "Deputy Controller of Patents and Designs" },
  { name: "Ahamed Jameel A M", role: "Alumni Entrepreneur", designation: "IT Consultant, 4A Technology" },
  { name: "Abdur Rahim Salih", role: "Alumni Entrepreneur", designation: "Director & CEO, V5 Innovations Pvt. Ltd." },
  { name: "Asim Ali L", role: "Alumni Entrepreneur", designation: "CMO, Customer Labs" },
];

const thrustAreas = [
  "To develop Strategies and governance for Promoting Innovation Entrepreneurship in the institute.",
  "Creating Innovation Pipeline and Pathways for Entrepreneurs and Startups.",
  "Building Organizational Capacity, Human Resources, and Incentives.",
  "Collaboration, Co-creation, Business Relationship, and Knowledge Exchange.",
  "Incubation & Pre-Incubation support at Sathak Innovation & Incubation Foundation (SIIF).",
  "IP Ownership Rights for Technologies Developed at MSAJCE and SIIF.",
  "Pedagogy & Learning Interventions for Supporting Innovations & Startups.",
  "Entrepreneurial Performance Impact Assessment."
];

const kpiEvaluationData = [
  {
    level: "Vision",
    kpis: "• Increase in Self-Employment Rate\n• 5 Established Start-ups per year",
    verification: "NIRF Rankings"
  },
  {
    level: "Goal",
    kpis: "• Environment with multi-level support for innovation & startups\n• Students choosing Entrepreneurship as career",
    verification: "ARIIA Rankings"
  },
  {
    level: "Outcomes",
    kpis: "• 5 IPR/Innovations developed per year\n• 5 Student/Early-Stage Startups formed per year\n• 250 beneficiaries accessing infrastructure daily\n• 5% Student projects commercialized into Innovations\n• 5 IPR based product/services filed\n• 5 Research Studies on Entrepreneurship published\n• 2 Regional, National & International incubator linkages",
    verification: "Quarterly Newsletter\nBiannual Survey\nMonthly Progress Report"
  },
  {
    level: "Activities",
    kpis: "• 5 Skill certification programs on Entrepreneurship & IPR\n• 25 Workshops, awareness & market outreach events\n• 12 Intra & Inter-institutional networking events\n• 1% of total annual budget spent on startup mandate",
    verification: "Biannual Survey\nQuarterly Newsletter\nReview Meetings"
  }
];

// --- ORGANIC WAVE DIVIDERS ---

const WaveAB = () => (
  <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
    <svg
      viewBox="0 0 1440 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-8 sm:h-12 md:h-16 lg:h-20 block preserve-3d"
      preserveAspectRatio="none"
    >
      <path
        d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
        className="fill-[#F3F3F2] dark:fill-[#18181B]"
      />
    </svg>
  </div>
);

const WaveBA = () => (
  <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
    <svg
      viewBox="0 0 1440 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-8 sm:h-12 md:h-16 lg:h-20 block preserve-3d"
      preserveAspectRatio="none"
    >
      <path
        d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
        className="fill-white dark:fill-[#121214]"
      />
    </svg>
  </div>
);

// --- UNIFIED RESEARCH PAGE COMPONENT ---

function UnifiedResearchPage() {
  const { tab } = Route.useSearch();
  const navigate = useNavigate({ from: "/research" });

  const [searchTerm, setSearchTerm] = useState("");
  const [ipSubTab, setIpSubTab] = useState<"patents" | "copyrights">("patents");

  const scrollToContent = () => {
    const contentContainer = document.getElementById("research-main-content");
    if (contentContainer) {
      const headerOffset = typeof window !== 'undefined' && window.innerWidth < 768 ? 44 : 52;
      const elementPosition = contentContainer.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  const handleTabChange = (tabId: string) => {
    setSearchTerm("");
    navigate({ search: { tab: tabId } });

    if (tabId === "overview") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setTimeout(() => {
        scrollToContent();
      }, 50);
    }
  };

  // Automatically scroll to content if visiting a sub-tab deep link directly
  useEffect(() => {
    if (tab && tab !== "overview") {
      const timer = setTimeout(() => {
        scrollToContent();
      }, 150);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [tab]);

  const filteredBooks = booksData.filter((b) => 
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.isbn.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPatents = officialPatents.filter((pat) => 
    pat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pat.inventors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pat.patentNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCopyrights = officialCopyrights.filter((c) =>
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.number.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentTabLabel = tab === "overview" 
    ? "RESEARCH & INNOVATION" 
    : (subNavTabs.find((t) => t.id === tab)?.label ?? "RESEARCH & INNOVATION");

  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white">
      {/* Sticky Secondary Navigation */}
      <SecondarySubNav
        title="RESEARCH & INNOVATION"
        tabs={subNavTabs}
        activeTab={tab}
        onSelectTab={handleTabChange}
        onTitleClick={() => {
          handleTabChange("overview");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      <div className="flex-1 pt-0 md:pt-1">
        {/* HERO BANNER: Modeled exactly on Placement Page Recruiters & Tiers Showcase */}
        <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/accreditations_campus.jpg"
              alt="MSAJCE Research & Innovation Ecosystem"
              className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/eligibility_hero.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1440px] w-full px-3.5 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 md:pt-24 pb-0">
            <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentTabLabel}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none"
                >
                  {currentTabLabel}
                </motion.h1>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Tab Content Target Anchor */}
        <div id="research-main-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              {/* ========================================================= */}
              {/* TAB 1: OVERVIEW (R&D CELL) */}
              {/* ========================================================= */}
              {tab === "overview" && (
                <div className="w-full">
                  {/* Section A: Research at a Glance (Stats) */}
                  <section className="bg-white dark:bg-[#121214] py-10 sm:py-14 md:py-16">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
                      <div className="mb-6 sm:mb-8 pb-3 border-b border-border/80">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          RESEARCH AT A GLANCE
                        </h2>
                      </div>
                      <div className="w-full space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed mb-8 sm:mb-10">
                        <p>
                          The Research &amp; Development (R&amp;D) Cell at Mohamed Sathak A.J. College of Engineering serves as the institutional catalyst for academic inquiry, technological advancement, and interdisciplinary innovation across all engineering and basic science departments.
                        </p>
                        <p>
                          Dedicated to nurturing high-impact research, the cell supports faculty and student investigators with state-of-the-art laboratory infrastructure, competitive internal grant opportunities, and seamless coordination for external funding applications to agencies like DST, TNSCST, AICTE, UGC, and CSIR.
                        </p>
                        <p>
                          With seven Anna University recognized research supervisors, over 23 patents, and 30+ authored volumes, the institution actively advances technical knowledge while empowering students to publish in indexed international journals and build scalable solutions for industrial and societal needs.
                        </p>
                      </div>

                      {/* Editorial Stats Grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:divide-x md:divide-border/80">
                        {researchStats.map((stat) => (
                          <div key={stat.label} className="first:pl-0 md:pl-6 lg:pl-8 space-y-1 sm:space-y-1.5">
                            <div className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight leading-none">
                              {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm text-foreground/85 font-libre font-medium leading-snug pt-1">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  <WaveAB />

                  {/* Section B: Objectives */}
                  <section className="bg-[#F3F3F2] dark:bg-[#18181B] py-10 sm:py-14 md:py-16">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
                      <div className="mb-6 sm:mb-8 pb-3 border-b border-border/80">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          RESEARCH CELL OBJECTIVES
                        </h2>
                      </div>

                      <div className="space-y-3">
                        {objectivesList.map((obj, idx) => (
                          <div key={idx} className="flex items-center gap-3 sm:gap-4 py-2.5 sm:py-3 border-b border-border/40">
                            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 border border-primary/20 text-primary font-oswald font-black flex items-center justify-center text-xs shrink-0">
                              {idx + 1}
                            </span>
                            <p className="text-xs sm:text-sm md:text-base text-foreground font-libre font-medium truncate sm:whitespace-normal">
                              {obj}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  <WaveBA />

                  {/* Section C: Ph.D. Supervisors Table */}
                  <section className="bg-white dark:bg-[#121214] py-10 sm:py-14 md:py-16">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
                      <div className="mb-6 sm:mb-8 pb-3 border-b border-border/80">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          ANNA UNIVERSITY RECOGNIZED PH.D. SUPERVISORS
                        </h2>
                      </div>

                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[720px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16">
                                  S.No
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[240px]">
                                  Supervisor Name
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-48">
                                  Anna Univ Ref. No
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-48">
                                  Department
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider min-w-[280px]">
                                  Core Research Specialization
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {supervisorsData.map((sup, index) => (
                                <tr key={sup.refNo} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm whitespace-nowrap">
                                    {index + 1}
                                  </td>
                                  <td className="px-4 py-3.5 font-libre font-bold text-foreground text-sm whitespace-nowrap">
                                    {sup.name}
                                  </td>
                                  <td className="px-4 py-3.5 font-mono text-foreground font-semibold text-xs sm:text-sm whitespace-nowrap">
                                    {sup.refNo}
                                  </td>
                                  <td className="px-4 py-3.5 font-oswald font-bold text-foreground text-xs sm:text-sm whitespace-nowrap">
                                    {sup.dept}
                                  </td>
                                  <td className="px-4 py-3.5 font-libre text-xs sm:text-sm text-foreground/90">
                                    {sup.area}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </DataGridContainer>
                    </div>
                  </section>

                  <WaveAB />

                  {/* Section D: Advisory Committee */}
                  <section className="bg-[#F3F3F2] dark:bg-[#18181B] py-10 sm:py-14 md:py-16">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
                      <div className="mb-6 sm:mb-8 pb-3 border-b border-border/80">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          RESEARCH ADVISORY COMMITTEE
                        </h2>
                      </div>

                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[720px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16">
                                  S.No
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[260px]">
                                  Member Name
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[280px]">
                                  Designation &amp; Organization
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-52">
                                  Committee Role
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {advisoryCommittee.map((member, idx) => (
                                <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm whitespace-nowrap">
                                    {idx + 1}
                                  </td>
                                  <td className="px-4 py-3.5 font-libre font-bold text-foreground text-sm whitespace-nowrap">
                                    {member.name}
                                  </td>
                                  <td className="px-4 py-3.5 font-libre font-medium text-xs sm:text-sm text-foreground/90">
                                    {member.designation}
                                  </td>
                                  <td className="px-4 py-3.5 font-oswald font-bold text-primary text-xs sm:text-sm whitespace-nowrap">
                                    {member.role}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </DataGridContainer>
                    </div>
                  </section>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 2: PUBLICATIONS */}
              {/* ========================================================= */}
              {tab === "publications" && (
                <div className="w-full">
                  <section className="bg-white dark:bg-[#121214] py-10 sm:py-14 md:py-16">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
                      {/* Full-Width Institutional Overview */}
                      <div className="w-full space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed mb-8 sm:mb-10">
                        <p>
                          Mohamed Sathak A.J. College of Engineering maintains a distinguished record of scholarly publishing, encouraging faculty members and student researchers to contribute original scientific findings to peer-reviewed international journals, conference proceedings, and academic volumes.
                        </p>
                        <p>
                          Our academic community actively authors authoritative textbooks, monographic studies, and specialized book chapters published by global academic houses including Elsevier and Springer, spanning frontier domains from machine learning and VLSI design to sustainable structural engineering.
                        </p>
                        <p>
                          By enforcing rigorous peer-review standards and supporting publication in Scopus and Web of Science indexed repositories, the institution continuously elevates its research citations, knowledge dissemination, and global academic reputation.
                        </p>
                      </div>

                      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-8 pb-4 border-b border-border/80">
                        <div>
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                            BOOKS &amp; BOOK CHAPTERS
                          </h2>
                          <p className="text-xs sm:text-sm font-libre text-foreground/80 font-medium pt-1">
                            Showing {filteredBooks.length} of {booksData.length} published volumes &amp; chapters
                          </p>
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full md:w-96">
                          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input 
                            type="text"
                            placeholder="Search book title, author, ISBN..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-background dark:bg-[#18181B] border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs text-xs sm:text-sm font-medium font-libre focus:outline-none focus:border-primary transition-colors text-foreground"
                          />
                        </div>
                      </div>

                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[720px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16">
                                  S.No
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[240px]">
                                  Author(s) Name
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider min-w-[320px]">
                                  Title of the Book / Chapter
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-56">
                                  ISBN / ISSN Number
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {filteredBooks.map((b) => (
                                <tr key={b.id} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm whitespace-nowrap">
                                    {b.id}
                                  </td>
                                  <td className="px-4 py-3.5 font-libre font-bold text-foreground text-sm whitespace-nowrap">
                                    {b.authors}
                                  </td>
                                  <td className="px-4 py-3.5 font-libre font-medium text-xs sm:text-sm text-foreground/90">
                                    {b.title}
                                  </td>
                                  <td className="px-4 py-3.5 font-mono text-foreground font-semibold text-xs sm:text-sm whitespace-nowrap">
                                    {b.isbn}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </DataGridContainer>
                    </div>
                  </section>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 3: PATENTS & IPR */}
              {/* ========================================================= */}
              {tab === "patents" && (
                <div className="w-full">
                  <section className="bg-white dark:bg-[#121214] py-10 sm:py-14 md:py-16">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
                      {/* Full-Width Institutional Overview */}
                      <div className="w-full space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed mb-8 sm:mb-10">
                        <p>
                          The Intellectual Property Rights (IPR) &amp; Patent Facilitation Cell at MSAJCE provides comprehensive institutional infrastructure for scouting, drafting, filing, and prosecuting patents, utility models, and registered copyrights arising from student and faculty research.
                        </p>
                        <p>
                          With 23+ published and granted patents spanning IoT disaster management, intelligent transportation systems, e-vehicle battery swapping, and advanced composite materials, the college actively translates laboratory prototypes into protected technological assets.
                        </p>
                        <p>
                          Through structured IP awareness workshops, legal mentorship, and direct alignment with the Controller General of Patents, Designs &amp; Trade Marks (IP India), MSAJCE ensures seamless commercialization and intellectual protection for campus innovations.
                        </p>
                      </div>

                      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-8 pb-4 border-b border-border/80">
                        {/* Sub-tab selection */}
                        <div className="flex gap-2">
                          <button 
                            type="button"
                            onClick={() => setIpSubTab("patents")}
                            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider font-oswald rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs transition-colors cursor-pointer border ${
                              ipSubTab === "patents"
                                ? "bg-primary text-white border-primary font-black"
                                : "bg-foreground/5 hover:bg-foreground/10 text-foreground border-border"
                            }`}
                          >
                            Patents ({officialPatents.length})
                          </button>
                          <button 
                            type="button"
                            onClick={() => setIpSubTab("copyrights")}
                            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider font-oswald rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs transition-colors cursor-pointer border ${
                              ipSubTab === "copyrights"
                                ? "bg-primary text-white border-primary font-black"
                                : "bg-foreground/5 hover:bg-foreground/10 text-foreground border-border"
                            }`}
                          >
                            Copyrights ({officialCopyrights.length})
                          </button>
                        </div>

                        {/* Search Input */}
                        <div className="relative w-full md:w-96">
                          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input 
                            type="text"
                            placeholder={`Search ${ipSubTab}...`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-background dark:bg-[#18181B] border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs text-xs sm:text-sm font-medium font-libre focus:outline-none focus:border-primary transition-colors text-foreground"
                          />
                        </div>
                      </div>

                      {/* Patents Table */}
                      {ipSubTab === "patents" ? (
                        <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                          <div className="overflow-x-auto bg-transparent">
                            <table className="w-full text-left border-collapse min-w-[760px] text-xs sm:text-sm">
                              <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                                <tr>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16">
                                    S.No
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-64 min-w-[240px]">
                                    Inventor(s) Name
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider min-w-[320px]">
                                    Title of Patent
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-56 min-w-[200px]">
                                    Patent Application / Grant No
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-32">
                                    Status
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border/40 font-libre">
                                {filteredPatents.map((pat) => (
                                  <tr key={pat.id} className="hover:bg-foreground/[0.02] transition-colors">
                                    <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm whitespace-nowrap align-top w-16">
                                      {pat.id}
                                    </td>
                                    <td className="px-4 py-3.5 font-libre font-bold text-foreground text-sm align-top w-64 min-w-[240px]">
                                      <div className="space-y-1">
                                        {pat.inventors.split(",").map((name, idx) => (
                                          <div key={idx} className="whitespace-nowrap leading-tight">
                                            {name.trim()}
                                          </div>
                                        ))}
                                      </div>
                                    </td>
                                    <td className="px-4 py-3.5 font-libre font-medium text-xs sm:text-sm text-foreground/90 align-top leading-relaxed min-w-[320px]">
                                      {pat.title}
                                    </td>
                                    <td className="px-4 py-3.5 font-mono text-foreground font-semibold text-xs sm:text-sm whitespace-nowrap align-top w-56">
                                      {pat.patentNo}
                                    </td>
                                    <td className="px-4 py-3.5 whitespace-nowrap align-top w-32">
                                      <span className="font-oswald font-bold text-primary text-xs sm:text-sm whitespace-nowrap">
                                        {pat.status}
                                      </span>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </DataGridContainer>
                      ) : (
                        /* Copyrights Table */
                        <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                          <div className="overflow-x-auto bg-transparent">
                            <table className="w-full text-left border-collapse min-w-[760px] text-xs sm:text-sm">
                              <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                                <tr>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16">
                                    S.No
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-64 min-w-[240px]">
                                    Author(s) Name
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider min-w-[320px]">
                                    Title of Copyright
                                  </th>
                                  <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-56 min-w-[200px]">
                                    Copyright Registration No
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border/40 font-libre">
                                {filteredCopyrights.map((c) => (
                                  <tr key={c.id} className="hover:bg-foreground/[0.02] transition-colors">
                                    <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm whitespace-nowrap align-top w-16">
                                      {c.id}
                                    </td>
                                    <td className="px-4 py-3.5 font-libre font-bold text-foreground text-sm align-top w-64 min-w-[240px]">
                                      <div className="space-y-1">
                                        {c.authors.split(",").map((name, idx) => (
                                          <div key={idx} className="whitespace-nowrap leading-tight">
                                            {name.trim()}
                                          </div>
                                        ))}
                                      </div>
                                    </td>
                                    <td className="px-4 py-3.5 font-libre font-medium text-xs sm:text-sm text-foreground/90 align-top leading-relaxed min-w-[320px]">
                                      {c.title}
                                    </td>
                                    <td className="px-4 py-3.5 font-mono text-foreground font-semibold text-xs sm:text-sm whitespace-nowrap align-top w-56">
                                      {c.number}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </DataGridContainer>
                      )}

                      {/* Official Verification Reference Link */}
                      <div className="mt-10 pt-4 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <span className="text-xs sm:text-sm font-medium font-libre text-foreground/80 text-center sm:text-left">
                          Verify official application status on Indian Patent Office Portal
                        </span>
                        <a 
                          href="https://ipindiaservices.gov.in/patentsearch/patentsearch/viewapplicationstatus" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary font-oswald hover:underline"
                        >
                          IP India Portal <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </section>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 4: INNOVATION COUNCIL (IIC) */}
              {/* ========================================================= */}
              {tab === "iic" && (
                <div className="w-full">
                  {/* Section A: IIC Overview & Core Mandates */}
                  <section className="bg-white dark:bg-[#121214] py-10 sm:py-14 md:py-16">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8 pb-3 border-b border-border/80">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          INSTITUTION'S INNOVATION COUNCIL (IIC)
                        </h2>
                        <div className="flex items-center gap-2.5 text-primary">
                          <div className="flex gap-1">
                            {[...Array(4)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                            ))}
                          </div>
                          <span className="text-xs sm:text-sm font-bold font-oswald uppercase tracking-wider">
                            4-Star Rating (MoE Innovation Cell)
                          </span>
                        </div>
                      </div>

                      {/* Overview Narrative */}
                      <div className="space-y-6 w-full">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground mb-2">
                            Overview
                          </h3>
                          <div className="w-full space-y-4 text-sm sm:text-base font-libre font-medium text-foreground leading-relaxed">
                            <p>
                              Established under the direct directives of the Ministry of Education (MoE) Innovation Cell (MIC), Government of India, the Institution's Innovation Council (IIC-MSAJCE) systematically fosters an active ecosystem of innovation, pre-incubation, hackathons, and technology entrepreneurship across campus.
                            </p>
                            <p>
                              Recognized with a prestigious 4-Star Rating by the MoE Innovation Cell, the council empowers students and faculty mentors to transform creative ideas into functional prototypes and market-ready enterprise solutions through structured ideation challenges and mentorship programs.
                            </p>
                            <p>
                              By driving participation in national hackathons, ARIIA rankings, and interdisciplinary design challenges, IIC-MSAJCE cultivates cognitive engineering skills, startup readiness, and sustainable economic impact for young innovators.
                            </p>
                          </div>
                        </div>

                        <div className="pt-2">
                          <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground mb-3 pb-2 border-b border-border/60">
                            Key Mandates &amp; Objectives
                          </h3>
                          <div className="space-y-3">
                            {iicOverviewPoints.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-3 sm:gap-4 py-2.5 sm:py-3 border-b border-border/40">
                                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 border border-primary/20 text-primary font-oswald font-black flex items-center justify-center text-xs shrink-0">
                                  {idx + 1}
                                </span>
                                <p className="text-xs sm:text-sm md:text-base text-foreground font-libre font-medium truncate sm:whitespace-normal">
                                  <span className="font-bold text-foreground">{item.title}:</span> {item.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <WaveAB />

                  {/* Section B: Activity Calendar */}
                  <section className="bg-[#F3F3F2] dark:bg-[#18181B] py-10 sm:py-14 md:py-16">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
                      <div className="mb-6 sm:mb-8 pb-3 border-b border-border/80">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          INNOVATION ACTIVITY CALENDAR &amp; EVENTS
                        </h2>
                      </div>

                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[720px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16">
                                  S.No
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider min-w-[380px]">
                                  Name of the Event
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[220px]">
                                  Type of Activity
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {officialActivities.map((act) => (
                                <tr key={act.id} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm whitespace-nowrap">
                                    {act.id}
                                  </td>
                                  <td className="px-4 py-3.5 font-libre font-medium text-xs sm:text-sm text-foreground/90">
                                    {act.name}
                                  </td>
                                  <td className="px-4 py-3.5 font-libre text-xs sm:text-sm text-foreground/90 whitespace-nowrap">
                                    {act.type}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </DataGridContainer>
                    </div>
                  </section>

                  <WaveBA />

                  {/* Section C: IIC Committee */}
                  <section className="bg-white dark:bg-[#121214] py-10 sm:py-14 md:py-16">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
                      <div className="mb-6 sm:mb-8 pb-3 border-b border-border/80">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          IIC COMMITTEE MEMBERS &amp; EXTERNAL ADVISORS
                        </h2>
                      </div>

                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[720px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16">
                                  S.No
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[260px]">
                                  Member Name
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[280px]">
                                  Designation &amp; Organization
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-52">
                                  Committee Role
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {committeeMembers.map((member, idx) => (
                                <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm whitespace-nowrap">
                                    {idx + 1}
                                  </td>
                                  <td className="px-4 py-3.5 font-libre font-bold text-foreground text-sm whitespace-nowrap">
                                    {member.name}
                                  </td>
                                  <td className="px-4 py-3.5 font-libre font-medium text-xs sm:text-sm text-foreground/90">
                                    {member.designation}
                                  </td>
                                  <td className="px-4 py-3.5 font-oswald font-bold text-primary text-xs sm:text-sm whitespace-nowrap">
                                    {member.role}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </DataGridContainer>
                    </div>
                  </section>
                </div>
              )}

              {/* ========================================================= */}
              {/* TAB 5: STARTUP ECOSYSTEM (NISP) */}
              {/* ========================================================= */}
              {tab === "startup-ecosystem" && (
                <div className="w-full">
                  {/* Section A: Overview & Vision Mission */}
                  <section className="bg-white dark:bg-[#121214] py-10 sm:py-14 md:py-16">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12 space-y-8">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-4 pb-2 border-b border-border/80">
                          NATIONAL INNOVATION &amp; STARTUP POLICY (NISP)
                        </h2>
                        <div className="w-full space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                          <p>
                            Guided by the National Innovation and Start-up Policy (NISP) framework of the Ministry of Education, Mohamed Sathak A.J. College of Engineering has established an integrated startup ecosystem designed to cultivate student-led enterprise development and technology commercialization.
                          </p>
                          <p>
                            The NISP ecosystem provides aspiring campus founders with access to dedicated pre-incubation space, prototyping grants, legal assistance for IP registration, and direct mentorship from industry veterans, venture capitalists, and alumni entrepreneurs.
                          </p>
                          <p>
                            Through structured short-term and long-term milestones, the policy reinforces an institutional culture where technical knowledge seamlessly converts into sustainable commercial ventures, patents, and job creation for the national economy.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6 sm:space-y-8 w-full pt-4 border-t border-border/40">
                        {/* Vision */}
                        <div className="space-y-2 sm:space-y-2.5">
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-primary font-oswald font-black flex items-center justify-center text-xs shrink-0">
                              V
                            </span>
                            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                              NISP VISION
                            </h3>
                          </div>
                          <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed pl-11">
                            To cater to the needs of student entrepreneurs with innovative ideas, thereby introducing a culture of entrepreneurship inside campus which will strengthen our education system and promote national economic and social growth.
                          </p>
                        </div>

                        {/* Mission */}
                        <div className="space-y-2 sm:space-y-2.5">
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-primary font-oswald font-black flex items-center justify-center text-xs shrink-0">
                              M
                            </span>
                            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                              NISP MISSION
                            </h3>
                          </div>
                          <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed pl-11">
                            To develop an ecosystem with required infrastructure that enables students and faculty to innovate and prototype their potential ideas with industrial standards and support from Government, industry, and reputed academic institutions globally.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <WaveAB />

                  {/* Section B: Strategic Objectives */}
                  <section className="bg-[#F3F3F2] dark:bg-[#18181B] py-10 sm:py-14 md:py-16">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
                      <div className="mb-6 sm:mb-8 pb-3 border-b border-border/80">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          STRATEGIC OBJECTIVES
                        </h2>
                      </div>

                      <div className="space-y-8">
                        {/* Short Term */}
                        <div className="space-y-4">
                          <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground pb-2 border-b border-border/60">
                            Short Term Objectives
                          </h3>
                          <div className="space-y-3">
                            {shortTermObjectives.map((obj, i) => (
                              <div key={i} className="flex items-center gap-3 sm:gap-4 py-2.5 sm:py-3 border-b border-border/40">
                                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 border border-primary/20 text-primary font-oswald font-black flex items-center justify-center text-[11px] shrink-0">
                                  S{i + 1}
                                </span>
                                <p className="text-xs sm:text-sm md:text-base text-foreground font-libre font-medium truncate sm:whitespace-normal">
                                  {obj}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Long Term */}
                        <div className="space-y-4">
                          <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground pb-2 border-b border-border/60">
                            Long Term Objectives
                          </h3>
                          <div className="space-y-3">
                            {longTermObjectives.map((obj, i) => (
                              <div key={i} className="flex items-center gap-3 sm:gap-4 py-2.5 sm:py-3 border-b border-border/40">
                                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 border border-primary/20 text-primary font-oswald font-black flex items-center justify-center text-[11px] shrink-0">
                                  L{i + 1}
                                </span>
                                <p className="text-xs sm:text-sm md:text-base text-foreground font-libre font-medium truncate sm:whitespace-normal">
                                  {obj}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <WaveBA />

                  {/* Section C: Thrust Areas */}
                  <section className="bg-white dark:bg-[#121214] py-10 sm:py-14 md:py-16">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
                      <div className="mb-6 sm:mb-8 pb-3 border-b border-border/80">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          NISP 8 CORE THRUST AREAS
                        </h2>
                      </div>

                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {thrustAreas.map((area, idx) => (
                          <div key={idx} className="pb-4 border-b border-border/60 flex flex-col justify-between">
                            <span className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 text-primary font-oswald font-black flex items-center justify-center text-xs mb-3 shrink-0">
                              {idx + 1}
                            </span>
                            <p className="text-sm font-libre font-medium text-foreground leading-relaxed">
                              {area}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  <WaveAB />

                  {/* Section D: KPI Evaluation Matrix */}
                  <section className="bg-[#F3F3F2] dark:bg-[#18181B] py-10 sm:py-14 md:py-16">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
                      <div className="mb-6 sm:mb-8 pb-3 border-b border-border/80">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          KPI MONITOR &amp; EVALUATION FRAMEWORK
                        </h2>
                      </div>

                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[720px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-48">
                                  Hierarchy Level
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider min-w-[360px]">
                                  Key Performance Indicators (KPIs)
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[260px]">
                                  Means &amp; Verification
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {kpiEvaluationData.map((row) => (
                                <tr key={row.level} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="px-4 py-4 font-oswald font-bold text-primary uppercase text-sm whitespace-nowrap align-top">
                                    {row.level}
                                  </td>
                                  <td className="px-4 py-4 font-libre font-medium text-xs sm:text-sm text-foreground whitespace-pre-line leading-relaxed align-top">
                                    {row.kpis}
                                  </td>
                                  <td className="px-4 py-4 font-libre font-medium text-xs sm:text-sm text-foreground/85 whitespace-pre-line leading-relaxed align-top">
                                    {row.verification}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </DataGridContainer>
                    </div>
                  </section>

                  <WaveBA />

                  {/* Section E: NISP Committee */}
                  <section className="bg-white dark:bg-[#121214] py-10 sm:py-14 md:py-16">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
                      <div className="mb-6 sm:mb-8 pb-3 border-b border-border/80">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                          NISP EXECUTIVE COMMITTEE
                        </h2>
                      </div>

                      <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                        <div className="overflow-x-auto bg-transparent">
                          <table className="w-full text-left border-collapse min-w-[720px] text-xs sm:text-sm">
                            <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                              <tr>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16">
                                  S.No
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[260px]">
                                  Member Name
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[280px]">
                                  Designation &amp; Organization
                                </th>
                                <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-52">
                                  Committee Role
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-border/40 font-libre">
                              {nispCommittee.map((member, idx) => (
                                <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                                  <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm whitespace-nowrap">
                                    {idx + 1}
                                  </td>
                                  <td className="px-4 py-3.5 font-libre font-bold text-foreground text-sm whitespace-nowrap">
                                    {member.name}
                                  </td>
                                  <td className="px-4 py-3.5 font-libre font-medium text-xs sm:text-sm text-foreground/90">
                                    {member.designation}
                                  </td>
                                  <td className="px-4 py-3.5 font-oswald font-bold text-primary text-xs sm:text-sm whitespace-nowrap">
                                    {member.role}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </DataGridContainer>
                    </div>
                  </section>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
