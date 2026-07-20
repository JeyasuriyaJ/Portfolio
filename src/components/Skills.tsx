import React, { useState } from 'react';
import { skillGroups } from '../data/skills';
import { TechLogo } from './TechLogos';
import { Search, Filter } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...skillGroups.map((g) => g.category)];

  const filteredGroups = skillGroups
    .map((group) => {
      if (selectedCategory !== 'All' && group.category !== selectedCategory) {
        return null;
      }
      const matchingSkills = group.skills.filter((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (matchingSkills.length === 0) return null;
      return {
        ...group,
        skills: matchingSkills,
      };
    })
    .filter(Boolean);

  return (
    <section id="skills" className="py-16 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <h2 className="text-2xl font-bold text-slate-100 tracking-tight flex items-center gap-2.5">
            <span className="w-2 h-6 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-sm"></span>
            Technical Skills
          </h2>

          {/* Search Input */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search skill (e.g. Python, React)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 bg-slate-900 text-slate-100 placeholder-slate-500 shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-semibold scrollbar-none">
          <span className="text-slate-400 flex items-center gap-1.5 mr-2">
            <Filter className="w-3.5 h-3.5 text-cyan-400" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg shadow-blue-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.length > 0 ? (
            filteredGroups.map((group) => group && (
              <div
                key={group.category}
                className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all shadow-xl group"
              >
                <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4 pb-2 border-b border-slate-800 group-hover:text-cyan-400 transition-colors">
                  {group.category} ({group.skills.length})
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm font-semibold text-slate-100 hover:border-cyan-500/60 hover:text-cyan-300 hover:scale-103 transition-all shadow-xs cursor-default"
                    >
                      <TechLogo name={skill} className="w-6 h-6 flex-shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-8 text-center text-sm text-slate-400">
              No skills found matching "{searchQuery}".
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
