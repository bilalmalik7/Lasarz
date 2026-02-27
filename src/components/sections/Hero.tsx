export function Hero() {
    return (
        <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Background elements */}
            <div style={{ position: 'absolute', top: '10%', left: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0, opacity: 0.5 }} />
            <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '800px' }}>
                    <div className="animate-fade-in" style={{
                        display: 'inline-block',
                        padding: '0.25rem 1rem',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--accent-primary)',
                        background: 'var(--accent-glow)',
                        color: 'var(--accent-primary)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        marginBottom: 'var(--space-sm)'
                    }}>
                        Zertifizierte Immobiliengutachter
                    </div>
                    <h1 className="text-gradient animate-fade-in delay-100" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: 'var(--space-sm)' }}>
                        Präzise Wertermittlung für Ihre Immobilien in Osnabrück.
                    </h1>
                    <p className="animate-fade-in delay-200" style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: 'var(--space-md)', maxWidth: '600px' }}>
                        Regionale Expertise, rechtssichere Gutachten und Festpreisgarantie. Wir schützen Sie vor Fehlentscheidungen beim Kauf, Verkauf oder in rechtlichen Angelegenheiten.
                    </p>
                    <div className="flex gap-sm animate-fade-in delay-300" style={{ marginBottom: 'var(--space-xl)' }}>
                        <a href="/#leistungen" className="btn btn-primary">Wertermittlung anfragen</a>
                        <a href="/kontakt" className="btn btn-secondary">Kostenlose Erstberatung</a>
                    </div>

                    <div className="animate-fade-in delay-300">
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem', fontWeight: 500 }}>
                            Zertifiziert und anerkannt durch:
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-md)', alignItems: 'center', justifyItems: 'center', marginTop: 'var(--space-md)', maxWidth: '600px' }}>
                            <img src="/images/bvs.jpeg" alt="BVS" style={{ width: '100%', height: '70px', objectFit: 'contain' }} />
                            <img src="/images/diazert.jpg" alt="DIA Zert" style={{ width: '100%', height: '70px', objectFit: 'contain' }} />
                            <img src="/images/rev.jpg" alt="REV Siegel" style={{ width: '100%', height: '70px', objectFit: 'contain' }} />
                            <img src="/images/stempel-diazert.jpg" alt="DIA Zert Stempel" style={{ width: '100%', height: '70px', objectFit: 'contain' }} />
                            <img src="/images/sv-r.jpg" alt="SV-R Zertifizierung" style={{ width: '100%', height: '70px', objectFit: 'contain' }} />
                            <img src="/logo.svg" alt="Lasarz" style={{ width: '100%', height: '70px', objectFit: 'contain' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
