export type Course = {
  name: string;
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
    name: "Civil Engineering", slug: "civil-engineering", 
    intake: 30, govtQuota: 15, managementQuota: 15, level: "Undergraduate", department: "Civil", 
    description: "Plan and construct sustainable infrastructure, buildings, and transportation systems.", 
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop",
    details: { 
      ...defaultDetails, 
      heroQuote: "Push civil infrastructure forward through research-led design that responds to society and the world around you.",
      careers: ["Structural Engineer", "Site Engineer", "Construction Manager", "Urban Planner"],
      recruiters: ["L&T Construction", "Tata Projects", "Sobha", "Godrej Properties", "Afcons"]
    },
    markdownFile: "msajce_civil.md"
  },
  { 
    name: "Computer Science & Engineering", slug: "computer-science-and-engineering", 
    intake: 60, govtQuota: 30, managementQuota: 30, level: "Undergraduate", department: "Computing", 
    description: "Learn the fundamentals of software development, algorithms, and system design.", 
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
    details: { 
      ...defaultDetails, 
      heroQuote: "Push software engineering forward through research-led design that responds to culture and technology.",
      careers: ["Software Engineer", "Full Stack Developer", "Systems Architect", "Cloud Engineer"],
      recruiters: ["Amazon", "TCS", "Cognizant", "Infosys", "Zoho", "Wipro"]
    },
    markdownFile: "msajce_cse.md"
  },
  { 
    name: "Electronics & Communication Engineering", slug: "electronics-and-communication-engineering", 
    intake: 60, govtQuota: 30, managementQuota: 30, level: "Undergraduate", department: "Electronics", 
    description: "Study signal processing, embedded systems, and telecommunication networks.", 
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
    details: { 
      ...defaultDetails, 
      heroQuote: "Push telecommunications forward through hardware design that connects the world.",
      careers: ["Network Engineer", "Embedded Systems Engineer", "Telecom Specialist", "RF Engineer"],
      recruiters: ["Qualcomm", "Cisco", "Intel", "TCS", "Ericsson"]
    },
    markdownFile: "msajce_ece.md"
  },
  { 
    name: "Electrical & Electronics Engineering", slug: "electrical-and-electronics-engineering", 
    intake: 30, govtQuota: 15, managementQuota: 15, level: "Undergraduate", department: "Electrical", 
    description: "Master power generation, control systems, and electrical machinery.", 
    image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=600&auto=format&fit=crop",
    details: { 
      ...defaultDetails, 
      heroQuote: "Push power systems forward through innovative hardware design and renewable energy integration.",
      careers: ["Power Systems Engineer", "Control Systems Engineer", "Renewable Energy Consultant", "Electrical Designer"],
      recruiters: ["Siemens", "ABB", "L&T", "BHEL", "GE"]
    },
    markdownFile: "msajce_eee.md"
  },
  { 
    name: "Mechanical Engineering", slug: "mechanical-engineering", 
    intake: 30, govtQuota: 15, managementQuota: 15, level: "Undergraduate", department: "Mechanical", 
    description: "Design and manufacture machinery, robotics, and thermal systems.", 
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop",
    details: { 
      ...defaultDetails, 
      heroQuote: "Push mechanical systems forward through research-led design that responds to the physical world.",
      careers: ["Design Engineer", "Manufacturing Engineer", "Thermal Engineer", "Automotive Engineer"],
      recruiters: ["Ashok Leyland", "Tata Motors", "Mahindra", "L&T", "Bosch"]
    },
    markdownFile: "msajce_mech.md"
  },
  { 
    name: "Information Technology", slug: "information-technology", 
    intake: 60, govtQuota: 30, managementQuota: 30, level: "Undergraduate", department: "Computing", 
    description: "Focus on network administration, database management, and enterprise software.", 
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
    details: { 
      ...defaultDetails,
      careers: ["IT Consultant", "Database Administrator", "Cloud Solutions Architect", "Systems Analyst"],
      recruiters: ["TCS", "Infosys", "Accenture", "Capgemini", "IBM"]
    },
    markdownFile: "msajce_it.md"
  },
  { 
    name: "Artificial Intelligence & Data Science", slug: "artificial-intelligence-and-data-science", 
    intake: 60, govtQuota: 30, managementQuota: 30, level: "Undergraduate", department: "Computing", 
    description: "Dive into machine learning, neural networks, and big data analytics.", 
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=600&auto=format&fit=crop",
    details: { 
      ...defaultDetails,
      careers: ["Data Scientist", "Machine Learning Engineer", "AI Research Analyst", "Business Intelligence Analyst"],
      recruiters: ["MuSigma", "Fractal Analytics", "Amazon", "Google", "TCS"]
    },
    markdownFile: "msajce_aids.md"
  },
  { 
    name: "Computer Science & Business Systems", slug: "computer-science-and-business-systems", 
    intake: 30, govtQuota: 15, managementQuota: 15, level: "Undergraduate", department: "Computing", 
    description: "Bridge the gap between technology solutions and business strategy.", 
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
    details: { 
      ...defaultDetails,
      careers: ["Business Analyst", "Tech Consultant", "Product Manager", "Enterprise Architect"],
      recruiters: ["TCS", "Deloitte", "EY", "PwC", "KPMG"]
    },
    markdownFile: "msajce_csbs.md"
  },
  { 
    name: "Computer Science & Engineering (Cyber Security)", slug: "computer-science-and-engineering-cyber-security", 
    intake: 30, govtQuota: 15, managementQuota: 15, level: "Undergraduate", department: "Computing", 
    description: "Protect digital infrastructure through advanced cryptography and network security.", 
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=600&auto=format&fit=crop",
    details: { 
      ...defaultDetails,
      careers: ["Security Analyst", "Ethical Hacker", "Security Architect", "Cryptographer"],
      recruiters: ["Palo Alto Networks", "Cisco", "TCS", "IBM Security", "Symantec"]
    },
    markdownFile: "msajce_cyber.md"
  },
  { 
    name: "Artificial Intelligence & Machine Learning", slug: "artificial-intelligence-and-machine-learning", 
    intake: 60, govtQuota: 30, managementQuota: 30, level: "Undergraduate", department: "Computing", 
    description: "Specialized focus on deep learning architectures and AI model training.", 
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=600&auto=format&fit=crop",
    details: { 
      ...defaultDetails,
      careers: ["ML Engineer", "NLP Scientist", "AI Product Manager", "Computer Vision Engineer"],
      recruiters: ["Amazon", "Google", "Meta", "TCS", "Wipro"]
    },
    markdownFile: "msajce_aiml.md"
  },
  { 
    name: "Electronics Engg w/s in VLSI Design & Technology", slug: "electronics-engg-vlsi-design", 
    intake: 30, govtQuota: 15, managementQuota: 15, level: "Undergraduate", department: "Electronics", 
    description: "Design complex integrated circuits and microprocessors.", 
    image: "https://images.unsplash.com/photo-1593640498182-31c70c8268f5?q=80&w=600&auto=format&fit=crop",
    details: { 
      ...defaultDetails,
      careers: ["VLSI Design Engineer", "ASIC Verification Engineer", "Physical Design Engineer"],
      recruiters: ["Intel", "AMD", "Qualcomm", "NVIDIA", "Broadcom"]
    },
    markdownFile: "msajce_ece_vlsi.md"
  },
  { 
    name: "ECE w/s in Advanced Communication Technology", slug: "ece-advanced-communication", 
    intake: 30, govtQuota: 15, managementQuota: 15, level: "Undergraduate", department: "Electronics", 
    description: "Explore next-generation communication protocols and wireless systems.", 
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    details: { 
      ...defaultDetails,
      careers: ["5G/6G Network Engineer", "Telecom Protocol Developer", "RF Planner"],
      recruiters: ["Nokia", "Ericsson", "Cisco", "Jio", "Airtel"]
    },
    markdownFile: "msajce_ece-act.md"
  },
  { 
    name: "Bachelor of Architecture", slug: "bachelor-of-architecture", 
    intake: 40, govtQuota: 20, managementQuota: 20, level: "Undergraduate", department: "Architecture", 
    description: "Explore architectural design, theory, and building technologies.", 
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    details: { 
      ...defaultDetails,
      careers: ["Junior Architect", "Urban Designer", "Interior Architect", "Landscape Architect"],
      recruiters: ["L&T ECC", "Hafeez Contractor", "RSP", "Gensler", "Sobha"]
    }
  },
  { 
    name: "Bachelor of Design", slug: "bachelor-of-design", 
    intake: 30, govtQuota: 15, managementQuota: 15, level: "Undergraduate", department: "Design", 
    description: "Develop creative solutions for visual communication and product design.", 
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop",
    details: { 
      ...defaultDetails,
      careers: ["UX/UI Designer", "Product Designer", "Graphic Designer", "Industrial Designer"],
      recruiters: ["Zoho", "Freshworks", "Designit", "TCS Interactive"]
    }
  },
  
  // PG
  { 
    name: "Computer Science & Engineering", slug: "pg-computer-science-and-engineering", 
    intake: 9, govtQuota: 3, managementQuota: 6, level: "Postgraduate", department: "Computing", 
    description: "Advanced research in distributed systems, AI, and advanced algorithms.", 
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
    details: { 
      ...defaultDetails,
      careers: ["Research Scientist", "Advanced Systems Architect", "Lead Developer", "AI Specialist"],
      recruiters: ["Amazon", "Microsoft", "Google", "IBM Research"]
    },
    markdownFile: "msajce_cse.md"
  },
  { 
    name: "Structural Engineering", slug: "pg-structural-engineering", 
    intake: 18, govtQuota: 6, managementQuota: 12, level: "Postgraduate", department: "Civil", 
    description: "Advanced structural analysis, earthquake engineering, and material science.", 
    image: "https://images.unsplash.com/photo-1541888087405-d5fb0c92f440?q=80&w=600&auto=format&fit=crop",
    details: { 
      ...defaultDetails,
      careers: ["Senior Structural Engineer", "Project Director", "Seismic Design Specialist"],
      recruiters: ["L&T Construction", "Arup", "Stantec", "WSP"]
    },
    markdownFile: "msajce_civil.md"
  },
  { 
    name: "Master of Architecture", slug: "pg-master-of-architecture", 
    intake: 15, govtQuota: 7, managementQuota: 8, level: "Postgraduate", department: "Architecture", 
    description: "Advanced architectural design, urban planning, and sustainability.", 
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    details: { 
      ...defaultDetails,
      careers: ["Principal Architect", "Urban Planning Consultant", "Sustainable Design Lead"],
      recruiters: ["Hafeez Contractor", "Foster + Partners", "SOM", "RSP"]
    }
  },

  // Ph.D
  { 
    name: "Mechanical Engineering", slug: "phd-mechanical-engineering", 
    intake: "Varies", govtQuota: "-", managementQuota: "-", level: "Research (Ph.D)", department: "Mechanical", 
    description: "Doctoral research in advanced materials, thermal engineering, and robotics.", 
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop",
    details: { 
      ...defaultDetails,
      careers: ["University Professor", "R&D Head", "Principal Research Scientist"],
      recruiters: ["DRDO", "ISRO", "BARC", "Mahindra Research Valley"]
    },
    markdownFile: "msajce_mech.md"
  },
];
