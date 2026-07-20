import React from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const FeaturedProject: React.FC = () => {
  const featured = projects.find((p) => p.isFeatured) || projects[0];

  return (
    <section id="projects" className="py-16 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-600 rounded-sm"></span>
            Featured Project
          </h2>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:inline-block">
            Flagship Implementation
          </span>
        </div>

        <ProjectCard project={featured} featured={true} />

      </div>
    </section>
  );
};
