export interface StudentHubAmenity {
  id: string;
  title: string;
  category: "recreation" | "dining" | "fitness" | "welfare" | "academic";
  description: string;
  highlights: string[];
  image: string;
  iconName: string;
}

export interface StudentClub {
  id: string;
  name: string;
  category: "technical" | "cultural" | "sports" | "media" | "eco";
  tagline: string;
  description: string;
  motto?: string;
  vision?: string;
  objectives?: string[];
  outdoorGames?: string[];
  indoorGames?: string[];
  staffCoordinator?: string;
  studentPresident?: string;
  studentVicePresident?: string;
  envistaNote?: string;
  scienceSections?: string[];
  scienceHandsOn?: string[];
  thingsToDo?: string[];
  tamilIntro?: string;
  tamilQuotes?: string[];
  tamilObjectives?: string[];
  tamilEvents?: string[];
  codingAims?: string[];
  codingPractices?: string[];
  roboticsActivities?: string[];
  energyClubDetails?: string;
  ecoClubDetails?: string;
  photographyPillars?: string[];
  images?: string[];
  activities: string[];
  membersCount: string;
  iconName: string;
  badge?: string;
}

export interface NominationAuthority {
  name: string;
  designation: string;
  phone: string;
  email: string;
}

export interface OfficeBearer {
  position: string;
  name: string;
  department: string;
  batch: string;
}

export interface CsiActivity {
  sno: number;
  name: string;
  resourcePerson: string;
  date: string;
  participants: string;
  coordinators: string;
  reportUrl?: string;
}

export interface IeteCounselor {
  sno: number;
  role: string;
  name: string;
  department: string;
  institution: string;
  codeInfo?: string;
}

export interface IeteActivity {
  sno: number;
  eventName: string;
  resourcePerson: string;
  date: string;
  targetAudience: string;
  participants: string;
}

export interface SaeOfficeBearer {
  sno: number;
  position: string;
  name: string;
  roleCategory: "Faculty Incharge" | "Student Bearer";
  department: string;
}

export interface SaeActivity {
  sno: number;
  typeOfEvent: string;
  eventTitle: string;
  date: string;
  reportUrl?: string;
  academicYear?: string;
}

export interface IshraeOfficeBearer {
  sno: number;
  position: string;
  name: string;
  roleCategory: "Faculty Advisor" | "Student Officer";
  department: string;
}

export interface IshraeActivity {
  sno: number;
  activityTitle: string;
  keyMandate: string;
  scopeAndBenefit: string;
}

export interface IshraeGovtPartnership {
  sno: number;
  partnerEntity: string;
  technicalDomain: string;
  initiativeSummary: string;
}

export interface ProfessionalSociety {
  id: string;
  name: string;
  shortName: string;
  code: string;
  category: string;
  tagline: string;
  description: string;
  visionMotto?: string;
  establishedDate?: string;
  region?: string;
  chapter?: string;
  history?: string;
  awards?: string[];
  nominationAuthorities?: NominationAuthority[];
  officeBearers?: OfficeBearer[];
  activitiesList?: CsiActivity[];
  ieteCounselors?: IeteCounselor[];
  ieteActivities?: IeteActivity[];
  ietePublications?: string[];
  saeMilestones?: string[];
  saeCompetitions?: string[];
  saeOfficeBearers?: SaeOfficeBearer[];
  saeActivities?: SaeActivity[];
  ishraeOfficeBearers?: IshraeOfficeBearer[];
  ishraeActivities?: IshraeActivity[];
  ishraePartnerships?: IshraeGovtPartnership[];
  objectives: string[];
  membershipBenefits: string[];
  flagshipEvents: string[];
  logoOrIcon: string;
  studentChairs: string;
  image: string;
  membersCount: string;
}

export interface TEDxSpeaker {
  id: string;
  name: string;
  designation: string;
  talkTitle: string;
  summary: string;
  image: string;
  videoDuration?: string;
}

export const studentLifeOverview = {
  title: "Student Life at MSAJCE",
  subtitle: "Empowering Curiosity, Creativity, Leadership & Global Connections",
  description: "At Mohamed Sathak A.J. College of Engineering, life beyond the classroom is vibrant, inclusive, and transformative. From state-of-the-art recreation hubs and student-led clubs to prestigious international professional society chapters and our official TEDx chapter, we foster a rich ecosystem for holistic development.",
  stats: [
    { label: "Active Student Clubs", value: "8 Flagship Clubs" },
    { label: "Professional Chapters", value: "4 Chapters" },
    { label: "Annual Campus Events", value: "50+" },
    { label: "TEDx Talks Delivered", value: "18+" },
  ],
};

export const studentHubAmenities: StudentHubAmenity[] = [
  {
    id: "sac",
    title: "Student Activity Centre (SAC)",
    category: "recreation",
    description: "A 12,000 sq.ft state-of-the-art facility serving as the central nucleus for all student council meetings, club rehearsals, indoor gaming, and creative jams.",
    highlights: [
      "Acoustically engineered music & jam session room",
      "Indoor games arena (Table Tennis, Carrom, Chess)",
      "Student Council Conference Room with AV setups",
      "Flexible amphitheatre for open-mic events"
    ],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    iconName: "Users"
  },
  {
    id: "canteen",
    title: "Multi-Cuisine Food Court & Cafeteria",
    category: "dining",
    description: "Hygienic, spacious dining hall offering nutritional South Indian, North Indian, and continental meals alongside fresh juice counters and bakery treats.",
    highlights: [
      "Seating capacity for 600+ students simultaneously",
      "FSSAI certified hygiene and quality monitoring",
      "Subsidized student combo meals and healthy snacks",
      "Open-air shaded pavilion for casual hangouts"
    ],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
    iconName: "Utensils"
  },
  {
    id: "sports-arena",
    title: "Sports & Fitness Complex",
    category: "fitness",
    description: "Comprehensive athletic facilities designed for inter-collegiate championships and daily fitness routines under certified physical education directors.",
    highlights: [
      "Full-sized cricket ground with turf nets",
      "Floodlit basketball and volleyball courts",
      "Air-conditioned gym with modern cardio & strength equipment",
      "400m synthetic track for track and field events"
    ],
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80",
    iconName: "Trophy"
  },
  {
    id: "hostel-lounge",
    title: "Residences & Community Lounges",
    category: "welfare",
    description: "Separate campus residence blocks for men and women equipped with study halls, high-speed Wi-Fi, recreation rooms, and round-the-clock medical care.",
    highlights: [
      "24/7 warden, security supervision & CCTV coverage",
      "High-speed optical fiber Wi-Fi in all rooms",
      "In-house laundry and solar water heating",
      "On-call doctor & emergency transport service"
    ],
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80",
    iconName: "Home"
  }
];

