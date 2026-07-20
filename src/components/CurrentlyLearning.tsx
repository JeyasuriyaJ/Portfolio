import React from 'react';
import { currentlyLearning } from '../data/currentlyLearning';
import { BookOpen } from 'lucide-react';

export const CurrentlyLearning: React.FC = () => {
  return (
    <section id="learning" className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight flex items-center gap-2">
          <span className="w-2 h-6 bg-blue-600 rounded-sm"></span>
          Currently Learning
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentlyLearning.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <BookOpen className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-200 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Active Focus</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
