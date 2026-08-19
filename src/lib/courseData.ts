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

// Default template content derived from user prompt
const defaultDetails: CourseDetails = {
  ucasCode: "W23M",
  startDate: "September 2026",
  courseLength: "Three years full-time or four years full-time with Diploma in Professional Studies",
  heroQuote: "Push engineering forward through research-led design that responds to culture, identity and the world around you.",
  overview: `BA Fashion Design comprises five pathways: Womenswear, Menswear, Knit, Print, and Communication. We encourage collaboration at every stage, and throughout the course you will work on projects with the other courses and with students of the BA Fashion Communication course. As a program we encourage students to break down all societal barriers and perceptions when describing gender and identity.

The pathway has a fearless approach that supports and challenges students to develop the unexpected through in-depth research, a broad range of ideas development, and reflecting on motivation and outcomes. Students work on a broad range of creative projects, with pathway tutors, specialist staff, expert technicians and industry practitioners.

Our course is globally renowned. We have an excellent staff team of highly experienced practitioners and researchers with international profiles who come from diverse backgrounds and remain connected to their industry. Students are innovators, critical thinkers, and trailblazers and thrive within a lively and dynamic environment.

Learning is our core purpose and our research, industry and external relationships enrich our approach. We are committed to reflecting and influencing the sustainable transformation of the industry. Social, racial and climate justice are our core values and we believe in a fairer world for all.`,
  pathwayStructure: "On this course, you can choose to study one of several pathways tailored to your specific engineering and design interests, focusing on both foundational skills and advanced technical applications.",
  professionalsAndSponsors: "The course provides opportunities for collaboration with external professionals and sponsors. Previously, these have included major tech and engineering firms, government bodies, and international research institutes.",
  industryNetworks: "You can take advantage of the course's excellent relationship with the international community. This will allow you to experience placements drawn from a wide and distinguished range of sources.",
  alumniSuccess: "Our graduates work across a wide spectrum of careers. They have gone on to establish their own companies or to work as leading engineers, freelancers, and consultants globally.",
  courseUnits: `An emphasis on professionalism, innovation and creativity on this pathway will allow you to develop and realise your ideas. You will be introduced to various technical skills which will inform and support your creativity. These will include research methods, design processes, technical implementations, and presentation skills.

Stage 1
In Stage 1, all students arrive with different skills and experiences, which adds richness to the course and enhances peer learning and collaboration. This first year aims to improve your understanding and approaches to learning and will provide a base level of skills to enable you to be successful in your pathway.

Stage 2
In stage 2, you are encouraged to consolidate the skills needed to develop and articulate your own practice. You will further enhance your knowledge of industry and collaborative working with a focus on your future employability. During this year, you will benefit from the opportunity to interact with, and gain feedback from external guest speakers and live projects.

Stage 3
Stage 3 gives you an increased level of autonomy. Within a supportive community, you will benefit from regular tutorials and guidance. Through exposure to different processes, systems and materials, you define your professional identity during this final year of study.`,
  optionalDiploma: `Industry Diploma in Professional Studies (DIPS)
This optional diploma can be taken between years 2 and 3. With support from your tutors, you will undertake an industry placement for a minimum of 100 days/20 weeks. As well as developing industry skills, you will gain an additional qualification upon successful completion.

Diploma in Creative Computing
Between years 2 and 3, you can undertake the year-long Diploma in Creative Computing. This will develop your skills in creative computing alongside your degree.`,
  careers: [
    "Systems Engineer",
    "Product Designer",
    "Research Scientist",
    "Consultant",
    "Project Manager"
  ],
  recruiters: [
    "Amazon",
    "TCS",
    "Cognizant",
    "Infosys",
    "Wipro",
    "HCL"
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
