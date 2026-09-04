import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Instagram, 
  Linkedin, 
  Youtube, 
  Facebook, 
  ExternalLink, 
  Sparkles, 
  Building2, 
  Trophy, 
  GraduationCap,
  Copy,
  Check,
  Search,
  Radio,
  Grid,
  Filter
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

const title = "Social Media Directory — MSAJCE Official Channels & Campus Handles";
const description =
  "Official social media directory of Mohamed Sathak A.J. College of Engineering. Connect with official handles, department pages, and student clubs across Instagram, LinkedIn, YouTube, and Facebook.";

export const Route = createFileRoute("/social-media")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SocialMediaPage,
});

const EASE_APPLE = [0.16, 1, 0.3, 1] as const;

const mainSocialChannels = [
  {
    platform: "Instagram",
    handle: "@msajce_official",
    followers: "15.4K",
    unit: "Followers",
    description: "Daily campus life stories, reel highlights, student achievements, and cultural fest updates.",
    icon: Instagram,
    url: "https://instagram.com",
    badge: "Official Main Page",
    accentColor: "#E1306C",
    bgBorder: "hover:border-[#E1306C]/40",
  },
  {
    platform: "LinkedIn",
    handle: "MSAJCE Chennai",
    followers: "28K",
    unit: "Connections",
    description: "Campus placement drives, industry MOU announcements, faculty research, and alumni careers.",
    icon: Linkedin,
    url: "https://linkedin.com",
    badge: "Careers & Placements",
    accentColor: "#0A66C2",
    bgBorder: "hover:border-[#0A66C2]/40",
  },
  {
    platform: "YouTube",
    handle: "MSAJCE Media",
    followers: "12K",
    unit: "Subscribers",
    description: "Full-length graduation streams, virtual lab tours, technical symposiums, and principal speeches.",
    icon: Youtube,
    url: "https://youtube.com",
    badge: "Video Highlights",
    accentColor: "#FF0000",
    bgBorder: "hover:border-[#FF0000]/40",
  },
  {
    platform: "Facebook",
    handle: "msajceofficial",
    followers: "22K",
    unit: "Community",
    description: "Parent-alumni discussions, official university circulars, admission notices, and sports meets.",
    icon: Facebook,
    url: "https://facebook.com",
    badge: "Community Hub",
    accentColor: "#1877F2",
    bgBorder: "hover:border-[#1877F2]/40",
  },
];

const allHandlesData = [
  // Academic Departments
  { id: "1", type: "department", dept: "Computer Science & Engg.", code: "CSE", handle: "@msajce_cse", platform: "Instagram", followers: "3.2K", icon: Building2, link: "https://instagram.com" },
  { id: "2", type: "department", dept: "Artificial Intelligence & Data Science", code: "AI & DS", handle: "@msajce_aids", platform: "Instagram", followers: "2.8K", icon: Sparkles, link: "https://instagram.com" },
  { id: "3", type: "department", dept: "Electronics & Communication Engg.", code: "ECE", handle: "@msajce_ece", platform: "Instagram", followers: "2.5K", icon: Building2, link: "https://instagram.com" },
  { id: "4", type: "department", dept: "Information Technology", code: "IT", handle: "@msajce_it", platform: "Instagram", followers: "2.1K", icon: Building2, link: "https://instagram.com" },
  { id: "5", type: "department", dept: "Mechanical Engineering", code: "MECH", handle: "@msajce_mech", platform: "Instagram", followers: "1.9K", icon: Building2, link: "https://instagram.com" },
  { id: "6", type: "department", dept: "Civil Engineering", code: "CIVIL", handle: "@msajce_civil", platform: "Instagram", followers: "1.6K", icon: Building2, link: "https://instagram.com" },

  // Student Clubs
  { id: "7", type: "club", dept: "MSAJCE Robotics & AI Club", code: "TECH CLUB", handle: "@msajce_robotics", platform: "Instagram", followers: "1.8K", icon: Sparkles, link: "https://instagram.com" },
  { id: "8", type: "club", dept: "National Service Scheme", code: "NSS", handle: "@msajce_nss", platform: "Instagram", followers: "2.4K", icon: Sparkles, link: "https://instagram.com" },
  { id: "9", type: "club", dept: "Youth Red Cross Chapter", code: "YRC", handle: "@msajce_yrc", platform: "Instagram", followers: "1.5K", icon: Sparkles, link: "https://instagram.com" },
  { id: "10", type: "club", dept: "Rotaract Club of MSAJCE", code: "ROTARACT", handle: "@rotaract_msajce", platform: "Instagram", followers: "2.9K", icon: Sparkles, link: "https://instagram.com" },
  
  // Cells & Alumni
  { id: "11", type: "cell", dept: "Sports & Athletics Board", code: "SPORTS", handle: "@msajce_sports", platform: "Instagram", followers: "2.2K", icon: Trophy, link: "https://instagram.com" },
  { id: "12", type: "cell", dept: "Global Alumni Network", code: "ALUMNI", handle: "@msajce_alumni", platform: "LinkedIn", followers: "5.4K", icon: GraduationCap, link: "https://linkedin.com" },
];

