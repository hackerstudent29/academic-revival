import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Bed, Wifi, Monitor, BookOpen, CheckCircle2, ShieldCheck, Utensils } from "lucide-react";

const title = "Hostel Facilities | MSAJCE";
const description = "Student housing, mess, cafeteria, and hostel rules at MSAJCE.";

export const Route = createFileRoute("/student-housing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
    ],
  }),
  component: StudentHousing,
});

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

// Reusable animated table row
const AnimatedTableRow = ({ children, index = 0, className = "" }: { children: React.ReactNode, index?: number, className?: string }) => (
  <motion.tr
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-20px" }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    className={`hover:bg-foreground/[0.02] transition-colors ${className}`}
  >
    {children}
  </motion.tr>
);

function StudentHousing() {
  const { scrollY } = useScroll();

  // Smooth spring for scroll values
  const smoothY = useSpring(scrollY, { stiffness: 100, damping: 20 });
  
  // Hero animations
  const wrapperX = useTransform(smoothY, [0, 150], ["50%", "0%"]);
  const childX = useTransform(smoothY, [0, 150], ["-50%", "0%"]);
  const scale = useTransform(smoothY, [0, 150], [1, 0.55]);
  const y = useTransform(smoothY, [0, 150], ["0px", "-120px"]);

  return (
    <main className="bg-background font-sans">
      
      {/* Full Screen Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=2000&q=80" 
            alt="MSAJCE Hostel" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 w-full max-w-[1440px] px-6 md:px-12 mx-auto">
          <motion.div style={{ x: wrapperX, width: "100%", y }}>
            <motion.div 
              style={{ x: childX, scale, transformOrigin: "left center" }} 
              className="inline-flex flex-col text-center md:text-left"
            >
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black uppercase tracking-tighter text-white drop-shadow-2xl mb-6">
                Student Housing
              </h1>
              <p className="text-lg md:text-2xl text-white max-w-3xl font-bold tracking-wide drop-shadow-xl">
                A serene home away from home with modern amenities and complete security.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Highly Creative Editorial Layout */}
      <section className="mx-auto max-w-[1440px] px-6 pt-24 pb-12 md:px-12">
        
        {/* Editorial Heading with Background Typography */}
        <div className="relative mb-24 md:mb-32 mt-10">
          <Reveal variant="slide-up">
            <h2 className="text-[12vw] leading-[0.75] font-black uppercase tracking-tighter text-foreground/[0.03] dark:text-foreground/[0.05] absolute -top-16 left-0 whitespace-nowrap pointer-events-none hidden md:block">
              LIVING AT MSAJCE
            </h2>
          </Reveal>
          
          <div className="relative z-10 pt-4">
            <Reveal variant="slide-up" delay={0.1}>
              <h3 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-primary leading-none">
                Hostel Facilities
              </h3>
            </Reveal>
            <Reveal variant="slide-up" delay={0.2}>
              <p className="mt-8 text-xl md:text-3xl font-medium text-foreground/80 max-w-4xl leading-snug">
                A home away from home. We provide separate, fully-furnished accommodations for boys and girls, emphasizing absolute safety, comfort, and academic focus.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Staggered Large Intro Blocks */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-24">
          <Reveal variant="slide-up" delay={0.3}>
            <div className="border-t-4 border-primary pt-8">
              <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground mb-6">Boys Hostel</h4>
              <p className="text-foreground/70 text-lg md:text-xl leading-relaxed font-medium">
                Accommodating <strong className="text-foreground font-black text-2xl md:text-3xl">480</strong> male students in a vibrant, green campus environment. Designed to foster academic focus and personal growth, all rooms are fully furnished with modern amenities, ensuring a highly comfortable stay.
              </p>
            </div>
          </Reveal>

          <Reveal variant="slide-up" delay={0.4}>
            <div className="border-t-4 border-foreground/20 pt-8 mt-0 md:mt-24">
              <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground mb-6">Girls Hostel</h4>
              <p className="text-foreground/70 text-lg md:text-xl leading-relaxed font-medium">
                Accommodating <strong className="text-foreground font-black text-2xl md:text-3xl">210</strong> female students in a highly secure, premium location at Sholinganallur. Featuring en-suite facilities, a dedicated reading space, and 24/7 security for absolute safety and convenience.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Structured Premium Table (Full Width now for maximum impact) */}
        <Reveal variant="slide-up" delay={0.5}>
          <div className="w-full mb-16">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse border-y border-foreground/20 min-w-[800px]">
                <thead className="bg-foreground/[0.01]">
                  <tr className="border-b border-foreground/20">
                    <th className="py-5 pr-6 border-r border-foreground/20 font-black uppercase tracking-widest text-[12px] align-bottom text-foreground w-[20%]">Location</th>
                    <th className="p-6 border-r border-foreground/20 font-black uppercase tracking-widest text-[12px] align-bottom text-foreground w-[40%]">
                      Boys Hostel<br/>
                      <span className="text-[10px] text-foreground/50 tracking-widest block mt-2 font-bold">INCLUDE THE CAMPUS</span>
                    </th>
                    <th className="p-6 font-black uppercase tracking-widest text-[12px] align-bottom text-foreground w-[40%]">
                      Girls Hostel<br/>
                      <span className="text-[10px] text-foreground/50 tracking-widest block mt-2 font-bold">AT SHOLINGANALLUR (5 KM)</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-foreground/10">
                  <AnimatedTableRow index={1}>
                    <td className="py-5 pr-6 border-r border-foreground/20 text-foreground font-black text-[15px]">No. of Blocks</td>
                    <td className="p-6 border-r border-foreground/20 text-foreground/80 text-lg font-medium">3</td>
                    <td className="p-6 text-foreground/80 text-lg font-medium">1</td>
                  </AnimatedTableRow>
                  <AnimatedTableRow index={2}>
                    <td className="py-5 pr-6 border-r border-foreground/20 text-foreground font-black text-[15px]">Rooms (Non-AC)</td>
                    <td className="p-6 border-r border-foreground/20 text-foreground/80 text-lg font-medium">233</td>
                    <td className="p-6 text-foreground/80 text-lg font-medium">71</td>
                  </AnimatedTableRow>
                  <AnimatedTableRow index={3}>
                    <td className="py-5 pr-6 border-r border-foreground/20 text-foreground font-black text-[15px]">Rooms (AC)</td>
                    <td className="p-6 border-r border-foreground/20 text-foreground/80 text-lg font-medium">6</td>
                    <td className="p-6 text-foreground/80 text-lg font-medium">-</td>
                  </AnimatedTableRow>
                  <AnimatedTableRow index={4}>
                    <td className="py-5 pr-6 border-r border-foreground/20 text-foreground font-black text-[15px]">Occupancy</td>
                    <td className="p-6 border-r border-foreground/20 text-foreground/80 text-lg font-medium">2 per room</td>
                    <td className="p-6 text-foreground/80 text-lg font-medium">3 per room</td>
                  </AnimatedTableRow>
                  <AnimatedTableRow index={5}>
                    <td className="py-5 pr-6 border-r border-foreground/20 text-foreground font-black text-[15px]">Facilities</td>
                    <td className="p-6 text-foreground/80 text-[16px] leading-relaxed font-medium" colSpan={2}>
                      Cot, Chair, Lamp, Fan, Water Heater, WiFi Facility and TV Hall
                    </td>
                  </AnimatedTableRow>
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* Feature Highlights Grid - Elevated Design */}
        <div className="grid md:grid-cols-3 gap-12 mt-8">
          <Reveal variant="slide-up" delay={0.6}>
            <div className="flex flex-col h-full bg-foreground/[0.02] p-8 border border-foreground/5 hover:border-primary/30 transition-colors">
              <Bed className="text-primary mb-6" size={32} />
              <h5 className="font-black text-foreground uppercase tracking-tight text-lg mb-3">Fully Furnished</h5>
              <p className="text-foreground/70 text-[15px] leading-relaxed font-medium">Mattresses, cup-boards, study tables & wall hangers included for absolute comfort.</p>
            </div>
          </Reveal>
          <Reveal variant="slide-up" delay={0.7}>
            <div className="flex flex-col h-full bg-foreground/[0.02] p-8 border border-foreground/5 hover:border-primary/30 transition-colors">
              <Monitor className="text-primary mb-6" size={32} />
              <h5 className="font-black text-foreground uppercase tracking-tight text-lg mb-3">Recreation</h5>
              <p className="text-foreground/70 text-[15px] leading-relaxed font-medium">Entertainment halls equipped with TVs, indoor games, and dedicated reading rooms.</p>
            </div>
          </Reveal>
          <Reveal variant="slide-up" delay={0.8}>
            <div className="flex flex-col h-full bg-foreground/[0.02] p-8 border border-foreground/5 hover:border-primary/30 transition-colors">
              <Wifi className="text-primary mb-6" size={32} />
              <h5 className="font-black text-foreground uppercase tracking-tight text-lg mb-3">Connectivity</h5>
              <p className="text-foreground/70 text-[15px] leading-relaxed font-medium">High-speed Wi-Fi access throughout, with extended late-night library access until 9 PM.</p>
            </div>
          </Reveal>
        </div>

      </section>

      {/* Campus Life Gallery (Asymmetric Masonry Collage with slight curves) */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 mb-12">
        <Stagger gap={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[250px]">
          <StaggerItem variant="unfold" className="col-span-2 md:col-span-2 row-span-2 rounded-lg overflow-hidden border border-foreground/10">
            <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80" alt="Campus Life" className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0" />
          </StaggerItem>
          <StaggerItem variant="unfold" className="col-span-2 md:col-span-1 row-span-1 rounded-lg overflow-hidden border border-foreground/10">
            <img src="https://images.unsplash.com/photo-1519452314541-e945c7ea9dc6?auto=format&fit=crop&w=800&q=80" alt="Study Area" className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0" />
          </StaggerItem>
          <StaggerItem variant="unfold" className="col-span-1 md:col-span-1 row-span-2 rounded-lg overflow-hidden border border-foreground/10">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" alt="Students" className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0" />
          </StaggerItem>
          <StaggerItem variant="unfold" className="col-span-1 md:col-span-1 row-span-1 rounded-lg overflow-hidden border border-foreground/10">
            <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80" alt="Library" className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0" />
          </StaggerItem>
        </Stagger>
      </section>

      {/* Rules - No Cards */}
      <section className="bg-foreground/[0.02] border-y border-foreground/10 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1440px] grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 relative">
          
          <div className="lg:sticky lg:top-32 self-start">
            <Reveal variant="slide-up">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
                Rules &<br />Regulations
              </h2>
            </Reveal>
          </div>
          
          <ul className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {rules.map((rule, idx) => (
              <Reveal key={idx} variant="slide-up" delay={idx * 0.05}>
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                  <p className="text-foreground/80 leading-relaxed text-[15px] font-medium">{rule}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Dining & Cafeteria */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12">
        
        {/* Dining Hall Row */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 mb-32 relative">
          
          {/* Sticky Mess Header */}
          <div className="lg:sticky lg:top-32 self-start">
            <Reveal variant="slide-up">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">Mess</h2>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-6">
                Dining Hall
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-6 text-lg font-medium">
                Run by the Management through a private contractor under the guidance of the Principal. 
                We serve Vegetarian and Non-Vegetarian food in a spacious dining hall with separate seating arrangements for boys and girls.
              </p>
              <div className="pl-6 border-l-4 border-primary italic text-foreground/60 mb-6 font-medium">
                "Mess charges are collected on an annual basis. Parents and guests are welcome to consume food by paying per meal."
              </div>
            </Reveal>
          </div>
          
          <div className="space-y-16">
            <Reveal variant="slide-up" delay={0.1}>
              <h4 className="text-xl font-black uppercase tracking-widest text-foreground mb-6 flex items-center gap-3">
                <Utensils className="text-primary" size={24} /> Mess Timings
              </h4>
              
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left whitespace-nowrap border-collapse border-y border-foreground/20">
                  <thead className="bg-foreground/[0.01]">
                    <tr className="border-b border-foreground/20">
                      <th className="py-4 px-4 border-r border-foreground/20 text-[11px] font-black uppercase tracking-widest text-foreground w-1/3">Meal</th>
                      <th className="py-4 px-4 border-r border-foreground/20 text-[11px] font-black uppercase tracking-widest text-foreground">Working Days</th>
                      <th className="py-4 px-4 text-[11px] font-black uppercase tracking-widest text-foreground">Holidays</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-foreground/10">
                    <AnimatedTableRow index={1}>
                      <td className="py-4 px-4 border-r border-foreground/20 text-[14px] font-black text-foreground">Break Fast</td>
                      <td className="py-4 px-4 border-r border-foreground/20 text-[14px] text-foreground/80 font-medium">07:00 AM - 08:00 AM</td>
                      <td className="py-4 px-4 text-[14px] text-foreground/80 font-medium">07:30 AM - 09:00 AM</td>
                    </AnimatedTableRow>
                    <AnimatedTableRow index={2}>
                      <td className="py-4 px-4 border-r border-foreground/20 text-[14px] font-black text-foreground">Lunch</td>
                      <td className="py-4 px-4 border-r border-foreground/20 text-[14px] text-foreground/80 font-medium">01:00 PM - 01:45 PM</td>
                      <td className="py-4 px-4 text-[14px] text-foreground/80 font-medium">12:30 PM - 02:00 PM</td>
                    </AnimatedTableRow>
                    <AnimatedTableRow index={3}>
                      <td className="py-4 px-4 border-r border-foreground/20 text-[14px] font-black text-foreground">Dinner</td>
                      <td className="py-4 px-4 border-r border-foreground/20 text-[14px] text-foreground/80 font-medium">07:00 PM - 08:30 PM</td>
                      <td className="py-4 px-4 text-[14px] text-foreground/80 font-medium">07:00 PM - 09:00 PM</td>
                    </AnimatedTableRow>
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal variant="slide-up" delay={0.2}>
              <h4 className="text-xl font-black uppercase tracking-widest text-foreground mb-6 flex items-center gap-3 mt-12">
                <Monitor className="text-primary" size={24} /> Games & TV Timings
              </h4>
              
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left whitespace-nowrap border-collapse border-y border-foreground/20">
                  <thead className="bg-foreground/[0.01]">
                    <tr className="border-b border-foreground/20">
                      <th className="py-4 px-4 border-r border-foreground/20 text-[11px] font-black uppercase tracking-widest text-foreground">Working Days</th>
                      <th className="py-4 px-4 border-r border-foreground/20 text-[11px] font-black uppercase tracking-widest text-foreground">Holidays</th>
                      <th className="py-4 px-4 border-r border-foreground/20 text-[11px] font-black uppercase tracking-widest text-foreground">Morning Study</th>
                      <th className="py-4 px-4 text-[11px] font-black uppercase tracking-widest text-foreground">Evening Study</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-foreground/10">
                    <AnimatedTableRow index={1}>
                      <td className="py-4 px-4 border-r border-foreground/20 text-[14px] font-black text-foreground">04:30 PM - 06:00 PM</td>
                      <td className="py-4 px-4 border-r border-foreground/20 text-[14px] text-foreground/80 font-medium">09:00 AM - 12:00 PM</td>
                      <td className="py-4 px-4 border-r border-foreground/20 text-[14px] text-foreground/80 font-medium">05:00 AM - 07:00 AM</td>
                      <td className="py-4 px-4 text-[14px] text-foreground/80 font-medium">06:00 PM - 07:00 PM</td>
                    </AnimatedTableRow>
                    <AnimatedTableRow index={2}>
                      <td className="py-4 px-4 border-r border-foreground/20 text-[14px] font-black text-foreground">01:00 PM - 06:00 PM</td>
                      <td className="py-4 px-4 border-r border-foreground/20 text-[14px] text-foreground/50 font-medium">-</td>
                      <td className="py-4 px-4 border-r border-foreground/20 text-[14px] text-foreground/80 font-medium">09:00 PM - 10:30 PM</td>
                      <td className="py-4 px-4 text-[14px] text-foreground/50 font-medium">-</td>
                    </AnimatedTableRow>
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Cafeteria Row - Clean layout without cards */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-24 border-t border-foreground/10 pt-24 relative">
          <div className="lg:sticky lg:top-32 self-start">
            <Reveal variant="slide-up">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">Canteen</h2>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-6">
                Cafeteria
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-6 text-lg font-medium">
                A spacious and hygienic cafeteria accommodating 100 students at a time. Furnished with modern seating 
                and electrical cooking facilities, providing delicious breakfast, lunch, snacks, and beverages at reasonable rates. 
                Separate spaces are maintained for staff and students.
              </p>
              <div className="inline-block border border-foreground/20 bg-foreground/[0.02] px-6 py-3 rounded-full text-[13px] font-black tracking-widest uppercase text-foreground">
                Open 8:00 AM to 8:00 PM
              </div>
              
              <p className="mt-10 text-xl font-bold text-primary italic leading-relaxed">
                "Our canteen is effectively functioning to satisfy the needs of students and staff with a variety of delicious food items at affordable rates."
              </p>
            </Reveal>
          </div>

          <Reveal variant="slide-up" delay={0.1} className="lg:pl-10">
            <h4 className="text-2xl font-black uppercase tracking-tight text-foreground mb-8">Canteen Committee</h4>
            
            <div className="space-y-6">
              <div className="border-b border-foreground/5 pb-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-foreground/50 mb-1">President</p>
                <p className="font-bold text-foreground">Dr. K S Srinivasan <span className="font-medium text-foreground/60">(Principal)</span></p>
              </div>
              <div className="border-b border-foreground/5 pb-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-foreground/50 mb-1">Officer In-charge</p>
                <p className="font-bold text-foreground">Dr. S. Vijayakumar <span className="font-medium text-foreground/60">(COO)</span></p>
              </div>
              <div className="border-b border-foreground/5 pb-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-foreground/50 mb-1">Manager</p>
                <p className="font-bold text-foreground">Mr. Arun</p>
              </div>
              <div className="border-b border-foreground/5 pb-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-foreground/50 mb-1">Head - Student Affairs</p>
                <p className="font-bold text-foreground">Dr. K.P. Santhosh Nathan</p>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-[10px] font-black uppercase tracking-widest text-foreground/50 mb-4">Staff & Members</p>
              <div className="grid grid-cols-2 gap-y-5 text-[15px]">
                <div className="font-bold text-foreground">Dr. S Vijayakumar</div>
                <div className="text-foreground/70 font-medium">Mr. Abdul Rashid <span className="text-xs">(Cook)</span></div>
                
                <div className="font-bold text-foreground">Mr. Arun</div>
                <div className="text-foreground/70 font-medium">Mr. Kannan <span className="text-xs">(Asst Cook)</span></div>
                
                <div className="font-bold text-foreground">Mr. A. Abdul Gafoor</div>
                <div className="text-foreground/70 font-medium">Mr. Shankar <span className="text-xs">(Asst Cook)</span></div>
              </div>
            </div>
          </Reveal>
        </div>

      </section>

    </main>
  );
}
