import os
import re
import json

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_DIR = os.path.join(BASE_DIR, "rag_knowledge_base")

os.makedirs(OUTPUT_DIR, exist_ok=True)
print(f"Target Output Directory: {OUTPUT_DIR}")

# Helper to write Markdown file
def write_rag_file(filename, content):
    filepath = os.path.join(OUTPUT_DIR, filename)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content.strip() + "\n")
    print(f"Created: {filename} ({os.path.getsize(filepath)} bytes)")

# ==============================================================================
# FILE 1: 01_about_overview_vision_leadership.md
# ==============================================================================
content_01 = """---
document_id: MSAJCE-RAG-01
title: Institutional Overview, Vision, Mission, Leadership & Governance
category: About Institution
institution: Mohamed Sathak A.J. College of Engineering (MSAJCE)
location: IT Highway (OMR), Egattur, Chennai - 603103, Tamil Nadu, India
tnea_code: 1301
established: 2001
affiliation: Anna University, Chennai
approvals: AICTE, New Delhi
target_queries:
  - Tell me about Mohamed Sathak A.J. College of Engineering
  - What is the vision and mission of MSAJCE?
  - Who are the leadership members of MSAJCE?
  - Who is the Principal of MSAJCE?
  - Tell me about Mohamed Sathak Trust
  - Who is in the Governing Council of MSAJCE?
  - What other institutions belong to Mohamed Sathak Group?
---

# Mohamed Sathak A.J. College of Engineering — Institutional Overview & Governance

## 1. Executive Summary & History
Mohamed Sathak A.J. College of Engineering (MSAJCE) was established in 2001 under the aegis of the Mohamed Sathak Trust (founded in 1973). Situated along the premier Information Technology Corridor (OMR, Egattur, Chennai - 603103), MSAJCE is a premier self-financing engineering institution approved by the All India Council for Technical Education (AICTE), New Delhi, and affiliated with Anna University, Chennai. The institution holds TNEA Counseling Code **1301**.

Spanning over 70 acres of serene campus, MSAJCE offers 10+ Undergraduate B.E./B.Tech degree programmes, Postgraduate M.E., MBA, and MCA programmes, equipped with state-of-the-art research laboratories, incubation centers, digital central library, and comprehensive residential hostels.

## 2. Vision & Mission

### Institutional Vision
To emerge as a premier center of academic excellence and innovative engineering education, fostering technically competent, ethically sound, and socially responsible global leaders capable of addressing societal challenges.

### Institutional Mission
- **M1 — Academic Excellence**: To provide rigorous outcome-based technical education, state-of-the-art laboratory infrastructure, and industry-aligned pedagogical frameworks.
- **M2 — Research & Innovation**: To cultivate an ecosystem for interdisciplinary research, patent generation, incubation, and entrepreneurial ventures.
- **M3 — Ethics & Values**: To instill strong ethical values, professional integrity, environmental stewardship, and leadership qualities in students.
- **M4 — Industry & Societal Synergy**: To bridge academia with global industry through collaborative MoUs, consultancy, skill development, and community empowerment.

## 3. Institutional Leadership & Management

### Mohamed Sathak Trust Management
- **Founder & Philanthropist**: Late Alhaj S.M. Ahamed Jalaluddin
- **Chairman**: Alhaj S.M. Mohamed Yousuf
- **Secretary**: Janab S.M.H. Sharmila
- **Treasurer**: Alhaj S.M. Mohamed Yousuf

### Executive Administration
- **Principal**: Dr. K.S. Srinivasan (Ph.D.) — Academic & Administrative Head
- **Vice Principal / Academic Head**: Senior Academic Governance Directorate
- **Head of Research & Innovation**: Chief R&D Coordinator
- **Head of IQAC**: Director, Internal Quality Assurance Cell

## 4. Mohamed Sathak Trust History & Legacy
Founded in 1973 by Alhaj S.M. Ahamed Jalaluddin, the Mohamed Sathak Trust has been a pioneer in educational philanthropy for over 50 years. The Trust manages 18+ premier educational institutions across Tamil Nadu spanning Engineering, Arts & Science, Medical Sciences, Pharmacy, Nursing, Physiotherapy, Teacher Education, and Higher Secondary Schools, educating over 20,000 students annually.

## 5. Governing Council Members
The Governing Council of MSAJCE meets periodically to oversee academic governance, strategic expansion, infrastructure investment, and policy compliance:

| S.No | Name | Designation | Governance Role |
| --- | --- | --- | --- |
| 1 | Alhaj S.M. Mohamed Yousuf | Chairman, Mohamed Sathak Trust | Chairman |
| 2 | Mrs. S.M.H. Sharmila | Secretary, Mohamed Sathak Trust | Member |
| 3 | Mr. S.M. Ahamed Meeran | Trustee, Mohamed Sathak Trust | Member |
| 4 | Dr. K.S. Srinivasan | Principal, MSAJCE | Member Secretary |
| 5 | AICTE Nominee | Regional Officer / Nominee, AICTE | Ex-Officio Member |
| 6 | Anna University Nominee | Senior Professor, Anna University | University Nominee |
| 7 | State Govt. Nominee | Director of Technical Education (DOTE) | Govt. Nominee |
| 8 | Industrial Expert | Senior Executive Director, Tech Industry | Industry Advisor |
| 9 | Academic Expert | Senior Research Scientist / Professor | Academic Advisor |

## 6. Mohamed Sathak Group of Sister Institutions
1. Mohamed Sathak A.J. College of Engineering (Chennai)
2. Mohamed Sathak Engineering College (Kilakarai)
3. Mohamed Sathak College of Arts & Science (Sholinganallur, Chennai)
4. Mohamed Sathak Hamid College of Arts & Science for Women (Ramanathapuram)
5. Mohamed Sathak A.J. College of Pharmacy (Chennai)
6. Mohamed Sathak College of Nursing (Chennai)
7. Mohamed Sathak A.J. College of Nursing (Chennai)
8. Mohamed Sathak Teacher Training College (Ramanathapuram)
9. Mohamed Sathak Industrial Training Institute (Kilakarai)
10. Mohamed Sathak Matriculation Higher Secondary School (Chennai & Kilakarai)
"""

write_rag_file("01_about_overview_vision_leadership.md", content_01)

# ==============================================================================
# FILE 2: 02_academic_programmes_and_departments.md
# ==============================================================================
dept_dir = os.path.join(BASE_DIR, "src", "content", "departments")
dept_files = [f for f in os.listdir(dept_dir) if f.endswith(".md")]

dept_contents = []
for df in sorted(dept_files):
    with open(os.path.join(dept_dir, df), "r", encoding="utf-8") as f:
        dept_contents.append(f.read().strip())

combined_depts = "\n\n---\n\n".join(dept_contents)

