import React from 'react';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { Services } from './components/Services';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { AiConcierge } from './components/AiConcierge';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-slate-200 bg-brand-dark selection:bg-brand-accent selection:text-brand-dark">
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="font-bold text-white text-lg tracking-wider">Ryugasaki.A.D</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#concept" className="hover:text-brand-accent transition-colors">Philosophy</a>
          <a href="#coating" className="hover:text-brand-accent transition-colors">Coating</a>
          <a href="#wash" className="hover:text-brand-accent transition-colors">Wash</a>
        </div>
        <a 
          href="https://lin.ee/bQ2UxKd" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#06C755] hover:bg-[#05b34c] text-white text-xs font-bold rounded transition-all shadow-[0_0_10px_rgba(6,199,85,0.3)]"
        >
          LINE予約
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