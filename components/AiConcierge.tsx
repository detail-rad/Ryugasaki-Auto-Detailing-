import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, X, MessageSquare } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants.ts';
import { ChatMessage } from '../types.ts';

export const AiConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([{ role: 'model', text: 'Ryugasaki Auto Detailingへようこそ。お車のケアやメニューについて、AIコンシェルジュがお答えします。' }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: messages.concat({ role: 'user', text: userMessage }).map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        }
      });

      const aiText = response.text || "申し訳ありません、応答を生成できませんでした。";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "接続エラーが発生しました。しばらく時間をおいて再度お試しいただくか、公式LINEよりお問い合わせください。" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all transform hover:scale-110 active:scale-95 ${isOpen ? 'bg-slate-700' : 'bg-brand-accent animate-bounce'}`}
        aria-label="AIコンシェルジュを開く"
      >
        {isOpen ? <X className="text-white w-6 h-6" /> : <MessageSquare className="text-white w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-slate-900/95 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          <div className="bg-slate-800 p-4 border-b border-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="text-brand-gold w-5 h-5" />
              <h3 className="text-white font-bold text-sm tracking-tight">AI Concierge</h3>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">Powered by Gemini</span>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-brand-accent text-brand-dark font-medium rounded-tr-none' 
                    : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 text-slate-400 rounded-2xl rounded-tl-none p-3 text-xs border border-slate-700 flex gap-1">
                  <span className="animate-bounce">.</span>
                  <span className="animate-bounce [animation-delay:0.2s]">.</span>
                  <span className="animate-bounce [animation-delay:0.4s]">.</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-slate-900 border-t border-slate-700">
            <div className="flex items-center gap-2 bg-slate-800 rounded-full px-4 py-1 border border-slate-700 focus-within:border-brand-accent transition-colors">
              <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="メニューや料金について質問..." 
                className="flex-1 bg-transparent text-white text-sm outline-none py-2"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend} 
                disabled={isLoading || !input.trim()}
                className={`transition-colors ${isLoading || !input.trim() ? 'text-slate-600' : 'text-brand-accent hover:text-sky-300'}`}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};