import React, { useState } from 'react';
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

  const committeeMembers = [
    { sno: '1', name: 'Mr. S.V. Vinodh', designation: 'Assistant Professor — EEE', position: 'Head' },
    { sno: '2', name: 'Mr. Ajin Sijo John', designation: 'Assistant Professor — MECH', position: 'Member' },
    { sno: '3', name: 'Mrs. N. Kavitha', designation: 'Assistant Professor — EEE', position: 'Member' },
    { sno: '4', name: 'Mr. V.A. Babu Charies Earnest', designation: 'TEDx Speaker & Founder, Justart', position: 'Member' },
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
      {/* SECTION 1: Canvas A (White / #121214) — Higher Education Cell Overview */}
      <section className="pt-8 sm:pt-12 md:pt-14 pb-10 sm:pb-14 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            HIGHER EDUCATION CELL
          </h2>

          <div className="space-y-4 w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
            <p>
              The Higher Education Committee at Mohamed Sathak A.J. College of Engineering regularly organizes interaction sessions with successful alumni pursuing postgraduate degrees and external career specialists. These initiatives provide interested students with invaluable insights into higher education pathways, university selection, standardized exam preparation, and global academic careers.
            </p>
            <p>
              Comprehensive admissions counseling is offered to study abroad aspirants, optimizing their prospects of securing admissions into top global universities in India, the USA, the UK, Germany, Singapore, and Australia.
            </p>
          </div>

          <div className="pt-4 space-y-4">
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

      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — Higher Education Committee & Alumni Enrolments */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-14 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-8">
          {/* Committee Table */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              HIGHER EDUCATION COMMITTEE
            </h2>

            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-16">
                      S.No
                    </th>
                    <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-48">
                      Committee Member
                    </th>
                    <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5">
                      Designation
                    </th>
                    <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-36">
                      Position
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {committeeMembers.map((m) => (
                    <tr key={m.sno} className="hover:bg-foreground/[0.02] transition-colors">
                      <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm whitespace-nowrap">
                        0{m.sno}
                      </td>
                      <td className="px-4 py-3.5 font-libre font-bold text-foreground text-sm">
                        {m.name}
                      </td>
                      <td className="px-4 py-3.5 font-libre font-medium text-xs sm:text-sm text-foreground/90">
                        {m.designation}
                      </td>
                      <td className="px-4 py-3.5 font-oswald font-bold text-primary text-xs sm:text-sm whitespace-nowrap">
                        {m.position}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Student Enrolment Directory Table with Year Selector Dropdown */}
          <div className="space-y-4 pt-4 border-t border-border/40">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                STUDENT HIGHER EDUCATION ENROLMENT RECORDS
              </h2>

              {/* Custom Dropdown Select */}
              <div className="flex items-center gap-2">
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

      {/* SECTION 3: Canvas A (White / #121214) — Higher Education Seminars & Workshops Table */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-14 sm:pb-18 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            HIGHER EDUCATION SEMINARS &amp; EXAM WORKSHOPS
          </h2>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-16">
                    S.No
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-28">
                    Year
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5">
                    Activity Name &amp; Focus
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5">
                    Resource Person / Agency
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-28 text-center">
                    Attendees
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-28 text-center">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {supportActivities.map((act, idx) => (
                  <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                    <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm whitespace-nowrap">
                      {String(idx + 1).padStart(2, "0")}
                    </td>
                    <td className="px-4 py-3.5 font-oswald font-bold text-foreground text-xs whitespace-nowrap">
                      {act.year}
                    </td>
                    <td className="px-4 py-3.5 font-libre font-bold text-foreground text-sm">
                      {act.name}
                    </td>
                    <td className="px-4 py-3.5 font-libre font-medium text-xs sm:text-sm text-foreground/85">
                      {act.resource}
                    </td>
                    <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm text-center whitespace-nowrap">
                      {act.participants}
                    </td>
                    <td className="px-4 py-3.5 font-mono text-xs text-foreground/75 text-center whitespace-nowrap">
                      {act.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