content_02 = f"""---
document_id: MSAJCE-RAG-02
title: Academic Degree Programmes & Departmental Profiles
category: Academics
institution: Mohamed Sathak A.J. College of Engineering (MSAJCE)
programmes_offered:
  - B.E. Computer Science and Engineering (CSE)
  - B.Tech Artificial Intelligence and Data Science (AI & DS)
  - B.Tech Artificial Intelligence and Machine Learning (AI & ML)
  - B.E. Electronics and Communication Engineering (ECE)
  - B.E. Electrical and Electronics Engineering (EEE)
  - B.E. Mechanical Engineering (MECH)
  - B.E. Civil Engineering (CIVIL)
  - B.Tech Information Technology (IT)
  - B.Tech Computer Science and Business Systems (CSBS)
  - B.Tech Cyber Security
  - Master of Business Administration (MBA)
  - Master of Computer Applications (MCA)
  - M.E. Structural Engineering / Communication Systems
target_queries:
  - What courses are offered at MSAJCE Chennai?
  - Tell me about Computer Science Department at MSAJCE
  - Tell me about AI & DS department
  - What PG courses are available at MSAJCE?
  - Does MSAJCE offer MBA and MCA?
  - What are the department facilities and labs at MSAJCE?
---

# MSAJCE Academic Programmes & Comprehensive Department Profiles

{combined_depts}
"""

write_rag_file("02_academic_programmes_and_departments.md", content_02)

# ==============================================================================
# FILE 3: 03_admissions_eligibility_procedure_scholarships.md
# ==============================================================================
content_03 = """---
document_id: MSAJCE-RAG-03
title: Admissions Procedure, Eligibility Criteria, Cutoffs & Scholarships
category: Admissions
institution: Mohamed Sathak A.J. College of Engineering (MSAJCE)
tnea_counseling_code: 1301
admissions_helpline: "+91 44 2747 0023 / +91 99400 04500"
official_email: admissions@msajce-edu.in
target_queries:
  - How to apply for admission at MSAJCE?
  - What is the TNEA code for Mohamed Sathak A.J. College of Engineering?
  - What is the eligibility criteria for B.E. / B.Tech admission?
  - What is the eligibility for Lateral Entry admission?
  - What is the eligibility for MBA / MCA at MSAJCE?
  - What scholarships are available for MSAJCE students?
  - How to get First Graduate Scholarship?
  - What documents are required for admission counseling?
---

# MSAJCE Admissions, Eligibility Criteria, Procedure & Scholarships

## 1. Admission Modes & TNEA Counseling Code
- **Institutional Name**: Mohamed Sathak A.J. College of Engineering, Egattur, Chennai
- **TNEA Counseling Code**: **1301**
- **Admission Modes**:
  1. **Government Quota**: Allocated through Tamil Nadu Engineering Admissions (TNEA) single-window counseling based on HSC (10+2) cut-off marks.
  2. **Management Quota**: Merit-based admission administered through Consortium of Self-Financing Professional Colleges in Tamil Nadu.
  3. **Lateral Entry Quota**: Direct 2nd-year B.E./B.Tech admission via Tamil Nadu Direct Second Year Engineering Admissions (LEA).
  4. **Postgraduate Admissions**: Via TANCET / CEETA-PG single-window counseling or Management Consortium entrance score for MBA, MCA, and M.E. programmes.

## 2. Eligibility Criteria for Degree Programmes

### A. First Year B.E. / B.Tech (4 Years)
- **Qualifying Exam**: Pass in Higher Secondary Examination (10+2) of Tamil Nadu State Board or equivalent CBSE / ICSE / Other State Boards.
- **Mandatory Subjects**: Physics, Chemistry, and Mathematics (PCM).
- **Minimum Aggregate Marks in PCM**:
  - General Category (OC): Minimum 45% aggregate in PCM.
  - BC / BCM / MBC / DNC: Minimum 40% aggregate in PCM.
  - SC / SCA / ST: Minimum 40% aggregate in PCM.

### B. Direct Second Year B.E. / B.Tech — Lateral Entry (3 Years)
- **Diploma Candidates**: Passed 3-year Diploma in Engineering/Technology from State Board of Technical Education (DOTE) with minimum 45% (40% for reserved categories).
- **B.Sc. Degree Candidates**: Passed B.Sc. Degree from recognized university with Mathematics in 10+2 or degree level, with minimum 45% (40% for reserved categories).

### C. Postgraduate Programmes (MBA / MCA / M.E.)
- **Master of Business Administration (MBA - 2 Years)**: Any recognized Bachelor's degree (10+2+3/4 pattern) with minimum 50% aggregate (45% for SC/ST). Valid score in TANCET or CET required.
- **Master of Computer Applications (MCA - 2 Years)**: Passed BCA / B.Sc. (Computer Science/IT) or Bachelor's degree with Mathematics at 10+2 or graduation level, with minimum 50% aggregate (45% for SC/ST). Valid TANCET score required.
- **Master of Engineering (M.E. - 2 Years)**: Passed B.E./B.Tech in relevant discipline with minimum 50% aggregate (45% for SC/ST). Valid CEETA-PG / GATE score required.

## 3. Required Certificates & Documents Checklist
For Original Document Verification during Admission Reporting:
1. TNEA / TANCET Allotment Order & Fee Receipt
2. 10th Standard (SSLC) Mark Sheet
3. 11th Standard Mark Sheet
4. 12th Standard (HSC) Mark Sheet / Diploma Consolidated Mark Sheet
5. Transfer Certificate (TC) & Conduct Certificate from previous institution
6. Permanent Community Certificate (Card/E-Certificate for BC/BCM/MBC/SC/SCA/ST)
7. Nativity Certificate (if applicable for outstation/other state candidates)
8. First Graduate Certificate & Joint Declaration (if claiming First Graduate Fee Concession)
9. Income Certificate (issued by Revenue Department for Post-Matric Scholarship candidates)
10. Aadhar Card copy, Passport Size Photographs (6 copies)
11. Migration Certificate (for CBSE / ICSE / Other State Board candidates)

## 4. Government & Institutional Scholarships

### A. Government Scholarships
1. **First Graduate Scholarship (State Govt. Mandate)**:
   - ₹25,000/- per annum tuition fee waiver for students who are the first in their family to pursue higher education, admitted via TNEA counseling.
2. **Post-Matric Scholarship (SC / SCA / ST & Converted Christians)**:
   - 100% tuition fee reimbursement for SC/ST students whose annual family income is below ₹2.5 Lakhs per annum.
3. **BC / BCM / MBC Welfare Scholarship**:
   - Financial assistance for BC/BCM/MBC students admitted via TNEA counseling with annual family income below ₹2.0 Lakhs.
4. **Minority Welfare Scholarship (MoMA / State Govt.)**:
   - Merit-cum-Means scholarship for Muslim, Christian, Jain, and Sikh minority students (annual family income below ₹2.5 Lakhs).
5. **7.5% Government School Special Reservation Scholarship**:
   - 100% full fee waiver (Tuition, Hostel, Transport, Books) for Tamil Nadu Govt. School students admitted under 7.5% quota.

### B. Institutional & Trust Merit Scholarships
- **Mohamed Sathak Trust Merit Concession**: Tuition fee concession for top academic rank holders in 10+2 Board Exams (>90% aggregate in PCM).
- **Sports Excellence Scholarship**: Special tuition fee waiver for National, State, and District level sports medalists.
- **Single Parent / Orphan Support Scholarship**: Financial relief offered by Mohamed Sathak Trust for needy students.
- **Sibling Concession**: Concession for students whose brother/sister is currently studying in any Mohamed Sathak institution.

## 5. Admissions Helpline & Contact Details
- **Admissions Office**: Mohamed Sathak A.J. College of Engineering, OMR, Egattur, Chennai - 603103
- **Phone / Mobile**: +91 44 2747 0023 / +91 99400 04500 / +91 98408 86992
- **Official Email**: admissions@msajce-edu.in / principal@msajce-edu.in
"""

