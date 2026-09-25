import React, { useState } from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { PlacementPulseEvent } from '@/types/placement';
import { CustomDropdown } from '@/components/ui/custom-dropdown';

interface JourneySectionProps {
  onOpenEvent?: (event: PlacementPulseEvent) => void;
  onOpenBrochure?: () => void;
  onOpenContact?: () => void;
}

export const JourneySection: React.FC<JourneySectionProps> = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2022-2023');

  const cellFunctions = [
    "To create awareness among students regarding higher education opportunities in India and abroad.",
    "To motivate students to realize their potential to the fullest in the Higher Education sector.",
    "To provide expert guidance for students applying and appearing for GATE, CAT, GRE, and TOEFL examinations.",
    "To organize admissions counseling for study abroad aspirants jointly with external training specialists.",
    "To inform and facilitate student participation in higher education seminars and workshops organized across premier institutions.",
  ];

  const placementCommitteeMembers = [
    {
      sno: '01',
      name: 'Mr. S.V. Vinodh',
      designation: 'Head — Training & Placement Cell',
      dept: 'Department of Electrical & Electronics Engineering',
      role: 'Placement Officer / Head',
      email: 'placement@msajce-edu.in',
      phone: '+91 99409 02255'
    },
    {
      sno: '02',
      name: 'Faculty Representative — CSE',
      designation: 'Assistant Professor & Dept Placement Lead',
      dept: 'Department of Computer Science & Engineering',
      role: 'Faculty Coordinator',
      email: 'cse.placement@msajce-edu.in',
      phone: '+91 99400 04500'
    },
    {
      sno: '03',
      name: 'Faculty Representative — IT',
      designation: 'Assistant Professor & Dept Placement Lead',
      dept: 'Department of Information Technology',
      role: 'Faculty Coordinator',
      email: 'it.placement@msajce-edu.in',
      phone: '+91 99400 04500'
    },
    {
      sno: '04',
      name: 'Faculty Representative — ECE',
      designation: 'Assistant Professor & Dept Placement Lead',
      dept: 'Department of Electronics & Communication',
      role: 'Faculty Coordinator',
      email: 'ece.placement@msajce-edu.in',
      phone: '+91 99400 04500'
    },
    {
      sno: '05',
      name: 'Faculty Representative — MECH',
      designation: 'Assistant Professor & Dept Placement Lead',
      dept: 'Department of Mechanical Engineering',
      role: 'Faculty Coordinator',
      email: 'mech.placement@msajce-edu.in',
      phone: '+91 99400 04500'
    },
    {
      sno: '06',
      name: 'Faculty Representative — CIVIL',
      designation: 'Assistant Professor & Dept Placement Lead',
      dept: 'Department of Civil Engineering',
      role: 'Faculty Coordinator',
      email: 'civil.placement@msajce-edu.in',
      phone: '+91 99400 04500'
    },
    {
      sno: '07',
      name: 'Student Lead Coordinator',
      designation: 'Final Year Student Placement Ambassador',
      dept: 'Placement Student Executive Council',
      role: 'Student Coordinator',
      email: 'student.placement@msajce-edu.in',
      phone: '+91 99400 04500'
    },
  ];

  const studentEnrolments: Record<string, { student: string; dept: string; institution: string; programme: string }[]> = {
    '2022-2023': [
      { student: 'Anandu Acharry .M.S', dept: 'BE - CIVIL', institution: 'Anna University, Chennai', programme: 'M.E. Environment Management' },
      { student: 'Veerakumar .M', dept: 'BE - CIVIL', institution: 'Mohamed Sathak A.J. College of Engineering', programme: 'M.E. Structural Engineering' },
      { student: 'Shaafia Tasneem .N', dept: 'BE - CSE', institution: 'St. Joseph College of Engineering', programme: 'M.E. Computer Science' },
      { student: 'Muhammed Shibil .C.V', dept: 'BE - CSE', institution: 'Amrita Vishwa Vidyapeetham', programme: 'M.Sc. Data Science' },
      { student: 'Jahangeer Nadhir Khan .P', dept: 'BE - ECE', institution: 'Loyola College, Chennai', programme: 'Master of Business Administration (MBA)' },
    ],
    '2021-2022': [
      { student: 'Faisal Ahmed Khan', dept: 'BE - CSE', institution: 'Measi, The New College', programme: 'Master of Business Administration (MBA)' },
      { student: 'Sanjith .S', dept: 'BE - EEE', institution: 'AMET University', programme: 'Electrotechnical Officer Track' },
      { student: 'Muhammed Zahan Faaieq', dept: 'BE - MECH', institution: 'University of Manchester, UK', programme: 'M.Sc. Advanced Engineering' },
      { student: 'Mohamed Shafi .S', dept: 'BE - MECH', institution: 'Amrita Vishwa Vidyapeetham', programme: 'M.Tech. Automobile Engineering' },
      { student: 'Safwaan Abdul Razaq', dept: 'B.Tech - IT', institution: 'SRM Institute of Science & Tech', programme: 'M.E. Computer Science' },
    ],
    '2020-2021': [
      { student: 'Hemananthan .M', dept: 'BE - CIVIL', institution: 'Mohamed Sathak A.J. College of Engineering', programme: 'M.E. Structural Engineering' },
      { student: 'Musthaq Ameen', dept: 'BE - CIVIL', institution: 'Mohamed Sathak A.J. College of Engineering', programme: 'M.E. Structural Engineering' },
      { student: 'Crispin Nancy', dept: 'BE - CIVIL', institution: 'Mohamed Sathak A.J. College of Engineering', programme: 'M.E. Structural Engineering' },
      { student: 'Prakash Ravichandran', dept: 'B.Tech - IT', institution: 'PSB Academy, Singapore', programme: 'M.Sc. Cyber Security' },
      { student: 'Syed Zaheer Abbas .N', dept: 'BE - MECH', institution: 'SRM Valliammai Engineering College', programme: 'M.E. Industrial Safety Engineering' },
    ],
    '2019-2020': [
      { student: 'Yashwanth .R', dept: 'BE - Material Science', institution: 'IIT Hyderabad', programme: 'M.Tech. Material Science & Metallurgical Engg' },
      { student: 'Sendhil Sasikala', dept: 'BE - Material Science', institution: 'Darmstadt University of Technology, Germany', programme: 'M.Sc. Material Science' },
      { student: 'Sreenidhi Alagesan', dept: 'BE - Material Science', institution: 'Darmstadt University of Technology, Germany', programme: 'M.Sc. Material Science' },
      { student: 'Salma Arifa', dept: 'BE - ECE', institution: 'B.S. Abdur Rahman Crescent Institute', programme: 'M.Tech. VLSI & Embedded Systems' },
      { student: 'Priyanka', dept: 'BE - ECE', institution: 'PSN Engineering College, Rajapalayam', programme: 'M.E. Communication Systems' },
      { student: 'Badhurun Farhana', dept: 'BE - ECE', institution: 'B.S. Abdur Rahman Crescent Institute', programme: 'M.Tech. VLSI & Embedded Systems' },
    ],
    '2018-2019': [
      { student: 'Shahana .S', dept: 'BE - CIVIL', institution: 'IIT Hyderabad', programme: 'M.Tech. Structural Engineering' },
      { student: 'Radhika .T', dept: 'BE - CIVIL', institution: 'Mohamed Sathak A.J. College of Engineering', programme: 'M.E. Structural Engineering' },
      { student: 'Susmitha .R', dept: 'BE - CIVIL', institution: 'Mohamed Sathak A.J. College of Engineering', programme: 'M.E. Structural Engineering' },
      { student: 'Aabith Hussain J', dept: 'BE - MECH', institution: 'B.S. Abdur Rahman Crescent Institute', programme: 'Master of Business Administration (MBA)' },
      { student: 'Amira Thasneem', dept: 'BE - ECE', institution: 'Agni College of Technology', programme: 'M.E. Communication Systems' },
    ],
    '2017-2018': [
      { student: 'Merlin Salbia .S', dept: 'BE - CIVIL', institution: 'Government College of Engineering, Tirunelveli', programme: 'M.E. Structural Engineering' },
      { student: 'Syed Abrar Ahamed Farooqi .S', dept: 'BE - CIVIL', institution: 'Hindustan Institute of Tech & Science', programme: 'M.E. Structural Engineering' },
    ],
    '2016-2017': [
      { student: 'Satheesh Kumar .D', dept: 'BE - MECH', institution: 'Loyola College, Chennai', programme: 'Master of Business Administration (MBA)' },
      { student: 'Danisha Jothi .M', dept: 'BE - ECE', institution: 'Sri Sairam Engineering College', programme: 'M.E. Embedded System Technologies' },
    ],
  };

  const supportActivities = [
    { year: '2023 - 2024', name: 'Session on IELTS Demo & Overseas Test Strategy', resource: 'Mr. Inez Parris, IELTS Trainer, AECC Chennai', participants: '32', date: '29.08.2023' },
    { year: '2023 - 2024', name: 'International Education Seminar & IELTS Importance', resource: 'Resource Person from IDP International Education', participants: '60', date: '25.08.2023' },
    { year: '2023 - 2024', name: 'Mastering Public Speaking & Crafting Impactful TEDx Talks', resource: 'Mr. V.A. Babu Charles Earnest, Founder Justart', participants: '96', date: '18.08.2023' },
    { year: '2022 - 2023', name: 'Seminar on Higher Study Opportunities in the UK', resource: 'SI-UK Overseas Consultancy Services', participants: '50', date: '21.02.2023' },
    { year: '2022 - 2023', name: 'Awareness Program on Higher Education in Europe', resource: 'Mr. Sujith Menon, CEO Synergy Group', participants: '120', date: '09.02.2023' },
    { year: '2022 - 2023', name: 'Seminar on Career Enhancement Through GATE', resource: 'Mr. Murali Karthikeyan, Head Academics – GATE, TIME', participants: '120', date: '10.09.2023' },
    { year: '2021 - 2022', name: 'Study Abroad Guidance & University Shortlisting', resource: 'Challas Consultancy Services', participants: '80', date: '19.03.2022' },
    { year: '2020 - 2021', name: 'Preparation Strategy for Common Admission Test (CAT)', resource: 'Mr. Sathyanarayanan K S, Manager TIME Chennai', participants: '50', date: '10.06.2021' },
    { year: '2020 - 2021', name: 'Webinar on Career Enhancement Through GATE', resource: 'Mr. Murali Karthikeyan, Head Academics – GATE, TIME', participants: '434', date: '05.06.2021' },
    { year: '2020 - 2021', name: 'Career Enhancement & Competitive Exam Guidance', resource: 'Mr. Murali Karthikeyan, Head Academics – GATE, TIME', participants: '96', date: '29.01.2021' },
  ];

  const activeEnrolments = studentEnrolments[selectedYear] || [];

  return (
    <div className="w-full">
      {/* SECTION 1: Canvas A (White / #121214) — Higher Education Cell Overview & Functions */}
      <section className="pt-8 sm:pt-12 md:pt-14 pb-10 sm:pb-14 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-8">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              CAREER PATHWAYS &amp; HIGHER EDUCATION CELL
            </h2>
            <div className="space-y-3 w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
              <p>
                The Higher Education Committee at Mohamed Sathak A.J. College of Engineering regularly organizes interaction sessions with successful alumni pursuing postgraduate degrees and external career specialists. These initiatives provide interested students with invaluable insights into higher education pathways, university selection, standardized exam preparation, and global academic careers.
              </p>
              <p>
                Comprehensive admissions counseling is offered to study abroad aspirants, optimizing their prospects of securing admissions into top global universities in India, the USA, the UK, Germany, Singapore, and Australia.
              </p>
            </div>
          </div>

          <div className="pt-2 space-y-4">
            <h3 className="text-lg font-bold font-oswald uppercase text-foreground">
              Core Functions of the Cell
            </h3>
            <div className="divide-y divide-border/40 font-libre">
              {cellFunctions.map((fn, idx) => (
                <div
                  key={idx}
                  className="py-3 px-1 sm:px-3 flex items-start gap-3 sm:gap-4 hover:bg-primary/[0.02] transition-colors"
                >
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs mt-0.5 border border-primary/20 shadow-2xs">
                    {idx + 1}
                  </span>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5">
                    {fn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider A -> B */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — Student Higher Education Enrolment Records */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-14 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              STUDENT HIGHER EDUCATION ENROLMENT RECORDS
            </h2>

            {/* Custom Dropdown Select */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-bold font-oswald uppercase tracking-wider text-foreground/70 hidden sm:inline">
                Academic Year:
              </span>
              <CustomDropdown
                options={Object.keys(studentEnrolments).map((yr) => ({
                  value: yr,
                  label: `${yr} Academic Year`,
                }))}
                value={selectedYear}
                onChange={(val) => setSelectedYear(val)}
              />
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-16">
                    S.No
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-48">
                    Student Name
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-36">
                    UG Program
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5">
                    Admitted University / Institute
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-52">
                    Program Admitted
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {activeEnrolments.map((rec, idx) => (
                  <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                    <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm whitespace-nowrap">
                      {String(idx + 1).padStart(2, "0")}
                    </td>
                    <td className="px-4 py-3.5 font-libre font-bold text-foreground text-sm">
                      {rec.student}
                    </td>
                    <td className="px-4 py-3.5 font-oswald font-bold text-foreground/80 text-xs sm:text-sm whitespace-nowrap">
                      {rec.dept}
                    </td>
                    <td className="px-4 py-3.5 font-libre font-semibold text-xs sm:text-sm text-foreground">
                      {rec.institution}
                    </td>
                    <td className="px-4 py-3.5 font-oswald font-bold text-primary text-xs sm:text-sm whitespace-nowrap">
                      {rec.programme}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Wave Divider B -> A */}
      <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* SECTION 3: Canvas A (White / #121214) — Higher Education Seminars & Workshops */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-14 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            HIGHER EDUCATION SEMINARS &amp; EXAM WORKSHOPS
          </h2>

          <div className="overflow-x-auto border border-border bg-white dark:bg-[#121214] shadow-xs rounded-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                <tr>
                  <th className="py-3.5 px-4 text-center w-16 whitespace-nowrap">
                    S.No
                  </th>
                  <th className="py-3.5 px-4 w-28 whitespace-nowrap">
                    Year
                  </th>
                  <th className="py-3.5 px-4 min-w-[240px]">
                    Activity Name &amp; Focus
                  </th>
                  <th className="py-3.5 px-4 min-w-[220px]">
                    Resource Person / Agency
                  </th>
                  <th className="py-3.5 px-4 text-center w-28 whitespace-nowrap">
                    Attendees
                  </th>
                  <th className="py-3.5 px-4 text-center w-28 whitespace-nowrap">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border font-libre">
                {supportActivities.map((act, idx) => (
                  <tr key={idx} className="hover:bg-muted/50 transition-colors duration-150 group">
                    <td className="py-3.5 px-4 font-oswald font-bold text-primary text-sm whitespace-nowrap text-center">
                      {String(idx + 1).padStart(2, "0")}
                    </td>
                    <td className="py-3.5 px-4 font-oswald font-bold text-foreground text-xs whitespace-nowrap">
                      {act.year}
                    </td>
                    <td className="py-3.5 px-4 font-libre font-bold text-foreground text-sm">
                      {act.name}
                    </td>
                    <td className="py-3.5 px-4 font-libre font-medium text-xs sm:text-sm text-foreground/85">
                      {act.resource}
                    </td>
                    <td className="py-3.5 px-4 font-oswald font-bold text-primary text-sm text-center whitespace-nowrap">
                      {act.participants}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-xs text-foreground/75 text-center whitespace-nowrap">
                      {act.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Wave Divider A -> B */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* SECTION 4: Canvas B (#F3F3F2 / #18181B) — Placement Cell Leadership & Committee */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-14 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            PLACEMENT CELL LEADERSHIP &amp; COMMITTEE
          </h2>

          <div className="overflow-x-auto border border-border bg-white dark:bg-[#121214] shadow-xs rounded-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                <tr>
                  <th className="py-3.5 px-4 text-center w-16 whitespace-nowrap">
                    S.No
                  </th>
                  <th className="py-3.5 px-4 min-w-[260px] whitespace-nowrap">
                    Name
                  </th>
                  <th className="py-3.5 px-4 min-w-[260px]">
                    Designation &amp; Department
                  </th>
                  <th className="py-3.5 px-4 w-40 whitespace-nowrap">
                    Role in Cell
                  </th>
                  <th className="py-3.5 px-4 w-48 whitespace-nowrap">
                    Contact Email
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border font-libre">
                {placementCommitteeMembers.map((member) => (
                  <tr key={member.sno} className="hover:bg-muted/50 transition-colors duration-150 group">
                    <td className="py-3.5 px-4 font-oswald font-bold text-primary text-sm whitespace-nowrap text-center">
                      {member.sno}
                    </td>
                    <td className="py-3.5 px-4 font-libre font-bold text-foreground text-sm whitespace-nowrap">
                      {member.name}
                    </td>
                    <td className="py-3.5 px-4 font-libre font-medium text-xs sm:text-sm text-foreground/90">
                      <p className="font-semibold text-foreground">{member.designation}</p>
                      <p className="text-xs text-foreground/75 mt-0.5">{member.dept}</p>
                    </td>
                    <td className="py-3.5 px-4 font-oswald font-bold text-primary text-xs sm:text-sm whitespace-nowrap">
                      {member.role}
                    </td>
                    <td className="py-3.5 px-4 font-libre font-medium text-xs text-foreground/80 whitespace-nowrap">
                      <a href={`mailto:${member.email}`} className="hover:text-primary hover:underline">
                        {member.email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Wave Divider B -> A */}
      <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* SECTION 5: Canvas A (White / #121214) — Direct Placement Cell Contact */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-14 sm:pb-18 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            DIRECT PLACEMENT CELL CONTACT
          </h2>

          <div className="p-6 sm:p-8 rounded-2xl bg-foreground/[0.02] border border-border/60 dark:border-white/15 space-y-6">
            <div className="text-center space-y-1">
              <span className="text-xs font-black font-oswald uppercase tracking-widest text-primary">
                Direct Placement Cell Contact
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-oswald uppercase text-foreground">
                Mr. S.V. Vinodh
              </h3>
              <p className="text-sm font-oswald uppercase text-foreground/80 font-bold">
                Head — Training &amp; Placement Cell | Mohamed Sathak A.J. College of Engineering
              </p>
              <p className="text-xs sm:text-sm text-foreground/75 font-libre font-medium pt-1 max-w-xl mx-auto">
                34, Rajiv Gandhi Salai (OMR), Inside SIPCOT IT Park, Siruseri, Chennai – 603103, Tamil Nadu, India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-border/40">
              <div className="flex items-center justify-center gap-3 text-center md:text-left">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold font-oswald uppercase text-foreground/70 block">
                    Phone / Mobile
                  </span>
                  <a href="tel:+919940902255" className="text-xs sm:text-sm font-bold font-libre text-foreground hover:text-primary transition-colors">
                    +91 99409 02255
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 text-center md:text-left">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold font-oswald uppercase text-foreground/70 block">
                    Official Email
                  </span>
                  <a href="mailto:placement@msajce-edu.in" className="text-xs sm:text-sm font-bold font-libre text-foreground hover:text-primary transition-colors">
                    placement@msajce-edu.in
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 text-center md:text-left">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/20">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold font-oswald uppercase text-foreground/70 block">
                    Working Hours
                  </span>
                  <span className="text-xs sm:text-sm font-medium font-libre text-foreground">
                    Mon – Sat: 8:30 AM – 4:30 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
