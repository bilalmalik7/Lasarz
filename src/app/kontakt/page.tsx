import { Contact } from '@/components/sections/Contact';

export const metadata = {
    title: 'Kontakt | Immobilienbewertung Lasarz',
    description: 'Kontaktieren Sie uns für eine kostenlose Erstberatung zur Immobilienbewertung.',
};

export default function KontaktPage() {
    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)' }}>

            {/* Banner/Title Section */}
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Kontakt</h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '800px' }}>
                        Haben wir Ihr Interesse geweckt? Kontaktieren Sie uns einfach über unser Kontaktformular, rufen Sie uns an oder schreiben uns eine E-Mail.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                        {/* Form Side */}
                        <div className="glass-card">
                            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--accent-secondary)' }}>Schreiben Sie uns</h2>
                            <form className="flex-col gap-sm">
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <input type="text" placeholder="Vorname" className="form-input" required />
                                    <input type="text" placeholder="Nachname" className="form-input" required />
                                </div>
                                <input type="email" placeholder="E-Mail" className="form-input" required />
                                <input type="tel" placeholder="Telefon" className="form-input" />
                                <textarea placeholder="Ihre Nachricht" className="form-input" rows={6} required style={{ resize: 'vertical' }}></textarea>
                                <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '1rem' }}>
                                    <input type="checkbox" required style={{ marginTop: '0.2rem' }} />
                                    <span>Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.</span>
                                </label>
                                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem' }}>Nachricht senden</button>
                            </form>
                        </div>

                        {/* Info Side */}
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>Kontaktdaten</h2>

                            {/* Embedded Map for Katharinenstraße 111, Osnabrück */}
                            <div style={{ marginBottom: '2.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)', height: '250px' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.918520892796!2d8.03730797686774!3d52.26305005860269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9e59d5fb706db%3A0xe13ee79b9aef3426!2sKatharinenstra%C3%9Fe%20111%2C%2049078%20Osnabr%C3%BCck!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Telefon</h3>
                                <a href="tel:08006648714" style={{ fontSize: '1.25rem', color: 'var(--accent-primary)', fontWeight: 600 }}>0800 / 66 48 714</a>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>(Gebührenfrei aus dem dt. Netz)</p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>E-Mail</h3>
                                <a href="mailto:info@lasarz.com" style={{ fontSize: '1.1rem', color: 'var(--accent-primary)' }}>info@lasarz.com</a>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-secondary)', marginBottom: '1rem', marginTop: '3rem' }}>Unsere Standorte</h3>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <li style={{ color: 'var(--text-secondary)' }}><strong>Osnabrück</strong> (Zentrale)</li>
                                    <li style={{ color: 'var(--text-secondary)' }}><strong>Flensburg</strong></li>
                                    <li style={{ color: 'var(--text-secondary)' }}><strong>Münster</strong></li>
                                    <li style={{ color: 'var(--text-secondary)' }}><strong>Bünde</strong></li>
                                    <li style={{ color: 'var(--text-secondary)' }}><strong>Bielefeld</strong></li>
                                    <li style={{ color: 'var(--text-secondary)' }}><strong>Melle</strong></li>
                                    <li style={{ color: 'var(--text-secondary)' }}><strong>Rheine</strong></li>
                                </ul>
                            </div>

                            <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'rgba(26, 117, 141, 0.05)', borderRadius: '8px', borderLeft: '4px solid var(--accent-primary)' }}>
                                <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Jetzt Standort-Partner werden</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Erweitern Sie unser Netzwerk als zertifizierter Gutachter in Ihrer Region.</p>
                                <a href="#" className="text-accent" style={{ fontWeight: 600 }}>Mehr erfahren →</a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
