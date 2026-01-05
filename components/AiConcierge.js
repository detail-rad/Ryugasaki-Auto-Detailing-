import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, X, MessageSquare } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants.js';

export const AiConcierge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'model', text: 'Ryugasaki Auto Detailingへようこそ。お車のケアやメニューについて、AIコンシェルジュがお答えします。' }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => { scrollToBottom(); }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = window.process?.env?.API_KEY || "";
      if (!apiKey) throw new Error("API Key not found");
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: messages.concat({role: 'user', text: userMessage}).map(m => m.text).join('\n'),
        config: { systemInstruction: SYSTEM_INSTRUCTION }
      });
      setMessages(prev => [...prev, { role: 'model', text: response.text || "応答がありませんでした。" }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "申し訳ありません。エラーが発生しました。" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all ${isOpen ? 'bg-slate-700' : 'bg-brand-accent animate-bounce'}`}>
        {isOpen ? <X className="text-white w-6 h-6" /> : <MessageSquare className="text-white w-6 h-6" />}
      </button>
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-slate-900/95 backdrop-blur-lg border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-slate-800 p-4 border-b border-slate-700 flex items-center gap-2">
            <Sparkles className="text-brand-gold w-5 h-5" />
            <h3 className="text-white font-bold text-sm">AI Concierge</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${msg.role === 'user' ? 'bg-brand-accent text-slate-900' : 'bg-slate-800 text-slate-200'}`}>{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 bg-slate-900 border-t border-slate-700">
            <div className="flex items-center gap-2 bg-slate-800 rounded-full px-4 py-2">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="質問を入力..." className="flex-1 bg-transparent text-white text-sm outline-none" />
              <button onClick={handleSend} disabled={isLoading} className="text-brand-accent"><Send className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};