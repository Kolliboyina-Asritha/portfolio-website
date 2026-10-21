import React from 'react';
import { Server, ShieldCheck, Database, Code2, GraduationCap, MapPin, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const getPillarIcon = (idx) => {
    switch (idx) {
      case 0: return <Server className="w-5 h-5 text-indigo-400" />;
      case 1: return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 2: return <Database className="w-5 h-5 text-cyan-400" />;
      case 3: return <Code2 className="w-5 h-5 text-violet-400" />;
      default: return <Server className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-indigo-500"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering with Purpose & Precision
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Grounded in computer science fundamentals, driven by hands-on backend systems, and passionate about reliable, security-first software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className="text-slate-300 font-normal">
                {paragraph}
              </p>
            ))}

            {/* Academic Highlights Banner */}
            <div className="mt-8 p-5 rounded-2xl bg-canvas-card border border-white/[0.08] flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Current Degree</div>
                  <div className="text-sm font-semibold text-white">B.Tech in Computer Science</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Cumulative GPA</div>
                  <div className="text-sm font-semibold text-emerald-300">8.92 / 10</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 border border-violet-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Institution</div>
                  <div className="text-sm font-semibold text-white">Vishnu Institute of Technology</div>
                </div>
              </div>
            </div>
          </div>

          {/* Engineering Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {personalInfo.engineeringPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-5 rounded-xl bg-canvas-card border border-white/[0.08] hover:border-white/[0.18] transition-all hover:bg-canvas-surface group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-canvas-surface border border-white/[0.08] group-hover:scale-105 transition-transform">
                    {getPillarIcon(idx)}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-sm text-slate-200 group-hover:text-white transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
