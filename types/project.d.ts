export interface Project {
  id: string;
  title: string;
  logo: string;
  description: string;
  date: string;
  thumbnail: string;
}

export interface ProjectData {
  year: string;
  projects: Project[];
}

export interface Troubleshooting {
  title: string;
  problem: string;
  solution: string;
  improvements?: string[];
  beforeAfter?: { before: string; after: string; label: string };
  learned: string[];
  links?: { title: string; url: string }[];
  images?: { src: string; alt: string; caption?: string }[];
}

export interface ProjectDetail extends Project {
  link?: string;
  info: {
    team: string;
    role: string;
    techStack: { category: string; items: string[] }[];
  };
  gallery: { src: string; alt: string }[];
  contributions: string[];
  performance: { label: string; value: string; description?: string }[];
  troubleshootings: Troubleshooting[];
}
