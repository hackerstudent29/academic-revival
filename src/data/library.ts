export interface LibraryStat {
  label: string;
  count: string;
  numericValue: number;
  suffix?: string;
  category: "physical" | "digital" | "periodicals" | "facility";
  description: string;
}

export interface DepartmentJournal {
  sno: number;
  department: string;
  count: number;
  code: string;
}

export interface DigitalPortal {
  sno: number;
  name: string;
  url: string;
  category: "e-journal" | "e-library" | "e-book" | "course";
  description?: string;
  highlight?: boolean;
}

export interface LibraryService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface BorrowingEligibility {
  category: string;
  entitlement: string;
  booksCount: number;
  loanPeriod: string;
  description: string;
}

export interface CommitteeMember {
  sno: number;
  name: string;
  designation: string;
  role: "Chairman" | "Secretary" | "Member Secretary" | "Member";
  type: "Leadership" | "Faculty" | "Library Staff" | "Student";
  department?: string;
}

export const libraryOverview = {
  title: "Central Library & Learning Centre",
  tagline: "The Intellectual Heart of MSAJCE",
  area: "8,978 Sq.ft",
  floors: "Ground Floor & 1st Floor",
  automation: "Fully Computerized with Koha Open-Source ILMS & Barcode Technology",
  connectivity: "Campus-Wide High-Speed Wi-Fi & Dedicated LAN Terminals",
  description: `Library is the Heart of every academic Institution. Our institution encourages all students and staff members to make the best use of the library that has been carefully built up since the inception of the college as a cardinal support service of the Institute. The prime objective of our library is to provide the right information to the right readers at the right time in the right manner through bibliographic sources and full-text sources in the form of print as well as digital collections.`,
  extendedDescription: `Our comprehensive collections span Science, Engineering, Technology, Humanities, Management, and General disciplines, systematically organized into dedicated zones: Stack Section, Reference Section, and Periodical Section. The library is housed in a spacious area of 8,978 Sq.ft across the Ground Floor and 1st Floor, fully computerized with more than 29,853 books and 1,885 reference volumes. Regular additions ensure new titles recommended by faculty are constantly made available, supplemented by reputable newspapers, national/international journals, DELNET Inter-Library Loan access, and J-Gate online database subscriptions.`,
};

export const libraryWorkingHours = {
  weekday: {
    days: "Monday to Saturday",
    hours: "8:00 A.M. – 7:00 P.M.",
    openHour: 8,
    closeHour: 19,
  },
  sunday: {
    days: "All Sundays",
    hours: "10:00 A.M. – 4:00 P.M.",
    openHour: 10,
    closeHour: 16,
  },
  note: "Open on all working days and Sundays to facilitate dedicated study and research.",
};

