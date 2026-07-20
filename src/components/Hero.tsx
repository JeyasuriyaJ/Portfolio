import React, { useState } from 'react';
import { Download, Mail, ArrowDownRight, Check, Copy, Terminal, ShieldCheck, Cpu } from 'lucide-react';
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
    <section className="bg-white border-b border-gray-200 py-14 sm:py-20 relative overflow-hidden bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 max-w-2xl">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4"></span>
              <span>Software Engineering & AI/ML Candidate</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-3">
              Jeyasuriya J
            </h1>

            {/* Professional Title */}
            <h2 className="text-lg sm:text-xl font-bold text-blue-600 mb-5 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>B.E. Electronics & Communication Engineering | Full Stack & AI Developer</span>
            </h2>

            {/* Short Intro */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              Undergraduate specializing in building scalable AI-powered systems, graph-based decision support platforms, and full-stack web applications using <strong className="text-gray-900 font-semibold">Python, FastAPI, Django, and React</strong>.
            </p>

            {/* Key Proof Metrics Row */}
            <div className="grid grid-cols-3 gap-3 mb-8 p-3.5 rounded-xl bg-gray-50/90 border border-gray-200/80 backdrop-blur-2xs">
              <div className="text-center sm:text-left border-r border-gray-200 pr-2">
                <div className="text-lg sm:text-xl font-extrabold text-gray-900 font-mono">8.14</div>
                <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">CGPA (4th Sem)</div>
              </div>
              <div className="text-center sm:text-left border-r border-gray-200 pr-2">
                <div className="text-lg sm:text-xl font-extrabold text-gray-900 font-mono">260+</div>
                <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">LeetCode Solved</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-lg sm:text-xl font-extrabold text-gray-900 font-mono">3</div>
                <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Core Projects</div>
              </div>
            </div>

            {/* CTAs & Social Links */}
            <div className="flex flex-wrap items-center gap-3">
              
              {/* Resume Download */}
              <a
                href="/assets/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-bold text-sm transition-all shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {/* Contact Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-300 hover:border-gray-400 bg-white text-gray-700 hover:text-gray-900 font-bold text-sm transition-all shadow-2xs"
              >
                <span>Contact Me</span>
                <ArrowDownRight className="w-4 h-4 text-gray-400" />
              </a>

              {/* Copy Email Button */}
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border border-gray-200 hover:border-blue-400 bg-white text-gray-700 text-xs font-bold transition-all relative shadow-2xs"
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
                  className="p-3 rounded-xl border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:border-gray-300 transition-all shadow-2xs"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jeyasuriya-j-593937366/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:border-gray-300 transition-all shadow-2xs"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${email}`}
                  className="p-3 rounded-xl border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:border-gray-300 transition-all shadow-2xs"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Profile Photo Container */}
          <div className="flex-shrink-0 relative group">
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-4 border-white shadow-xl ring-1 ring-gray-200/80 bg-gray-100 transition-transform duration-300 group-hover:scale-102">
              <img
                src="/assets/Profile.jpeg"
                alt="Jeyasuriya J — Full Stack & AI Developer"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Quick Stats Overlay Badges */}
            <div className="absolute -bottom-3 -right-3 bg-white px-3.5 py-1.5 rounded-xl border border-gray-200 shadow-md text-xs font-mono font-bold text-gray-800 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Full Stack & AI</span>
            </div>

            <div className="absolute -top-3 -left-3 bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-sm text-[11px] font-mono font-semibold text-gray-600 flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5 text-blue-600" />
              <span>Python / FastAPI</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
