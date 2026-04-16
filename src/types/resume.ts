export interface ContactInfo {
    name: string;
    location: string;
    phone: string;
    email: string;
    linkedinUrl: string;
    githubUrl: string;
    personalWebsiteUrl?: string;
}

export interface ExperienceType {
    title: string;
    company: string;
    companyUrl?: string;
    location: string;
    jobSummary: string;
    date: string;
    description: string[];
}

export interface DegreeType {
    name: string;
    date: string;
    honors?: string;
    gpa?: string;
}

export interface EducationType {
    degrees: DegreeType[];
    school: string;
    location: string;
}

export interface ProjectItemType {
    name: string;
    url?: string;
    description: string;
}

export interface ProjectsSectionType {
    summary: string;
    items: ProjectItemType[];
}

export interface ResumeData {
    contact: ContactInfo;
    experience: ExperienceType[];
    projects: ProjectsSectionType;
    techStack: string[];
    education: EducationType[];
} 