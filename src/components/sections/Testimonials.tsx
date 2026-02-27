'use client';

import React from 'react';

const testimonials = [
    {
        name: 'Thomas M.',
        role: 'Immobilieneigentümer in Osnabrück',
        text: 'Die Wertermittlung meiner Immobilie durch Herrn Lasarz war hochprofessionell und absolut präzise. Die ausführliche Beratung hat mir viel Sicherheit gegeben.',
        rating: 5
    },
    {
        name: 'Sabine W.',
        role: 'Verkäuferin aus Melle',
        text: 'Besonders beeindruckt hat mich die Schnelligkeit und die fundierte Marktkenntnis in der Region. Ein kompetenter Partner, den ich jederzeit weiterempfehlen würde.',
        rating: 5
    },
    {
        name: 'Andreas K.',
        role: 'Gewerbeimmobilien-Investor',
        text: 'Für gerichtsfeste Gutachten ist Lasarz die erste Adresse. Transparent, unabhängig und fachlich auf höchstem Niveau.',
        rating: 5
    }
];

export const Testimonials = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Referenzen</span>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-secondary)', marginTop: '0.5rem' }}>Was unsere Kunden sagen</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {testimonials.map((t, i) => (
                        <div key={i} className="glass-card" style={{ padding: '3rem 2rem', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ fontSize: '3rem', color: 'var(--accent-primary)', opacity: 0.2, position: 'absolute', top: '1rem', left: '1rem', fontFamily: 'serif' }}>"</div>

                            <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '1.5rem' }}>
                                {[...Array(t.rating)].map((_, star) => (
                                    <span key={star} style={{ color: '#FFD700', fontSize: '1.2rem' }}>★</span>
                                ))}
                            </div>

                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '2rem', flexGrow: 1 }}>
                                {t.text}
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', color: 'var(--accent-primary)', fontWeight: 600, border: '2px solid var(--accent-primary)' }}>
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-secondary)', margin: 0 }}>{t.name}</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
