'use client';

const taglines = [
    { text: 'Zertifizierte Immobiliengutachter' },
    { text: 'Unabhängige & neutrale Marktwertermittlung' },
    { text: 'Öffentlich bestellte Sachverständige' },
    { text: 'Verkehrswert bei Erbschaft und Scheidung' },
    { text: 'Festpreisgarantie | transparent & fair' },
    { text: 'Kostenlose & unverbindliche Beratung' },
    { text: 'Wertermittlung für das Finanzamt' },
    { text: 'Kurzfristige Besichtigungstermine' },
    { text: 'Verkehrswertgutachten § 194 BauGB' },
];

export function HeroTaglines() {
    return (
        <div style={{
            background: 'var(--section-dark-bg)',
            overflow: 'hidden',
            padding: '0',
            borderBottom: '1px solid var(--section-dark-border)',
            borderTop: '1px solid var(--section-dark-border)',
        }}>
            <style>{`
                @keyframes ticker-scroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .ticker-track-modern {
                    display: flex;
                    width: max-content;
                    animation: ticker-scroll 50s linear infinite;
                    will-change: transform;
                }
                .ticker-track-modern:hover {
                    animation-play-state: paused;
                }
                .ticker-item-modern {
                    transition: color 0.25s ease;
                    cursor: default;
                }
                .ticker-item-modern:hover {
                    color: var(--accent-primary) !important;
                }
            `}</style>
            <div style={{ display: 'flex', alignItems: 'center', height: '48px' }}>
                <div className="ticker-track-modern">
                    {[...taglines, ...taglines].map((t, i) => (
                        <span
                            key={i}
                            className="ticker-item-modern"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                color: 'var(--section-dark-muted)',
                                fontSize: '0.85rem',
                                fontWeight: 500,
                                whiteSpace: 'nowrap',
                                padding: '0 2rem',
                                letterSpacing: '0.5px',
                                textTransform: 'uppercase'
                            }}
                        >
                            {t.text}
                            <span style={{ color: 'var(--accent-primary)', margin: '0 0.25rem', fontSize: '10px', marginLeft: '4rem', opacity: 0.8 }}>◆</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
