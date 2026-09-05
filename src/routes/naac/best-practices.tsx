import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/motion";
import { FileText, Download } from "lucide-react";
import naacDocs from "@/data/naac-documents.json";

export const Route = createFileRoute("/naac/best-practices")({
  component: BestPractices,
});

function BestPractices() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F5] dark:bg-[#121214]">
      {/* HEADER SECTION */}
      <section className="bg-primary pt-12 md:pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="mx-auto max-w-[1440px] relative z-10">
          <Reveal>
            <div className="flex flex-col gap-2">
              <span className="text-primary-foreground/80 font-bold uppercase tracking-widest text-sm font-mono">NAAC Document Centre</span>
              <h1 className="text-4xl md:text-6xl font-black font-oswald uppercase text-primary-foreground">Best Practices</h1>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-12 py-16 md:py-24 w-full flex-grow">
        <Reveal>
          <div className="bg-card border border-border p-8 md:p-12 rounded-sm shadow-sm space-y-12">
            
            {/* BEST PRACTICE 1 */}
            <div>
              <div className="flex flex-col gap-2 mb-6 border-b border-border pb-4">
                <span className="text-primary font-bold uppercase tracking-wider text-sm">Best Practice - 1</span>
                <h2 className="text-3xl font-black font-oswald uppercase text-foreground">Title: Technology Centres</h2>
              </div>
              
              <p className="text-foreground/80 mb-6 font-sans leading-relaxed text-justify">
                Mohamed Sathak A.J. College of Engineering (MSAJCE) was established with the ambition to become an eminent institute for higher education and research through innovative teaching- learning and sustainable practices to meet the industrial and societal needs. To fulfil this vision, we provide holistic, multi-disciplinary skill-based education in the latest cutting edge technologies and also inculcate innovation and entrepreneurial abilities, so that the students are well groomed to face the challenges in the industry and the society through our technology centres.
              </p>
              <p className="text-foreground/80 mb-6 font-sans leading-relaxed text-justify">
                To have a focussed and stress-free involvement of students both in academics and training, the activities are split into two separate sessions such as Forenoon – Academics only and Afternoon – Training & Practices, within the college regular working hours. MSAJCE encourages students towards research and innovation practices by involving them in various hackathons and consultancy works.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h4 className="text-xl font-bold font-oswald uppercase text-primary mb-4">Objectives</h4>
                  <ul className="space-y-2 list-disc list-inside text-foreground/80 font-sans">
                    <li>To provide hands-on training through experiential learning</li>
                    <li>To enable them to get certification from appropriate training agencies in the cutting edge technologies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold font-oswald uppercase text-primary mb-4">Context</h4>
                  <ul className="space-y-2 list-disc list-inside text-foreground/80 font-sans">
                    <li>To make the students deployable, they are trained in multi-disciplinary skills apart from their core domain through our technology centres within regular college hours as per their interest</li>
                    <li>The students appearing for placement selection were earlier found to lag in skills required and expected by the employer in their domain</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold font-oswald uppercase text-primary mb-4">Practice</h4>
                <ul className="space-y-2 list-disc list-inside text-foreground/80 font-sans">
                  <li>All students are given training as per the schedule prepared at the beginning of the academic year</li>
                  <li>All these trainings are given in the afternoon sessions without affecting the regular academic schedule</li>
                  <li>Trainers are our own faculty members who had already been certified by different certification agencies and hence freely accessible to students at any time</li>
                  <li>Students are free to choose courses of their wish apart from the one given in the training schedule at the beginning</li>
                  <li>All these centres will be kept open beyond college working hours and hence they can learn as per their interest</li>
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold font-oswald uppercase text-primary mb-4">Evidence of Success</h4>
                <ul className="space-y-2 list-disc list-inside text-foreground/80 font-sans">
                  <li>The students are certified by different agencies like CISCO, Altair, and Automation anywhere etc.</li>
                  <li>They are now found to be not only employable but also deployable directly into the job by the recruited companies</li>
                  <li>They found to have learned through hands on experience and hence they will acquire the lifelong learning skills</li>
                  <li>Students are found to have developed knowledge not only in cognitive domain but also in the psychomotor domain also, because they undergo experiential learning</li>
                  <li>Some of these courses are included as audit courses under Anna University (affiliating university) and the course name will be included in their mark sheets</li>
                  <li>The syllabus contents of two such courses taught at our technology centres have been recognised by Anna University and the syllabus set by us will be followed by other affiliating colleges</li>
                </ul>
              </div>
            </div>

            {/* BEST PRACTICE 2 */}
            <div className="pt-12 border-t border-border">
              <div className="flex flex-col gap-2 mb-6 border-b border-border pb-4">
                <span className="text-primary font-bold uppercase tracking-wider text-sm">Best Practice - 2</span>
                <h2 className="text-3xl font-black font-oswald uppercase text-foreground">Title: Afternoon Laboratory Classes</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h4 className="text-xl font-bold font-oswald uppercase text-primary mb-4">Objectives</h4>
                  <ul className="space-y-2 list-disc list-inside text-foreground/80 font-sans">
                    <li>To become an eminent institute for higher education through innovative teaching- learning and sustainable practices to meet the industrial and societal needs by offering all practical courses in the afternoon session to learn by experience</li>
                    <li>To provide problem solving and critical thinking skills and inculcate innovation and entrepreneurial abilities, so that the students are well groomed to face the challenges in the industry and the society</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold font-oswald uppercase text-primary mb-4">Context</h4>
                  <ul className="space-y-2 list-disc list-inside text-foreground/80 font-sans">
                    <li>If practical courses are offered in between theory courses, students may feel fatigued and may not be able to concentrate on theory classes</li>
                    <li>To teach content beyond the syllabus theory classes may not be sufficient, but these afternoon sessions will be utilised for this purpose</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold font-oswald uppercase text-primary mb-4">Practice</h4>
                <ul className="space-y-2 list-disc list-inside text-foreground/80 font-sans">
                  <li>All the laboratory classes are scheduled only in the afternoon while preparing the time-table</li>
                  <li>The experts from industries are invited in the afternoon sessions to talk about practices followed in industry so that students are aware of the practices in industry</li>
                  <li>New technologies which are not covered in the regular syllabus are taught in these afternoon sessions</li>
                  <li>Students will have freedom to listen to MOOC lectures at library in the afternoon session</li>
                  <li>Most of Institution’s Innovation Council activities are conducted in the afternoon</li>
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold font-oswald uppercase text-primary mb-4">Evidence of Success</h4>
                <ul className="space-y-2 list-disc list-inside text-foreground/80 font-sans">
                  <li>Students are getting involved in industry consultancy projects because they had gained practical knowledge expected by the industry</li>
                  <li>Students are getting certified by Coursera, Udemy and NPTEL etc.</li>
                  <li>Students had participated in many competitions and hackathons and had also secured mentoring support and funding</li>
                  <li>Students have designed and developed innovative products with the skills gained from these trainings</li>
                  <li>Some of these courses are included as audit courses under Anna University (affiliating university) and the course name will be included in their mark sheets</li>
                  <li>The syllabus contents of two such courses taught at our technology centres have been recognised by Anna University and the syllabus set by us will be followed by other affiliating colleges</li>
                </ul>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold font-oswald uppercase text-primary mb-4">Problems Encountered & Resources Required</h4>
                <ul className="space-y-2 list-disc list-inside text-foreground/80 font-sans">
                  <li>Difficulty arises in preparation of time table to accommodate all practical classes only in the afternoon</li>
                  <li>Accommodating all students for practical courses in one slot is a challenging task</li>
                </ul>
              </div>
            </div>

          </div>
        </Reveal>
      </section>
    </div>
  );
}
