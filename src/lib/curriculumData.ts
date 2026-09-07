export type CurriculumSummary = {
  totalCredits: string;
  duration: string;
  cbcsStatus: string;
  regulationName: string;
  corePillars: { title: string; description: string }[];
  semesterPhases: {
    phase: string;
    semesters: string;
    focus: string;
    keySubjects: string[];
  }[];
  labSprints: { title: string; tools: string; description: string }[];
  electiveTracks: { track: string; courses: string[] }[];
};

export const DEPARTMENT_CURRICULUM_SUMMARIES: Record<string, CurriculumSummary> = {
  "computer-science-and-engineering": {
    totalCredits: "165 Credits",
    duration: "4 Years (8 Semesters)",
    cbcsStatus: "Choice Based Credit System (CBCS)",
    regulationName: "R-2024 Autonomous (Anna University Standards)",
    corePillars: [
      { title: "Algorithms & System Design", description: "Design & Analysis of Algorithms, Operating Systems, Computer Architecture, and Compiler Design." },
      { title: "Software Engineering & Full Stack", description: "Modern Object-Oriented Analysis, Microservices, Web Engineering, and Agile Methodologies." },
      { title: "Data Engineering & AI", description: "Database Management Systems, Big Data Analytics, Machine Learning, and Intelligent Agents." },
      { title: "Networks & Cyber Security", description: "Data Communications, Computer Networks, Applied Cryptography, and Cloud Infrastructure." }
    ],
    semesterPhases: [
      {
        phase: "Phase 1: Foundation Engineering",
        semesters: "Semesters I & II",
        focus: "Basic Sciences, Calculus, Linear Algebra, Problem Solving with C & Python Programming.",
        keySubjects: ["Matrices & Calculus", "Engineering Physics", "Problem Solving using Python", "C Programming & Data Structures"]
      },
      {
        phase: "Phase 2: Core Computing & Systems",
        semesters: "Semesters III & IV",
        focus: "Hardware & Software Fundamentals, Operating System Kernels, Database Design & Network Protocols.",
        keySubjects: ["Data Structures", "Computer Organization & Architecture", "Operating Systems", "Database Management Systems", "Object-Oriented Programming"]
      },
      {
        phase: "Phase 3: Advanced Specialization & Electives",
        semesters: "Semesters V & VI",
        focus: "Algorithm Design, Web Development, Machine Learning, Professional Electives & Industry Internships.",
        keySubjects: ["Design & Analysis of Algorithms", "Full Stack Web Technologies", "Artificial Intelligence & ML", "Compiler Design", "Professional Electives I & II"]
      },
      {
        phase: "Phase 4: Capstone & Industry Readiness",
        semesters: "Semesters VII & VIII",
        focus: "Distributed Cloud Systems, Cyber Security, Open Interdisciplinary Electives, and Capstone Major Project.",
        keySubjects: ["Cloud Computing Architecture", "Cryptography & Network Security", "Open Electives", "Capstone Major Project Phase I & II"]
      }
    ],
    labSprints: [
      { title: "C & Advanced Data Structures Lab", tools: "GCC / G++, Linux Ubuntu, Valgrind", description: "Implementation of complex tree, graph, heap, and dynamic memory allocation data structures." },
      { title: "Full Stack Web Development Sprint", tools: "React, Node.js, Express, MongoDB, Postman", description: "Building production-grade web applications with modern frontend & REST API backends." },
      { title: "DBMS & Cloud Analytics Studio", tools: "MySQL, PostgreSQL, AWS S3 / RDS, Docker", description: "Designing normalized relational schemas, query tuning, and cloud data warehousing." },
      { title: "AI & Neural Networks Sandbox", tools: "Python, TensorFlow, PyTorch, Jupyter", description: "Model training, supervised classification, deep neural nets, and model deployment." }
    ],
    electiveTracks: [
      { track: "AI & Data Engineering", courses: ["Deep Learning Systems", "Natural Language Processing", "Big Data Analytics", "Computer Vision"] },
      { track: "Cloud & DevOps Infrastructure", courses: ["Cloud Computing Architecture", "DevOps & CI/CD Pipelines", "Distributed Systems", "Virtualization"] },
      { track: "Cyber Security & Cryptography", courses: ["Ethical Hacking", "Network Security Protocols", "Digital Forensics", "Blockchain Technologies"] }
    ]
  },

  "artificial-intelligence-and-data-science": {
    totalCredits: "165 Credits",
    duration: "4 Years (8 Semesters)",
    cbcsStatus: "Choice Based Credit System (CBCS)",
    regulationName: "R-2024 Autonomous (Anna University Standards)",
    corePillars: [
      { title: "Machine Learning & Deep Learning", description: "Supervised & Unsupervised Learning, Convolutional & Recurrent Neural Nets, Transformer Models." },
      { title: "Big Data & Predictive Analytics", description: "Distributed Data Pipelines, Hadoop/Spark Architecture, Data Warehousing, & Business Intelligence." },
      { title: "Natural Language & Vision", description: "NLP Models, LLM Prompt Engineering, Computer Vision, and Generative Artificial Intelligence." },
      { title: "Applied Mathematics & Statistics", description: "Probability, Random Processes, Linear Algebra, Optimization Techniques, & Mathematical Statistics." }
    ],
    semesterPhases: [
      {
        phase: "Phase 1: Mathematical & Computing Foundations",
        semesters: "Semesters I & II",
        focus: "Calculus, Linear Algebra, Python Programming for Data Science, and Foundation Physics.",
        keySubjects: ["Calculus & Linear Algebra", "Engineering Physics", "Python Programming for Data Science", "Data Structures with Python"]
      },
      {
        phase: "Phase 2: Core Data Systems & ML Basics",
        semesters: "Semesters III & IV",
        focus: "Probability & Statistics, Operating Systems, Database Systems, and Machine Learning Fundamentals.",
        keySubjects: ["Probability & Statistics", "Data Mining & Data Warehousing", "Database Management Systems", "Machine Learning Foundations"]
      },
      {
        phase: "Phase 3: Deep Learning & Big Data",
        semesters: "Semesters V & VI",
        focus: "Neural Networks, Big Data Frameworks, Natural Language Processing, and Professional Electives.",
        keySubjects: ["Deep Learning Architectures", "Big Data Analytics (Spark/Hadoop)", "Natural Language Processing", "Business Intelligence", "Professional Electives I & II"]
      },
      {
        phase: "Phase 4: Generative AI & Capstone Research",
        semesters: "Semesters VII & VIII",
        focus: "Computer Vision, Generative AI, MLOps, Open Electives, and Capstone Research Project.",
        keySubjects: ["Computer Vision & Pattern Recognition", "Generative AI & LLMs", "MLOps & Model Deployment", "Capstone Project Phase I & II"]
      }
    ],
    labSprints: [
      { title: "Data Analytics & Visualization Lab", tools: "Python, Pandas, Seaborn, Tableau, Power BI", description: "Statistical exploratory data analysis, interactive dashboard creation, and insight reporting." },
      { title: "Machine Learning Studio", tools: "Scikit-Learn, XGBoost, MLflow", description: "Feature engineering, model selection, hyperparameter tuning, and cross-validation." },
      { title: "Deep Learning & Vision Lab", tools: "PyTorch, TensorFlow, OpenCV, CUDA", description: "Object detection, image segmentation, CNN architectures, and GPU acceleration." },
      { title: "Big Data & MLOps Pipeline Sprint", tools: "Apache Spark, Kafka, Docker, FastAPI", description: "Streaming data processing and automated machine learning model pipeline deployment." }
    ],
    electiveTracks: [
      { track: "Applied AI & Computer Vision", courses: ["Medical Image Processing", "Autonomous Vehicle Perception", "Video Analytics", "AR/VR Integration"] },
      { track: "Big Data & Business Intelligence", courses: ["Real-time Data Streaming", "Data Engineering with Spark", "Financial Data Analytics", "Marketing Analytics"] },
      { track: "Cognitive Systems & LLMs", courses: ["Large Language Models", "Knowledge Graphs & Ontologies", "Reinforcement Learning", "AI Ethics & Fairness"] }
    ]
  },

  "cse-aiml": {
    totalCredits: "165 Credits",
    duration: "4 Years (8 Semesters)",
    cbcsStatus: "Choice Based Credit System (CBCS)",
    regulationName: "R-2024 Autonomous (Anna University Standards)",
    corePillars: [
      { title: "Neural Networks & Artificial Intelligence", description: "Deep Feedforward Networks, Attention Mechanisms, Knowledge Representation, and AI Agents." },
      { title: "Reinforcement & Autonomous Learning", description: "Markov Decision Processes, Q-Learning, Policy Gradients, and Autonomous Systems." },
      { title: "Algorithmic Foundations of AI", description: "Optimization Theory, Stochastic Processes, Graph Algorithms, and Matrix Computations." },
      { title: "Edge AI & Embedded Intelligence", description: "Model Compression, Quantization, TinyML, and Real-Time Autonomous Robotics." }
    ],
    semesterPhases: [
      {
        phase: "Phase 1: Computational Mathematics & Programming",
        semesters: "Semesters I & II",
        focus: "Discrete Mathematics, Linear Algebra, C & Python Programming, and Logic Design.",
        keySubjects: ["Discrete Mathematics", "Linear Algebra & Optimization", "Python for AI", "Data Structures & Algorithms"]
      },
      {
        phase: "Phase 2: Core Machine Learning & Intelligence",
        semesters: "Semesters III & IV",
        focus: "Artificial Intelligence Concepts, Probability Theory, OS, Database Systems, and Pattern Recognition.",
        keySubjects: ["Artificial Intelligence & Knowledge Representation", "Probability & Random Processes", "Pattern Recognition", "Database Systems"]
      },
      {
        phase: "Phase 3: Advanced Deep Learning & Perception",
        semesters: "Semesters V & VI",
        focus: "Convolutional & Recurrent Neural Networks, Reinforcement Learning, Speech & Natural Language.",
        keySubjects: ["Deep Learning & Neural Networks", "Reinforcement Learning Agents", "Speech Recognition & NLP", "Professional Electives I & II"]
      },
      {
        phase: "Phase 4: Autonomous Systems & Capstone",
        semesters: "Semesters VII & VIII",
        focus: "Edge AI, Robotic Perception, AI Ethics, Open Electives, and Capstone AI Major Project.",
        keySubjects: ["Edge AI & Embedded Intelligence", "Robotic Perception & Navigation", "Ethical AI", "Capstone Project Phase I & II"]
      }
    ],
    labSprints: [
      { title: "AI Algorithm Development Lab", tools: "Python, Jupyter, NetworkX", description: "Search algorithms, heuristic planning, constraint satisfaction, and game theory engines." },
      { title: "Deep Neural Network Studio", tools: "PyTorch, CUDA, TensorRT", description: "Custom neural network architecture design, gradient optimization, and GPU profiling." },
      { title: "Reinforcement Learning Workbench", tools: "Gymnasium, Ray Rllib, Stable-Baselines3", description: "Environment modeling, agent training, policy optimization, and simulation." },
      { title: "Edge AI Prototyping Lab", tools: "Jetson Nano, Raspberry Pi, ONNX, TFLite", description: "Quantized model deployment on low-power edge hardware and microcontrollers." }
    ],
    electiveTracks: [
      { track: "Deep Learning & Vision", courses: ["3D Computer Vision", "Generative Adversarial Networks (GANs)", "Autonomous Driving Perception", "Biometric Security"] },
      { track: "Autonomous Agents & Robotics", courses: ["Robot Kinematics & Control", "Multi-Agent Systems", "Swarm Intelligence", "Unmanned Aerial Vehicles (UAVs)"] },
      { track: "Natural Language Processing", courses: ["Transformer Architectures", "Neural Machine Translation", "Speech Synthesis", "Conversational AI Agents"] }
    ]
  },

  "cse-cyber-security": {
    totalCredits: "165 Credits",
    duration: "4 Years (8 Semesters)",
    cbcsStatus: "Choice Based Credit System (CBCS)",
    regulationName: "R-2024 Autonomous (Anna University Standards)",
    corePillars: [
      { title: "Network & Systems Security", description: "Firewall Architectures, Intrusion Detection/Prevention, Zero Trust, and Wireless Security." },
      { title: "Cryptography & Public Key Infrastructure", description: "Symmetric/Asymmetric Ciphers, Post-Quantum Cryptography, PKI, and Hashing Mechanisms." },
      { title: "Offensive Security & Pen Testing", description: "Vulnerability Assessment, Web/Mobile Security Testing, Exploitation, and Privilege Escalation." },
      { title: "Digital Forensics & SOC Operations", description: "Incident Response, Malware Analysis, Threat Intelligence, and SIEM Log Operations." }
    ],
    semesterPhases: [
      {
        phase: "Phase 1: Foundation Computing & Hardware",
        semesters: "Semesters I & II",
        focus: "Mathematics, Operating Systems Basics, C/Python Programming, and Digital Logic.",
        keySubjects: ["Calculus & Discrete Math", "Fundamentals of Programming", "Digital Logic & Computer Design", "Data Structures"]
      },
      {
        phase: "Phase 2: Core Networks & Security Principles",
        semesters: "Semesters III & IV",
        focus: "Computer Networks, Operating System Kernels, Database Security, and Applied Cryptography.",
        keySubjects: ["Computer Communication Networks", "Unix/Linux System Administration", "Applied Cryptography", "Database Security & Audit"]
      },
      {
        phase: "Phase 3: Offensive & Defensive Cyber Operations",
        semesters: "Semesters V & VI",
        focus: "Ethical Hacking, Penetration Testing, Malware Analysis, Web App Security, and Electives.",
        keySubjects: ["Ethical Hacking & Pen Testing", "Web Application Security", "Reverse Engineering & Malware Analysis", "Professional Electives I & II"]
      },
      {
        phase: "Phase 4: Cloud Security, Compliance & Capstone",
        semesters: "Semesters VII & VIII",
        focus: "Cloud/Container Security, Digital Forensics, Cyber Law, Open Electives, and Cyber Security Capstone.",
        keySubjects: ["Cloud & Infrastructure Security", "Digital Forensics & Incident Response", "Cyber Law & IT Audit", "Capstone Project Phase I & II"]
      }
    ],
    labSprints: [
      { title: "Defensive Cryptography & PKI Lab", tools: "OpenSSL, Wireshark, GnuPG", description: "Certificate authority setup, secure socket layer analysis, and cryptographic implementation." },
      { title: "Penetration Testing & Red Teaming Sprint", tools: "Kali Linux, Metasploit, Burp Suite, Nmap", description: "Vulnerability scanning, web application security testing, and privilege escalation." },
      { title: "SOC Operations & Threat Hunting Lab", tools: "Splunk, ELK Stack, Snort, Suricata", description: "Security Information and Event Management (SIEM) log parsing, rule crafting, and alert analysis." },
      { title: "Malware Analysis & Forensics Lab", tools: "Ghidra, IDA Pro, Volatility, Autopsy", description: "Static/dynamic binary reverse engineering, memory dump analysis, and artifact extraction." }
    ],
    electiveTracks: [
      { track: "Offensive Cyber Operations", courses: ["Advanced Penetration Testing", "Exploit Development", "Mobile App Penetration Testing", "Red Team Tactics"] },
      { track: "Defensive & Cloud Security", courses: ["Cloud Native Security", "Container & Kubernetes Hardening", "Zero Trust Architecture", "ICS/SCADA Security"] },
      { track: "Forensics & Governance", courses: ["Digital Mobile Forensics", "Threat Intelligence", "ISO 27001 & Compliance", "Cyber Warfare & Law"] }
    ]
  },

  "information-technology": {
    totalCredits: "165 Credits",
    duration: "4 Years (8 Semesters)",
    cbcsStatus: "Choice Based Credit System (CBCS)",
    regulationName: "R-2024 Autonomous (Anna University Standards)",
    corePillars: [
      { title: "Web & Enterprise Systems", description: "Full Stack Software Development, Enterprise Application Integration, Microservices, and REST APIs." },
      { title: "Cloud Computing & DevOps", description: "Virtualization, Public/Private Cloud Platforms, Containerization, and CI/CD Automation." },
      { title: "Data Systems & Warehousing", description: "Relational/NoSQL Databases, Data Engineering, ETL Pipelines, and Information Retrieval." },
      { title: "Network & Mobile Engineering", description: "Wireless Communication, Network Administration, Cross-Platform Mobile Apps, and IoT." }
    ],
    semesterPhases: [
      {
        phase: "Phase 1: Fundamental Sciences & Computing",
        semesters: "Semesters I & II",
        focus: "Engineering Mathematics, Physics, Programming in C & Python, Digital Principles.",
        keySubjects: ["Matrices & Calculus", "Engineering Physics", "Python Programming", "C Programming & Data Structures"]
      },
      {
        phase: "Phase 2: Core IT Architecture",
        semesters: "Semesters III & IV",
        focus: "Data Structures, Database Management Systems, Operating Systems, Computer Networks.",
        keySubjects: ["Data Structures & Algorithms", "Database Management Systems", "Operating Systems Architecture", "Computer Communication Networks"]
      },
      {
        phase: "Phase 3: Web, Mobile & Cloud Engineering",
        semesters: "Semesters V & VI",
        focus: "Web Technologies, Mobile Application Engineering, Software Testing, Professional Electives.",
        keySubjects: ["Web Technologies & Frameworks", "Mobile Application Development", "Object Oriented Software Engineering", "Professional Electives I & II"]
      },
      {
        phase: "Phase 4: Enterprise Solutions & Capstone",
        semesters: "Semesters VII & VIII",
        focus: "Cloud Computing, Enterprise Systems Security, Open Electives, and Capstone Major Project.",
        keySubjects: ["Cloud Infrastructure & DevOps", "Information Security & Cryptography", "Open Electives", "Capstone Major Project Phase I & II"]
      }
    ],
    labSprints: [
      { title: "Full Stack Web Engineering Lab", tools: "React, Node.js, Express, PostgreSQL, Postman", description: "Building responsive frontend client UIs connected to secure microservice REST APIs." },
      { title: "Mobile Application Studio", tools: "Flutter, Android Studio, Firebase", description: "Developing cross-platform mobile apps with cloud database synchronization." },
      { title: "Cloud Infrastructure & DevOps Lab", tools: "AWS, Docker, Kubernetes, Jenkins, Terraform", description: "Containerizing web services, orchestrating clusters, and automating CI/CD pipelines." },
      { title: "Enterprise Database & Security Lab", tools: "Oracle DB, MongoDB, Wireshark, Burp Suite", description: "Database optimization, SQL injection prevention, and enterprise security auditing." }
    ],
    electiveTracks: [
      { track: "Web & Mobile Technologies", courses: ["Progressive Web Apps", "Cross-Platform Mobile Dev", "User Experience (UX) Design", "Microservices Architecture"] },
      { track: "Cloud & DevOps Systems", courses: ["Cloud Native Computing", "Site Reliability Engineering", "Infrastructure as Code", "Virtualization Technologies"] },
      { track: "Data Science & BI", courses: ["Information Retrieval", "Data Analytics & Warehousing", "Social Network Analysis", "Business Intelligence"] }
    ]
  },

  "computer-science-and-business-systems": {
    totalCredits: "165 Credits",
    duration: "4 Years (8 Semesters)",
    cbcsStatus: "Choice Based Credit System (CBCS)",
    regulationName: "R-2024 Autonomous (Anna University Standards)",
    corePillars: [
      { title: "Computer Science & Software Foundations", description: "Data Structures, Algorithms, Systems Software, Operating Systems, and Cloud Platforms." },
      { title: "Business Strategy & Financial Analytics", description: "Financial Management, Corporate Finance, Business Strategy, Economics, and Accounting." },
      { title: "Enterprise Computing & ERP", description: "Enterprise Architecture, CRM Systems, Supply Chain Management, and IT Governance." },
      { title: "Design Thinking & Innovation", description: "Human-Centered Design, Agile Product Management, Computational Thinking, and Business Analytics." }
    ],
    semesterPhases: [
      {
        phase: "Phase 1: CS & Business Fundamentals",
        semesters: "Semesters I & II",
        focus: "Discrete Mathematics, Computer Programming, Fundamentals of Economics, Financial Accounting.",
        keySubjects: ["Discrete Mathematics", "Fundamentals of Computer Science", "Economics for Engineers", "Financial Accounting Principles"]
      },
      {
        phase: "Phase 2: Core Algorithms & Business Processes",
        semesters: "Semesters III & IV",
        focus: "Data Structures, Database Systems, Business Communication, Marketing, and Operations Research.",
        keySubjects: ["Data Structures & Algorithms", "Database Systems", "Business Strategy & Operations", "Marketing Research & Analytics"]
      },
      {
        phase: "Phase 3: Enterprise Systems & Analytics",
        semesters: "Semesters V & VI",
        focus: "Formal Languages, Enterprise Architecture, Business Analytics, Computational Statistics, Electives.",
        keySubjects: ["Formal Language & Automata", "Enterprise Systems (ERP/CRM)", "Computational Statistics", "Professional Electives I & II"]
      },
      {
        phase: "Phase 4: Innovation & Capstone Business Project",
        semesters: "Semesters VII & VIII",
        focus: "IT Governance, Financial Risk Analytics, Design Thinking, Open Electives, and Capstone Industry Project.",
        keySubjects: ["IT Infrastructure & Governance", "Financial Analytics & Risk", "Design Thinking Studio", "Capstone Major Project Phase I & II"]
      }
    ],
    labSprints: [
      { title: "Enterprise ERP & Business Analytics Lab", tools: "SAP, Tableau, R / Python, Power BI", description: "Business data analysis, forecasting, financial reporting, and ERP workflow simulation." },
      { title: "Software Systems & Agile Studio", tools: "Jira, Git, Java Spring Boot, MySQL", description: "Agile product development sprint, back-end API integration, and team management." },
      { title: "Design Thinking & Innovation Sprint", tools: "Figma, Miro, User Testing Frameworks", description: "Identifying customer pain points, rapid prototyping, and business model canvas validation." },
      { title: "Fintech & Smart Contract Lab", tools: "Python, Ethereum / Solidity, Hyperledger", description: "Building decentralized finance applications and automated smart business contracts." }
    ],
    electiveTracks: [
      { track: "Business Analytics & Data Science", courses: ["Customer Relationship Analytics", "Supply Chain Analytics", "Predictive Business Modeling", "Econometrics"] },
      { track: "Enterprise Cloud Systems", courses: ["Enterprise IT Architecture", "Cloud Operations & Service Desk", "IT Audit & Governance", "Digital Transformation"] },
      { track: "Fintech & Innovation", courses: ["Financial Technology Systems", "Product Management & Strategy", "Blockchain for Business", "Venture Creation & Scaling"] }
    ]
  },

  "electronics-and-communication-engineering": {
    totalCredits: "165 Credits",
    duration: "4 Years (8 Semesters)",
    cbcsStatus: "Choice Based Credit System (CBCS)",
    regulationName: "R-2024 Autonomous (Anna University Standards)",
    corePillars: [
      { title: "Semiconductors & VLSI Design", description: "CMOS Digital & Analog IC Design, ASIC Verification, FPGA Synthesis, and HDL Prototyping." },
      { title: "Embedded Systems & IoT", description: "Microcontrollers, ARM Architectures, Real-Time Operating Systems (RTOS), and Smart Sensor Networks." },
      { title: "Communications & Wireless Networks", description: "Analog/Digital Communication, RF Engineering, 5G Wireless Protocols, and Satellite Links." },
      { title: "Signals, DSP & Image Processing", description: "Continuous/Discrete Signal Analysis, Digital Signal Processors, Filter Design, and Computer Vision." }
    ],
    semesterPhases: [
      {
        phase: "Phase 1: Basic Sciences & Circuit Theory",
        semesters: "Semesters I & II",
        focus: "Calculus, Physics, Circuit Analysis, Electronics Engineering, and C Programming.",
        keySubjects: ["Engineering Mathematics", "Physics for Electronics", "Circuit Theory & Network Analysis", "Basic C Programming"]
      },
      {
        phase: "Phase 2: Core Electronic Devices & Signals",
        semesters: "Semesters III & IV",
        focus: "Electronic Circuits, Digital Logic Design, Signals & Systems, Electromagnetic Fields.",
        keySubjects: ["Electronic Devices & Circuits", "Digital Electronics & HDL", "Signals & Systems", "Electromagnetic Fields & Waves"]
      },
      {
        phase: "Phase 3: Microprocessors, VLSI & Communication",
        semesters: "Semesters V & VI",
        focus: "Microprocessors & Microcontrollers, Digital Signal Processing, Analog/Digital Communication, VLSI.",
        keySubjects: ["Microprocessors & Microcontrollers (8051/ARM)", "Digital Signal Processing", "Communication Systems Theory", "VLSI Design"]
      },
      {
        phase: "Phase 4: Wireless Networks & Capstone Project",
        semesters: "Semesters VII & VIII",
        focus: "Wireless Communication, Optical Networks, Microwave Engineering, Open Electives, Capstone Project.",
        keySubjects: ["Wireless & Cellular Communications", "Optical & Microwave Engineering", "Embedded Systems Design", "Capstone Major Project Phase I & II"]
      }
    ],
    labSprints: [
      { title: "VLSI Design & Simulation Lab", tools: "Cadence EDA, Xilinx Vivado, Verilog HDL", description: "CMOS circuit schematic entry, layout design, timing analysis, and FPGA synthesis." },
      { title: "Embedded Systems & IoT Workbench", tools: "Keil uVision, STM32, Arduino, ESP32", description: "Embedded C programming, inter-integrated circuit (I2C/SPI) protocols, and IoT sensors." },
      { title: "DSP & Signal Processing Lab", tools: "MATLAB, Simulink, TMS320C6713 DSP Boards", description: "FIR/IIR filter design, Fast Fourier Transform (FFT) implementation, and audio processing." },
      { title: "RF & Communication Studio", tools: "Spectrum Analyzers, HFSS Antenna Simulator, SDR", description: "Modulation technique analysis, antenna radiation pattern testing, and RF link setup." }
    ],
    electiveTracks: [
      { track: "VLSI & Microelectronics", courses: ["Low Power VLSI Design", "Analog IC Design", "ASIC Verification with SystemVerilog", "MEMS & Sensors"] },
      { track: "Embedded & Autonomous Systems", courses: ["Real Time Operating Systems (RTOS)", "Automotive Embedded Systems", "Robotics & Automation", "IoT System Architecture"] },
      { track: "Wireless & Telecom Networks", courses: ["5G/6G Cellular Communication", "Satellite Communication Systems", "Cognitive Radio Networks", "Radar & Navigational Aids"] }
    ]
  },

  "ece-advanced-communication": {
    totalCredits: "165 Credits",
    duration: "4 Years (8 Semesters)",
    cbcsStatus: "Choice Based Credit System (CBCS)",
    regulationName: "R-2024 Autonomous (Anna University Standards)",
    corePillars: [
      { title: "5G & Next-Gen Cellular Protocols", description: "5G NR Architecture, Beamforming, Massive MIMO, mmWave Technologies, and Open RAN." },
      { title: "Software Defined Radio & RF Networks", description: "SDR Signal Processing, Cognitive Radio, Dynamic Spectrum Access, and RF Front-End Design." },
      { title: "Optical & Photonic Communications", description: "Dense Wavelength Division Multiplexing (DWDM), Photonic ICs, Fiber Networks, and Free-Space Optics." },
      { title: "Satellite & Space Systems", description: "LEO Satellite Constellations, Transponder Design, Radar Imaging, and Deep Space Links." }
    ],
    semesterPhases: [
      {
        phase: "Phase 1: Basic Sciences & Circuit Physics",
        semesters: "Semesters I & II",
        focus: "Calculus, Electromagnetism, Circuit Theory, and Foundation Programming.",
        keySubjects: ["Engineering Mathematics", "Electromagnetic Physics", "Circuit Theory", "Programming for Communication"]
      },
      {
        phase: "Phase 2: Communication Theory & Signals",
        semesters: "Semesters III & IV",
        focus: "Signals & Systems, Analog & Digital Modulation, Probability & Random Signals, Waveguides.",
        keySubjects: ["Signals & Systems", "Digital Modulation Techniques", "Probability & Random Processes", "Transmission Lines & Waveguides"]
      },
      {
        phase: "Phase 3: Advanced Radio & Optical Systems",
        semesters: "Semesters V & VI",
        focus: "5G Cellular Protocols, Software Defined Radio, Optical Communications, Microwave Devices.",
        keySubjects: ["5G/6G Wireless Architecture", "Software Defined Radio Systems", "Optical Communication & DWDM", "Microwave & RF Design"]
      },
      {
        phase: "Phase 4: Space Networks & Capstone Project",
        semesters: "Semesters VII & VIII",
        focus: "Satellite Networks, Antenna Arrays, Cognitive Spectrum Systems, Open Electives, Capstone.",
        keySubjects: ["Satellite & Space Communications", "Smart Antenna Array Systems", "Open Electives", "Capstone Major Project Phase I & II"]
      }
    ],
    labSprints: [
      { title: "Software Defined Radio (SDR) Studio", tools: "USRP Hardware, GNU Radio, MATLAB SDR Plugin", description: "Building custom radio transmitters/receivers, spectrum monitoring, and QAM modulation." },
      { title: "5G Protocol & Network Simulation Lab", tools: "NS-3, MATLAB 5G Toolbox, OpenAirInterface", description: "Simulating 5G gNodeB channels, handover protocols, and latency profiling." },
      { title: "Microwave & RF Design Workbench", tools: "Ansys HFSS, Keysight ADS, Vector Network Analyzer", description: "Designing patch antennas, microwave filters, power amplifiers, and S-parameter testing." },
      { title: "Optical Communication & Fiber Lab", tools: "OptiSystem, OTDR Fiber Testers, Laser Modules", description: "Attenutation measurement, dispersion compensation, and DWDM link modeling." }
    ],
    electiveTracks: [
      { track: "Next-Gen Mobile Communication", courses: ["5G/6G Air Interface Standards", "Massive MIMO Systems", "Open RAN Technologies", "Millimeter Wave Networks"] },
      { track: "Space & Optical Communications", courses: ["LEO Satellite Networks", "Free Space Optical Links", "Deep Space Telemetry", "Photonic Integrated Circuits"] },
      { track: "RF & Antenna Technology", courses: ["Smart Antenna Arrays", "RF Microelectronics Design", "Radar Systems & SAR", "Electromagnetic Compatibility (EMC)"] }
    ]
  },

  "electrical-and-electronics-engineering": {
    totalCredits: "165 Credits",
    duration: "4 Years (8 Semesters)",
    cbcsStatus: "Choice Based Credit System (CBCS)",
    regulationName: "R-2024 Autonomous (Anna University Standards)",
    corePillars: [
      { title: "Power Systems & Smart Grids", description: "Generation, Transmission & Distribution, Smart Grid Automation, SCADA, and Protection Relays." },
      { title: "Power Electronics & Drives", description: "Inverters, Converters, Choppers, Switched Mode Power Supplies (SMPS), and Variable Frequency Drives." },
      { title: "Electric Vehicles & Renewable Energy", description: "EV Powertrains, Battery Management Systems (BMS), Solar PV Systems, and Wind Turbines." },
      { title: "Control Systems & Industrial Automation", description: "Feedback Control Theory, PLCs, DCS Systems, Robotics, and Microcontroller Automation." }
    ],
    semesterPhases: [
      {
        phase: "Phase 1: Basic Sciences & Circuit Theory",
        semesters: "Semesters I & II",
        focus: "Calculus, Physics, Electric Circuit Analysis, Engineering Graphics, C Programming.",
        keySubjects: ["Engineering Mathematics", "Physics for Electrical Engineers", "Electric Circuit Analysis", "Engineering Graphics"]
      },
      {
        phase: "Phase 2: Electrical Machines & Field Theory",
        semesters: "Semesters III & IV",
        focus: "DC Machines, Transformers, AC Machines, Electromagnetic Theory, Analog Electronics.",
        keySubjects: ["Electrical Machines I & II", "Electromagnetic Theory", "Analog & Digital Circuits", "Generation & Transmission Systems"]
      },
      {
        phase: "Phase 3: Power Electronics & Control Systems",
        semesters: "Semesters V & VI",
        focus: "Power Electronics, Control Systems, Microcontrollers, Renewable Energy, Electives.",
        keySubjects: ["Power Electronics", "Control Systems Engineering", "Microcontrollers & Embedded Systems", "Renewable Energy Systems"]
      },
      {
        phase: "Phase 4: EV Technology & Smart Grid Capstone",
        semesters: "Semesters VII & VIII",
        focus: "Electric Vehicles, High Voltage Engineering, Smart Grid Protection, Open Electives, Capstone.",
        keySubjects: ["Electric Vehicle Technology", "Power System Protection & Switchgear", "Smart Grid Technology", "Capstone Major Project Phase I & II"]
      }
    ],
    labSprints: [
      { title: "Electrical Machines & Testing Lab", tools: "AC/DC Motor Test Rigs, Transformers, Alternators", description: "Speed-torque characterization, efficiency loading tests, and phase synchronization." },
      { title: "Power Electronics & Converter Studio", tools: "MATLAB Simulink, dSPACE, Power Converters", description: "Design and firing angle control of DC-DC buck/boost converters and 3-phase inverters." },
      { title: "EV Drivetrain & BMS Testing Lab", tools: "Battery Cyclers, CAN Bus Sniffers, EV Motors", description: "Testing battery charge/discharge cycles, cell balancing, and motor controller drives." },
      { title: "PLC & Industrial Automation Workbench", tools: "Siemens S7-1200 PLC, SCADA Software, HMI", description: "Programming ladder logic diagrams, sensor interfacing, and industrial process control." }
    ],
    electiveTracks: [
      { track: "Electric Vehicles & Smart Mobility", courses: ["EV Battery Technology & BMS", "Electric Motors & Drives for EVs", "Charging Infrastructure & Standards", "Autonomous Vehicle Power"] },
      { track: "Renewable Energy & Energy Storage", courses: ["Solar Photovoltaic Technology", "Wind Energy Systems", "Energy Storage Technologies", "Microgrids & Distributed Generation"] },
      { track: "Industrial Control & Automation", courses: ["Programmable Logic Controllers (PLCs)", "Industrial Robotics", "Process Control Instrumentation", "SCADA & Industrial IoT"] }
    ]
  },

  "mechanical-engineering": {
    totalCredits: "165 Credits",
    duration: "4 Years (8 Semesters)",
    cbcsStatus: "Choice Based Credit System (CBCS)",
    regulationName: "R-2024 Autonomous (Anna University Standards)",
    corePillars: [
      { title: "Thermal Engineering & Fluid Dynamics", description: "Thermodynamics, IC Engines, Refrigeration & HVAC, Heat & Mass Transfer, Hydro Turbines." },
      { title: "CAD/CAM/CAE & Product Design", description: "3D Parametric Modeling, Finite Element Analysis (FEA), Computational Fluid Dynamics (CFD)." },
      { title: "Manufacturing Technology & Materials", description: "Metal Cutting, Casting, Welding, CNC Machining, Metallurgy, Composite Materials." },
      { title: "Robotics & Industry 4.0", description: "Industrial Robots, Mechatronics, Automated Guided Vehicles (AGVs), Additive Manufacturing." }
    ],
    semesterPhases: [
      {
        phase: "Phase 1: Science Foundations & Engineering Graphics",
        semesters: "Semesters I & II",
        focus: "Engineering Mathematics, Applied Physics, Chemistry, Drafting, Workshop Practice.",
        keySubjects: ["Engineering Mathematics", "Applied Physics", "Engineering Graphics & Drafting", "Basic Workshop Practice"]
      },
      {
        phase: "Phase 2: Mechanics & Thermal Fundamentals",
        semesters: "Semesters III & IV",
        focus: "Engineering Mechanics, Strength of Materials, Thermodynamics, Manufacturing Processes.",
        keySubjects: ["Engineering Mechanics", "Strength of Materials", "Engineering Thermodynamics", "Manufacturing Technology I"]
      },
      {
        phase: "Phase 3: Machine Design, Heat Transfer & CAD",
        semesters: "Semesters V & VI",
        focus: "Design of Machine Elements, Heat Transfer, Fluid Mechanics, CAD/CAM, Electives.",
        keySubjects: ["Design of Machine Elements", "Heat & Mass Transfer", "Fluid Mechanics & Machinery", "CAD/CAM Studio", "Professional Electives I & II"]
      },
      {
        phase: "Phase 4: Automation & Capstone Project",
        semesters: "Semesters VII & VIII",
        focus: "Mechatronics, Robotics, Power Plant Engineering, Open Electives, Capstone Project.",
        keySubjects: ["Mechatronics Systems", "Robotics & Industrial Automation", "Power Plant Engineering", "Capstone Major Project Phase I & II"]
      }
    ],
    labSprints: [
      { title: "CAD/CAM/CAE Solid Modeling Studio", tools: "AutoCAD, SolidWorks, CATIA, Ansys Workbench", description: "3D parametric machine component design, stress analysis, and finite element mesh generation." },
      { title: "Thermal & Internal Combustion Engine Lab", tools: "Multi-cylinder Petrol/Diesel Test Rigs, Calorimeters", description: "Thermal efficiency testing, fuel performance analysis, and emission profiling." },
      { title: "CNC Machining & Rapid Prototyping Lab", tools: "CNC Lathe, CNC Mill, 3D Printers (FDM/SLA)", description: "G-code/M-code programming, automated tool path generation, and additive manufacturing." },
      { title: "Mechatronics & Hydraulics Workbench", tools: "Pneumatic/Hydraulic Trainers, PLC, Servos", description: "Designing electro-pneumatic automation circuits and robotic actuator controls." }
    ],
    electiveTracks: [
      { track: "Automated Manufacturing & Industry 4.0", courses: ["Flexible Manufacturing Systems", "Additive Manufacturing (3D Printing)", "Computer Integrated Manufacturing", "Lean Manufacturing"] },
      { track: "Aerospace & Automotive Engineering", courses: ["Automotive Chassis & Transmission", "Aerodynamics & Flight Mechanics", "Electric & Hybrid Vehicle Technology", "Gas Turbines & Jet Propulsion"] },
      { track: "Advanced Materials & Design", courses: ["Composite Materials", "Finite Element Analysis (FEA)", "Design for Manufacturing & Assembly (DFMA)", "Tribology"] }
    ]
  },

  "civil-engineering": {
    totalCredits: "165 Credits",
    duration: "4 Years (8 Semesters)",
    cbcsStatus: "Choice Based Credit System (CBCS)",
    regulationName: "R-2024 Autonomous (Anna University Standards)",
    corePillars: [
      { title: "Structural Engineering & Concrete Tech", description: "Analysis of RCC & Steel Structures, Matrix Analysis, Concrete Technology, Pre-stressed Elements." },
      { title: "Geotechnical & Foundation Engineering", description: "Soil Mechanics, Shallow/Deep Foundations, Slope Stability, Soil Dynamics, Retaining Walls." },
      { title: "Water Resources & Environmental Engg", description: "Hydrology, Fluid Mechanics, Water Treatment, Wastewater Engineering, Irrigation Systems." },
      { title: "BIM, Surveying & Transportation", description: "Advanced Surveying, GIS, Highways, Pavement Design, Building Information Modeling (BIM)." }
    ],
    semesterPhases: [
      {
        phase: "Phase 1: Basic Sciences & Surveying",
        semesters: "Semesters I & II",
        focus: "Engineering Mathematics, Physics, Chemistry, Engineering Graphics, Plane Surveying.",
        keySubjects: ["Engineering Mathematics", "Engineering Physics", "Engineering Graphics", "Surveying & Levelling"]
      },
      {
        phase: "Phase 2: Mechanics of Solids & Fluids",
        semesters: "Semesters III & IV",
        focus: "Mechanics of Solids, Fluid Mechanics, Concrete Technology, Construction Materials.",
        keySubjects: ["Mechanics of Solids", "Fluid Mechanics", "Concrete Technology", "Construction Materials & Technology"]
      },
      {
        phase: "Phase 3: Structural Analysis & Geotechnical",
        semesters: "Semesters V & VI",
        focus: "Structural Analysis I & II, RCC Design, Soil Mechanics, Foundation Engineering, Electives.",
        keySubjects: ["Design of Reinforced Concrete Structures", "Structural Analysis", "Soil Mechanics", "Foundation Engineering", "Professional Electives I & II"]
      },
      {
        phase: "Phase 4: Smart Infrastructure & Capstone",
        semesters: "Semesters VII & VIII",
        focus: "Design of Steel Structures, Highway Engineering, BIM, Open Electives, Capstone Project.",
        keySubjects: ["Design of Steel Structures", "Highway & Transportation Engineering", "Environmental Engineering", "Capstone Major Project Phase I & II"]
      }
    ],
    labSprints: [
      { title: "Strength of Materials & Concrete Testing Lab", tools: "Universal Testing Machine (UTM), Compression Tester", description: "Tensile testing of steel rebar, compressive strength of concrete cubes, and flexural behavior." },
      { title: "Surveying & Total Station Field Studio", tools: "Total Station, DGPS, Optical Theodolite, GIS Software", description: "Topographic mapping, contouring, land boundary plotting, and GPS coordinate capture." },
      { title: "Building Information Modeling (BIM) Lab", tools: "Autodesk Revit, STAAD Pro, ETABS, AutoCAD", description: "3D architectural modeling, structural analysis, load calculations, and clash detection." },
      { title: "Geotechnical & Soil Mechanics Lab", tools: "Direct Shear Apparatus, Triaxial Test Rig, Hydrometer", description: "Determining soil shear strength, permeability, compaction characteristics, and bearing capacity." }
    ],
    electiveTracks: [
      { track: "Structural & Earthquake Engineering", courses: ["Earthquake Resistant Structural Design", "Pre-Stressed Concrete Structures", "Structural Dynamics", "Tall Building Design"] },
      { track: "Smart Cities & Sustainable Infrastructure", courses: ["Green Building Technologies", "Urban Transportation Planning", "Pavement Management Systems", "GIS & Remote Sensing"] },
      { track: "Environmental & Water Systems", courses: ["Solid & Hazardous Waste Management", "Air Pollution Control", "Hydrology & Water Resources", "Environmental Impact Assessment"] }
    ]
  },

  "pg-me-cse": {
    totalCredits: "70 Credits",
    duration: "2 Years (4 Semesters)",
    cbcsStatus: "Choice Based Credit System (CBCS)",
    regulationName: "R-2024 Autonomous PG Standards",
    corePillars: [
      { title: "Advanced Data Structures & Algorithms", description: "Amortized Analysis, Randomized Algorithms, Graph Theory, and High-Performance Computing." },
      { title: "Cloud Architecture & Distributed AI", description: "Microservices, Distributed Systems, Cloud-Native Compute, and Parallel AI Pipelines." },
      { title: "Deep Learning & Intelligent Systems", description: "Advanced Deep Neural Networks, Natural Language Understanding, Computer Vision, & Reinforcement Learning." },
      { title: "Research Methodology & IPR", description: "Scientific Research Design, Patent Filing, Technical Publication, & Academic Integrity." }
    ],
    semesterPhases: [
      {
        phase: "Phase 1: Advanced Core & Research Methods",
        semesters: "Semester I",
        focus: "Advanced Algorithms, Cloud Computing, Machine Learning, Research Methodology & IPR.",
        keySubjects: ["Advanced Data Structures & Algorithms", "Distributed Cloud Computing", "Machine Learning Techniques", "Research Methodology & IPR"]
      },
      {
        phase: "Phase 2: Deep Learning & Mini-Project",
        semesters: "Semester II",
        focus: "Deep Learning Systems, Advanced OS Kernel, Professional Electives, Applied Mini-Project.",
        keySubjects: ["Deep Learning & Neural Architectures", "Advanced Operating Systems", "Professional Elective I & II", "Mini-Project Work"]
      },
      {
        phase: "Phase 3: Specialized Electives & Thesis Phase-I",
        semesters: "Semester III",
        focus: "Domain Professional Electives, Open Elective, and Dissertation Project Phase-I.",
        keySubjects: ["Professional Elective III & IV", "Open Elective", "Dissertation Phase-I"]
      },
      {
        phase: "Phase 4: Capstone Dissertation & Research Paper",
        semesters: "Semester IV",
        focus: "Full-time Research Dissertation Phase-II and Scopus/WoS Journal Paper Publication.",
        keySubjects: ["Dissertation Phase-II", "Research Journal Publication"]
      }
    ],
    labSprints: [
      { title: "High-Performance Computing Cluster Lab", tools: "Linux HPC, CUDA, MPI, OpenMP", description: "Parallel algorithm optimization, distributed matrix multiplication, and cluster job queuing." },
      { title: "Deep Learning & Neural AI Workbench", tools: "PyTorch, TensorFlow, NVIDIA RTX GPU Rigs", description: "Fine-tuning transformer models, custom loss functions, and research experiment profiling." },
      { title: "Cloud Infrastructure & Microservices Studio", tools: "Kubernetes, Docker, AWS / GCP, Terraform", description: "Deploying fault-tolerant microservices, load balancing, and cloud autoscaling." }
    ],
    electiveTracks: [
      { track: "AI & Intelligent Systems", courses: ["Natural Language Processing", "Computer Vision Systems", "Reinforcement Learning", "Generative AI"] },
      { track: "Cloud & Security Engineering", courses: ["Advanced Cybersecurity", "Cloud Security & Privacy", "Blockchain Technology", "Distributed Storage Systems"] }
    ]
  },

  "pg-me-structural-engineering": {
    totalCredits: "70 Credits",
    duration: "2 Years (4 Semesters)",
    cbcsStatus: "Choice Based Credit System (CBCS)",
    regulationName: "R-2024 Autonomous PG Standards",
    corePillars: [
      { title: "Advanced Structural Analysis & Dynamics", description: "Matrix Structural Analysis, Dynamic Loadings, Blast/Wind Loading, and Non-Linear Analysis." },
      { title: "Earthquake Engineering & Retrofitting", description: "Seismic Design Standards (IS 1893), Base Isolation, Structural Health Monitoring, and Retrofitting." },
      { title: "Finite Element Method (FEM)", description: "Isoparametric Elements, Non-linear FEA, Elasticity Theory, and Computational Mechanics." },
      { title: "Tall Buildings & Bridge Design", description: "Design of High-Rise Buildings, Long Span Bridges, Pre-Stressed Concrete, and Steel-Concrete Composites." }
    ],
    semesterPhases: [
      {
        phase: "Phase 1: Advanced Theory & Mathematics",
        semesters: "Semester I",
        focus: "Theory of Elasticity, Matrix Structural Analysis, Advanced Concrete Tech, Research Methods.",
        keySubjects: ["Applied Mathematics for Structural Engineers", "Theory of Elasticity & Plasticity", "Matrix Methods of Structural Analysis", "Research Methodology & IPR"]
      },
      {
        phase: "Phase 2: Dynamics, Seismic & FEA",
        semesters: "Semester II",
        focus: "Structural Dynamics, Finite Element Analysis, Earthquake Engineering, Electives, Mini-Project.",
        keySubjects: ["Structural Dynamics", "Finite Element Method", "Seismic Design of Structures", "Professional Elective I & II"]
      },
      {
        phase: "Phase 3: High-Rise Buildings & Dissertation Phase-I",
        semesters: "Semester III",
        focus: "Design of Tall Buildings, Bridges, Professional Electives, and Thesis Phase-I.",
        keySubjects: ["Design of Tall Buildings & Bridges", "Professional Elective III & IV", "Dissertation Phase-I"]
      },
      {
        phase: "Phase 4: Research Dissertation Phase-II",
        semesters: "Semester IV",
        focus: "Full-time Structural Engineering Research Dissertation Phase-II & Publication.",
        keySubjects: ["Dissertation Phase-II", "Journal Publication & Defense"]
      }
    ],
    labSprints: [
      { title: "FEA Simulation & Structural Studio", tools: "STAAD Pro, ETABS, ANSYS Structural, ABAQUS", description: "Dynamic earthquake response spectrum analysis, non-linear pushover analysis, and FEA modeling." },
      { title: "Advanced Concrete & Materials Research Lab", tools: "High-Capacity Testing Machine, Non-Destructive Testers", description: "High-performance concrete mix design, self-compacting concrete, and NDT rebound hammer testing." },
      { title: "Structural Dynamics & Vibration Workbench", tools: "Shake Table, Accelerometers, Data Acquisition Rigs", description: "Measuring structural natural frequencies, damping ratios, and seismic shake table testing." }
    ],
    electiveTracks: [
      { track: "Earthquake & Retrofitting", courses: ["Seismic Retrofitting & Rehabilitation", "Base Isolation Systems", "Wind Effects on Structures", "Structural Health Monitoring"] },
      { track: "Advanced Materials & Bridges", courses: ["Design of Substructures & Foundations", "Bridge Engineering", "Prefabricated Concrete Structures", "Composite Structures"] }
    ]
  },

  "pg-me-vlsi-design": {
    totalCredits: "70 Credits",
    duration: "2 Years (4 Semesters)",
    cbcsStatus: "Choice Based Credit System (CBCS)",
    regulationName: "R-2024 Autonomous PG Standards",
    corePillars: [
      { title: "Analog & Mixed-Signal IC Design", description: "CMOS Operational Amplifiers, Data Converters (ADC/DAC), Phase Locked Loops (PLL), & RF CMOS." },
      { title: "Digital System Design & SystemVerilog", description: "SystemVerilog UVM Verification, RTL Coding, Static Timing Analysis (STA), & Physical Design." },
      { title: "Low Power VLSI Architecture", description: "Power Dissipation Analysis, Dynamic Voltage Frequency Scaling (DVFS), Clock Gating, & Subthreshold Circuits." },
      { title: "System on Chip (SoC) & EDA Workflows", description: "Cadence / Synopsys EDA Tool Suites, ASIC Synthesis, Floorplanning, Place & Route (PnR)." }
    ],
    semesterPhases: [
      {
        phase: "Phase 1: Advanced CMOS & Verification",
        semesters: "Semester I",
        focus: "CMOS Digital IC Design, Analog IC Design, SystemVerilog HDL, Research Methodology.",
        keySubjects: ["CMOS Digital Integrated Circuit Design", "Analog Integrated Circuit Design", "SystemVerilog for Design & Verification", "Research Methodology & IPR"]
      },
      {
        phase: "Phase 2: Low Power & Testing",
        semesters: "Semester II",
        focus: "Low Power VLSI Design, VLSI Testing & Design for Testability (DFT), CAD for VLSI, Electives.",
        keySubjects: ["Low Power VLSI Design", "VLSI Testing & Fault Modeling", "CAD for VLSI Circuits", "Professional Elective I & II"]
      },
      {
        phase: "Phase 3: SoC Architecture & Dissertation Phase-I",
        semesters: "Semester III",
        focus: "System on Chip (SoC) Architecture, Professional Electives, and Dissertation Phase-I.",
        keySubjects: ["System-on-Chip (SoC) Design", "Professional Elective III & IV", "Dissertation Phase-I"]
      },
      {
        phase: "Phase 4: Chip Tape-Out & Dissertation Phase-II",
        semesters: "Semester IV",
        focus: "Full-time Chip Design Dissertation Phase-II, EDA Verification, and Paper Publication.",
        keySubjects: ["Dissertation Phase-II", "Chip Tape-out / Paper Publication"]
      }
    ],
    labSprints: [
      { title: "Cadence Virtuoso Analog Design Studio", tools: "Cadence Virtuoso, Spectre Simulator", description: "Transistor-level schematic entry, op-amp design, transient analysis, and DRC/LVS layout checks." },
      { title: "Synopsys / Xilinx Digital ASIC Lab", tools: "Synopsys Design Compiler, Xilinx Vivado, ModelSim", description: "RTL synthesis, static timing analysis (STA), auto place & route (APR), and FPGA prototyping." },
      { title: "SystemVerilog UVM Verification Workbench", tools: "QuestaSim, SystemVerilog UVM Framework", description: "Writing testbenches, functional coverage metrics, constrained random testing, and assertions." }
    ],
    electiveTracks: [
      { track: "ASIC & SoC Systems", courses: ["Network on Chip (NoC)", "Physical Design Automation", "High Speed SerDes Design", "Memory Design & Testing"] },
      { track: "RF & Mixed Signal VLSI", courses: ["RF CMOS IC Design", "Data Converters (ADC/DAC)", "Signal Integrity & EMI", "Nano-Electronics"] }
    ]
  }
};

