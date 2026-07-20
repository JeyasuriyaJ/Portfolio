import React from 'react';
import { experiences } from '../data/experience';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight flex items-center gap-2">
          <span className="w-2 h-6 bg-blue-600 rounded-sm"></span>
          Internship Experience
        </h2>

        <div className="space-y-6 max-w-4xl">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-xs relative"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-gray-100 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-blue-600" />
                    {exp.role}
                  </h3>
                  <span className="text-sm font-semibold text-blue-600">{exp.organization}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-mono font-medium self-start sm:self-center">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6 text-sm text-gray-600">
                {exp.responsibilities.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-gray-100 text-gray-700 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
