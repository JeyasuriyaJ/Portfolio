export interface Education {
  institution: string;
  degree: string;
  cgpaOrScore: string;
  duration: string;
}

export const educationHistory: Education[] = [
  {
    institution: 'Sri Eshwar College of Engineering',
    degree: 'B.E. Electronics and Communication Engineering',
    cgpaOrScore: 'CGPA: 8.14 (through 4th semester)',
    duration: '2024 – 2028'
  },
  {
    institution: 'Sree Narayana Mission Secondary School',
    degree: 'Secondary School Certificate',
    cgpaOrScore: 'Score: 80%',
    duration: '2023 – 2024'
  },
  {
    institution: 'Geethanjali All India Secondary School',
    degree: 'Secondary School Certificate',
    cgpaOrScore: 'Score: 87.4%',
    duration: '2021 – 2022'
  }
];