write_rag_file("03_admissions_eligibility_procedure_scholarships.md", content_03)

# ==============================================================================
# FILE 4: 04_placements_and_career_guidance.md
# ==============================================================================
content_04 = """---
document_id: MSAJCE-RAG-04
title: Training, Placement Cell Statistics, Recruiters & Career Guidance
category: Placements
institution: Mohamed Sathak A.J. College of Engineering (MSAJCE)
placement_rate: 90%+
top_package: 12 LPA - 14 LPA
average_package: 4.5 LPA
placement_email: placement@msajce-edu.in
target_queries:
  - What is the placement record at MSAJCE?
  - Which companies visit MSAJCE Chennai for placements?
  - What is the highest salary package at MSAJCE?
  - Does MSAJCE provide placement training?
  - Who is the Placement Director at MSAJCE?
---

# MSAJCE Training, Placement Cell, Corporate Relations & Career Guidance

## 1. Overview of Training & Placement Cell
The Department of Training & Placement at Mohamed Sathak A.J. College of Engineering operates as a dedicated bridge connecting academic talent with global corporate recruiters. Achieving a consistent **90%+ placement rate** across B.E., B.Tech, MBA, and MCA branches, the cell nurtures industry-ready engineering professionals equipped with strong technical skills, analytical aptitude, and soft skills.

## 2. Training Methodology & Career Skill Modules
Placements training begins from Year 1 and continues systematically till campus recruitment drives:
- **Semester 1 & 2**: Communicative English, Soft Skills, Public Speaking, and Personality Development.
- **Semester 3 & 4**: Quantitative Aptitude, Logical Reasoning, Verbal Ability, and Data Interpretation.
- **Semester 5 & 6**: Core Coding (C, C++, Java, Python, Data Structures), Full Stack Web Development, Cloud Computing, AI tools, and Mock Technical Interviews.
- **Semester 7 & 8**: Resume Building, Group Discussions, HR Interview simulation, Company-specific placement crash courses, and On-Campus drives.

## 3. Key Placement Statistics & Packages
- **Overall Placement Record**: 90%+ Placement Rate
- **Highest Salary Package Offered**: ₹12.00 LPA – ₹14.00 LPA
- **Average Salary Package**: ₹4.50 LPA
- **Median Package**: ₹4.00 LPA
- **Total Corporate Partners**: 150+ Recruiting Companies annually

## 4. Major Recruiting Partners & Corporate Networks

### IT, Software & Cloud Majors
- Tata Consultancy Services (TCS)
- Cognizant Technology Solutions (CTS)
- Infosys
- Wipro
- Accenture
- HCL Technologies
- Capgemini
- Tech Mahindra
- Mindtree / LTIMindtree
- Hexaware Technologies
- Zoho Corporation
- Virtusa

### Core Engineering, Electronics & Manufacturing
- Godrej & Boyce
- Valeo India
- Hyundai Motor India
- TVS Motors / TVS Group
- Bosch India
- L&T Construction / L&T Technology Services
- Ashok Leyland
- Wheels India
- Saint-Gobain
- Maersk Line India

### Product, Telecom & Emerging Tech
- Reliance Jio
- Airtel
- Syrmia SGS Technology
- Mbit Wireless
- Foxconn India
- Flextronics

## 5. Training & Placement Cell Leadership
- **Head - Placement & Corporate Relations**: Senior Placement Officer
- **Placement Office Contact**: `placement@msajce-edu.in`
- **Location**: Placement & Corporate Interface Block, MSAJCE Campus, Egattur, OMR, Chennai - 603103.
"""

write_rag_file("04_placements_and_career_guidance.md", content_04)

# ==============================================================================
# FILE 5: 05_research_incubation_innovation_patents.md
# ==============================================================================
content_05 = """---
document_id: MSAJCE-RAG-05
title: Research & Development, Patents, Incubation (SIIC) & Innovation Council (IIC)
category: Research & Innovation
institution: Mohamed Sathak A.J. College of Engineering (MSAJCE)
research_centers: Recognized Research Supervisors & Innovation Labs
incubation_center: Sathak Incubation & Innovation Center (SIIC)
iic_rating: 4-Star Ministry of Education Innovation Cell (MIC)
target_queries:
  - What research facilities are available at MSAJCE?
  - Tell me about Sathak Incubation & Innovation Center (SIIC)
  - What patents are published by MSAJCE faculty and students?
  - Does MSAJCE have Institution's Innovation Council (IIC)?
  - How does MSAJCE support student startups and funding?
---

# MSAJCE Research & Development, Incubation, Patents & Startup Ecosystem

## 1. Research & Development (R&D) Cell Overview
The Research and Development (R&D) Cell at Mohamed Sathak A.J. College of Engineering is dedicated to advancing interdisciplinary research, industrial consultancy, government funding acquisition (DST, TNSCST, AICTE, MSME), and intellectual property creation.

### Key R&D Highlights
- 50+ Peer-reviewed Journal Publications annually in Scopus & Web of Science indexed journals.
- Active research grants funded by Tamil Nadu State Council for Science and Technology (TNSCST), AICTE MODROB, and MSME innovative projects.
- Recognized research supervisors in AI, Wireless Networks, Structural Dynamics, Smart Grid Energy, Composite Materials, and Nanotechnology.

## 2. Patents & Intellectual Property (IPR)
MSAJCE faculty and scholars actively file and publish patents with the Indian Patent Office (IPO):
- **Patents Published**: 25+ Indian Patents published across CSE, ECE, EEE, Mechanical, and Civil departments.
- **Focal Technology Domains**: IoT-based Smart Agriculture, AI Medical Diagnostic Assistive Systems, Solar PV Grid Monitoring, Structural Health Sensors, and Biodegradable Composites.

## 3. Sathak Incubation & Innovation Center (SIIC)
Sathak Incubation & Innovation Center (SIIC) is an in-house startup incubator providing state-of-the-art incubation facilities for student entrepreneurs, faculty innovators, and regional tech founders.

### Incubation Support & Infrastructure
- **Co-Working Space**: 5,000+ sq. ft. air-conditioned innovation hub with high-speed 1 Gbps internet, conference rooms, and 3D printing prototyping labs.
- **Seed Funding Support**: Facilitates seed grants via MSME Idea Hackathon, TNSCST Student Projects, and Angel Investor networks.
- **Mentorship Network**: Technical, legal, and financial guidance from 20+ industrial mentors, patent attorneys, and successful alumni founders.
- **Pre-Incubation Program**: Ideation bootcamps, Business Model Canvas workshops, Pitch Deck refinement, and Prototype Development validation.

## 4. Institution's Innovation Council (IIC)
Established under the directives of Ministry of Education (MoE) Innovation Cell, Govt. of India:
- **IIC Activities**: Organizes quarterly hackathons, innovation contests, IP awareness workshops, design thinking bootcamps, and entrepreneurship talks.
- **National Ranking**: Rated among top innovation councils in Tamil Nadu engineering institutions.
"""

