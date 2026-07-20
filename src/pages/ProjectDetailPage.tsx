import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { SEO } from '../components/SEO';
import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import { ArrowLeft, ExternalLink, AlertCircle, CheckCircle, Lightbulb, Cpu, Layers, Image as ImageIcon } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { TechLogo } from '../components/TechLogos';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'challenges'>('overview');

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="py-12 bg-white">
      <SEO
        title={`${project.title} | Jeyasuriya J`}
        description={project.shortDescription}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Overview</span>
        </Link>

        {/* Large Screenshot Banner */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md mb-8 bg-gray-900 relative">
          <img
            src={project.imageUrl}
            alt={`${project.title} High-resolution Screenshot`}
            className="w-full max-h-[420px] object-cover object-top"
          />
          <div className="absolute bottom-4 right-4 bg-gray-900/80 backdrop-blur-xs px-3 py-1.5 rounded-lg text-white text-xs font-mono flex items-center gap-1.5">
            <ImageIcon className="w-3.5 h-3.5 text-blue-400" />
            <span>Application Dashboard Screenshot</span>
          </div>
        </div>

        {/* Header */}
        <div className="mb-10 border-b border-gray-200 pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-semibold text-blue-600 mb-3">
            <span className="bg-blue-50 px-2.5 py-1 rounded border border-blue-200">{project.year}</span>
            <span>{project.subtitle}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-base text-gray-600 leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          <div className="flex items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm transition-colors shadow-xs"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View GitHub Repository</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 hover:border-gray-400 bg-white text-gray-700 font-medium text-sm transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Dynamic Interactive Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-8 space-x-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-4 text-sm font-bold border-b-2 transition-all ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Overview & Solution
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-4 text-sm font-bold border-b-2 transition-all ${
              activeTab === 'architecture'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            System Architecture
          </button>
          <button
            onClick={() => setActiveTab('challenges')}
            className={`pb-4 text-sm font-bold border-b-2 transition-all ${
              activeTab === 'challenges'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Challenges & Lessons
          </button>
        </div>

        {/* Tab Content 1: Overview & Solution */}
        {activeTab === 'overview' && (
          <div className="space-y-10">
            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50/50 p-6 rounded-xl border border-red-100">
                <h2 className="text-base font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  Problem Statement
                </h2>
                <p className="text-sm text-red-950 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100">
                <h2 className="text-base font-bold text-emerald-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  Technical Solution
                </h2>
                <p className="text-sm text-emerald-950 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-600" />
                Technologies & Frameworks
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-gray-100 border border-gray-200 text-xs font-semibold text-gray-800"
                  >
                    <TechLogo name={tech} className="w-4 h-4 flex-shrink-0" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" />
                Key System Capabilities
              </h2>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-blue-600 font-bold mt-0.5">▸</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Architecture */}
        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-gray-900">Interactive Architecture Diagram</h2>
            <ArchitectureDiagram slug={project.slug} />
            <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Flow Breakdown:</h3>
              <p className="text-sm text-gray-700 font-mono leading-relaxed">
                {project.architectureOverview}
              </p>
            </div>
          </div>
        )}

        {/* Tab Content 3: Challenges & Lessons */}
        {activeTab === 'challenges' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                Engineering Challenges
              </h2>
              <ul className="space-y-3">
                {project.challenges.map((c, idx) => (
                  <li key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-700 leading-relaxed">
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-500" />
                Lessons Learned
              </h2>
              <ul className="space-y-3">
                {project.lessonsLearned.map((l, idx) => (
                  <li key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-700 leading-relaxed">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
