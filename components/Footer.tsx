import React from 'react';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Ryugasaki Auto Detailing</h3>
            <p className="text-sm leading-relaxed mb-6">
              塗装を削らず、美観を整える。<br/>
              茨城県龍ケ崎市のプライベートディテイリングスタジオ。
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/ryugasaki_auto_detailing?igsh=ZndmeHBtOXhndGx4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 shadow-lg border border-slate-700"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Menu</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#wash" className="hover:text-brand-accent transition-colors">Wash & Maintenance</a></li>
              <li><a href="#coating" className="hover:text-brand-accent transition-colors">Ceramic Coating</a></li>
              <li><a href="#concept" className="hover:text-brand-accent transition-colors">Concept</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                <span>〒301-0021<br/>茨城県龍ケ崎市北方町822-1</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-accent shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span>土曜 11:00 - 18:00</span>
                  <span>日曜 9:00 - 18:00</span>
                  <span className="text-xs text-slate-500 mt-1">(完全予約制)</span>
                </div>
              </li>
            </ul>
            <div className="mt-8 pt-8 border-t border-slate-900">
               <p className="text-sm text-white font-bold mb-4">LINEで予約・相談する</p>
               <a href="https://lin.ee/bQ2UxKd" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-90 transition-opacity">
                 <img 
                   src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" 
                   alt="友だち追加" 
                   height="36" 
                   className="h-[40px]"
                 />
               </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Business Plan</h4>
            <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
               <p className="text-xs text-slate-500 mb-2">
                 当店のコンセプトは「Paint Preservation」です。
                 KeePer様の価格帯で、専門店レベルの「研磨付き」コーティングを提供します。
               </p>
               <div className="h-1 w-full bg-slate-800 rounded overflow-hidden">
                 <div className="h-full bg-brand-gold w-3/4"></div>
               </div>
               <p className="text-[10px] text-right mt-1 text-brand-gold">Filling Technology</p>
            </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-900 text-center text-xs">
          © {new Date().getFullYear()} Ryugasaki Auto Detailing. All rights reserved.
        </div>
      </div>
    </footer>
  );
};