export const collectionStats: LibraryStat[] = [
  {
    label: "Total Volumes",
    count: "29,853",
    numericValue: 29853,
    suffix: "+",
    category: "physical",
    description: "Extensive textbook holdings spanning all engineering, science, and management curricula",
  },
  {
    label: "Distinct Titles",
    count: "5,628",
    numericValue: 5628,
    suffix: "+",
    category: "physical",
    description: "Diverse academic, standard reference, and contemporary titles curated by departmental faculty",
  },
  {
    label: "Reference Volumes",
    count: "1,885",
    numericValue: 1885,
    suffix: "",
    category: "physical",
    description: "Specialized handbooks, encyclopedias, codes, and authoritative academic volumes in-library",
  },
  {
    label: "DELNET E-Journals",
    count: "1,379",
    numericValue: 1379,
    suffix: "+",
    category: "digital",
    description: "Full-text peer-reviewed electronic research journals accessible across campus networks",
  },
  {
    label: "Gale Database Journals",
    count: "1,800",
    numericValue: 1800,
    suffix: "+",
    category: "digital",
    description: "International peer-reviewed indexed research journals via Gale Cengage Learning",
  },
  {
    label: "E-Books Repository",
    count: "3,790",
    numericValue: 3790,
    suffix: "+",
    category: "digital",
    description: "Curated digital engineering handbooks, monographs, and academic digital texts",
  },
  {
    label: "National Journals",
    count: "35",
    numericValue: 35,
    suffix: " Titles",
    category: "periodicals",
    description: "Specialized printed national research journals subscribed directly from major publishers",
  },
  {
    label: "Magazines Subscribed",
    count: "20",
    numericValue: 20,
    suffix: " Nos",
    category: "periodicals",
    description: "Technical periodicals, competitive exam guides, and global technology digests",
  },
  {
    label: "Back Volumes",
    count: "106",
    numericValue: 106,
    suffix: " Sets",
    category: "physical",
    description: "Archived research journals and retrospective proceedings for in-depth literature review",
  },
  {
    label: "CD-ROM Resources",
    count: "356",
    numericValue: 356,
    suffix: " Discs",
    category: "digital",
    description: "Interactive learning media, simulation software discs, and book multimedia supplements",
  },
  {
    label: "Project Reports",
    count: "260",
    numericValue: 260,
    suffix: "+",
    category: "physical",
    description: "Institutional repository of final-year undergraduate and postgraduate capstone dissertations",
  },
  {
    label: "Daily Newspapers",
    count: "05",
    numericValue: 5,
    suffix: " Dailies",
    category: "periodicals",
    description: "Leading English and vernacular newspapers ensuring students stay updated on current affairs",
  },
];

export const departmentJournals: DepartmentJournal[] = [
  { sno: 1, department: "Mechanical Engineering", count: 6, code: "MECH" },
  { sno: 2, department: "Electronics and Communication Engineering", count: 6, code: "ECE" },
  { sno: 3, department: "Electrical and Electronics Engineering", count: 6, code: "EEE" },
  { sno: 4, department: "Computer Science Engineering / Information Technology", count: 10, code: "CSE / IT" },
  { sno: 5, department: "Civil Engineering", count: 4, code: "CIVIL" },
  { sno: 6, department: "Science & Humanities (S&H)", count: 5, code: "S&H" },
];

export const openAccessJournals: DigitalPortal[] = [
  { sno: 1, name: "Directory of Open Access Journals (DOAJ)", url: "https://doaj.org/", category: "e-journal", description: "Global index of peer-reviewed open access journals covering technology, science, and medicine" },
  { sno: 2, name: "BioMed Central", url: "https://www.biomedcentral.com/journals", category: "e-journal", description: "Pioneer in open access research publishing high-impact biological and biomedical journals" },
  { sno: 3, name: "Scientific Research Publishing (SCIRP)", url: "https://www.scirp.org/", category: "e-journal", description: "Academic publisher with 200+ open access journals in science, engineering, and humanities" },
  { sno: 4, name: "CORE (COnnecting REpositories)", url: "https://www.core.ac.uk/", category: "e-journal", description: "World's largest aggregator of open access research papers with 200M+ research outputs" },
  { sno: 5, name: "Trans Stellar Journal Publication (TJPRC)", url: "http://www.tiprc.org/", category: "e-journal", description: "International research consultancy publishing engineering, medicine, and applied sciences" },
  { sno: 6, name: "Science Publications", url: "https://thescipub.com/", category: "e-journal", description: "Peer-reviewed scientific journals across computing, physical sciences, and technology" },
  { sno: 7, name: "Research India Publication", url: "https://www.ripublication.com/", category: "e-journal", description: "National and international journals focusing on computer science, mechanics, and electrical engineering" },
  { sno: 8, name: "IAEME (Engineering & Management)", url: "http://www.iaeme.com/", category: "e-journal", description: "International Association of Engineering and Management Education indexed journal directory" },
  { sno: 9, name: "Seventh Sense Research Group (SSRG)", url: "https://www.internationaljournalssrg.org/", category: "e-journal", description: "Broad-spectrum international peer-reviewed journals fostering interdisciplinary tech research" },
  { sno: 10, name: "Google Scholar", url: "https://scholar.google.com/", category: "e-journal", highlight: true, description: "Worldwide academic search engine indexing theses, peer-reviewed articles, citations, and patents" },
  { sno: 11, name: "arXiv (Cornell University)", url: "https://arxiv.org/", category: "e-journal", highlight: true, description: "Open access archive for 2M+ scholarly articles in computer science, physics, mathematics, and quantitative biology" },
  { sno: 12, name: "Hindawi Publishers", url: "https://www.hindawi.com/", category: "e-journal", description: "Extensive portfolio of peer-reviewed open access journals covering technical disciplines" },
  { sno: 13, name: "CSC Open-Access Library", url: "http://www.cscjournals.org/", category: "e-journal", description: "Computer Science Journals Open Access database with research on AI, robotics, and networks" },
  { sno: 14, name: "OMICS International", url: "https://www.omicsonline.org/", category: "e-journal", description: "Open access platform organizing international scientific conferences and publishing journals" },
  { sno: 15, name: "Indian Academy of Sciences", url: "https://www.ias.ac.in/", category: "e-journal", highlight: true, description: "India's premier scientific academy publishing journals such as Sadhana (Engineering Sciences)" },
];