const mediaGallery = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&q=80&auto=format&fit=crop",
    alt: "MSAJCE Campus Quad",
    tag: "#LifeAtMSAJCE",
    platform: "Instagram",
    colSpan: "col-span-1 lg:col-span-4",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&auto=format&fit=crop",
    alt: "Hackathon Winners",
    tag: "#MSAJCEInnovators",
    platform: "LinkedIn",
    colSpan: "col-span-1 lg:col-span-4",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&auto=format&fit=crop",
    alt: "Robotics Lab Demo",
    tag: "#MSAJCERobotics",
    platform: "YouTube",
    colSpan: "col-span-1 lg:col-span-4",
  },
];

function SocialMediaPage() {
  const [activeTab, setActiveTab] = useState<"all" | "department" | "club" | "cell">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedHashtag, setCopiedHashtag] = useState<string | null>(null);

  const filteredHandles = allHandlesData.filter((item) => {
    const matchesTab = activeTab === "all" || item.type === activeTab;
    const matchesSearch = 
      item.dept.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const copyToClipboard = (hashtag: string) => {
    navigator.clipboard.writeText(hashtag);
    setCopiedHashtag(hashtag);
    setTimeout(() => setCopiedHashtag(null), 2000);
  };

  return (
    <main className="bg-background min-h-screen text-foreground overflow-hidden">
      {/* Editorial Watermark */}
      <div className="absolute right-[-3%] top-[120px] text-[16vw] font-black text-foreground/[0.02] select-none pointer-events-none uppercase leading-none font-sans tracking-tighter">
        SOCIAL
      </div>

      {/* Hero Header Section */}
      <section className="relative z-10 border-b border-border pt-12 pb-16 md:pt-16 md:pb-24 bg-card/20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          
          {/* Top Live Ticker Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_APPLE }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-xs mb-6"
          >
            <Radio size={12} className="text-primary animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase">
              OFFICIAL SOCIAL MEDIA DIRECTORY // 120K+ TOTAL COMMUNITY
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE_APPLE, delay: 0.1 }}
              className="lg:col-span-8 flex flex-col"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-foreground font-oswald leading-[0.95]">
                CONNECT & FOLLOW <span className="text-primary">#MSAJCE</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-foreground/80 leading-relaxed font-sans max-w-3xl">
                Explore official social handles, academic department networks, student clubs, and live video channels across Mohamed Sathak A.J. College of Engineering.
              </p>
            </motion.div>

            {/* Quick Live Followers Banner */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, ease: EASE_APPLE, delay: 0.2 }}
              className="lg:col-span-4 bg-card border border-foreground/10 p-6 rounded-md shadow-xs grid grid-cols-2 gap-4"
            >
              <div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase block font-bold">INSTAGRAM //</span>
                <span className="text-2xl font-black font-oswald text-primary">15.4K+</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase block font-bold">LINKEDIN //</span>
                <span className="text-2xl font-black font-oswald text-primary">28K+</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase block font-bold">YOUTUBE //</span>
                <span className="text-2xl font-black font-oswald text-primary">12K+</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase block font-bold">FACEBOOK //</span>
                <span className="text-2xl font-black font-oswald text-primary">22K+</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Official Social Channels Showcase (4 Grid Cards) */}
      <section className="border-b border-border py-16 md:py-24 bg-page-bg">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <Reveal variant="rise" className="mb-12">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-primary block mb-2">
              Primary Media Outlets //
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary font-oswald">
              Official Verified Channels
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl font-sans">
              Our central broadcast feeds for immediate university announcements, placement outcomes, and live event broadcasts.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {mainSocialChannels.map((channel, idx) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={channel.platform}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, ease: EASE_APPLE, delay: idx * 0.1 }}
                  style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
                  className={`group relative overflow-hidden rounded-md border border-foreground/10 bg-card p-6 sm:p-8 flex flex-col justify-between h-full shadow-sm transition-all duration-300 ${channel.bgBorder}`}
                >
                  <div>
                    {/* Top Header Row */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-12 h-12 rounded-sm flex items-center justify-center text-white shadow-sm shrink-0"
                          style={{ backgroundColor: channel.accentColor }}
                        >
                          <Icon size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-black font-oswald uppercase text-foreground">{channel.platform}</h3>
                          <span className="text-xs font-mono font-bold text-primary block">{channel.handle}</span>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-foreground/5 border border-foreground/10 text-muted-foreground rounded-xs">
                        {channel.badge}
                      </span>
                    </div>

                    <p className="text-sm text-foreground/80 leading-relaxed font-sans mb-8">
                      {channel.description}
                    </p>
                  </div>

                  {/* Bottom Stats & Direct Action Button */}
                  <div className="pt-6 border-t border-foreground/10 flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-xl font-black font-oswald text-foreground leading-none">{channel.followers}</span>
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mt-1">{channel.unit}</span>
                    </div>

                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative overflow-hidden inline-flex items-center justify-center border border-primary px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-primary font-oswald transition-colors hover:text-white after:absolute after:inset-0 after:top-full after:bg-primary after:transition-all after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:top-0 rounded-xs shadow-xs"
                    >
                      <span className="relative z-10 flex items-center gap-1.5">
                        Follow {channel.platform} <ExternalLink size={13} />
                      </span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Filterable Directory Grid (Departments, Clubs, Cells) */}
      <section className="border-b border-border py-16 md:py-24 bg-card/30">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <Reveal variant="rise" className="mb-10">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-primary block mb-2">
              Campus Ecosystem Directory //
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary font-oswald">
              Department & Club Directory
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl font-sans">
              Filter and discover localized social media handles for engineering departments, student-run technical clubs, and campus bodies.
            </p>
          </Reveal>

          {/* Filter & Search Bar */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 bg-card border border-foreground/10 p-4 rounded-md shadow-xs">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: "All Handles" },
                { id: "department", label: "Departments" },
                { id: "club", label: "Student Clubs" },
                { id: "cell", label: "Boards & Alumni" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 text-xs font-bold font-oswald uppercase tracking-wider rounded-xs border transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-primary text-white border-primary shadow-xs"
                      : "bg-background/50 border-foreground/10 text-muted-foreground hover:text-foreground hover:border-foreground/20"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Field */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <input
                type="text"
                placeholder="Search handles or depts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-background border border-foreground/10 pl-9 pr-4 py-2 text-xs text-foreground placeholder:text-muted-foreground outline-none focus:border-primary font-sans rounded-xs transition-colors"
              />
            </div>
          </div>

          {/* Directory Cards Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredHandles.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: EASE_APPLE }}
                    style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
                    className="bg-card border border-foreground/10 p-6 rounded-md flex flex-col justify-between shadow-xs hover:border-primary/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[11px] font-bold font-oswald uppercase px-2.5 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-xs">
                          {item.code}
                        </span>
                        <span className="text-[11px] font-mono text-muted-foreground font-semibold">{item.followers} Followers</span>
                      </div>
                      <h3 className="text-base font-bold font-oswald text-foreground mb-1 leading-snug">{item.dept}</h3>
                      <span className="text-xs font-mono font-bold text-primary block mb-4">{item.handle}</span>
                    </div>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 pt-4 border-t border-foreground/10 text-xs font-bold font-oswald uppercase tracking-widest text-foreground hover:text-primary flex items-center justify-between transition-colors"
                    >
                      <span>Visit {item.platform}</span>
                      <ExternalLink size={14} className="text-primary" />
                    </a>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Live Campus Media Showcase Wall */}
      <section className="border-b border-border py-16 md:py-24 bg-page-bg">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <Reveal variant="rise" className="mb-12">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-primary block mb-2">
              Visual Campus Feeds //
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary font-oswald">
              Featured Media Highlights
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base max-w-2xl font-sans">
              Snapshot of recent student projects, campus quad highlights, and technical symposiums featured across our social channels.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {mediaGallery.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: EASE_APPLE }}
                style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
                className={`${item.colSpan} relative aspect-[16/10] rounded-sm overflow-hidden border border-foreground/10 bg-card group shadow-sm`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-6 text-white">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 bg-primary/90 rounded-xs self-start">
                    {item.platform}
                  </span>
                  <div>
                    <span className="text-xs font-mono font-bold text-primary-foreground/90 block mb-1">{item.tag}</span>
                    <h4 className="text-lg font-bold font-oswald uppercase text-white leading-tight">{item.alt}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Hashtags & Copy-to-Clipboard Banner */}
      <section className="py-16 md:py-24 bg-card/40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
          <div className="bg-card border border-foreground/10 p-8 sm:p-12 md:p-16 rounded-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-sm">
            <div className="max-w-3xl">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-primary block mb-2">
                Join The Community Conversation //
              </span>
              <h3 className="text-3xl sm:text-4xl font-black uppercase text-foreground font-oswald mb-4">
                Official MSAJCE Hashtags
              </h3>
              <p className="text-sm sm:text-base text-foreground/80 font-sans leading-relaxed mb-6">
                Tag your campus photos, hackathon victories, sports trophies, and research accomplishments using our official hashtags to be featured across MSAJCE official feeds.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {["#MSAJCE", "#LifeAtMSAJCE", "#MSAJCEPlacements", "#MSAJCEInnovators", "#MSAJCE2026"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => copyToClipboard(tag)}
                    className="group inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 text-primary font-mono text-xs font-bold border border-primary/20 rounded-xs hover:bg-primary hover:text-white transition-colors"
                  >
                    <span>{tag}</span>
                    {copiedHashtag === tag ? <Check size={13} className="text-green-500" /> : <Copy size={13} className="opacity-60 group-hover:opacity-100" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="shrink-0 flex flex-col gap-4 w-full sm:w-auto">
              <Link
                to="/"
                className="group relative overflow-hidden inline-flex items-center justify-center border border-primary px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-primary font-oswald transition-colors hover:text-white after:absolute after:inset-0 after:top-full after:bg-primary after:transition-all after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:top-0 rounded-xs shadow-xs w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Back To Home Page &raquo;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
