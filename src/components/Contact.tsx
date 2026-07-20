import React from 'react';
import { Mail, Download, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-600 rounded-sm"></span>
            Get In Touch
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            I am actively looking for Software Engineering and AI/ML internship opportunities. Feel free to connect directly via email or view my professional profiles.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Email */}
            <a
              href="mailto:jeyasuriya.j2024ece@sece.ac.in"
              className="bg-white p-5 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-xs transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Email</div>
                  <div className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    jeyasuriya.j2024ece@sece.ac.in
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jeyasuriya-j-593937366/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-5 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-xs transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">LinkedIn</div>
                  <div className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    linkedin.com/in/jeyasuriya-j
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/JeyasuriyaJ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-5 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-xs transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">GitHub</div>
                  <div className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    github.com/JeyasuriyaJ
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </a>

            {/* Resume Download */}
            <a
              href="/assets/resume.pdf"
              download
              className="bg-white p-5 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-xs transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Resume</div>
                  <div className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Download PDF Resume
                  </div>
                </div>
              </div>
              <Download className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};
