import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon } from './BrandIcons';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'DSA & Practice', href: '#dsa' },
    { name: 'Skills', href: '#skills' },
    { name: 'Strengths', href: '#strengths' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-canvas-subtle/90 backdrop-blur-md border-b border-white/[0.08] shadow-subtle-card py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-accent-indigo rounded-lg px-1 py-0.5"
            aria-label="Kolliboyina Asritha - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-canvas-card border border-white/10 flex items-center justify-center font-bold text-lg text-white group-hover:border-accent-violet transition-colors shadow-sm">
              <span className="text-gradient-primary">KA</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-slate-100 group-hover:text-white transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                Backend & Full-Stack
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-slate-300 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/[0.05] transition-all font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: LinkedIn & View Resume */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={personalInfo.profiles.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-canvas-card border border-white/[0.08] text-slate-300 hover:text-white hover:border-white/[0.2] transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600/30 hover:border-indigo-500/50 hover:text-white transition-all shadow-sm group"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400 group-hover:scale-110 transition-transform" />
              <span>View Resume</span>
              <ArrowUpRight className="w-3 h-3 text-indigo-400/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={personalInfo.profiles.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-canvas-card border border-white/[0.08] text-slate-300 hover:text-white sm:hidden"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium px-3 py-1.5 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 sm:hidden"
            >
              Resume
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-accent-indigo"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-canvas-card border-b border-white/[0.1] px-4 pt-3 pb-5 space-y-2 animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base text-slate-200 hover:text-white px-3 py-2.5 rounded-md hover:bg-white/[0.05] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/[0.08] space-y-2">
              <a
                href={personalInfo.profiles.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-canvas-surface border border-white/[0.1] text-slate-200 hover:text-white font-medium text-sm transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-500 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Open Full Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
