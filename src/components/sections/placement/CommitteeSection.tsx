import React from 'react';
import { Phone, Mail, MapPin, Globe, UserCheck } from 'lucide-react';

export const CommitteeSection: React.FC = () => {
  const committeeMembers = [
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

  return (
    <div className="w-full">
      {/* SECTION 1: Canvas A (White / #121214) — Contact Details */}
      <section className="pt-8 sm:pt-12 md:pt-14 pb-8 sm:pb-12 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            GET IN TOUCH WITH US
          </h2>

          <div className="p-6 sm:p-8 rounded-2xl bg-foreground/[0.02] border border-border/60 dark:border-white/15 space-y-6">
            <div className="text-center space-y-1">
              <span className="text-xs font-black font-oswald uppercase tracking-widest text-primary">
                Placement Cell Contact
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-oswald uppercase text-foreground">
                Mr. S.V. Vinodh
              </h3>
              <p className="text-sm font-oswald uppercase text-foreground/80 font-bold">
                Placement Officer — Mohamed Sathak A.J. College of Engineering
              </p>
              <p className="text-xs sm:text-sm text-foreground/75 font-libre font-medium pt-1 max-w-xl mx-auto">
                34, Rajiv Gandhi Salai (OMR), Siruseri IT Park, Siruseri, Chennai – 603103.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-border/40">
              <div className="flex items-center justify-center gap-3 text-center md:text-left">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black font-oswald uppercase tracking-wider text-primary block">
                    Phone Contact
                  </span>
                  <p className="text-xs sm:text-sm font-bold font-libre text-foreground">
                    +91-99409 02255
                  </p>
                  <p className="text-xs font-bold font-libre text-foreground/80">
                    +91-89037 66391
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 text-center md:text-left">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black font-oswald uppercase tracking-wider text-primary block">
                    Email Enquiries
                  </span>
                  <a
                    href="mailto:placement@msajce-edu.in"
                    className="text-xs sm:text-sm font-bold font-libre text-primary hover:underline"
                  >
                    placement@msajce-edu.in
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 text-center md:text-left">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/20">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black font-oswald uppercase tracking-wider text-primary block">
                    Official Portal
                  </span>
                  <a
                    href="https://www.msajce-edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-bold font-libre text-primary hover:underline"
                  >
                    www.msajce-edu.in
                  </a>
                </div>
              </div>
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

      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — Placement Committee Directory */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-14 sm:pb-18 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            PLACEMENT COMMITTEE MEMBERS
          </h2>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-16">
                    S.No
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 min-w-[260px]">
                    Member Name
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 min-w-[260px]">
                    Designation &amp; Department
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-44">
                    Committee Position
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-48">
                    Contact Email
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {committeeMembers.map((member) => (
                  <tr key={member.sno} className="hover:bg-foreground/[0.02] transition-colors">
                    <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm whitespace-nowrap">
                      {member.sno}
                    </td>
                    <td className="px-4 py-3.5 font-libre font-bold text-foreground text-sm whitespace-nowrap">
                      {member.name}
                    </td>
                    <td className="px-4 py-3.5 font-libre font-medium text-xs sm:text-sm text-foreground/90">
                      <p className="font-semibold text-foreground">{member.designation}</p>
                      <p className="text-foreground/75 text-xs mt-0.5">{member.dept}</p>
                    </td>
                    <td className="px-4 py-3.5 font-oswald font-bold text-primary text-xs sm:text-sm whitespace-nowrap">
                      {member.role}
                    </td>
                    <td className="px-4 py-3.5 font-libre font-medium text-xs sm:text-sm text-foreground/80 whitespace-nowrap">
                      <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
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
    </div>
  );
};
