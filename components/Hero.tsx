import React from 'react';
import { ShieldCheck, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        <img 
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop" 
          alt="Car Detailing Foam Wash" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/60 to-brand-dark" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 backdrop-blur-md mb-6 animate-fade-in">
          <ShieldCheck className="w-4 h-4 text-brand-accent" />
          <span className="text-brand-accent text-sm font-semibold tracking-wider">PAINT PRESERVATION</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          塗装を削らず、<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-silver to-white">美観を整える。</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          重研磨で塗装を薄くする時代は終わりました。<br/>
          最新の充填技術（Filling）と化学の力で、愛車の輝きを護り抜く。<br/>
          Ryugasaki Auto Detailing、始動。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#coating" className="px-8 py-4 bg-brand-accent hover:bg-sky-400 text-brand-dark font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)]">
            コーティングメニューを見る
          </a>
          <a href="#concept" className="px-8 py-4 bg-transparent border border-slate-600 text-white hover:bg-slate-800 rounded-lg transition-all font-medium">
            コンセプトを知る
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-slate-500 w-8 h-8" />
      </div>
    </div>
  );
};