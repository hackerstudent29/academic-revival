import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/motion";
import { useState } from "react";
import cocData from "@/data/code-of-conduct.json";

export const Route = createFileRoute("/naac/code-of-conduct")({
  component: CodeOfConduct,
});

function CodeOfConduct() {
  const [activeTab, setActiveTab] = useState(Object.keys(cocData)[0]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F5] dark:bg-[#121214]">
      {/* HEADER SECTION */}
      <section className="bg-primary pt-12 md:pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="mx-auto max-w-[1440px] relative z-10">
          <Reveal>
            <div className="flex flex-col gap-2">
              <span className="text-primary-foreground/80 font-bold uppercase tracking-widest text-sm font-mono">NAAC Document Centre</span>
              <h1 className="text-4xl md:text-6xl font-black font-oswald uppercase text-primary-foreground">Code of Conduct</h1>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-12 py-16 md:py-24 w-full flex-grow">
        <Reveal>
          <div className="bg-card border border-border p-8 md:p-12 rounded-sm shadow-sm">
            <p className="text-foreground/80 mb-8 font-sans leading-relaxed text-justify">
              This code of conduct specifies the responsibilities expected from each employee in carrying out their day-to-day duties as well as general ethical and moral behaviors. Employees must adhere to this code of conduct with utmost integrity. This code serves as a reference and guideline for all employees whether full-time, part-time or contract basis. Employees must work with public authorities established by the law and uphold our country’s constitution. Employees must strive to attain institutions goals.
            </p>

            <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
              {Object.keys(cocData).map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-2.5 font-oswald font-bold uppercase tracking-wider text-sm md:text-base rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs transition-all ${
                    activeTab === category 
                      ? "bg-primary text-primary-foreground shadow-md" 
                      : "bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-2xl font-black font-oswald uppercase text-primary mb-6 border-b-2 border-primary/20 pb-2 inline-block">
                For {activeTab}
              </h3>
              <ul className="space-y-4">
                {cocData[activeTab as keyof typeof cocData]?.map((rule, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="mt-1 shrink-0 w-6 h-6 rounded-sm bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                      {idx + 1}
                    </div>
                    <p className="text-foreground font-sans leading-relaxed">
                      {rule}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </Reveal>
      </section>
    </div>
  );
}
