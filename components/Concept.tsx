import React from 'react';
import { Layers, Zap, Heart } from 'lucide-react';

export const Concept: React.FC = () => {
  return (
    <section id="concept" className="bg-slate-900 py-24 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-brand-accent font-bold tracking-widest uppercase mb-4 text-sm">Our Philosophy</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              傷を「削る」から<br/>
              <span className="text-white">「埋めて護る」</span>へ。
            </h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                  <Layers className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Paint Preservation</h4>
                  <p className="text-slate-400 leading-relaxed">
                    従来の「重研磨」は塗装膜厚を薄くし、将来的な耐久性を損ないます。私たちは最新の充填技術（Filling）とケミカルを用い、傷を埋めることで塗装本来の厚みを温存します。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                  <Zap className="text-brand-accent w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Polishing Included</h4>
                  <p className="text-slate-400 leading-relaxed">
                    大手チェーンではオプション扱いの「軽研磨・下地処理」を標準化。同価格帯で圧倒的な仕上がりを提供します。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                  <Heart className="text-pink-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">For Car Lovers</h4>
                  <p className="text-slate-400 leading-relaxed">
                    「長く乗りたい」「塗装を守りたい」というオーナー様に寄り添う、次世代のディテイリングサービスです。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-brand-accent/20 transform rotate-3 rounded-2xl blur-lg"></div>
            <img 
              src="https://picsum.photos/800/600?grayscale" 
              alt="Polishing Detail" 
              className="relative rounded-2xl shadow-2xl border border-slate-700 hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur p-4 rounded-xl border border-slate-700">
              <p className="text-brand-silver text-sm font-mono">
                Technology: CarPro Essence & N°999eF<br/>
                Status: Paint Protected
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
