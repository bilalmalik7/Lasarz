'use client';
import { useState, useEffect } from 'react';

export function ImmoSticky() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-10px_30px_rgba(0,0,0,0.1)] z-[100] border-t border-gray-100 p-5 animate-fade-in md:hidden">
      <div className="container flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Steuerersparnis</p>
          <p className="text-sm font-black text-[#1C2431]">KOSTENLOSE PRÜFUNG</p>
        </div>
        <a href="#gutachten" className="btn bg-[#00B32E] hover:bg-[#009426] text-white px-6 py-4 text-xs font-black uppercase tracking-wider rounded-xl shadow-lg">
          Jetzt anfragen
        </a>
      </div>
    </div>
  );
}