export const studentClubs: StudentClub[] = [
  {
    id: "sports-club",
    name: "Sports Club",
    category: "sports",
    tagline: "Athletic Excellence & Team Spirit",
    motto: "Teamwork Makes The Dream Work",
    vision: "To encourage and motivate students to involve in various sports activities at both inter and intra college level.",
    description: "This club maintains records of sports and games events attended by students within the college, within the university, and outside at the region/state/national level and their achievements/awards. We submit annual reports on sports events, budget allocations, and organize competitive sports events, rewarding winners with trophies and medals 🏅. All kinds of sports events take place in this club.",
    objectives: [
      "To build up sportsmanship.",
      "To foster intimate friendships.",
      "To reduce stress and improve health.",
      "To improve skills and enhance employability.",
      "To support in developing positive attitude, self-confidence, courage and patience.",
      "To get opportunities to see the community closely and thus gets an experience of human nature in relation to his / her environment.",
      "To avail the opportunity to meet the people from different walks of life."
    ],
    outdoorGames: [
      "Cricket",
      "Football",
      "Volleyball",
      "Basketball",
      "Rugby",
      "Badminton",
      "Kho Kho",
      "Throwball"
    ],
    indoorGames: [
      "Carrom",
      "Table Tennis",
      "Chess"
    ],
    images: [
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=900&q=80"
    ],
    activities: [
      "Annual Intra-College Sports Championship & Medals Ceremony",
      "Inter-Collegiate Anna University Zone Tournaments",
      "Daily Athletic Coaching & Fitness Conditioning Sessions",
      "Cricket, Football, Basketball & Track Athletics Leagues"
    ],
    membersCount: "450+ Athletes",
    iconName: "Trophy",
    badge: "Sports & Fitness"
  },
  {
    id: "fine-arts-club",
    name: "Fine Arts Club (ARTFUL AESTHETICS)",
    category: "cultural",
    tagline: "Unleashing Creativity & Artistic Expression",
    motto: "To inspire and enable our students to actively participate and develop their talent and skills like Dance, Art, Singing, Music, Acting etc.",
    vision: "To encourage students to express their thoughts, feelings, and creativity through various visual art forms from two dimensions to three dimensions. To tap the inherent talents and potentials of the student community at all levels of leadership and creative expression.",
    envistaNote: "Inaugurated under the ENVISTA CLUB umbrella initiative at MSAJCE, where 10 active student clubs take part actively.",
    staffCoordinator: "S. Viswajaa / AP – IT (Staff Co-ordinator)",
    studentPresident: "Kishore. P (IV Year Mechanical)",
    studentVicePresident: "Laksha (III Year CSE)",
    description: "Mohamed Sathak AJ College of Engineering has successfully inaugurated the ENVISTA CLUB, in which 10 clubs actively participate. Having an art club is a great way to keep students involved throughout the year. Through this club, students can develop their skills and talents while enjoying relaxation during college life. We conduct several extra-curricular events and prepare students to participate in external college fests to showcase their talents.",
    objectives: [
      "Encourage the budding talent of the students.",
      "Impart skill-based training and multi-disciplinary research activities with industry and reputed institute collaborations, providing opportunities to express oneself freely.",
      "Educational objectives to encourage imagination, creative ability, and introduce an artistic environment.",
      "Inspiring students to make maximum contributions as creative artists and citizens.",
      "Organize various competitions, functions, and events in the college.",
      "Make the student confident and competitive in the global environment.",
      "To improve imagination skills in entertainment.",
      "To give students an artistic outlet and help each enrich interest for art and personal experience through art."
    ],
    images: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80"
    ],
    activities: [
      "Annual Campus Art Exhibition & Live Painting Showcase",
      "Dance, Singing, Music, Acting & Drama Competitions",
      "External Inter-Collegiate Cultural Fest Participation",
      "Digital Illustration, UI/UX & Wall Mural Initiatives"
    ],
    membersCount: "250+ Artists",
    iconName: "Palette",
    badge: "Fine Arts & Aesthetics"
  },
  {
    id: "science-club",
    name: "Science Club",
    category: "technical",
    tagline: "Exploring Scientific Frontiers & Practical Innovation",
    motto: "Arousing Curiosity, Logical Reasoning & Hands-on Experimentation",
    vision: "To promote interest, understanding, and knowledge of the scientific world amongst college students and the local community.",
    description: "The Science Club was started with an aim intended to invite many eminent scientists who share their experience with students and motivate them to get scientific knowledge. Science Club is one of the largest clubs in our College, divided into three specialized sections: Physics, Chemistry, and General. We help engineering students learn science outside the classroom, apply scientific principles in daily life, and guide them to develop an independent, logical, and creative mind.",
    scienceSections: [
      "Physics Section",
      "Chemistry Section",
      "General Science & Mathematics"
    ],
    objectives: [
      "Solve a relevant, science-based problem set within a real-world scenario.",
      "Work in pairs, small groups, or independently on scientific projects.",
      "Take part in practical, hands-on science activities and experimentation.",
      "Think and talk about science during activities and when sharing results.",
      "Share scientific findings and results using a variety of media."
    ],
    scienceHandsOn: [
      "Making Electronic Components & Circuitry",
      "Formulating Invisible Ink & Electroplating",
      "Synthesizing Biodiesels & Chemical Reactions",
      "Fire Writing & Leaf Venation Botanical Studies"
    ],
    thingsToDo: [
      "Conduct Seminars, Workshops, Exhibitions, and Quiz Competitions.",
      "Organize monthly guest lectures by eminent scientists.",
      "Promote the active use of IT in learning science.",
      "Facilitate monthly discussions on recent innovations in science.",
      "Decorate classrooms, libraries, and laboratories with student-created scientific charts and models."
    ],
    images: [
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80"
    ],
    activities: [
      "National Science Day Exhibition & Model Competition",
      "State-Level Science Quiz & Monthly Expert Lectures",
      "Applied Physics & Green Chemistry Hands-on Experiments",
      "Astronomy Stargazing & Scientific Chart Exhibitions"
    ],
    membersCount: "350+ Researchers",
    iconName: "Microscope",
    badge: "Science & Research"
  },
  {
    id: "tamil-mandram",
    name: "Tamil Mandram (தமிழ் மன்றம்)",
    category: "cultural",
    tagline: "தமிழ் மொழி, பண்பாடு மற்றும் கலை வளர்ச்சி",
    motto: "வாழ்க தமிழ் ! வெல்க தமிழ் !",
    vision: "தித்திக்கும் தேன்தமிழ்மொழி என்றும் வாழ வேண்டும் ! எங்கும் வெல்ல வேண்டும் !",
    description: "தமிழுக்கு என்றும் அழிவில்லை. அழிவில்லாத தமிழிற்காக இளந்தமிழ்ச் செல்வங்களிடத்தில் மட்டுமின்றி இச்சமுதாயத்திலும் ஓர் அற்புதமாற்றம் பெறவே இந்த தமிழ்மன்றம். அதற்கான முழுத்திறனையும் இளந்தமிழர்களிடத்தில் புதுப்பிக்கும் நம் கடமையே இது என்பதைவிட தமிழ்மேல் நாங்கள் கொண்டிருக்கும் பற்று எனக்கூறலாம். நம் முன்னோர் வாழ்ந்து, வழிபட்டு, வென்று விட்டுச்சென்ற அடையாளங்களைத்தேடி அதை மீட்டுருவாக்கும் எண்ணம் கொண்டுள்ளோம். நம் முன்னோர்கள் தமிழை பெறுமைபடுத்திச்சென்றனர், அதை பேசுவதைகாட்டிலும் இனி தமிழுக்கு நம்மாலான புகழை பெற்றுத்தரும் செயலில் இறங்குவோம்.",
    tamilQuotes: [
      "“தித்திக்கும் தேன்தமிழ்மொழி என்றும் வாழ வேண்டும் ! எங்கும் வெல்ல வேண்டும் !”",
      "“வாழ்க தமிழ் ! வெல்க தமிழ் !”"
    ],
    tamilObjectives: [
      "மாணவர்களிடத்தே தமிழ் ஆர்வத்தையும் அறிவையும் வளர்ப்பதே இத்தமிழ்மன்றத்தின் முக்கிய நோக்கமாகும்",
      "இக்கால இளைஞர்களிடத்தில் பண்டைய தமிழ் பண்பாட்டையும், கலாச்சாரத்தையும் பரவச்செய்தல்",
      "தமிழில் தொழில்நுட்ப அறிவை வளர்த்தல்",
      "தமிழ் நிகழ்ச்சிகள் சமுதாய நிகழ்வுகளுக்கேற்ப தொடர்ந்து நடைபெறுதல்"
    ],
    tamilEvents: [
      "இருமுகம் ஒரு அகம்",
      "பேசும் படம்",
      "ஆடு புலி",
      "கைவண்ண காவியம்",
      "டென்ட்கொட்டாய்",
      "விடுகதை விளையாட்டு",
      "பிரசங்கத்தின் தலைவன்",
      "தமிழ்க்கோர்வை"
    ],
    images: [
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80"
    ],
    activities: [
      "Muthamizh Vizha Annual Cultural Extravaganza",
      "Inter-College Pattimandram (Debate) & Kavithai Contests",
      "Traditional Folk Arts & Villu Paattu Performances",
      "Thirukkural Recitation & Tamil Essay Writing Competitions"
    ],
    membersCount: "300+ Members",
    iconName: "BookOpen",
    badge: "Literary & Cultural"
  },
  {
    id: "coding-club",
    name: "Coding Club",
    category: "technical",
    tagline: "Engineering Software Solutions & Competitive Programming",
    motto: "Code, Build & Solve Real-World Problems",
    vision: "Programming abilities are crucial tools that can be applied to and integrated into a variety of disciplines and domains in today's climate of rapid change.",
    description: "Programming abilities are crucial tools that can be applied to and integrated into a variety of disciplines and domains in today's climate of rapid change. The MSAJCE Coding Club empowers students across all engineering branches to master modern software stack, algorithmic problem solving, and open source development.",
    codingAims: [
      "More coding contests held to reach all students on campus.",
      "Conduct workshops on CS topics like web & app development, machine learning, IoT, etc.",
      "Participate in open source initiatives, build apps, and offer technical assistance to campus groups.",
      "Represent the college at intercollegiate technical competitions.",
      "Take part in global events like ACM-ICPC, Google Code Jam, Google Summer of Code, and competitive programming platforms."
    ],
    codingPractices: [
      "College-wide coding competitions focusing on reasoning, analytical thinking, problem-solving, and efficient coding.",
      "Weekly team meetups to collaborate on projects, shared goals, technical discussions, and competition strategies.",
      "Structured lecture sessions teaching fundamental computer science & software engineering principles.",
      "Placement & internship preparation workshops hosted by seniors, alumni, and industry experts."
    ],
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
    ],
    activities: [
      "Weekly 24-Hour CodeWars & Algorithmic Problem Solving Sprints",
      "Full-Stack Web Dev, ML & Mobile App Development Bootcamps",
      "Open Source Contributions & Campus Software Tech Support",
      "ACM-ICPC, Google Code Jam & Alumni Placement Prep Seminars"
    ],
    membersCount: "500+ Coders",
    iconName: "Code",
    badge: "Technical & Software"
  },
  {
    id: "robotic-club",
    name: "Robotic Club",
    category: "technical",
    tagline: "Thinking Technologically · Designing & Constructing Autonomous Robots",
    motto: "Thinking Technologically",
    vision: "The Robotics Club aims to cultivate the habit of 'thinking technologically' inside each student at MSAJCE.",
    description: "Students that are interested in learning about and using robots can come together to form a robotics club. Teams of students must design and construct a robot that can compete against opponents in a number of distinct challenges in order to win the robotics tournament.",
    objectives: [
      "To encourage young people to become the robotics industry's driving force.",
      "It is an opportunity to creatively use information and observe how systems interact with the environment and one another.",
      "To give students the professional engineering skills that will benefit them in the workplace."
    ],
    roboticsActivities: [
      "Robotics Education Initiatives",
      "Brief Training Sessions",
      "Robotics Basics Workshop"
    ],
    images: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80"
    ],
    activities: [
      "Robotics Education Initiatives & Circuitry Bootcamps",
      "Robotics Basics Workshops & Hands-on Assembly",
      "Inter-Collegiate Robo-Tournament & Line Follower Races",
      "Brief Training Sessions on Embedded Microcontrollers & Sensors"
    ],
    membersCount: "220+ Roboticists",
    iconName: "Bot",
    badge: "Robotics & Innovation"
  },
  {
    id: "energy-eco-club",
    name: "Energy & Eco Club",
    category: "eco",
    tagline: "Responsible Energy Use & Environmental Health Preservation",
    motto: "Sustaining Energy, Preserving Nature",
    vision: "Nature imparts life lessons in its own steady ways and empowers our young to share their responsibility for upholding environmental health.",
    description: "The Energy & Eco Club is dedicated to raising awareness about responsible energy consumption, fossil fuel conservation, and environmental protection across the campus and local community.",
    energyClubDetails: "The goal of the Energy Club is to raise and spread knowledge about responsible and sustainable energy use. Given the limited quantity of fossil fuels available, resource management and conservation are urgently needed. Students are introduced to the concept of energy conservation through the Energy Club, as well as the necessity for it and what part they can play in guaranteeing conservation. In order to combat the ongoing energy issue, it helps the students to conserve energy. These actions would support not only the dissemination of information about energy efficiency but also its application in homes and institutions.",
    ecoClubDetails: "The Eco Club holds that nature imparts life lessons in its own steady ways and empowers our young to share their responsibility for upholding environmental health and taking action to prevent environmental degradation both individually and collectively.",
    objectives: [
      "Raise and spread knowledge about responsible and sustainable energy use.",
      "Introduce students to energy conservation concepts and efficient resource management in homes and institutions.",
      "Empower students to uphold environmental health and prevent ecological degradation individually and collectively."
    ],
    images: [
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80"
    ],
    activities: [
      "Energy Conservation Awareness & Household Audit Seminars",
      "Campus Tree Plantation & Environmental Protection Drives",
      "Zero-Plastic Campaigns & E-Waste Recycling Initiatives",
      "Green Energy Workshops & Ecological Sustainability Projects"
    ],
    membersCount: "350+ Eco Warriors",
    iconName: "Leaf",
    badge: "Energy & Sustainability"
  },
  {
    id: "photography-club",
    name: "Photography Club",
    category: "media",
    tagline: "Capturing Surroundings · Short Filmmaking · Screenwriting & Visual Expression",
    motto: "More Than Just Taking Photographs",
    vision: "Exploring this fascinating aspect of the visual arts is welcomed and encouraged for people of all expertise levels.",
    description: "The members of the photography club are encouraged to take images as they grow to appreciate the hobby more. It gives workers and students a venue for exploring and appreciating their surroundings through photography, short filmmaking, and screenwriting. There is much more to photography than just using a camera to take photographs. By comprehending and learning about what constitutes a successful photograph, from composition to creative expression, students in this club have the chance to develop their skills. Additionally, club members will learn how to edit and improve photography photographs using cutting-edge software for both personal use and publication. While taking pictures of sporting events and activities relevant to the school, students are encouraged to hone their talents. Exploring this fascinating aspect of the visual arts is welcomed and encouraged for people of all expertise levels.",
    objectives: [
      "Provide a venue for students and staff to explore and appreciate surroundings through photography, short filmmaking, and screenwriting.",
      "Teach composition, creative expression, and what constitutes a successful, compelling photograph.",
      "Train members in editing and improving photographs using cutting-edge post-production software for personal use and publication.",
      "Encourage students to hone talents while covering sporting events and college activities across all expertise levels."
    ],
    photographyPillars: [
      "Visual Composition & Creative Expression",
      "Short Filmmaking & Screenwriting",
      "Digital Photo Editing & Post-Production",
      "Campus Sports & Event Photojournalism"
    ],
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80"
    ],
    activities: [
      "Campus Sports & Cultural Event Photojournalism",
      "Short Filmmaking, Screenwriting & Digital Storytelling",
      "Photo Editing Workshops with Cutting-Edge Post-Production Software",
      "Composition, Lighting & Creative Expression Masterclasses"
    ],
    membersCount: "180+ Photographers",
    iconName: "Camera",
    badge: "Visual Arts & Media"
  }
];

