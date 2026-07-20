import React from 'react';
import { certifications } from '../data/certifications';
import { CheckCircle2, Award } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight flex items-center gap-2">
          <span className="w-2 h-6 bg-blue-600 rounded-sm"></span>
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span className="font-mono bg-white px-2 py-0.5 rounded border border-gray-200">
                    {cert.year}
                  </span>
                  <span className="flex items-center gap-1 text-emerald-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <Award className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span>{cert.name}</span>
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-200 text-xs font-semibold text-gray-600">
                Issued by {cert.organization}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
