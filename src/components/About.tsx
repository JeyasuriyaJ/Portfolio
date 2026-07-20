import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-2xl font-bold text-slate-100 mb-8 tracking-tight flex items-center gap-2.5">
          <span className="w-2 h-6 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-sm"></span>
          About Me
        </h2>

        <div className="bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col md:flex-row gap-8 items-center">
          
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden border border-slate-700 ring-2 ring-blue-500/30 shadow-lg bg-slate-800">
              <img
                src="/assets/Profile.jpeg"
                alt="Jeyasuriya J Profile"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Bio Text */}
          <div className="flex-1 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am an Electronics and Communication Engineering undergraduate at <strong className="text-slate-100 font-semibold">Sri Eshwar College of Engineering</strong> (CGPA: 8.14) with a strong foundation in <strong className="text-cyan-400 font-semibold">Software Engineering</strong>, <strong className="text-blue-400 font-semibold">Backend Development</strong>, and <strong className="text-indigo-400 font-semibold">Artificial Intelligence</strong>.
            </p>
            <p>
              I specialize in building production-ready applications using Python, FastAPI, Django, React, and machine learning tools. My project work spans graph-based decision-support systems for crime intelligence, real-time computer vision safety compliance using YOLOv8, and predictive machine learning APIs.
            </p>
            <p>
              Passionate about problem-solving, I have solved over 260 problems on LeetCode and 1,000+ on SkillRack. I am actively seeking a Software Engineering or AI/ML internship to design robust APIs, optimize algorithms, and build impactful data-driven products.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
