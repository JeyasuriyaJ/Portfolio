import React from 'react';
import { achievements } from '../data/achievements';
import { Award, Trophy } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-16 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-2xl font-bold text-slate-100 mb-8 tracking-tight flex items-center gap-2.5">
          <span className="w-2 h-6 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-sm"></span>
          Achievements & Hackathons
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 flex items-start gap-4 shadow-xl hover:border-slate-700 transition-all"
            >
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 flex-shrink-0 shadow-inner">
                {item.title.startsWith('Winner') ? (
                  <Trophy className="w-6 h-6 text-amber-400" />
                ) : (
                  <Award className="w-6 h-6 text-blue-400" />
                )}
              </div>

              <div>
                <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                  {item.category} • {item.year}
                </span>
                <h3 className="text-base font-bold text-slate-100 mt-1 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {item.organization}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
