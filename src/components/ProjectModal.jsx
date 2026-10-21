import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Shield, Layers, Code, Zap, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview & Features', icon: <Layers className="w-4 h-4" /> },
    { id: 'architecture', label: 'Architecture & Flow', icon: <Zap className="w-4 h-4" /> },
    { id: 'technical', label: 'Engineering Details', icon: <Code className="w-4 h-4" /> },
    { id: 'security', label: 'Security & Future Work', icon: <Shield className="w-4 h-4" /> },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-canvas-card border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]">
        {/* Modal Top Bar */}
        <div className="p-6 border-b border-white/[0.08] bg-canvas-surface flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className={`text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                project.badgeColor === 'emerald'
                  ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                  : project.badgeColor === 'indigo'
                  ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30'
                  : project.badgeColor === 'violet'
                  ? 'bg-violet-500/10 text-violet-300 border-violet-500/30'
                  : 'bg-rose-500/10 text-rose-300 border-rose-500/30'
              }`}>
                {project.badge}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {project.category}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              {project.tagline}
            </p>
          </div>

          {/* Close & Action Buttons */}
          <div className="flex items-center gap-2 self-start sm:self-center">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/[0.1] transition-colors"
                title="View GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.verifiedLive && project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white border border-white/[0.1] transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/[0.08] bg-canvas-card px-4 sm:px-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'border-indigo-500 text-indigo-300 bg-white/[0.02]'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-300">
          {/* TAB 1: OVERVIEW & FEATURES */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-canvas-surface border border-white/[0.06] space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" /> The Problem
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {project.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-canvas-surface border border-white/[0.06] space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> The Solution
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">
                  Key Implemented Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-canvas-surface/70 border border-white/[0.06] space-y-1.5 hover:border-white/[0.12] transition-colors"
                    >
                      <h4 className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                        {feat.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE & DATA FLOW */}
          {activeTab === 'architecture' && (
            <div className="space-y-5 animate-fade-in">
              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-1">
                  End-to-End Pipeline & System Flow
                </h3>
                <p className="text-xs text-slate-400">
                  Step-by-step data journey representing actual controller, service, and protocol boundaries.
                </p>
              </div>

              <div className="space-y-3">
                {project.architectureSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-canvas-surface border border-white/[0.06] flex items-start gap-4 hover:border-indigo-500/30 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs sm:text-sm font-semibold text-white">
                        {step.step}
                      </div>
                      <div className="text-xs text-slate-300 leading-relaxed">
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: TECHNICAL IMPLEMENTATION */}
          {activeTab === 'technical' && (
            <div className="space-y-5 animate-fade-in">
              <div>
                <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-1">
                  Technical Architecture & Engineering Decisions
                </h3>
                <p className="text-xs text-slate-400">
                  Documented implementation decisions derived from repository inspection and actual system files.
                </p>
              </div>

              <div className="space-y-3">
                {project.technicalImplementation.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-canvas-surface border border-white/[0.06] text-xs sm:text-sm text-slate-300 font-mono leading-relaxed flex items-start gap-3"
                  >
                    <span className="text-indigo-400 font-bold shrink-0">#</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Technologies chip cloud */}
              <div className="p-4 rounded-xl bg-canvas-surface/50 border border-white/[0.06] space-y-2">
                <span className="text-xs font-mono text-slate-400">Complete Technology Stack:</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-canvas-card border border-white/[0.08] text-xs font-mono text-indigo-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SECURITY & FUTURE WORK */}
          {activeTab === 'security' && (
            <div className="space-y-6 animate-fade-in">
              {/* Security Measures */}
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <Shield className="w-4 h-4" /> Application Security Measures
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.securityMeasures.map((measure, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-canvas-surface border border-emerald-500/20 text-xs text-slate-300 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{measure}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Trade-offs */}
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">
                  Engineering Decisions & Trade-Offs
                </h3>
                <div className="space-y-2">
                  {project.engineeringDecisions.map((dec, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-canvas-surface/60 border border-white/[0.06] text-xs text-slate-300 flex items-start gap-2"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{dec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Planned Enhancements */}
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400">
                  Planned Enhancements (Future Work)
                </h3>
                <div className="space-y-2">
                  {project.futureWork.map((fw, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-amber-950/20 border border-amber-500/20 text-xs text-amber-200/90 flex items-start gap-2"
                    >
                      <span className="text-amber-400 font-bold shrink-0">→</span>
                      <span>{fw}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-canvas-surface flex items-center justify-between text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span>Repo:</span>
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline inline-flex items-center gap-1"
              >
                <span>{project.githubUrl.replace('https://github.com/', '')}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span>Internal / Academic</span>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-white font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
