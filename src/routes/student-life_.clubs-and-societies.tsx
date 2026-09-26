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
  role: string;
  designationOrDept: string;
  responsibilities: string;
}

export interface ClubDetailedData {
  id: string;
  name: string;
  badge: string;
  overview: string;
  mission: string;
  objectives: string[];
  committeeMembers: ClubCommitteeMember[];
}

export const clubsDetailedData: ClubDetailedData[] = [
  {
    id: "sports-club",
    name: "Sports Club",
    badge: "Athletics & Physical Education",
    overview:
      "The Sports Club maintains records of sports and games events attended by students within the college, within Anna University, and outside at the regional, state, and national levels along with their achievements and awards. The club submits annual reports on sports events, oversees budget allocations, and conducts student sporting events, honoring winners with medals and trophies. All kinds of indoor and outdoor sports tournaments take place under the guidance of this club.",
    mission:
      "To encourage and motivate students to actively participate in various sports activities at both inter-collegiate and intra-collegiate levels under the institutional motto 'Teamwork Makes The Dream Work', fostering physical endurance, disciplined sportsmanship, and mental resilience.",
    objectives: [
      "To build up sportsmanship, athletic integrity, and competitive spirit.",
      "To foster intimate friendships, mutual respect, and team camaraderie across academic disciplines.",
      "To reduce academic stress, improve physical health, and enhance general student wellness.",
      "To improve motor skills, strategic thinking, and enhance overall employability traits.",
      "To support in developing positive attitude, self-confidence, courage, and patience.",
      "To provide opportunities to see the broader community closely and gain real-world teamwork experience.",
      "To avail the opportunity to interact with athletes and sports delegates from diverse walks of life.",
    ],
    committeeMembers: [
      {
        sno: 1,
        name: "Dr. K. M. Rajesh",
        role: "Faculty Coordinator",
        designationOrDept: "Director of Physical Education",
        responsibilities: "Overall sports administration, university sports affiliation & tournament planning",
      },
      {
        sno: 2,
        name: "Mr. S. Viswanathan",
        role: "Assistant Coordinator",
        designationOrDept: "Assistant Professor, Dept. of Mechanical",
        responsibilities: "Zonal tournament logistics, ground supervision & athletic event fixtures",
      },
      {
        sno: 3,
        name: "Vigneshwaran R.",
        role: "Student President",
        designationOrDept: "IV Year Mechanical Engineering",
        responsibilities: "Student athletic council governance, team selections & fixture scheduling",
      },
      {
        sno: 4,
        name: "Sneha M.",
        role: "Student Vice-President",
        designationOrDept: "III Year Computer Science & Engineering",
        responsibilities: "Women's athletics, indoor games tournament coordination & registration",
      },
      {
        sno: 5,
        name: "Mohammed Arif",
        role: "Student Secretary",
        designationOrDept: "III Year Civil Engineering",
        responsibilities: "Sports equipment custody, referee appointments & match scorekeeping",
      },
      {
        sno: 6,
        name: "Praveen Kumar K.",
        role: "Joint Secretary",
        designationOrDept: "II Year Electronics & Communication",
        responsibilities: "Intra-mural league management, student volunteer coordination & scoreboards",
      },
    ],
  },
  {
    id: "fine-arts-club",
    name: "Fine Arts Club (Envista Club / Artful Aesthetics)",
    badge: "Cultural & Visual Arts",
    overview:
      "Mohamed Sathak A.J. College of Engineering has established the Envista Fine Arts Club (Artful Aesthetics) to encourage the budding talent of our students. The club serves as a vibrant platform for students to express their thoughts, feelings, and creativity through visual and performing art forms from two dimensions to three dimensions, keeping students culturally active and creatively enriched throughout the academic year.",
    mission:
      "To tap the inherent talents and potential of the student community at all levels, inspiring and enabling students to actively participate and develop their abilities in dance, art, singing, music, theatrical acting, and creative design, helping them relax and enjoy collegiate life.",
    objectives: [
      "The main objective of the fine arts club is to encourage the budding talent of the students.",
      "Impart skill-based training and multi-disciplinary creative activities through industry and institute collaborations.",
      "Provide opportunities and encouragement for students to express themselves freely and boldly.",
      "Cultivate imagination, creative ability, and introduce an artistic environment across campus.",
      "Inspire students to make maximum contributions as creative artists and conscientious citizens.",
      "Organize various cultural competitions, functions, and annual college celebrations (Envista Fest).",
      "Make students confident and competitive in inter-collegiate and national cultural symposiums.",
      "Give students an artistic outlet to enrich their passion for art and personal experience through creative culture.",
    ],
    committeeMembers: [
      {
        sno: 1,
        name: "Ms. S. Viswajaa",
        role: "Staff Coordinator",
        designationOrDept: "Assistant Professor, Dept. of Information Technology",
        responsibilities: "Club faculty mentorship, annual Envista festival planning & institutional cultural supervision",
      },
      {
        sno: 2,
        name: "Mr. P. Murugan",
        role: "Assistant Coordinator",
        designationOrDept: "Assistant Professor, Dept. of Science & Humanities",
        responsibilities: "Stage production, audition logistics & external cultural team coordination",
      },
      {
        sno: 3,
        name: "Kishore P.",
        role: "Student President",
        designationOrDept: "IV Year Mechanical Engineering",
        responsibilities: "Student cultural council leadership, inter-college fest teams & budget allocation",
      },
      {
        sno: 4,
        name: "Laksha S.",
        role: "Student Vice-President",
        designationOrDept: "III Year Computer Science & Engineering",
        responsibilities: "Creative direction, event curation, dance & musical ensemble lead",
      },
      {
        sno: 5,
        name: "Keerthana R.",
        role: "Student Secretary",
        designationOrDept: "III Year AI & Data Science",
        responsibilities: "Audition coordination, schedule management & performing arts registration",
      },
      {
        sno: 6,
        name: "Abdul Rahman",
        role: "Joint Secretary",
        designationOrDept: "II Year Electrical & Electronics",
        responsibilities: "Stage setup, audio-visual technical assistance & prop logistics",
      },
    ],
  },
  {
    id: "science-club",
    name: "Science Club",
    badge: "Applied Sciences & Research",
    overview:
      "The Science Club was established with an aim to invite eminent scientists and researchers who share their knowledge with students and inspire them to acquire scientific acumen. Divided into three specialized sections—Physics, Chemistry, and General Applied Science—the club is open to all students across all engineering departments to arouse curiosity in learning science and applying it to daily engineering problems.",
    mission:
      "To arouse engineers' interest in learning science outside the classroom, teach them how to apply scientific knowledge in daily life, and guide students to develop an independent, logical, and creative analytical mindset.",
    objectives: [
      "Solve relevant, science-based problems set within practical experimental scenarios.",
      "Work in pairs, small groups, or independently on hands-on science activities.",
      "Take part in practical, hands-on scientific experimentation and hardware demonstrations.",
      "Think and communicate scientifically during experimentation and when presenting results.",
      "Share scientific results and technical innovations using a variety of contemporary media.",
      "Conduct seminars, workshops, science exhibitions, and quiz competitions to inculcate scientific temperament.",
      "Organize monthly guest lectures and discussions on recent innovations in the field of science.",
      "Decorate classrooms, libraries, and laboratories with scientific models, charts, and student inventions.",
    ],
    committeeMembers: [
      {
        sno: 1,
        name: "Dr. N. Sulaiman",
        role: "Faculty Coordinator",
        designationOrDept: "Associate Professor, Dept. of Physics (S&H)",
        responsibilities: "Scientific seminar curation, expert guest invitations & laboratory research oversight",
      },
      {
        sno: 2,
        name: "Dr. A. Fathima",
        role: "Assistant Coordinator",
        designationOrDept: "Assistant Professor, Dept. of Chemistry (S&H)",
        responsibilities: "Science Day exhibitions, student experiment safety & inter-departmental science quiz",
      },
      {
        sno: 3,
        name: "Hariharan S.",
        role: "Student President",
        designationOrDept: "IV Year Electronics & Communication",
        responsibilities: "Student science wing leadership, project expo director & research presentations",
      },
      {
        sno: 4,
        name: "Aafiya Begum",
        role: "Student Vice-President",
        designationOrDept: "III Year AI & Data Science",
        responsibilities: "Science symposium coordination, quiz master & technical paper reviews",
      },
      {
        sno: 5,
        name: "Karthik V.",
        role: "Student Secretary",
        designationOrDept: "III Year Mechanical Engineering",
        responsibilities: "Experimental setups, laboratory apparatus logistics & demonstration scheduling",
      },
      {
        sno: 6,
        name: "Divya Dharshini",
        role: "Joint Secretary",
        designationOrDept: "II Year Computer Science & Engineering",
        responsibilities: "Digital scientific bulletin curation, chart exhibitions & membership engagement",
      },
    ],
  },
  {
    id: "tamil-mandram",
    name: "தமிழ் மன்றம் (Tamil Mandram)",
    badge: "மொழி மற்றும் பண்பாட்டுப் பிரிவு",
    overview:
      "தமிழுக்கு என்றும் அழிவில்லை. அழிவில்லாத உயர்தனிச் செம்மொழித் தமிழிற்காக இளந்தமிழ்ச் செல்வங்களிடத்தில் மட்டுமின்றி இச்சமுதாயத்திலும் ஓர் அற்புத மாற்றத்தை உருவாக்கும் நோக்கில் முகமது சதக் ஏ.ஜே. பொறியியல் கல்லூரியில் தமிழ் மன்றம் செயல்படுகிறது. நம் முன்னோர்கள் வாழ்ந்து, வழிபட்டு, வென்று விட்டுச்சென்ற வரலாற்று அடையாளங்களை மீட்டுருவாக்கம் செய்து, தமிழ் மொழியின் புகழை உலகெங்கும் கொண்டு செல்வதே இத்தமிழ் மன்றத்தின் தலையாய பணியாகும்.",
    mission:
      "தித்திக்கும் தேன்தமிழ்மொழி என்றும் வாழ வேண்டும், எங்கும் வெல்ல வேண்டும் என்ற முழக்கத்தோடு மாணவர்களிடத்தே தமிழ் ஆர்வத்தையும் தாய்மொழி அறிவையும் வளர்த்து, இளைஞர்களிடத்தில் பண்டைய தமிழ் பண்பாட்டையும், கலாச்சாரத்தையும் பரவச்செய்து தமிழில் தொழில்நுட்ப அறிவை வளர்த்தல்.",
    objectives: [
      "மாணவர்களிடத்தே தமிழ் இலக்கியம், கவிதை, மற்றும் மேடைப் பேச்சு ஆர்வத்தை வளர்த்தல்.",
      "இக்கால இளைஞர்களிடத்தில் பண்டைய தமிழ் பண்பாட்டையும், கலாச்சாரத்தையும் பரவச்செய்தல்.",
      "பொறியியல் மற்றும் அறிவியல் தொழில்நுட்பக் கருத்துக்களைத் தமிழில் ஆவணப்படுத்துதல்.",
      "சமுதாய நிகழ்வுகளுக்கேற்ப தமிழ்க் கருத்தரங்குகள், கவியரங்கம் மற்றும் பட்டிமன்றங்களை தொடர்ந்து நடத்துதல்.",
      "இருமுகம் ஒரு அகம், பேசும் படம், ஆடு புலி, கைவண்ண காவியம், டென்ட்கொட்டாய் ஆகிய பாரம்பரிய கலை வடிவங்களை நடத்துதல்.",
      "விடுகதை விளையாட்டு, பிரசங்கத்தின் தலைவன் மற்றும் தமிழ்க்கோர்வை போன்ற சிந்தனையைத் தூண்டும் இலக்கியப் போட்டிகளை ஆண்டுதோறும் நடத்துதல்.",
    ],
    committeeMembers: [
      {
        sno: 1,
        name: "Dr. S. Senthilkumar",
        role: "Faculty Coordinator",
        designationOrDept: "Assistant Professor, Dept. of Science & Humanities",
        responsibilities: "தமிழ் மன்ற ஒருங்கிணைப்பாளர், இலக்கிய விழாக்கள் மற்றும் பட்டிமன்ற மேற்பார்வை",
      },
      {
        sno: 2,
        name: "Mr. M. Khaja Mohideen",
        role: "Assistant Coordinator",
        designationOrDept: "Assistant Professor, Dept. of Civil Engineering",
        responsibilities: "துணை ஒருங்கிணைப்பாளர், பேச்சுப் போட்டிகள் மற்றும் மேடை நிகழ்வு மேலாண்மை",
      },
      {
        sno: 3,
        name: "Kaviyarasan M.",
        role: "Student President",
        designationOrDept: "IV Year Mechanical Engineering",
        responsibilities: "மாணவர் தலைவர் (Student President), முத்தமிழ் விழா ஒருங்கிணைப்பு & திட்டமிடல்",
      },
      {
        sno: 4,
        name: "Dharani P.",
        role: "Student Vice-President",
        designationOrDept: "III Year Information Technology",
        responsibilities: "மாணவர் துணைத் தலைவர் (Vice-President), கவிதை மற்றும் கட்டுரைப் போட்டிகள் தலைமை",
      },
      {
        sno: 5,
        name: "Elangovan K.",
        role: "Student Secretary",
        designationOrDept: "III Year Electrical & Electronics",
        responsibilities: "செயலாளர் (Student Secretary), பதிவுகள் மற்றும் விழா மேடை ஏற்பாடுகள்",
      },
      {
        sno: 6,
        name: "Yazhini R.",
        role: "Joint Secretary",
        designationOrDept: "II Year Computer Science & Engineering",
        responsibilities: "இணைச் செயலாளர் (Joint Secretary), உறுப்பினர் சேர்க்கை & செய்தி தொடர்பு",
      },
    ],
  },
  {
    id: "coding-club",
    name: "Coding Club",
    badge: "Software Engineering & Algorithms",
    overview:
      "Programming abilities are crucial tools that can be applied to and integrated into a variety of disciplines and domains in today's climate of rapid technological change. The MSAJCE Coding Club fosters a highly collaborative peer network where students master computer programming, data structures, open-source software development, and algorithmic problem-solving.",
    mission:
      "To democratize coding culture across the entire campus, conduct high-impact hackathons, and equip students with industry-grade software development skills to compete and excel in national and global coding contests.",
    objectives: [
      "Hold college-wide coding competitions and speed debugging challenges to reach all students across all engineering branches.",
      "Conduct workshops on modern computer science domains such as web development, mobile app development, machine learning, and IoT.",
      "Participate in open source initiatives, build practical web and mobile applications, and offer technical assistance to campus groups.",
      "Represent the college at prestigious intercollegiate coding competitions and hackathons.",
      "Prepare students for premier global contests including ACM-ICPC, Google Code Jam, Google Summer of Code, and competitive platforms.",
      "Host weekly team sprints to work on collaborative projects, technical discussions, and competitive algorithms.",
      "Conduct structured lecture sessions covering foundational computer science principles and software engineering practices.",
      "Organize technical seminars and placement masterclasses by alumni and senior industry software developers.",
    ],
    committeeMembers: [
      {
        sno: 1,
        name: "Mr. R. Dinesh Kumar",
        role: "Faculty Coordinator",
        designationOrDept: "Assistant Professor, Dept. of Computer Science & Engineering",
        responsibilities: "Faculty technical guidance, competitive programming advisor & hackathon planning",
      },
      {
        sno: 2,
        name: "Mrs. M. Geetha",
        role: "Assistant Coordinator",
        designationOrDept: "Assistant Professor, Dept. of Information Technology",
        responsibilities: "Coding competition platform management, testcase verification & code review",
      },
      {
        sno: 3,
        name: "Syed Imran",
        role: "Student President",
        designationOrDept: "IV Year Computer Science & Engineering",
        responsibilities: "Club technical direction, 24-hour hackathons lead & open-source projects lead",
      },
      {
        sno: 4,
        name: "Harshitha B.",
        role: "Student Vice-President",
        designationOrDept: "III Year Information Technology",
        responsibilities: "Competitive programming track lead, algorithmic challenges & student mentoring",
      },
      {
        sno: 5,
        name: "Naveen Prasath",
        role: "Student Secretary",
        designationOrDept: "III Year Computer Science & Engineering",
        responsibilities: "Workshop scheduling, repository administration & technical infrastructure",
      },
      {
        sno: 6,
        name: "Ananya R.",
        role: "Joint Secretary",
        designationOrDept: "II Year AI & Data Science",
        responsibilities: "Beginner bootcamp coordination, contest registrations & community communications",
      },
    ],
  },
  {
    id: "robotic-club",
    name: "Robotic Club",
    badge: "Robotics, Embedded Systems & IoT",
    overview:
      "The Robotic Club brings together students interested in learning about, designing, and fabricating advanced robotics. Multi-disciplinary teams of students collaborate to design and construct autonomous and radio-controlled robots that compete against rival teams in obstacle navigation, combat trials, and speed challenges in state and national robotics tournaments.",
    mission:
      "To cultivate the habit of 'thinking technologically' inside every engineering student at MSAJCE, fostering innovative problem solvers who advance the frontier of automation and cyber-physical systems.",
    objectives: [
      "To encourage young engineering minds to become the robotics industry's future driving force.",
      "To provide an opportunity to creatively apply theoretical engineering and observe how electromechanical systems interact with the environment.",
      "To equip students with professional engineering, embedded firmware, and hardware prototyping skills that benefit their careers.",
      "To design, fabricate, and test autonomous robots, line followers, combat bots, and surveillance quadcopters.",
      "To roll out comprehensive robotics education initiatives for campus students.",
      "To conduct brief training sessions and intensive hands-on workshops covering robotics basics, microcontrollers, and sensors.",
      "To represent MSAJCE in inter-collegiate robotics leagues and national techno-management symposiums.",
    ],
    committeeMembers: [
      {
        sno: 1,
        name: "Dr. V. Anand",
        role: "Faculty Coordinator",
        designationOrDept: "Associate Professor, Dept. of Electronics & Communication",
        responsibilities: "Robotics laboratory mentorship, research funding proposals & tournament delegation",
      },
      {
        sno: 2,
        name: "Mr. T. Balaji",
        role: "Assistant Coordinator",
        designationOrDept: "Assistant Professor, Dept. of Mechanical Engineering",
        responsibilities: "Mechanical chassis design, 3D printing & hardware fabrication supervision",
      },
      {
        sno: 3,
        name: "Gokulnath K.",
        role: "Student President",
        designationOrDept: "IV Year Electronics & Communication",
        responsibilities: "Club technical leadership, autonomous bot design & tournament team captain",
      },
      {
        sno: 4,
        name: "Madhumitha S.",
        role: "Student Vice-President",
        designationOrDept: "III Year Mechanical Engineering",
        responsibilities: "Drone manufacturing, structural modeling & CAD mechanical testing",
      },
      {
        sno: 5,
        name: "Rohit Sharma V.",
        role: "Student Secretary",
        designationOrDept: "III Year Electrical & Electronics",
        responsibilities: "Microcontroller programming, sensor calibration & arena circuit management",
      },
      {
        sno: 6,
        name: "Dhanush M.",
        role: "Joint Secretary",
        designationOrDept: "II Year Robotics / ECE",
        responsibilities: "Component inventory, testing arena maintenance & safety protocols",
      },
    ],
  },
  {
    id: "energy-eco-club",
    name: "Energy & Eco Club",
    badge: "Green Energy & Environmental Sustainability",
    overview:
      "The Energy & Eco Club combines energy conservation awareness with comprehensive environmental protection. The Energy wing raises awareness about responsible and sustainable energy use, fossil fuel conservation, and renewable technologies. The Eco wing holds that nature imparts life lessons in its own steady ways and empowers young engineers to share responsibility for protecting environmental health, biodiversity, and planetary sustainability.",
    mission:
      "To raise and spread actionable knowledge regarding energy efficiency and conservation in homes and institutions, while empowering students to take decisive action against environmental degradation individually and collectively.",
    objectives: [
      "Raise and spread widespread knowledge about responsible, efficient, and sustainable energy use.",
      "Address fossil fuel resource depletion by introducing practical energy conservation techniques and renewable alternatives.",
      "Support the dissemination and practical adoption of energy efficiency practices in campus buildings and local homes.",
      "Empower students to uphold environmental health and take collective action to prevent environmental degradation.",
      "Conduct regular campus energy audits, solar power inspections, and electrical efficiency reviews.",
      "Organize extensive tree plantation drives, campus green audits, and zero-single-use-plastic campaigns.",
      "Promote e-waste segregation, rainwater harvesting maintenance, and organic waste composting on campus.",
    ],
    committeeMembers: [
      {
        sno: 1,
        name: "Dr. G. Senthil Kumar",
        role: "Faculty Coordinator",
        designationOrDept: "Associate Professor, Dept. of Electrical & Electronics",
        responsibilities: "Energy audit direction, solar energy integration & technical sustainability advisor",
      },
      {
        sno: 2,
        name: "Dr. S. Kavitha",
        role: "Assistant Coordinator",
        designationOrDept: "Assistant Professor, Dept. of Civil Engineering",
        responsibilities: "Eco-initiatives mentor, campus green auditing & waste management coordination",
      },
      {
        sno: 3,
        name: "Vignesh P.",
        role: "Student President",
        designationOrDept: "IV Year Electrical & Electronics",
        responsibilities: "Club student leadership, green audit lead & energy efficiency project coordinator",
      },
      {
        sno: 4,
        name: "Shalini K.",
        role: "Student Vice-President",
        designationOrDept: "III Year Civil Engineering",
        responsibilities: "Botanical conservation, environmental drives & campus plantation head",
      },
      {
        sno: 5,
        name: "Mohammed Fahad",
        role: "Student Secretary",
        designationOrDept: "III Year Mechanical Engineering",
        responsibilities: "E-waste collection, energy metering data & recycling operations",
      },
      {
        sno: 6,
        name: "Reshma B.",
        role: "Joint Secretary",
        designationOrDept: "II Year Electrical & Electronics",
        responsibilities: "Awareness campaigns, eco-poster exhibitions & volunteer coordination",
      },
    ],
  },
  {
    id: "photography-club",
    name: "Photography Club",
    badge: "Visual Storytelling & Digital Media",
    overview:
      "The Photography Club provides students and faculty a creative venue for exploring and appreciating visual storytelling through photography, short filmmaking, and screenwriting. Beyond simply operating a camera, members comprehend what constitutes a successful photograph—from composition to creative lighting—while learning advanced digital post-production software for personal and institutional publication.",
    mission:
      "To welcome and encourage people of all expertise levels to explore the visual arts, cultivating keen aesthetic perception, visual journalism, and professional media post-production capabilities.",
    objectives: [
      "Provide students and staff a venue for exploring and appreciating surroundings through photography, short filmmaking, and screenwriting.",
      "Teach what constitutes a successful photograph—from frame composition and exposure control to artistic expression.",
      "Train club members to edit and enhance digital photographs using cutting-edge post-production software.",
      "Encourage students to hone their talents while capturing live sports events, cultural festivals, and college ceremonies.",
      "Host annual campus photo exhibitions, thematic photo walks, and short film screenings.",
      "Teach cinematography, audio sync, and screenwriting fundamentals for documentary filmmaking.",
      "Provide inclusive mentorship that nurtures beginner smartphone shooters as well as advanced DSLR/mirrorless photographers.",
    ],
    committeeMembers: [
      {
        sno: 1,
        name: "Mr. K. Suresh",
        role: "Faculty Coordinator",
        designationOrDept: "Assistant Professor, Dept. of Mechanical Engineering",
        responsibilities: "Visual media advisor, equipment custodial supervision & exhibition curation",
      },
      {
        sno: 2,
        name: "Ms. R. Priyadharshini",
        role: "Assistant Coordinator",
        designationOrDept: "Assistant Professor, Dept. of Computer Science",
        responsibilities: "Digital post-production advisor, media publishing & creative portfolio guidance",
      },
      {
        sno: 3,
        name: "Ashwin Kumar M.",
        role: "Student President",
        designationOrDept: "IV Year Information Technology",
        responsibilities: "Lead photographer, photo walk director & college events coverage director",
      },
      {
        sno: 4,
        name: "Nivedha S.",
        role: "Student Vice-President",
        designationOrDept: "III Year Computer Science & Engineering",
        responsibilities: "Short filmmaking lead, screenwriting workshops & video documentation",
      },
      {
        sno: 5,
        name: "Daniel Raj",
        role: "Student Secretary",
        designationOrDept: "III Year Civil Engineering",
        responsibilities: "Digital editing lead, RAW color grading & gallery archives custodian",
      },
      {
        sno: 6,
        name: "Harish S.",
        role: "Joint Secretary",
        designationOrDept: "II Year Electronics & Communication",
        responsibilities: "Event photojournalism, camera gear coordination & student registrations",
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
        <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
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
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {/* ========================================================================= */}
            {/* SECTION 1: Canvas A (White / #121214) — Overview & Mission                 */}
            {/* ========================================================================= */}
            <section className="py-5 sm:py-7 md:py-8 bg-white dark:bg-[#121214] transition-colors">
              <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold font-oswald uppercase tracking-wider px-2.5 py-0.5 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs bg-primary/10 border border-primary/20 text-primary inline-block">
                    {activeClub.badge}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-3 sm:mb-4">
                  {activeClub.name} Overview
                </h2>
                <p className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                  {activeClub.overview}
                </p>

                <div className="mt-6 pt-5 border-t border-border/40">
                  <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground mb-3 sm:mb-4">
                    Mission &amp; Vision
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
            {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — Key Objectives                  */}
            {/* ========================================================================= */}
            <section className="py-5 sm:py-7 md:py-8 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
              <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-3 sm:mb-4">
                  Key Objectives
                </h2>

                <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full">
                  {activeClub.objectives.map((obj, idx) => (
                    <div
                      key={idx}
                      className="py-3.5 sm:py-4 px-1 sm:px-3 flex items-start gap-3 sm:gap-4 hover:bg-foreground/[0.015] transition-colors w-full"
                    >
                      <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs sm:text-sm border border-foreground/20 mt-0.5">
                        {String(idx + 1).padStart(2, "0")}
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
            <section className="py-5 sm:py-7 md:py-8 bg-white dark:bg-[#121214] transition-colors">
              <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-3 sm:mb-4">
                  Committee Members &amp; Office Bearers
                </h2>

                <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                  <div className="overflow-x-auto bg-transparent">
                    <table className="w-full text-left border-collapse min-w-[700px] text-xs sm:text-sm">
                      <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                        <tr>
                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                            S.No
                          </th>
                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[180px]">
                            Name of Member
                          </th>
                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[180px]">
                            Designation / Role
                          </th>
                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider min-w-[200px]">
                            Department / Year
                          </th>
                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider min-w-[240px]">
                            Key Responsibilities
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/40 font-libre">
                        {activeClub.committeeMembers.map((member) => (
                          <tr key={member.sno} className="hover:bg-foreground/[0.02] transition-colors">
                            <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                              {String(member.sno).padStart(2, "0")}
                            </td>
                            <td className="py-3.5 px-4 font-oswald font-bold uppercase text-foreground text-sm whitespace-nowrap">
                              {member.name}
                            </td>
                            <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground whitespace-nowrap">
                              <span className="px-2.5 py-0.5 bg-primary/10 border border-primary/20 text-primary font-oswald uppercase text-xs font-bold rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                                {member.role}
                              </span>
                            </td>
                            <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground/85">
                              {member.designationOrDept}
                            </td>
                            <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground/80 leading-relaxed">
                              {member.responsibilities}
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
