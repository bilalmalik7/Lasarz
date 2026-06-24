
export const metadata = {
    title: 'Team | Immobilienbewertung Lasarz',
    description: 'Erfahren Sie mehr über Marc-André Lasarz. Ihr kompetenter und unabhängiger Sachverständiger für Immobilienbewertung.',
};

export default function TeamPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '80vh' }}>

            {/* Banner Section */}
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Unser Team</h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '800px' }}>
                        Zertifizierte Expertise, fundierte Branchenkenntnisse und absolute Diskretion. Wir sind Ihr vertrauensvoller Partner in allen Immobilienbelangen.
                    </p>
                </div>
            </section>

            {/* Marc-André Lasarz Section */}
            <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '5rem', alignItems: 'center' }}>
                        <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                            <img src="/images/team/marc_lasarz.jpg" alt="Marc-André Lasarz - Immobiliengutachter Osnabrück" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
                        </div>
                        <div>
                            <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Inhaber & Sachverständiger</span>
                            <h2 style={{ fontSize: '3rem', color: 'var(--accent-secondary)', marginTop: '1rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                                Marc-André Lasarz
                            </h2>
                            <div style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <p>
                                    Mit über 25 Jahren Erfahrung in der Immobilienwirtschaft und einer tiefen Verwurzelung in der Region Osnabrück stehe ich für fachliche Exzellenz und absolute Unabhängigkeit.
                                </p>
                                <p>
                                    Als <strong>zertifizierter Immobiliengutachter</strong> habe ich mich darauf spezialisiert, komplexe Wertermittlungen transparent, und für alle Beteiligten nachvollziehbar zu gestalten. Ob für private Verkaufsentscheidungen, gerichtliche Auseinandersetzungen oder steuerliche Zwecke – ich biete Ihnen die notwendige Klarheit für Ihre Immobilienentscheidungen.
                                </p>
                                <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div className="glass-card" style={{ padding: '1.5rem' }}>
                                        <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Zertifizierung</h4>
                                        <p style={{ fontSize: '0.95rem' }}>Zertifiziert nach DIN EN ISO/IEC 17024 (DIAZert)</p>
                                    </div>
                                    <div className="glass-card" style={{ padding: '1.5rem' }}>
                                        <h4 style={{ color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Expertise</h4>
                                        <p style={{ fontSize: '0.95rem' }}>Spezialist für komplexe Verkehrs- und Beleihungswertermittlungen</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                                    <a href="mailto:info@lasarz.com" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>✉️ Kontakt aufnehmen</a>
                                    <a href="tel:+4954160099220" className="btn btn-secondary" style={{ padding: '1rem 2.5rem' }}>📞 0541 / 600 99 220</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
