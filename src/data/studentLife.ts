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
  activities: string[];
  membersCount: string;
  iconName: string;
  badge?: string;
  coordinator?: string;
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
    description: "Fostering physical fitness, competitive sportsmanship, athletic training, and representing MSAJCE in inter-collegiate, state, and zonal tournaments.",
    activities: [
      "Annual Intra-College Sports Championship",
      "Inter-Collegiate Anna University Zone Tournaments",
      "Daily Coaching & Fitness Conditioning Sessions",
      "Cricket, Football, Basketball & Track Athletics Events"
    ],
    membersCount: "450+ Athletes",
    iconName: "Trophy",
    badge: "Sports & Fitness"
  },
  {
    id: "fine-arts-club",
    name: "Fine Arts Club",
    category: "cultural",
    tagline: "Unleashing Creativity & Artistic Expression",
    description: "Nurturing creative visual expression through sketching, painting, digital art, poster design, clay sculpting, and campus wall mural installations.",
    activities: [
      "Annual Campus Art Exhibition & Live Painting Showcase",
      "Digital Illustration & UI/UX Design Masterclasses",
      "Inter-Collegiate Rangoli & Poster Making Contests",
      "Cultural Festival Stage Set Designing"
    ],
    membersCount: "250+ Artists",
    iconName: "Palette",
    badge: "Fine Arts"
  },
  {
    id: "science-club",
    name: "Science Club",
    category: "technical",
    tagline: "Exploring Scientific Frontiers & Innovation",
    description: "Igniting curiosity in fundamental science, physics/chemistry experiments, scientific quizzes, astronomy observation nights, and research paper presentations.",
    activities: [
      "National Science Day Exhibition & Model Competition",
      "State-Level Science Quiz & Poster Contest",
      "Applied Physics & Green Chemistry Experiments",
      "Astronomy & Telescope Stargazing Workshops"
    ],
    membersCount: "200+ Researchers",
    iconName: "Microscope",
    badge: "Science & Research"
  },
  {
    id: "tamil-mandram",
    name: "Tamil Mandram",
    category: "cultural",
    tagline: "தமிழ் மொழி, பண்பாடு மற்றும் கலை வளர்ச்சி",
    description: "Promoting rich Tamil language heritage, classical literature, debates (Pattimandram), poetry (Kavithai), traditional folk arts, and celebrating Tamil festivals.",
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
    tagline: "Code, Build & Solve Real-World Problems",
    description: "Dedicated to competitive programming, full-stack software development, open-source projects, LeetCode sprints, and hackathons.",
    activities: [
      "Weekly 24-Hour CodeWars Hackathons",
      "DSA & Algorithmic Problem Solving Bootcamps",
      "Open Source & GitHub Contribution Drives",
      "Web3, AI & Full-Stack Application Tech Sprints"
    ],
    membersCount: "500+ Coders",
    iconName: "Code",
    badge: "Technical"
  },
  {
    id: "robotic-club",
    name: "Robotic Club",
    category: "technical",
    tagline: "Engineering Autonomous & Intelligent Machines",
    description: "Hands-on design, circuit assembly, microcontrollers (Arduino, Raspberry Pi, STM32), ROS, Line Followers, Robo-Wars, and Autonomous Drones.",
    activities: [
      "Robo-Soccer & Line Follower Robot Races",
      "Drone Fabrication & Flight Control Workshops",
      "IoT & Embedded Systems Circuit Design Bootcamps",
      "National Robotics League Competition Entry"
    ],
    membersCount: "220+ Roboticists",
    iconName: "Cpu",
    badge: "Robotics & IoT"
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
