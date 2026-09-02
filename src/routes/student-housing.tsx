import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Search
} from "lucide-react";

const title = "Living On Campus | MSAJCE Hostel Facilities";
const description = "Explore MSAJCE student housing, residence halls, mess facilities, guidelines, and office of residence life.";

export const Route = createFileRoute("/student-housing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
    ],
  }),
  component: StudentHousingPage,
});

// FAQ Item Data
interface FaqItem {
  id: string;
  category: "all" | "rules" | "mess" | "girls" | "facilities";
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "faq-1",
    category: "rules",
    question: "What are the hostel curfew timings for students?",
    answer: "The standard evening curfew is 7:00 PM for all residential students. Late entries are strictly monitored and require prior written authorization or parent confirmation submitted to the Warden."
  },
  {
    id: "faq-2",
    category: "facilities",
    question: "How is the room allotment process managed?",
    answer: "Rooms are allotted by the Warden (Principal's Office) at the beginning of each academic year based on course level, year of study, and availability. Roommate requests are considered wherever possible."
  },
  {
    id: "faq-3",
    category: "mess",
    question: "What dining options are provided in the hostel mess?",
    answer: "The hostel mess serves 4 nutritious meals daily (Breakfast, Lunch, Evening Snacks with Tea/Coffee, and Dinner). Menus feature balanced South Indian & North Indian vegetarian and non-vegetarian dishes."
  },
  {
    id: "faq-4",
    category: "girls",
    question: "How is transportation arranged for the Sholinganallur Girls Hostel?",
    answer: "Dedicated MSAJCE college buses provide complimentary, timed shuttle services between the Sholinganallur Girls Hostel (5 km from campus) and the main academic campus every morning and evening."
  },
  {
    id: "faq-5",
    category: "rules",
    question: "What is the policy regarding visitors and parents?",
    answer: "Only authorized parents and local guardians registered in the official visitor list are permitted to visit students. Visiting hours are on Sundays and official holidays from 11:00 AM to 6:00 PM."
  },
  {
    id: "faq-6",
    category: "facilities",
    question: "Is high-speed internet and power backup available in the hostel?",
    answer: "Yes, 24/7 high-speed Wi-Fi access is provided across all hostel blocks, alongside uninterrupted generator power backup for study halls and common areas."
  },
  {
    id: "faq-7",
    category: "facilities",
    question: "What medical assistance is available on campus?",
    answer: "An on-campus health clinic with a resident medical practitioner and first-aid center is active 24/7. Emergency transportation/ambulance services are available for immediate hospital visits."
  }
];

// Team Members (Carousel)
const teamMembers = [
  {
    id: 1,
    name: "Dr. Arlene Adams Manning",
    role: "Director of Residence Life",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    buttonText: "Contact",
    variant: "blue",
    bio: "Overseeing student housing operations, residential programs, and campus community standards."
  },
  {
    id: 2,
    name: "Sandra Moreau",
    role: "Warden (Girls Residence)",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    buttonText: "Contact",
    variant: "blue",
    bio: "Managing the Sholinganallur Girls Hostel, safety protocols, and resident care."
  },
  {
    id: 3,
    name: "Andrew Swain",
    role: "Warden (Boys Residence)",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    buttonText: "Contact",
    variant: "blue",
    bio: "Supervising the 3 Boys Hostel blocks on main campus, floor advisers, and sports activities."
  },
  {
    id: 4,
    name: "Resident Advisors",
    role: "Student Support Team",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    buttonText: "Learn More",
    variant: "gold",
    bio: "Dedicated 24/7 peer advisers assisting residents with transition, peer mentoring, and events."
  }
];

