import { useState } from "react";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "The hands-on projects and industry-aligned curriculum at MSAJCE completely transformed my career trajectory.",
    author: "Aarav Sharma",
    position: "SDE II",
    companyLogo: "/logos/amazon.svg",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of Aarav Sharma",
  },
  {
    quote: "Amazing faculty and supportive environment. I built a solid foundation that helped me crack top tech interviews.",
    author: "Priya Patel",
    position: "Software Engineer",
    companyLogo: "/logos/tcs.svg",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of Priya Patel",
  },
  {
    quote: "The startup incubator at the campus gave me the exact push I needed to understand product development at scale.",
    author: "Rahul Kumar",
    position: "Product Manager",
    companyLogo: "/logos/zoho.svg",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of Rahul Kumar",
  },
  {
    quote: "From state-of-the-art labs to incredible research opportunities, my 4 years here were genuinely the best of my life.",
    author: "Sneha Gupta",
    position: "Data Scientist",
    companyLogo: "/logos/ibm.svg",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of Sneha Gupta",
  },
  {
    quote: "The placement cell is fantastic! They brought in top-tier companies and ensured we were well-prepared.",
    author: "Vikram Singh",
    position: "Tech Lead",
    companyLogo: "/logos/infosys.svg",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of Vikram Singh",
  },
  {
    quote: "I was challenged to push my limits every single day. The competitive yet supportive environment shaped my career.",
    author: "Ananya Desai",
    position: "System Analyst",
    companyLogo: "/logos/cognizant.svg",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of Ananya Desai",
  },
  {
    quote: "A vibrant campus with amazing libraries and research facilities. I spent my best years learning and growing here.",
    author: "Karthik Raj",
    position: "Frontend Developer",
    companyLogo: "/logos/customerlabs.png",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of Karthik Raj",
  },
  {
    quote: "The professors are highly approachable and always willing to help. I couldn't have asked for better mentors.",
    author: "Neha Reddy",
    position: "Backend Engineer",
    companyLogo: "/logos/qburst.png",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of Neha Reddy",
  },
  {
    quote: "Joining the robotics club was the highlight of my college life. The resources available for student clubs are phenomenal.",
    author: "Arjun Nair",
    position: "Solutions Architect",
    companyLogo: "/logos/lenovo.svg",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of Arjun Nair",
  },
  {
    quote: "Hostel facilities are great, and the campus is super safe. It truly felt like a home away from home.",
    author: "Meera Menon",
    position: "UI/UX Designer",
    companyLogo: "/logos/atos.svg",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of Meera Menon",
  },
  {
    quote: "The diversity of the student body makes every discussion a rich learning experience. Highly recommend MSAJCE.",
    author: "Sanjay Verma",
    position: "QA Engineer",
    companyLogo: "/logos/wipro.svg",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of Sanjay Verma",
  },
  {
    quote: "Excellent infrastructure and sports facilities. Being part of the college football team taught me invaluable leadership skills.",
    author: "Pooja Iyer",
    position: "Network Engineer",
    companyLogo: "/logos/tvs.svg",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of Pooja Iyer",
  },
  {
    quote: "I received a very generous scholarship that made my education possible. The college truly cares about student welfare.",
    author: "Rohit Das",
    position: "Cloud Consultant",
    companyLogo: "/logos/hitachi.svg",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of Rohit Das",
  },
  {
    quote: "I loved the focus on practical learning. The industry collaborations provided us with insights no textbook could offer.",
    author: "Kavita Rao",
    position: "Software Developer",
    companyLogo: "/logos/valeo.svg",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of Kavita Rao",
  },
  {
    quote: "The facilities and the quality of education at MSAJCE are simply top-notch. It was the best decision of my life.",
    author: "Abhinav Joshi",
    position: "DevOps Engineer",
    companyLogo: "/logos/movate.png",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait of Abhinav Joshi",
  }
];

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full bg-background border-t border-foreground/12 min-h-[100svh] flex flex-col justify-center py-16" id="alumni">
      
      {/* Title Elements - Relative so it pushes the content down and is fully visible */}
      <div className="w-full text-center px-6 mb-12 md:mb-16">
        <p className="text-primary text-[11px] md:text-sm font-bold uppercase tracking-[0.16em] mb-4">
          3940+ Happy Alumni
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-foreground">
          Testimonials
        </h2>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-[40%_60%] lg:grid-cols-[35%_65%] gap-8 md:gap-12 lg:gap-16 items-start">
        
        {/* Left Pane: Vertically scrolling list */}
        <div className="relative h-[400px] md:h-[450px] lg:h-[50vh] lg:min-h-[450px] lg:max-h-[500px] rounded-2xl border border-foreground/10 bg-card overflow-hidden group shadow-sm">
          {/* Gradient masks */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-card to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card to-transparent z-10 pointer-events-none" />
          
          <style>{`
            @keyframes vertical-marquee {
              0% { transform: translateY(0); }
              100% { transform: translateY(-50%); }
            }
            .animate-vertical-marquee {
              animation: vertical-marquee 45s linear infinite;
            }
          `}</style>
          
          <div className="animate-vertical-marquee flex flex-col group-hover:[animation-play-state:paused] pt-12 pb-12">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => {
              const realIndex = idx % TESTIMONIALS.length;
              const isActive = activeIndex === realIndex;
              return (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveIndex(realIndex)}
                  className={`flex items-center gap-4 p-3 mx-3 my-1.5 rounded-xl cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive 
                      ? 'bg-background shadow-md border border-foreground/10 scale-105 z-10' 
                      : 'hover:bg-foreground/5 scale-100 z-0'
                  }`}
                >
                  <img 
                    src={t.image} 
                    alt={t.author} 
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full object-cover shrink-0 transition-all duration-500 ${
                      isActive ? 'filter-none' : 'grayscale opacity-70'
                    }`} 
                    loading="lazy"
                  />
                  <div className="flex flex-col flex-grow min-w-0">
                    <span className={`text-sm font-bold truncate transition-colors ${isActive ? 'text-primary' : 'text-foreground/80'}`}>{t.author}</span>
                    <span className="text-[11px] font-medium text-foreground/50 uppercase tracking-wider truncate mt-0.5">{t.position}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Pane: Simple Dynamic Showcase */}
        <div className="relative h-[400px] md:h-[450px] lg:h-[50vh] lg:min-h-[450px] lg:max-h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-2xl bg-card rounded-2xl border border-foreground/10 shadow-lg p-8 md:p-12 flex flex-col items-start text-foreground"
            >
              <Quote className="h-8 w-8 md:h-10 md:w-10 text-primary/40 mb-6" aria-hidden="true" />
              
              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-[1.6] text-foreground/90">
                "{TESTIMONIALS[activeIndex].quote}"
              </blockquote>
              
              <div className="mt-8 pt-6 border-t border-foreground/10 flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={TESTIMONIALS[activeIndex].image} 
                    alt={TESTIMONIALS[activeIndex].alt}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border border-foreground/10"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg md:text-xl font-bold">{TESTIMONIALS[activeIndex].author}</span>
                    <span className="text-[11px] md:text-xs font-medium text-foreground/60 tracking-wider uppercase mt-1">
                      {TESTIMONIALS[activeIndex].position}
                    </span>
                  </div>
                </div>

                {TESTIMONIALS[activeIndex].companyLogo && (
                  <div className="h-10 md:h-12 bg-background px-3 py-1.5 rounded-lg flex items-center justify-center border border-foreground/10 shrink-0">
                    <img 
                      src={TESTIMONIALS[activeIndex].companyLogo} 
                      alt="Company Logo" 
                      className="h-full w-auto max-w-[80px] object-contain" 
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
