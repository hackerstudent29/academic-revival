import { useState, useEffect } from "react";
import { Quote, Play } from "lucide-react";
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
  // null = no card playing, 1 = reel 1, 2 = reel 2
  const [playingCard, setPlayingCard] = useState<number | null>(null);

  useEffect(() => {
    if (playingCard !== null) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [playingCard]);

  return (
    <section className="relative z-10 w-full bg-page-bg border-b border-border pt-16 pb-24 md:pt-20 md:pb-32 overflow-hidden scroll-mt-24" id="alumni">

      {/* Large Typography Watermark to fill background space */}
      <div className="absolute right-[-2%] bottom-[5%] text-[18vw] font-black text-foreground/[0.02] select-none pointer-events-none uppercase leading-none font-sans tracking-tighter">
        ALUMNI
      </div>

      {/* Title Elements */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.65, ease: [0.215, 0.61, 0.355, 1] }}
        className="relative z-10 w-full text-center px-6 mb-10 md:mb-12"
      >
        <p className="text-muted-foreground text-[11px] md:text-sm font-bold uppercase tracking-[0.16em] mb-4">
          3940+ Happy Alumni
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-primary">
          Testimonials
        </h2>
      </motion.div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-20">
        
        {/* Editorial Main Split Row */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left 60% (7 Columns): Featured Alumni Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            className="col-span-1 lg:col-span-7 w-full flex flex-col gap-6"
          >
            <span className="text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase block">
              Featured Alumni Spotlight //
            </span>
            
            <div className="w-full bg-card/40 backdrop-blur-md border border-foreground/10 p-6 md:p-8 rounded-md grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[380px] sm:min-h-[420px] shadow-sm">
              {/* Portrait Photo (Static on hover) */}
              <div className="col-span-1 md:col-span-5 aspect-[4/5] w-full rounded-sm overflow-hidden border border-foreground/10 relative bg-muted shadow-sm shrink-0">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={TESTIMONIALS[activeIndex]?.image}
                    alt={TESTIMONIALS[activeIndex]?.author}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                {/* Company Logo Badge */}
                {TESTIMONIALS[activeIndex]?.companyLogo && (
                  <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur px-3 py-1 rounded-sm border border-foreground/10 shadow-sm shrink-0">
                    <img
                      src={TESTIMONIALS[activeIndex]?.companyLogo}
                      alt="Company Logo"
                      className="h-5 w-auto max-w-[70px] object-contain opacity-70"
                    />
                  </div>
                )}
              </div>

              {/* Editorial Serif Pull-quote (Fixed Height Container to prevent card jumping) */}
              <div className="col-span-1 md:col-span-7 flex flex-col justify-between h-full min-h-[260px] sm:min-h-[300px]">
                <div className="min-h-[170px] sm:min-h-[200px] flex flex-col justify-center">
                  <span className="text-4xl md:text-5xl font-serif text-primary leading-none block -mb-1">“</span>
                  <AnimatePresence mode="wait">
                    <motion.blockquote
                      key={activeIndex}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-foreground tracking-tight font-sans line-clamp-4"
                    >
                      {TESTIMONIALS[activeIndex]?.quote}
                    </motion.blockquote>
                  </AnimatePresence>
                </div>

                <div className="mt-4 pt-4 border-t border-foreground/10 flex flex-col shrink-0">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-lg font-black text-primary font-oswald uppercase tracking-wide block">
                        {TESTIMONIALS[activeIndex]?.author}
                      </span>
                      <span className="text-xs font-semibold font-sans text-foreground/80 uppercase tracking-wider block mt-0.5">
                        {TESTIMONIALS[activeIndex]?.position}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Thumbnail Navigation Row & Absolute Principal Note */}
            <div className="relative mt-2 w-full">
              <div className="flex flex-wrap items-center gap-3">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                      activeIndex === idx
                        ? "border-primary scale-105"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={t.image}
                      alt={t.author}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right 40% (5 Columns): Vertical Video Reels with matching top alignment header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="col-span-1 lg:col-span-5 w-full flex flex-col gap-6"
          >
            <span className="text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase block">
              Alumni Video Reels //
            </span>

            <div className="w-full grid grid-cols-2 gap-4 sm:gap-6 justify-center items-stretch">
              
              {/* Reel 1 */}
              <div className="group/video flex flex-col w-full rounded-md overflow-hidden bg-card border border-foreground/10 shadow-md cursor-pointer transition-all duration-300 hover:border-[#004b87]/40">
                {/* Video Thumbnail or Inline Player */}
                <div className="relative aspect-[4/5] w-full bg-black overflow-hidden">
                  {playingCard === 1 ? (
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/aNVaQWh1Pp4?autoplay=1"
                      title="Alumni Placement Journey"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&q=80&auto=format&fit=crop&aspect=4/5"
                        alt="Alumni Video Feedback 1"
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 flex items-center justify-center z-20" onClick={() => setPlayingCard(1)}>
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-md group-hover/video:scale-110 transition-transform duration-300">
                          <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute top-3 left-3 z-20 bg-background/90 backdrop-blur px-2.5 py-0.5 rounded-full border border-foreground/10 flex items-center gap-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#004b87] animate-pulse" />
                        <span className="text-[8px] font-mono font-bold tracking-widest text-primary uppercase">▶ Watch</span>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-4 flex flex-col gap-1 bg-card text-left">
                  <span className="text-[9px] font-oswald font-bold uppercase tracking-wider text-primary">ALUMNI PLACEMENTS</span>
                  <h4 className="text-xs font-bold leading-snug text-foreground group-hover/video:text-primary transition-colors">Alumni Placement Journey</h4>
                  <p className="text-[10px] text-muted-foreground leading-normal line-clamp-2 mt-0.5">Class of 2024 graduates share their interview prep & campus placement success.</p>
                </div>
              </div>

              {/* Reel 2 */}
              <div className="group/video flex flex-col w-full rounded-md overflow-hidden bg-card border border-foreground/10 shadow-md cursor-pointer transition-all duration-300 hover:border-[#004b87]/40">
                <div className="relative aspect-[4/5] w-full bg-black overflow-hidden">
                  {playingCard === 2 ? (
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/aNVaQWh1Pp4?autoplay=1"
                      title="Campus Life & Growth"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80&auto=format&fit=crop&aspect=4/5"
                        alt="Alumni Video Feedback 2"
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 flex items-center justify-center z-20" onClick={() => setPlayingCard(2)}>
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-md group-hover/video:scale-110 transition-transform duration-300">
                          <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute top-3 left-3 z-20 bg-background/90 backdrop-blur px-2.5 py-0.5 rounded-full border border-foreground/10 flex items-center gap-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#004b87] animate-pulse" />
                        <span className="text-[8px] font-mono font-bold tracking-widest text-primary uppercase">▶ Watch</span>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-4 flex flex-col gap-1 bg-card text-left">
                  <span className="text-[9px] font-oswald font-bold uppercase tracking-wider text-primary">CAMPUS LIFE</span>
                  <h4 className="text-xs font-bold leading-snug text-foreground group-hover/video:text-primary transition-colors">Campus Life & Growth</h4>
                  <p className="text-[10px] text-muted-foreground leading-normal line-clamp-2 mt-0.5">Engineering leads share details about student research opportunities and campus growth.</p>
                </div>
              </div>
            </div>

            {/* Principal's Note (Handwritten, slanted) */}
            <div className="hidden lg:flex flex-col items-center justify-center shrink-0 -rotate-3 opacity-80 pointer-events-none mt-10 w-full pl-6">
              <div className="flex flex-col items-start">
                <span 
                  className="text-2xl md:text-[28px] text-foreground/90 leading-tight" 
                  style={{ fontFamily: "'Caveat', 'Bradley Hand', 'Segoe Print', 'Comic Sans MS', cursive" }}
                >
                  "Our students don't just build careers,
                </span>
                <span 
                  className="text-2xl md:text-[28px] text-foreground/90 leading-tight ml-8" 
                  style={{ fontFamily: "'Caveat', 'Bradley Hand', 'Segoe Print', 'Comic Sans MS', cursive" }}
                >
                  they shape the future."
                </span>
                <span 
                  className="text-xl md:text-2xl text-primary font-bold mt-4 ml-12" 
                  style={{ fontFamily: "'Caveat', 'Bradley Hand', 'Segoe Print', 'Comic Sans MS', cursive" }}
                >
                  – Dr. K.S. Srinivasan, Principal
                </span>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Horizontal scroll-snap carousel of smaller testimonials below the fold */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.215, 0.61, 0.355, 1] }}
          className="w-full -mt-2 md:-mt-6"
        >
          <div className="flex items-center justify-between border-b border-foreground/10 pb-4 mb-8">
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground">// Legacy Spotlights</span>
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mt-1 text-primary">Alumni Network Feed</h3>
            </div>
          </div>
          
          <div className="relative w-full overflow-hidden py-4">
            {/* Gradient masks to fade edges */}
            <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-page-bg to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-page-bg to-transparent z-10 pointer-events-none" />
            
            <style>{`
              @keyframes horizontal-marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-horizontal-marquee {
                display: flex;
                width: max-content;
                animation: horizontal-marquee 40s linear infinite;
              }
              .animate-horizontal-marquee:hover {
                animation-play-state: paused;
              }
            `}</style>
            
            <div className="animate-horizontal-marquee flex gap-6 py-2 px-8">
              {[...TESTIMONIALS.slice(11), ...TESTIMONIALS.slice(11)].map((t, idx) => (
                <div 
                  key={idx} 
                  className="shrink-0 w-[300px] md:w-[350px] h-[220px] bg-card border border-foreground/10 p-6 rounded-md flex flex-col justify-between shadow-sm cursor-default"
                >
                  <div className="flex flex-col">
                    <Quote className="h-5 w-5 text-primary/30 mb-4" />
                    <p className="text-sm text-foreground/80 leading-relaxed font-medium mb-4 line-clamp-4">
                      "{t.quote}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-foreground/5">
                    <img 
                      src={t.image} 
                      alt={t.author} 
                      className="w-10 h-10 rounded-full object-cover border border-foreground/10"
                      loading="lazy"
                    />
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-bold text-foreground truncate">{t.author}</span>
                      <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase truncate mt-0.5">
                        {t.position}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>


    </section>
  );
}