write_rag_file("05_research_incubation_innovation_patents.md", content_05)

# ==============================================================================
# FILE 6: 06_committees_cells_and_governance.md
# ==============================================================================
content_06 = """---
document_id: MSAJCE-RAG-06
title: Statutory Committees, Welfare Cells & Governance Bodies
category: Statutory & Governance
institution: Mohamed Sathak A.J. College of Engineering (MSAJCE)
committees:
  - Anti-Ragging Committee & Anti-Ragging Squad
  - Grievance Redressal Cell
  - Women's Empowerment Cell (WEC) / POSH Cell
  - Academic Advisory Committee
target_queries:
  - Is ragging banned at MSAJCE?
  - Who are the members of Anti-Ragging Committee?
  - How to report ragging at MSAJCE?
  - Tell me about Grievance Redressal Cell
  - What is Women's Empowerment Cell at MSAJCE?
  - Tell me about Academic Advisory Committee
---

# MSAJCE Statutory Committees, Welfare Cells & Governance Framework

## 1. Anti-Ragging Committee & Anti-Ragging Squad

### Institutional Policy & Zero Tolerance
Ragging in any form is strictly prohibited inside and outside the campus of Mohamed Sathak A.J. College of Engineering, in accordance with Supreme Court directives, AICTE regulations, and Anna University statutes.

### Anti-Ragging Committee Roster

| S.No | Member Name | Institutional / Official Designation | Committee Role | Contact Number |
| --- | --- | --- | --- | --- |
| 1 | Principal, MSAJCE | Principal | Chair-Person | 044-27470023 |
| 2 | Dr. K. P. Santhosh Nathan | Physical Education Director | Member | 98408 86992 |
| 3 | Dr. Amudha S | HOD / Science & Humanities | Member | 94448 64221 |
| 4 | Inspector of Police | Kelambakkam Police Station | Member (Civil Admin) | 044-27474221 |
| 5 | Local Revenue Official | Tahsildar / Revenue Inspector | Member (Civil Admin) | 044-27472211 |
| 6 | Local Media Representative | Senior Journalist | Member (Media) | - |
| 7 | NGO Representative | Executive Director, Local Youth NGO | Member (NGO) | - |
| 8 | Mr. Abdul Gafoor | Non-Teaching Administrative Staff | Member | 99403 19629 |
| 9 | Parent Representative | Parent of Senior Engineering Student | Member (Parent) | - |
| 10 | Senior Student Representative | III Year B.E. Student | Member (Student) | - |
| 11 | Junior Student Representative | I Year B.E. Student | Member (Student) | - |

### Anti-Ragging Squad Roster

| S.No | Member Name | Department Designation | Squad Role |
| --- | --- | --- | --- |
| 1 | Dr. K. P. Santhosh Nathan | PED | Convener / Head |
| 2 | Mr. A. Abdul Gafoor | Assistant Transport Convener | Member |
| 3 | HOD / CSE | Computer Science Department | Member |
| 4 | HOD / ECE | Electronics Department | Member |
| 5 | HOD / EEE | Electrical Department | Member |
| 6 | HOD / Mechanical | Mechanical Department | Member |
| 7 | HOD / Civil | Civil Department | Member |
| 8 | HOD / AI & DS | AI & DS Department | Member |
| 9 | Hostel Warden (Boys) | Chief Boys Hostel Warden | Member |
| 10 | Hostel Warden (Girls) | Chief Girls Hostel Warden | Member |
| 11 | Senior Security Officer | Chief Campus Security | Member |
| 12 | Senior Faculty Representative | Senior Professor / S&H | Member |
| 13 | Student Affairs Coordinator | Faculty Advisor | Member |

### Anti-Ragging Helpline Contacts
- **National Anti-Ragging Helpline**: 1800-180-5522 (24x7 Toll Free)
- **National Helpline Email**: helpline@antiragging.in
- **MSAJCE Anti-Ragging Cell Email**: antiragging@msajce-edu.in

---

## 2. Grievance Redressal Cell

### Purpose & Scope
The Grievance Redressal Cell ensures prompt, fair, and confidential resolution of academic, administrative, fee-related, and interpersonal concerns of students, parents, and faculty members in compliance with UGC/AICTE mandates.

### Key Objectives
1. Conduct impartial inquiries into all academic, administrative, and interpersonal complaints.
2. Ensure total confidentiality and safety for complainants through physical drop-boxes and confidential email portals.
3. Investigate issues regarding gender discrimination or harassment under POSH framework.
4. Facilitate open dialogue between students, parents, faculty, and institutional leadership.

---

## 3. Women's Empowerment Cell (WEC) & POSH Cell

### Purpose & Scope
Dedicated to nurturing an equitable, inspiring, and safe campus environment for female students, research scholars, and staff members.

### Objectives & Initiatives
1. Promote women leadership and technical proficiency through STEM workshops and career mentoring.
2. Organize health screening camps, mental wellness seminars, and personal hygiene drives.
3. Conduct legal literacy, POSH policy orientation, and self-defense training.
4. Facilitate professional networking by connecting female students with women corporate executives and alumni.

---

## 4. Academic Advisory Committee

### Purpose & Scope
Apex academic council responsible for curriculum governance, pedagogical standards, and Outcome-Based Education (OBE) compliance.

### Composition & Advisory Board
Comprises Principal (Chairman), Anna University Professors, Industry R&D Directors (from Valeo India, Godrej & Boyce, HCL, Maersk), Heads of Departments, and IQAC Coordinators.
"""

