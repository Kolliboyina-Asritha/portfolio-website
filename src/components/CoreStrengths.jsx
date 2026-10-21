import React from 'react';
import { Users, Puzzle, MessageSquare, Cpu, Zap, Rocket, Compass, Sparkles } from 'lucide-react';
import { coreStrengths } from '../data/portfolioData';

export default function CoreStrengths() {
  const iconMap = {
    Users: <Users className="w-5 h-5 text-indigo-400" />,
    Puzzle: <Puzzle className="w-5 h-5 text-emerald-400" />,
    MessageSquare: <MessageSquare className="w-5 h-5 text-cyan-400" />,
    Cpu: <Cpu className="w-5 h-5 text-violet-400" />,
    Zap: <Zap className="w-5 h-5 text-amber-400" />,
    Rocket: <Rocket className="w-5 h-5 text-rose-400" />,
    Compass: <Compass className="w-5 h-5 text-indigo-300" />
  };

  return (
    <section id="strengths" className="py-24 bg-canvas-subtle relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-2 mb-14">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-indigo-500"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">Professional Traits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Core Strengths & Engineering Mindset
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Essential problem-solving habits, communication practices, and collaborative leadership that guide how I build and maintain reliable software.
          </p>
        </div>

        {/* 7 Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreStrengths.map((strength, index) => {
            const isLastOdd = index === coreStrengths.length - 1 && coreStrengths.length % 3 === 1;
            return (
              <div
                key={strength.id}
                className={`rounded-2xl bg-canvas-card border border-white/[0.08] hover:border-white/[0.18] p-6 sm:p-7 space-y-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-subtle-card group flex flex-col justify-between ${
                  isLastOdd ? 'lg:col-span-3 lg:max-w-xl lg:mx-auto w-full' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-canvas-surface border border-white/[0.08] group-hover:scale-105 transition-transform">
                      {iconMap[strength.iconName] || <Sparkles className="w-5 h-5 text-indigo-400" />}
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                      {strength.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                      {strength.title}
                    </h3>
                    <p className="text-xs font-mono text-indigo-400/90">
                      {strength.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {strength.desc}
                  </p>
                </div>

                {/* Subtle indicator bar */}
                <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-400 group-hover:text-slate-300 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    Verified Competency
                  </span>
                  <span className="text-slate-400 font-mono">0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
