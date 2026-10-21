import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, GeeksforGeeksIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-canvas-subtle border-t border-white/[0.08] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-canvas-card border border-white/10 flex items-center justify-center font-bold text-xs text-white">
              <span className="text-gradient-primary">KA</span>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                {personalInfo.name}
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Backend-Focused Full-Stack Developer
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.profiles.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-canvas-card border border-white/[0.08] text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.profiles.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-canvas-card border border-white/[0.08] text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.profiles.leetcode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-canvas-card border border-white/[0.08] text-slate-400 hover:text-amber-400 transition-colors"
              aria-label="LeetCode Profile"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.profiles.geeksforgeeks.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-canvas-card border border-white/[0.08] text-slate-400 hover:text-emerald-400 transition-colors"
              aria-label="GeeksforGeeks Profile"
            >
              <GeeksforGeeksIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span>© {currentYear} Kolliboyina Asritha</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-canvas-card border border-white/[0.08] text-slate-400 hover:text-white transition-colors"
              title="Scroll Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
