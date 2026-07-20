import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
        <div>
          <span className="font-bold text-slate-100">Jeyasuriya J</span> — Software Engineer & AI Enthusiast
        </div>
        <div>
          Built with React + TypeScript + Tailwind CSS v4
        </div>
        <div>
          © {new Date().getFullYear()} Jeyasuriya J. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
