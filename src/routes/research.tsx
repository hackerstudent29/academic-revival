import { useState, useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Reveal } from "@/components/motion";
import { motion, AnimatePresence } from "framer-motion";
import { SecondarySubNav } from "@/components/layout/SecondarySubNav";
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

// --- UNIFIED RESEARCH PAGE COMPONENT ---

function UnifiedResearchPage() {
  const { tab } = Route.useSearch();
  const navigate = useNavigate({ from: "/research" });

  const [searchTerm, setSearchTerm] = useState("");
  const [ipSubTab, setIpSubTab] = useState<"patents" | "copyrights">("patents");

  const scrollToContent = () => {
    const contentContainer = document.getElementById("research-main-content");
    if (contentContainer) {
      const headerOffset = typeof window !== 'undefined' && window.innerWidth < 768 ? 80 : 110;
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

    setTimeout(() => {
      scrollToContent();
    }, 60);
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

  return (
    <div className="min-h-screen bg-background text-foreground font-sans max-w-full">
      
      {/* SECONDARY SUB-NAV HEADER (Using Official Department SecondarySubNav Component) */}
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

      <AnimatePresence mode="wait">
        <motion.div
          key="research-page-container"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.05, duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.12 } }}
          className="w-full flex flex-col max-w-full"
        >

          {/* Research Page Hero Section (Full-Screen Edge-to-Edge Layout with #212121 / #1C1C1E Background & Down-to-Up Filling Buttons) */}
          <section className="w-full bg-[#212121] dark:bg-[#121214] text-white pt-10 pb-12 border-b border-neutral-800 relative overflow-hidden min-h-[calc(100vh-110px)] flex flex-col justify-center">
            <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col justify-between flex-1 py-4">
              
              {/* Top Section: Split Layout (Headline & Description vs Rectangular Image Showcase) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
                
                {/* Left Column (Headline & Pitch) */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white font-oswald tracking-tight leading-[1.05] mb-4"
                  >
                    Research &amp; Innovation
                  </motion.h1>

                  <motion.p 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-sm sm:text-base md:text-lg text-neutral-300 font-sans leading-relaxed max-w-2xl mb-8"
                  >
                    Pioneering interdisciplinary research, patents, books, MoE Institution's Innovation Council (IIC), and NISP startup incubation at Mohamed Sathak A.J. College of Engineering.
                  </motion.p>

                  {/* Liquid Ocean Wave Filling CTA Button */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.35 }}
                    className="flex flex-wrap gap-4"
                  >
                    <button
                      onClick={() => scrollToContent()}
                      className="group relative overflow-hidden bg-neutral-900/80 text-white font-bold font-oswald text-xs uppercase tracking-wider rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs px-7 py-3 shadow-md border border-neutral-600 transition-all cursor-pointer select-none inline-flex items-center"
                    >
                      {/* Liquid Ocean Wave Fill Overlay */}
                      <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                        <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                          {/* Ocean Wave Crest SVG (Primary) */}
                          <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
                            <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                              <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
                            </svg>
                          </span>
                          {/* Secondary Depth Layer Wave */}
                          <span className="absolute -top-4 left-0 w-[200%] h-5 opacity-40 pointer-events-none block">
                            <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave-reverse" viewBox="0 0 1200 120" preserveAspectRatio="none">
                              <path d="M0,30 C200,-30 400,90 600,10 C800,-40 1000,70 1200,20 L1200,120 L0,120 Z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                      
                      {/* Button Content */}
                      <span className="relative z-10 flex items-center justify-center gap-2 text-white group-hover:text-white transition-colors duration-300 font-bold">
                        <span>Explore Research &amp; Innovation</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </button>
                  </motion.div>
                </div>

                {/* Right Column (Rectangular Showcase Card) */}
                <div className="lg:col-span-5 w-full">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="w-full max-w-[520px] lg:ml-auto aspect-[16/10] rounded-sm overflow-hidden border border-neutral-700 bg-neutral-800 shadow-2xl relative"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000&auto=format&fit=crop" 
                      alt="Research & Innovation Cell MSAJCE" 
                      className="w-full h-full object-cover block"
                    />
                  </motion.div>
                </div>

              </div>

              {/* Bottom Section: Metadata Specifications Grid */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="border-t border-neutral-700/80 pt-6 mt-8"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 text-[12.5px] mb-4">
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold font-oswald uppercase tracking-wider text-neutral-400 mb-0.5">Ph.D. Supervisors</div>
                    <div className="text-xs sm:text-sm font-bold font-sans text-white">7 Approved</div>
                  </div>

                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold font-oswald uppercase tracking-wider text-neutral-400 mb-0.5">Patents &amp; IPR</div>
                    <div className="text-xs sm:text-sm font-bold font-sans text-white">23+ Published</div>
                  </div>

                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold font-oswald uppercase tracking-wider text-neutral-400 mb-0.5">Publications</div>
                    <div className="text-xs sm:text-sm font-bold font-sans text-white">31+ Books &amp; Ch.</div>
                  </div>

                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold font-oswald uppercase tracking-wider text-neutral-400 mb-0.5">MoE Rating</div>
                    <div className="text-xs sm:text-sm font-bold font-sans text-white">4-Star IIC Rating</div>
                  </div>

                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold font-oswald uppercase tracking-wider text-neutral-400 mb-0.5">Startup Incubation</div>
                    <div className="text-xs sm:text-sm font-bold font-sans text-white">NISP &amp; SIIF</div>
                  </div>

                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold font-oswald uppercase tracking-wider text-neutral-400 mb-0.5">Copyrights</div>
                    <div className="text-xs sm:text-sm font-bold font-sans text-white">10 Registered</div>
                  </div>
                </div>

                <p className="text-[11px] text-neutral-400 italic font-sans pt-2 border-t border-neutral-800">
                  Recognized Research Centre, Mohamed Sathak A.J. College of Engineering.
                </p>
              </motion.div>

            </div>
          </section>

          {/* Main Content Layout Container */}
          <div id="research-main-content" className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-24 overflow-x-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, scale: 0.99, filter: "blur(2px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-full"
              >

      {/* --- TAB 1: OVERVIEW (R&D CELL) --- */}
      {tab === "overview" && (
        <div className="animate-in fade-in duration-300">
          
          {/* Key Metrics Stats Counter */}
          <section className="px-4 py-12 md:px-8 border-b border-foreground/10 bg-foreground/[0.02]">
            <div className="mx-auto max-w-[1200px]">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {researchStats.map((stat) => (
                  <Reveal key={stat.label} variant="rise">
                    <div className="border border-foreground/15 bg-card p-6 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs shadow-sm flex flex-col justify-between h-full">
                      <div className="w-10 h-10 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-foreground/10 flex items-center justify-center mb-4">
                        <stat.icon className="w-5 h-5 text-foreground" />
                      </div>
                      <div>
                        <div className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs font-bold uppercase tracking-wider text-foreground font-oswald">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Objectives Section */}
          <section className="px-4 py-16 md:px-8 border-b border-foreground/10">
            <div className="mx-auto max-w-[1200px]">
              <div className="mb-12 border-b border-foreground/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <Reveal variant="rise">
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                    Research Cell Objectives
                  </h2>
                </Reveal>
                <span className="text-xs font-bold uppercase tracking-widest text-foreground font-oswald">
                  Core R&amp;D Mission &amp; Goals
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {objectivesList.map((obj, idx) => (
                  <Reveal key={idx} variant="rise" delay={idx * 0.04}>
                    <div className="border border-foreground/15 bg-card p-5 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs flex items-start gap-3 h-full">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-xs font-medium text-muted-foreground leading-relaxed font-sans">
                        {obj}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Anna University Recognized Ph.D. Supervisors Table */}
          <section className="px-4 py-16 md:px-8 bg-foreground/[0.02] border-b border-foreground/10">
            <div className="mx-auto max-w-[1200px]">
              <div className="mb-10 border-b border-foreground/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <Reveal variant="rise">
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                    Anna University Recognized Ph.D. Supervisors
                  </h2>
                </Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-foreground font-oswald">
                  Approved Research Supervisors
                </span>
              </div>

              <div className="overflow-x-auto border border-foreground/15 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-card shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-foreground/10 border-b border-foreground/15 text-xs font-black uppercase font-oswald text-foreground">
                      <th className="py-3.5 px-4">S.No</th>
                      <th className="py-3.5 px-4">Supervisor Name</th>
                      <th className="py-3.5 px-4">Anna Univ Ref. No</th>
                      <th className="py-3.5 px-4">Department</th>
                      <th className="py-3.5 px-4">Core Research Specialization</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60 text-xs font-sans">
                    {supervisorsData.map((sup, index) => (
                      <tr key={sup.refNo} className="hover:bg-foreground/[0.02] transition-colors">
                        <td className="py-3.5 px-4 font-bold font-oswald text-foreground">{index + 1}</td>
                        <td className="py-3.5 px-4 font-bold font-oswald text-primary">{sup.name}</td>
                        <td className="py-3.5 px-4 font-mono text-foreground font-bold">{sup.refNo}</td>
                        <td className="py-3.5 px-4 font-bold font-oswald text-foreground">{sup.dept}</td>
                        <td className="py-3.5 px-4 text-muted-foreground font-medium">{sup.area}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Research Advisory Committee */}
          <section className="px-4 py-16 md:px-8 border-b border-foreground/10">
            <div className="mx-auto max-w-[1200px]">
              <div className="mb-10 border-b border-foreground/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <Reveal variant="rise">
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                    Research Advisory Committee
                  </h2>
                </Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-foreground font-oswald">
                  Institutional R&amp;D Advisory Board
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {advisoryCommittee.map((member) => (
                  <Reveal key={member.name} variant="rise">
                    <div className="border border-foreground/15 bg-card p-6 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs shadow-sm flex flex-col justify-between h-full">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-foreground font-oswald block mb-2 border-l-2 border-foreground/60 pl-3">
                          {member.role}
                        </span>
                        <h3 className="text-lg font-black uppercase text-primary font-oswald mb-1">
                          {member.name}
                        </h3>
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-oswald">
                          {member.designation}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

        </div>
      )}

      {/* --- TAB 2: PUBLICATIONS & BOOKS --- */}
      {tab === "publications" && (
        <div className="animate-in fade-in duration-300">
          <section className="px-4 py-12 md:px-8 border-b border-foreground/10">
            <div className="mx-auto max-w-[1200px]">
              
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 pb-6 border-b border-foreground/10">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-foreground font-oswald">Faculty Publications</span>
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald">
                    Books &amp; Book Chapters
                  </h2>
                </div>

                {/* Search Box */}
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input 
                    type="text"
                    placeholder="Search book title, author, ISBN..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-background border border-foreground/20 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs text-xs font-medium focus:outline-none focus:border-foreground transition-colors font-sans"
                  />
                </div>
              </div>

              <div className="overflow-x-auto border border-foreground/15 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-card shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-foreground/10 border-b border-foreground/15 text-xs font-black uppercase font-oswald text-foreground">
                      <th className="py-3.5 px-4">S.No</th>
                      <th className="py-3.5 px-4">Author(s) Name</th>
                      <th className="py-3.5 px-4">Title of the Book / Chapter</th>
                      <th className="py-3.5 px-4">ISBN / ISSN Number</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60 text-xs font-sans">
                    {filteredBooks.map((b) => (
                      <tr key={b.id} className="hover:bg-foreground/[0.02] transition-colors">
                        <td className="py-3.5 px-4 font-bold font-oswald text-foreground">{b.id}</td>
                        <td className="py-3.5 px-4 font-bold font-oswald text-primary">{b.authors}</td>
                        <td className="py-3.5 px-4 text-foreground font-medium">{b.title}</td>
                        <td className="py-3.5 px-4 font-mono text-foreground font-bold">{b.isbn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </section>
        </div>
      )}

      {/* --- TAB 3: PATENTS & COPYRIGHTS --- */}
      {tab === "patents" && (
        <div className="animate-in fade-in duration-300">
          <section className="px-4 py-12 md:px-8">
            <div className="mx-auto max-w-[1200px]">
              
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 pb-6 border-b border-foreground/10">
                <div className="flex gap-2">
                  <button 
                    onClick={() => setIpSubTab("patents")}
                    className={`px-5 py-2.5 text-xs font-black uppercase tracking-wider font-oswald rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs transition-colors cursor-pointer ${
                      ipSubTab === "patents" ? "bg-foreground text-background" : "bg-foreground/10 text-foreground hover:bg-foreground/20"
                    }`}
                  >
                    Patents ({officialPatents.length})
                  </button>
                  <button 
                    onClick={() => setIpSubTab("copyrights")}
                    className={`px-5 py-2.5 text-xs font-black uppercase tracking-wider font-oswald rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs transition-colors cursor-pointer ${
                      ipSubTab === "copyrights" ? "bg-foreground text-background" : "bg-foreground/10 text-foreground hover:bg-foreground/20"
                    }`}
                  >
                    Copyrights ({officialCopyrights.length})
                  </button>
                </div>

                <div className="relative w-full md:w-96">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input 
                    type="text"
                    placeholder={`Search ${ipSubTab}...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-background border border-foreground/20 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs text-xs font-medium focus:outline-none focus:border-foreground"
                  />
                </div>
              </div>

              {ipSubTab === "patents" ? (
                <div className="overflow-x-auto border border-foreground/15 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-card shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-foreground/10 border-b border-foreground/15 text-xs font-black uppercase font-oswald text-foreground">
                        <th className="py-3.5 px-4">S.No</th>
                        <th className="py-3.5 px-4">Inventor(s) Name</th>
                        <th className="py-3.5 px-4">Title of Patent</th>
                        <th className="py-3.5 px-4">Patent Application / Grant No</th>
                        <th className="py-3.5 px-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60 text-xs font-sans">
                      {filteredPatents.map((pat) => (
                        <tr key={pat.id} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-3.5 px-4 font-bold font-oswald text-foreground">{pat.id}</td>
                          <td className="py-3.5 px-4 font-bold font-oswald text-primary">{pat.inventors}</td>
                          <td className="py-3.5 px-4 text-foreground font-medium">{pat.title}</td>
                          <td className="py-3.5 px-4 font-mono text-foreground font-bold">{pat.patentNo}</td>
                          <td className="py-3.5 px-4">
                            <span className={`text-[10px] font-black uppercase tracking-widest font-oswald px-2.5 py-0.5 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs ${
                              pat.status === "Granted" ? "bg-primary text-primary-foreground" : "bg-foreground/10 text-foreground"
                            }`}>
                              {pat.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="overflow-x-auto border border-foreground/15 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-card shadow-sm">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-foreground/10 border-b border-foreground/15 text-xs font-black uppercase font-oswald text-foreground">
                        <th className="py-3.5 px-4">S.No</th>
                        <th className="py-3.5 px-4">Author(s) Name</th>
                        <th className="py-3.5 px-4">Title of Copyright</th>
                        <th className="py-3.5 px-4">Copyright Registration No</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60 text-xs font-sans">
                      {filteredCopyrights.map((c) => (
                        <tr key={c.id} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-3.5 px-4 font-bold font-oswald text-foreground">{c.id}</td>
                          <td className="py-3.5 px-4 font-bold font-oswald text-primary">{c.authors}</td>
                          <td className="py-3.5 px-4 text-foreground font-medium">{c.title}</td>
                          <td className="py-3.5 px-4 font-mono text-foreground font-bold">{c.number}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Official Verification Reference Link */}
              <div className="mt-8 p-4 border border-foreground/15 bg-foreground/[0.02] rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-foreground font-oswald text-center sm:text-left">
                  Verify Official Application Status on Indian Patent Office Portal
                </span>
                <a 
                  href="https://ipindiaservices.gov.in/patentsearch/patentsearch/viewapplicationstatus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-primary font-oswald border-b border-primary pb-0.5"
                >
                  IP India Portal <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </section>
        </div>
      )}

      {/* --- TAB 4: INNOVATION COUNCIL (IIC) --- */}
      {tab === "iic" && (
        <div className="animate-in fade-in duration-300">
          
          {/* Star Rating Banner */}
          <section className="px-4 py-12 md:px-8 border-b border-foreground/10 bg-foreground/[0.02]">
            <div className="mx-auto max-w-[1200px] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-foreground font-oswald">Ministry of Education's Innovation Cell (MIC)</span>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald mb-3">
                  Institution's Innovation Council (IIC)
                </h2>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed max-w-2xl font-sans">
                  Established under the directives of Ministry of Education (MoE), Government of India, MSAJCE IIC fosters a systematic innovation culture, hackathons, pre-incubation support, and entrepreneurship ecosystem across all departments.
                </p>
              </div>

              <div className="border border-foreground/20 bg-card p-6 rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs shadow-md min-w-[240px] text-center">
                <div className="flex justify-center gap-1 mb-2 text-primary">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-primary" />
                  ))}
                </div>
                <div className="text-xl font-black uppercase text-primary font-oswald mb-1">
                  4-Star Rating
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-foreground font-oswald">
                  Awarded by MoE Innovation Cell
                </div>
              </div>
            </div>
          </section>

          {/* Activities Table */}
          <section className="px-4 py-16 md:px-8 border-b border-foreground/10">
            <div className="mx-auto max-w-[1200px]">
              <div className="mb-10 border-b border-foreground/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <Reveal variant="rise">
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                    Innovation Activity Calendar &amp; Events
                  </h2>
                </Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-foreground font-oswald">
                  26+ Official Conducted Events
                </span>
              </div>

              <div className="overflow-x-auto border border-foreground/15 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-card shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-foreground/10 border-b border-foreground/15 text-xs font-black uppercase font-oswald text-foreground">
                      <th className="py-3.5 px-4">S.No</th>
                      <th className="py-3.5 px-4">Name of the Event</th>
                      <th className="py-3.5 px-4">Type of Activity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60 text-xs font-sans">
                    {officialActivities.map((act) => (
                      <tr key={act.id} className="hover:bg-foreground/[0.02] transition-colors">
                        <td className="py-3 px-4 font-bold font-oswald text-foreground">{act.id}</td>
                        <td className="py-3 px-4 font-medium text-foreground">{act.name}</td>
                        <td className="py-3 px-4">
                          <span className={`text-[10px] font-black uppercase tracking-widest font-oswald px-2.5 py-0.5 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs ${
                            act.type === "MIC Driven Activity" 
                              ? "bg-primary text-primary-foreground" 
                              : act.type === "IIC Calendar Activity"
                              ? "bg-foreground/20 text-foreground font-black"
                              : "bg-foreground/10 text-foreground"
                          }`}>
                            {act.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Committee Roster */}
          <section className="px-4 py-16 md:px-8">
            <div className="mx-auto max-w-[1200px]">
              <div className="mb-10 border-b border-foreground/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <Reveal variant="rise">
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                    IIC Committee Members &amp; External Advisors
                  </h2>
                </Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-foreground font-oswald">
                  Council Executive Roster
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {committeeMembers.map((member) => (
                  <Reveal key={member.name} variant="rise">
                    <div className="border border-foreground/15 bg-card p-6 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs shadow-sm flex flex-col justify-between h-full">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-foreground font-oswald block mb-2 border-l-2 border-foreground/60 pl-3">
                          {member.role}
                        </span>
                        <h3 className="text-lg font-black uppercase text-primary font-oswald mb-1">
                          {member.name}
                        </h3>
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-oswald">
                          {member.designation}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

        </div>
      )}

      {/* --- TAB 5: STARTUP ECOSYSTEM (NISP) --- */}
      {tab === "startup-ecosystem" && (
        <div className="animate-in fade-in duration-300">
          
          {/* Vision & Mission */}
          <section className="px-4 py-16 md:px-8 border-b border-foreground/10">
            <div className="mx-auto max-w-[1200px] grid md:grid-cols-2 gap-8">
              <div className="border border-foreground/15 bg-card p-8 rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs">
                <span className="text-[10px] font-black uppercase tracking-widest text-foreground font-oswald mb-2 block border-l-2 border-foreground/60 pl-3">
                  NISP VISION
                </span>
                <h2 className="text-2xl font-black uppercase text-primary font-oswald mb-4">
                  Catering to Student Entrepreneurs
                </h2>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed font-sans">
                  To cater to the needs of student entrepreneurs with innovative ideas, thereby introducing a culture of entrepreneurship inside campus which will strengthen our education system and promote national economic and social growth.
                </p>
              </div>

              <div className="border border-foreground/15 bg-card p-8 rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs">
                <span className="text-[10px] font-black uppercase tracking-widest text-foreground font-oswald mb-2 block border-l-2 border-foreground/60 pl-3">
                  NISP MISSION
                </span>
                <h2 className="text-2xl font-black uppercase text-primary font-oswald mb-4">
                  Enabling Prototyping &amp; Industry Standards
                </h2>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed font-sans">
                  To develop an ecosystem with required infrastructure that enables students and faculty to innovate and prototype their potential ideas with industrial standards and support from Government, industry, and reputed academic institutions globally.
                </p>
              </div>
            </div>
          </section>

          {/* Short Term & Long Term Objectives */}
          <section className="px-4 py-16 md:px-8 bg-foreground/[0.02] border-b border-foreground/10">
            <div className="mx-auto max-w-[1200px]">
              <div className="mb-12 border-b border-foreground/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-foreground font-oswald">Strategic Roadmap</span>
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald">
                    Short Term &amp; Long Term Objectives
                  </h2>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-foreground font-oswald">NISP Guidelines</span>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Short Term */}
                <div className="border border-foreground/15 bg-card p-6 md:p-8 rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs">
                  <h3 className="text-xl font-black uppercase text-primary font-oswald mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5" /> Short Term Objectives
                  </h3>
                  <ul className="space-y-3">
                    {shortTermObjectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs font-medium text-muted-foreground font-sans">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Long Term */}
                <div className="border border-foreground/15 bg-card p-6 md:p-8 rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs">
                  <h3 className="text-xl font-black uppercase text-primary font-oswald mb-4 flex items-center gap-2">
                    <Rocket className="w-5 h-5" /> Long Term Objectives
                  </h3>
                  <ul className="space-y-3">
                    {longTermObjectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs font-medium text-muted-foreground font-sans">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 8 NISP Thrust Areas */}
          <section className="px-4 py-16 md:px-8 border-b border-foreground/10">
            <div className="mx-auto max-w-[1200px]">
              <div className="mb-10 border-b border-foreground/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <Reveal variant="rise">
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                    NISP 8 Core Thrust Areas
                  </h2>
                </Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-foreground font-oswald">
                  Strategic Action Plans
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {thrustAreas.map((area, idx) => (
                  <Reveal key={idx} variant="rise" delay={idx * 0.05}>
                    <div className="border border-foreground/15 bg-card p-5 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs flex flex-col justify-between h-full">
                      <span className="text-[10px] font-black uppercase font-oswald text-foreground bg-foreground/10 px-2 py-0.5 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs w-max mb-3">
                        Plan 0{idx + 1}
                      </span>
                      <p className="text-xs font-bold text-foreground font-oswald leading-relaxed">
                        {area}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* KPI Evaluation Matrix Table */}
          <section className="px-4 py-16 md:px-8 bg-foreground/[0.02] border-b border-foreground/10">
            <div className="mx-auto max-w-[1200px]">
              <div className="mb-10 border-b border-foreground/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <Reveal variant="rise">
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                    KPI Monitor &amp; Evaluation Framework
                  </h2>
                </Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-foreground font-oswald">
                  NIRF &amp; ARIIA Metrics
                </span>
              </div>

              <div className="overflow-x-auto border border-foreground/15 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-card shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-foreground/10 border-b border-foreground/15 text-xs font-black uppercase font-oswald text-foreground">
                      <th className="py-3.5 px-4">Hierarchy Level</th>
                      <th className="py-3.5 px-4">Key Performance Indicators (KPIs)</th>
                      <th className="py-3.5 px-4">Means &amp; Verification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60 text-xs font-sans">
                    {kpiEvaluationData.map((row) => (
                      <tr key={row.level} className="hover:bg-foreground/[0.02] transition-colors">
                        <td className="py-4 px-4 font-bold font-oswald text-primary uppercase text-sm">{row.level}</td>
                        <td className="py-4 px-4 text-foreground font-medium whitespace-pre-line leading-relaxed">{row.kpis}</td>
                        <td className="py-4 px-4 font-bold font-oswald text-foreground whitespace-pre-line">{row.verification}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* NISP Committee */}
          <section className="px-4 py-16 md:px-8">
            <div className="mx-auto max-w-[1200px]">
              <div className="mb-10 border-b border-foreground/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <Reveal variant="rise">
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald leading-none">
                    NISP Executive Committee
                  </h2>
                </Reveal>
                <span className="text-xs font-bold uppercase tracking-wider text-foreground font-oswald">
                  Incubation Experts &amp; Alumni Entrepreneurs
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {nispCommittee.map((member) => (
                  <Reveal key={member.name} variant="rise">
                    <div className="border border-foreground/15 bg-card p-6 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs shadow-sm flex flex-col justify-between h-full">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-foreground font-oswald block mb-2 border-l-2 border-foreground/60 pl-3">
                          {member.role}
                        </span>
                        <h3 className="text-lg font-black uppercase text-primary font-oswald mb-1">
                          {member.name}
                        </h3>
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-oswald">
                          {member.designation}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

        </div>
      )}

            </motion.div>
          </AnimatePresence>
        </div>

        </motion.div>
      </AnimatePresence>

    </div>
  );
}
