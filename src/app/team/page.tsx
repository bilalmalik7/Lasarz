
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

                        {/* Mark Lasarz Profile */}
                        <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                            <img src="/images/original_clone/portrait.jpg" alt="Marc-André Lasarz" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.75rem', color: 'var(--accent-secondary)', marginBottom: '0.2rem' }}>Marc-André Lasarz</h3>
                                <p style={{ color: 'var(--accent-primary)', fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Geschäftsführer & Dipl.-Sachverständiger (DIA)</p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                    Als Gründer und Inhaber stehe ich Ihnen mit umfassender Fachexpertise und über 19 Jahren Markterfahrung zur Seite. Meine Spezialisierung liegt in der Erstellung gerichtsfester Verkehrswertgutachten.
                                </p>
                                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                                    <a href="mailto:mLasarz@lasarz.com" style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>✉️ mLasarz@lasarz.com</a>
                                    <a href="tel:08006648714" style={{ display: 'block', color: 'var(--text-primary)' }}>📞 0800 / 66 48 714</a>
                                </div>
                            </div>
                        </div>

                        {/* Placeholder Team Member 1 */}
                        <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                            <div style={{ width: '100%', height: '350px', backgroundColor: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '4rem', color: 'var(--text-muted)' }}>👤</span>
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.75rem', color: 'var(--accent-secondary)', marginBottom: '0.2rem' }}>Team Mitglied</h3>
                                <p style={{ color: 'var(--accent-primary)', fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Immobiliengutachter (DIA)</p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                    Experte für die Bewertung von Wohnimmobilien und Renditeobjekten. Zertifiziert nach ISO 17024 mit jahrelanger Markterfahrung im norddeutschen Raum.
                                </p>
                                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                                    <a href="mailto:info@lasarz.com" style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>✉️ info@lasarz.com</a>
                                    <a href="tel:08006648714" style={{ display: 'block', color: 'var(--text-primary)' }}>📞 0800 / 66 48 714</a>
                                </div>
                            </div>
                        </div>

                        {/* Placeholder Team Member 2 */}
                        <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                            <div style={{ width: '100%', height: '350px', backgroundColor: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '4rem', color: 'var(--text-muted)' }}>👤</span>
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.75rem', color: 'var(--accent-secondary)', marginBottom: '0.2rem' }}>Assistenz der Geschäftsführung</h3>
                                <p style={{ color: 'var(--accent-primary)', fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem' }}>Backoffice & Kundenbetreuung</p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                    Erster Ansprechpartner für Terminierungen, Erstberatungen und die Einholung von relevanten Dokumenten bei Behörden und Bauämtern.
                                </p>
                                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                                    <a href="mailto:info@lasarz.com" style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>✉️ info@lasarz.com</a>
                                    <a href="tel:08006648714" style={{ display: 'block', color: 'var(--text-primary)' }}>📞 0800 / 66 48 714</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
