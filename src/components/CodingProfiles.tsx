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
        return 'border-t-indigo-500 hover:border-indigo-400';
      default:
        return 'border-t-cyan-500 hover:border-cyan-400';
    }
  };

  return (
    <section id="coding" className="py-16 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-2xl font-bold text-slate-100 mb-8 tracking-tight flex items-center gap-2.5">
          <span className="w-2 h-6 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-sm"></span>
          Coding Profiles & Problem Solving
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {codingProfiles.map((profile) => (
            <div
              key={profile.platform}
              className={`bg-slate-900/90 p-6 rounded-2xl border border-slate-800 border-t-4 ${getBrandAccent(
                profile.platform
              )} shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-lg font-bold text-slate-100">{profile.platform}</h3>
                  </div>
                  <a
                    href={profile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
                    aria-label={`View ${profile.platform} profile`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="text-xs font-mono text-slate-400 mb-5 pb-3 border-b border-slate-800 flex items-center justify-between">
                  <span>Handle:</span>
                  <span className="font-semibold text-slate-200">{profile.username}</span>
                </div>

                <div className="space-y-3">
                  {profile.stats.map((stat, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs">
                      <span className="text-slate-400 font-medium">{stat.label}:</span>
                      <span className="font-bold text-cyan-300 font-mono text-sm">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800">
                <a
                  href={profile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5"
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
