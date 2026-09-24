import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  Users,
  Utensils,
  Trophy,
  Home as HomeIcon,
  ArrowRight,
  CheckCircle2,
  Heart,
  BookOpen
} from "lucide-react";
import { studentLifeOverview, studentHubAmenities } from "@/data/studentLife";

const title = "Student Hub & Campus Amenities | Student Life | MSAJCE";
const description =
  "Discover the Student Hub at Mohamed Sathak A.J. College of Engineering. Student Activity Centre (SAC), Multi-Cuisine Food Court, Sports Complex, Residences & Health Services.";

export const Route = createFileRoute("/student-life_/student-hub")({
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
  component: StudentHubPage,
});

function StudentHubPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background text-foreground pt-0 md:pt-1">
      {/* Page Hero with Stock Image Background */}
      <section className="relative overflow-hidden bg-[#18181B] text-white pt-10 sm:pt-12 pb-14 sm:pb-16 px-4 sm:px-6 md:px-12 border-b border-primary/20 min-h-[440px] sm:min-h-[480px] flex flex-col justify-end">
        {/* Background Stock Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
            alt="Student Hub and Campus Amenities at MSAJCE"
            className="w-full h-full object-cover object-center brightness-[0.70] filter contrast-105 select-none pointer-events-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
            }}
          />
          {/* Subtle multi-layer gradient overlay for contrast, depth, and legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        </div>

        <div className="max-w-[1440px] mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs text-xs font-bold font-oswald uppercase tracking-wider text-white border border-white/20 mb-4">
              Campus Recreation &amp; Welfare
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-oswald uppercase tracking-tight leading-[1.05]">
              Student Hub &amp; Campus Amenities
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90 font-libre font-medium leading-relaxed">
              {studentLifeOverview.description}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-oswald text-white">12,000 Sq.Ft</span>
              <span className="text-xs sm:text-sm font-libre font-semibold text-white/80">Student Activity Centre</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-oswald text-white">600+ Seating</span>
              <span className="text-xs sm:text-sm font-libre font-semibold text-white/80">Multi-Cuisine Canteen</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-oswald text-white">15+ Arenas</span>
              <span className="text-xs sm:text-sm font-libre font-semibold text-white/80">Sports &amp; Fitness Complex</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-oswald text-white">24/7 Security</span>
              <span className="text-xs sm:text-sm font-libre font-semibold text-white/80">Student Residences</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-10 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-foreground/10 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black font-oswald uppercase text-foreground">
              Campus Life Amenities &amp; Student Spaces
            </h2>
            <p className="text-sm text-muted-foreground font-sans mt-1">
              State-of-the-art facilities dedicated to recreation, wellness, dining, and community engagement.
            </p>
          </div>
        </div>

        {/* Grid of Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {studentHubAmenities.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-card dark:bg-[#18181B] border border-foreground/10 rounded-sm overflow-hidden shadow-xs hover:border-primary/50 transition-colors"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80";
                  }}
                />
                <div className="absolute top-3 left-3 bg-primary text-white text-xs font-black font-oswald uppercase px-2.5 py-1 rounded-sm shadow-md flex items-center gap-1.5">
                  {item.category === "recreation" && <Users className="w-3.5 h-3.5" />}
                  {item.category === "dining" && <Utensils className="w-3.5 h-3.5" />}
                  {item.category === "fitness" && <Trophy className="w-3.5 h-3.5" />}
                  {item.category === "welfare" && <HomeIcon className="w-3.5 h-3.5" />}
                  <span>{item.category}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-black font-oswald uppercase text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-sans text-muted-foreground mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-foreground/10">
                    <h4 className="text-xs font-bold font-oswald uppercase text-primary tracking-wider mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1.5">
                      {item.highlights.map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-sans text-foreground/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Health & Reprographic Welfare Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card dark:bg-[#18181B] border border-foreground/10 rounded-sm p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 border border-primary/20 text-primary rounded-sm flex items-center justify-center font-bold">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black font-oswald uppercase text-foreground">Health &amp; Wellness Clinic</h3>
                <span className="text-xs text-muted-foreground font-sans">24/7 On-Campus Medical Support</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Equipped with a first-aid centre, resident nurse, visiting physicians, emergency ambulance service, and mental wellness counselling for all students.
            </p>
          </div>

          <div className="bg-card dark:bg-[#18181B] border border-foreground/10 rounded-sm p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 border border-primary/20 text-primary rounded-sm flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-black font-oswald uppercase text-foreground">Stationery &amp; Reprographic Hub</h3>
                <span className="text-xs text-muted-foreground font-sans">Academic Supplies &amp; Project Printing</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Provides high-speed photocopying, spiral binding, academic drawing materials, engineering stationery, and poster printing right inside campus.
            </p>
          </div>
        </div>

        {/* Student Governance Banner */}
        <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-6 sm:p-8 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold font-oswald uppercase text-primary tracking-wider">
              Student Governance &amp; Leadership
            </span>
            <h3 className="text-2xl font-black font-oswald uppercase text-foreground">
              MSAJCE Student Council
            </h3>
            <p className="text-sm font-sans text-muted-foreground max-w-2xl leading-relaxed">
              The elected Student Council acts as the official bridge between students and executive leadership, ensuring student voices, event proposals, and welfare needs are actively addressed.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate({ to: "/student-life/clubs-and-societies" })}
            className="relative group overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-stone-200 dark:bg-neutral-800 text-foreground dark:text-white border border-stone-300 dark:border-neutral-700 px-6 py-3 font-bold font-oswald text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
              Explore Clubs &amp; Societies
              <ArrowRight className="w-4 h-4" />
            </span>
            <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
              <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}
