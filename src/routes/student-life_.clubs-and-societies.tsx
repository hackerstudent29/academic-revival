import { useState, useMemo, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { SecondarySubNav } from "@/components/layout/SecondarySubNav";
import { DataGridContainer } from "@/components/ui/data-grid-table";

const title = "Clubs & Cultural Societies | Campus Life | MSAJCE";
const description =
  "Explore the official student clubs at Mohamed Sathak A.J. College of Engineering: Sports Club, Fine Arts Club, Science Club, Tamil Mandram, Coding Club, Robotic Club, Energy & Eco Club, and Photography Club.";

const clubNavTabs = [
  { id: "sports-club", label: "Sports Club" },
  { id: "fine-arts-club", label: "Fine Arts Club" },
  { id: "science-club", label: "Science Club" },
  { id: "tamil-mandram", label: "Tamil Mandram" },
  { id: "coding-club", label: "Coding Club" },
  { id: "robotic-club", label: "Robotic Club" },
  { id: "energy-eco-club", label: "Energy & Eco Club" },
  { id: "photography-club", label: "Photography Club" },
];

export interface ClubCommitteeMember {
  sno: number;
  name: string;
  department: string;
  year: string;
  role: string;
}

export interface ClubDetailedData {
  id: string;
  name: string;
  overview: string;
  mission: string;
  objectives: string[];
  committeeMembers: ClubCommitteeMember[];
}

export const clubsDetailedData: ClubDetailedData[] = [
  {
    id: "sports-club",
    name: "Sports Club",
    overview:
      "The Sports Club governs the institution's athletic administration, competitive fixtures, and recreational physical training. It maintains institutional records of athletic tournaments across Anna University zonal competitions, state-level championships, and national collegiate leagues. Through structured tournament schedules, specialized coaching, and regular campus fixtures, the club ensures holistic physical well-being and competitive prowess for student athletes.",
    mission:
      "To instill athletic excellence, physical endurance, and disciplined sportsmanship across the student community under the institutional ethos 'Teamwork Makes The Dream Work', empowering students to lead healthy, resilient, and collaborative lives.",
    objectives: [
      "Cultivate disciplined sportsmanship, competitive athletic excellence, and fair-play values across all sports divisions.",
      "Field high-performance collegiate teams for Anna University Zonal tournaments, state championships, and national invitation meets.",
      "Provide modern athletic infrastructure, professional coaching, and tournament facilities for outdoor and indoor sporting events.",
      "Mitigate academic stress and bolster mental resilience through structured physical conditioning and intramural recreational leagues.",
      "Foster enduring camaraderie, peer collaboration, and inclusive community engagement through university-wide athletic initiatives.",
    ],
    committeeMembers: [
      {
        sno: 1,
        name: "Dr. K. M. Rajesh",
        department: "Physical Education",
        year: "Faculty",
        role: "Faculty Coordinator",
      },
      {
        sno: 2,
        name: "Mr. S. Viswanathan",
        department: "Mechanical Engineering",
        year: "Faculty",
        role: "Assistant Coordinator",
      },
      {
        sno: 3,
        name: "Vigneshwaran R.",
        department: "Mechanical Engineering",
        year: "IV Year",
        role: "Student President",
      },
      {
        sno: 4,
        name: "Sneha M.",
        department: "Computer Science & Engineering",
        year: "III Year",
        role: "Student Vice-President",
      },
      {
        sno: 5,
        name: "Mohammed Arif",
        department: "Civil Engineering",
        year: "III Year",
        role: "Student Secretary",
      },
      {
        sno: 6,
        name: "Praveen Kumar K.",
        department: "Electronics & Communication",
        year: "II Year",
        role: "Joint Secretary",
      },
    ],
  },
  {
    id: "fine-arts-club",
    name: "Fine Arts Club",
    overview:
      "The Fine Arts Club (Envista Club) serves as the cultural vanguard of Mohamed Sathak A.J. College of Engineering, fostering artistic ingenuity, visual aesthetics, and theatrical expression. Serving as an open creative forum, the club nurtures latent creative talents across diverse fine arts disciplines—ranging from classical and contemporary dance, vocal ensemble, and orchestral music to fine art exhibitions, dramatics, and visual storytelling.",
    mission:
      "To tap and nurture the inherent artistic talent of the student fraternity, inspiring students to attain creative mastery, emotional poise, and cultural literacy through expressive performance and multidisciplinary artistic collaborations.",
    objectives: [
      "Discover, mentor, and showcase emerging talent in fine arts, choreography, vocal performance, and stage acting.",
      "Curate and execute 'Envista', the annual flagship cultural festival, alongside departmental symposium celebrations.",
      "Facilitate specialized masterclasses, workshops, and interdisciplinary collaborations with accredited artistic institutions.",
      "Field competitive delegations to represent MSAJCE at prestigious state and national collegiate cultural fests.",
      "Provide an inclusive creative outlet that enriches personal artistic perspectives, aesthetic discernment, and cultural vitality.",
    ],
    committeeMembers: [
      {
        sno: 1,
        name: "Ms. S. Viswajaa",
        department: "Information Technology",
        year: "Faculty",
        role: "Staff Coordinator",
      },
      {
        sno: 2,
        name: "Mr. P. Murugan",
        department: "Science & Humanities",
        year: "Faculty",
        role: "Assistant Coordinator",
      },
      {
        sno: 3,
        name: "Kishore P.",
        department: "Mechanical Engineering",
        year: "IV Year",
        role: "Student President",
      },
      {
        sno: 4,
        name: "Laksha S.",
        department: "Computer Science & Engineering",
        year: "III Year",
        role: "Student Vice-President",
      },
      {
        sno: 5,
        name: "Keerthana R.",
        department: "AI & Data Science",
        year: "III Year",
        role: "Student Secretary",
      },
      {
        sno: 6,
        name: "Abdul Rahman",
        department: "Electrical & Electronics",
        year: "II Year",
        role: "Joint Secretary",
      },
    ],
  },
  {
    id: "science-club",
    name: "Science Club",
    overview:
      "The Science Club cultivates foundational scientific inquiry, empirical experimentation, and analytical reasoning among engineering undergraduates. Comprising three specialized wings—Physics, Chemistry, and General Applied Sciences—the club engages eminent research scientists and academic scholars to elucidate contemporary scientific breakthroughs and guide students in transforming fundamental scientific theories into pragmatic technological solutions.",
    mission:
      "To ignite scientific curiosity, promote rigorous experimental methodologies outside traditional lecture halls, and nurture an inquisitive, analytical mindset capable of addressing complex technological and societal dilemmas.",
    objectives: [
      "Engage students in practical, empirical experimentation, applied physics models, and chemical synthesis initiatives.",
      "Host guest lectures and technical colloquia featuring distinguished scientists, academic researchers, and innovators.",
      "Organize the annual National Science Day symposium, research paper expositions, and intercollegiate science quizzes.",
      "Integrate contemporary computing and simulation tools into applied scientific investigations and empirical analysis.",
      "Cultivate logical reasoning, scientific writing standards, and evidence-based problem-solving across all engineering cohorts.",
    ],
    committeeMembers: [
      {
        sno: 1,
        name: "Dr. N. Sulaiman",
        department: "Physics (S&H)",
        year: "Faculty",
        role: "Faculty Coordinator",
      },
      {
        sno: 2,
        name: "Dr. A. Fathima",
        department: "Chemistry (S&H)",
        year: "Faculty",
        role: "Assistant Coordinator",
      },
      {
        sno: 3,
        name: "Hariharan S.",
        department: "Electronics & Communication",
        year: "IV Year",
        role: "Student President",
      },
      {
        sno: 4,
        name: "Aafiya Begum",
        department: "AI & Data Science",
        year: "III Year",
        role: "Student Vice-President",
      },
      {
        sno: 5,
        name: "Karthik V.",
        department: "Mechanical Engineering",
        year: "III Year",
        role: "Student Secretary",
      },
      {
        sno: 6,
        name: "Divya Dharshini",
        department: "Computer Science & Engineering",
        year: "II Year",
        role: "Joint Secretary",
      },
    ],
  },
  {
    id: "tamil-mandram",
    name: "Tamil Mandram",
    overview:
      "தமிழ் மன்றம் (Tamil Mandram) operates as the classical literary and cultural forum dedicated to preserving, celebrating, and advancing the timeless heritage of the Tamil language. The forum serves as a platform for linguistic enrichment, classical arts, oratory, and technical discourse in Tamil, connecting students with their rich cultural roots while promoting technical and scientific literature in our mother tongue.",
    mission:
      "தித்திக்கும் தேன்தமிழ்மொழி என்றும் வாழ வேண்டும், எங்கும் வெல்ல வேண்டும் என்ற உன்னத குறிக்கோளோடு மாணவர்களிடையே தமிழ் ஆர்வத்தை வளர்த்து, பண்டைய தமிழ் கலாச்சார பெருமைகளை இன்றைய தலைமுறையிடம் கொண்டு சேர்த்து, நவீன அறிவியல் தொழில்நுட்பங்களை தமிழில் முன்னெடுத்தல்.",
    objectives: [
      "மாணவர்களிடையே தமிழ் இலக்கிய வாசிப்பு, கவிதை படைப்பாற்றல், மற்றும் மேடைப் பேச்சுத்திறனை மேம்படுத்துதல்.",
      "முத்தமிழ் விழா, ஆண்டுதோறும் கல்லூரிகளுக்கிடையேயான பட்டிமன்றங்கள், மற்றும் கவியரங்கங்களை நடத்துதல்.",
      "பொறியியல், அறிவியல் மற்றும் நவீன தொழில்நுட்ப ஆய்வுக் கட்டுரைகளை தமிழில் ஆவணப்படுத்துதல் மற்றும் மொழிபெயர்த்தல்.",
      "பண்டைய தமிழர் வரலாற்று அடையாளங்கள், பாரம்பரிய கலைகள், மற்றும் பண்பாட்டு விழுமியங்களை மீட்டெடுத்துப் பரப்புதல்.",
      "பேசும் படம், கைவண்ண காவியம், விடுகதை விளையாட்டு மற்றும் தமிழ்க்கோர்வை போன்ற சிந்தனை சார்ந்த போட்டிகளை நடத்துதல்.",
    ],
    committeeMembers: [
      {
        sno: 1,
        name: "Dr. S. Senthilkumar",
        department: "Science & Humanities",
        year: "Faculty",
        role: "Faculty Coordinator",
      },
      {
        sno: 2,
        name: "Mr. M. Khaja Mohideen",
        department: "Civil Engineering",
        year: "Faculty",
        role: "Assistant Coordinator",
      },
      {
        sno: 3,
        name: "Kaviyarasan M.",
        department: "Mechanical Engineering",
        year: "IV Year",
        role: "Student President",
      },
      {
        sno: 4,
        name: "Dharani P.",
        department: "Information Technology",
        year: "III Year",
        role: "Student Vice-President",
      },
      {
        sno: 5,
        name: "Elangovan K.",
        department: "Electrical & Electronics",
        year: "III Year",
        role: "Student Secretary",
      },
      {
        sno: 6,
        name: "Yazhini R.",
        department: "Computer Science & Engineering",
        year: "II Year",
        role: "Joint Secretary",
      },
    ],
  },
  {
    id: "coding-club",
    name: "Coding Club",
    overview:
      "The Coding Club functions as a premier student-led technical collective dedicated to computational literacy, algorithmic problem-solving, and professional software craftsmanship. Recognizing that programming is a foundational skill across all engineering disciplines, the club conducts weekly code sprints, peer-led code reviews, and structured workshops covering data structures, full-stack engineering, machine learning, and systems architecture.",
    mission:
      "To democratize advanced programming proficiency across the collegiate community, foster competitive programming mastery, and empower students to build scalable software solutions for national hackathons and industry careers.",
    objectives: [
      "Organize college-wide competitive programming contests, speed-debugging challenges, and 24-hour hackathons.",
      "Conduct intensive hands-on workshops on modern frameworks, full-stack development, cloud computing, and machine learning.",
      "Prepare student cohorts for premier global coding platforms and events, including ACM-ICPC, Google Summer of Code, and LeetCode.",
      "Contribute actively to open-source software initiatives and provide engineering support for institutional digital platforms.",
      "Host technical interview masterclasses, algorithm critique sessions, and technical career seminars with alumni engineers.",
    ],
    committeeMembers: [
      {
        sno: 1,
        name: "Mr. R. Dinesh Kumar",
        department: "Computer Science & Engineering",
        year: "Faculty",
        role: "Faculty Coordinator",
      },
      {
        sno: 2,
        name: "Mrs. M. Geetha",
        department: "Information Technology",
        year: "Faculty",
        role: "Assistant Coordinator",
      },
      {
        sno: 3,
        name: "Syed Imran",
        department: "Computer Science & Engineering",
        year: "IV Year",
        role: "Student President",
      },
      {
        sno: 4,
        name: "Harshitha B.",
        department: "Information Technology",
        year: "III Year",
        role: "Student Vice-President",
      },
      {
        sno: 5,
        name: "Naveen Prasath",
        department: "Computer Science & Engineering",
        year: "III Year",
        role: "Student Secretary",
      },
      {
        sno: 6,
        name: "Ananya R.",
        department: "AI & Data Science",
        year: "II Year",
        role: "Joint Secretary",
      },
    ],
  },
  {
    id: "robotic-club",
    name: "Robotic Club",
    overview:
      "The Robotic Club unites aspiring mechanical, electrical, and computer engineers to conceive, design, and manufacture intelligent autonomous machines and robotic systems. Working across embedded microcontrollers, kinematics, computer vision, and PCB prototyping, club cohorts construct combat robots, autonomous line navigators, and aerial drones that compete in premier state and national robotics championships.",
    mission:
      "To cultivate the institutional discipline of 'thinking technologically' within every student, fostering future-ready automation specialists and robotic systems innovators capable of transforming industrial automation.",
    objectives: [
      "Train students in multidisciplinary robotics engineering, encompassing embedded systems, sensor integration, and kinematics.",
      "Conduct hands-on prototyping workshops covering microcontrollers (Arduino, ESP32, Raspberry Pi), motor drivers, and ROS.",
      "Design, fabricate, and test autonomous navigation bots, combat robotics, and quadcopters for national technical leagues.",
      "Facilitate industry-grade CAD modeling, additive manufacturing (3D printing), and electronic PCB fabrication.",
      "Represent MSAJCE in inter-collegiate robotics conventions, technological design expos, and innovation symposia.",
    ],
    committeeMembers: [
      {
        sno: 1,
        name: "Dr. V. Anand",
        department: "Electronics & Communication",
        year: "Faculty",
        role: "Faculty Coordinator",
      },
      {
        sno: 2,
        name: "Mr. T. Balaji",
        department: "Mechanical Engineering",
        year: "Faculty",
        role: "Assistant Coordinator",
      },
      {
        sno: 3,
        name: "Gokulnath K.",
        department: "Electronics & Communication",
        year: "IV Year",
        role: "Student President",
      },
      {
        sno: 4,
        name: "Madhumitha S.",
        department: "Mechanical Engineering",
        year: "III Year",
        role: "Student Vice-President",
      },
      {
        sno: 5,
        name: "Rohit Sharma V.",
        department: "Electrical & Electronics",
        year: "III Year",
        role: "Student Secretary",
      },
      {
        sno: 6,
        name: "Dhanush M.",
        department: "Robotics & Automation",
        year: "II Year",
        role: "Joint Secretary",
      },
    ],
  },
  {
    id: "energy-eco-club",
    name: "Energy & Eco Club",
    overview:
      "The Energy & Eco Club integrates clean energy consciousness with comprehensive ecological conservation. The Energy division educates the campus community on responsible electrical power consumption, energy auditing, and renewable solar deployment in response to resource depletion. The Eco division leads biodiversity preservation, zero-plastic initiatives, and waste segregation, inspiring students to assume personal and collective stewardship for environmental health.",
    mission:
      "To champion energy conservation, promote renewable energy transitions, and empower young engineers to enact sustainable environmental practices across academic, residential, and industrial communities.",
    objectives: [
      "Disseminate actionable knowledge regarding energy efficiency, power conservation techniques, and renewable energy adoption.",
      "Conduct comprehensive campus energy audits, solar array monitoring, and electrical infrastructure efficiency reviews.",
      "Spearhead botanical tree plantation drives, campus biodiversity registers, and green landscape conservation.",
      "Implement structured zero-single-use-plastic campaigns, organic waste composting, and institutional e-waste management.",
      "Collaborate with civic bodies and sustainability agencies for community environmental drives and climate awareness campaigns.",
    ],
    committeeMembers: [
      {
        sno: 1,
        name: "Dr. G. Senthil Kumar",
        department: "Electrical & Electronics",
        year: "Faculty",
        role: "Faculty Coordinator",
      },
      {
        sno: 2,
        name: "Dr. S. Kavitha",
        department: "Civil Engineering",
        year: "Faculty",
        role: "Assistant Coordinator",
      },
      {
        sno: 3,
        name: "Vignesh P.",
        department: "Electrical & Electronics",
        year: "IV Year",
        role: "Student President",
      },
      {
        sno: 4,
        name: "Shalini K.",
        department: "Civil Engineering",
        year: "III Year",
        role: "Student Vice-President",
      },
      {
        sno: 5,
        name: "Mohammed Fahad",
        department: "Mechanical Engineering",
        year: "III Year",
        role: "Student Secretary",
      },
      {
        sno: 6,
        name: "Reshma B.",
        department: "Electrical & Electronics",
        year: "II Year",
        role: "Joint Secretary",
      },
    ],
  },
  {
    id: "photography-club",
    name: "Photography Club",
    overview:
      "The Photography Club serves as the primary visual storytelling and media documentation forum at Mohamed Sathak A.J. College of Engineering. Embracing both technical mechanics and visual artistry, the club trains members in exposure control, frame composition, documentary filmmaking, screenwriting, and digital color grading. The club oversees visual archiving of collegiate events, sports fixtures, and ceremonial convocations.",
    mission:
      "To nurture visual literacy, aesthetic perception, and technical camera mastery across all expertise levels, empowering students to capture evocative narratives and document the institutional heritage.",
    objectives: [
      "Instruct members in core photographic principles, manual camera exposure, lighting physics, and visual aesthetics.",
      "Provide professional training in digital post-production, RAW workflow processing, and color-grading software.",
      "Document and archive major collegiate functions, academic conferences, athletic fixtures, and cultural festivals.",
      "Organize annual campus photography exhibitions, thematic photo walks, and masterclasses with industry photojournalists.",
      "Train aspiring documentary makers in short filmmaking, screenplay formulation, sound capture, and cinematic editing.",
    ],
    committeeMembers: [
      {
        sno: 1,
        name: "Mr. K. Suresh",
        department: "Mechanical Engineering",
        year: "Faculty",
        role: "Faculty Coordinator",
      },
      {
        sno: 2,
        name: "Ms. R. Priyadharshini",
        department: "Computer Science & Engineering",
        year: "Faculty",
        role: "Assistant Coordinator",
      },
      {
        sno: 3,
        name: "Ashwin Kumar M.",
        department: "Information Technology",
        year: "IV Year",
        role: "Student President",
      },
      {
        sno: 4,
        name: "Nivedha S.",
        department: "Computer Science & Engineering",
        year: "III Year",
        role: "Student Vice-President",
      },
      {
        sno: 5,
        name: "Daniel Raj",
        department: "Civil Engineering",
        year: "III Year",
        role: "Student Secretary",
      },
      {
        sno: 6,
        name: "Harish S.",
        department: "Electronics & Communication",
        year: "II Year",
        role: "Joint Secretary",
      },
    ],
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

interface ClubsSearch {
  club?: string | undefined;
}

export const Route = createFileRoute("/student-life_/clubs-and-societies")({
  validateSearch: (search: Record<string, unknown>): ClubsSearch => {
    return {
      club: typeof search["club"] === "string" ? (search["club"] as string) : undefined,
    };
  },
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
  component: ClubsAndSocietiesPage,
});

function ClubsAndSocietiesPage() {
  const navigate = Route.useNavigate();
  const { club } = Route.useSearch();
  const [selectedClubId, setSelectedClubId] = useState<string>(() => {
    if (club && clubNavTabs.some((c) => c.id === club)) {
      return club;
    }
    return "sports-club";
  });

  useEffect(() => {
    if (club && clubNavTabs.some((c) => c.id === club)) {
      setSelectedClubId(club);
    }
  }, [club]);

  const handleSelectClub = (clubId: string) => {
    setSelectedClubId(clubId);
    navigate({
      search: { club: clubId },
      replace: true,
    });
  };

  const activeClub: ClubDetailedData = useMemo(() => {
    return clubsDetailedData.find((c) => c.id === selectedClubId) || clubsDetailedData[0];
  }, [selectedClubId]);

  return (
    <main className="min-h-screen bg-white dark:bg-[#121214] text-foreground font-libre antialiased flex flex-col selection:bg-primary selection:text-white">
      {/* 1. Sticky Secondary SubNav Header */}
      <SecondarySubNav
        title="CLUBS & SOCIETIES"
        tabs={clubNavTabs}
        activeTab={selectedClubId}
        onSelectTab={handleSelectClub}
        onTitleClick={() => handleSelectClub("sports-club")}
      />

      <div className="flex-1 pt-0 md:pt-1">
        {/* ========================================================================= */}
        {/* 2. DYNAMIC HERO BANNER: Institution-Style Theme-Adaptive Banner           */}
        {/* ========================================================================= */}
        <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[260px] sm:min-h-[300px] md:min-h-[360px] flex flex-col justify-end">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80"
              alt="Clubs and Cultural Societies at Mohamed Sathak A.J. College of Engineering"
              className="w-full h-full object-cover object-center brightness-[0.70] filter contrast-105 select-none pointer-events-none rounded-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/why-join/sports.jpg";
              }}
            />
            {/* Gradient Overlay for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          </div>

          {/* Title Container: Theme-Adaptive Frame Docked Flush at Bottom */}
          <div className="relative z-10 mx-auto max-w-[1440px] w-full px-3.5 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 md:pt-24 pb-0">
            <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 shadow-2xl max-w-full w-auto border-t border-r border-border dark:border-white/15">
              <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none whitespace-nowrap">
                CLUBS &amp; SOCIETIES
              </h1>
            </div>
          </div>
        </section>

        {/* Dynamic Tab Content with Smooth Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeClub.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
          >
            {/* ========================================================================= */}
            {/* SECTION 1: Canvas A (White / #121214) — Overview & Mission                 */}
            {/* ========================================================================= */}
            <section className="pt-10 sm:pt-14 md:pt-16 lg:pt-20 pb-6 sm:pb-8 md:pb-10 bg-white dark:bg-[#121214] transition-colors">
              <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-3 sm:mb-4">
                  {activeClub.name} Overview
                </h2>
                <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                  {activeClub.overview}
                </p>

                <div className="mt-5 sm:mt-6">
                  <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground mb-2 sm:mb-3">
                    Mission
                  </h3>
                  <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                    {activeClub.mission}
                  </p>
                </div>
              </div>
            </section>

            {/* Wave Divider A -> B */}
            <WaveDividerAB />

            {/* ========================================================================= */}
            {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — Objectives                       */}
            {/* ========================================================================= */}
            <section className="py-6 sm:py-8 md:py-10 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
              <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-4 sm:mb-6">
                  Objectives
                </h2>

                <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full">
                  {activeClub.objectives.map((obj, idx) => (
                    <div
                      key={idx}
                      className="py-3.5 sm:py-4 px-1 sm:px-3 flex items-start gap-3 sm:gap-4 hover:bg-foreground/[0.015] transition-colors w-full"
                    >
                      <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                        {idx + 1}
                      </span>
                      <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5">
                        {obj}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Wave Divider B -> A */}
            <WaveDividerBA />

            {/* ========================================================================= */}
            {/* SECTION 3: Canvas A (White / #121214) — Committee Members Table (At Bottom) */}
            {/* ========================================================================= */}
            <section className="py-5 sm:py-6 md:py-7 bg-white dark:bg-[#121214] transition-colors">
              <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-3 sm:mb-4">
                  Committee Members
                </h2>

                <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                  <div className="overflow-x-auto bg-transparent">
                    <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                      <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                        <tr>
                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                            S.No
                          </th>
                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[200px]">
                            Name of Member
                          </th>
                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[240px]">
                            Department
                          </th>
                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[120px]">
                            Year
                          </th>
                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[180px]">
                            Role
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/40 font-libre">
                        {activeClub.committeeMembers.map((member) => (
                          <tr key={member.sno} className="hover:bg-foreground/[0.02] transition-colors">
                            <td className="py-3.5 px-4 text-center font-libre text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                              {member.sno}
                            </td>
                            <td className="py-3.5 px-4 font-libre font-medium text-xs sm:text-sm text-foreground whitespace-nowrap">
                              {member.name}
                            </td>
                            <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground whitespace-nowrap">
                              {member.department}
                            </td>
                            <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground/80 whitespace-nowrap">
                              {member.year}
                            </td>
                            <td className="py-3.5 px-4 font-libre font-medium text-xs sm:text-sm text-foreground whitespace-nowrap">
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
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
