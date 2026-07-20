export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  isFeatured: boolean;
  shortDescription: string;
  problemStatement: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  architectureOverview: string;
  challenges: string[];
  lessonsLearned: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  imageUrl: string;
}

export const projects: Project[] = [
  {
    slug: 'crime-intelligence',
    title: 'AI-Powered Crime Intelligence Platform',
    subtitle: 'Graph-based Decision Support & Link Analysis System',
    year: '2026',
    isFeatured: true,
    imageUrl: '/assets/crime-intelligence.png',
    shortDescription: 'Architected a law enforcement decision-support system modeling suspects and cases as graph nodes to perform multi-hop (2-3 degree) link analysis and reveal hidden connections.',
    problemStatement: 'Law enforcement agencies face challenges in identifying hidden relationships and multi-degree operational networks across disparate criminal records. Traditional relational databases struggle with fast, complex multi-hop queries required to connect suspects across multiple cases.',
    solution: 'Engineered a full-stack intelligence platform powered by FastAPI, Neo4j, and PostgreSQL. Suspects, incidents, locations, and evidence are modeled as graph nodes, enabling multi-hop graph queries that uncover hidden connections invisible to single-degree searches.',
    keyFeatures: [
      'Multi-hop (2-3 degree) graph link analysis to uncover hidden criminal networks',
      'Automated mathematical case-risk scoring engine based on link centrality and historical severity',
      'AI-driven investigation summary generation for rapid report drafting',
      'Interactive React & Vite dashboard for visual graph investigation and filtering',
      'Fully documented, Pytest-tested REST API layer backed by Uvicorn and Docker containerization'
    ],
    techStack: [
      'Python', 'FastAPI', 'React', 'Vite', 'PostgreSQL', 'Neo4j',
      'SQLAlchemy', 'Cypher', 'REST APIs', 'Uvicorn', 'Docker', 'Git/GitHub', 'Pytest'
    ],
    architectureOverview: 'Client (React + Vite) ➔ API Gateway (FastAPI + Uvicorn) ➔ Dual Storage Engine: Relational (PostgreSQL via SQLAlchemy) for structured CRUD & Graph Database (Neo4j via Cypher) for multi-hop graph link traversals. All services containerized with Docker.',
    challenges: [
      'Maintaining dual-write consistency between PostgreSQL (relational metadata) and Neo4j (graph nodes and edges).',
      'Optimizing multi-hop Cypher queries to ensure sub-100ms response times over multi-degree suspect graphs.'
    ],
    lessonsLearned: [
      'Mastered hybrid persistence patterns combining relational data integrity with graph query speed.',
      'Gained deep experience in containerized REST API deployment and thorough backend testing with Pytest.'
    ],
    githubUrl: 'https://github.com/JeyasuriyaJ'
  },
  {
    slug: 'helmet-detection',
    title: 'Industrial Safety Helmet Detection System',
    subtitle: 'Real-time Computer Vision & Compliance Monitoring',
    year: '2026',
    isFeatured: false,
    imageUrl: '/assets/helmet-detection.png',
    shortDescription: 'Built a real-time computer vision system using a fine-tuned YOLOv8 model and Django to continuously monitor live video streams and flag safety helmet violations.',
    problemStatement: 'Manual safety compliance monitoring at industrial construction and manufacturing sites is inefficient, error-prone, and impossible to scale across multiple locations simultaneously.',
    solution: 'Developed an automated computer vision pipeline using YOLOv8, PyTorch, and OpenCV. Video streams are analyzed in real time to detect non-compliant workers, log timestamped violation records, and alert safety managers immediately through a secure Django portal.',
    keyFeatures: [
      'Real-time object detection using fine-tuned YOLOv8 model for helmet identification',
      'Multi-site live video stream ingestion via OpenCV',
      'Secure Django administration web dashboard for violation auditing',
      'Automated timestamped and location-tagged violation logging',
      'Aggregated compliance analytics and statistical reporting'
    ],
    techStack: [
      'Python', 'Django', 'YOLOv8 (Ultralytics)', 'PyTorch', 'OpenCV',
      'SQLite', 'HTML5', 'CSS3', 'JavaScript', 'Git/GitHub'
    ],
    architectureOverview: 'Live Video Feed ➔ Frame Processing & Augmentation (OpenCV) ➔ Inference Engine (PyTorch + YOLOv8) ➔ Violation Detection Event ➔ Web Portal & Database (Django + SQLite).',
    challenges: [
      'Processing high-resolution video streams in real time without dropping frames during object detection inference.',
      'Handling visual occlusion and varying lighting conditions in industrial environments.'
    ],
    lessonsLearned: [
      'Fine-tuning YOLOv8 object detection models using transfer learning and data augmentation.',
      'Integrating heavy computer vision ML pipelines with lightweight web backend framework architectures.'
    ],
    githubUrl: 'https://github.com/JeyasuriyaJ'
  },
  {
    slug: 'flight-delay',
    title: 'Flight Delay Prediction & Intelligence System',
    subtitle: 'Machine Learning Delay Analytics & Corridor Intelligence',
    year: '2026',
    isFeatured: false,
    imageUrl: '/assets/flight-delay.png',
    shortDescription: 'Developed a predictive flight intelligence system combining LightGBM delay risk estimation with live weather (Open-Meteo) and flight-tracking (OpenSky Network) APIs.',
    problemStatement: 'Flight delays disrupt travel schedules and logistics. Passengers and operators lack predictive insights that combine historical corridor performance with real-time weather conditions.',
    solution: 'Built a machine learning platform utilizing LightGBM to calculate delay risk scores across major flight corridors by fusing historical flight logs with real-time meteorological data and live flight coordinates.',
    keyFeatures: [
      'Corridor delay risk estimation using LightGBM predictive model',
      'Live weather data integration via Open-Meteo API',
      'Real-time aircraft tracking integration via OpenSky Network API',
      'Secure personal user dashboard with query history retention',
      'Flight route distance calculation and live departure schedule feeds'
    ],
    techStack: [
      'Python', 'FastAPI', 'LightGBM', 'Pandas', 'NumPy', 'SQLite',
      'HTML5', 'CSS3', 'JavaScript', 'Open-Meteo API', 'OpenSky Network API', 'Git/GitHub'
    ],
    architectureOverview: 'User Web Client ➔ FastAPI Backend ➔ Feature Extraction Pipeline (Pandas/NumPy) + External APIs (Open-Meteo weather & OpenSky flight data) ➔ LightGBM ML Model ➔ Prediction Response & SQLite Audit Log.',
    challenges: [
      'Gracefully handling API rate limits and unexpected schema variations from external open data feeds.',
      'Engineering temporal and geospatial features to maximize LightGBM predictive accuracy.'
    ],
    lessonsLearned: [
      'Designing robust asynchronous API pipelines with fallback logic for third-party service degradation.',
      'Training and serializing lightweight gradient boosted decision tree (GBDT) models for real-time inference.'
    ],
    githubUrl: 'https://github.com/JeyasuriyaJ'
  }
];
