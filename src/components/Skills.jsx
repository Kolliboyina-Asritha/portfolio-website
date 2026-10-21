import React from 'react';
import { Terminal, Globe, Database, Wrench, BookOpen } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const categoryIcons = {
    "Programming Languages": <Terminal className="w-5 h-5 text-indigo-400" />,
    "Web & Backend Technologies": <Globe className="w-5 h-5 text-emerald-400" />,
    "Databases & Storage": <Database className="w-5 h-5 text-cyan-400" />,
    "Developer Tools & Testing": <Wrench className="w-5 h-5 text-amber-400" />,
    "Core Computer Science": <BookOpen className="w-5 h-5 text-violet-400" />
  };

  return (
    <section id="skills" className="py-24 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-2 mb-14">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-indigo-500"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Languages, Frameworks & Core Foundations
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Grounded in core Computer Science fundamentals, prioritizing backend engineering, Java, and secure RESTful web systems.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.categories.map((cat) => (
            <div
              key={cat.name}
              className={`rounded-2xl bg-canvas-card border p-6 sm:p-7 space-y-5 transition-all shadow-sm hover:shadow-subtle-card ${
                cat.featured
                  ? 'border-indigo-500/30 bg-gradient-to-b from-canvas-card to-canvas-surface/80'
                  : 'border-white/[0.08] hover:border-white/[0.15]'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-white/[0.06]">
                <div className="p-2.5 rounded-xl bg-canvas-surface border border-white/[0.08]">
                  {categoryIcons[cat.name] || <Terminal className="w-5 h-5 text-indigo-400" />}
                </div>
                <div>
                  <h3 className="font-bold text-base text-white tracking-tight">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-sans">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-3 rounded-xl border transition-colors flex items-start justify-between gap-3 ${
                      skill.highlight
                        ? 'bg-canvas-surface/90 border-white/[0.12] hover:border-indigo-400/40'
                        : 'bg-canvas-surface/40 border-white/[0.04] hover:border-white/[0.1]'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold ${
                          skill.highlight ? 'text-indigo-200' : 'text-slate-200'
                        }`}>
                          {skill.name}
                        </span>
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 font-sans leading-tight">
                        {skill.note}
                      </p>
                    </div>

                    {skill.level && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/[0.06] shrink-0">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
