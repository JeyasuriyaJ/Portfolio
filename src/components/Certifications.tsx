import React from 'react';
import { certifications } from '../data/certifications';
import { CheckCircle2, Award } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-2xl font-bold text-slate-100 mb-8 tracking-tight flex items-center gap-2.5">
          <span className="w-2 h-6 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-sm"></span>
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between shadow-xl hover:border-slate-700 transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span className="font-mono bg-slate-950 px-2.5 py-0.5 rounded-md border border-slate-800 text-cyan-300 font-semibold">
                    {cert.year}
                  </span>
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-100 mb-2 flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                  <span>{cert.name}</span>
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-semibold text-slate-400">
                Issued by {cert.organization}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
