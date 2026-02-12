
import { Project, Experience, Highlight, Publication } from './types';

export const EMAIL = "salsabilass014@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/salsabila-septi-sukmayanti-69022a210";

export const HIGHLIGHTS: Highlight[] = [
  { icon: "🎓", label: "GPA 3.86/4.00", sublabel: "Graduated Cum Laude" },
  { icon: "🏆", label: "OSC Awardee", sublabel: "Medcom Scholarship" },
  { icon: "📄", label: "Scopus Q3", sublabel: "IJIGSP Published" },
  { icon: "🤖", label: "Bangkit '24", sublabel: "Machine Learning Cohort" },
  { icon: "📈", label: "STL + LSTM", sublabel: "Advanced Forecasting" },
  { icon: "🔍", label: "QA Testing", sublabel: "Cazh Tech Intern" },
];

export const PROJECTS: Project[] = [
  {
    title: "GoSwam: PDAM Spatial Forecasting",
    problem: "PDAM needed accurate spatial prediction for water consumption to support demand planning.",
    approach: "K-Means clustering + STL decomposition + LSTM forecasting; end-to-end pipeline (cleaning, aggregation, missing values, scaling).",
    result: "Streamlit dashboard enabling interactive spatial-temporal insights for stakeholders.",
    tech: ["Python", "Streamlit", "K-Means", "STL", "LSTM"],
  },
  {
    title: "Polafit: CNN Health App (Bangkit Capstone)",
    problem: "Personalized health/fitness recommendations from food images.",
    approach: "CNN model using TensorFlow integrated into a mobile app.",
    result: "Delivered multi-category food classification as capstone project.",
    tech: ["TensorFlow", "CNN", "Python", "Mobile"],
  },
  {
    title: "Telkom Invoice Automation",
    problem: "Manual invoice generation for POTS/non-POTS was time-consuming and error-prone.",
    approach: "Built a web-based calculation system with automated invoice generation.",
    result: "Streamlined billing workflow for Business & Service division.",
    tech: ["Web Development", "Workflow Automation", "UI/UX"],
  },
  {
    title: "Rukun: Neighborhood Platform",
    problem: "RT/RW need a unified community management system.",
    approach: "UI design + system analysis; supported responsive front-end implementation; coordinated tasks for timely delivery.",
    result: "User-friendly interface for community data and activities management.",
    tech: ["React", "Tailwind", "UI/UX", "System Analysis"],
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Intern (Business & Service Division)",
    company: "PT Telekomunikasi Indonesia",
    period: "Jul 2025 – Aug 2025",
    impacts: [
      "Supported B2B client visits and needs analysis; proposed digital solutions.",
      "Built invoice automation system for POTS/non-POTS."
    ]
  },
  {
    role: "Quality Assurance Intern",
    company: "PT Cazh Teknologi Inovasi",
    period: "Jan 2025 – Jul 2025",
    impacts: [
      "End-to-end QA testing for web/mobile; test cases.",
      "Bug reporting and documentation for quality improvement."
    ]
  },
  {
    role: "Head of Finance",
    company: "Informatics Student Association",
    period: "Aug 2023 – May 2025",
    impacts: [
      "Managed large budgets and financial reporting for 40+ work programs.",
      "Cross-team coordination and accountability."
    ]
  },
  {
    role: "Head of Finance (National Level)",
    company: "PPK ORMAWA",
    period: "May 2024 – Oct 2024",
    impacts: [
      "Secured Rp 30 million funding.",
      "Financial planning and accountability reporting."
    ]
  }
];

export const PUBLICATION: Publication = {
  title: "Spatial-Temporal Analysis of Urban Utility Consumption",
  venue: "IJIGSP — Modern Education and Computer Science (Scopus Q3)",
  contribution: "First author / Lead researcher",
  method: "K-Means clustering + STL-LSTM",
  result: "Temporal monitoring framework with spatial visualization for water consumption insights"
};

export const HARD_SKILLS = [
  "Python", "TensorFlow", "Machine Learning", "Time Series Forecasting", 
  "K-Means", "STL Decomposition", "LSTM", "Streamlit", "SQL", 
  "Data Preprocessing", "Feature Engineering", "QA Testing", 
  "Selenium", "UI/UX", "Figma"
];

export const SOFT_SKILLS = [
  "Leadership", "Communication", "Teamwork", "Analytical Thinking", 
  "Problem Solving", "Stakeholder Collaboration", "Time Management", "Ownership"
];
