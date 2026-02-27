
export const metadata = {
    title: 'Team | Immobilienbewertung Lasarz',
    description: 'Lernen Sie das Team hinter Immobilienbewertung Lasarz kennen. Unsere Sachverständigen beraten Sie kompetent und unabhängig.',
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

            {/* Team Grid */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                        {/* Markus & Lasarz Combined (Principals) */}
                        <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                            <img src="/images/team/lasarz_markus.png" alt="Marc-André Lasarz & Markus Marc" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.75rem', color: 'var(--accent-secondary)', marginBottom: '0.2rem' }}>Marc & Markus</h3>
                                <p style={{ color: 'var(--accent-primary)', fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Geschäftsführung & Projektleitung</p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                    Gemeinsam leiten Marc-André Lasarz und Markus Marc die strategische Ausrichtung und Qualitätssicherung unserer Gutachten.
                                </p>
                                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                                    <a href="mailto:info@lasarz.com" style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>✉️ mLasarz@lasarz.com</a>
                                    <a href="tel:+4954160099220" style={{ display: 'block', color: 'var(--text-primary)' }}>📞 +49 (0) 541 - 600 99 220</a>
                                </div>
                            </div>
                        </div>

                        {/* Bilal (IT) */}
                        <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                            <img src="/images/team/bilal_it.png" alt="Bilal" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.75rem', color: 'var(--accent-secondary)', marginBottom: '0.2rem' }}>Bilal</h3>
                                <p style={{ color: 'var(--accent-primary)', fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem' }}>IT-Leiter & Digitalisierung</p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                    Bilal verantwortet unsere technische Infrastruktur und sorgt für die effiziente, digitale Abwicklung Ihrer Immobilienbewertungen.
                                </p>
                                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                                    <a href="mailto:it@lasarz.com" style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>✉️ it@lasarz.com</a>
                                    <a href="tel:+4954160099220" style={{ display: 'block', color: 'var(--text-primary)' }}>📞 +49 (0) 541 - 600 99 220</a>
                                </div>
                            </div>
                        </div>

                        {/* Immobilien Consultant Women */}
                        <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                            <img src="/images/team/immobilien_women.png" alt="Anna Schmidt" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.75rem', color: 'var(--accent-secondary)', marginBottom: '0.2rem' }}>Anna Schmidt</h3>
                                <p style={{ color: 'var(--accent-primary)', fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Immobiliengutachterin (DIA)</p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                    Spezialistin für Marktwertermittlungen im Privatkundenbereich mit Fokus auf Osnabrück und Umgebung.
                                </p>
                                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                                    <a href="mailto:info@lasarz.com" style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>✉️ schmidt@lasarz.com</a>
                                    <a href="tel:+4954160099220" style={{ display: 'block', color: 'var(--text-primary)' }}>📞 +49 (0) 541 - 600 99 220</a>
                                </div>
                            </div>
                        </div>

                        {/* Immobilien Consultant Men */}
                        <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                            <img src="/images/team/immobilien_men.png" alt="Christian Weber" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.75rem', color: 'var(--accent-secondary)', marginBottom: '0.2rem' }}>Christian Weber</h3>
                                <p style={{ color: 'var(--accent-primary)', fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Gutachter für Gewerbeimmobilien</p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                    Experte für Industrie- und Gewerbebewertungen mit langjähriger Erfahrung in der Bewertung komplexer Portfolios.
                                </p>
                                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                                    <a href="mailto:info@lasarz.com" style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>✉️ weber@lasarz.com</a>
                                    <a href="tel:+4954160099220" style={{ display: 'block', color: 'var(--text-primary)' }}>📞 +49 (0) 541 - 600 99 220</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
