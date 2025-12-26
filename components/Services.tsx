import React from 'react';
import { WASH_MENU, COATING_MENU } from '../constants';
import { ServiceItem } from '../types';
import { Check, Info } from 'lucide-react';

const ServiceCard: React.FC<{ item: ServiceItem }> = ({ item }) => (
  <div className={`relative group bg-slate-800/50 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:bg-slate-800 ${item.colorClass}`}>
    <div className="p-6 md:p-8 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="bg-slate-900/80 px-3 py-1 rounded text-xs text-slate-400 font-mono border border-slate-700">
          {item.tier} - {item.title}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
      <p className="text-brand-accent text-sm font-medium mb-4">{item.subtitle}</p>
      
      <div className="mb-6">
        <span className="text-3xl font-bold text-white tracking-tight">{item.price}</span>
        <span className="text-slate-500 text-sm ml-2">(税込・Mサイズ)</span>
      </div>

      <p className="text-slate-300 text-sm leading-relaxed mb-6 min-h-[60px]">
        {item.description}
      </p>

      <div className="space-y-3 mb-8 flex-1">
        {item.features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-brand-accent shrink-0" />
            <span className="text-slate-200 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-6 border-t border-slate-700/50">
         <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/50 p-3 rounded-lg">
            <Info className="w-4 h-4 shrink-0" />
            <span>推奨: {item.recommendedFor}</span>
         </div>
      </div>
    </div>
  </div>
);

export const Services: React.FC = () => {
  return (
    <div className="bg-brand-dark py-20 px-4">
      
      {/* Coating Section */}
      <section id="coating" className="max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Coating Menu</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            KeePerの価格帯で、専門店クオリティの下地処理を。<br/>
            全てのプランにプロの技術と情熱を注ぎ込みます。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COATING_MENU.map((item, idx) => (
            <ServiceCard key={idx} item={item} />
          ))}
        </div>
      </section>

      {/* Wash Section */}
      <section id="wash" className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Wash & Maintenance</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            純水 × 摩擦レス洗車。<br/>
            リピーター様のための、維持管理特化メニュー。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WASH_MENU.map((item, idx) => (
            <ServiceCard key={idx} item={item} />
          ))}
        </div>
      </section>

    </div>
  );
};