export const eLibraryGateways: DigitalPortal[] = [
  {
    sno: 1,
    name: "DELNET (Developing Library Network)",
    url: "https://delnet.in/",
    category: "e-library",
    highlight: true,
    description: "Major resource-sharing network connecting 8,000+ institutions. Access union catalogues, 1,379+ e-journals, and Inter-Library Loan (ILL) services.",
  },
  {
    sno: 2,
    name: "J-Gate Plus",
    url: "https://jgateplus.com/",
    category: "e-library",
    highlight: true,
    description: "Comprehensive electronic gateway indexing 50,684+ global academic journals with millions of full-text links.",
  },
  {
    sno: 3,
    name: "National Digital Library of India (NDLI)",
    url: "https://ndl.iitkgp.ac.in/",
    category: "e-library",
    highlight: true,
    description: "Virtual repository under Ministry of Education (IIT Kharagpur) providing single-window access to millions of academic resources.",
  },
  {
    sno: 4,
    name: "World Digital Library (Library of Congress & UNESCO)",
    url: "https://www.wdl.org/",
    category: "e-library",
    description: "International heritage materials, primary documents, and manuscripts from global partner institutions.",
  },
  {
    sno: 5,
    name: "Shodhganga (INFLIBNET)",
    url: "https://shodhganga.inflibnet.ac.in/",
    category: "e-library",
    highlight: true,
    description: "National digital repository of Indian electronic theses and dissertations submitted to universities nationwide.",
  },
  {
    sno: 6,
    name: "e-ShodhSindhu",
    url: "https://ess.inflibnet.ac.in/",
    category: "e-library",
    description: "Consortium for Higher Education Electronic Resources providing access to high-quality peer-reviewed scholarly journals.",
  },
  {
    sno: 7,
    name: "NPTEL Video Lectures",
    url: "http://www.nptelvideos.com/",
    category: "e-library",
    highlight: true,
    description: "Video lecture archive from IITs and IISc covering all fundamental and advanced undergraduate engineering curricula.",
  },
  {
    sno: 8,
    name: "N-LIST E-Resources",
    url: "https://nlist.inflibnet.ac.in/veresources.php",
    category: "e-library",
    description: "National Library and Information Services Infrastructure for Scholarly Content extending 6,000+ e-journals and 1.99 Lakh e-books.",
  },
];

