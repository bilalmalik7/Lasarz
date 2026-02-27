
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

            {/* Marc & Markus Parallax Section */}
            <section style={{
                position: 'relative',
                padding: '100px 0px',
                backgroundImage: 'url("/images/original_clone/HASELAND_11-1024x690.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundAttachment: 'fixed',
                marginTop: '2rem'
            }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(18, 43, 64, 0.7)' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                        <div style={{ background: 'white', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                            <img src="/images/team/lasarz_markus.png" alt="Marc-André Lasarz & Markus Marc" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                        </div>
                        <div style={{ color: 'white' }}>
                            <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Marc & Markus</h2>
                            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', lineHeight: 1.6 }}>
                                Die Köpfe hinter Lasarz Immobilienbewertung. Gemeinsam bündeln wir über 25 Jahre Expertise in der Bewertung und Vermarktung von anspruchsvollen Immobilien.
                            </p>
                            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                <a href="mailto:info@lasarz.com" className="btn btn-primary" style={{ background: 'var(--accent-primary)', border: 'none' }}>✉️ Nachricht senden</a>
                                <a href="tel:+4954160099220" className="btn btn-secondary" style={{ color: 'white', borderColor: 'white' }}>📞 0541 / 600 99 220</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                        {/* Bilal (IT) */}
                        <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                            <img src="/images/team/bilal_new.jpg" alt="Bilal" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
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
