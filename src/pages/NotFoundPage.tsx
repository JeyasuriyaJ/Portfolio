import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Home, AlertTriangle } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 bg-white">
      <SEO title="404 — Page Not Found | Jeyasuriya J" />
      <div className="text-center max-w-md px-4">
        <div className="inline-flex p-4 rounded-full bg-amber-50 text-amber-600 mb-6 border border-amber-200">
          <AlertTriangle className="w-10 h-10" />
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">404</h1>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-sm text-gray-600 mb-8 leading-relaxed">
          The page or project route you are looking for does not exist or has been relocated.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};
