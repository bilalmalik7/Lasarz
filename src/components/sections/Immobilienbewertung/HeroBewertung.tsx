import React from 'react';
import Link from 'next/link';

export function HeroBewertung() {
    return (
        <section style={{
            position: 'relative',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'var(--bg-primary)',
            paddingTop: '100px', // Space for header
            overflow: 'hidden'
        }}>
            {/* Minimalist Background Pattern / Blur */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
                zIndex: 0,
                borderRadius: '50%'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <h1 className="animate-reveal" style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                        fontWeight: 700,
                        color: 'var(--accent-secondary)',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        letterSpacing: '-1px'
                    }}>
                        Wir sagen, was wir können...<br />
                        <span style={{ color: 'var(--accent-primary)' }}>und können, was wir sagen.</span>
                    </h1>

                    <p className="animate-reveal delay-100" style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                        color: 'var(--text-secondary)',
                        marginBottom: '3rem',
                        maxWidth: '700px',
                        margin: '0 auto 3rem auto',
                        lineHeight: 1.6
                    }}>
                        Lasarz Sachverständigenbüro – Ihre Experten für professionelle Immobilienbewertung in Osnabrück und bundesweit.
                    </p>

                    <div className="animate-reveal delay-200" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link href="/kontakt" className="btn btn-primary" style={{
                            padding: '1.2rem 2.5rem',
                            fontSize: '1.1rem',
                            borderRadius: 'var(--radius-full)',
                            boxShadow: '0 10px 25px rgba(26, 117, 141, 0.3)'
                        }}>
                            Kostenlose Erstberatung
                        </Link>

                        <Link href="#leistungen" className="btn btn-secondary" style={{
                            padding: '1.2rem 2.5rem',
                            fontSize: '1.1rem',
                            borderRadius: 'var(--radius-full)'
                        }}>
                            Unsere Leistungen
                        </Link>
                    </div>
                </div>
            </div>

            {/* Floating Quick Action (Similar to the target design's floating circle) */}
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '5%',
                width: '120px',
                height: '120px',
                backgroundColor: 'var(--accent-secondary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'white',
                padding: '1rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                boxShadow: '0 15px 35px rgba(18, 43, 64, 0.3)',
                animation: 'fadeInUp 1s ease-out 0.5s both',
                cursor: 'pointer',
                zIndex: 10
            }}>
                <Link href="#bewertung" style={{ color: 'white' }}>
                    Immobilien-<br />Bewertung
                </Link>
            </div>
        </section>
    );
}
