export type Project = {
  title: string;
  service?: string;
  context?: string;
  role: string;
  description: string;
  image: string;
  links: {
    demo: string;
    github: string;
  };
  highlights: string[];
  details?: {
    image: string;
    description: string;
  }[];
};