export const professionalSocieties: ProfessionalSociety[] = [
  {
    id: "csi",
    name: "Computer Society of India (CSI)",
    shortName: "CSI",
    code: "CSI-MSAJCE",
    category: "Computer Science & IT",
    tagline: "The CSI Vision: “IT for Masses”",
    visionMotto: "IT for Masses",
    region: "Region – VII (Tamil Nadu, Pondicherry, Andaman and Nicobar, Kerala, Lakshadweep)",
    chapter: "Kanchipuram Chapter",
    history: "Keeping in mind the interest of the IT professionals & computer users, CSI works towards making the profession as area of choice amongst all sections of the society. To fulfill this objective, the CSI regularly organizes conferences, conventions, lectures, projects, awards. At the same time it also ensures that regular training and skill updating are organized for the IT professionals. Education Directorate, CSI helps physically challenged citizens by providing training 'Punarjani'. CSI also works towards a global approach, by seeking out alliances with organizations overseas who may be willing to come forward and participate in such activities. CSI also helps governments in formulating IT strategy & planning.",
    description: "Being closely associated with students, the Society has developed a well-established network across the country. The activities conducted for the students associated with the Society include lecture meetings, seminars, conferences, training programs, programming contests and industrial visits to installations. CSI has a strong Educational Directorate which undertakes activities related to Certification of professionals related to the latest technologies. Its recent initiative of distance education in the Business Domain areas offers technology enabled learning supported by personal counseling & expert advice. In an ever changing environment, CSI offers professional counseling being a great need of the hour. It is done by being in close contact with its young members through various events, conferences, symposia to name a few.",
    awards: [
      "Our College Received Best Supporting College award (SBC) from CSI Kancheepuram Chapter",
      "Our faculty Mr. D. Weslin Received Active participant award (SBC) from CSI Kancheepuram Chapter"
    ],
    nominationAuthorities: [
      {
        name: "Dr. K.S. SRINIVASAN",
        designation: "Principal, Mohamed Sathak AJ College of Engineering",
        phone: "9150575066",
        email: "principal@msajce-edu.in"
      },
      {
        name: "Dr. I. Manju",
        designation: "Nominee, Professor, Department of ECE",
        phone: "9949055026",
        email: "ece.manju@msajce-edu.in"
      },
      {
        name: "Dr. D. Weslin",
        designation: "CSI Student Branch Counsellor, Associate Professor, Department of IT",
        phone: "9715202533",
        email: "it.weslin@msajce-edu.in"
      }
    ],
    officeBearers: [
      { position: "President", name: "Yogesh R", department: "IT", batch: "2022-2026" },
      { position: "Vice President", name: "Saqlin Mustaq M", department: "AI&DS", batch: "2023-2027" },
      { position: "Secretary", name: "Abu Jabar Mubarak", department: "CS&BS", batch: "2022-2026" },
      { position: "Joint Secretary", name: "Hanuram PR", department: "CSE", batch: "2023-2027" },
      { position: "Joint Secretary", name: "Shivam Vishwakarma", department: "CSE", batch: "2023-2027" },
      { position: "Treasurer", name: "Navadharshan", department: "CSCS", batch: "2023-2027" },
      { position: "Executive Member", name: "Akram Bilal", department: "AI&DS", batch: "2022-2026" },
      { position: "Executive Member", name: "Zeenath Nisha", department: "IT", batch: "2023-2027" }
    ],
    activitiesList: [
      {
        sno: 1,
        name: "CSI Inaugural Function",
        resourcePerson: "Dr. Murugan, President CSI Kancheepuram Chapter & Principal, Valliammai College of Engineering",
        date: "28.02.23",
        participants: "200",
        coordinators: "Mrs. Viswajaa.S (AP/IT), Mr. Pandiyan.G (AP/CSE)",
        reportUrl: "https://www.msajce-edu.in/uploads/csi/CSI-inauguralReport.pdf"
      },
      {
        sno: 2,
        name: "Guest Lecture - Voice Over IP",
        resourcePerson: "Mr. Anbazhagan A T, Technical Lead, Cognizant",
        date: "22.03.23",
        participants: "100",
        coordinators: "Mrs. Gayathiri (AP/CSE), Mrs. Aiswarya M.S (AP/IT)",
        reportUrl: "https://www.msajce-edu.in/uploads/csi/CSI-GL-VoiceOverIP.pdf"
      },
      {
        sno: 3,
        name: "Guest Lecture - Digital Marketing",
        resourcePerson: "Mr. J. Mohammed Afroze, Digital CEO, Chennai",
        date: "17.03.23",
        participants: "110",
        coordinators: "Mr. Rajasekar R (AP/CSE), Mrs. Aysha Surfeen.M.A (AP/IT)",
        reportUrl: "https://www.msajce-edu.in/uploads/csi/CSI-GL-DigitalMarketing.pdf"
      },
      {
        sno: 4,
        name: "Interactive Session - Innovation & Invention in AI Technology",
        resourcePerson: "Ms. Anisha Udhayakumar, AI Evangelist, Intel Corporation",
        date: "10.03.23",
        participants: "100",
        coordinators: "Mr. Vigneshwaran (TPO), Mr. Hamer Shield J M",
        reportUrl: "https://www.msajce-edu.in/uploads/csi/CSI-InteractiveSession-AI-TECH.pdf"
      },
      {
        sno: 5,
        name: "Benefits of CSI Membership",
        resourcePerson: "Dr. M. Senthil Kumar, Secretary, CSI Kancheepuram Chapter",
        date: "20.02.20",
        participants: "200",
        coordinators: "Mrs. S. Kayalvizhi, Mrs. Bapitha Rani",
        reportUrl: "https://www.msajce-edu.in/uploads/csi/CSI-Benefits-Report.pdf"
      }
    ],
    objectives: [
      "Work towards making IT as an area of choice amongst all sections of society under the vision 'IT for Masses'.",
      "Organize conferences, conventions, lectures, projects, and awards to advance the IT profession.",
      "Conduct regular training and skill updating for IT professionals and physically challenged citizens ('Punarjani').",
      "Seek out global alliances overseas and assist governments in formulating IT strategy and planning.",
      "Provide professional career counseling and certifications in cutting-edge computing and business domains."
    ],
    membershipBenefits: [
      "Official CSI National Student Membership certification and recognized professional credentials.",
      "Direct eligibility for national CSI Student Convention competitions, awards, and project expos.",
      "Free subscription to CSI Communications magazine and access to digital technical repositories.",
      "Priority registration for value-added industry certification workshops and coding bootcamps.",
      "Networking with national chapter delegates, technical alumni, and premier software recruiters."
    ],
    flagshipEvents: [
      "CSI HackVerse (24-Hour National Hackathon)",
      "CyberDefense Conclave & CTF Security Sprint",
      "CodeSprint Algorithmic Programming Contest",
      "Cloud & DevOps Hands-On Bootcamp"
    ],
    logoOrIcon: "Terminal",
    studentChairs: "CSI Student Branch Counsellor: Dr. D. Weslin (IT) | Student President: Yogesh R (IT)",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
    membersCount: "280+ Members"
  },
  {
    id: "iete",
    name: "Institution of Electronics and Telecommunication Engineers (IETE)",
    shortName: "IETE",
    code: "IETE-ISF-MSAJCE",
    category: "Electronics & Telecommunication Engineering",
    tagline: "IETE Students Forum (ISF) · Established 16/08/2017",
    establishedDate: "16/08/2017",
    description: "The Institution of Electronics and Telecommunication Engineers (IETE) is one of the leading Professional Societies in India for Electronics and Communication Engineers. Our institution has established an IETE Students Forum in the year - 16 /08/2017 -. Our student branches have 100 active members. This Forum organizes Guest lectures, Seminars, Workshops, and conferences for the benefit of student members to exchange ideas and information on the topics of their interest like curriculum, employment opportunities, higher educational opportunities, emerging trends, new developments etc. The student members are also facilitated towards technical visits, practical training, and project work in R&D laboratories and Industries. These activities encourage team work, event management and develop the spirit of self-reliance among the student members. Our student members have also actively participated and won prizes in various technical events conducted by other institutions. IETE student members have the privilege to attend IETE technical programs in India at reduced registration fees.",
    objectives: [
      "Improving the standard of education across Electronics & Communication Engineering disciplines.",
      "Train the students in the emerging area to meet the new opportunities in semiconductor, telecommunications, and IoT sectors.",
      "Encouraging outside-the-classroom studies / practical work / seminars etc. to foster technical excellence.",
      "Better employment of the students on completion of their courses through practical domain skill-sets.",
      "Substantial increase of IETE membership and its nationwide distributions across academic engineering institutions."
    ],
    membershipBenefits: [
      "Priority for publishing their papers in Journal of Education.",
      "Can also subscribe for other publications such as IETE Journal of Research and IETE Technical Review (available online).",
      "ISF students are welcome to attend IETE technical programs in India at reduced registration fees.",
      "ISF member will be issued with an official recognized Identity Card.",
      "Facilitation towards industrial technical visits, practical training, and project work in R&D laboratories and industries."
    ],
    ietePublications: [
      "IETE Journal of Education",
      "IETE Journal of Research",
      "IETE Technical Review"
    ],
    ieteCounselors: [
      {
        sno: 1,
        role: "Branch Counselor 1",
        name: "Dr. I. Manju",
        department: "Department of ECE",
        institution: "Mohamed Sathak AJ College of Engineering",
        codeInfo: "School Code / Branch Code: ISF-MSAJCE"
      },
      {
        sno: 2,
        role: "Branch Counselor 2",
        name: "Mrs. S. Anusuya",
        department: "Department of ECE",
        institution: "Mohamed Sathak AJ College of Engineering",
        codeInfo: "School Code / Branch Code: ISF-MSAJCE"
      }
    ],
    ieteActivities: [
      {
        sno: 1,
        eventName: "Signal and Power Integrity in Semiconductor Industry",
        resourcePerson: "Mr. ZakirHussain, M.E. Analog Design Engineer, Microchip India PVT Ltd, Bangalore",
        date: "27-06-2020",
        targetAudience: "100",
        participants: "65"
      },
      {
        sno: 2,
        eventName: "Cyber Physical Systems and its Applications using LABVIEW",
        resourcePerson: "Mr. K. Prakash, M.E. Application Engineer, Optithought",
        date: "24/06/20",
        targetAudience: "100",
        participants: "77"
      },
      {
        sno: 3,
        eventName: "Art of Thinking Big",
        resourcePerson: "Mr. Aadil Ibrahim .A (Alumnus) Founder of Cameraman, Entrepreneur by Profession, Public Speaker by Passion",
        date: "11/06/20",
        targetAudience: "160",
        participants: "263"
      },
      {
        sno: 4,
        eventName: "Embedded & IOT Boot Camp",
        resourcePerson: "Day 1 - Dr. A.L. Vallikannu, Associate Professor, HITS, Chennai | Day 2 - Dr. Athif shah, Founder Managing Director, ABE semiconductor Designs, Chennai | Day 3 - Mr. M. Prabakaran (Alumni), Senior Software Architect in Caterpillar",
        date: "27/05/20 to 29/05/20",
        targetAudience: "75",
        participants: "120"
      },
      {
        sno: 5,
        eventName: "Scope of Electronics Engineer in Various Domain",
        resourcePerson: "Mr. Sankaralingam Principal Engineer, Valeo & Mrs. Suganya - Jasmine Infotech",
        date: "30/01/2019",
        targetAudience: "63",
        participants: "70"
      },
      {
        sno: 6,
        eventName: "Inter Department TECHNICAL QUIZ",
        resourcePerson: "Coordinator: Mr. M.L. Syed Ali | Convenor: Dr. E. Dhiravidachelvi",
        date: "12/02/20",
        targetAudience: "Won prizes (3 batches)",
        participants: "200"
      },
      {
        sno: 7,
        eventName: "IETE- TECHNICAL & NON TECHNICAL CONNEXIONS",
        resourcePerson: "Coordinator: Ms. E. Jayanthi | Convenor: Dr. E. Dhiravidachelvi",
        date: "01/09/2018",
        targetAudience: "Won prizes (3 batches)",
        participants: "300"
      },
      {
        sno: 8,
        eventName: "PROJECT EXPO",
        resourcePerson: "Coordinator: Ms. I.S. Suganthi | Convenor: Dr. E. Dhiravidachelvi",
        date: "23/03/2018",
        targetAudience: "Won prizes (3 batches)",
        participants: "70"
      },
      {
        sno: 9,
        eventName: "Seminar on Recent Trends in Optical Fibre Communication",
        resourcePerson: "Dr A. Sadagopan, Asst. General Manager (Rtd) BSNL, IETE Professor",
        date: "16/08/2017",
        targetAudience: "97",
        participants: "120"
      }
    ],
    flagshipEvents: [
      "Embedded & IOT Boot Camp",
      "PROJECT EXPO & Technical Connexions",
      "Inter Department Technical Quiz",
      "Signal and Power Integrity in Semiconductor Industry"
    ],
    logoOrIcon: "Cpu",
    studentChairs: "Branch Counselor 1: Dr. I. Manju (ECE) | Branch Counselor 2: Mrs. S. Anusuya (ECE)",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    membersCount: "100 Active Members"
  },
  {
    id: "sae",
    name: "Society of Automotive Engineers (SAE India)",
    shortName: "SAE",
    code: "SAE-INDIA-MSAJCE",
    category: "Automotive & Mobility Engineering",
    tagline: "SAEINDIA Collegiate Club · Inaugurated 21.02.2020",
    establishedDate: "21.02.2020",
    region: "Southern Section (Covering Northern, Eastern, Southern & Western Sections nationwide)",
    description: "Society of Automotive Engineers (SAE) is a U.S.-based, globally active professional association and standards developing organization for engineering professionals in various industries. Principal emphasis is placed on global transport industries such as aerospace, automotive, and commercial vehicles. Accordingly, the name SAE was established to reflect the broader emphasis on mobility. SAEINDIA is India's leading resource for mobility technology. As an individual member driven society of mobility practitioners the ownership of SAEINDIA wrests with its members who are Individuals from the mobility community, which includes Engineers Executives from Industry, Government Officials, Academics and Students. It is an affiliate society of SAE International registered in India as an Indian nonprofit engineering and scientific society dedicated to the advancement of mobility industry in India. Student clubs of SAE from various academic institution, make sure that they establish a link between the industry and the students. SAE India with its four sections (Northern, Eastern, Southern and Western) covering entire India, organizes various events for the benefit of the engineering student community.",
    saeMilestones: [
      "Inaugurated the SAE-INDIA collegiate club associated with MSAJCE dated on 21.02.2020",
      "Conducted the SAE-INDIA Southern section TIER-II event dated on 21.02.2020"
    ],
    saeCompetitions: [
      "TRACTOR DESIGN COMPETITION",
      "BAJA SAE INDIA",
      "SUPRA SAEINDIA",
      "AERO DESIGN CHALLENGE",
      "SAE INDIA STUDENT CONVENTION",
      "SAE INDIA BICYCLE DESIGN COMPETITION",
      "SAE INDIA ASOP",
      "ELECTRIC TWO WHEELER DESIGN COMPETITION",
      "SAE INDIA TIFAN (TECHNOLOGY INNOVATION FORUM FOR AGRICULTURAL NURTURING)",
      "SAE INDIA EFFICYCLE"
    ],
    saeOfficeBearers: [
      {
        sno: 1,
        position: "Faculty Incharge",
        name: "Mr. S. Deepakkumar",
        roleCategory: "Faculty Incharge",
        department: "Department of Mechanical Engineering"
      },
      {
        sno: 2,
        position: "Faculty Incharge",
        name: "Mr. R. Prabu",
        roleCategory: "Faculty Incharge",
        department: "Department of Mechanical Engineering"
      },
      {
        sno: 3,
        position: "President",
        name: "Syed. N. Zaheer Abbas",
        roleCategory: "Student Bearer",
        department: "Department of Mechanical Engineering"
      },
      {
        sno: 4,
        position: "Vice President",
        name: "Chandrasekar. G",
        roleCategory: "Student Bearer",
        department: "Department of Mechanical Engineering"
      },
      {
        sno: 5,
        position: "Secretary",
        name: "Muhammed Zahan Faaieq J",
        roleCategory: "Student Bearer",
        department: "Department of Mechanical Engineering"
      },
      {
        sno: 6,
        position: "Joint Secretary",
        name: "Shahila P",
        roleCategory: "Student Bearer",
        department: "Department of Mechanical Engineering"
      },
      {
        sno: 7,
        position: "Treasurer",
        name: "Abdullah B",
        roleCategory: "Student Bearer",
        department: "Department of Mechanical Engineering"
      }
    ],
    saeActivities: [
      {
        sno: 1,
        academicYear: "2019-2020",
        typeOfEvent: "Collegiate Club",
        eventTitle: "Inauguration of SAE Collegiate Club",
        date: "21.02.2020",
        reportUrl: "https://www.msajce-edu.in/images/Departments/Mech/21-02-2020-Collegiate-Club.pdf"
      },
      {
        sno: 2,
        academicYear: "2019-2020",
        typeOfEvent: "Student Convention Tier - II Events",
        eventTitle: "SAEISS - Student Convention Tier - II Event 2020",
        date: "21.02.2020",
        reportUrl: "https://www.msajce-edu.in/images/Departments/Mech/21-02-2020-SAE-Tier-II-Events.pdf"
      }
    ],
    objectives: [
      "Establish a robust link between automotive, aerospace, and commercial transport industries and engineering students.",
      "Promote applied automotive systems knowledge through vehicle dynamics, powertrain engineering, and fabrication.",
      "Facilitate active participation in national competitions like BAJA, SUPRA, TIFAN, and Electric Two Wheeler Challenges.",
      "Nurture leadership, project management, and multidisciplinary engineering capabilities through collegiate club governance.",
      "Provide access to global SAE mobility technical standards, design conventions, and professional network conclaves."
    ],
    membershipBenefits: [
      "Official SAE India Student Membership credential conferring nationwide mobility engineering network access.",
      "Direct eligibility to compete in prestigious national student events like BAJA SAEINDIA, SUPRA, and EFFICYCLE.",
      "Subsidized access to SAE technical conferences, student conventions, and specialized industrial webinars.",
      "Mentorship from automotive OEM industry executives, government mobility officials, and academic researchers.",
      "Preferential recruitment drives and internship referrals across automotive, aerospace, and EV mobility sectors."
    ],
    flagshipEvents: [
      "BAJA SAE INDIA & SUPRA SAEINDIA",
      "SAE India Student Convention (Tier-II Events)",
      "Electric Two Wheeler Design Competition",
      "TIFAN (Technology Innovation Forum for Agricultural Nurturing)",
      "SAE India Efficycle & Tractor Design Challenge"
    ],
    logoOrIcon: "Wrench",
    studentChairs: "Faculty Incharge: Mr. S. Deepakkumar & Mr. R. Prabu | Student President: Syed. N. Zaheer Abbas",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=900&q=80",
    membersCount: "Collegiate Chapter"
  },
  {
    id: "ishrae",
    name: "Indian Society of Heating, Refrigerating and Air Conditioning Engineers (ISHRAE)",
    shortName: "ISHRAE",
    code: "ISHRAE-MSAJCE",
    category: "Thermal, HVAC&R & Green Buildings",
    tagline: "ISHRAE Student Chapter · Advancing Arts & Sciences of HVAC&R",
    establishedDate: "Founded 1981 at New Delhi",
    region: "41 Chapters & Sub-Chapters Nationwide (HQ: New Delhi)",
    description: "The Indian Society of Heating, Refrigerating and Air Conditioning Engineers (ISHRAE), was founded in 1981 at New Delhi by a group of eminent HVAC&R professionals. ISHRAE operates from 41 Chapters and sub Chapters spread all over India, with HQ in Delhi. ISHRAE works in the National interest with various Govt. Ministries/Departments, e.g. in the development of Standards & drafting of NBC for BIS, working on ECBC with BEE, with Ozone cell of MoEFCC, on refrigerant gases. ISHRAE is a member & active supporter of National Centre for Cold Chain development (NCCD). Ministry of Agriculture works closely with NCCD on refrigeration. ISHRAE is also working in close co-operation with other similar Societies & organizations, both at national and international level, for the promotion and development of issues like Sustainability, Green Buildings, Energy Efficiency, Environmental Responsibility, Indoor Air Quality, Fire & Safety. ISHRAE is looked upon as a repository of technical knowledge in the HVAC&R and Building Industry field by peer Organizations & the Govt. of India. ISHRAE reaches out to all its members and seeks their active participation & involvement in all the Events/Programs organized by the society.",
    objectives: [
      "Advancement of the Arts and Sciences of Heating, Ventilation, Air Conditioning and Refrigeration Engineering and related services.",
      "Continuing education of members and interested professionals through lectures, workshops, product presentations, publications and expositions.",
      "Rendition of professional career guidance and financial assistance to students in thermal and HVAC&R sciences.",
      "Encouragement and incubation of cutting-edge scientific research in energy conservation, cold chains, and indoor air quality.",
      "Active collaboration with government ministries and statutory bodies to formulate energy benchmarks and safety codes."
    ],
    membershipBenefits: [
      "Provides excellent networking opportunities to interact with other Professionals, Industry Leaders and key decision makers in the Profession and Industry.",
      "Provides an excellent forum for professional development and continuous training & re-training on both fundamentals and latest worldwide products & technologies.",
      "Easy access to all ISHRAE Technical Publications, Software, Handbooks, Workshops, Conferences and Training Programs.",
      "Opportunity to work in the Chapter Working Committee & Headquarter activities towards our mission to promote the arts and sciences of HVAC&R in India.",
      "Provides a platform for effective marketing and launching of new products and technologies through exhibitions, product presentations and advertisements.",
      "Provides an International exposure through International Associates and global HVAC&R engineering societies."
    ],
    ishraeOfficeBearers: [
      {
        sno: 1,
        position: "Faculty Coordinator",
        name: "Prof. N. Senthil Kumar",
        roleCategory: "Faculty Advisor",
        department: "Department of Mechanical Engineering"
      },
      {
        sno: 2,
        position: "Student President",
        name: "K. Vignesh",
        roleCategory: "Student Officer",
        department: "Department of Mechanical Engineering"
      },
      {
        sno: 3,
        position: "Student Vice President",
        name: "M. Hameed Fayaz",
        roleCategory: "Student Officer",
        department: "Department of Mechanical Engineering"
      },
      {
        sno: 4,
        position: "Student Secretary",
        name: "R. Mohammed Aslam",
        roleCategory: "Student Officer",
        department: "Department of Mechanical Engineering"
      },
      {
        sno: 5,
        position: "Student Joint Secretary",
        name: "S. Dinesh Kumar",
        roleCategory: "Student Officer",
        department: "Department of Mechanical Engineering"
      },
      {
        sno: 6,
        position: "Student Treasurer",
        name: "A. Fazil Ahamed",
        roleCategory: "Student Officer",
        department: "Department of Mechanical Engineering"
      }
    ],
    ishraeActivities: [
      {
        sno: 1,
        activityTitle: "Professional Industry Networking",
        keyMandate: "Interaction with HVAC&R industry leaders, consultants, and corporate decision-makers.",
        scopeAndBenefit: "Industry Conclaves, ACREX Delegations & Corporate Networking"
      },
      {
        sno: 2,
        activityTitle: "Professional Training & Re-Training",
        keyMandate: "Continuous hands-on training on engineering fundamentals and latest worldwide technologies.",
        scopeAndBenefit: "Technical Workshops, Certification Courses & Software Masterclasses"
      },
      {
        sno: 3,
        activityTitle: "Technical Publications & Software Access",
        keyMandate: "Unrestricted access to ISHRAE standards, technical journals, duct design tools, and research handbooks.",
        scopeAndBenefit: "National Knowledge Repositories, Research Papers & Simulation Tools"
      },
      {
        sno: 4,
        activityTitle: "Chapter Governance & Committee Leadership",
        keyMandate: "Active student role in Chapter Working Committees and national headquarters mission projects.",
        scopeAndBenefit: "Leadership Development, Event Management & Institutional Governance"
      },
      {
        sno: 5,
        activityTitle: "Product Expositions & Technical Launches",
        keyMandate: "Platform for evaluating and presenting cutting-edge thermal comfort and refrigeration products.",
        scopeAndBenefit: "Product Presentations, Live Demonstrations & Industry Exhibitions"
      },
      {
        sno: 6,
        activityTitle: "Global Engineering & International Exposure",
        keyMandate: "Cross-border learning and student exchange through global international associate partnerships.",
        scopeAndBenefit: "International Associate Conclaves & Global Technical Exchange"
      }
    ],
    ishraePartnerships: [
      {
        sno: 1,
        partnerEntity: "Bureau of Indian Standards (BIS)",
        technicalDomain: "National Building Code (NBC)",
        initiativeSummary: "Formulation of statutory HVAC&R engineering standards, drafting NBC codes, and building safety provisions."
      },
      {
        sno: 2,
        partnerEntity: "Bureau of Energy Efficiency (BEE)",
        technicalDomain: "Energy Conservation Building Code (ECBC)",
        initiativeSummary: "Co-developing national energy conservation codes, thermal efficiency benchmarks, and star rating schemes."
      },
      {
        sno: 3,
        partnerEntity: "Ozone Cell, MoEFCC",
        technicalDomain: "Eco-Friendly Low-GWP Refrigerants",
        initiativeSummary: "Environmental compliance, phase-down of ozone depleting substances, and sustainable next-gen refrigerants."
      },
      {
        sno: 4,
        partnerEntity: "National Centre for Cold Chain Development (NCCD)",
        technicalDomain: "Ministry of Agriculture Collaboration",
        initiativeSummary: "Active partnership on cold chain refrigeration infrastructure, agricultural logistics, and post-harvest preservation."
      },
      {
        sno: 5,
        partnerEntity: "International Associates & Peer Bodies",
        technicalDomain: "Sustainability, IAQ & Green Architecture",
        initiativeSummary: "Global initiatives on Indoor Air Quality (IAQ), Green Buildings, Fire & Safety, and net-zero thermal systems."
      }
    ],
    flagshipEvents: [
      "ACREX India International Student Conclave",
      "National aQuest HVAC&R Technical Quiz Championship",
      "Green Building Energy Auditing & IAQ Colloquium",
      "Cold Chain Refrigeration & Thermal Storage Seminar"
    ],
    logoOrIcon: "ShieldCheck",
    studentChairs: "Faculty Coordinator: Prof. N. Senthil Kumar (Mech) | Student President: K. Vignesh (Mech)",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=900&q=80",
    membersCount: "190+ Members"
  }
];

