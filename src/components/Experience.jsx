import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-canvas-subtle relative border-t border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-2 mb-14">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-indigo-500"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">Industry Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Practical Software Engineering Internships
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Hands-on full-stack development building scalable backend features, enterprise access control, and secure RESTful services.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-indigo-500/20 ml-3 sm:ml-6 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-canvas border-2 border-indigo-500 group-hover:bg-indigo-400 transition-colors"></div>

              {/* Experience Card */}
              <div className="rounded-2xl bg-canvas-card border border-white/[0.08] p-6 sm:p-8 hover:border-white/[0.18] transition-all space-y-5 shadow-sm hover:shadow-subtle-card">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white tracking-tight">{exp.role}</h3>
                      <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                        exp.status === 'Current'
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                          : 'bg-slate-500/10 text-slate-300 border-slate-500/30'
                      }`}>
                        {exp.status}
                      </span>
                    </div>
                    <div className="text-base font-medium text-indigo-300 flex items-center gap-2 pt-1">
                      <Briefcase className="w-4 h-4 text-indigo-400 inline" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end gap-2 sm:gap-1 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Project Focus */}
                <div className="inline-block px-3 py-1 rounded-lg bg-indigo-950/40 border border-indigo-500/20 text-xs font-mono text-indigo-200">
                  Core Project: {exp.projectFocus}
                </div>

                {/* Highlights List */}
                <div className="space-y-2.5">
                  {exp.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400/80 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="pt-2">
                  <div className="text-xs font-mono text-slate-400 mb-2">Technologies Used:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-canvas-surface border border-white/[0.08] text-slate-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