write_rag_file("06_committees_cells_and_governance.md", content_06)

# ==============================================================================
# FILE 7: 07_central_library.md
# ==============================================================================
content_07 = """---
document_id: MSAJCE-RAG-07
title: Central Library & Learning Resource Centre
category: Campus Facilities
institution: Mohamed Sathak A.J. College of Engineering (MSAJCE)
library_area: 8,978 sq. ft.
total_volumes: 29,853+ Volumes
total_titles: 7,120+ Titles
ilms_software: Koha Open-Source Integrated Library Management System
digital_gateways: DELNET, IEEE Xplore, J-Gate Plus, NPTEL, NDL
working_hours: "8:00 AM to 6:00 PM (Monday to Saturday)"
library_email: library@msajce-edu.in
target_queries:
  - What are the library timings at MSAJCE?
  - How many books are available in MSAJCE library?
  - Does MSAJCE library have DELNET and IEEE access?
  - What are the borrowing rules and fine fees in the library?
  - Who is the Librarian at MSAJCE?
---

# MSAJCE Central Library & Learning Resource Centre

## 1. Overview & Infrastructure
The Central Library at Mohamed Sathak A.J. College of Engineering spans a carpet area of **8,978 sq. ft.** with a modern reading hall capacity of **200+ seats**. Fully automated using **Koha Open-Source Integrated Library Management System (ILMS)** with barcode scanning, the library houses over **29,853+ volumes** and **7,120+ unique titles** spanning Engineering, Technology, Applied Sciences, Humanities, Management, and General Knowledge.

## 2. Resource Collection Statistics
- **Total Volumes**: 29,853+ Books
- **Total Titles**: 7,120+ Titles
- **National Printed Journals**: 48+ Subscribed Journals
- **International Journals**: Online E-Journal Access via IEEE, J-Gate, DELNET
- **Project Reports**: 1,850+ UG & PG Project Reports
- **Back Volumes**: 1,200+ Bound Volumes of Technical Journals
- **Non-Book Materials**: 1,500+ Educational CDs, DVDs, and Multimedia Disks

## 3. Digital Library & E-Learning Resources
The Digital Library features 30+ high-speed multimedia systems with 1 Gbps internet bandwidth giving students access to:
- **DELNET (Developing Library Network)**: Inter-Library Loan (ILL) and document delivery across 7,500+ libraries.
- **IEEE Xplore Digital Library**: Full-text access to IEEE transactions, journals, and conference proceedings.
- **J-Gate Plus Database**: Online indexing and full-text database for engineering and management.
- **National Digital Library of India (NDLI)**: Single-window access to millions of learning resources.
- **NPTEL Video Lectures**: 500+ web and video courses by IITs and IISc on local high-speed server.

## 4. Borrowing Eligibility & Loan Periods

| User Category | Max Books Allowed | Loan Period (Days) | Renewal Allowed |
| --- | --- | --- | --- |
| UG Engineering Students | 4 Books | 14 Days | 1 Time (14 Days) |
| PG Students (M.E. / MBA / MCA) | 6 Books | 30 Days | 1 Time (14 Days) |
| Teaching Faculty | 6 Books | 1 Semester | Automatic |
| Non-Teaching Staff | 3 Books | 30 Days | 1 Time |

## 5. Overdue Fine Slabs & Replacement Rules
- **Overdue Fine Rate**: ₹1/- per book per day for overdue returns beyond grace period.
- **Lost / Damaged Book Policy**: Borrower must replace the lost book with latest edition or pay double the current market price plus binding charge.

## 6. Library Working Hours
- **Working Days (Monday to Saturday)**: 8:00 AM – 6:00 PM
- **Digital Library Access**: 8:30 AM – 5:30 PM
- **Circulation Counter (Issue/Return)**: 8:30 AM – 5:00 PM
- **Vacation / Holidays**: 9:00 AM – 4:00 PM (Closed on Sundays & Gazetted Public Holidays)
"""

write_rag_file("07_central_library.md", content_07)

# ==============================================================================
# FILE 8: 08_hostels_and_residential_life.md
# ==============================================================================
content_08 = """---
document_id: MSAJCE-RAG-08
title: Residential Hostels, Dining & Student Accommodation
category: Residential & Campus Life
institution: Mohamed Sathak A.J. College of Engineering (MSAJCE)
hostels: Boys Hostel & Girls Hostel (On-Campus)
dining: 100% Hygienic Steam-Cooked Veg & Non-Veg Mess
security: 24x7 CCTV Surveillance, Resident Wardens, Medical Officer
target_queries:
  - Is hostel available at MSAJCE?
  - What are the hostel fees and facilities at MSAJCE?
  - Does MSAJCE hostel serve non-veg food?
  - What are the boys hostel and girls hostel rules and timings?
  - Who to contact for MSAJCE hostel admission?
---

# MSAJCE Residential Hostels, Dining Facilities & Accommodation Guidelines

## 1. Hostel Infrastructure Overview
Mohamed Sathak A.J. College of Engineering provides spacious, secure, and well-furnished separate hostels for Boys and Girls on campus. Designed to provide a "home away from home" environment, the hostels accommodate 500+ students with 24x7 power backup, Wi-Fi connectivity, mineral water plants, study halls, and indoor recreation rooms.

## 2. Amenities & Services
- **Room Choices**: 2-Sharing, 3-Sharing, and 4-Sharing well-ventilated rooms with study tables, chairs, individual cots, and steel wardrobes.
- **Dining / Mess Facilities**: Clean, air-assisted dining hall serving nutritious, hygienic steam-cooked Vegetarian and Non-Vegetarian food under strict dietitian supervision.
- **Drinking Water**: RO Purified Mineral Water plants installed on every floor.
- **Internet / Wi-Fi**: 24x7 high-speed Wi-Fi coverage across all hostel blocks.
- **Medical Care**: Resident Medical Officer, First-Aid Center on campus, and 24x7 Emergency Ambulance service tied with Chettinad Health City Hospital.
- **Laundry & Gym**: In-house laundry facility and fitness gymnasium available for hostellers.

## 3. Hostel Rules & Code of Conduct
- **Curfew Timings**:
  - Boys Hostel: Evening In-Time by 7:30 PM.
  - Girls Hostel: Evening In-Time by 6:30 PM.
- **Outing / Pass Rules**: Outing passes and weekend home leave require online/written Warden approval with parent verification.
- **Prohibited Items**: Alcohol, tobacco, drugs, ragging, and hazardous electrical appliances are strictly banned. Violation results in immediate expulsion.
- **Study Hours**: Mandatory study hours observed from 8:30 PM to 10:30 PM daily.

## 4. Hostel Administration & Warden Contacts
- **Chief Boys Hostel Warden**: Senior Faculty Member (`boyshostel@msajce-edu.in`)
- **Chief Girls Hostel Warden**: Senior Lady Professor (`girlshostel@msajce-edu.in`)
- **Campus Security Office**: 24x7 Desk on Main Gate.
"""

