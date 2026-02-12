
export interface Project {
  title: string;
  problem: string;
  approach: string;
  result: string;
  tech: string[];
  caseStudyUrl?: string;
  sourceCodeUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  impacts: string[];
}

export interface Highlight {
  icon: string;
  label: string;
  sublabel: string;
}

export interface Publication {
  title: string;
  venue: string;
  contribution: string;
  method: string;
  result: string;
}
