import Link from 'next/link';

export function OriginalFeatures() {
    return (
        <section className="section" style={{ padding: '80px 0', backgroundColor: 'white' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

                    {/* Feature 1 */}
                    <div style={{ textAlign: 'center', padding: '1rem' }}>
                        <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src="/images/original_clone/Element-1resize22.svg" alt="Regionale Expertise" style={{ width: '40px', height: '40px' }} />
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Regionale Expertise</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                            Jahrelange Erfahrung in Osnabrück garantiert Ihnen eine verlässliche Wertermittlung.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div style={{ textAlign: 'center', padding: '1rem' }}>
                        <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '2rem', color: 'var(--accent-primary)' }}>⚖️</span>
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Gesetzeskonform</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                            Unsere Sachverständigen halten rechtliche Standards gewissenhaft ein.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div style={{ textAlign: 'center', padding: '1rem' }}>
                        <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '2rem', color: 'var(--accent-primary)' }}>🤝</span>
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Unabhängige Gutachter</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                            Unsere Sachverständigen halten den Ehrencodex von verschiedenen Verbänden.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div style={{ textAlign: 'center', padding: '1rem' }}>
                        <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '2rem', color: 'var(--accent-primary)' }}>🎖️</span>
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Zertifiziert</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                            Unsere Immobiliengutachter verfügen über verschiedene renommierte Zertifizierungen.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div style={{ textAlign: 'center', padding: '1rem' }}>
                        <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ fontSize: '2rem', color: 'var(--accent-primary)' }}>💰</span>
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Festpreisgarantie</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                            Den Wert von Immobilien in Osnabrück bewerten wir fair, transparent und ohne versteckte Kosten.
                        </p>
                    </div>

                </div>

                <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', borderLeft: '4px solid var(--accent-primary)' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>Immobilienbewertung Lasarz in Osnabrück</h2>
                    <p style={{ marginBottom: '1rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
                        Wir bieten Ihnen als zertifizierte Immobiliengutachter Immobilienbewertungen und Verkehrswertgutachten in Osnabrück und im norddeutschen Raum, sowie nahezu deutschlandweit an. Unsere Immobilien-Sachverständigen erstellen Ihnen sämtliche Gutachten und Bewertungen, wie zum Beispiel ein Verkehrswertgutachten, ein Gutachten zur Nutzungsdauer von Immobilien oder ein Gutachten im Rahmen einer Erbschaft oder Scheidung. Aber auch beim Immobilien- und Grundstückskauf liefern wir Ihnen mit unserer Ankaufberatung wertvolle Tipps für den Immobilienerwerb.
                    </p>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
                        Gerne können Sie uns erste Informationen über das Kontaktformular übermitteln, sodass wir bei der Kontaktaufnahme zielgenau auf Sie zukommen. Wir freuen uns auf Sie!
                    </p>
                    <Link href="/kontakt" className="btn btn-primary">Kontakt aufnehmen</Link>
                </div>
            </div>
        </section>
    );
}
