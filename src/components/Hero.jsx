import React from 'react';
import { ArrowRight, ShieldCheck, Database, Server, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon, GeeksforGeeksIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-radial-glow pointer-events-none opacity-60"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-radial-glow-violet pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-indigo-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Computer Science Undergraduate • Class of 2027</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-gradient-primary">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-300 tracking-tight">
                {personalInfo.role}
              </p>
            </div>

            {/* Concise Value Proposition */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Computer Science student at <span className="text-slate-200 font-medium">Vishnu Institute of Technology</span> (CGPA 8.92/10). Specializing in <span className="text-indigo-300 font-medium">Java</span>, <span className="text-indigo-300 font-medium">JavaScript</span>, <span className="text-indigo-300 font-medium">Node.js</span>, <span className="text-indigo-300 font-medium">REST APIs</span>, distributed databases, and secure web architectures with client-side cryptography.
            </p>

            {/* Core Capability Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-canvas-card border border-white/[0.08] text-xs font-medium text-slate-300">
                <Server className="w-3.5 h-3.5 text-indigo-400" /> RESTful Architecture
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-canvas-card border border-white/[0.08] text-xs font-medium text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Web Crypto & RBAC
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-canvas-card border border-white/[0.08] text-xs font-medium text-slate-300">
                <Database className="w-3.5 h-3.5 text-cyan-400" /> MongoDB & MySQL
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-canvas-card border border-white/[0.08] text-xs font-medium text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-violet-400" /> Java & DSA
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-glow-indigo group"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-canvas-card hover:bg-canvas-surface border border-white/[0.12] hover:border-white/[0.2] text-slate-200 font-semibold text-sm transition-all shadow-sm"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Quick Profile Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-mono text-slate-500">Profiles:</span>
              <a
                href={personalInfo.profiles.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-canvas-card border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/[0.2] transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.profiles.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-canvas-card border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/[0.2] transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.profiles.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-canvas-card border border-white/[0.08] text-slate-300 hover:text-amber-400 hover:border-amber-400/30 transition-all"
                aria-label="LeetCode Profile"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.profiles.geeksforgeeks.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-canvas-card border border-white/[0.08] text-slate-300 hover:text-emerald-400 hover:border-emerald-400/30 transition-all"
                aria-label="GeeksforGeeks Profile"
              >
                <GeeksforGeeksIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Architecture Visualizer Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card frame */}
              <div className="rounded-2xl bg-canvas-card/90 border border-white/[0.1] p-6 shadow-2xl backdrop-blur-sm space-y-5">
                {/* Window header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-400">system_architecture.spec</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    Live Concept
                  </span>
                </div>

                {/* Architecture Pipeline Nodes */}
                <div className="space-y-3 font-mono text-xs">
                  {/* Layer 1: Client / Intercept */}
                  <div className="p-3 rounded-xl bg-canvas-surface border border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-slate-200 font-semibold">Client Interfaces</div>
                        <div className="text-[11px] text-slate-400 font-sans">React 18 • Chrome MV3 Interceptor</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-indigo-300 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/30">
                      HTTP/WS
                    </span>
                  </div>

                  {/* Flow arrow */}
                  <div className="flex justify-center -my-1 text-slate-600">
                    <span>↓</span>
                  </div>

                  {/* Layer 2: API Gateway & Security */}
                  <div className="p-3 rounded-xl bg-canvas-surface border border-indigo-500/20 bg-gradient-to-r from-canvas-surface to-indigo-950/20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-slate-200 font-semibold">API Gateway & Security</div>
                        <div className="text-[11px] text-slate-400 font-sans">JWT Rotation • RBAC 5 Roles • Helmet</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      Zero-Trust
                    </span>
                  </div>

                  {/* Flow arrow */}
                  <div className="flex justify-center -my-1 text-slate-600">
                    <span>↓</span>
                  </div>

                  {/* Layer 3: Services & Engines */}
                  <div className="p-3 rounded-xl bg-canvas-surface border border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-slate-200 font-semibold">Business Logic & Engines</div>
                        <div className="text-[11px] text-slate-400 font-sans">FastAPI ML • Cron Attendance • Socket.IO</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-violet-300 bg-violet-950/60 px-2 py-0.5 rounded border border-violet-500/30">
                      Async
                    </span>
                  </div>

                  {/* Flow arrow */}
                  <div className="flex justify-center -my-1 text-slate-600">
                    <span>↓</span>
                  </div>

                  {/* Layer 4: Storage Vault */}
                  <div className="p-3 rounded-xl bg-canvas-surface border border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                        <Database className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-slate-200 font-semibold">Persistence Layer</div>
                        <div className="text-[11px] text-slate-400 font-sans">MongoDB (Indexed) • MySQL • Cloudinary</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                      Encrypted
                    </span>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400">
                  <span>Engineered with Java & Node.js</span>
                  <span className="text-slate-300 font-mono">Bhimavaram, AP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
