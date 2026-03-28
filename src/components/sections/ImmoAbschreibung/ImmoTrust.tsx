'use client';
import { useReveal } from '@/hooks/useReveal';

export function ImmoTrust() {
  const revealRef = useReveal();

  return (
    <section ref={revealRef} className="section bg-white py-32 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="reveal-on-scroll">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#00B32E]/10 border border-[#00B32E]/20">
              <span className="text-[#00B32E] font-bold text-xs uppercase tracking-widest">Marktführer seit 2017</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-[1.2] text-[#1C2431] immo-source-sans">
              Deutschlands <span className="text-[#1A758D]">Marktführer</span> für Gutachten zur Restnutzungsdauer
            </h2>
            <p className="text-xl text-[#555555] mb-12 leading-relaxed">
              Nutzen Sie die Expertise des Pioniers. Unsere Gutachten werden von <span className="font-bold text-[#1C2431]">DIA-zertifizierten Sachverständigen</span> erstellt und sind bundesweit bei Finanzämtern anerkannt.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "ISO 17024 zertifiziert",
                  desc: "Zertifizierte Sachverständige für höchste Akzeptanz.",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
                  color: "#1A758D"
                },
                {
                  title: "100% Geld-zurück",
                  desc: "Kein Erfolg? Keine Kosten. Unsere Garantie.",
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                  color: "#00B32E"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start reveal-on-scroll" style={{ transitionDelay: `${(idx + 1) * 100}ms` }}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: item.color }}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C2431] mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 border-2 border-dashed border-gray-100 rounded-[2rem] bg-gray-50/30 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Expert" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-[#1C2431]">Zusammenschluss von über 250+ Gutachtern</p>
                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-[#1A758D] text-xs">★</span>)}
                  <span className="text-[10px] font-bold text-gray-400 ml-2 uppercase tracking-widest">Exzellent</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative reveal-on-scroll delay-300">
            {/* Expert Card Inspired by Reference */}
            <div className="immo-card-premium p-1 md:p-2 bg-[#FAF9F6]">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5]">
                <img 
                  src="/images/team/marc_lasarz.jpg" 
                  alt="Expert Real Estate Appraiser" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-[#1C2431] via-[#1C2431]/60 to-transparent text-white">
                  <h4 className="text-2xl font-bold mb-1">Marc-André Lasarz</h4>
                  <p className="text-gray-300 text-sm mb-4">DIA-zertifizierter Sachverständiger (ZIS)</p>
                  <div className="flex items-center gap-4 py-4 border-t border-white/20">
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-[#1A758D]">Erfahrung</p>
                      <p className="text-lg font-bold">15+ Jahre</p>
                    </div>
                    <div className="w-px h-10 bg-white/20"></div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-[#1A758D]">Zertifikat</p>
                      <p className="text-lg font-bold">DIN EN ISO 17024</p>
                    </div>
                  </div>
                </div>
                
                {/* Badge Overlay */}
                <div className="absolute top-6 right-6 w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center shadow-2xl p-4 text-center">
                  <span className="text-xs font-black text-[#1C2431] leading-none mb-1">SEIT</span>
                  <span className="text-2xl font-black text-[#1A758D] leading-none">2017</span>
                  <span className="text-[8px] font-bold text-gray-400 mt-1 uppercase">Marktführer</span>
                </div>
              </div>
            </div>

            {/* Float Element */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 hidden md:block animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#00B32E]/10 rounded-full flex items-center justify-center text-[#00B32E]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" /></svg>
                </div>
                <div>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Anerkennungsquote</p>
                  <p className="text-xl font-bold text-[#1C2431]">98.2% Erfolgsquote</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
