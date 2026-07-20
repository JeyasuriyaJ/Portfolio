import React from 'react';
import { educationHistory } from '../data/education';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-2xl font-bold text-slate-100 mb-8 tracking-tight flex items-center gap-2.5">
          <span className="w-2 h-6 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-sm"></span>
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationHistory.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between shadow-xl hover:border-slate-700 transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {item.duration}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-100 mb-1 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{item.degree}</span>
                </h3>

                <p className="text-sm font-medium text-slate-400 mb-4">
                  {item.institution}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <span className="inline-block px-3 py-1 rounded-lg bg-blue-950/60 border border-blue-800/40 text-cyan-300 text-xs font-semibold font-mono">
                  {item.cgpaOrScore}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
