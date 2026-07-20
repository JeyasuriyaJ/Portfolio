export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    skills: ['C', 'C++', 'Python', 'SQL']
  },
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React']
  },
  {
    category: 'Backend',
    skills: ['FastAPI', 'Django', 'Spring Boot', 'REST APIs', 'Uvicorn']
  },
  {
    category: 'AI / ML',
    skills: ['PyTorch', 'OpenCV', 'YOLOv8', 'LangGraph', 'LightGBM', 'Pandas', 'NumPy', 'Matplotlib']
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'Neo4j', 'SQLite', 'Cypher']
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['SQLAlchemy', 'Pytest']
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'Canva', 'Microsoft Excel', 'PowerPoint']
  }
];
