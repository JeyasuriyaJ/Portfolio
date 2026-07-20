import React from 'react';
import { currentlyLearning } from '../data/currentlyLearning';
import { BookOpen } from 'lucide-react';

export const CurrentlyLearning: React.FC = () => {
  return (
    <section id="learning" className="py-16 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-2xl font-bold text-slate-100 mb-8 tracking-tight flex items-center gap-2.5">
          <span className="w-2 h-6 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-sm"></span>
          Currently Learning
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentlyLearning.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between shadow-xl hover:border-slate-700 transition-all"
            >
              <div>
                <div className="flex items-center gap-2 text-cyan-400 mb-2">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-100 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-mono">Active Study</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
