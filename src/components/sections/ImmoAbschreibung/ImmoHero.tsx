'use client';
import { useReveal } from '@/hooks/useReveal';

export function ImmoHero() {
  const revealRef = useReveal();

  const propertyTypes = [
    { 
      id: 'etw', 
      label: 'Eigentumswohnung', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 md:w-10 md:h-10">
          <path d="M3 21h18M3 7v14M21 7v14M3 7l9-4 9 4M7 11h2M7 15h2M15 11h2M15 15h2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      id: 'mfh', 
      label: 'Mehrfamilienhaus', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 md:w-10 md:h-10">
          <path d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16M9 7h2M9 11h2M9 15h2M13 7h2M13 11h2M13 15h2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      id: 'wgh', 
      label: 'Wohn- & Geschäftshaus', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 md:w-10 md:h-10">
          <path d="M2 22h20M4 22V7l8-4 8 4v15M8 12h2M8 16h2M14 12h2M14 16h2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      id: 'efh', 
      label: 'Einfamilienhaus', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 md:w-10 md:h-10">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      id: 'gewerbe', 
      label: 'Gewerbeobjekt', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 md:w-10 md:h-10">
          <path d="M3 21h18M3 7v14M21 7v14M3 7l9-4 9 4M9 11h6M9 15h6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
  ];

  return (
    <section ref={revealRef} className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-48">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/team/marc_lasarz.jpg" 
          alt="Professional Real Estate Appraisal" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-start text-left max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-white shadow-lg border border-gray-100 reveal-on-scroll">
            <span className="text-[#1A758D] font-bold text-sm tracking-wide">
              ⭐ 4.8/5 Sterne - BVS & DIA zertifiziert
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight reveal-on-scroll text-balance text-[#1C2431] immo-source-sans">
            Vermieter optimieren Ihre AfA & <span className="text-[#1A758D]">Steuer sparen</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#555555] mb-12 max-w-2xl reveal-on-scroll delay-100 italic">
            "Mit einem zertifizierten <span className="font-bold text-[#1C2431]">Lasarz Gutachten</span> die Restnutzungsdauer Ihrer Immobilie rechtssicher verkürzen."
          </p>

          <div className="w-full max-w-5xl immo-glass rounded-[2rem] p-8 md:p-12 shadow-2xl reveal-on-scroll delay-200">
            <h3 className="text-xl md:text-2xl font-bold mb-10 text-[#1C2431] text-center">Welche Immobilienart soll optimiert werden?</h3>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              {propertyTypes.map((type) => (
                <a 
                  key={type.id}
                  href="#gutachten"
                  className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-white bg-white/40 hover:border-[#1A758D] hover:bg-white hover:shadow-xl transition-all group hover-lift"
                >
                  <div className="mb-4 text-[#1A758D] group-hover:scale-110 transition-transform">
                    {type.icon}
                  </div>
                  <span className="text-sm font-bold text-center text-[#1C2431] group-hover:text-[#1A758D] transition-colors leading-tight">{type.label}</span>
                </a>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/40">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00B32E]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold text-[#1C2431]">Seit 2017 Marktführer</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00B32E]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold text-[#1C2431]">Geld-zurück-Garantie</span>
                </div>
              </div>

              <a href="#gutachten" className="immo-btn-green btn btn-lg shadow-xl w-full md:w-auto px-12 py-6 rounded-2xl text-xl font-black uppercase tracking-wider">
                Jetzt Steuern sparen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