export function getDepartmentCurriculumSummary(slug: string, courseName: string): CurriculumSummary {
  const normalizedSlug = slug.toLowerCase();
  
  const exact = DEPARTMENT_CURRICULUM_SUMMARIES[normalizedSlug];
  if (exact) return exact;

  // Exact & Fuzzy Fallbacks
  if (normalizedSlug.includes("aids") || normalizedSlug.includes("data-science")) {
    return DEPARTMENT_CURRICULUM_SUMMARIES["artificial-intelligence-and-data-science"]!;
  }
  if (normalizedSlug.includes("aiml") || normalizedSlug.includes("machine-learning")) {
    return DEPARTMENT_CURRICULUM_SUMMARIES["cse-aiml"]!;
  }
  if (normalizedSlug.includes("cyber")) {
    return DEPARTMENT_CURRICULUM_SUMMARIES["cse-cyber-security"]!;
  }
  if (normalizedSlug.includes("csbs") || normalizedSlug.includes("business-systems")) {
    return DEPARTMENT_CURRICULUM_SUMMARIES["computer-science-and-business-systems"]!;
  }
  if (normalizedSlug.includes("it") || normalizedSlug.includes("information-technology")) {
    return DEPARTMENT_CURRICULUM_SUMMARIES["information-technology"]!;
  }
  if (normalizedSlug.includes("vlsi")) {
    return DEPARTMENT_CURRICULUM_SUMMARIES["pg-me-vlsi-design"]!;
  }
  if (normalizedSlug.includes("act") || normalizedSlug.includes("advanced-communication")) {
    return DEPARTMENT_CURRICULUM_SUMMARIES["ece-advanced-communication"]!;
  }
  if (normalizedSlug.includes("ece") || normalizedSlug.includes("electronics")) {
    return DEPARTMENT_CURRICULUM_SUMMARIES["electronics-and-communication-engineering"]!;
  }
  if (normalizedSlug.includes("eee") || normalizedSlug.includes("electrical")) {
    return DEPARTMENT_CURRICULUM_SUMMARIES["electrical-and-electronics-engineering"]!;
  }
  if (normalizedSlug.includes("mech") || normalizedSlug.includes("mechanical")) {
    return DEPARTMENT_CURRICULUM_SUMMARIES["mechanical-engineering"]!;
  }
  if (normalizedSlug.includes("civil") || normalizedSlug.includes("structural")) {
    return (normalizedSlug.startsWith("pg") 
      ? DEPARTMENT_CURRICULUM_SUMMARIES["pg-me-structural-engineering"]
      : DEPARTMENT_CURRICULUM_SUMMARIES["civil-engineering"])!;
  }

  // Default CSE structure
  return DEPARTMENT_CURRICULUM_SUMMARIES["computer-science-and-engineering"]!;
}

