import React from 'react';
import { experiences } from '../data/experience';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-2xl font-bold text-slate-100 mb-8 tracking-tight flex items-center gap-2.5">
          <span className="w-2 h-6 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-sm"></span>
          Internship Experience
        </h2>

        <div className="relative pl-3 sm:pl-6 border-l-2 border-slate-800 space-y-8 max-w-4xl ml-2 sm:ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[19px] sm:-left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-4 border-blue-500 group-hover:scale-125 group-hover:border-cyan-400 transition-all"></div>

              <div className="bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl hover:border-slate-700 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-cyan-400" />
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold text-blue-400">{exp.organization}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 text-cyan-300 text-xs font-mono font-semibold self-start sm:self-center border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6 text-sm text-slate-300">
                  {exp.responsibilities.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
