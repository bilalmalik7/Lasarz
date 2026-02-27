import Link from 'next/link';

export default function SchimmelgutachtenPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Leistungen</span>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--accent-secondary)', lineHeight: 1.2, marginTop: '1rem' }}>🧫 Schimmelgutachten</h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '700px' }}>Professionelle Schimmel- und Feuchtigkeitsgutachten in Osnabrück und Hannover durch zertifizierte Sachverständige.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem', alignItems: 'start' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Schimmel- und Feuchtigkeitsprobleme professionell begutachtet</h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Schimmel in Immobilien ist nicht nur optisch störend, sondern kann erhebliche Gesundheitsrisiken bergen und den Immobilienwert stark mindern. Ein professionelles Schimmelgutachten klärt die Ursache, das Ausmaß und die notwendigen Sanierungsmaßnahmen.
                            </p>
                            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                                Unsere Bauschadenbewerter (DIA) erstellen gerichtsverwertbare Gutachten und helfen dabei, Streitigkeiten zwischen Mietern und Vermietern zu klären.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {['Ursachenanalyse (Baumangel vs. Nutzerfehler)', 'Schadensausmaß und Dokumentation', 'Empfehlung von Sanierungsmaßnahmen', 'Kostenermittlung für die Beseitigung', 'Gerichtsverwertbares Gutachten', 'Klärung von Mieter-Vermieter-Streitigkeiten'].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                        <span style={{ color: 'var(--accent-primary)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                                        <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', padding: '2.5rem', borderLeft: '4px solid var(--accent-primary)' }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>Schimmelgutachten anfragen</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7 }}>Wir begutachten kurzfristig – auch am Wochenende.</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <Link href="/kontakt" className="btn btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>Kostenlose Erstberatung</Link>
                                <a href="tel:+4954160099220" className="btn btn-secondary" style={{ textAlign: 'center', justifyContent: 'center' }}>📞 +49 (0) 541 - 600 99 220</a>
                            </div>
                            <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '8px' }}>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>📍 Katharinenstraße 111, 49078 Osnabrück<br />✉️ osnabrueck@lasarz.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', backgroundColor: 'var(--accent-secondary)', color: '#fff', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>Schimmel in Ihrer Immobilie?</h2>
                    <p style={{ opacity: 0.85, marginBottom: '2rem', fontSize: '1.1rem' }}>Klärung durch unabhängige Sachverständige.</p>
                    <Link href="/kontakt" className="btn" style={{ backgroundColor: 'var(--accent-primary)', color: '#fff', padding: '1rem 2.5rem' }}>Jetzt Kontakt aufnehmen</Link>
                </div>
            </section>
        </main>
    );
}