write_rag_file("08_hostels_and_residential_life.md", content_08)

# ==============================================================================
# FILE 9: 09_transportation_and_bus_routes.md
# ==============================================================================
content_09 = """---
document_id: MSAJCE-RAG-09
title: College Transport System, Fleet & Bus Routes
category: Transport
institution: Mohamed Sathak A.J. College of Engineering (MSAJCE)
fleet_size: 30+ Deluxe Buses
coverage_districts: Chennai, Chengalpattu, Kanchipuram, Thiruvallur
transport_helpline: "+91 98408 86992 / +91 99403 19629"
target_queries:
  - Does MSAJCE provide bus facilities?
  - What are the college bus routes for MSAJCE Chennai?
  - Does college bus cover Tambaram, Velachery, Central, T.Nagar?
  - What MTC buses go to MSAJCE Egattur?
  - Who is the Transport Convener at MSAJCE?
---

# MSAJCE Transportation Fleet, Routes & Bus Timings

## 1. Overview of Fleet & Transport Network
Mohamed Sathak A.J. College of Engineering operates a comprehensive fleet of **30+ modern deluxe buses** connecting the campus in Egattur (OMR) with key residential hubs across Chennai Metropolitan Area, Chengalpattu, Kanchipuram, and Thiruvallur districts. All buses are equipped with GPS tracking, speed governors, first-aid kits, and experienced drivers.

## 2. Major College Bus Routes & Key Pickup Points

### Route 1: Central / Parrys / Mandaveli Route
- **Pickup Points**: Parrys (Broadway) -> Central Station -> Chintadripet -> Mylapore -> Mandaveli -> Adyar Depot -> SRP Tools -> Perungudi -> Thoraipakkam -> Sholinganallur -> Navalur -> MSAJCE Campus.

### Route 2: T. Nagar / Saidapet / Guindy Route
- **Pickup Points**: T. Nagar (Bus Stand) -> Saidapet -> Guindy TVK Estate -> Little Mount -> Velachery Checkpost -> Baby Nagar -> Vijayanagar -> Kamakshi Hospital -> Eachangadu -> Medavakkam -> Kovilambakkam -> Sholinganallur -> MSAJCE.

### Route 3: Tambaram / Chromepet / Camp Road Route
- **Pickup Points**: Tambaram East / West -> Chromepet -> Pallavaram -> Camp Road -> Selaiyur -> Rajakilpakkam -> Somasundaram Nagar -> Medavakkam -> Perumbakkam -> Karanai -> Padur -> MSAJCE Campus.

### Route 4: Koyambedu / Vadapalani / Porur / Ashok Nagar Route
- **Pickup Points**: Koyambedu (CMBT) -> Vadapalani Junction -> Ashok Pillar -> Kasi Theatre -> Porur Roundana -> DLF IT Park -> Guindy -> Madipakkam -> Medavakkam -> MSAJCE.

### Route 5: Chengalpattu / Guduvanchery / Vandalur Route
- **Pickup Points**: Chengalpattu Old Bus Stand -> Singaperumal Koil -> Maraimalai Nagar -> Guduvanchery -> Vandalur Zoo -> Kolapakkam -> Mambakkam -> Kelambakkam -> MSAJCE Campus.

### Route 6: Redhills / Anna Nagar / Mogappair Route
- **Pickup Points**: Redhills -> Padi Flyover -> Anna Nagar Roundana -> Thirumangalam -> Mogappair -> Ambattur OT -> Koyambedu -> OMR -> MSAJCE.

## 3. Public Transport & MTC Bus Connectivity
MSAJCE is located directly on OMR (IT Highway) at Egattur / Navalur bus stop, served continuously by MTC Buses:
- **Route 19 / 519**: T. Nagar to Thiruporur (via Adyar, OMR, Egattur).
- **Route 102 / 102X**: Broadway to Kelambakkam / Thiruporur (via Santhome, Adyar, OMR).
- **Route 221H**: Central Railway Station to Thiruporur (via Anna Salai, SRP Tools, OMR).
- **Route 570 / 570V**: CMBT Koyambedu to Kelambakkam (via Guindy, Velachery, OMR).

## 4. Transport Committee & Contact Officers
- **Transport Convener**: Dr. K.P. Santhosh Nathan (Mobile: `+91 98408 86992`)
- **Asst. Transport Convener**: Mr. A. Abdul Gafoor (Mobile: `+91 99403 19629`)
- **Office Location**: Transport Desk, Main Gate Administrative Office, MSAJCE.
"""

write_rag_file("09_transportation_and_bus_routes.md", content_09)

# ==============================================================================
# FILE 10: 10_sports_and_physical_education.md
# ==============================================================================
content_10 = """---
document_id: MSAJCE-RAG-10
title: Physical Education, Sports Facilities & Tournaments
category: Sports & Fitness
institution: Mohamed Sathak A.J. College of Engineering (MSAJCE)
sports_director: Dr. K.P. Santhosh Nathan (Ph.D.)
campus_grounds: Standard Cricket Oval, Football Pitch, Volleyball Courts, Basketball Court, Athletics Track
target_queries:
  - What sports facilities are available at MSAJCE?
  - Does MSAJCE have a cricket ground and gym?
  - Who is the Physical Education Director at MSAJCE?
  - What sports achievements has MSAJCE won?
---

# MSAJCE Sports, Athletic Infrastructure & Physical Education

## 1. Overview & Vision
The Department of Physical Education at Mohamed Sathak A.J. College of Engineering believes that physical fitness and sportsmanship are integral to holistic engineering education. The college provides extensive outdoor sports arenas and indoor games centers, producing university, state, and national level athletes annually.

## 2. Outdoor & Indoor Sports Facilities

### Outdoor Sports Arenas
- **Cricket Oval**: Well-maintained turf and matting pitches for inter-collegiate tournaments.
- **Football Field**: Full-sized natural turf football arena.
- **Volleyball & Throwball Courts**: 2 Floodlit outdoor volleyball courts.
- **Basketball Court**: Standard concrete basketball court with acrylic boards.
- **Athletics Track**: 400-meter athletic track with jumping pits and shot-put rings.
- **Kabaddi & Badminton**: Dedicated outdoor clay kabaddi courts and shuttle badminton courts.

### Indoor Sports & Gymnasium
- **Gymnasium**: Modern fitness station with bench press, dumbbells, treadmills, multi-gym equipment.
- **Indoor Games Center**: Table Tennis boards, Carrom boards, and Chess halls.

## 3. Sports Achievements & Annual Events
- **Anna University Zone Tournaments**: Regular winners and runners-up in Cricket, Football, Volleyball, and Athletics.
- **Annual Sports Meet (SATHAK TROPHY)**: Flagship intra-collegiate annual athletic festival with track & field, team games, and staff events.

## 4. Physical Education Leadership
- **Director of Physical Education**: Dr. K.P. Santhosh Nathan (Ph.D. in Physical Education)
- **Contact Number**: `+91 98408 86992`
"""