export const eBooksDirectory: DigitalPortal[] = [
  { sno: 1, name: "Directory of Open Access Books (DOAB)", url: "https://www.doabooks.org/", category: "e-book", description: "Discover peer-reviewed academic books across disciplines with open licenses" },
  { sno: 2, name: "E-Books Directory", url: "http://www.e-booksdirectory.com/", category: "e-book", description: "Categorized links to free, downloadable tech books, lecture notes, and engineering texts" },
  { sno: 3, name: "AMS Books (American Mathematical Society)", url: "https://www.ams.org/books", category: "e-book", description: "Open access mathematics titles and graduate engineering mathematical foundations" },
  { sno: 4, name: "IntechOpen Engineering", url: "https://www.intechopen.com/books", category: "e-book", description: "World's leading publisher of Open Access books on AI, Robotics, Nanotechnology, and Mechanical Engineering" },
  { sno: 5, name: "Audio Books For Free", url: "http://www.audiobooksforfree.com/", category: "e-book", description: "Digital audio literature and lectures for auditory learning and accessibility" },
  { sno: 6, name: "Free-eBooks.net", url: "https://www.free-ebooks.net/", category: "e-book", description: "Broad digital library of textbooks, academic literature, and self-development titles" },
  { sno: 7, name: "ACS Publications E-Books", url: "https://pubs.acs.org/", category: "e-book", description: "Authoritative books in chemical engineering, materials science, and biochemistry" },
  { sno: 8, name: "The Online Books Page (UPenn)", url: "https://onlinebooks.library.upenn.edu/", category: "e-book", description: "Index of over 3 million freely accessible books hosted across global academic repositories" },
  { sno: 9, name: "UC Press E-Books Collection", url: "https://publishing.cdlib.org/ucpreebooks/", category: "e-book", description: "University of California Press electronic titles in environmental science and public policy" },
  { sno: 10, name: "GPO Access (US Government Publishing)", url: "https://www.govinfo.gov/", category: "e-book", description: "Official publications, technical manuals, and federal scientific reports" },
  { sno: 11, name: "Internet Archive Books", url: "https://archive.org/details/texts", category: "e-book", highlight: true, description: "Non-profit digital library offering free universal access to 20M+ digitized books and records" },
  { sno: 12, name: "Project Gutenberg", url: "https://www.gutenberg.org/", category: "e-book", highlight: true, description: "Over 70,000 free digital books, landmark classic treatises, and foundational philosophy texts" },
  { sno: 13, name: "Bookboon Engineering", url: "https://bookboon.com/", category: "e-book", highlight: true, description: "Compact, practical textbooks on core engineering principles, calculus, and programming" },
  { sno: 14, name: "Free Books Hub", url: "http://www.freebookshub.com/", category: "e-book", description: "Daily curated deals and downloads across educational and technical genres" },
  { sno: 15, name: "World Book Online", url: "https://www.worldbook.com/", category: "e-book", description: "Authoritative digital encyclopedia reference suite" },
  { sno: 16, name: "Kirkus Reviews Academic", url: "https://www.kirkusreviews.com/", category: "e-book", description: "Critiques, literary digests, and book industry evaluations" },
  { sno: 17, name: "Free Computer Books", url: "https://freecomputerbooks.com/", category: "e-book", highlight: true, description: "Comprehensive library of free Computer, Mathematics, and Technical books and tutorials" },
  { sno: 18, name: "Page by Page Books Online", url: "http://www.pagebypagebooks.com/", category: "e-book", description: "Read full-length classic books on-screen in easy-to-digest book-style pagination" },
  { sno: 19, name: "Read Print Library", url: "http://www.readprint.com/", category: "e-book", description: "Free online library for students and educators with cross-referencing capabilities" },
  { sno: 20, name: "World e-Books Library", url: "http://www.worldlibrary.in/", category: "e-book", description: "Massive digital depository of electronic books and academic journals" },
  { sno: 21, name: "Biodiversity Heritage Library", url: "https://www.biodiversitylibrary.org/", category: "e-book", description: "World's largest open access digital library for biodiversity literature and earth science" },
  { sno: 22, name: "Free Book Centre", url: "http://www.freebookcentre.net/", category: "e-book", highlight: true, description: "Thousands of free downloadable books in Electrical, Mechanical, Civil, and Computer Engineering" },
  { sno: 23, name: "Comic Extra", url: "https://www.comicextra.com/", category: "e-book", description: "Visual and graphic narrative literature for creative storytelling" },
  { sno: 24, name: "AR BookFinder", url: "https://www.arbookfind.com/", category: "e-book", description: "Advanced search tool for readability scores, leveled books, and reading assessments" },
  { sno: 25, name: "Black Book Online", url: "http://www.blackbookonline.info/", category: "e-book", description: "Specialized directory for historical research, public records, and archives" },
  { sno: 26, name: "FictionDB", url: "https://www.fictiondb.com/", category: "e-book", description: "Extensive bibliographic book indexing and author series tracking" },
  { sno: 27, name: "Free Tech Books", url: "https://www.freetechbooks.com/", category: "e-book", highlight: true, description: "Freely accessible Computer Science, Engineering, and Programming books, textbooks and lecture notes" },
  { sno: 28, name: "IntechOpen Engineering Monographs", url: "https://www.intechopen.com/books", category: "e-book", description: "High-level monographs authored by Nobel laureates and leading industry experts" },
  { sno: 29, name: "eBooks.com Academic", url: "https://www.ebooks.com/en-in/", category: "e-book", description: "Leading international retailer of digital textbooks with robust reading apps" },
  { sno: 30, name: "Get Free Books", url: "https://www.getfreebooks.com/", category: "e-book", description: "Curated site with completely legal free books covering technology and self-improvement" },
];

