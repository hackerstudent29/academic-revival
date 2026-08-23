import pkg from 'pg';
const { Client } = pkg;
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const dbUrl = "postgresql://postgres.ounikqjoupdiewkyjusw:RAMAZENDRUM2007@aws-0-ap-southeast-2.pooler.supabase.com:5432/postgres";

const client = new Client({
  connectionString: dbUrl,
  ssl: { rejectUnauthorized: false }
});

const TESTIMONIALS = [
  {
    id: "test-1",
    quote: "The hands-on projects and industry-aligned curriculum at MSAJCE completely transformed my career trajectory.",
    author: "Aarav Sharma",
    position: "SDE II",
    companyLogo: "/logos/amazon.svg",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of Aarav Sharma",
  },
  {
    id: "test-2",
    quote: "Amazing faculty and supportive environment. I built a solid foundation that helped me crack top tech interviews.",
    author: "Priya Patel",
    position: "Software Engineer",
    companyLogo: "/logos/tcs.svg",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of Priya Patel",
  },
  {
    id: "test-3",
    quote: "The startup incubator at the campus gave me the exact push I needed to understand product development at scale.",
    author: "Rahul Kumar",
    position: "Product Manager",
    companyLogo: "/logos/zoho.svg",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of Rahul Kumar",
  },
  {
    id: "test-4",
    quote: "From state-of-the-art labs to incredible research opportunities, my 4 years here were genuinely the best of my life.",
    author: "Sneha Gupta",
    position: "Data Scientist",
    companyLogo: "/logos/ibm.svg",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of Sneha Gupta",
  },
  {
    id: "test-5",
    quote: "The placement cell is fantastic! They brought in top-tier companies and ensured we were well-prepared.",
    author: "Vikram Singh",
    position: "Tech Lead",
    companyLogo: "/logos/infosys.svg",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of Vikram Singh",
  },
  {
    id: "test-6",
    quote: "I was challenged to push my limits every single day. The competitive yet supportive environment shaped my career.",
    author: "Ananya Desai",
    position: "System Analyst",
    companyLogo: "/logos/cognizant.svg",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of Ananya Desai",
  }
];

// Fetch events from the file (we'll just copy a few to seed it)
const EVENTS = [
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
    id: "bottom-1",
    category: "CAMPUS COMMUNITY",
    title: "Summer Innovation Fellowship: Students Explore Semiconductor Nanotechnology",
    description: "Our Summer Innovation Fellowship program continues to fund undergraduate research. This year, three distinct student groups made incredible strides in modeling semiconductor nanotechnology.",
    date: "July 10, 2026",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
    eligibility: "All students",
  }
];

async function migrate() {
  await client.connect();
  console.log("Fetching existing homepage content...");
  
  const result = await client.query(`SELECT content FROM site_content WHERE page_name = 'home'`);
  let content = result.rows[0]?.content || {};
  
  // Seed arrays
  content.events = EVENTS;
  content.testimonials = TESTIMONIALS;

  console.log("Upserting to Supabase via PG...");
  
  await client.query(`
    INSERT INTO site_content (page_name, content)
    VALUES ($1, $2)
    ON CONFLICT (page_name) DO UPDATE SET content = EXCLUDED.content
  `, ['home', JSON.stringify(content)]);

  console.log("Migration successful!");
  await client.end();
}

migrate();
