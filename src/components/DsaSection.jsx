import React from 'react';
import { BrainCircuit, ArrowUpRight } from 'lucide-react';
import { LeetCodeIcon, GeeksforGeeksIcon } from './BrandIcons';
import { personalInfo, dsaTopics } from '../data/portfolioData';

export default function DsaSection() {
  return (
    <section id="dsa" className="py-24 bg-canvas-subtle relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-2 mb-14">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-indigo-500"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">Problem Solving</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Data Structures & Algorithmic Practice
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Consistent coding practice on LeetCode and GeeksforGeeks focusing on algorithmic patterns, optimal time-space complexity, and clean implementation.
          </p>
        </div>

        {/* 2 Prominent Official Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* LeetCode Card */}
          <div className="rounded-2xl bg-canvas-card border border-white/[0.08] hover:border-amber-400/30 p-8 space-y-6 transition-all shadow-sm hover:shadow-subtle-card group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                  <LeetCodeIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    LeetCode
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    @{personalInfo.profiles.leetcode.username}
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                Active Practice
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Regular algorithmic problem-solving on LeetCode emphasizing two pointers, sliding window, recursion, dynamic programming memoization, and tree traversals. Practicing optimal time and space trade-offs in Java and Python.
            </p>

            <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Platform: LeetCode</span>
              <a
                href={personalInfo.profiles.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold transition-all group/btn"
              >
                <span>View LeetCode Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* GeeksforGeeks Card */}
          <div className="rounded-2xl bg-canvas-card border border-white/[0.08] hover:border-emerald-400/30 p-8 space-y-6 transition-all shadow-sm hover:shadow-subtle-card group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <GeeksforGeeksIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    GeeksforGeeks
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    @{personalInfo.profiles.geeksforgeeks.username}
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                Core Rigor
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Strengthening core data structure fundamentals on GeeksforGeeks through topic-wise practice in arrays, linked lists, hashing, graphs, and greedy algorithmic strategies.
            </p>

            <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Platform: GeeksforGeeks</span>
              <a
                href={personalInfo.profiles.geeksforgeeks.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-all group/btn"
              >
                <span>View GeeksforGeeks Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Core Topics Breakdown Grid */}
        <div className="rounded-2xl bg-canvas-card border border-white/[0.08] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-indigo-400" />
                <span>Core Topics & Algorithmic Focus</span>
              </h3>
              <p className="text-xs text-slate-400">
                Topics actively practiced and applied in system designs and problem-solving.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Primary Language: Java
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dsaTopics.map((topic) => (
              <div
                key={topic.name}
                className="p-4 rounded-xl bg-canvas-surface/60 border border-white/[0.06] hover:border-white/[0.12] transition-colors space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-white">
                    {topic.name}
                  </h4>
                  <span className="text-[10px] font-mono text-indigo-300 px-1.5 py-0.5 rounded bg-indigo-950/60 border border-indigo-500/30">
                    Active
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                  {topic.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
