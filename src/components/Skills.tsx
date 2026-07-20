import React, { useState } from 'react';
import { skillGroups } from '../data/skills';
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
    <section id="skills" className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <span className="w-2 h-6 bg-blue-600 rounded-sm"></span>
            Technical Skills
          </h2>

          {/* Search & Filter Inputs */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search skill (e.g. Python, React)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-gray-50"
              />
            </div>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 text-xs font-medium scrollbar-none">
          <span className="text-gray-400 flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white font-bold shadow-2xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all group"
              >
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4 pb-2 border-b border-gray-200 group-hover:text-blue-600 transition-colors">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 rounded-md bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-2xs hover:border-blue-400 hover:text-blue-600 hover:scale-102 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-8 text-center text-sm text-gray-500">
              No skills found matching "{searchQuery}".
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
