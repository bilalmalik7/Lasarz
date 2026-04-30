'use client';

import { useState } from 'react';

export default function KontaktContent() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [showCallbackForm, setShowCallbackForm] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: ''
            });
            
            // Reset success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);
        }, 1000);
    };

    const handleCallbackSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate callback request submission
        alert('Anfrage für Rückruf wurde versendet. Wir melden uns in Kürze bei Ihnen.');
        setShowCallbackForm(false);
    };

    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)' }}>
            {/* Banner/Title Section */}
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Kontakt</h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '800px' }}>
                        Haben wir Ihr Interesse geweckt? Kontaktieren Sie uns einfach über unser Kontaktformular, rufen Sie uns an oder schreiben Sie uns eine E-Mail.
                    </p>
                </div>
            </section>

            {/* Contact Section with Mobile Optimization */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem' }}>
                        
                        {/* Left Column - Form and Callback */}
                        <div>
                            {/* Free Consultation Offer */}
                            <div style={{ 
                                backgroundColor: 'rgba(26, 117, 141, 0.1)', 
                                padding: '2rem', 
                                borderRadius: '8px', 
                                marginBottom: '2rem',
                                border: '1px solid rgba(26, 117, 141, 0.2)',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                            }}>
                                <h2 style={{ fontSize: '1.75rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Kostenlose Beratung</h2>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                    Haben Sie Fragen zur Immobilienbewertung? Wir bieten Ihnen eine kostenlose Erstberatung an. 
                                    Unser Experte steht Ihnen gerne zur Verfügung.
                                </p>
                                <button 
                                    onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="btn btn-primary"
                                    style={{ padding: '0.75rem 1.5rem', width: '100%' }}
                                >
                                    Jetzt Termin vereinbaren
                                </button>
                            </div>

                            {/* WhatsApp Button */}
                            <div style={{ 
                                backgroundColor: 'rgba(37, 211, 102, 0.1)', 
                                padding: '2rem', 
                                borderRadius: '8px', 
                                marginBottom: '2rem',
                                border: '1px solid rgba(37, 211, 102, 0.2)',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                            }}>
                                <h2 style={{ fontSize: '1.75rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Kontakt per WhatsApp</h2>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                    Haben Sie schnelle Fragen? Kontaktieren Sie uns direkt per WhatsApp.
                                </p>
                                <a 
                                    href="https://wa.me/4915123456789" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-success"
                                    style={{ 
                                        padding: '0.75rem 1.5rem',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        width: '100%',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                        <polyline points="16 7 16 10 19 13"></polyline>
                                    </svg>
                                    WhatsApp kontaktieren
                                </a>
                            </div>

                            {/* Callback Request Form */}
                            <div style={{ 
                                backgroundColor: 'var(--bg-primary)', 
                                padding: '2rem', 
                                borderRadius: '8px', 
                                border: '1px solid var(--border-color)',
                                marginBottom: '2rem',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                            }}>
                                <h2 style={{ fontSize: '1.75rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Rückruf anfordern</h2>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                    Haben Sie keine Zeit zum Formular ausfüllen? Fordern Sie einfach einen Rückruf an.
                                </p>
                                {!showCallbackForm ? (
                                    <button 
                                        onClick={() => setShowCallbackForm(true)}
                                        className="btn btn-secondary"
                                        style={{ padding: '0.75rem 1.5rem', width: '100%' }}
                                    >
                                        Rückruf anfordern
                                    </button>
                                ) : (
                                    <form onSubmit={handleCallbackSubmit}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                                            <input 
                                                type="text" 
                                                placeholder="Vorname" 
                                                className="form-input" 
                                                required 
                                                style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                                            />
                                            <input 
                                                type="tel" 
                                                placeholder="Telefonnummer" 
                                                className="form-input" 
                                                required 
                                                style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                                            />
                                            <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '1rem' }}>
                                                <input type="checkbox" required style={{ marginTop: '0.2rem' }} />
                                                <span>Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.</span>
                                            </label>
                                            <button 
                                                type="submit" 
                                                className="btn btn-primary" 
                                                style={{ padding: '0.75rem 1.5rem', width: '100%' }}
                                            >
                                                Rückruf anfordern
                                            </button>
                                            <button 
                                                type="button" 
                                                onClick={() => setShowCallbackForm(false)}
                                                className="btn btn-outline"
                                                style={{ padding: '0.75rem 1.5rem', width: '100%' }}
                                            >
                                                Abbrechen
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>

                            {/* Main Contact Form */}
                            <div id="consultation-form" className="glass-card">
                                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--accent-secondary)' }}>Schreiben Sie uns</h2>
                                {submitSuccess ? (
                                    <div style={{ 
                                        backgroundColor: 'rgba(37, 211, 102, 0.1)', 
                                        padding: '1rem', 
                                        borderRadius: '4px', 
                                        marginBottom: '1.5rem',
                                        border: '1px solid rgba(37, 211, 102, 0.3)'
                                    }}>
                                        Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei Ihnen.
                                    </div>
                                ) : null}
                                <form onSubmit={handleSubmit} className="flex-col gap-sm">
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <input 
                                            type="text" 
                                            placeholder="Vorname" 
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="form-input" 
                                            required 
                                            style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                                        />
                                        <input 
                                            type="text" 
                                            placeholder="Nachname" 
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="form-input" 
                                            required 
                                            style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                                        />
                                    </div>
                                    <input 
                                        type="email" 
                                        placeholder="E-Mail" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-input" 
                                        required 
                                        style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                                    />
                                    <input 
                                        type="tel" 
                                        placeholder="Telefon" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="form-input" 
                                        style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}
                                    />
                                    <textarea 
                                        placeholder="Ihre Nachricht" 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="form-input" 
                                        rows={6} 
                                        required 
                                        style={{ 
                                            resize: 'vertical', 
                                            padding: '0.75rem', 
                                            borderRadius: '4px', 
                                            border: '1px solid var(--border-color)' }}
                                    ></textarea>
                                    <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '1rem' }}>
                                        <input type="checkbox" required style={{ marginTop: '0.2rem' }} />
                                        <span>Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.</span>
                                    </label>
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary" 
                                        style={{ marginTop: '1rem', width: '100%' }}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Senden...' : 'Nachricht senden'}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Right Column - Information */}
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

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Öffnungszeiten</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>
                                    Montag - Freitag: 8:00 - 17:00 Uhr<br />
                                    Samstag: 9:00 - 13:00 Uhr<br />
                                    Sonntag: Geschlossen
                                </p>
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