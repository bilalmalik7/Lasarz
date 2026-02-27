import Link from 'next/link';

export const metadata = {
    title: 'Sonderimmobilien | Lasarz Immobilienbewertung',
    description: 'Spezialbewertungen für Sonderimmobilien: Hotels, Pflegeheime, Tankstellen und Industrieanlagen.',
};

export default function SonderimmobilienPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '80vh' }}>
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <span className="text-accent" style={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.875rem' }}>Spezialimmobilien</span>
                    <h1 style={{ fontSize: '3rem', color: 'var(--accent-secondary)', marginTop: '0.5rem', marginBottom: '1rem' }}>Sonderimmobilien</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px' }}>
                        Individuelle Konzepte für Immobilien mit spezieller Nutzung und eingeschränkter Drittverwendungsfähigkeit.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h2 className="text-center" style={{ marginBottom: '2.5rem' }}>Was sind Sonderimmobilien?</h2>
                        <p style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.1rem' }}>
                            Sonderimmobilien zeichnen sich durch eine spezifische, oft festgeschriebene Nutzung aus. Eine Bewertung erfordert hier tiefgehendes Know-how über die jeweilige Branche und die speziellen Marktzyklen.
                        </p>

                        <div className="grid grid-cols-2 sm-grid-cols-1 gap-md">
                            <div className="glass-card">
                                <h3>🏥 Sozial- & Gesundheitsimmobilien</h3>
                                <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>Pflegeheime, Kliniken und Ärztehäuser benötigen spezialisierte Betreiberanalysen.</p>
                            </div>
                            <div className="glass-card">
                                <h3>🏨 Beherbergung</h3>
                                <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>Hotels und gastronomische Betriebe (Pachtwert- und Umsatzanalysen).</p>
                            </div>
                            <div className="glass-card">
                                <h3>⛽ Infrastruktur</h3>
                                <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>Tankstellen, Autowaschanlagen und Logistik-Terminals.</p>
                            </div>
                            <div className="glass-card">
                                <h3>🎡 Freizeit & Sport</h3>
                                <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>Fitnesscenter, Reitanlagen und Freizeiteinrichtungen.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container">
                    <div className="glass-card animate-reveal" style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--accent-secondary)', color: 'white' }}>
                        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Kompetenz für Spezialfälle</h2>
                        <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
                            Haben Sie ein Objekt, das in kein Schema passt? Gerade hier zeigt sich die Qualität eines Sachverständigenbüros. Kontaktieren Sie uns für eine unverbindliche Ersteinschätzung.
                        </p>
                        <Link href="/kontakt" className="btn btn-primary" style={{ background: 'white', color: 'var(--accent-secondary)' }}>Anfrage senden</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
