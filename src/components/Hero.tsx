import React from 'react';
import { Download, Mail, ArrowDownRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  return (
    <section className="bg-white border-b border-gray-200 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            Available for Software Engineering & AI/ML Internships
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
            Jeyasuriya J
          </h1>

          {/* Professional Title */}
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-6">
            B.E. Electronics & Communication Engineering Student | Full Stack & AI Developer
          </h2>

          {/* Short Intro */}
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Passionate undergraduate specializing in building scalable AI-powered systems, graph-based decision support platforms, and full-stack web applications using Python, FastAPI, Django, and React.
          </p>

          {/* CTAs & Social Links */}
          <div className="flex flex-wrap items-center gap-4">
            
            {/* Resume Download */}
            <a
              href="/assets/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-300 hover:border-gray-400 bg-white text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
            >
              <span>Contact Me</span>
              <ArrowDownRight className="w-4 h-4 text-gray-400" />
            </a>

            {/* Icon Links */}
            <div className="flex items-center gap-2 ml-auto sm:ml-0 pt-2 sm:pt-0">
              <a
                href="https://github.com/JeyasuriyaJ"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/jeyasuriya-j-593937366/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:jeyasuriya.j2024ece@sece.ac.in"
                className="p-3 rounded-lg border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
