import Link from 'next/link';

export function AboutIntro() {
    return (
        <section style={{
            position: 'relative',
            padding: '100px 0',
            backgroundImage: 'url(/images/original_clone/HASELAND_11-1024x690.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
        }}>
            {/* Gradient overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(18,43,64,0.92) 0%, rgba(26,117,141,0.82) 100%)',
                zIndex: 1,
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{
                        display: 'inline-block',
                        backgroundColor: 'rgba(255,255,255,0.15)',
                        color: 'rgba(255,255,255,0.9)',
                        padding: '6px 18px',
                        borderRadius: '50px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        marginBottom: '1.5rem',
                        border: '1px solid rgba(255,255,255,0.3)',
                    }}>
                        Immobilienbewertung Lasarz in Osnabrück
                    </span>

                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                        color: '#fff',
                        marginBottom: '2rem',
                        lineHeight: 1.3,
                    }}>
                        Als Sachverständige für Immobilienbewertung erstellen und prüfen wir <span style={{ color: 'rgba(150,220,240,0.9)' }}>Verkehrswertgutachten</span> im Sinne des § 194 BauGB
                    </h2>

                    <p style={{
                        fontSize: '1.1rem',
                        color: 'rgba(255,255,255,0.88)',
                        lineHeight: 1.9,
                        marginBottom: '1.5rem',
                    }}>
                        Wir ermitteln unabhängig und fair den Marktwert Ihrer Immobilie. Die Gutachter von Lasarz Immobilienbewertung verfassen professionelle Immobiliengutachten, die bei Gerichten anerkannt sind und vom Finanzamt geschätzt werden. Diese werden unter Berücksichtigung der gesetzlichen Vorgaben, des Baugesetzbuches (BauGB) sowie der Immobilienwertermittlungsverordnung (ImmoWertV), marktkonform angefertigt.
                    </p>

                    <p style={{
                        fontSize: '1.1rem',
                        color: 'rgba(255,255,255,0.88)',
                        lineHeight: 1.9,
                        marginBottom: '2.5rem',
                    }}>
                        Selbstverständlich arbeiten wir auch <strong style={{ color: '#fff' }}>Kurzgutachten in Osnabrück</strong> für private Zwecke aus. Gerne unterstützen wir Sie auch bei <strong style={{ color: '#fff' }}>Restnutzungsdauer Gutachten</strong> zur Anhebung Ihrer möglichen Abschreibungen. Darüber hinaus beraten wir Sie kostenlos und unverbindlich bei inhaltlichen sowie rechtlichen Fragestellungen zu Ihrer Grundstücksbewertung in Osnabrück.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/kontakt" className="btn" style={{
                            backgroundColor: '#fff',
                            color: 'var(--accent-secondary)',
                            padding: '1rem 2.5rem',
                            fontWeight: 700,
                            fontSize: '1rem',
                        }}>
                            Kostenlose Beratung
                        </Link>
                        <Link href="/leistungen" className="btn" style={{
                            backgroundColor: 'transparent',
                            color: '#fff',
                            border: '2px solid rgba(255,255,255,0.7)',
                            padding: '1rem 2.5rem',
                            fontWeight: 600,
                            fontSize: '1rem',
                        }}>
                            Unsere Leistungen →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
