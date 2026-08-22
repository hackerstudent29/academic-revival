export interface EventItem {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string; // e.g., "Aug 28, 2026"
  time?: string; // e.g., "09:00 AM - 04:00 PM"
  venue?: string;
  image: string;
  eligibility?: string; // e.g., "All Engineering Students", "3rd & 4th Year IT/CS"
  teamSize?: string; // e.g., "Individual", "Teams of 2-4"
  registrationDeadline?: string;
}

export const allEvents: EventItem[] = [
  // --- Homepage Featured & Sidebar Events ---
  {
    id: "featured-1",
    category: "CAMPUS NEWS",
    title: "Summer 2026 Research Spotlight: MSAJCE Students Study Methane and Earthquake Activity at La Brea Tar Pits",
    description: `During the Seaver summer 2026 research program, MSAJCE students partnered with faculty mentors to study methane seepage and seismic activity at the world-famous La Brea Tar Pits.\n\nThis unprecedented access allowed our civil engineering and earth sciences departments to deploy cutting-edge IoT sensors, modeling real-time data back to the campus labs. The students presented their findings to a panel of urban planning experts, potentially influencing local zoning and construction regulations in seismically active areas.`,
    date: "August 18, 2026",
    time: "10:00 AM - 12:00 PM",
    venue: "Main Auditorium",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop",
    eligibility: "Open to all students and faculty",
    teamSize: "N/A",
  },
  {
    id: "featured-2",
    category: "INNOVATION",
    title: "New AI Research Center Opens on Campus",
    description: `MSAJCE inaugurates a state-of-the-art Artificial Intelligence research center to foster interdisciplinary collaboration and technological breakthroughs.\n\nEquipped with massive GPU clusters and dedicated collaborative workspaces, the new center aims to be the hub for all machine learning, robotics, and data science initiatives at the college. The inauguration ceremony will feature a keynote address from industry leaders from top tier tech giants.`,
    date: "September 5, 2026",
    time: "09:00 AM - 01:00 PM",
    venue: "AI Research Block, 2nd Floor",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    eligibility: "By Invitation Only",
    teamSize: "N/A",
  },
  {
    id: "featured-3",
    category: "GLOBAL OUTREACH",
    title: "Students Participate in International Tech Symposium in Tokyo",
    description: `A delegation of 15 engineering students presented their award-winning sustainable energy projects at the Global Tech Symposium in Tokyo, Japan.\n\nThe trip was fully sponsored by the college's alumni association and several industry partners. The students had the opportunity to interact with peers from over 40 countries, showcasing MSAJCE's commitment to solving global energy crises through innovative engineering.`,
    date: "October 12, 2026",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    eligibility: "Selected Student Delegation",
  },
  {
    id: "side-1",
    category: "CAMPUS COMMUNITY",
    title: "Buster Blazed a Trail as MSAJCE's First Campus Dog",
    description: "Meet Buster, the golden retriever who has officially joined the MSAJCE family as our first campus therapy dog. Buster will be available during midterms and finals week to help students de-stress.",
    date: "August 11, 2026",
    venue: "Main Campus Quad",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=600&auto=format&fit=crop",
    eligibility: "All students",
  },
  {
    id: "side-4",
    category: "ACADEMICS",
    title: "Robotics Workshop: Build Your First Autonomous Drone",
    description: "A hands-on workshop designed for beginners. Learn the basics of aerodynamics, flight controllers, and write your first PID loop to achieve stable hover. Kits will be provided to all registered participants.",
    date: "August 20, 2026",
    time: "09:30 AM - 04:30 PM",
    venue: "Engineering Lab 3",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    eligibility: "1st and 2nd Year Students",
    teamSize: "Individual",
    registrationDeadline: "August 18, 2026",
  },
  {
    id: "side-5",
    category: "TECH FEST",
    title: "Annual Hackathon 'Innovate 2026' Registrations Open",
    description: "The biggest coding event of the year is back! 36 hours of non-stop coding, caffeine, and creativity. Build solutions for real-world problems presented by our industry sponsors.",
    date: "September 2, 2026",
    time: "Starts at 08:00 AM",
    venue: "Computer Science Block",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop",
    eligibility: "All Engineering Students",
    teamSize: "Teams of 3-4",
    registrationDeadline: "August 25, 2026",
  },
  {
    id: "side-6",
    category: "SEMINAR",
    title: "Guest Lecture: AI in Healthcare by Dr. Sarah Jenkins",
    description: "Join us for an insightful lecture on how artificial intelligence and machine learning are revolutionizing diagnostics and personalized medicine. Followed by a Q&A session.",
    date: "September 15, 2026",
    time: "02:00 PM - 04:00 PM",
    venue: "Main Auditorium",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
    eligibility: "Open to all",
  },
  
  // --- Department Specific Events (News & Events Tab) ---
  {
    id: "dept-symposium",
    title: "National Level Technical Symposium & Project Expo 2026",
    date: "Aug 28, 2026",
    time: "09:00 AM - 05:00 PM",
    venue: "Main Campus Auditorium",
    category: "Seminars",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
    description: "A premier national-level technical symposium gathering the brightest engineering minds from across the country. The event features paper presentations, technical quizzes, robotics competitions, and a massive project expo showcasing final year innovations.",
    eligibility: "All Engineering Students (Inter-college)",
    teamSize: "Varies by event",
    registrationDeadline: "Aug 20, 2026",
  },
  {
    id: "dept-conference",
    title: "International Conference on Engineering Innovations & Smart Systems",
    date: "Sep 15, 2026",
    time: "08:30 AM - 06:00 PM",
    venue: "Conference Hall B",
    category: "Research",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop",
    description: "A two-day international conference featuring keynote speakers from global tech universities. Researchers and PG students will present their published papers on smart grids, IoT architectures, and sustainable engineering.",
    eligibility: "PG Students, Researchers, Faculty",
    teamSize: "Individual or Co-authors",
    registrationDeadline: "Sep 01, 2026",
  },
  {
    id: "dept-placement",
    title: "Corporate Campus Placement Drive by Tier-1 Tech Giants",
    date: "Oct 10, 2026",
    time: "08:00 AM - Onwards",
    venue: "Placement Cell & Computing Labs",
    category: "Placements",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=600&auto=format&fit=crop",
    description: "The highly anticipated annual placement drive for final year students. Top product-based and service-based IT companies will be conducting aptitude tests, technical interviews, and HR rounds. Ensure your resumes and portfolios are up to date.",
    eligibility: "Final Year Students (No standing arrears)",
    teamSize: "Individual",
    registrationDeadline: "Oct 05, 2026",
  },
  {
    id: "dept-workshop",
    title: "Hands-on Workshop: Applied Machine Learning",
    date: "Nov 05, 2026",
    time: "10:00 AM - 04:00 PM",
    venue: "AI & ML Lab, Block C",
    category: "Workshops",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    description: "An intensive, one-day workshop diving into the practical applications of Machine Learning using Python, Scikit-learn, and TensorFlow. Participants will build and train their own models on real-world datasets.",
    eligibility: "3rd & 4th Year Students",
    teamSize: "Individual",
    registrationDeadline: "Nov 01, 2026",
  },
  
  // --- Press Releases & Bottom Row ---
  {
    id: "bottom-1",
    category: "CAMPUS COMMUNITY",
    title: "Summer Innovation Fellowship: Students Explore Semiconductor Nanotechnology",
    description: "Our Summer Innovation Fellowship program continues to fund undergraduate research. This year, three distinct student groups made incredible strides in modeling semiconductor nanotechnology.",
    date: "July 10, 2026",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    eligibility: "All students",
  },
  {
    id: "bottom-2",
    category: "PRESS RELEASES",
    title: "Mohamed Sathak Trust Digitizes 40-Year Heritage Archive and Research Publications",
    description: "In a monumental effort to preserve institutional history, the Mohamed Sathak Trust has successfully digitized over 40 years of academic research, student publications, and heritage photography.",
    date: "June 22, 2026",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop",
    eligibility: "Public",
  },
  {
    id: "bottom-3",
    category: "PRESS RELEASES",
    title: "MSAJCE Selected as Regional Nodal Center for Green Energy & Sustainability Research",
    description: "The national board of technical education has selected MSAJCE to serve as the regional nodal center for advancing green energy initiatives, bringing in a massive multi-year grant for our renewable energy labs.",
    date: "May 15, 2026",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop",
    eligibility: "Public",
  }
];
