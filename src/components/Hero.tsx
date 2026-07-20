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
    <section className="bg-slate-950 border-b border-slate-800/80 py-14 sm:py-24 relative overflow-hidden bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]">
      
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 max-w-2xl">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-800/60 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 -ml-4"></span>
              <span>Software Engineering & AI/ML Candidate</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-100 tracking-tight mb-3">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Jeyasuriya J
              </span>
            </h1>

            {/* Professional Title */}
            <h2 className="text-lg sm:text-xl font-bold text-cyan-400 mb-5 flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span>B.E. Electronics & Communication Engineering | Full Stack & AI Developer</span>
            </h2>

            {/* Short Intro */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Undergraduate specializing in building scalable AI-powered systems, graph-based decision support platforms, and full-stack web applications using <strong className="text-slate-100 font-semibold underline decoration-cyan-500/40 underline-offset-4">Python, FastAPI, Django, and React</strong>.
            </p>

            {/* Key Proof Metrics Row */}
            <div className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl shadow-blue-950/30 backdrop-blur-sm">
              <div className="text-center sm:text-left border-r border-slate-800 pr-2">
                <div className="text-xl sm:text-2xl font-black text-cyan-400 font-mono">8.14</div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">CGPA (4th Sem)</div>
              </div>
              <div className="text-center sm:text-left border-r border-slate-800 pr-2">
                <div className="text-xl sm:text-2xl font-black text-blue-400 font-mono">260+</div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">LeetCode Solved</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-black text-indigo-400 font-mono">3</div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Core Projects</div>
              </div>
            </div>

            {/* CTAs & Social Links */}
            <div className="flex flex-wrap items-center gap-3">
              
              {/* Resume Download */}
              <a
                href="/assets/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:brightness-110 active:scale-98 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/25"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              {/* Contact Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-900 text-slate-200 hover:text-white font-bold text-sm transition-all shadow-md"
              >
                <span>Contact Me</span>
                <ArrowDownRight className="w-4 h-4 text-slate-400" />
              </a>

              {/* Copy Email Button */}
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border border-slate-800 hover:border-cyan-500/50 bg-slate-900 text-slate-300 text-xs font-bold transition-all relative shadow-sm"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
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
                  className="p-3 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900 hover:border-slate-700 transition-all shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jeyasuriya-j-593937366/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900 hover:border-slate-700 transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${email}`}
                  className="p-3 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900 hover:border-slate-700 transition-all shadow-sm"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Profile Photo Container */}
          <div className="flex-shrink-0 relative group">
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-slate-700 ring-4 ring-cyan-500/20 shadow-2xl shadow-cyan-500/10 bg-slate-900 transition-transform duration-300 group-hover:scale-102">
              <img
                src="/assets/Profile.jpeg"
                alt="Jeyasuriya J — Full Stack & AI Developer"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Quick Stats Overlay Badges */}
            <div className="absolute -bottom-3 -right-3 bg-slate-900 px-3.5 py-1.5 rounded-xl border border-slate-700 shadow-xl text-xs font-mono font-bold text-slate-200 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full Stack & AI</span>
            </div>

            <div className="absolute -top-3 -left-3 bg-slate-900 px-3 py-1 rounded-lg border border-slate-700 shadow-lg text-[11px] font-mono font-semibold text-cyan-400 flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Python / FastAPI</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
