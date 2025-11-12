// Base Types
export interface PersonalInfoProps {
  full_name: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website: string;
  profession: string;
  image: string; // or StaticImageData if using Next.js Image
}

export interface Experience {
  _id: string;
  company: string;
  position: string;
  start_date: string; // Format: "YYYY-MM"
  end_date: string; // "Present" or "YYYY-MM"
  description: string;
  is_current: boolean;
}

export interface Education {
  _id: string;
  institution: string;
  degree: string;
  field: string;
  graduation_date: string; // Format: "YYYY-MM"
  gpa: string; // Can be empty string
}

export interface Project {
  _id: string;
  name: string;
  type: string;
  description: string;
}

// Main Resume Type
export interface Resume {
  _id: string;
  userId: string;
  title: string;
  public: boolean;
  personal_info: PersonalInfoProps;
  professional_summary: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  project: Project[];
  template: string;
  accent_color: string;
  updatedAt: string; // ISO 8601 date string
  createdAt: string; // ISO 8601 date string
}

// Array type for multiple resumes
export type ResumeData = Resume[];

export interface ResumeTemplateProps {
  data: Resume;
  accentColor: string;
}