export type DepartmentOverviewDetails = {
  description: string[];
  vision: string;
  missions: string[];
};

export function getDepartmentOverviewDetails(slug: string, courseName: string): DepartmentOverviewDetails {
  const s = slug.toLowerCase();

  if (s.includes("csbs") || s.includes("business-systems")) {
    return {
      description: [
        "The B.Tech in Computer Science and Business System (CSBS) is a specialized undergraduate engineering program designed to blend core computer science education with insights into business systems and management. It is a course introduced in collaboration with industry leaders like Tata Consultancy Services (TCS) to bridge the gap between traditional computer science education and the dynamic needs of the IT and business world.",
        "This program aims to enhance the relevance of the Computer Science program in India to meet the future demands of the IT industry whose landscape is rapidly changing in the era of Business 4.0. The curriculum is designed to ensure that students get better exposure to emerging subjects such as Analytics, Deep learning, Machine Learning, Cloud Computing, Business Analytics, Financial Management, Economics, Internet of Things, and Design Thinking, while developing an appreciation towards humanities and value-added sciences. The primary objective is to produce graduates who are not only technically sound in computer science but also understand the fundamentals of business, economics, and management.",
        "Key features of the CSBS program include a balanced curriculum pairing core Computer Science subjects with business and financial management modules, direct industry collaboration designed in partnership with TCS, a focus on computational thinking and business decision-making, and intensive soft skills training in teamwork, communication, and entrepreneurial leadership."
      ],
      vision: "To be a premier center of academic excellence in Computer Science and Business Systems, nurturing innovative tech-business leaders.",
      missions: [
        "Impart core fundamental knowledge in Computer Science and Business Systems through innovative teaching methodologies.",
        "Inculcate critical thinking, financial awareness, ethics, and lifelong learning for industry and society.",
        "Foster entrepreneurial mindset and leadership competencies for top-tier careers and global research."
      ]
    };
  }

  if (s.includes("aids") || s.includes("data-science")) {
    return {
      description: [
        "The B.Tech in Artificial Intelligence & Data Science at Mohamed Sathak A.J. College of Engineering (MSAJCE) equips students with cutting-edge skills in machine learning, deep neural networks, big data processing, and predictive analytics. In an era where data drives global decision-making, the department prepares data engineers and AI specialists to transform massive enterprise datasets into strategic intelligence.",
        "The objective of the program is to produce data engineers and AI specialists equipped with strong mathematical foundations, deep learning frameworks, and ethical data governance principles. The curriculum integrates linear algebra, probability, Python programming, TensorFlow, PyTorch, Apache Spark, and Tableau to solve complex real-world challenges.",
        "Key features of the AI & DS program include a comprehensive curriculum spanning artificial intelligence architectures, distributed big data systems, and business forecasting; practical hands-on experience building automated MLOps pipelines; state-of-the-art GPU-accelerated computing centers; and continuous industry immersion through AI hackathons, project expos, and corporate internship drives."
      ],
      vision: "To become a center of excellence in Artificial Intelligence and Data Science education and research.",
      missions: [
        "Deliver robust foundational knowledge in machine learning, mathematical statistics, and data analytics.",
        "Encourage research innovation, ethical AI practices, and continuous technical learning.",
        "Develop industry-ready data engineers capable of building scalable intelligence systems."
      ]
    };
  }

  if (s.includes("aiml") || s.includes("machine-learning")) {
    return {
      description: [
        "The B.E. in CSE (Artificial Intelligence & Machine Learning) at MSAJCE focuses on autonomous agent design, deep learning neural network architectures, reinforcement learning, and cognitive computing systems. The program prepares students to engineer intelligent software, robotic perception frameworks, and next-generation automated decision engines.",
        "The primary objective is to graduate specialized AI engineers capable of designing, training, and deploying scalable deep learning models and autonomous agents. Students gain deep practical experience in convolutional and recurrent neural networks, transformer models, reinforcement learning policies, and edge AI quantization on microcontrollers and embedded GPUs.",
        "Key features of the program include an advanced curriculum in neural networks and cognitive computing, practical prototyping in edge AI labs, hands-on model deployment, active research mentorship, and professional career development tailored for high-demand roles in AI research, autonomous systems, and generative technology."
      ],
      vision: "To excel in imparting advanced knowledge and research capabilities in Artificial Intelligence and Machine Learning.",
      missions: [
        "Impart strong foundations in neural network design, reinforcement learning, and algorithmic mathematics.",
        "Promote collaborative AI research, ethical algorithmic design, and lifelong learning.",
        "Build skilled AI practitioners who address industrial and societal challenges."
      ]
    };
  }

  if (s.includes("cyber")) {
    return {
      description: [
        "The B.E. in CSE (Cyber Security) at MSAJCE delivers comprehensive technical training in defensive network security, ethical hacking, cryptography, digital forensics, and zero-trust cloud architectures. As cyber threats increase in complexity, the department produces security specialists capable of safeguarding critical enterprise systems and digital infrastructure.",
        "The objective of the program is to produce cybersecurity specialists who defend enterprise systems, identify security vulnerabilities, and enforce cryptographically secure protocols. Students master offensive penetration testing techniques, threat hunting, malware analysis, security information and event management (SIEM), and applied cryptography using industry-standard tools.",
        "Key features include red-team vs. blue-team simulation labs, hands-on malware reverse engineering, digital forensics investigations, cloud security hardening, and cyber law compliance training, preparing graduates for key roles as security analysts, ethical hackers, and forensic consultants."
      ],
      vision: "To achieve excellence in cybersecurity education, ethical hacking research, and digital privacy defense.",
      missions: [
        "Provide thorough education in network defense, applied cryptography, and forensic investigation.",
        "Instill professional cyber ethics, legal compliance awareness, and security leadership.",
        "Train proactive cybersecurity analysts capable of securing global digital infrastructure."
      ]
    };
  }

  if (s.includes("cse") || s.includes("computer-science")) {
    return {
      description: [
        "The Department of Computer Science & Engineering at Mohamed Sathak A.J. College of Engineering (MSAJCE) integrates cutting-edge principles, rigorous laboratory practicals, and outcome-based engineering education. Computing touches every facet of modern civilization—from artificial intelligence, cloud infrastructure, and autonomous systems to healthcare, financial technology, and cybersecurity.",
        "The program equips students with modern engineering tools, project management skills, interdisciplinary electives, and direct corporate internship opportunities to meet global industry standards. Our primary objective is to produce proficient Computer Science & Engineering graduates equipped with strong theoretical foundations, practical engineering skills, and ethical leadership capabilities.",
        "Key features of the CSE department include a comprehensive curriculum with a balanced mix of basic engineering sciences, core domain subjects, professional electives, and mini-projects; active industry immersion through collaborative industrial visits, corporate guest lectures, hackathons, and internship programs; state-of-the-art computational and experimental laboratory facilities with industry-grade software tools; and dedicated professional development through active student professional chapters, soft skills training, and placement preparation."
      ],
      vision: "To be a centre of excellence for transforming students into proficient Computer Science Engineers through sustainable practices.",
      missions: [
        "Impart core fundamental knowledge and necessary skills in Computer Science and Engineering through innovative teaching and learning methodology.",
        "Inculcate critical thinking, ethics, lifelong learning and creativity needed for industry and society.",
        "Cultivate students with all-round competencies for career, higher education, and self-employability."
      ]
    };
  }

  // Default General Engineering Overview Template
  return {
    description: [
      `The Department of ${courseName} at Mohamed Sathak A.J. College of Engineering (MSAJCE) integrates cutting-edge principles, rigorous laboratory practicals, and outcome-based engineering education to deliver high-impact technical learning.`,
      `The program equips students with modern engineering tools, project management skills, interdisciplinary electives, and direct corporate internship opportunities to meet global industry standards. Our primary objective is to produce proficient ${courseName} graduates equipped with strong theoretical foundations, practical engineering skills, and ethical leadership capabilities.`,
      `Key features include a comprehensive curriculum with a balanced mix of basic engineering sciences, core domain subjects, and professional electives; active industry immersion through collaborative industrial visits, corporate guest lectures, and hackathons; state-of-the-art computational and experimental laboratory facilities with industry-grade software tools; and dedicated professional development through student chapters, soft skills training, and placement preparation.`
    ],
    vision: `To be a centre of excellence for transforming students into proficient ${courseName} engineers through sustainable practices.`,
    missions: [
      `Impart core fundamental knowledge and necessary skills in ${courseName} through innovative teaching and learning methodology.`,
      "Inculcate critical thinking, ethics, lifelong learning and creativity needed for industry and society.",
      "Cultivate students with all-round competencies for career, higher education, and self-employability."
    ]
  };
}
