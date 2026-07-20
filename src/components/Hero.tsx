import React, { useState } from 'react';
import { Download, Mail, ArrowDownRight, Check, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'jeyasuriya.j2024ece@sece.ac.in';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-white border-b border-gray-200 py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 max-w-2xl">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4"></span>
              <span>Available for Software Engineering & AI/ML Internships</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-3">
              Jeyasuriya J
            </h1>

            {/* Professional Title */}
            <h2 className="text-lg sm:text-xl font-bold text-blue-600 mb-5">
              B.E. Electronics & Communication Engineering | Full Stack & AI Developer
            </h2>

            {/* Short Intro */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              Undergraduate specializing in building scalable AI-powered systems, graph-based decision support platforms, and full-stack web applications using Python, FastAPI, Django, and React.
            </p>

            {/* CTAs & Social Links */}
            <div className="flex flex-wrap items-center gap-3">
              
              {/* Resume Download */}
              <a
                href="/assets/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-semibold text-sm transition-all shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {/* Contact Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-300 hover:border-gray-400 bg-white text-gray-700 hover:text-gray-900 font-semibold text-sm transition-all"
              >
                <span>Contact Me</span>
                <ArrowDownRight className="w-4 h-4 text-gray-400" />
              </a>

              {/* Copy Email Button */}
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg border border-gray-200 hover:border-blue-400 bg-gray-50 text-gray-700 text-xs font-semibold transition-all relative"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-gray-500" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              {/* Icon Links */}
              <div className="flex items-center gap-2 ml-auto sm:ml-0 pt-2 sm:pt-0">
                <a
                  href="https://github.com/JeyasuriyaJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:border-gray-300 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jeyasuriya-j-593937366/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:border-gray-300 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${email}`}
                  className="p-3 rounded-lg border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:border-gray-300 transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Profile Photo Container */}
          <div className="flex-shrink-0 relative group">
            <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border-4 border-white shadow-lg ring-1 ring-gray-200 bg-gray-100 transition-transform duration-300 group-hover:scale-102">
              <img
                src="/assets/Profile.jpeg"
                alt="Jeyasuriya J — Full Stack & AI Developer"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            {/* Quick Stats Overlay Badge */}
            <div className="absolute -bottom-3 -right-3 bg-white px-3.5 py-1.5 rounded-lg border border-gray-200 shadow-sm text-xs font-mono font-bold text-gray-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>260+ LeetCode Solved</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
