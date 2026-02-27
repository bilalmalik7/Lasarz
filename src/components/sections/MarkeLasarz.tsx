import Link from 'next/link';

export function MarkeLasarz() {
    return (
        <section className="section bg-secondary">
            <div className="container">
                <div className="grid md-grid-cols-2 gap-xl" style={{ alignItems: 'center' }}>

                    <div className="animate-fade-in">
                        <div style={{ display: 'inline-block', padding: '0.25rem 1rem', borderRadius: 'var(--radius-full)', background: 'var(--accent-glow)', color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>
                            Die Marke Lasarz
                        </div>
                        <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>
                            Marc-André Lasarz – Ihre Experten für Immobilien.
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: 'var(--space-md)' }}>
                            Als umsetzungsstarker Immobilienvertreter und Geschäftsführer mit über 19 Jahren Fach- und Führungserfahrung in den Bereichen Vertrieb und Marketing in der Immobilienbranche verfüge ich über ausgeprägte Kompetenzen für die durchdachte Planung und Umsetzung von Projekten.
                        </p>

                        <div className="flex gap-sm" style={{ marginTop: 'var(--space-lg)' }}>
                            <Link href="/ueber-uns" className="btn btn-primary">Mehr über uns erfahren</Link>
                        </div>
                    </div>

                    <div className="animate-fade-in delay-200" style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }} />
                        <img src="/images/portrait.jpg" alt="Marc-André Lasarz" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', position: 'relative', zIndex: 1 }} />
                    </div>

                </div>
            </div>
        </section>
    );
}
