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

export interface EducationType {
    degree: string;
    school: string;
    location: string;
    date: string;
    gpa?: string;
    honors?: string;
}

export interface ResumeData {
    contact: ContactInfo;
    experience: ExperienceType[];
    education: EducationType[];
} 