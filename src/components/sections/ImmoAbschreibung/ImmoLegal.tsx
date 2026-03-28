'use client';
import { useReveal } from '@/hooks/useReveal';

export function ImmoLegal() {
  const revealRef = useReveal();

  return (
    <section id="rechtslage" ref={revealRef} className="section bg-white border-t border-gray-100 overflow-hidden py-32">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
            <div className="flex-1 reveal-on-scroll">
              <span className="text-[#1A758D] font-black uppercase tracking-widest text-xs block mb-4">Höchstrichterlich bestätigt</span>
              <h2 className="text-3xl md:text-5xl font-black mb-8 text-[#1C2431]">Die Rechtslage</h2>
              <p className="text-lg text-[#555555] leading-relaxed mb-8 font-medium">
                Der <span className="text-[#1C2431] font-bold">Bundesfinanzhof (BFH)</span> hat mit seinem Urteil vom 28. Juli 2021 (IX R 25/19) endgültig bestätigt: Steuerpflichtige dürfen eine kürzere Lasarz mit jeder geeigneten Methode nachweisen.
              </p>
              <div className="p-8 bg-[#F5F2EA] rounded-[2.5rem] border-l-8 border-[#1A758D] italic text-[#1C2431] leading-relaxed text-lg font-bold shadow-sm">
                "Die Schätzung eines qualifizierten Sachverständigen ist grundsätzlich ein geeigneter Nachweis zur Erlangung einer höheren AfA."
              </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-80 reveal-on-scroll delay-200">
              <div className="p-16 bg-white rounded-[4rem] text-center border-4 border-[#00B32E] shadow-2xl relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00B32E] text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                  Anerkannt
                </div>
                <span className="block text-6xl font-black mb-4 text-[#1C2431]">BFH</span>
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-400 leading-relaxed">Höchste<br />Rechtssicherheit</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Urteil des Bundesfinanzhofs",
                text: "Keine Beschränkung auf bestimmte Nachweismethoden – Sachverständigengutachten sind die primäre Wahl für Eigentümer."
              },
              {
                title: "BMF-Schreiben (Februar 2023)",
                text: "Nach dem BMF-Schreiben vom 22.02.2023 gelten klare Kriterien: Zertifizierte Gutachter sind der Schlüssel zur Akzeptanz."
              }
            ].map((box, idx) => (
              <div key={idx} className="p-12 bg-[#F5F2EA]/50 rounded-[3rem] border border-gray-100 hover:border-[#1A758D]/30 transition-all hover:shadow-xl reveal-on-scroll" style={{ transitionDelay: `${(idx + 1) * 150}ms` }}>
                <h3 className="font-bold text-xl mb-4 text-[#1C2431]">{box.title}</h3>
                <p className="text-base text-[#555555] leading-relaxed font-medium">
                  {box.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
