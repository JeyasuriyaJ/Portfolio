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
    <div className="py-12 bg-slate-950 min-h-screen text-slate-100">
      <SEO
        title={`${project.title} | Jeyasuriya J`}
        description={project.shortDescription}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-cyan-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Overview</span>
        </Link>

        {/* Large Screenshot Banner */}
        <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mb-8 bg-slate-900 relative">
          <img
            src={project.imageUrl}
            alt={`${project.title} High-resolution Screenshot`}
            className="w-full max-h-[440px] object-cover object-top opacity-95"
          />
          <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-700 px-3.5 py-1.5 rounded-xl text-white text-xs font-mono flex items-center gap-1.5 shadow-lg">
            <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>Application Dashboard Screenshot</span>
          </div>
        </div>

        {/* Header */}
        <div className="mb-10 border-b border-slate-800 pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-semibold text-cyan-400 mb-3">
            <span className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md text-cyan-300">{project.year}</span>
            <span>{project.subtitle}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-base text-slate-300 leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          <div className="flex items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:brightness-110 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/20"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View GitHub Repository</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-900 text-slate-200 font-bold text-sm transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Dynamic Interactive Navigation Tabs */}
        <div className="flex border-b border-slate-800 mb-8 space-x-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-4 text-sm font-bold border-b-2 transition-all ${
              activeTab === 'overview'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Overview & Solution
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-4 text-sm font-bold border-b-2 transition-all ${
              activeTab === 'architecture'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            System Architecture
          </button>
          <button
            onClick={() => setActiveTab('challenges')}
            className={`pb-4 text-sm font-bold border-b-2 transition-all ${
              activeTab === 'challenges'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
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
              <div className="bg-red-950/20 p-6 rounded-2xl border border-red-900/40 shadow-lg">
                <h2 className="text-base font-bold text-red-400 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  Problem Statement
                </h2>
                <p className="text-sm text-red-200/90 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="bg-emerald-950/20 p-6 rounded-2xl border border-emerald-900/40 shadow-lg">
                <h2 className="text-base font-bold text-emerald-400 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  Technical Solution
                </h2>
                <p className="text-sm text-emerald-200/90 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                Technologies & Frameworks
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200"
                  >
                    <TechLogo name={tech} className="w-4 h-4 flex-shrink-0" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" />
                Key System Capabilities
              </h2>
              <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3 shadow-xl">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-cyan-400 font-bold mt-0.5">▸</span>
                    <span className="leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Architecture */}
        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-slate-100">Interactive System Architecture Diagram</h2>
            <ArchitectureDiagram slug={project.slug} />
            <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-xl">
              <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 font-mono">Flow Breakdown:</h3>
              <p className="text-sm text-slate-300 font-mono leading-relaxed">
                {project.architectureOverview}
              </p>
            </div>
          </div>
        )}

        {/* Tab Content 3: Challenges & Lessons */}
        {activeTab === 'challenges' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                Engineering Challenges
              </h2>
              <ul className="space-y-3">
                {project.challenges.map((c, idx) => (
                  <li key={idx} className="p-5 bg-slate-900/90 rounded-2xl border border-slate-800 text-sm text-slate-300 leading-relaxed shadow-lg">
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-400" />
                Lessons Learned
              </h2>
              <ul className="space-y-3">
                {project.lessonsLearned.map((l, idx) => (
                  <li key={idx} className="p-5 bg-slate-900/90 rounded-2xl border border-slate-800 text-sm text-slate-300 leading-relaxed shadow-lg">
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
