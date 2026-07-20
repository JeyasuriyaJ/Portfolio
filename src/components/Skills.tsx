import React from 'react';
import { skillGroups } from '../data/skills';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight flex items-center gap-2">
          <span className="w-2 h-6 bg-blue-600 rounded-sm"></span>
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 pb-2 border-b border-gray-200">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 rounded-md bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-xs hover:border-blue-300 hover:text-blue-600 transition-colors"
                  >
                    {skill}
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
