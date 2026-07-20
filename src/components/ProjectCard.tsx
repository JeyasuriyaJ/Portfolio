import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Star } from 'lucide-react';
import type { Project } from '../data/projects';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  return (
    <article
      className={`bg-white rounded-xl border ${
        featured ? 'border-blue-300 ring-1 ring-blue-100 shadow-md' : 'border-gray-200 shadow-xs'
      } hover:border-gray-300 transition-all flex flex-col justify-between overflow-hidden p-6 sm:p-8`}
    >
      <div>
        {/* Header Badge */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            {featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
                <Star className="w-3 h-3 fill-blue-600 text-blue-600" />
                Featured Flagship Project
              </span>
            )}
            <span className="text-xs font-mono font-medium text-gray-500">{project.year}</span>
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors p-1"
            aria-label={`GitHub Repository for ${project.title}`}
          >
            <GithubIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group">
          <Link to={`/projects/${project.slug}`} className="hover:text-blue-600 transition-colors">
            {project.title}
          </Link>
        </h3>
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          {project.shortDescription}
        </p>

        {/* Key Features Bullet points */}
        <div className="mb-6 space-y-2">
          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Key Features:</h4>
          <ul className="space-y-1.5">
            {project.keyFeatures.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                <span className="text-blue-600 font-bold">▸</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded bg-gray-100 text-gray-700 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4 mt-auto">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          <span>View Architecture & Technical Specs</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        {project.liveDemoUrl && (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-gray-600 hover:text-gray-900"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </article>
  );
};
