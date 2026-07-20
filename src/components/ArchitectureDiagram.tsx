import React from 'react';

interface DiagramProps {
  slug: string;
}

export const ArchitectureDiagram: React.FC<DiagramProps> = ({ slug }) => {
  if (slug === 'crime-intelligence') {
    return (
      <div className="bg-gray-900 text-white p-6 rounded-xl overflow-x-auto">
        <div className="min-w-[600px] flex items-center justify-between gap-4 text-xs font-mono">
          <div className="flex-1 p-4 bg-gray-800 rounded-lg border border-gray-700 text-center">
            <div className="text-blue-400 font-bold mb-1">Frontend Layer</div>
            <div className="text-gray-300">React + Vite SPA</div>
            <div className="text-gray-500 text-[10px] mt-1">Interactive Graph Viz</div>
          </div>

          <div className="text-blue-500 font-bold">➔ REST ➔</div>

          <div className="flex-1 p-4 bg-gray-800 rounded-lg border border-gray-700 text-center">
            <div className="text-emerald-400 font-bold mb-1">API & Logic</div>
            <div className="text-gray-300">FastAPI + Uvicorn</div>
            <div className="text-gray-500 text-[10px] mt-1">Pytest Covered Services</div>
          </div>

          <div className="text-blue-500 font-bold">➔ Dual DB ➔</div>

          <div className="flex-1 space-y-2">
            <div className="p-3 bg-gray-800 rounded-lg border border-purple-500/50 text-center">
              <div className="text-purple-400 font-bold">Neo4j (Graph DB)</div>
              <div className="text-gray-400 text-[10px]">Multi-hop Cypher queries</div>
            </div>
            <div className="p-3 bg-gray-800 rounded-lg border border-indigo-500/50 text-center">
              <div className="text-indigo-400 font-bold">PostgreSQL (Relational)</div>
              <div className="text-gray-400 text-[10px]">SQLAlchemy CRUD</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (slug === 'helmet-detection') {
    return (
      <div className="bg-gray-900 text-white p-6 rounded-xl overflow-x-auto">
        <div className="min-w-[600px] flex items-center justify-between gap-4 text-xs font-mono">
          <div className="flex-1 p-4 bg-gray-800 rounded-lg border border-gray-700 text-center">
            <div className="text-amber-400 font-bold mb-1">Stream Ingestion</div>
            <div className="text-gray-300">Live Video Feeds</div>
            <div className="text-gray-500 text-[10px] mt-1">OpenCV Preprocessing</div>
          </div>

          <div className="text-amber-500 font-bold">➔ Frames ➔</div>

          <div className="flex-1 p-4 bg-gray-800 rounded-lg border border-gray-700 text-center">
            <div className="text-red-400 font-bold mb-1">ML Inference</div>
            <div className="text-gray-300">YOLOv8 + PyTorch</div>
            <div className="text-gray-500 text-[10px] mt-1">Helmet Violation Detection</div>
          </div>

          <div className="text-amber-500 font-bold">➔ Events ➔</div>

          <div className="flex-1 p-4 bg-gray-800 rounded-lg border border-gray-700 text-center">
            <div className="text-blue-400 font-bold mb-1">Web Admin Dashboard</div>
            <div className="text-gray-300">Django + SQLite</div>
            <div className="text-gray-500 text-[10px] mt-1">Timestamped Audit Logs</div>
          </div>
        </div>
      </div>
    );
  }

  // Flight Delay
  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl overflow-x-auto">
      <div className="min-w-[600px] flex items-center justify-between gap-4 text-xs font-mono">
        <div className="flex-1 p-4 bg-gray-800 rounded-lg border border-gray-700 text-center">
          <div className="text-cyan-400 font-bold mb-1">External Data Feeds</div>
          <div className="text-gray-300">Open-Meteo & OpenSky</div>
          <div className="text-gray-500 text-[10px] mt-1">Live Weather & Flight Tracking</div>
        </div>

        <div className="text-cyan-500 font-bold">➔ Ingest ➔</div>

        <div className="flex-1 p-4 bg-gray-800 rounded-lg border border-gray-700 text-center">
          <div className="text-blue-400 font-bold mb-1">FastAPI Backend Engine</div>
          <div className="text-gray-300">LightGBM Pipeline</div>
          <div className="text-gray-500 text-[10px] mt-1">Corridor Risk Scoring</div>
        </div>

        <div className="text-cyan-500 font-bold">➔ Output ➔</div>

        <div className="flex-1 p-4 bg-gray-800 rounded-lg border border-gray-700 text-center">
          <div className="text-emerald-400 font-bold mb-1">Passenger Dashboard</div>
          <div className="text-gray-300">HTML5/JS Client</div>
          <div className="text-gray-500 text-[10px] mt-1">Query History & Distance Calc</div>
        </div>
      </div>
    </div>
  );
};
