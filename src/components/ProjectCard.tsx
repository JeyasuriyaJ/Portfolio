import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Star, Layers } from 'lucide-react';
import type { Project } from '../data/projects';
import { GithubIcon } from './SocialIcons';
import { TechLogo } from './TechLogos';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  return (
    <article
      className={`bg-white rounded-xl border ${
        featured ? 'border-blue-300 ring-1 ring-blue-100 shadow-md' : 'border-gray-200 shadow-xs'
      } hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group`}
    >
      <div>
        {/* Project Image Preview Header */}
        <div className="relative aspect-video w-full overflow-hidden bg-gray-900 border-b border-gray-100">
          <img
            src={project.imageUrl}
            alt={`${project.title} Screenshot`}
            className="w-full h-full object-cover object-top opacity-90 group-hover:scale-104 group-hover:opacity-100 transition-all duration-500 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent"></div>

          {/* Badges Overlay */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {featured && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-600 text-white text-[11px] font-bold shadow-xs">
                  <Star className="w-3 h-3 fill-white" />
                  Flagship Project
                </span>
              )}
              <span className="px-2.5 py-1 rounded-md bg-gray-900/80 backdrop-blur-xs text-white text-xs font-mono font-medium">
                {project.year}
              </span>
            </div>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-gray-900/80 text-white hover:bg-blue-600 transition-colors"
              aria-label={`GitHub Repository for ${project.title}`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="absolute bottom-3 left-3 text-white text-xs font-mono flex items-center gap-1.5 opacity-90">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>{project.subtitle}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            <Link to={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          {/* Key Features Bullet points */}
          <div className="mb-6 space-y-2">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Key Capabilities:</h4>
            <ul className="space-y-1.5">
              {project.keyFeatures.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                  <span className="text-blue-600 font-bold">▸</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips with Logos */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-gray-100 text-gray-700 text-xs font-medium group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors"
              >
                <TechLogo name={tech} className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 py-4 sm:px-7 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-4 mt-auto">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          <span>View System Architecture & Specs</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