// 6 Campus Image Cards
const campusCards = [
  {
    id: 1,
    title: "Watch Residence Hall Room Tours",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    buttonText: "Learn More",
    link: "#halls"
  },
  {
    id: 2,
    title: "What Do Residence Halls Cost?",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    buttonText: "Learn More",
    link: "#matrix"
  },
  {
    id: 3,
    title: "Types of Housing",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    buttonText: "Learn More",
    link: "#halls"
  },
  {
    id: 4,
    title: "Sophomore Housing",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    buttonText: "Learn More",
    link: "#upperclass"
  },
  {
    id: 5,
    title: "Student Spaces",
    image: "https://images.unsplash.com/photo-1519452314541-e945c7ea9dc6?auto=format&fit=crop&w=800&q=80",
    buttonText: "Learn More",
    link: "#halls"
  },
  {
    id: 6,
    title: "Housing Info for J-Term, Maymester, and Summer",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    buttonText: "Learn More",
    link: "#faq"
  }
];

const rules = [
  "Students must occupy the rooms allotted to them by the Warden (Principal).",
  "Students should refrain from anti-social and undesirable activities such as consumption of alcohol, tobacco, gambling, ragging etc.",
  "Students are responsible for the cleanliness of their rooms.",
  "No student will be allowed to leave the hostel based on a phone call.",
  "Parents are requested to give a list of authorized visitors / local guardians. Visitors not mentioned in the list will not be permitted to visit the students in the hostel.",
  "Students will be permitted to go home only if the college is closed continuously for five days or more.",
  "Any student wishing to attend a function in the house, marriage or any other ceremony will be permitted to go only if the request is made by the parents to the Principal.",
  "Visitors are allowed on holidays from 11.00 A.M. to 6.00 P.M."
];

