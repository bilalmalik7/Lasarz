import Link from 'next/link';

const packages = [
    {
        name: 'Kurzgutachten',
        icon: '📋',
        color: 'var(--accent-primary)',
        popular: false,
        features: [
            'Präzise Wertermittlung nach ImmoWertV',
            'Für private Zwecke',
            'Ortsbegehung durch Sachverständigen',
            'Schriftliche Abhandlung (ca. 40–60 Seiten)',
        ],
    },
    {
        name: 'Kaufberatung',
        icon: '🏠',
        color: '#0d7a4e',
        popular: false,
        features: [
            'Ortsbegehung durch Sachverständigen',
            'Beurteilung Gebäudesubstanz und Sanierungsbedarf',
            'Schriftliche Abhandlung (ca. 40–60 Seiten)',
            'Ausführliche telefonische Besprechung der Ergebnisse',
        ],
    },
    {
        name: 'Verkehrswertgutachten §194 BauGB',
        icon: '⚖️',
        color: 'var(--accent-secondary)',
        popular: true,
        features: [
            'Gerichtsfest & vom Finanzamt anerkannt',
            'Ortsbegehung durch Sachverständigen',
            'Prüfung von Baulasten',
            'Einsichtnahme in das Altlastenkataster',
            'Ausführliche schriftliche Abhandlung (ca. 60–100 Seiten)',
        ],
    },
    {
        name: 'Beleihungswertgutachten',
        icon: '🏦',
        color: '#7c3aed',
        popular: false,
        features: [
            'Präzise Wertermittlung nach BelWertV',
            'Von Banken anerkannt',
            'Ortsbegehung durch Sachverständigen',
            'Ausführliche schriftliche Abhandlung (ca. 40–60 Seiten)',
        ],
    },
];

export function GutachtenPackages() {
    return (
        <section style={{
            padding: '100px 0',
            backgroundColor: 'var(--bg-primary)',
            position: 'relative',
        }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{
                        color: 'var(--accent-primary)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontSize: '0.85rem',
                    }}>
                        Unsere Leistungen
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                        color: 'var(--accent-secondary)',
                        marginTop: '0.75rem',
                        marginBottom: '1rem',
                    }}>
                        Für jeden Anlass das richtige Gutachten
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
                        Durch unsere <strong>Festpreisgarantie</strong> haben Sie volle Kostentransparenz – fair, transparent & ohne versteckte Kosten.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '2rem',
                    alignItems: 'stretch',
                }}>
                    {packages.map((pkg) => (
                        <div key={pkg.name} style={{
                            position: 'relative',
                            backgroundColor: pkg.popular ? 'var(--accent-secondary)' : '#fff',
                            borderRadius: '16px',
                            padding: '2.5rem 2rem 3rem',
                            boxShadow: pkg.popular
                                ? '0 24px 60px rgba(18,43,64,0.25)'
                                : '0 4px 24px rgba(18,43,64,0.07)',
                            border: pkg.popular ? 'none' : '1px solid var(--border-color)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0',
                            transform: pkg.popular ? 'scale(1.04)' : 'scale(1)',
                        }}>
                            {pkg.popular && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-14px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: 'var(--accent-primary)',
                                    color: '#fff',
                                    padding: '6px 20px',
                                    borderRadius: '50px',
                                    fontSize: '0.8rem',
                                    fontWeight: 700,
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    whiteSpace: 'nowrap',
                                }}>
                                    ★ Empfohlen
                                </div>
                            )}

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                marginBottom: '1.5rem',
                            }}>
                                <span style={{ fontSize: '2.2rem' }}>{pkg.icon}</span>
                                <h3 style={{
                                    fontSize: '1.1rem',
                                    color: pkg.popular ? '#fff' : 'var(--accent-secondary)',
                                    lineHeight: 1.3,
                                }}>
                                    {pkg.name}
                                </h3>
                            </div>

                            <ul style={{
                                listStyle: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.85rem',
                                flex: 1,
                                marginBottom: '2rem',
                            }}>
                                {pkg.features.map((f, i) => (
                                    <li key={i} style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '0.75rem',
                                        color: pkg.popular ? 'rgba(255,255,255,0.9)' : 'var(--text-secondary)',
                                        fontSize: '0.92rem',
                                        lineHeight: 1.5,
                                    }}>
                                        <span style={{ color: pkg.popular ? 'rgba(150,240,220,0.9)' : 'var(--accent-primary)', marginTop: '1px', flexShrink: 0 }}>✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/kontakt" className="btn" style={{
                                backgroundColor: pkg.popular ? 'var(--accent-primary)' : 'var(--accent-secondary)',
                                color: '#fff',
                                border: 'none',
                                padding: '0.85rem 1.5rem',
                                borderRadius: '8px',
                                textAlign: 'center',
                                fontWeight: 600,
                                width: '100%',
                                justifyContent: 'center',
                            }}>
                                Jetzt anfragen
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