export const freeCourseMaterials: DigitalPortal[] = [
  { sno: 1, name: "MIT OpenCourseWare (OCW)", url: "https://ocw.mit.edu", category: "course", highlight: true, description: "Unrivalled open publication of virtually all MIT course content, syllabi, notes, and problem sets" },
  { sno: 2, name: "NPTEL (IITs & IISc)", url: "https://nptel.ac.in", category: "course", highlight: true, description: "Premier engineering courseware initiative by 7 IITs and IISc Bangalore, perfectly aligned with Anna University syllabi" },
  { sno: 3, name: "Coursera", url: "https://www.coursera.org/in", category: "course", highlight: true, description: "World-class online courses, specializations, and degree components from Stanford, Google, and IBM" },
  { sno: 4, name: "The Khan Academy", url: "https://www.khanacademy.org/", category: "course", description: "Master fundamental STEM concepts, differential calculus, and physics through interactive exercises" },
  { sno: 5, name: "edX", url: "https://www.edx.org/", category: "course", highlight: true, description: "High-level MOOCs founded by Harvard and MIT spanning computer science, data science, and robotics" },
  { sno: 6, name: "Udacity", url: "https://www.udacity.com/", category: "course", description: "Industry-aligned nanodegree programs in AI, autonomous systems, cloud architecture, and data engineering" },
  { sno: 7, name: "LinkedIn Learning (formerly Lynda)", url: "https://www.linkedin.com/learning", category: "course", description: "Professional software skills, coding masterclasses, and corporate leadership tutorials" },
  { sno: 8, name: "Audible", url: "https://www.audible.in/", category: "course", description: "Audio editions of academic non-fiction, biographies, and technical deep-dives" },
  { sno: 9, name: "Google Books", url: "https://books.google.co.in/", category: "course", description: "Search the world's most comprehensive index of full-text books with extensive chapter previews" },
  { sno: 10, name: "wikiHow Professional", url: "https://www.wikihow.com/", category: "course", description: "Step-by-step visual guides on practical workshop skills, software setups, and laboratory practices" },
  { sno: 11, name: "Do It Yourself (DIY)", url: "https://www.doityourself.com/", category: "course", description: "Practical hands-on repair guides, electrical wiring basics, and workshop safety" },
  { sno: 12, name: "Instructables", url: "https://www.instructables.com/", category: "course", highlight: true, description: "Maker community documentation for IoT, Arduino, Raspberry Pi, 3D printing, and robotics prototypes" },
  { sno: 13, name: "Let's Make Robots (RobotShop)", url: "https://www.robotshop.com/community", category: "course", description: "Global robotics community with step-by-step builds, micro-controller code, and motor interfacing" },
  { sno: 14, name: "WonderHowTo", url: "https://www.wonderhowto.com/", category: "course", description: "Technical walkthroughs and hacking tutorials focusing on cybersecurity and digital tools" },
  { sno: 15, name: "IKEA Hackers", url: "https://ikeahackers.net/", category: "course", description: "Innovative modular design and fabrication ideas inspiring creative engineering hacks" },
  { sno: 16, name: "Make Projects", url: "https://makeprojects.com/", category: "course", description: "Hardware innovation incubator and project showcase for student engineering hackathons" },
  { sno: 17, name: "TED Talks", url: "https://www.ted.com/", category: "course", description: "Influential talks from world-leading scientists, tech innovators, and global changemakers" },
  { sno: 18, name: "HowStuffWorks", url: "https://www.howstuffworks.com/", category: "course", description: "Clear, engaging breakdowns of how engineering machines, automotive engines, and digital networks operate" },
  { sno: 19, name: "YouTube Learning Channels", url: "https://www.youtube.com/", category: "course", description: "Curated engineering playlists, 3Blue1Brown, MIT OpenCourseWare videos, and lab demonstrations" },
  { sno: 20, name: "Udemy", url: "https://www.udemy.com/", category: "course", description: "On-demand courses taught by practitioners in web development, CAD modeling, and cloud computing" },
  { sno: 21, name: "Skillshare", url: "https://www.skillshare.com/", category: "course", description: "Creative workshops covering UI/UX design, data visualization, and creative technology" },
  { sno: 22, name: "Teachable", url: "https://teachable.com/", category: "course", description: "Independent expert course academies and specialized certification bootcamps" },
];