function StudentHousingPage() {
  // Accordion state for "Your Story Starts Here"
  const [openStoryIndex, setOpenStoryIndex] = useState<number | null>(0);

  // FAQ State
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");
  const [faqSearch, setFaqSearch] = useState("");

  // Team Modal
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  const filteredFaqs = faqData.filter(item => 
    item.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
    item.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <main className="bg-[#F9F8F6] dark:bg-background text-foreground font-sans min-h-screen">
      
      {/* =========================================================================
          SECTION 1: HERO BANNER ("Living On Campus")
          ========================================================================= */}
      <section className="relative bg-[#7A1C30] dark:bg-[#5C1424] text-white pt-10 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-tight text-white mb-4">
              Living On Campus
            </h1>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal mb-6 max-w-xl">
              Move in, unpack, and open the door to something new. Late-night conversations, spontaneous study sessions, and friends who become family are just the beginning!
            </p>
            
            {/* Dropdown Select Box */}
            <div className="relative w-full max-w-xs">
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    const el = document.getElementById(e.target.value);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full bg-white text-[#1C1917] font-semibold text-sm px-4 py-3 rounded appearance-none cursor-pointer focus:outline-none pr-10 shadow-md"
                defaultValue=""
              >
                <option value="" disabled>Jump to a section...</option>
                <option value="story">Your Story Starts Here</option>
                <option value="halls">Residence Halls</option>
                <option value="upperclass">Upperclass Housing</option>
                <option value="more">Even More About Campus</option>
                <option value="office">About Residence Life</option>
                <option value="team">Meet the Team</option>
                <option value="faq">Frequently Asked Questions</option>
                <option value="matrix">Hostel Specifications</option>
              </select>
              <ChevronDown className="w-5 h-5 text-gray-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Right Image Container (Flat static image, no hover zoom) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                alt="Students Living On Campus"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: SECOND INTRO BLOCK & "YOUR STORY STARTS HERE" ACCORDION
          ========================================================================= */}
      <section id="story" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: 2 Intro Paragraphs */}
          <div className="lg:col-span-6 space-y-4 text-base sm:text-lg text-foreground/90 leading-relaxed font-normal">
            <p>
              Flagler College (and MSAJCE) is move-in ready, conveniently located, and opens the door to something new. Late-night conversations, spontaneous study sessions, and friends who become family are just the beginning!
            </p>
            <p className="text-muted-foreground text-sm sm:text-base">
              Learn about room allocations, floor communities, amenities, and resident life to prepare for your residential journey.
            </p>
          </div>

          {/* Right Column: Dark Crimson Accordion */}
          <div className="lg:col-span-6 border border-foreground/15 rounded-xl overflow-hidden shadow-md">
            
            {/* Header Strip */}
            <div className="bg-[#7A1C30] dark:bg-[#5C1424] text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-serif font-bold text-white">
                Your Story Starts Here
              </h3>
              <ChevronUp className="w-5 h-5 text-white/80" />
            </div>

            {/* Accordion Body */}
            <div className="bg-card dark:bg-card divide-y divide-foreground/10">
              
              {/* Item 1 */}
              <div className="px-6 py-4">
                <button
                  onClick={() => setOpenStoryIndex(openStoryIndex === 0 ? null : 0)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-foreground group-hover:text-[#7A1C30]">
                    Giving you peace of mind... and 24/7 care
                  </span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openStoryIndex === 0 ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {openStoryIndex === 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Dedicated resident wardens, 24/7 gated security, medical assistance, and strict safety guidelines ensure peace of mind for parents and students alike.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Item 2 */}
              <div className="px-6 py-4">
                <button
                  onClick={() => setOpenStoryIndex(openStoryIndex === 1 ? null : 1)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-foreground group-hover:text-[#7A1C30]">
                    Great Food. Great Company. Endless Selection.
                  </span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openStoryIndex === 1 ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {openStoryIndex === 1 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Nutritious 4-meal daily menu featuring South & North Indian dishes in a clean, spacious dining hall with dedicated staff.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Item 3 */}
              <div className="px-6 py-4">
                <button
                  onClick={() => setOpenStoryIndex(openStoryIndex === 2 ? null : 2)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-foreground group-hover:text-[#7A1C30]">
                    Getting Around Campus & Shuttle Transport
                  </span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openStoryIndex === 2 ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {openStoryIndex === 2 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        Convenient access to classrooms, laboratories, and sports grounds, with free shuttle bus transport for off-campus girls hostel.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FEATURED RESIDENCE HALLS ("Find the Hall That Feels Like Home")
          ========================================================================= */}
      <section id="halls" className="py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-24">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground tracking-tight mb-3">
            Find the Hall That Feels Like Home
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Find the residence hall that suits your preferences... room sizes, options, amenities... we will help you find the hall that feels like home.
          </p>
        </div>

        {/* Carousel Controls Container */}
        <div className="relative">
          
          <div className="space-y-12">
            
            {/* Card 1: Ponce de Leon Hall */}
            <div className="grid grid-cols-1 lg:grid-cols-12 rounded-xl overflow-hidden shadow-lg border border-foreground/10">
              <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[400px] bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"
                  alt="Ponce de Leon Hall"
                  className="w-full h-full object-cover block"
                />
              </div>
              <div className="lg:col-span-5 bg-[#7A1C30] dark:bg-[#5C1424] text-white p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                    Ponce de Leon Hall
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-5">
                    Ponce de Leon Hall has direct access to classrooms, late-night study sessions, and student lounges. Features iconic architecture and central campus proximity.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-white/90 font-medium mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-[#E5A93C] font-bold">•</span>
                      <span>Historic restoration & modern amenities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E5A93C] font-bold">•</span>
                      <span>Neighborhood atmosphere</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E5A93C] font-bold">•</span>
                      <span>Historic Resort Tour</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3 pt-4 border-t border-white/20">
                  <a
                    href="#matrix"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded text-xs font-bold text-[#1C1917] bg-[#E5A93C] hover:bg-[#d89b30] transition-colors shadow-sm"
                  >
                    Read about renovations
                  </a>
                  <a
                    href="#faq"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 transition-colors"
                  >
                    Watch a Room Tour
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Cedar Hall */}
            <div className="grid grid-cols-1 lg:grid-cols-12 rounded-xl overflow-hidden shadow-lg border border-foreground/10">
              <div className="lg:col-span-5 bg-[#0F4C5C] dark:bg-[#0A343F] text-white p-8 sm:p-10 flex flex-col justify-between order-2 lg:order-1">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                    Cedar Hall
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-5">
                    Cedar Hall is a central residential hub featuring suite layouts, private study desks, and dedicated floor lounges.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-white/90 font-medium mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-[#E5A93C] font-bold">•</span>
                      <span>Spacious 4-person suite layout</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E5A93C] font-bold">•</span>
                      <span>Single bed availability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E5A93C] font-bold">•</span>
                      <span>Maintenance & laundry on site</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <a
                    href="#faq"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded text-xs font-bold text-[#1C1917] bg-[#E5A93C] hover:bg-[#d89b30] transition-colors shadow-sm"
                  >
                    Get a Room Tour
                  </a>
                </div>
              </div>
              <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[400px] bg-muted order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
                  alt="Cedar Hall"
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>

            {/* Card 3: Lantern Hall */}
            <div className="grid grid-cols-1 lg:grid-cols-12 rounded-xl overflow-hidden shadow-lg border border-foreground/10">
              <div className="lg:col-span-5 bg-[#0F4C5C] dark:bg-[#0A343F] text-white p-8 sm:p-10 flex flex-col justify-between order-2 lg:order-1">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                    Lantern Hall
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-5">
                    Cedar Hall/Lantern Hall offers single and double occupancy layouts with study desks, air conditioning, and quiet atmosphere.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-white/90 font-medium mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-[#E5A93C] font-bold">•</span>
                      <span>En-suite hot water facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E5A93C] font-bold">•</span>
                      <span>24/7 security supervision</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E5A93C] font-bold">•</span>
                      <span>High-speed Wi-Fi & LAN access</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <a
                    href="#upperclass"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded text-xs font-bold text-[#1C1917] bg-[#E5A93C] hover:bg-[#d89b30] transition-colors shadow-sm"
                  >
                    View Junior/Senior Housing
                  </a>
                </div>
              </div>
              <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[400px] bg-muted order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                  alt="Lantern Hall"
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>

            {/* Card 4: Lewis House */}
            <div className="grid grid-cols-1 lg:grid-cols-12 rounded-xl overflow-hidden shadow-lg border border-foreground/10">
              <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[400px] bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
                  alt="Lewis House"
                  className="w-full h-full object-cover block"
                />
              </div>
              <div className="lg:col-span-5 bg-[#7A1C30] dark:bg-[#5C1424] text-white p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                    Lewis House
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-5">
                    Lewis House offers specialized accommodations with communal spaces, reading rooms, and quiet study areas.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-white/90 font-medium mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-[#E5A93C] font-bold">•</span>
                      <span>Quiet study room access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E5A93C] font-bold">•</span>
                      <span>Air-conditioned rooms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E5A93C] font-bold">•</span>
                      <span>Priority mess access</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <a
                    href="#faq"
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded text-xs font-bold text-[#1C1917] bg-[#E5A93C] hover:bg-[#d89b30] transition-colors shadow-sm"
                  >
                    Watch a Room Tour
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 4: UPPERCLASS HOUSING
          ========================================================================= */}
      <section id="upperclass" className="py-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto py-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight mb-3">
            Upperclass Housing
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
            Upperclass housing options include our residence halls and executive suites for Junior and Senior scholars.
          </p>
          <a
            href="#matrix"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded text-xs font-bold text-[#1C1917] bg-[#E5A93C] hover:bg-[#d89b30] transition-colors shadow-sm"
          >
            View Junior/Senior Housing
          </a>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: "EVEN MORE ABOUT CAMPUS" (6 IMAGE CARDS GRID)
          ========================================================================= */}
      <section id="more" className="py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-24">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground tracking-tight">
            Even More About Campus
          </h2>
        </div>

        {/* 6 Image Cards Grid (3 cols x 2 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {campusCards.map((card) => (
            <div key={card.id} className="bg-card dark:bg-card border border-foreground/10 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
              
              {/* Flat Static Image */}
              <div className="aspect-[16/10] bg-muted relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover block"
                />
              </div>

              {/* Title & Gold Button */}
              <div className="p-6 flex-1 flex flex-col justify-between items-center text-center">
                <h3 className="text-base font-bold text-foreground mb-4 leading-snug">
                  {card.title}
                </h3>

                <a
                  href={card.link}
                  className="inline-flex items-center justify-center px-6 py-2 rounded text-xs font-bold text-[#1C1917] bg-[#E5A93C] hover:bg-[#d89b30] transition-colors shadow-sm"
                >
                  {card.buttonText}
                </a>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* =========================================================================
          SECTION 6: "ABOUT THE OFFICE OF RESIDENCE LIFE"
          ========================================================================= */}
      <section id="office" className="py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-24 border-t border-foreground/15">
        
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight mb-2">
            About the Office of Residence Life
          </h2>
        </div>

        {/* 3-Column Layout: Photo | Leadership | Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-card dark:bg-card border border-foreground/10 p-6 rounded-xl">
          
          {/* Photo */}
          <div className="md:col-span-3 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
              alt="Dr. Arlene Adams Manning"
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-2 border-[#7A1C30]"
            />
          </div>

          {/* Leadership */}
          <div className="md:col-span-5 text-sm leading-relaxed">
            <p className="font-bold text-xs uppercase text-[#7A1C30] dark:text-[#f87171] mb-1">Leadership</p>
            <h3 className="text-base font-bold text-foreground mb-1">Dr. Arlene Adams Manning</h3>
            <p className="text-muted-foreground text-xs">Director of Flagler House / MSAJCE Residence Life</p>
            <p className="text-muted-foreground text-xs mt-2">Overseeing campus community standards, housing policies, and resident care.</p>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 text-sm leading-relaxed border-t md:border-t-0 md:border-l border-foreground/10 pt-4 md:pt-0 md:pl-6">
            <p className="font-bold text-xs uppercase text-[#7A1C30] dark:text-[#f87171] mb-2">Contact Info</p>
            <p className="font-semibold text-foreground text-xs mb-1">Dr. Arlene Adams Manning</p>
            <p className="text-xs text-muted-foreground flex items-center gap-2 mb-1">
              <Phone className="w-3.5 h-3.5 text-[#7A1C30]" /> (904) 819-6334 / (044) 2747 3333
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#7A1C30]" /> reslife@flagler.edu / hostel@msajce-edu.in
            </p>
          </div>

        </div>

      </section>

      {/* =========================================================================
          SECTION 7: "MEET THE TEAM" (STAFF CAROUSEL)
          ========================================================================= */}
      <section id="team" className="py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-24">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight">
            Meet the Team
          </h2>
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/70 hover:bg-foreground/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-9 h-9 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/70 hover:bg-foreground/10 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 4 Staff Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-card dark:bg-card border border-foreground/10 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between">
              
              {/* Photo */}
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover block"
                />
              </div>

              {/* Blue/Gold Bottom Container */}
              <div className={`p-4 ${member.variant === "gold" ? "bg-[#E5A93C] text-[#1C1917]" : "bg-[#0F4C5C] text-white"} flex flex-col justify-between flex-1`}>
                <div>
                  <h3 className="text-sm sm:text-base font-bold mb-0.5 leading-snug">
                    {member.name}
                  </h3>
                  <p className={`text-xs ${member.variant === "gold" ? "text-gray-800" : "text-white/80"} mb-3`}>
                    {member.role}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedMember(member)}
                  className={`inline-flex items-center justify-center px-4 py-2 rounded text-xs font-bold transition-colors w-full cursor-pointer ${
                    member.variant === "gold"
                      ? "bg-[#1C1917] text-white hover:bg-black"
                      : "bg-[#7A1C30] text-white hover:bg-[#621626]"
                  }`}
                >
                  {member.buttonText}
                </button>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* =========================================================================
          SECTION 8: "FREQUENTLY ASKED QUESTIONS"
          ========================================================================= */}
      <section id="faq" className="py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-24 border-t border-foreground/15">
        
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight mb-2">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Dropdown / Search Box */}
        <div className="relative max-w-xl mb-6">
          <input
            type="text"
            value={faqSearch}
            onChange={(e) => setFaqSearch(e.target.value)}
            placeholder="What can do you recommend question? (Search FAQs...)"
            className="w-full bg-card dark:bg-card border border-foreground/20 text-foreground text-xs sm:text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-[#7A1C30] pr-10 shadow-sm"
          />
          <Search className="w-4 h-4 text-muted-foreground absolute right-3 top-1/2 -translate-y-1/2" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 max-w-4xl">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-card dark:bg-card border border-foreground/10 rounded-lg p-4 transition-colors"
            >
              <button
                onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between text-left cursor-pointer focus:outline-none gap-4"
              >
                <span className="text-sm sm:text-base font-bold text-foreground">
                  {faq.question}
                </span>
                <div className="text-foreground/70 shrink-0">
                  {openFaqId === faq.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence>
                {openFaqId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-foreground/10 mt-3">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </section>

      {/* =========================================================================
          SECTION 9: RULES & DINING MATRIX
          ========================================================================= */}
      <section id="matrix" className="py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-foreground/15 scroll-mt-24">
        
        {/* Rules */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight mb-4">
            Hostel Rules & Regulations
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {rules.map((rule, index) => (
              <div key={index} className="flex items-start gap-2.5 p-3 rounded-lg bg-card dark:bg-card border border-foreground/10">
                <CheckCircle2 className="w-4 h-4 text-[#7A1C30] dark:text-[#f87171] shrink-0 mt-0.5" />
                <p className="text-xs text-foreground/90 font-medium leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hostel Capacity Table */}
        <div>
          <h3 className="text-xl font-serif font-bold text-foreground tracking-tight mb-4">
            Hostel Capacity & Specifications
          </h3>
          <div className="overflow-x-auto rounded-xl border border-foreground/10 shadow-sm">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead className="bg-foreground/5 text-foreground">
                <tr className="border-b border-foreground/10">
                  <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">Metric / Category</th>
                  <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">Boys Hostel (Main Campus)</th>
                  <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">Girls Hostel (Sholinganallur)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-foreground/10 text-xs sm:text-sm">
                <tr>
                  <td className="py-3 px-4 font-bold text-foreground">Total Capacity</td>
                  <td className="py-3 px-4 text-muted-foreground font-semibold">480 Male Students</td>
                  <td className="py-3 px-4 text-muted-foreground font-semibold">210 Female Students</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-foreground">No. of Residential Blocks</td>
                  <td className="py-3 px-4 text-muted-foreground">3 Blocks</td>
                  <td className="py-3 px-4 text-muted-foreground">1 Block Enclave</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-foreground">Non-AC Rooms</td>
                  <td className="py-3 px-4 text-muted-foreground">233 Rooms</td>
                  <td className="py-3 px-4 text-muted-foreground">71 Rooms</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-foreground">AC Rooms</td>
                  <td className="py-3 px-4 text-muted-foreground">6 Executive Rooms</td>
                  <td className="py-3 px-4 text-muted-foreground">Available on Request</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-foreground">Room Occupancy</td>
                  <td className="py-3 px-4 text-muted-foreground">2 per room</td>
                  <td className="py-3 px-4 text-muted-foreground">3 per room</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-foreground">Included Furnishings</td>
                  <td className="py-3 px-4 text-muted-foreground" colSpan={2}>
                    Cot, Mattress, Study Desk, Chair, Personal Wardrobe, Lamp, Ceiling Fan, Solar Hot Water, Wi-Fi & TV Lounge access.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </section>

      {/* =========================================================================
          TEAM MEMBER DETAIL MODAL
          ========================================================================= */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card dark:bg-card border border-border rounded-xl max-w-lg w-full p-6 shadow-2xl relative"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-xl font-bold p-1 cursor-pointer"
              >
                ✕
              </button>

              <div className="flex items-center gap-4 mb-5">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#7A1C30]"
                />
                <div>
                  <h3 className="text-lg font-bold text-foreground">{selectedMember.name}</h3>
                  <p className="text-xs font-semibold text-[#7A1C30] dark:text-[#f87171] uppercase tracking-wider">{selectedMember.role}</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                {selectedMember.bio}
              </p>

              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="px-4 py-2 rounded text-xs font-bold text-white bg-[#7A1C30] hover:bg-[#621626] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
