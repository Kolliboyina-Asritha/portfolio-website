import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import DsaSection from './components/DsaSection';
import Skills from './components/Skills';
import CoreStrengths from './components/CoreStrengths';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#090D16] min-h-screen text-slate-100 flex flex-col font-sans selection:bg-indigo-600/30 selection:text-indigo-200">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <DsaSection />
        <Skills />
        <CoreStrengths />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
