import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

export const ContactCTA: React.FC = () => {
  return (
    <section className="bg-slate-900 border-t border-slate-800 py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-brand-dark/50" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Connect With Us
        </h2>
        <p className="text-slate-400 mb-12">
          ご予約・ご相談、最新情報のチェックはこちらから
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LINE Card */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-[#06C755]/30 shadow-[0_0_30px_rgba(6,199,85,0.1)] hover:shadow-[0_0_40px_rgba(6,199,85,0.2)] transition-all group">
            <div className="w-20 h-20 bg-[#06C755]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
               <MessageCircle className="w-10 h-10 text-[#06C755]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">LINE公式アカウント</h3>
            <p className="text-slate-300 text-sm mb-8 leading-relaxed">
              ご予約・お見積もりはLINEがスムーズです。<br/>
              クーポンやキャンペーン情報もお届け。
            </p>
            <a 
              href="https://lin.ee/bQ2UxKd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity transform hover:scale-105 duration-300"
            >
              <img 
                src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" 
                alt="友だち追加" 
                height="36" 
                className="h-[50px] w-auto" 
              />
            </a>
          </div>

          {/* Instagram Card */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30 shadow-[0_0_30px_rgba(236,72,153,0.1)] hover:shadow-[0_0_40px_rgba(236,72,153,0.2)] transition-all group">
             <div className="w-20 h-20 bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
               <Instagram className="w-10 h-10 text-pink-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Official Instagram</h3>
            <p className="text-slate-300 text-sm mb-8 leading-relaxed">
              最新の施工事例、ビフォーアフター動画を<br/>
              毎日更新しています。
            </p>
            <a 
              href="https://www.instagram.com/ryugasaki_auto_detailing?igsh=ZndmeHBtOXhndGx4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl transition-all shadow-lg transform hover:scale-105 duration-300"
            >
              <Instagram className="w-6 h-6" />
              <span>フォローする</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};