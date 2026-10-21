import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, ShieldCheck, Cpu, Code } from 'lucide-react';
import { educationData, certifications } from '../data/portfolioData';

export default function Education() {
  const certIcons = {
    "Security": <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    "AI & ML": <Cpu className="w-5 h-5 text-indigo-400" />,
    "Full-Stack": <Code className="w-5 h-5 text-violet-400" />
  };

  return (
    <section id="education" className="py-24 bg-canvas-subtle relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-2 mb-14">
          <div className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-indigo-500"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">Academic & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education & Industry Certifications
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Formal computer science engineering foundation backed by specialized industry credentials in cybersecurity, machine learning, and full-stack architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education Card */}
          <div className="lg:col-span-5 rounded-2xl bg-canvas-card border border-white/[0.08] p-7 sm:p-8 space-y-6 shadow-sm hover:shadow-subtle-card">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-indigo-300">Undergraduate Degree</span>
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                    {educationData.degree}
                  </h3>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-sm text-slate-300">
              <div className="font-semibold text-white">
                {educationData.institution}
              </div>
              <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {educationData.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {educationData.location}
                </span>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-emerald-300">Cumulative Performance</div>
                <div className="text-xl font-bold text-white">CGPA: {educationData.cgpa}</div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold">
                First Class with Distinction
              </span>
            </div>

            {/* Curriculum Highlights */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-mono text-slate-400">Coursework & Foundation:</span>
              <div className="space-y-2">
                {educationData.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-indigo-400" />
              <span>Verified Industry Certifications</span>
            </h3>

            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-xl bg-canvas-card border border-white/[0.08] hover:border-white/[0.18] p-5 sm:p-6 transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-canvas-surface border border-white/[0.08]">
                        {certIcons[cert.badge] || <Award className="w-5 h-5 text-indigo-400" />}
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-indigo-300 font-medium">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-center">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                        Issued: {cert.year}
                      </span>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        {cert.badge}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans pl-1">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
