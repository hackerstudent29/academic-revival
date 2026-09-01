export interface PlacementStat {
  year: string;
  placedCount: number;
  highestPackageLPA: number;
  averagePackageLPA: number;
  eligibleStudents: number;
  totalOffers: number;
  visitingCompanies: number;
  internshipOffers: number;
  placementRatePercent: number;
  reportLabel: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Placement Drives' | 'Recruiter Visits' | 'Training' | 'Student Achievements' | 'Industry Interaction';
  year: string;
  image: string;
  description: string;
  venueOrPartner: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'Head' | 'Faculty Coordinator' | 'Student Representative';
  department: string;
  email: string;
  phone?: string;
  image: string;
  bio: string;
}

export interface EcosystemStep {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  keyOutputs: string[];
}

export interface Recruiter {
  id: string;
  name: string;
  domain: 'Technology' | 'Core' | 'Manufacturing' | 'Services' | 'Emerging';
  tier: 'Tier A' | 'Tier B' | 'Tier C';
  logoText: string;
  logoBg: string;
  logoColor: string;
  engagement: 'Recruitment' | 'Internship' | 'PPO' | 'Joint R&D' | 'Pooled Drive';
  departments: Array<'CSE' | 'IT' | 'ECE' | 'EEE' | 'MECH' | 'CIVIL' | 'AI/ML' | 'CYBER'>;
  packageBand: string;
  hiringRoles: string[];
  headquarters: string;
  description: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  email: string;
  phone: string;
  room: string;
  image: string;
  specialization: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  programme: string;
  batch: string;
  company: string;
  role: string;
  package: string;
  avatar: string;
}

export interface SkillPillar {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  direction: 'left' | 'bottom' | 'right';
  iconName: string;
  color: string;
  modules: {
    title: string;
    description: string;
    hours: string;
    topics: string[];
  }[];
  outcomes: string[];
}

export interface TrainingProgram {
  id: string;
  year: string;
  programme: string;
  date: string;
  trainer: string;
  department: string;
  participants: number;
  image: string;
  category: 'Aptitude' | 'Mock Interview' | 'Group Discussion' | 'Technical Training' | 'Expert Session' | 'Industrial Visit';
  keyHighlights: string[];
}

export interface Facility {
  id: string;
  name: string;
  category: string;
  capacity: string;
  description: string;
  image: string;
  equipment: string[];
}

export interface InternshipRecord {
  id: string;
  organisation: string;
  students: number;
  domain: string;
  academicYear: string;
  stipendRange: string;
  mode: 'On-site' | 'Hybrid' | 'Remote';
  convertedPPOs: number;
}

export interface InternshipPathway {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  frontDescription: string;
  backDescription: string;
  keyBenefits: string[];
  sampleRoles: string[];
}

export interface FeaturedAchievement {
  id: string;
  name: string;
  programme: string;
  batch: string;
  company: string;
  internshipRole: string;
  outcome: string;
  package: string;
  photo: string;
  story: string;
  interviewTips: string[];
}

export interface MouPartner {
  id: string;
  partnerName: string;
  domain: string;
  purpose: string;
  date: string;
  duration: string;
  year: string;
  status: 'Active' | 'Renewed';
  keyInitiatives: string[];
  scope: string;
}

export interface JourneyStage {
  step: string;
  title: string;
  tagline: string;
  description: string;
  keyActivities: string[];
  deliverables: string;
  image: string;
}

export interface StudentJourneyStatus {
  id: string;
  name: string;
  programme: string;
  batch: string;
  currentStage: string;
  statusType: 'interning' | 'in_process' | 'placed' | 'higher_studies';
  companyOrInst: string;
  role: string;
  image: string;
  highlight: string;
}

export interface PlacementPulseEvent {
  id: string;
  type: 'recruitment' | 'training' | 'exam' | 'industry';
  title: string;
  subtitle: string;
  date: string;
  venueOrMode: string;
  status: 'UPCOMING' | 'ONGOING' | 'COMPLETED';
  eligible: string;
  description: string;
}

export interface AlumniProfile {
  id: string;
  name: string;
  batch: string;
  currentRole: string;
  company: string;
  location: string;
  category: 'PLACEMENT' | 'INTERNSHIP' | 'HIGHER STUDIES' | 'GLOBAL' | 'ENTREPRENEURSHIP';
  photo: string;
  expertise: string[];
  journeyQuote: string;
  careerPath: string[];
}
