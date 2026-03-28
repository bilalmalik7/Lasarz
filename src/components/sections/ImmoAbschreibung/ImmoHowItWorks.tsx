'use client';
import { useReveal } from '@/hooks/useReveal';

export function ImmoHowItWorks() {
  const revealRef = useReveal();

  const steps = [
    {
      title: "Online-Rechner nutzen",
      description: "Geben Sie Ihre Objektdaten in unseren Rechner ein und erhalten Sie eine sofortige, kostenlose Ersteinschätzung.",
      image: "/images/immo/step1.png"
    },
    {
      title: "Gutachten beauftragen",
      description: "Wenn das Sparpotenzial Sie überzeugt, beauftragen Sie unser zertifiziertes Sachverständigenteam mit dem Gutachten.",
      image: "/images/team/immobilien_men.png"
    },
    {
      title: "Zertifizierte Erstellung",
      description: "Unsere ISO 17024 zertifizierten Gutachter erstellen Ihr rechtssicheres Gutachten nach BMF-Standard.",
      image: "/images/immo/step3.jpg"
    },
    {
      title: "Steuern sparen",
      description: "Reichen Sie das Gutachten beim Finanzamt ein und profitieren Sie von der höheren Abschreibung.",
      image: "/images/immo/step4.jpg"
    }
  ];

  return (
    <section ref={revealRef} className="section bg-white overflow-hidden py-32">
      <div className="container">
        <div className="text-center mb-24 reveal-on-scroll">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#1C2431]">
            In 4 Schritten zur <span className="text-[#1A758D]">Steuerersparnis</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#1A758D] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col lg:items-center gap-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              <div className="flex-1 lg:max-w-lg reveal-on-scroll">
                <div className="flex items-center gap-6 mb-8">
                  <span className="text-7xl font-black text-[#F5F2EA] leading-none select-none">{`0${index + 1}`}</span>
                  <h3 className="text-2xl font-bold text-[#1C2431]">{step.title}</h3>
                </div>
                <p className="text-lg text-[#555555] leading-relaxed mb-10">
                  {step.description}
                </p>
                <a href="#gutachten" className="group inline-flex items-center gap-3 font-bold text-[#00B32E] transition-all hover:gap-5">
                  Jetzt Sparpotenzial prüfen 
                  <span className="text-2xl">→</span>
                </a>
              </div>
              
              <div className="flex-1 relative reveal-on-scroll delay-200">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 border-8 border-white">
                  <img src={step.image} alt={step.title} className="w-full aspect-[16/10] object-cover hover:scale-105 transition-transform duration-1000" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
