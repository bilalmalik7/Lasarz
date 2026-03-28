'use client';

const benefits = [
  {
    title: "Höhere Abschreibung",
    description: "Durch die Verkürzung der Lasarz erhöht sich dein jährlicher Abschreibungssatz signifikant.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Steuerersparnis",
    description: "Weniger zu versteuerndes Einkommen bedeutet eine direkte Reduktion deiner Steuerlast beim Finanzamt.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Liquiditätsvorteil",
    description: "Das gesparte Geld bleibt in deinem Portfolio und kann für weitere Investitionen genutzt werden.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Rechtssicherheit",
    description: "Unsere Gutachten basieren auf der aktuellen Rechtsprechung des BFH und sind nach DIN EN ISO/IEC 17024 erstellt.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export function ImmoBenefits() {
  return (
    <section id="vorteile" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--accent-secondary)' }}>
            Deine Vorteile mit einem Restnutzungsdauergutachten
          </h2>
          <p className="text-secondary max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Warum sich die Investition in ein professionelles Gutachten für dich als Vermieter oder Investor innerhalb kürzester Zeit auszahlt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`glass-card flex flex-col items-center text-center p-8 hover:translate-y-[-8px] transition-all duration-300 animate-reveal delay-${(index + 1) * 100}`}
            >
              <div className="w-16 h-16 bg-accent-glow rounded-2xl flex items-center justify-center text-accent-primary mb-6" style={{ backgroundColor: 'var(--accent-glow)', color: 'var(--accent-primary)' }}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--accent-secondary)' }}>{benefit.title}</h3>
              <p className="text-sm text-secondary leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
