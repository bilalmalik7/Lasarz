'use client';
import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';

export function ImmoCalculator() {
  const [step, setStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const revealRef = useReveal();
  
  const handleNextStep = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStep(prev => Math.min(prev + 1, 4));
      setIsAnimating(false);
    }, 400);
  };

  const handlePrevStep = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setStep(prev => Math.max(prev - 1, 1));
      setIsAnimating(false);
    }, 400);
  };

  return (
    <section id="gutachten" ref={revealRef} className="section bg-[#F5F2EA] py-32 overflow-hidden">
      <div className="container max-w-4xl">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#1C2431] immo-source-sans">
            Ihre <span className="text-[#1A758D]">Ersteinschätzung</span> in 2 Minuten
          </h2>
          <p className="text-xl text-[#555555] max-w-2xl mx-auto">
            Finden Sie heraus, wie viel Steuerersparnis in Ihrer Immobilie steckt.
          </p>
        </div>

        <div className="bg-[#FAF9F6] rounded-[3rem] p-8 md:p-16 shadow-2xl relative reveal-on-scroll delay-100 border border-white/50">
          {/* Custom Progress Bar */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-bold text-[#1C2431] uppercase tracking-wider">Fortschritt</span>
              <span className="text-sm font-bold text-[#1A758D]">{Math.round(((step - 1) / 3) * 100)}%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#00B32E] transition-all duration-700 ease-out relative" 
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95 translateY(10px)' : 'opacity-100 scale-100 translateY(0)'}`}>
            <div className="min-h-[400px]">
              {step === 1 && (
                <div className="space-y-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1C2431] text-center mb-10">Welches Objekt möchten Sie prüfen?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Eigentumswohnung', 'Mehrfamilienhaus', 'Einfamilienhaus', 'Gewerbeobjekt'].map((type) => (
                      <button 
                        key={type} 
                        onClick={handleNextStep}
                        className="p-8 text-left border-2 border-white bg-white hover:border-[#1A758D] hover:shadow-xl transition-all font-bold text-[#1C2431] rounded-2xl flex justify-between items-center group hover-lift"
                      >
                        <span>{type}</span>
                        <span className="text-[#1A758D] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1C2431]">Angaben zum Erwerb</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Kaufpreis für das Gebäude</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">€</span>
                        <input type="text" placeholder="0,00" className="w-full pl-10 pr-4 py-5 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#1A758D]/20 focus:border-[#1A758D] outline-none font-bold text-lg shadow-sm" />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Jahr der Anschaffung</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </span>
                        <input type="text" placeholder="2024" className="w-full pl-12 pr-4 py-5 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#1A758D]/20 focus:border-[#1A758D] outline-none font-bold text-lg shadow-sm" />
                      </div>
                    </div>
                  </div>
                  <button onClick={handleNextStep} className="immo-btn-green btn btn-lg w-full py-6 rounded-2xl font-black uppercase tracking-wider shadow-2xl hover-lift text-lg">
                    Weiter zum nächsten Schritt
                  </button>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1C2431]">Details zum Gebäude</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Ursprüngliches Baujahr</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m4 0h1m-5 4h1m4 0h1m-5 4h1m4 0h1" /></svg>
                        </span>
                        <input type="text" placeholder="1975" className="w-full pl-12 pr-4 py-5 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#1A758D]/20 focus:border-[#1A758D] outline-none font-bold text-lg shadow-sm" />
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Wohn- und Nutzfläche (m²)</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">
                           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                        </span>
                        <input type="text" placeholder="160" className="w-full pl-12 pr-4 py-5 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#1A758D]/20 focus:border-[#1A758D] outline-none font-bold text-lg shadow-sm" />
                      </div>
                    </div>
                  </div>
                  <button onClick={handleNextStep} className="immo-btn-green btn btn-lg w-full py-6 rounded-2xl font-black uppercase tracking-wider shadow-2xl hover-lift text-lg">
                    Fast geschafft!
                  </button>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-10 text-center animate-fade-in">
                  <div className="w-24 h-24 bg-[#00B32E]/10 text-[#00B32E] rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-[#1C2431] immo-source-sans">Analyse bereit!</h3>
                  <p className="text-lg text-[#555555]">Wohin dürfen wir Ihre <span className="font-bold text-[#1C2431]">kostenlose Ersteinschätzung</span> senden?</p>
                  <div className="max-w-md mx-auto space-y-4 pt-4">
                    <input type="email" placeholder="E-Mail Adresse" className="w-full px-6 py-5 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#1A758D]/20 focus:border-[#1A758D] outline-none font-bold text-lg shadow-sm text-center" />
                    <button className="immo-btn-green btn btn-lg w-full py-6 rounded-2xl font-black uppercase tracking-wider shadow-2xl hover-lift text-lg">
                      Ergebnis jetzt anfordern
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
            {step > 1 && step < 4 ? (
              <button 
                onClick={handlePrevStep} 
                className="text-sm font-bold text-gray-400 hover:text-[#1A758D] transition-colors flex items-center gap-2 uppercase tracking-widest"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                Zurück
              </button>
            ) : <div className="hidden md:block w-20"></div>}

            <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-gray-300">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B32E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00B32E]"></span>
              </span>
              Datenschutzkonform & AES-256 Verschlüsselt
            </div>
            
            <div className="hidden md:block w-20"></div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 reveal-on-scroll delay-300">
        <img src="/images/original_clone/bvs_e_v_logo.jpeg" alt="BVS" className="h-8 md:h-10 grayscale" />
        <img src="/images/original_clone/NEU-Logo-DIAzert_7-09-300x228.jpg" alt="DIA Zert" className="h-8 md:h-10 grayscale" />
        <img src="/images/original_clone/REV-Siegel_2018-002.jpg" alt="REV Siegel" className="h-8 md:h-10 grayscale" />
        <img src="/images/original_clone/Stempel-DIAZert-2025.jpg" alt="DIA Zert Stempel" className="h-8 md:h-10 grayscale" />
      </div>
    </section>
  );
}
