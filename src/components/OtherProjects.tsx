import React from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const OtherProjects: React.FC = () => {
  const otherProjectsList = projects.filter((p) => !p.isFeatured);

  return (
    <section className="py-16 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-xl font-bold text-slate-100 mb-8 tracking-tight flex items-center gap-2.5">
          <span className="w-2 h-5 bg-slate-600 rounded-sm"></span>
          Other Key Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjectsList.map((project) => (
            <ProjectCard key={project.slug} project={project} featured={false} />
          ))}
        </div>

      </div>
    </section>
  );
};
