import React from 'react';
import { Hero } from './components/Hero.tsx';
import { Concept } from './components/Concept.tsx';
import { Services } from './components/Services.tsx';
import { ContactCTA } from './components/ContactCTA.tsx';
import { Footer } from './components/Footer.tsx';
import { AiConcierge } from './components/AiConcierge.tsx';

const App = () => {
  return (
    <div className="font-sans antialiased text-slate-200 bg-brand-dark selection:bg-brand-accent selection:text-brand-dark">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-brand-dark/90 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-accent rounded flex items-center justify-center font-black text-brand-dark text-lg">R</div>
          <div className="font-bold text-white text-lg tracking-tighter">Ryugasaki <span className="text-brand-accent">Auto Detailing</span></div>
        </div>
        <div className="hidden md:flex gap-10 text-sm font-semibold text-slate-400 uppercase tracking-widest">
          <a href="#concept" className="hover:text-brand-accent transition-all duration-300">Philosophy</a>
          <a href="#coating" className="hover:text-brand-accent transition-all duration-300">Coating</a>
          <a href="#wash" className="hover:text-brand-accent transition-all duration-300">Wash</a>
        </div>
        <a href="https://lin.ee/bQ2UxKd" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-[#06C755] hover:bg-[#05b34c] text-white text-sm font-black rounded-lg transition-all shadow-lg flex items-center gap-2">
          <span>LINE予約</span>
        </a>
      </nav>

      <main>
        <Hero />
        <Concept />
        <Services />
        <ContactCTA />
      </main>
      
      <Footer />
      <AiConcierge />
    </div>
  );
};

export default App;