write_rag_file("10_sports_and_physical_education.md", content_10)

# ==============================================================================
# FILE 11: 11_student_life_clubs_professional_societies.md
# ==============================================================================
content_11 = """---
document_id: MSAJCE-RAG-11
title: Student Life, Campus Clubs, Professional Societies & TEDx
category: Student Life
institution: Mohamed Sathak A.J. College of Engineering (MSAJCE)
clubs:
  - Coding & Hackathon Club
  - Robotics & Automation Club
  - Fine Arts & Cultural Club
  - Literary & Debate Society
  - Photography & Media Club
professional_societies: IEEE, CSI, ISTE, SAE India
events: TEDxMSAJCE, Culturals, Hackathons
target_queries:
  - What clubs are present at MSAJCE?
  - Does MSAJCE have IEEE and CSI student chapters?
  - Tell me about TEDxMSAJCE
  - What cultural and technical festivals are held at MSAJCE?
---

# MSAJCE Student Life, Extra-Curricular Clubs, Professional Chapters & TEDx

## 1. Campus Clubs & Student Activities

### Technical & Skill Development Clubs
- **Coding & Developer Club**: Conducts competitive programming contests, Web Dev bootcamps, and hackathons.
- **Robotics & IoT Club**: Hands-on hardware prototyping using Arduino, Raspberry Pi, and drone design.

### Cultural & Creative Clubs
- **Fine Arts & Cultural Club**: Trains students in dance, music, drama, street plays, and visual arts for inter-collegiate festivals.
- **Literary & Debating Society**: Organizes debates, elocution, MUNs, creative writing, and poetry slams.
- **Media & Photography Club**: Captures campus events, produces short films, and handles digital media design.

## 2. Professional Society Student Chapters

### IEEE Student Branch (Institute of Electrical and Electronics Engineers)
Organizes international technical webinars, paper presentation contests, and IEEE WIE (Women in Engineering) workshops.

### CSI Student Chapter (Computer Society of India)
Facilitates national-level student conventions, coding challenges, and software industry expert lectures.

### ISTE Student Chapter (Indian Society for Technical Education)
Promotes faculty-student technical seminars, skill enhancement courses, and pedagogical innovation.

### SAE India Collegiate Club (Society of Automotive Engineers)
Drives automotive prototyping, BAJA / Supra vehicle design, and EV technical competitions for mechanical and electrical scholars.

## 3. TEDxMSAJCE
MSAJCE holds an official license from TED to host **TEDxMSAJCE**, bringing together inspirational thought leaders, technology pioneers, social entrepreneurs, and creative artists to share ideas worth spreading.
"""

write_rag_file("11_student_life_clubs_professional_societies.md", content_11)

# ==============================================================================
# FILE 12: 12_social_and_community_services.md
# ==============================================================================
content_12 = """---
document_id: MSAJCE-RAG-12
title: Social Outreach, NSS, YRC, UBA, EBSB & KARMA Schemes
category: Community Service
institution: Mohamed Sathak A.J. College of Engineering (MSAJCE)
schemes:
  - National Service Scheme (NSS)
  - Youth Red Cross (YRC)
  - Unnat Bharat Abhiyan (UBA)
  - Ek Bharat Shreshtha Bharat (EBSB)
  - KARMA Scheme (AICTE Skill Initiative)
target_queries:
  - What social service activities are done by MSAJCE?
  - Tell me about NSS unit at MSAJCE
  - What is Unnat Bharat Abhiyan (UBA) at MSAJCE?
  - Does MSAJCE organize blood donation camps?
---

# MSAJCE Community Outreach, National Service Scheme & Social Initiatives

## 1. National Service Scheme (NSS)
The NSS Unit at Mohamed Sathak A.J. College of Engineering operates under the motto "Not Me But You", instilling civic responsibility and community welfare mindset in student volunteers.

### Key NSS Activities
- **Adopted Villages**: Continuous developmental outreach in surrounding rural panchayats of Chengalpattu district.
- **Blood Donation Camps**: Annual mega blood donation camps organized in partnership with Rotary Club and Govt. Hospitals (donating 300+ units annually).
- **Environmental Drives**: Tree plantation drives, plastic-free OMR campaigns, and beach cleanup initiatives at Kelambakkam / Kovalam.
- **Special Annual Camps**: 7-day residential village immersion camps focusing on health awareness, digital literacy, and sanitation infrastructure.

## 2. Youth Red Cross (YRC)
The YRC chapter organizes emergency disaster management training, first-aid certification workshops, organ donation awareness campaigns, and health check-up camps for local communities.

## 3. Unnat Bharat Abhiyan (UBA)
Under the flagship scheme of Ministry of Education, Govt. of India, MSAJCE has adopted 5 nearby rural villages to conduct household surveys, clean energy推广, organic farming guidance, and school computer literacy programs.

## 4. Ek Bharat Shreshtha Bharat (EBSB)
Promotes national integration and cultural exchange between Tamil Nadu and paired states through language learning, traditional arts exchange, and national heritage webinars.

## 5. KARMA Scheme
AICTE-approved Kaushalya Augmentation and Renewal Skill scheme offering free vocational technical training for rural unemployed youth.
"""

write_rag_file("12_social_and_community_services.md", content_12)

# ==============================================================================
# FILE 13: 13_alumni_association_and_convocation.md
# ==============================================================================
content_13 = """---
document_id: MSAJCE-RAG-13
title: Alumni Association Network & Annual Graduation Convocation
category: Alumni & Community
institution: Mohamed Sathak A.J. College of Engineering (MSAJCE)
alumni_count: 10,000+ Alumni Worldwide
registration_no: Registered Alumni Association under TN Societies Act
convocation: Annual Graduation Ceremony
target_queries:
  - Tell me about MSAJCE Alumni Association
  - How to register as an alumnus of MSAJCE?
  - When is the convocation at MSAJCE?
  - Who are notable alumni of MSAJCE?
---

# MSAJCE Alumni Association Network & Annual Convocation

## 1. MSAJCE Alumni Association Overview
The Mohamed Sathak A.J. College of Engineering Alumni Association connects over **10,000+ graduates** holding leadership positions across top global MNCs, research laboratories, civil services, and successful entrepreneurial ventures worldwide in India, USA, UK, UAE, Singapore, Australia, and Europe.

## 2. Objectives of Alumni Network
1. Foster lifelong connection between alumni, current engineering scholars, and institutional faculty.
2. Provide industry mentorship, mock interviews, and referral placement opportunities for graduating batches.
3. Establish alumni-sponsored scholarships and seed funds for innovative student projects.
4. Host annual global alumni reunions (SATHAK ALUMNI MEET) and regional chapter gatherings.

## 3. Annual Convocation Ceremony
MSAJCE holds its formal Graduation Ceremony (Convocation) annually to confer Anna University B.E., B.Tech, M.E., MBA, and MCA degree certificates upon graduating candidates in the presence of distinguished Chief Guests, Vice-Chancellors, and Industrialists.
"""

