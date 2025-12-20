
export type Language = 'UZ' | 'RU' | 'EN';
export type Theme = 'dark' | 'light';

export interface Service {
  id: string;
  icon: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  details: Record<Language, string>;
}

export interface TeamMember {
  id: string;
  name: string;
  role: Record<Language, string>;
  image: string;
}

export interface InterviewStep {
  id: number;
  title: Record<Language, string>;
  description: Record<Language, string>;
}
