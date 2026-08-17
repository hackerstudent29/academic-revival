import { useRef } from "react";
import { Quote } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

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

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <motion.div
      layout
      initial="initial"
      whileHover="hover"
      variants={{
        initial: { width: 240, height: 160 },
        hover: { width: 350, height: 480 }
      }}
      transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl bg-card shrink-0 border border-foreground/10 shadow-sm cursor-pointer"
    >
      <motion.div layout="position" className="absolute inset-0 h-full w-full">
        <motion.img
          layout="position"
          src={t.image}
          alt={t.alt}
          className="h-full w-full object-cover"
          variants={{
            initial: { filter: "grayscale(20%)", scale: 1 },
            hover: { filter: "grayscale(0%)", scale: 1.05 }
          }}
          transition={{ duration: 0.5 }}
          loading="lazy"
        />
        <motion.div 
          variants={{
            initial: { opacity: 0.5 },
            hover: { opacity: 1 }
          }}
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" 
        />
      </motion.div>

      {/* Mini Name Tag for small thumbnail */}
      <motion.div 
        variants={{
          initial: { opacity: 1, y: 0 },
          hover: { opacity: 0, y: 10 }
        }}
        className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-end justify-between gap-2 pointer-events-none"
      >
        <div className="flex flex-col">
          <p className="text-sm font-bold text-white tracking-wide">{t.author}</p>
          <p className="text-[11px] font-medium text-white/90 uppercase tracking-wider mt-1">{t.position}</p>
        </div>
        {t.companyLogo && (
          <div className="flex h-7 items-center justify-center rounded bg-white/95 px-2 py-1 shrink-0 shadow-sm">
            <img src={t.companyLogo} alt="Company Logo" className="h-full w-auto object-contain" />
          </div>
        )}
      </motion.div>

      {/* Expanded Content */}
      <motion.div 
        variants={{
          initial: { opacity: 0, y: 20 },
          hover: { opacity: 1, y: 0 }
        }}
        transition={{ delay: 0.05, duration: 0.4 }}
        className="absolute bottom-0 left-0 w-[350px] p-8 flex flex-col justify-end text-white pointer-events-none"
      >
        <Quote className="mb-6 h-8 w-8 text-white/40" aria-hidden="true" />
        <blockquote className="text-[15px] font-medium leading-relaxed text-white/90">
          "{t.quote}"
        </blockquote>
        <figcaption className="mt-6 flex items-end justify-between gap-4">
          <div className="flex flex-col">
            <p className="font-bold text-white/100 text-lg">
              {t.author}
            </p>
            <p className="text-sm text-white/80 font-medium mt-1">
              {t.position}
            </p>
          </div>
          {t.companyLogo && (
            <div className="flex h-8 items-center justify-center rounded bg-white/95 px-2.5 py-1.5 shrink-0 shadow-sm">
              <img src={t.companyLogo} alt="Company Logo" className="h-full w-auto object-contain" />
            </div>
          )}
        </figcaption>
      </motion.div>
    </motion.div>
  );
}

export function TestimonialSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transform: 
  // [0, 0.4]: Stays fully visible at the top (-20px slightly higher) while the section enters and centers on screen.
  // [0.4, 1]: Scrolls down by 380px behind the cards as the user scrolls past the section.
  // We use fixed pixels because the marquee row has a fixed height (480px) on all screens.
  const textY = useTransform(scrollYProgress, [0, 0.4, 1], [-20, -20, 380]);

  return (
    <section ref={sectionRef} className="bg-background pt-24 pb-8 md:pt-32 md:pb-12 border-t border-border overflow-hidden" id="alumni">
      {/* 
        Custom pixel-based marquee animation.
        This fixes layout thrashing and jumpy logic because it translates by exact pixels instead of percentages.
        15 items * (240px width + 24px gap) = 3960px 
      */}
      <style>{`
        @keyframes msajce-pixel-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-3960px); }
        }
        .animate-msajce-pixel-marquee {
          animation: msajce-pixel-marquee 60s linear infinite;
        }
      `}</style>

      <div className="mx-auto flex flex-col items-center px-6 md:px-12 max-w-[1440px]">
        <p className="text-primary text-[11px] md:text-sm font-bold uppercase tracking-[0.16em] mb-4">
          3940+ Happy Alumni
        </p>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground text-center max-w-2xl z-20">
          Don't just take our words
        </h2>
      </div>
      
      <div className="relative w-full mt-8 md:mt-16">
        
        {/* Giant Background Text with Parallax Scroll */}
        <motion.div 
          style={{ x: "-50%", y: textY }}
          className="absolute top-0 left-1/2 w-full flex justify-center pointer-events-none select-none z-0"
        >
          <span className="text-[11.5vw] leading-[0.75] font-black text-primary uppercase tracking-tighter whitespace-nowrap">
            Testimonials
          </span>
        </motion.div>

        <div className="relative flex w-full overflow-hidden group z-10">
          
          {/* Soft edge fade masks for premium feel */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-24 bg-gradient-to-r from-background to-transparent md:w-48" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-24 bg-gradient-to-l from-background to-transparent md:w-48" />

          {/* Set 1 */}
          <div 
            className="animate-msajce-pixel-marquee flex h-[480px] shrink-0 items-center gap-[24px] pr-[24px] group-hover:[animation-play-state:paused]"
          >
            {TESTIMONIALS.map((t, idx) => (
              <TestimonialCard key={`set1-${idx}`} t={t} />
            ))}
          </div>

          {/* Set 2 (Duplicate for seamless infinite loop) */}
          <div 
            className="animate-msajce-pixel-marquee flex h-[480px] shrink-0 items-center gap-[24px] pr-[24px] group-hover:[animation-play-state:paused]"
            aria-hidden="true"
          >
            {TESTIMONIALS.map((t, idx) => (
              <TestimonialCard key={`set2-${idx}`} t={t} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
