import React from 'react';
import { educationHistory } from '../data/education';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight flex items-center gap-2">
          <span className="w-2 h-6 bg-blue-600 rounded-sm"></span>
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationHistory.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.duration}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-1 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>{item.degree}</span>
                </h3>

                <p className="text-sm font-medium text-gray-600 mb-4">
                  {item.institution}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-200">
                <span className="inline-block px-3 py-1 rounded bg-blue-50 text-blue-800 text-xs font-semibold">
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
