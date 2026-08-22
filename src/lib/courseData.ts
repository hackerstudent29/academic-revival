export type Course = {
  name: string;
  shortName?: string;
  slug: string;
  intake: number | string;
  govtQuota: number | string;
  managementQuota: number | string;
  level: string;
  department: string;
  description: string;
  image: string;
  details: CourseDetails;
  markdownFile?: string;
};

export type CourseDetails = {
  activities?: {
    chapters: { title: string; description: string }[];
    placements: { title: string; description: string }[];
    highlights: { title: string; description: string }[];
  };
  keyDrivers?: { title: string; description?: string }[];
  ucasCode: string;
  startDate: string;
  courseLength: string;
  heroQuote: string;
  overview: string;
  pathwayStructure: string;
  professionalsAndSponsors: string;
  industryNetworks: string;
  alumniSuccess: string;
  courseUnits: string;
  optionalDiploma: string;
  careers: string[];
  recruiters: string[];
};

// Default engineering template content aligned with Anna University & NBA standards
const defaultDetails: CourseDetails = {
  ucasCode: "MSAJCE",
  startDate: "August 2026",
  courseLength: "4 Years (8 Semesters) Full-Time / 3 Years (6 Semesters) Lateral Entry",
  heroQuote: "Empowering next-generation engineers through hands-on technical learning, outcome-based education, and industry-integrated innovation.",
  overview: `The department offers a cutting-edge engineering curriculum affiliated with Anna University and approved by AICTE. Our academic framework integrates rigorous theoretical foundations with intensive laboratory experimentation, industry internships, and collaborative research projects.

Students are mentored by experienced doctorates and industry veterans, preparing them for globally competitive engineering careers, entrepreneurship, and premier postgraduate research programs.

With smart classrooms, specialized research laboratories, active student professional chapters, and robust corporate placement partnerships, the department ensures holistic technical and leadership competency for every student.`,
  pathwayStructure: "The curriculum provides structured learning pathways spanning fundamental engineering sciences, core domain depth, professional electives, open electives, and capstone industrial project work.",
  professionalsAndSponsors: "The department maintains active Memorandums of Understanding (MoUs) with premier technology enterprises, research labs, and public sector undertakings for student internships, sponsored projects, and guest lectures.",
  industryNetworks: "Students benefit from comprehensive placement training, hackathons, technical symposiums, and industrial visits across leading multinational corporations and tech parks in Chennai and beyond.",
  alumniSuccess: "Our alumni network spans senior engineers, software architects, project managers, and research scholars across Fortune 500 companies, prestigious universities, and successful technological startups worldwide.",
  courseUnits: `Structured under Anna University 2021 & 2017 Regulations across 8 comprehensive semesters:

Foundation & Core Engineering (Semesters 1 - 4)
Mathematics, Basic Sciences, Engineering Mechanics, Programming Fundamentals, Digital Systems, and Core Engineering Discipline Foundations with dedicated laboratory practicals.

Advanced Specialization & Electives (Semesters 5 - 6)
Advanced Domain Subjects, Professional Electives, Open Interdisciplinary Electives, Mini-Projects, and Industrial Internship Trainings.

Capstone Innovation & Professional Practice (Semesters 7 - 8)
Emerging Technology Seminars, Management & Professional Ethics, Capstone Major Project, and Comprehensive Viva-Voce.`,
  optionalDiploma: `Value-Added Certification Programs
Specialized industry certifications conducted in collaboration with leading technology partners (AWS, Cisco, Red Hat, Oracle, Autodesk, MATLAB).

Honours & Minor Degree Options
Eligible high-performing students can opt for an additional Honours degree or interdisciplinary Minor degree as per Anna University guidelines.`,
  careers: [
    "Software Development Engineer",
    "Systems Design Engineer",
    "R&D Engineer",
    "Technical Project Manager",
    "Data & Automation Specialist"
  ],
  recruiters: [
    "TCS",
    "Infosys",
    "Cognizant",
    "Wipro",
    "HCL Technologies",
    "Accenture",
    "L&T Technology Services",
    "Zoho"
  ]
};

