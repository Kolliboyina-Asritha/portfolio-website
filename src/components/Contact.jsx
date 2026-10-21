import React, { useState } from 'react';
import { Copy, Check, Send, ExternalLink, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', text: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.text) setStatus({ type: '', text: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        text: 'Please fill in all required fields (Name, Email, Message).'
      });
      return;
    }

    // Direct mailto construction
    const subject = encodeURIComponent(formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Asritha,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    // Open default mail client
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setStatus({
      type: 'info',
      text: 'Opening your mail client with pre-filled details. You can also copy my email directly above.'
    });
  };

  return (
    <section id="contact" className="py-24 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-2 mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-indigo-500"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">Get in Touch</span>
            <span className="w-6 h-[2px] bg-indigo-500"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Let's Discuss Opportunities & Architecture
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Open for software engineering internships, backend full-stack roles, and technical discussions. Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Outreach Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-canvas-card border border-white/[0.08] p-6 sm:p-7 space-y-6 shadow-sm">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <span>Direct Contact Details</span>
              </h3>

              {/* Email Box */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400">Email Address:</span>
                <div className="p-3.5 rounded-xl bg-canvas-surface border border-white/[0.08] flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-mono text-indigo-300 hover:text-white truncate transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy Email to Clipboard"
                    aria-label="Copy Email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="text-[11px] font-mono text-emerald-400 pl-1">
                    ✓ Email copied to clipboard!
                  </p>
                )}
              </div>

              {/* Professional Profiles */}
              <div className="space-y-3 pt-2 border-t border-white/[0.06]">
                <span className="text-xs font-mono text-slate-400">Professional Networks:</span>

                <a
                  href={personalInfo.profiles.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-canvas-surface border border-white/[0.06] hover:border-indigo-500/30 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-5 h-5 text-indigo-400" />
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white">LinkedIn</div>
                      <div className="text-[11px] text-slate-400 font-mono">in/{personalInfo.profiles.linkedin.username}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-indigo-300 transition-colors" />
                </a>

                <a
                  href={personalInfo.profiles.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-canvas-surface border border-white/[0.06] hover:border-white/[0.2] flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5 text-slate-200" />
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white">GitHub</div>
                      <div className="text-[11px] text-slate-400 font-mono">github.com/Kolliboyina-Asritha</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-canvas-card border border-white/[0.08] p-6 sm:p-8 space-y-4 shadow-sm"
            >
              <h3 className="text-lg font-bold text-white tracking-tight">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400">
                Drafts a direct email dispatch to <span className="text-slate-300 font-mono">{personalInfo.email}</span>.
              </p>

              {status.text && (
                <div className={`p-3 rounded-xl text-xs font-mono ${
                  status.type === 'error'
                    ? 'bg-rose-950/40 border border-rose-500/30 text-rose-300'
                    : 'bg-indigo-950/40 border border-indigo-500/30 text-indigo-200'
                }`}>
                  {status.text}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Smith"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-surface border border-white/[0.08] focus:border-indigo-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-500 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-slate-400">Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-surface border border-white/[0.08] focus:border-indigo-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Engineering Opportunity / Project Discussion"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-surface border border-white/[0.08] focus:border-indigo-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-500 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about your team, project, or role..."
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-canvas-surface border border-white/[0.08] focus:border-indigo-500 focus:outline-none text-xs sm:text-sm text-white placeholder-slate-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-glow-indigo group"
              >
                <span>Draft Email to Asritha</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