export const tedxData = {
  theme: "Bridging Horizons: Technology, Humanity & Beyond",
  tagline: "Independently Organized TED Event at Mohamed Sathak A.J. College of Engineering",
  description: "TEDxMSAJCE is an independently organized event under official license from TED. It brings together visionary thinkers, researchers, artists, innovators, and changemakers on one stage to share revolutionary ideas that shape our collective future.",
  stats: [
    { label: "Editions Hosted", value: "3" },
    { label: "Speakers Featured", value: "18+" },
    { label: "Live Attendees", value: "1,200+" },
    { label: "YouTube Views", value: "250K+" }
  ],
  speakers: [
    {
      id: "spk-1",
      name: "Dr. K. Sivan",
      designation: "Former Chairman, ISRO & Eminent Aerospace Scientist",
      talkTitle: "Scaling Uncharted Heights in Space Exploration",
      summary: "An inspiring journey through perseverance, indigenous rocket engineering, and how Indian space research empowers grassroots society.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      videoDuration: "18:42 mins"
    },
    {
      id: "spk-2",
      name: "Dr. Ananya Ramakrishnan",
      designation: "AI Ethics Researcher & Social Technologist",
      talkTitle: "Humanizing Artificial Intelligence for Rural India",
      summary: "Exploring how ethical AI solutions can transform rural healthcare diagnostics, agricultural yield forecasting, and localized language education.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      videoDuration: "15:20 mins"
    },
    {
      id: "spk-3",
      name: "Chef K. Damodharan",
      designation: "Guinness Record Holder & Culinary Ambassador",
      talkTitle: "Preserving Heritage Through Culinary Innovation",
      summary: "How traditional recipes, indigenous grains, and culinary science intersect to build sustainable health and cultural pride.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      videoDuration: "14:15 mins"
    },
    {
      id: "spk-4",
      name: "Siddharth Roy",
      designation: "EV Pioneer & Clean Mobility Entrepreneur",
      talkTitle: "Building Sustainable Mobility for 1.4 Billion People",
      summary: "Deconstructing the battery chemistry, charging grid infrastructure, and frugal engineering needed to accelerate clean transportation in emerging economies.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
      videoDuration: "16:50 mins"
    }
  ],
  rules: [
    "TEDx events are non-partisan, non-commercial, and independent.",
    "Speakers share ideas worth spreading without promotional or commercial agendas.",
    "All talks are recorded and published on the official TEDx YouTube Channel."
  ]
};