export const libraryServices: LibraryService[] = [
  {
    id: "circulation",
    title: "Book Issue & Return (Circulation)",
    description: "Automated lending services powered by barcode scanners and Koha ILMS, enabling instantaneous checkouts, returns, and renewals.",
    iconName: "BookOpenCheck",
    badge: "Core Service",
  },
  {
    id: "internet-intranet",
    title: "Internet & Intranet Facility",
    description: "Dedicated digital terminal zone equipped with high-speed leased line internet, campus Wi-Fi, and access to internal college repositories.",
    iconName: "Wifi",
    badge: "Digital Zone",
  },
  {
    id: "reservation",
    title: "Reservation of Books",
    description: "Students and faculty can reserve books in high demand. Automated notifications alert users upon return; books are retained for 1 full day.",
    iconName: "CalendarClock",
  },
  {
    id: "reference",
    title: "Reference Section",
    description: "Quiet, air-cooled study section housing 1,885+ reference volumes, encyclopedias, yearbooks, and national code standards for on-premise consultation.",
    iconName: "BookMarked",
    badge: "Quiet Zone",
  },
  {
    id: "opac",
    title: "Online Public Access Catalogue (OPAC)",
    description: "Search the complete library inventory by Title, Author, Subject, ISBN, or Department from any campus terminal or mobile device.",
    iconName: "Search",
    badge: "Koha ILMS",
  },
  {
    id: "overdue-reminders",
    title: "Overdue Reminders",
    description: "Automated notification reminders delivered before and after the 30-day loan duration, helping borrowers return materials without penalty.",
    iconName: "BellRing",
  },
  {
    id: "reprographic",
    title: "Reprographic & Scanning Services",
    description: "In-house Xerox and high-resolution scanning facilities available at subsidized student rates in compliance with academic copyright norms.",
    iconName: "Printer",
    badge: "On-Campus",
  },
  {
    id: "group-discussion",
    title: "Group Discussion Room",
    description: "Acoustically treated conference room for collaborative projects, peer tutoring, seminar rehearsals, and committee deliberations.",
    iconName: "Users",
    badge: "Collaborative",
  },
  {
    id: "ill",
    title: "Inter-Library Loan (ILL)",
    description: "Through our institutional DELNET membership, any book, monograph, or journal article not in our physical stacks is arranged on loan.",
    iconName: "Share2",
    badge: "DELNET ILL",
  },
  {
    id: "periodical-utilization",
    title: "Periodicals & Newspaper Gallery",
    description: "Spacious reading lounge displaying 35 print national journals, 20 popular magazines, and 5 daily newspapers updated every morning.",
    iconName: "Newspaper",
  },
];

