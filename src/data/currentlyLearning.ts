export interface LearningTopic {
  title: string;
  category: string;
  description: string;
}

export const currentlyLearning: LearningTopic[] = [
  {
    title: 'Spring Boot',
    category: 'Backend Framework',
    description: 'Building enterprise Java microservices, RESTful web services, and dependency injection patterns.'
  },
  {
    title: 'Advanced Data Structures & Algorithms',
    category: 'Computer Science',
    description: 'Mastering advanced graph algorithms, dynamic programming optimization, and spatial indexing.'
  },
  {
    title: 'PostgreSQL Advanced Tuning',
    category: 'Relational Database',
    description: 'Deep diving into index optimization, query execution plans, partitioning, and transactional isolation levels.'
  },
  {
    title: 'System Design & Scalability',
    category: 'Software Architecture',
    description: 'Studying distributed systems, caching strategies, load balancing, message queues, and database sharding.'
  }
];
