export interface Experience {
  role: string;
  organization: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Virtual Internship — AI Email Assistant',
    organization: 'Infosys Springboard',
    duration: '2026',
    responsibilities: [
      'Engineered an AI-powered email assistant across a 4-stage pipeline.',
      'Implemented classification, automated response generation, human-in-the-loop validation, and memory-driven personalization.'
    ],
    technologies: ['Python', 'LangGraph', 'Gemini API', 'Gmail API', 'SQLite']
  },
  {
    role: 'Data Analytics, AI & Web Development Intern',
    organization: 'NIELET Calicut',
    duration: '2025',
    responsibilities: [
      'Applied data preprocessing and visualization techniques for dataset analytics.',
      'Implemented AI-based problem-solving approaches for database-driven web applications built with Django.'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Django', 'SQL', 'HTML', 'CSS']
  }
];
