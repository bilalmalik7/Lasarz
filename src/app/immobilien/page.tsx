import Link from 'next/link';

export const metadata = {
    title: 'Immobilien | Immobilienbewertung Lasarz',
    description: 'Entdecken Sie unsere aktuellen Kauf- und Mietangebote aus der Region.',
};

export default function ImmobilienPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '80vh' }}>

            {/* Banner Section */}
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Immobilien</h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '800px' }}>
                        Hier finden Sie einen Überblick über unsere aktuell vermittelten Objekte sowie exklusive Off-Market Angebote.
                    </p>
                </div>
            </section>

            {/* Search Simulation Section */}
            <section className="section" style={{ padding: '40px 0' }}>
                <div className="container">
                    <div className="glass-card" style={{ padding: '2rem', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', backgroundColor: 'var(--bg-tertiary)' }}>
                        <div style={{ flex: 1, minWidth: '200px' }}>
                            <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Objekttyp</label>
                            <select className="form-input" style={{ width: '100%', padding: '0.6rem' }}>
                                <option>Alle Objekttypen</option>
                                <option>Einfamilienhaus</option>
                                <option>Wohnung</option>
                                <option>Grundstück</option>
                                <option>Gewerbe</option>
                            </select>
                        </div>
                        <div style={{ flex: 1, minWidth: '200px' }}>
                            <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Standort</label>
                            <input type="text" placeholder="PLZ oder Stadt" className="form-input" style={{ width: '100%', padding: '0.6rem' }} />
                        </div>
                        <button className="btn btn-primary" style={{ height: '44px', marginTop: '1.2rem', padding: '0 2rem' }}>Suchen</button>
                    </div>
                </div>
            </section>

            {/* Placeholder Content Section */}
            <section className="section">
                <div className="container text-center" style={{ padding: '40px 0' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏛️</div>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>Exklusive Immobilien in Osnabrück</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
                        Ob diskrete Vermarktung unter der Hand oder präsente Marktführung – wir finden den passenden Käufer für Ihre Immobilie oder das neue Zuhause für Sie. Aktuell befinden sich viele unserer Objekte in der diskreten Vermarktung (Off-Market).
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/kontakt" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Suchauftrag anlegen</Link>
                        <Link href="/#bewertung" className="btn btn-secondary" style={{ padding: '1rem 2rem' }}>Kostenlose Bewertung</Link>
                    </div>
                </div>
            </section>

            {/* Highlight Section */}
            <section style={{ backgroundColor: 'rgba(26, 117, 141, 0.05)', padding: '80px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Suchen Sie Ihre Traumimmobilie?</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                Teilen Sie uns Ihre Wünsche mit. Durch unser starkes Netzwerk in der Region und viele Off-Market Objekte finden wir häufig Immobilien, bevor diese offiziell am Markt erscheinen.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}><span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>✓</span> Exklusiver Zugang zu Off-Market Immobilien</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}><span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>✓</span> Regionales Netzwerk in Norddeutschland</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem', color: 'var(--text-primary)' }}><span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>✓</span> Fundierte Beratung und Bewertung inklusive</li>
                            </ul>
                        </div>
                        {/* Placeholder image representation */}
                        <div style={{ height: '100%', minHeight: '300px', backgroundColor: 'var(--border-color)', borderRadius: '8px', backgroundImage: 'url(/images/original_clone/MG_1880-1024x690.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    </div>
                </div>
            </section>

        </main>
    );
}
