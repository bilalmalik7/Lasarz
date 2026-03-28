'use client';
import { useReveal } from '@/hooks/useReveal';

export function ImmoTestimonials() {
  const revealRef = useReveal();

  const reviews = [
    {
      name: "Adrian Skwierawski",
      role: "Immobilieninvestor",
      text: "Dank dem Gutachten von Lasarz spare ich mit meinem Mehrfamilienhaus jetzt ca. 15.000 € pro Jahr. Der Prozess war erstaunlich einfach und professionell.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Dennis Ulrich",
      role: "Eigentumswohnung",
      text: "Die fachkundige Unterstützung war hervorragend. Mein Steuerberater hat das Gutachten direkt für die Steuererklärung akzeptiert. Absolut empfehlenswert!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Stella Storck",
      role: "Vermieterin",
      text: "Das Begleitschreiben vom Experten gibt zusätzliche Sicherheit. Wer seine AfA optimieren will, kommt an diesem Service nicht vorbei. 5 Sterne!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section ref={revealRef} className="section bg-[#F5F2EA]/40 py-32">
      <div className="container">
        <div className="text-center mb-20 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white shadow-sm border border-gray-100 italic">
            <span className="text-[#1A758D] font-bold">4.9/5</span>
            <div className="flex text-[#1A758D] text-[10px]">
              {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
            </div>
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">ProvenExpert</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-[#1C2431] immo-source-sans">
            Das sagen unsere <span className="text-[#1A758D]">zufriedenen Kunden</span>
          </h2>
          <p className="text-xl text-[#555555] max-w-2xl mx-auto italic">
            "Über 167.000 erfolgreich geprüfte Immobilien und die Marktführerschaft seit 2017 sprechen für sich."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="immo-card-premium p-10 flex flex-col hover-lift reveal-on-scroll" style={{ transitionDelay: `${(index + 1) * 100}ms` }}>
              <div className="flex items-center gap-4 mb-10">
                <div className="relative">
                  <img src={review.image} alt={review.name} className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md" />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#00B32E] rounded-full flex items-center justify-center border-2 border-white">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-[#1C2431] leading-tight">{review.name}</h3>
                  <p className="text-xs font-black uppercase tracking-widest text-[#1A758D] mt-1">{review.role}</p>
                </div>
              </div>
              <p className="text-[#555555] leading-relaxed text-lg mb-10 flex-grow">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between pt-8 border-t border-gray-50 mt-auto">
                 <div className="flex gap-1 text-[#1A758D]">
                  {[1, 2, 3, 4, 5].map(s => (
                    <span key={s} className="text-lg">★</span>
                  ))}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">Verifizierter Kauf</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center reveal-on-scroll delay-300">
          <a href="#gutachten" className="immo-btn-green btn btn-lg px-12 py-6 rounded-2xl text-xl font-black uppercase tracking-wider shadow-2xl hover-lift">
            Jetzt eigene Ersparnis prüfen
          </a>
        </div>
      </div>
    </section>
  );
}
