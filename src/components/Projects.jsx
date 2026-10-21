import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projects } from '../data/projectDetails';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Security & AI', 'Full-Stack & Systems', 'Marketplace'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-indigo-500"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">Engineering Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Systems & Case Studies
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
              Architectural deep-dives into explainable URL threat detection, enterprise HRMS workflows, vehicle marketplaces, and client-side zero-knowledge encryption.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-canvas-card text-slate-400 hover:text-white border border-white/[0.08] hover:border-white/[0.15]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-canvas-card border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between overflow-hidden group shadow-sm hover:shadow-subtle-card"
            >
              <div className="p-6 sm:p-8 space-y-5">
                {/* Top Badge & Links */}
                <div className="flex items-center justify-between gap-2">
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

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.verifiedLive && project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-indigo-400 hover:text-indigo-300 hover:bg-white/[0.05] transition-colors"
                        aria-label={`${project.title} live deployment`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-mono">
                    {project.tagline}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {project.summary}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-canvas-surface border border-white/[0.06] text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="text-xs px-2 py-1 rounded-md bg-canvas-surface border border-white/[0.06] text-slate-400 font-mono">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-6 sm:px-8 py-4 bg-canvas-surface/60 border-t border-white/[0.06] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group/btn"
                >
                  <span>Explore Architecture & Deep Dive</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <span className="text-[11px] font-mono text-slate-400">
                  {project.verifiedLive ? 'Verified Live' : 'Source Available'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
