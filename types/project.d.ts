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
