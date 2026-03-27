export interface ProfileValue {
  title: string;
  items: string[];
}

export interface CareerTimelineItem {
  period: string;
  title: string;
  subtitle: string;
  link?: string;
}

export interface Award {
  name: string;
  date: string;
  description: string;
}

export interface Certification {
  name: string;
  date: string;
}

export interface SkillsDescription {
  category: string;
  items: string[];
}