export const allCourses: Course[] = [
  // UG
  { 
    name: "Civil Engineering", shortName: "Civil Engineering", slug: "civil-engineering", 
    intake: 30, govtQuota: 15, managementQuota: 15, level: "Undergraduate", department: "Civil", 
    description: "Plan and construct sustainable infrastructure, buildings, and transportation systems.", 
    image: "https://images.unsplash.com/photo-1517581177682-a085bc7fcb10?q=80&w=1200&auto=format&fit=crop",
    details: { 
      activities: {
        chapters: [
          { title: "ASCE Student Chapter", description: "American Society of Civil Engineers chapter organizing site visits and bridge design contests." },
          { title: "ICI & Builders Association", description: "Indian Concrete Institute chapter for workshops on modern construction materials and green building." }
        ],
        placements: [
          { title: "Site Immersion", description: "Regular technical visits to L&T mega-sites, Metro rail projects, and water treatment plants." },
          { title: "Core Placements", description: "Recruitment by top infrastructure and real estate firms like L&T ECC, Afcons, and Sobha." }
        ],
        highlights: [
          { title: "Civil Symposium", description: "Annual technical fest featuring CAD modeling, paper presentations, and concrete testing challenges." },
          { title: "Smart City Hackathon", description: "Innovation challenge focusing on sustainable urban planning and intelligent transport systems." }
        ]
      },
      keyDrivers: [
        { title: "1. Smart Cities & Urbanization" },
        { title: "2. Green Building & Sustainability" },
        { title: "3. Building Information Modeling (BIM)" },
        { title: "4. Prefabrication & Modular Construction" },
        { title: "5. Earthquake Resistant Structures" }
      ],      ...defaultDetails, 
      heroQuote: "Push civil infrastructure forward through research-led design that responds to society and the world around you.",
      careers: ["Structural Engineer", "Site Engineer", "Construction Manager", "Urban Planner"],
      recruiters: ["L&T Construction", "Tata Projects", "Sobha", "Godrej Properties", "Afcons"]
    },
    markdownFile: "msajce_civil.md"
  },
  { 
    name: "Computer Science & Engineering", shortName: "CSE", slug: "computer-science-and-engineering", 
    intake: 60, govtQuota: 30, managementQuota: 30, level: "Undergraduate", department: "Computing", 
    description: "Learn the fundamentals of software development, algorithms, and system design.", 
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    details: { 
      activities: {
        chapters: [
          { title: "Computer Society of India (CSI)", description: "Organizes technical webinars, coding challenges, and professional certification drives." },
          { title: "ACM & IEEE Chapters", description: "Connects students with global research communities, conferences, and technical papers." },
          { title: "GDSC & Open Source Club", description: "Collaborative student teams developing real-world software solutions." }
        ],
        placements: [
          { title: "Corporate Immersion", description: "Regular technical immersion tours to TCS Siruseri, Infosys MWC, Zoho, and CTS OMR." },
          { title: "Placement Success", description: "Over 40+ premier tech organizations recruit from MSAJCE CSE every year." }
        ],
        highlights: [
          { title: "01 Technical Symposium", description: "Annual inter-collegiate technical festival featuring paper presentations, project expos, and code debug contests." },
          { title: "02 Hackathons & Coding Sprints", description: "Intensive innovation hackathons focused on AI, sustainability, smart cities, and IoT product prototypes." },
          { title: "03 Industry Masterclasses", description: "Weekly technical lectures, hands-on tool bootcamps, and career orientation workshops delivered by corporate practitioners." },
          { title: "04 Industrial Visits & Exposure", description: "Regular guided tours of leading industrial units, IT data centers, and advanced technology hubs." }
        ]
      },
      keyDrivers: [
        { title: "1. Digital Transformation Across Industries" },
        { title: "2. Rise of Artificial Intelligence and Machine Learning" },
        { title: "3. Cyber Security & Zero Trust Architecture" },
        { title: "4. Cloud Computing and DevOps" },
        { title: "5. Big Data and Data Science" },
        { title: "6. Blockchain and Web3" }
      ],      ...defaultDetails,
      heroQuote: "Architect the digital future with deep expertise in algorithms, software systems, and artificial intelligence.",
      careers: [
        "Software Development Engineer", 
        "Data Scientist & Analyst", 
        "AI/ML Engineer", 
        "Cloud & DevOps Engineer", 
        "Cybersecurity Specialist",
        "Full Stack Developer"
      ],
      recruiters: [
        "TCS",
        "Infosys",
        "CTS",
        "Wipro",
        "HCL Technology",
        "Tech Mahindra",
        "Zoho",
        "Intel",
        "Accenture",
        "IBM",
        "FSS"
      ]
    },
    markdownFile: "msajce_cse.md"
  },
  { 
    name: "Electronics & Communication Engineering", shortName: "ECE", slug: "electronics-and-communication-engineering", 
    intake: 60, govtQuota: 30, managementQuota: 30, level: "Undergraduate", department: "Electronics", 
    description: "Study signal processing, embedded systems, and telecommunication networks.", 
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1200&auto=format&fit=crop",
    details: { 
      activities: {
        chapters: [
          { title: "IETE Student Forum", description: "Institution of Electronics and Telecommunication Engineers organizing circuit design and IoT workshops." },
          { title: "IEEE Communications Society", description: "Engaging students in next-generation networking, 5G architectures, and wireless seminars." },
          { title: "Robotics & Embedded Club", description: "Hands-on projects with microcontrollers, Arduino, Raspberry Pi, and autonomous systems." }
        ],
        placements: [
          { title: "Industry Immersion", description: "Visits to electronics manufacturing hubs, semiconductor fabrication labs, and telecom switching centers." },
          { title: "Core Tech Placements", description: "Recruitment by top semiconductor, networking, and telecom giants like Cisco, Qualcomm, and Intel." }
        ],
        highlights: [
          { title: "01 ECE Symposium", description: "National-level fest featuring circuit debugging, robotics races, and technical paper presentations." },
          { title: "02 VLSI Design Sprints", description: "Intensive training on FPGA, Verilog, and ASIC design methodologies." },
          { title: "03 Telecom Masterclasses", description: "Guest lectures by RF engineers and telecom architects on 5G deployment and optical networks." },
          { title: "04 Automation Expos", description: "Showcasing student-built autonomous drones, smart home systems, and industrial IoT solutions." }
        ]
      },
      keyDrivers: [
        { title: "1. 5G/6G Technology and Networking" },
        { title: "2. Internet of Things (IoT) Expansion" },
        { title: "3. VLSI & Semiconductor Manufacturing" },
        { title: "4. Embedded Systems in Automotive (EV/AV)" },
        { title: "5. Satellite & Optical Communications" }
      ],      ...defaultDetails, 
      heroQuote: "Push telecommunications forward through hardware design that connects the world.",
      careers: ["Network Engineer", "Embedded Systems Engineer", "Telecom Specialist", "RF Engineer"],
      recruiters: ["Qualcomm", "Cisco", "Intel", "TCS", "Ericsson"]
    },
    markdownFile: "msajce_ece.md"
  },
  { 
    name: "Electrical & Electronics Engineering", shortName: "EEE", slug: "electrical-and-electronics-engineering", 
    intake: 30, govtQuota: 15, managementQuota: 15, level: "Undergraduate", department: "Electrical", 
    description: "Master power generation, control systems, and electrical machinery.", 
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
    details: { 
      activities: {
        chapters: [
          { title: "IEEE Power & Energy Society", description: "Seminars on smart grids, renewable energy, and power system optimization." },
          { title: "Institution of Engineers (IEI)", description: "Workshops on electrical safety, industrial automation, and energy auditing." }
        ],
        placements: [
          { title: "Power Plant Visits", description: "Industrial tours to substations, wind farms, solar parks, and heavy electrical manufacturing units." },
          { title: "Core Placements", description: "Recruitment by leading energy, automation, and electrical infrastructure companies like L&T, Siemens, and ABB." }
        ],
        highlights: [
          { title: "01 EEE Symposium", description: "Technical fest featuring line-follower robots, circuit design, and renewable energy project expos." },
          { title: "02 EV Hackathons", description: "Challenges focused on battery management systems, motor drives, and electric vehicle charging infrastructure." },
          { title: "03 Smart Grid Masterclasses", description: "Expert talks on microgrids, SCADA systems, and modern power electronics." },
          { title: "04 Energy Auditing Camps", description: "Hands-on campus energy audits and efficiency improvement projects." }
        ]
      },
      keyDrivers: [
        { title: "1. Electric Vehicles (EV) & Battery Tech" },
        { title: "2. Renewable Energy & Smart Grids" },
        { title: "3. Industrial Automation & Robotics" },
        { title: "4. Power Electronics in Consumer Tech" },
        { title: "5. Energy Storage Systems" }
      ],      ...defaultDetails, 
      heroQuote: "Push power systems forward through innovative hardware design and renewable energy integration.",
      careers: ["Power Systems Engineer", "Control Systems Engineer", "Renewable Energy Consultant", "Electrical Designer"],
      recruiters: ["Siemens", "ABB", "L&T", "BHEL", "GE"]
    },
    markdownFile: "msajce_eee.md"
  },
  { 
    name: "Mechanical Engineering", shortName: "Mechanical Engineering", slug: "mechanical-engineering", 
    intake: 30, govtQuota: 15, managementQuota: 15, level: "Undergraduate", department: "Mechanical", 
    description: "Design and manufacture machinery, robotics, and thermal systems.", 
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1200&auto=format&fit=crop",
    details: { 
      activities: {
        chapters: [
          { title: "SAE Collegiate Club", description: "Society of Automotive Engineers engaging students in BAJA, Supra, and Go-Kart design competitions." },
          { title: "ISHRAE & ASME Chapters", description: "Workshops on HVAC systems, thermal engineering, and mechanical design standards." }
        ],
        placements: [
          { title: "Manufacturing Immersion", description: "Industrial visits to automotive assembly lines, CNC machining centers, and thermal power plants." },
          { title: "Core Placements", description: "Recruitment by top automotive, heavy machinery, and manufacturing firms like Ashok Leyland, Mahindra, and Bosch." }
        ],
        highlights: [
          { title: "01 Auto Fest & Symposium", description: "Annual mechanical fest featuring CAD modeling, RC car racing, and engine assembly challenges." },
          { title: "02 SAE BAJA Workshops", description: "Intensive training on vehicle dynamics, chassis design, and off-road vehicle fabrication." },
          { title: "03 Industry 4.0 Masterclasses", description: "Guest lectures on digital twins, 3D printing, and smart manufacturing processes." },
          { title: "04 CNC & Robotics Expos", description: "Showcasing student-built robotic arms, automated machining projects, and rapid prototyping." }
        ]
      },
      keyDrivers: [
        { title: "1. Industry 4.0 & Smart Manufacturing" },
        { title: "2. Robotics and Automation" },
        { title: "3. 3D Printing & Additive Manufacturing" },
        { title: "4. Aerospace & Defense Technologies" },
        { title: "5. Advanced Materials & Composites" }
      ],      ...defaultDetails, 
      heroQuote: "Push mechanical systems forward through research-led design that responds to the physical world.",
      careers: ["Design Engineer", "Manufacturing Engineer", "Thermal Engineer", "Automotive Engineer"],
      recruiters: ["Ashok Leyland", "Tata Motors", "Mahindra", "L&T", "Bosch"]
    },
    markdownFile: "msajce_mech.md"
  },
  { 
    name: "Information Technology", shortName: "IT", slug: "information-technology", 
    intake: 60, govtQuota: 30, managementQuota: 30, level: "Undergraduate", department: "Computing", 
    description: "Focus on network administration, database management, and enterprise software.", 
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    details: { 
      activities: {
        chapters: [
          { title: "Computer Society of India (CSI)", description: "Organizes technical webinars, coding challenges, and professional certification drives." },
          { title: "ACM & IEEE Chapters", description: "Connects students with global research communities, conferences, and technical papers." },
          { title: "GDSC & Open Source Club", description: "Collaborative student teams developing real-world software solutions." }
        ],
        placements: [
          { title: "Corporate Immersion", description: "Regular technical immersion tours to TCS Siruseri, Infosys MWC, Zoho, and CTS OMR." },
          { title: "Placement Success", description: "Over 40+ premier tech organizations recruit from MSAJCE CSE every year." }
        ],
        highlights: [
          { title: "01 Technical Symposium", description: "Annual inter-collegiate technical festival featuring paper presentations, project expos, and code debug contests." },
          { title: "02 Hackathons & Coding Sprints", description: "Intensive innovation hackathons focused on AI, sustainability, smart cities, and IoT product prototypes." },
          { title: "03 Industry Masterclasses", description: "Weekly technical lectures, hands-on tool bootcamps, and career orientation workshops delivered by corporate practitioners." },
          { title: "04 Industrial Visits & Exposure", description: "Regular guided tours of leading industrial units, IT data centers, and advanced technology hubs." }
        ]
      },
      keyDrivers: [
        { title: "1. Digital Transformation Across Industries" },
        { title: "2. Rise of Artificial Intelligence and Machine Learning" },
        { title: "3. Cyber Security & Zero Trust Architecture" },
        { title: "4. Cloud Computing and DevOps" },
        { title: "5. Big Data and Data Science" },
        { title: "6. Blockchain and Web3" }
      ],      ...defaultDetails,
      careers: ["IT Consultant", "Database Administrator", "Cloud Solutions Architect", "Systems Analyst"],
      recruiters: ["TCS", "Infosys", "Accenture", "Capgemini", "IBM"]
    },
    markdownFile: "msajce_it.md"
  },
  { 
    name: "Artificial Intelligence & Data Science", shortName: "AI & DS", slug: "artificial-intelligence-and-data-science", 
    intake: 60, govtQuota: 30, managementQuota: 30, level: "Undergraduate", department: "Computing", 
    description: "Dive into machine learning, neural networks, and big data analytics.", 
    image: "https://images.unsplash.com/photo-1518932945647-7a3c96943e28?q=80&w=1200&auto=format&fit=crop",
    details: { 
      activities: {
        chapters: [
          { title: "Computer Society of India (CSI)", description: "Organizes technical webinars, coding challenges, and professional certification drives." },
          { title: "ACM & IEEE Chapters", description: "Connects students with global research communities, conferences, and technical papers." },
          { title: "GDSC & Open Source Club", description: "Collaborative student teams developing real-world software solutions." }
        ],
        placements: [
          { title: "Corporate Immersion", description: "Regular technical immersion tours to TCS Siruseri, Infosys MWC, Zoho, and CTS OMR." },
          { title: "Placement Success", description: "Over 40+ premier tech organizations recruit from MSAJCE CSE every year." }
        ],
        highlights: [
          { title: "01 Technical Symposium", description: "Annual inter-collegiate technical festival featuring paper presentations, project expos, and code debug contests." },
          { title: "02 Hackathons & Coding Sprints", description: "Intensive innovation hackathons focused on AI, sustainability, smart cities, and IoT product prototypes." },
          { title: "03 Industry Masterclasses", description: "Weekly technical lectures, hands-on tool bootcamps, and career orientation workshops delivered by corporate practitioners." },
          { title: "04 Industrial Visits & Exposure", description: "Regular guided tours of leading industrial units, IT data centers, and advanced technology hubs." }
        ]
      },
      keyDrivers: [
        { title: "1. Digital Transformation Across Industries" },
        { title: "2. Rise of Artificial Intelligence and Machine Learning" },
        { title: "3. Cyber Security & Zero Trust Architecture" },
        { title: "4. Cloud Computing and DevOps" },
        { title: "5. Big Data and Data Science" },
        { title: "6. Blockchain and Web3" }
      ],      ...defaultDetails,
      careers: ["Data Scientist", "Machine Learning Engineer", "AI Research Analyst", "Business Intelligence Analyst"],
      recruiters: ["MuSigma", "Fractal Analytics", "Amazon", "Google", "TCS"]
    },
    markdownFile: "msajce_aids.md"
  },
  { 
    name: "Computer Science & Business Systems", shortName: "CSBS", slug: "computer-science-and-business-systems", 
    intake: 30, govtQuota: 15, managementQuota: 15, level: "Undergraduate", department: "Computing", 
    description: "Bridge the gap between technology solutions and business strategy.", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    details: { 
      activities: {
        chapters: [
          { title: "Computer Society of India (CSI)", description: "Organizes technical webinars, coding challenges, and professional certification drives." },
          { title: "ACM & IEEE Chapters", description: "Connects students with global research communities, conferences, and technical papers." },
          { title: "GDSC & Open Source Club", description: "Collaborative student teams developing real-world software solutions." }
        ],
        placements: [
          { title: "Corporate Immersion", description: "Regular technical immersion tours to TCS Siruseri, Infosys MWC, Zoho, and CTS OMR." },
          { title: "Placement Success", description: "Over 40+ premier tech organizations recruit from MSAJCE CSE every year." }
        ],
        highlights: [
          { title: "01 Technical Symposium", description: "Annual inter-collegiate technical festival featuring paper presentations, project expos, and code debug contests." },
          { title: "02 Hackathons & Coding Sprints", description: "Intensive innovation hackathons focused on AI, sustainability, smart cities, and IoT product prototypes." },
          { title: "03 Industry Masterclasses", description: "Weekly technical lectures, hands-on tool bootcamps, and career orientation workshops delivered by corporate practitioners." },
          { title: "04 Industrial Visits & Exposure", description: "Regular guided tours of leading industrial units, IT data centers, and advanced technology hubs." }
        ]
      },
      keyDrivers: [
        { title: "1. Digital Transformation Across Industries" },
        { title: "2. Rise of Artificial Intelligence and Machine Learning" },
        { title: "3. Cyber Security & Zero Trust Architecture" },
        { title: "4. Cloud Computing and DevOps" },
        { title: "5. Big Data and Data Science" },
        { title: "6. Blockchain and Web3" }
      ],      ...defaultDetails,
      careers: ["Business Analyst", "Tech Consultant", "Product Manager", "Enterprise Architect"],
      recruiters: ["TCS", "Deloitte", "EY", "PwC", "KPMG"]
    },
    markdownFile: "msajce_csbs.md"
  },
  { 
    name: "Computer Science & Engineering (Cyber Security)", slug: "computer-science-and-engineering-cyber-security", 
    intake: 30, govtQuota: 15, managementQuota: 15, level: "Undergraduate", department: "Computing", 
    description: "Protect digital infrastructure through advanced cryptography and network security.", 
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    details: { 
      activities: {
        chapters: [
          { title: "Computer Society of India (CSI)", description: "Organizes technical webinars, coding challenges, and professional certification drives." },
          { title: "ACM & IEEE Chapters", description: "Connects students with global research communities, conferences, and technical papers." },
          { title: "GDSC & Open Source Club", description: "Collaborative student teams developing real-world software solutions." }
        ],
        placements: [
          { title: "Corporate Immersion", description: "Regular technical immersion tours to TCS Siruseri, Infosys MWC, Zoho, and CTS OMR." },
          { title: "Placement Success", description: "Over 40+ premier tech organizations recruit from MSAJCE CSE every year." }
        ],
        highlights: [
          { title: "01 Technical Symposium", description: "Annual inter-collegiate technical festival featuring paper presentations, project expos, and code debug contests." },
          { title: "02 Hackathons & Coding Sprints", description: "Intensive innovation hackathons focused on AI, sustainability, smart cities, and IoT product prototypes." },
          { title: "03 Industry Masterclasses", description: "Weekly technical lectures, hands-on tool bootcamps, and career orientation workshops delivered by corporate practitioners." },
          { title: "04 Industrial Visits & Exposure", description: "Regular guided tours of leading industrial units, IT data centers, and advanced technology hubs." }
        ]
      },
      keyDrivers: [
        { title: "1. Digital Transformation Across Industries" },
        { title: "2. Rise of Artificial Intelligence and Machine Learning" },
        { title: "3. Cyber Security & Zero Trust Architecture" },
        { title: "4. Cloud Computing and DevOps" },
        { title: "5. Big Data and Data Science" },
        { title: "6. Blockchain and Web3" }
      ],      ...defaultDetails,
      careers: ["Security Analyst", "Ethical Hacker", "Security Architect", "Cryptographer"],
      recruiters: ["Palo Alto Networks", "Cisco", "TCS", "IBM Security", "Symantec"]
    },
    markdownFile: "msajce_cyber.md"
  },
  { 
    name: "Artificial Intelligence & Machine Learning", shortName: "AI & ML", slug: "artificial-intelligence-and-machine-learning", 
    intake: 60, govtQuota: 30, managementQuota: 30, level: "Undergraduate", department: "Computing", 
    description: "Specialized focus on deep learning architectures and AI model training.", 
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1200&auto=format&fit=crop",
    details: { 
      activities: {
        chapters: [
          { title: "Computer Society of India (CSI)", description: "Organizes technical webinars, coding challenges, and professional certification drives." },
          { title: "ACM & IEEE Chapters", description: "Connects students with global research communities, conferences, and technical papers." },
          { title: "GDSC & Open Source Club", description: "Collaborative student teams developing real-world software solutions." }
        ],
        placements: [
          { title: "Corporate Immersion", description: "Regular technical immersion tours to TCS Siruseri, Infosys MWC, Zoho, and CTS OMR." },
          { title: "Placement Success", description: "Over 40+ premier tech organizations recruit from MSAJCE CSE every year." }
        ],
        highlights: [
          { title: "01 Technical Symposium", description: "Annual inter-collegiate technical festival featuring paper presentations, project expos, and code debug contests." },
          { title: "02 Hackathons & Coding Sprints", description: "Intensive innovation hackathons focused on AI, sustainability, smart cities, and IoT product prototypes." },
          { title: "03 Industry Masterclasses", description: "Weekly technical lectures, hands-on tool bootcamps, and career orientation workshops delivered by corporate practitioners." },
          { title: "04 Industrial Visits & Exposure", description: "Regular guided tours of leading industrial units, IT data centers, and advanced technology hubs." }
        ]
      },
      keyDrivers: [
        { title: "1. Digital Transformation Across Industries" },
        { title: "2. Rise of Artificial Intelligence and Machine Learning" },
        { title: "3. Cyber Security & Zero Trust Architecture" },
        { title: "4. Cloud Computing and DevOps" },
        { title: "5. Big Data and Data Science" },
        { title: "6. Blockchain and Web3" }
      ],      ...defaultDetails,
      careers: ["ML Engineer", "NLP Scientist", "AI Product Manager", "Computer Vision Engineer"],
      recruiters: ["Amazon", "Google", "Meta", "TCS", "Wipro"]
    },
    markdownFile: "msajce_aiml.md"
  },
  { 
    name: "Electronics Engg w/s in VLSI Design & Technology", shortName: "ECE (VLSI Design)", slug: "electronics-engg-vlsi-design", 
    intake: 30, govtQuota: 15, managementQuota: 15, level: "Undergraduate", department: "Electronics", 
    description: "Design complex integrated circuits and microprocessors.", 
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
    details: { 
      activities: {
        chapters: [
          { title: "IETE Student Forum", description: "Institution of Electronics and Telecommunication Engineers organizing circuit design and IoT workshops." },
          { title: "IEEE Communications Society", description: "Engaging students in next-generation networking, 5G architectures, and wireless seminars." },
          { title: "Robotics & Embedded Club", description: "Hands-on projects with microcontrollers, Arduino, Raspberry Pi, and autonomous systems." }
        ],
        placements: [
          { title: "Industry Immersion", description: "Visits to electronics manufacturing hubs, semiconductor fabrication labs, and telecom switching centers." },
          { title: "Core Tech Placements", description: "Recruitment by top semiconductor, networking, and telecom giants like Cisco, Qualcomm, and Intel." }
        ],
        highlights: [
          { title: "01 ECE Symposium", description: "National-level fest featuring circuit debugging, robotics races, and technical paper presentations." },
          { title: "02 VLSI Design Sprints", description: "Intensive training on FPGA, Verilog, and ASIC design methodologies." },
          { title: "03 Telecom Masterclasses", description: "Guest lectures by RF engineers and telecom architects on 5G deployment and optical networks." },
          { title: "04 Automation Expos", description: "Showcasing student-built autonomous drones, smart home systems, and industrial IoT solutions." }
        ]
      },
      keyDrivers: [
        { title: "1. 5G/6G Technology and Networking" },
        { title: "2. Internet of Things (IoT) Expansion" },
        { title: "3. VLSI & Semiconductor Manufacturing" },
        { title: "4. Embedded Systems in Automotive (EV/AV)" },
        { title: "5. Satellite & Optical Communications" }
      ],      ...defaultDetails,
      careers: ["VLSI Design Engineer", "ASIC Verification Engineer", "Physical Design Engineer"],
      recruiters: ["Intel", "AMD", "Qualcomm", "NVIDIA", "Broadcom"]
    },
    markdownFile: "msajce_ece_vlsi.md"
  },
  { 
    name: "ECE w/s in Advanced Communication Technology", shortName: "ECE (Adv. Comm.)", slug: "ece-advanced-communication", 
    intake: 30, govtQuota: 15, managementQuota: 15, level: "Undergraduate", department: "Electronics", 
    description: "Explore next-generation communication protocols and wireless systems.", 
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
    details: { 
      activities: {
        chapters: [
          { title: "IETE Student Forum", description: "Institution of Electronics and Telecommunication Engineers organizing circuit design and IoT workshops." },
          { title: "IEEE Communications Society", description: "Engaging students in next-generation networking, 5G architectures, and wireless seminars." },
          { title: "Robotics & Embedded Club", description: "Hands-on projects with microcontrollers, Arduino, Raspberry Pi, and autonomous systems." }
        ],
        placements: [
          { title: "Industry Immersion", description: "Visits to electronics manufacturing hubs, semiconductor fabrication labs, and telecom switching centers." },
          { title: "Core Tech Placements", description: "Recruitment by top semiconductor, networking, and telecom giants like Cisco, Qualcomm, and Intel." }
        ],
        highlights: [
          { title: "01 ECE Symposium", description: "National-level fest featuring circuit debugging, robotics races, and technical paper presentations." },
          { title: "02 VLSI Design Sprints", description: "Intensive training on FPGA, Verilog, and ASIC design methodologies." },
          { title: "03 Telecom Masterclasses", description: "Guest lectures by RF engineers and telecom architects on 5G deployment and optical networks." },
          { title: "04 Automation Expos", description: "Showcasing student-built autonomous drones, smart home systems, and industrial IoT solutions." }
        ]
      },
      keyDrivers: [
        { title: "1. 5G/6G Technology and Networking" },
        { title: "2. Internet of Things (IoT) Expansion" },
        { title: "3. VLSI & Semiconductor Manufacturing" },
        { title: "4. Embedded Systems in Automotive (EV/AV)" },
        { title: "5. Satellite & Optical Communications" }
      ],      ...defaultDetails,
      careers: ["5G/6G Network Engineer", "Telecom Protocol Developer", "RF Planner"],
      recruiters: ["Nokia", "Ericsson", "Cisco", "Jio", "Airtel"]
    },
    markdownFile: "msajce_ece-act.md"
  },
  { 
    name: "Bachelor of Architecture", shortName: "B.Arch", slug: "bachelor-of-architecture", 
    intake: 40, govtQuota: 20, managementQuota: 20, level: "Undergraduate", department: "Architecture", 
    description: "Explore architectural design, theory, and building technologies.", 
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    details: { 
      activities: {
        chapters: [
          { title: "NASA India Chapter", description: "National Association of Students of Architecture participating in design trophies and conventions." }
        ],
        placements: [
          { title: "Studio Immersion", description: "Visits to leading architectural firms, heritage sites, and modern construction marvels." },
          { title: "Design Placements", description: "Recruitment by top urban planning and architectural design firms." }
        ],
        highlights: [
          { title: "01 ArchFest", description: "Annual design exhibition showcasing models, portfolios, and conceptual art." },
          { title: "02 Sustainable Design Sprints", description: "Workshops on climate-responsive architecture and eco-friendly materials." },
          { title: "03 Master Architect Talks", description: "Guest lectures by renowned architects and urban planners." },
          { title: "04 Heritage Walks", description: "Guided tours analyzing historical architecture and conservation techniques." }
        ]
      },
      keyDrivers: [
        { title: "1. Sustainable & Green Architecture" },
        { title: "2. Urban Planning for Megacities" },
        { title: "3. Parametric Design & Generative AI" },
        { title: "4. Heritage Conservation" }
      ],      ...defaultDetails,
      careers: ["Junior Architect", "Urban Designer", "Interior Architect", "Landscape Architect"],
      recruiters: ["L&T ECC", "Hafeez Contractor", "RSP", "Gensler", "Sobha"]
    }
  },
  { 
    name: "Bachelor of Design", shortName: "B.Des", slug: "bachelor-of-design", 
    intake: 30, govtQuota: 15, managementQuota: 15, level: "Undergraduate", department: "Design", 
    description: "Develop creative solutions for visual communication and product design.", 
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
    details: { 
      activities: {
        chapters: [
          { title: "NASA India Chapter", description: "National Association of Students of Architecture participating in design trophies and conventions." }
        ],
        placements: [
          { title: "Studio Immersion", description: "Visits to leading architectural firms, heritage sites, and modern construction marvels." },
          { title: "Design Placements", description: "Recruitment by top urban planning and architectural design firms." }
        ],
        highlights: [
          { title: "01 ArchFest", description: "Annual design exhibition showcasing models, portfolios, and conceptual art." },
          { title: "02 Sustainable Design Sprints", description: "Workshops on climate-responsive architecture and eco-friendly materials." },
          { title: "03 Master Architect Talks", description: "Guest lectures by renowned architects and urban planners." },
          { title: "04 Heritage Walks", description: "Guided tours analyzing historical architecture and conservation techniques." }
        ]
      },
      keyDrivers: [
        { title: "1. Sustainable & Green Architecture" },
        { title: "2. Urban Planning for Megacities" },
        { title: "3. Parametric Design & Generative AI" },
        { title: "4. Heritage Conservation" }
      ],      ...defaultDetails,
      careers: ["UX/UI Designer", "Product Designer", "Graphic Designer", "Industrial Designer"],
      recruiters: ["Zoho", "Freshworks", "Designit", "TCS Interactive"]
    }
  },
  
  // PG
  { 
    name: "Computer Science & Engineering", shortName: "CSE", slug: "pg-computer-science-and-engineering", 
    intake: 9, govtQuota: 3, managementQuota: 6, level: "Postgraduate", department: "Computing", 
    description: "Advanced research in distributed systems, AI, and advanced algorithms.", 
    image: "https://images.unsplash.com/photo-1487958449943-2429e5be8624?q=80&w=1200&auto=format&fit=crop",
    details: { 
      ...defaultDetails,
      careers: ["Research Scientist", "Advanced Systems Architect", "Lead Developer", "AI Specialist"],
      recruiters: ["Amazon", "Microsoft", "Google", "IBM Research"]
    },
    markdownFile: "msajce_cse.md"
  },
  { 
    name: "Structural Engineering", shortName: "Structural Engineering", slug: "pg-structural-engineering", 
    intake: 18, govtQuota: 6, managementQuota: 12, level: "Postgraduate", department: "Civil", 
    description: "Advanced structural analysis, earthquake engineering, and material science.", 
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1200&auto=format&fit=crop",
    details: { 
      ...defaultDetails,
      careers: ["Senior Structural Engineer", "Project Director", "Seismic Design Specialist"],
      recruiters: ["L&T Construction", "Arup", "Stantec", "WSP"]
    },
    markdownFile: "msajce_civil.md"
  },
  { 
    name: "Master of Architecture", shortName: "M.Arch", slug: "pg-master-of-architecture", 
    intake: 15, govtQuota: 7, managementQuota: 8, level: "Postgraduate", department: "Architecture", 
    description: "Advanced architectural design, urban planning, and sustainability.", 
    image: "https://images.unsplash.com/photo-1517581177682-a085bc7fcb10?q=80&w=1200&auto=format&fit=crop",
    details: { 
      ...defaultDetails,
      careers: ["Principal Architect", "Urban Planning Consultant", "Sustainable Design Lead"],
      recruiters: ["Hafeez Contractor", "Foster + Partners", "SOM", "RSP"]
    }
  },

  // Ph.D
  { 
    name: "Mechanical Engineering", shortName: "Mechanical Engineering", slug: "phd-mechanical-engineering", 
    intake: "Varies", govtQuota: "-", managementQuota: "-", level: "Research (Ph.D)", department: "Mechanical", 
    description: "Doctoral research in advanced materials, thermal engineering, and robotics.", 
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    details: { 
      ...defaultDetails,
      careers: ["University Professor", "R&D Head", "Principal Research Scientist"],
      recruiters: ["DRDO", "ISRO", "BARC", "Mahindra Research Valley"]
    },
    markdownFile: "msajce_mech.md"
  },
];

