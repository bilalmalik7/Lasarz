'use client';
import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';

const faqs = [
  {
    question: "Was genau ist ein Restnutzungsdauergutachten?",
    answer: "Ein Restnutzungsdauergutachten weist nach, dass die tatsächliche wirtschaftliche Lasarz einer Immobilie kürzer ist als die vom Gesetzgeber pauschal angenommenen 33, 40 oder 50 Jahre. Dadurch kannst du den jährlichen Abschreibungssatz (AfA) deutlich erhöhen."
  },
  {
    question: "Ist das Gutachten rechtssicher?",
    answer: "Ja, unsere Gutachten werden von nach DIN EN ISO/IEC 17024 zertifizierten Sachverständigen erstellt. Diese Zertifizierung wird von der Finanzverwaltung als Nachweis fachlicher Kompetenz anerkannt, wie auch im BMF-Schreiben vom 22.02.2023 bestätigt."
  },
  {
    question: "Wieviel Steuern kann ich realistisch sparen?",
    answer: "Das hängt vom Einzelfall ab. Bei einer Verkürzung der Lasarz von 50 auf 25 Jahre verdoppelt sich deine jährliche Abschreibung. Erfahrene Anleger sparen so oft mehrere tausend Euro pro Jahr und Objekt."
  },
  {
    question: "Muss für das Gutachten eine Besichtigung stattfinden?",
    answer: "Wir empfehlen dringend eine Ortsbesichtigung. Dies erhöht die Beweiskraft des Gutachtens gegenüber dem Finanzamt erheblich und stellt sicher, dass alle wertbeeinflussenden Faktoren (Modernisierungsstau, Feuchtigkeit etc.) korrekt erfasst werden."
  }
];

export function ImmoFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const revealRef = useReveal();

  return (
    <section ref={revealRef} className="section bg-white py-32 overflow-hidden border-t border-gray-50">
      <div className="container max-w-4xl">
        <div className="text-center mb-20 reveal-on-scroll">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-gray-100 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            Häufige Fragen
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#1C2431] immo-source-sans">
            Wissenswertes zur <span className="text-[#1A758D]">Lasarz</span>
          </h2>
          <p className="text-xl text-[#555555] max-w-2xl mx-auto italic">
            "Alles rund um das Thema Restnutzungsdauer und Ihre steuerlichen Vorteile."
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`transition-all duration-500 reveal-on-scroll ${openIndex === index ? 'shadow-2xl' : 'hover:shadow-lg'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`rounded-[2rem] border overflow-hidden transition-all duration-500 ${openIndex === index ? 'bg-[#FAF9F6] border-[#1A758D]/20' : 'bg-white border-gray-100'}`}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-8 md:px-12 md:py-10 flex justify-between items-center text-left group"
                >
                  <span className={`text-xl md:text-2xl font-bold transition-colors ${openIndex === index ? 'text-[#1A758D]' : 'text-[#1C2431] group-hover:text-[#1A758D]'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${openIndex === index ? 'bg-[#1A758D] border-[#1A758D] text-white rotate-180' : 'border-gray-100 text-gray-400 group-hover:border-[#1A758D] group-hover:text-[#1A758D]'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-8 pb-10 md:px-12 md:pb-12 text-[#555555] leading-relaxed text-lg md:text-xl border-t border-gray-50 pt-8 italic">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-[#1A758D]/5 rounded-[3rem] border border-[#1A758D]/10 flex flex-col md:flex-row items-center justify-between gap-8 reveal-on-scroll delay-300">
          <div className="text-left">
            <h4 className="text-2xl font-bold text-[#1C2431] mb-2">Noch Fragen offen?</h4>
            <p className="text-[#555555]">Kontaktieren Sie unsere Experten für eine kostenlose Beratung.</p>
          </div>
          <a href="#gutachten" className="immo-btn-green btn btn-lg px-8 py-5 rounded-2xl text-lg font-black uppercase tracking-wider shadow-xl hover-lift">
            Kostenlose Beratung
          </a>
        </div>
      </div>
    </section>
  );
}