export const borrowingEligibility: BorrowingEligibility[] = [
  {
    category: "Teaching Staffs",
    entitlement: "10 Books",
    booksCount: 10,
    loanPeriod: "30 Days",
    description: "Faculty members supporting course delivery, curriculum enhancement, and research literature reviews",
  },
  {
    category: "UG Students (B.E. / B.Tech)",
    entitlement: "18 Books",
    booksCount: 18,
    loanPeriod: "30 Days",
    description: "Undergraduate students are entitled to a generous quota of 18 books per semester for coursework and projects",
  },
  {
    category: "PG Students (M.E.)",
    entitlement: "18 Books",
    booksCount: 18,
    loanPeriod: "30 Days",
    description: "Postgraduate candidates supporting specialized coursework, seminar preparation, and thesis research",
  },
  {
    category: "Supporting & Administrative Staff",
    entitlement: "04 Books",
    booksCount: 4,
    loanPeriod: "30 Days",
    description: "Technical, laboratory, and administrative personnel across all institutional departments",
  },
];

export const overdueFineSlabs = [
  {
    period: "After 30 Days: First 7 Days",
    slab: "Days 1 to 7",
    rate: "₹ 1.00",
    unit: "per day per book",
    severity: "low",
    badge: "Grace Period Rate",
  },
  {
    period: "After 30 Days: 8 to 14 Days",
    slab: "Days 8 to 14",
    rate: "₹ 2.00",
    unit: "per day per book",
    severity: "medium",
    badge: "Standard Overdue Rate",
  },
  {
    period: "After 30 Days: 15 Days Onwards",
    slab: "Day 15 Onwards",
    rate: "₹ 5.00",
    unit: "per day per book",
    severity: "high",
    badge: "Extended Overdue Rate",
  },
];

export const libraryRules = [
  {
    id: 1,
    rule: "All Staff and Students of MSAJCE are bonafide members of the College Library upon enrollment.",
  },
  {
    id: 2,
    rule: "UG and PG students are eligible to borrow up to 18 books simultaneously for a loan period of 30 days.",
  },
  {
    id: 3,
    rule: "Teaching staff can borrow up to 10 books; administrative staff can borrow up to 4 books for 30 days.",
  },
  {
    id: 4,
    rule: "Strict Reference books, Encyclopedias, Handbooks, and current Periodicals will NOT be issued for home lending.",
  },
  {
    id: 5,
    rule: "Library ID is strictly non-transferable. Members must immediately notify the Librarian in writing of any lost card or contact address change.",
  },
  {
    id: 6,
    rule: "Users may reserve an issued book in circulation. The reserved volume will be retained at the circulation desk for exactly 1 day following its return.",
  },
  {
    id: 7,
    rule: "Overdue fines are levied on expired loans: ₹1/day for days 1–7; ₹2/day for days 8–14; ₹5/day from day 15 onwards.",
  },
  {
    id: 8,
    rule: "Pin-drop silence must be observed at all times across reading halls and stack sections. Mobile phones must be set to silent.",
  },
  {
    id: 9,
    rule: "Personal belongings (bags, briefcases, heavy coats, notebooks, and folders) must be deposited in the property racks at the library entrance.",
  },
  {
    id: 10,
    rule: "Loss of books must be reported immediately to the Librarian. If the borrower is unable to replace the exact edition, double the purchase cost will be recovered.",
  },
  {
    id: 11,
    rule: "All books must be returned to the Library when recalled for mandatory annual physical stock verification.",
  },
  {
    id: 12,
    rule: "Borrowers must inspect books before checkout to ensure pages and plates are intact. Any damage discovered upon return will be the borrower's liability.",
  },
];

