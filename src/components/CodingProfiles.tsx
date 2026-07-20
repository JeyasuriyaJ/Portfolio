import React from 'react';
import { codingProfiles } from '../data/codingProfiles';
import { ExternalLink, Terminal } from 'lucide-react';

export const CodingProfiles: React.FC = () => {
  const getBrandAccent = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'leetcode':
        return 'border-t-amber-500 hover:border-amber-400';
      case 'hackerrank':
        return 'border-t-emerald-500 hover:border-emerald-400';
      case 'codechef':
        return 'border-t-amber-700 hover:border-amber-600';
      case 'skillrack':
        return 'border-t-indigo-600 hover:border-indigo-500';
      default:
        return 'border-t-blue-600 hover:border-blue-500';
    }
  };

  return (
    <section id="coding" className="py-16 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight flex items-center gap-2">
          <span className="w-2 h-6 bg-blue-600 rounded-sm"></span>
          Coding Profiles & Problem Solving
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {codingProfiles.map((profile) => (
            <div
              key={profile.platform}
              className={`bg-white p-6 rounded-xl border border-gray-200 border-t-4 ${getBrandAccent(
                profile.platform
              )} shadow-xs hover:shadow-md transition-all flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-gray-700 group-hover:text-blue-600 transition-colors" />
                    <h3 className="text-lg font-bold text-gray-900">{profile.platform}</h3>
                  </div>
                  <a
                    href={profile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors p-1"
                    aria-label={`View ${profile.platform} profile`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="text-xs font-mono text-gray-500 mb-5 pb-3 border-b border-gray-100 flex items-center justify-between">
                  <span>Handle:</span>
                  <span className="font-semibold text-gray-800">{profile.username}</span>
                </div>

                <div className="space-y-3">
                  {profile.stats.map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs">
                      <span className="text-gray-500 font-medium">{stat.label}:</span>
                      <span className="font-bold text-gray-900 font-mono text-sm">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-gray-100">
                <a
                  href={profile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5"
                >
                  <span>View Verified Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
