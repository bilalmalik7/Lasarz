'use client';

export function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic for form submission
        alert('Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze mit Ihnen in Verbindung setzen.');
    };

    return (
        <section id="kontakt" className="section">
            <div className="container">
                <div className="glass-card flex-col md-flex-row" style={{ padding: '0', display: 'flex', flexWrap: 'wrap' }}>

                    {/* Contact Info */}
                    <div style={{ flex: '1 1 300px', padding: 'var(--space-lg) var(--space-md)', background: 'var(--bg-secondary)' }}>
                        <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: 'var(--space-sm)' }}>Kontaktieren Sie uns</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-md)' }}>
                            Lassen Sie sich kostenlos beraten oder beantragen Sie direkt eine Immobilienbewertung in Osnabrück.
                        </p>

                        <div className="flex-col gap-sm">
                            <div style={{ color: 'var(--text-primary)', fontWeight: '500' }}>
                                <span className="text-accent" style={{ marginRight: '0.5rem' }}>📞</span> 0541 / 123 456 78
                            </div>
                            <div style={{ color: 'var(--text-primary)', fontWeight: '500' }}>
                                <span className="text-accent" style={{ marginRight: '0.5rem' }}>✉️</span> info@lasarz.com
                            </div>
                            <div style={{ color: 'var(--text-primary)', fontWeight: '500' }}>
                                <span className="text-accent" style={{ marginRight: '0.5rem' }}>📍</span> Musterstraße 1, 49074 Osnabrück
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div style={{ flex: '1 1 400px', padding: 'var(--space-lg) var(--space-md)' }}>
                        <form onSubmit={handleSubmit} className="flex-col gap-md">
                            <div className="flex gap-sm" style={{ flexWrap: 'wrap' }}>
                                <input type="text" placeholder="Vorname" required className="form-input" style={{ flex: 1, minWidth: '150px' }} />
                                <input type="text" placeholder="Nachname" required className="form-input" style={{ flex: 1, minWidth: '150px' }} />
                            </div>
                            <input type="email" placeholder="E-Mail Adresse" required className="form-input" />
                            <input type="tel" placeholder="Telefonnummer" className="form-input" />
                            <select className="form-input" required>
                                <option value="">Grund der Anfrage</option>
                                <option value="verkehrswertgutachten">Verkehrswertgutachten</option>
                                <option value="kurzgutachten">Kurzgutachten</option>
                                <option value="kaufberatung">Kaufberatung</option>
                                <option value="sonstiges">Sonstiges</option>
                            </select>
                            <textarea placeholder="Ihre Nachricht" required rows={4} className="form-input" style={{ resize: 'vertical' }}></textarea>

                            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Anfrage Senden</button>
                        </form>
                    </div>

                </div>
            </div>

        </section>
    );
}