export const institutionalMemberships = [
  {
    id: "delnet",
    name: "Developing Library Network (DELNET)",
    scope: "National & International Library Network",
    features: [
      "Access to Union Catalogue of Books and Periodicals across 8,000+ member institutions",
      "Inter-Library Loan (ILL) Service: Avail any physical book or monograph on temporary loan",
      "Document Delivery: Receive Xerox or soft copies of research journal articles within 48 hours",
      "Direct portal access to 1,379+ indexed electronic journals and e-books",
    ],
    website: "https://delnet.in/",
    badge: "Flagship Network Partner",
  },
  {
    id: "jgate",
    name: "J-Gate Plus Database",
    scope: "Global Scholarly Journal Indexing Platform",
    features: [
      "Database indexing over 50,684 peer-reviewed electronic journals globally",
      "Unified discovery across Engineering & Technology, Basic Sciences, and Social Sciences",
      "Direct linking to full-text publisher articles, DOIs, and institutional repositories",
      "Updated daily with advanced boolean, keyword, author, and citation search metrics",
    ],
    website: "https://jgateplus.com/",
    badge: "Research Database",
  },
];

export const libraryCommittee: CommitteeMember[] = [
  { sno: 1, name: "Dr. K. S. Srinivasan", designation: "Principal", role: "Chairman", type: "Leadership" },
  { sno: 2, name: "Dr. A. Balakrishnan", designation: "Head - Academics", role: "Member", type: "Leadership" },
  { sno: 3, name: "Dr. B. Janarthanan", designation: "Head – Research", role: "Member", type: "Leadership" },
  { sno: 4, name: "Dr. I. Manju", designation: "Head - IQAC", role: "Member", type: "Leadership" },
  { sno: 5, name: "Dr. Kamalaselvan. A", designation: "Library In-Charge", role: "Secretary", type: "Faculty" },
  { sno: 6, name: "Mrs. Anusuya .P", designation: "AP / ECE & Library In-Charge", role: "Member Secretary", type: "Faculty", department: "ECE" },
  { sno: 7, name: "All Heads of Departments", designation: "HoDs (All Engineering & S&H)", role: "Member", type: "Faculty" },
  { sno: 8, name: "Mr. S. Sudhakar", designation: "Chief Librarian", role: "Member", type: "Library Staff" },
  { sno: 9, name: "Mr. John Anish", designation: "Librarian", role: "Member", type: "Library Staff" },
  { sno: 10, name: "Mr. Arshad .K", designation: "III-Yr EEE Student Representative", role: "Member", type: "Student", department: "EEE" },
  { sno: 11, name: "Ms. Swetha Maria Saustina .S", designation: "III-Yr EEE Student Representative", role: "Member", type: "Student", department: "EEE" },
  { sno: 12, name: "Mr. Mohamed Nayeem .B", designation: "III-Yr ECE Student Representative", role: "Member", type: "Student", department: "ECE" },
  { sno: 13, name: "Ms. D. Kamali", designation: "III-Yr EEE Student Representative", role: "Member", type: "Student", department: "EEE" },
  { sno: 14, name: "Mr. Vasanthakumar .N", designation: "III-Yr MECH Student Representative", role: "Member", type: "Student", department: "Mechanical" },
  { sno: 15, name: "Mr. Salman .S", designation: "III-Yr MECH Student Representative", role: "Member", type: "Student", department: "Mechanical" },
  { sno: 16, name: "Mr. Musthaq .J", designation: "III-Yr CIVIL Student Representative", role: "Member", type: "Student", department: "Civil" },
  { sno: 17, name: "Mr. Shanmugam .S", designation: "III-Yr CIVIL Student Representative", role: "Member", type: "Student", department: "Civil" },
  { sno: 18, name: "Ms. Revathi .U", designation: "III-Yr IT Student Representative", role: "Member", type: "Student", department: "IT" },
  { sno: 19, name: "Mr. Imamm Jaffar .J", designation: "III-Yr IT Student Representative", role: "Member", type: "Student", department: "IT" },
  { sno: 20, name: "Mr. Elango .V", designation: "III-Yr CSE Student Representative", role: "Member", type: "Student", department: "CSE" },
  { sno: 21, name: "Ms. Vasumathi .A", designation: "III-Yr CSE Student Representative", role: "Member", type: "Student", department: "CSE" },
];
