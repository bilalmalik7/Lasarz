'use client';

import { useState, useEffect } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 300);
    };

    if (!isOpen && !isClosing) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze mit Ihnen in Verbindung setzen.');
        handleClose();
    };

    return (
        <div
            className={`modal-overlay ${isClosing ? 'closing' : ''}`}
            onClick={(e) => e.target === e.currentTarget && handleClose()}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(12, 33, 50, 0.85)',
                backdropFilter: 'blur(10px)',
                zIndex: 2000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
                animation: 'fadeIn 0.3s ease-out forwards'
            }}
        >
            <div
                className={`modal-content ${isClosing ? 'closing' : ''}`}
                style={{
                    backgroundColor: 'white',
                    width: '100%',
                    maxWidth: '900px',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    maxHeight: '90vh',
                    animation: 'slideUp 0.3s ease-out forwards'
                }}
            >
                {/* Header/Close Button for Mobile */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem', position: 'absolute', top: 0, right: 0, zIndex: 10 }}>
                    <button
                        onClick={handleClose}
                        className="btn-close"
                        style={{
                            background: 'rgba(255,255,255,0.2)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '1.5rem',
                            transition: 'all 0.3s',
                            backdropFilter: 'blur(4px)'
                        }}
                    >
                        &times;
                    </button>
                </div>

                <div className="flex-col md-flex-row" style={{ display: 'flex', height: '100%' }}>
                    {/* Left Side: Team Info */}
                    <div style={{
                        flex: '1',
                        background: 'linear-gradient(rgba(18, 43, 64, 0.8), rgba(18, 43, 64, 0.8)), url("/images/original_clone/HASELAND_11-1024x690.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        padding: '3rem 2rem',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/images/team/lasarz_markus_real.jpg"
                            alt="Marc & Markus Lasarz"
                            style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                marginBottom: '1.5rem',
                                border: '3px solid var(--accent-primary)',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
                            }}
                        />
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Marc & Markus Lasarz</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>
                            "Über 25 Jahre Expertise in der Immobilienbewertung. Wir begleiten Sie persönlich und kompetent bei Ihrem Anliegen."
                        </p>
                        <div className="flex-col gap-sm">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem' }}>
                                <span style={{ fontSize: '1.2rem' }}>📞</span> +49 (0) 541 - 600 99 220
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem' }}>
                                <span style={{ fontSize: '1.2rem' }}>✉️</span> info@lasarz.com
                            </div>
                        </div>

                        <div style={{ marginTop: '2.5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                            <p style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-primary)' }}>
                                Zertifizierte Gutachter
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div style={{ flex: '1.2', padding: '3rem 2.5rem', overflowY: 'auto', backgroundColor: 'white' }}>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--accent-secondary)' }}>Anfrage senden</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>

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
                            <textarea placeholder="Ihre Nachricht" required rows={4} className="form-input" style={{ resize: 'none' }}></textarea>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>
                                Jetzt absenden
                            </button>
                        </form>
                    </div>
                </div>

                <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .modal-overlay.closing {
            animation: fadeIn 0.3s ease-in reverse forwards;
          }
          .modal-content.closing {
            animation: slideUp 0.3s ease-in reverse forwards;
          }
          .btn-close:hover {
            background: rgba(255,255,255,0.3) !important;
            transform: scale(1.1);
          }
          @media (max-width: 768px) {
            .md-flex-row { flex-direction: column !important; }
            .modal-content { height: 95vh; }
            .modal-content > div { flex: none !important; }
            .modal-content > div:first-child { padding: 2rem 1.5rem !important; }
            .modal-content > div:last-child { padding: 2rem 1.5rem !important; }
            .btn-close { color: var(--accent-secondary) !important; background: var(--bg-secondary) !important; }
          }
        `}</style>
            </div>
        </div>
    );
}
