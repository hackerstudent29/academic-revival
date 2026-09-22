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
  images?: string[];
  activities: string[];
  membersCount: string;
  iconName: string;
  badge?: string;
}

export interface ProfessionalSociety {
  id: string;
  name: string;
  code: string;
  description: string;
  objectives: string[];
  membershipBenefits: string[];
  flagshipEvents: string[];
  logoOrIcon: string;
  studentChairs: string;
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
    { label: "Professional Chapters", value: "8" },
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
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80"
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
    tagline: "Green Energy, Sustainability & Environmental Care",
    description: "Driving renewable solar energy awareness, campus tree plantation, zero-plastic initiatives, e-waste recycling, and energy audit campaigns.",
    activities: [
      "Annual Campus Tree Plantation & Green Cover Drives",
      "Renewable Solar Energy Awareness Seminars",
      "Campus Plastic-Free & Coastal Beach Cleanups",
      "E-Waste Collection & Recycling Campaigns"
    ],
    membersCount: "350+ Eco Warriors",
    iconName: "Leaf",
    badge: "Eco & Sustainability"
  },
  {
    id: "photography-club",
    name: "Photography Club",
    category: "media",
    tagline: "Capturing Moments, Framing Stories",
    description: "The official visual media and photojournalism wing of MSAJCE responsible for event coverage, photowalks, short film making, and digital video editing.",
    activities: [
      "Campus Photowalks & Outdoor Photography Trips",
      "Short Film Making & Video Editing (Premiere/DaVinci)",
      "Official Media Coverage for College Fests & Sports",
      "Monthly Theme Photography Contests with Guest Judging"
    ],
    membersCount: "180+ Photographers",
    iconName: "Camera",
    badge: "Media & Visuals"
  }
];

export const professionalSocieties: ProfessionalSociety[] = [
  {
    id: "ieee",
    name: "IEEE Student Branch",
    code: "STB99214",
    description: "The world's largest technical professional organization dedicated to advancing technology for humanity. Our active IEEE Student Branch hosts technical symposiums, research paper contests, and IEEE Xplore access training.",
    objectives: [
      "Promote research culture and IEEE paper publications among students",
      "Host IEEE Women in Engineering (WIE) empowerment seminars",
      "Conduct international webinars with global IEEE Senior Members",
      "Provide student travel grants for international IEEE conferences"
    ],
    membershipBenefits: [
      "Free subscription to IEEE Spectrum magazine & digital library access",
      "Discounts on IEEE conference registrations worldwide",
      "Networking with top global engineers and industrial mentors",
      "Eligibility for IEEE student scholarships and awards"
    ],
    flagshipEvents: ["IEEE TechSummit", "WIE Leadership Conclave", "Project Expo"],
    logoOrIcon: "Cpu",
    studentChairs: "Branch Counselor: Dr. M. K. Subashini | Student Chair: R. Karthik (ECE)"
  },
  {
    id: "iste",
    name: "ISTE Student Chapter",
    code: "TN-142",
    description: "Indian Society for Technical Education chapter focused on bridging academia and industry through skill development courses, guest lectures by eminent scientists, and faculty-student joint workshops.",
    objectives: [
      "Enhance pedagogical and practical engineering skills",
      "Organize nationwide technical paper presentations",
      "Bridge gaps between curriculum and current industrial demand",
      "Recognize academic excellence through annual ISTE awards"
    ],
    membershipBenefits: [
      "Official ISTE membership ID recognized across Indian engineering colleges",
      "Priority registration in value-added skill certification programs",
      "Access to ISTE Journal of Technical Education"
    ],
    flagshipEvents: ["National Technical Convention", "State-Level Paper Contest", "SkillFest"],
    logoOrIcon: "GraduationCap",
    studentChairs: "Faculty Advisor: Prof. A. R. Rahman | Student Secretary: S. Priya (CSE)"
  },
  {
    id: "csi",
    name: "Computer Society of India (CSI)",
    code: "CSI-MSAJCE",
    description: "The premier association of IT professionals in India. CSI MSAJCE chapter empowers computer science and IT students through coding bootcamps, cybersecurity drills, and software architecture workshops.",
    objectives: [
      "Train students on emerging paradigms: Cloud, AI, Blockchain, and DevOps",
      "Organize regional hackathons and competitive programming challenges",
      "Facilitate industry interactions with top IT company leaders",
      "Guide students in publishing technical articles in CSI Communications"
    ],
    membershipBenefits: [
      "CSI Student Membership certification",
      "Free access to CSI digital knowledge repository",
      "Direct entry into CSI National Student Convention competitions"
    ],
    flagshipEvents: ["CSI HackVerse", "CyberSecurity Workshop", "CodeSprint"],
    logoOrIcon: "Terminal",
    studentChairs: "Faculty Coordinator: Dr. S. N. Mohamed | Student Lead: A. Firoz (IT)"
  },
  {
    id: "sae",
    name: "SAE India Collegiate Club",
    code: "SAE-AUTO",
    description: "Society of Automotive Engineers student chapter providing hands-on experience in vehicle design, powertrain engineering, electric mobility, and fabricating vehicles for BAJA SAE and Supra SAE competitions.",
    objectives: [
      "Design, analyze, and build All-Terrain Vehicles (ATV) and Electric Go-Karts",
      "Train in 3D CAD modeling (SolidWorks/CATIA) and Altair FEA simulations",
      "Participate in national automotive mobility challenges",
      "Expose students to modern EV powertrain technology"
    ],
    membershipBenefits: [
      "Hands-on vehicle fabrication experience in campus mechanical workshop",
      "SAE India membership card & entry to BAJA/SUPRA competitions",
      "Automotive industry recruitment drives & internship referrals"
    ],
    flagshipEvents: ["e-BAJA ATV Launch", "Go-Kart Racing Challenge", "Automotive CAD Clash"],
    logoOrIcon: "Wrench",
    studentChairs: "Faculty Advisor: Dr. K. Ramesh (Mech) | Captain: M. Imran (Mech)"
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
