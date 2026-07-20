import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Home, AlertTriangle } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 bg-slate-950 text-slate-100">
      <SEO title="404 — Page Not Found | Jeyasuriya J" />
      <div className="text-center max-w-md px-4">
        <div className="inline-flex p-4 rounded-2xl bg-amber-500/10 text-amber-400 mb-6 border border-amber-500/30">
          <AlertTriangle className="w-10 h-10" />
        </div>

        <h1 className="text-4xl font-black text-slate-100 mb-2">404</h1>
        <h2 className="text-xl font-bold text-cyan-400 mb-4">Page Not Found</h2>
        <p className="text-sm text-slate-400 mb-8 leading-relaxed">
          The page or project route you are looking for does not exist or has been relocated.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:brightness-110 text-white font-bold text-sm transition-all shadow-lg shadow-blue-500/20"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};
