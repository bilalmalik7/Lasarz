import React from 'react';
import Link from 'next/link';
import { MapPin, Scale, FileCheck, Zap } from 'lucide-react';

interface LocalExpertiseProps {
    city?: string;
}

export const LocalExpertise = ({ city }: LocalExpertiseProps) => {
    const displayCity = city || 'Osnabrück';
    
    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '5rem', alignItems: 'center' }}>

                    <div className="glass-card" style={{ padding: 0, overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                        <img
                            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
                            alt={`Immobiliengutachter ${displayCity}`}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                            loading="lazy"
                        />
                    </div>

                    <div>
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Regionale Expertise</span>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-secondary)', marginTop: '1rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                            Ihr Immobiliengutachter für {displayCity} und Umgebung
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                            <p>
                                Seit über 19 Jahren sind wir fest in der Region <strong>{displayCity}</strong> verwurzelt. Wir kennen nicht nur die statistischen Marktzahlen, sondern verstehen die mikro-lokalen Besonderheiten der verschiedenen Stadtteile und Quartiere.
                            </p>
                            <p>
                                Unsere Expertise erstreckt sich über das gesamte Umland. Als <strong>zerifizierte Immobiliengutachter</strong> bieten wir Ihnen die notwendige Sicherheit bei komplexen Entscheidungen.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <span style={{ color: 'var(--accent-primary)' }}><MapPin size={22} strokeWidth={1.8} /></span>
                                    <span>Lokal vernetzt</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <span style={{ color: 'var(--accent-primary)' }}><Scale size={22} strokeWidth={1.8} /></span>
                                    <span>Gerichtsfest</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <span style={{ color: 'var(--accent-primary)' }}><FileCheck size={22} strokeWidth={1.8} /></span>
                                    <span>DIA zertifiziert</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                    <span style={{ color: 'var(--accent-primary)' }}><Zap size={22} strokeWidth={1.8} /></span>
                                    <span>Schnelle Abwicklung</span>
                                </div>
                            </div>

                            <Link href="/immobilien" className="btn btn-primary" style={{ marginTop: '2rem', alignSelf: 'flex-start', padding: '1rem 2rem' }}>
                                Entdecken Sie unsere Referenzen
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