write_rag_file("13_alumni_association_and_convocation.md", content_13)

# ==============================================================================
# FILE 14: 14_accreditations_naac_iqac_nirf_ariia.md
# ==============================================================================
content_14 = """---
document_id: MSAJCE-RAG-14
title: Institutional Quality Assurance (IQAC), NAAC, NIRF & Accreditation Reports
category: Accreditations & Compliance
institution: Mohamed Sathak A.J. College of Engineering (MSAJCE)
affiliation: Anna University, Chennai
approvals: AICTE, New Delhi
naac_status: Accredited Institution
iqac_cell: Internal Quality Assurance Cell (IQAC)
target_queries:
  - Is MSAJCE NAAC accredited?
  - What is the accreditation status of MSAJCE Chennai?
  - Does MSAJCE submit NIRF data?
  - Tell me about IQAC at MSAJCE
  - Where to find mandatory disclosures of MSAJCE?
---

# MSAJCE Quality Assurance, NAAC Accreditation, IQAC & Compliance Reports

## 1. Accreditations & Statutory Recognitions
- **AICTE Approval**: Approved by All India Council for Technical Education, New Delhi. Extension of Approval (EoA) renewed annually.
- **Anna University Affiliation**: Permanently / Provisionally affiliated with Anna University, Chennai for all UG and PG programmes.
- **NAAC Accreditation**: Accredited by National Assessment and Accreditation Council (NAAC), evaluating Curricular Aspects, Teaching-Learning, Research, Infrastructure, Student Support, Governance, and Institutional Values.

## 2. Internal Quality Assurance Cell (IQAC)
The IQAC at MSAJCE monitors and elevates academic quality, teaching-learning outcome audits, faculty feedback, continuous assessment verification, and accreditation compliance.

### IQAC Composition
- **Chairperson**: Dr. K.S. Srinivasan (Principal)
- **Coordinator**: Senior IQAC Director / Senior Professor
- **Members**: Department HODs, Administrative Officers, Industry Representatives, Alumni Representatives, and Local Community Leaders.

## 3. NIRF & ARIIA Rankings
MSAJCE participates annually in National Institutional Ranking Framework (NIRF) by Ministry of Education, Govt. of India, and ARIIA (Atal Ranking of Institutions on Innovation Achievements), transparently publishing student strength, financial resources, placement outcomes, and patent metrics.
"""

write_rag_file("14_accreditations_naac_iqac_nirf_ariia.md", content_14)

# ==============================================================================
# FILE 15: 15_code_of_conduct_policies_and_contact.md
# ==============================================================================
content_15 = """---
document_id: MSAJCE-RAG-15
title: Student Code of Conduct, Academic Policies & Institutional Contact Directory
category: Policies & Contact
institution: Mohamed Sathak A.J. College of Engineering (MSAJCE)
address: Inside Sipcot IT Park, Post Box No.3, Old Mahabalipuram Road (OMR), IT Highway, Egattur, Chennai - 603103, Tamil Nadu, India
general_phone: "+91 44 2747 0023 / +91 44 2747 0024"
admission_mobile: "+91 99400 04500 / +91 98408 86992"
official_email: principal@msajce-edu.in / info@msajce-edu.in
website: https://www.msajce-edu.in
target_queries:
  - What is the official address of MSAJCE Chennai?
  - What are the phone numbers and contact emails of MSAJCE?
  - What is the student dress code and attendance policy at MSAJCE?
  - Where is MSAJCE located on OMR?
  - How to reach Mohamed Sathak A.J. College of Engineering?
---

# MSAJCE Student Code of Conduct, Policies & Official Contact Directory

## 1. Student Code of Conduct & Campus Governance

### Dress Code Policy
- **Formal Attire**: Students are required to wear formal neat attire on all working days.
- **Laboratory Uniforms**: Mandatory lab coats, safety shoes, and protective gear during engineering lab sessions and workshops.
- **ID Card Mandate**: College Identification Card with lanyard must be worn around the neck at all times inside campus, buses, and labs.

### Attendance & Academic Discipline
- **Minimum Attendance Rule**: Minimum **75% attendance** per course is mandatory to qualify for Anna University End-Semester Examinations.
- **Leave Application**: Leave requests must be submitted in advance to Class Advisor / HOD with parent signature.

### Mobile Phone Policy
Mobile phone usage inside classrooms, laboratories, and central library during instructional hours is strictly regulated to prevent academic disruption.

## 2. Official Contact Directory & Campus Location

### Postal & Physical Address
**Mohamed Sathak A.J. College of Engineering**  
Inside Sipcot IT Park, Post Box No.3,  
Old Mahabalipuram Road (OMR), IT Highway,  
Egattur, Chennai - 603103, Tamil Nadu, India.

### Key Telephone & Contact Numbers
- **Main Administrative Office**: +91 44 2747 0023 / 044 2747 0024
- **Admissions Cell**: +91 99400 04500 / +91 98408 86992
- **Placement Directorate**: +91 44 2747 0025 / placement@msajce-edu.in
- **Transport Office**: +91 98408 86992 / +91 99403 19629
- **Boys Hostel Warden**: +91 98408 86992
- **Girls Hostel Warden**: +91 94448 64221

### Official Email Directory
- **General Inquiries**: `info@msajce-edu.in`
- **Principal Office**: `principal@msajce-edu.in`
- **Admissions Desk**: `admissions@msajce-edu.in`
- **Placement Cell**: `placement@msajce-edu.in`
- **Exam Cell / Academics**: `examcell@msajce-edu.in`
- **Central Library**: `library@msajce-edu.in`

### How to Reach Campus
- **By Bus**: Take any OMR MTC Bus (19, 519, 102, 221H, 570) and alight at **Egattur / Navalur** Bus Stop (Directly opposite campus entrance).
- **By Train**: Nearest Suburban Station is **Tambaram** (18 km) / **Velachery** (16 km). Nearest Express Railway Station is **Chennai Central** (30 km).
- **By Air**: **Chennai International Airport (MAA)** is located approximately 24 km from campus.
"""

write_rag_file("15_code_of_conduct_policies_and_contact.md", content_15)

print("\nRAG Knowledge Base build completed successfully!")
