import React from 'react';
import Link from 'next/link';

export function ServiceFeatures() {
    return (
        <section style={{ backgroundColor: 'var(--bg-secondary)', padding: 0 }}>
            {/* Feature Row 1 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                <div style={{
                    backgroundColor: 'var(--accent-primary)',
                    color: 'white',
                    padding: 'clamp(3rem, 5vw, 6rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                }}>
                    <h2 style={{
                        color: 'white',
                        fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                        marginBottom: '1rem',
                        lineHeight: 1.2
                    }}>
                        Sie suchen ein fachkundiges Gutachten?
                    </h2>
                    <p style={{
                        fontSize: '1.05rem',
                        lineHeight: 1.6,
                        marginBottom: '2rem',
                        opacity: 0.9
                    }}>
                        Egal ob für den Kauf, Verkauf, bei Erbschaft oder Trennung – wir ermitteln den verlässlichen Verkehrswert Ihrer Immobilie. Objektiv, transparent und marktgerecht.
                    </p>
                    <Link href="/leistungen/verkehrswertgutachten" className="btn" style={{
                        backgroundColor: 'white',
                        color: 'var(--accent-primary)',
                        borderRadius: 'var(--radius-full)',
                        padding: '1rem 2rem'
                    }}>
                        Mehr erfahren
                    </Link>
                </div>
                <div style={{
                    minHeight: '400px',
                    backgroundImage: 'url(/images/original_clone/HASELAND_11-1024x690.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                }}>
                    {/* Optional subtle overlay */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(26, 117, 141, 0.2)'
                    }} />
                </div>
            </div>

            {/* Feature Row 2 (Reversed in desktop, same in mobile due to flex/grid order) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                <div style={{
                    minHeight: '400px',
                    backgroundImage: 'url(/images/original_clone/immobiliengutachter-osnabrueck.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    order: 1 // default order
                }}>
                </div>
                <div style={{
                    backgroundColor: 'var(--accent-secondary)', // Using the dark navy for contrast
                    color: 'white',
                    padding: 'clamp(3rem, 5vw, 6rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    order: 2 // default order
                }}>
                    <h2 style={{
                        color: 'white',
                        fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                        marginBottom: '1rem',
                        lineHeight: 1.2
                    }}>
                        Sicherheit bei Ihrer Immobilienentscheidung.
                    </h2>
                    <p style={{
                        fontSize: '1.05rem',
                        lineHeight: 1.6,
                        marginBottom: '2rem',
                        opacity: 0.9
                    }}>
                        Unsere DIA-zertifizierten Sachverständigen begleiten Sie nicht nur bei der Wertermittlung, sondern auch als Kaufberater an Ihrer Seite. So vermeiden Sie teure Überraschungen.
                    </p>
                    <Link href="/leistungen/kaufberatung" className="btn" style={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        border: '2px solid white',
                        borderRadius: 'var(--radius-full)',
                        padding: '1rem 2rem'
                    }}>
                        Zur Kaufberatung
                    </Link>
                </div>
            </div>

            {/* Inline styles for media queries to handle ordering on smaller screens if needed */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 768px) {
                    .feature-reversed-mobile > div:nth-child(1) { order: 2; }
                    .feature-reversed-mobile > div:nth-child(2) { order: 1; }
                }
            `}} />
        </section>
    );
}
