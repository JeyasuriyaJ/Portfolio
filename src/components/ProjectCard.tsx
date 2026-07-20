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
      className={`bg-slate-900 rounded-2xl border ${
        featured ? 'border-cyan-500/40 ring-1 ring-cyan-500/20 shadow-xl shadow-cyan-950/20' : 'border-slate-800 shadow-xl'
      } hover:border-cyan-500/60 transition-all flex flex-col justify-between overflow-hidden group`}
    >
      <div>
        {/* Project Image Preview Header */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800">
          <img
            src={project.imageUrl}
            alt={`${project.title} Screenshot`}
            className="w-full h-full object-cover object-top opacity-85 group-hover:scale-104 group-hover:opacity-100 transition-all duration-500 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

          {/* Badges Overlay */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {featured && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold shadow-md">
                  <Star className="w-3 h-3 fill-white" />
                  Flagship Project
                </span>
              )}
              <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700 text-cyan-400 text-xs font-mono font-medium">
                {project.year}
              </span>
            </div>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-950/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-cyan-600 transition-colors"
              aria-label={`GitHub Repository for ${project.title}`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="absolute bottom-3 left-3 text-cyan-300 text-xs font-mono flex items-center gap-1.5 font-semibold">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>{project.subtitle}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
            <Link to={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          {/* Key Features Bullet points */}
          <div className="mb-6 space-y-2">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Key Capabilities:</h4>
            <ul className="space-y-1.5">
              {project.keyFeatures.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                  <span className="text-cyan-400 font-bold">▸</span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips with Logos */}
          <div className="flex flex-wrap gap-2 mb-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-xs font-semibold group-hover:border-slate-700 transition-colors"
              >
                <TechLogo name={tech} className="w-4.5 h-4.5 flex-shrink-0" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 py-4 sm:px-7 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between gap-4 mt-auto">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <span>View Architecture & Specs</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>

        {project.liveDemoUrl && (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-slate-200"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </article>
  );
};
