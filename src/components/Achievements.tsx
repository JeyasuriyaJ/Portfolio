import React from 'react';
import { achievements } from '../data/achievements';
import { Award, Trophy } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-16 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight flex items-center gap-2">
          <span className="w-2 h-6 bg-blue-600 rounded-sm"></span>
          Achievements & Hackathons
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 flex items-start gap-4 shadow-xs"
            >
              <div className="p-3 rounded-lg bg-blue-50 text-blue-600 flex-shrink-0">
                {item.title.startsWith('Winner') ? (
                  <Trophy className="w-6 h-6 text-amber-500" />
                ) : (
                  <Award className="w-6 h-6 text-blue-600" />
                )}
              </div>

              <div>
                <span className="text-xs font-mono font-semibold text-blue-600 uppercase tracking-wider">
                  {item.category} • {item.year}
                </span>
                <h3 className="text-base font-bold text-gray-900 mt-1 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
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
