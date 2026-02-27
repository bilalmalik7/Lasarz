'use client';

const taglines = [
    'Zertifizierte Immobiliengutachter',
    'Unabhängige & neutrale Ermittlung des Marktwertes',
    'Öffentlich bestellte & vereidigte Sachverständige in Osnabrück',
    'Berechnung des Verkehrswertes bei Erbschaft und Scheidung',
    'Festpreisgarantie | transparent & fair | keine versteckten Kosten',
    'Kostenlose & unverbindliche Beratung durch Sachverständige',
    'Wertermittlung für das Finanzamt',
    'Kurzfristige Besichtigungstermine | auch am Wochenende',
    'Verkehrswertgutachten im Sinne des § 194 BauGB',
];

export function HeroTaglines() {
    return (
        <div style={{
            backgroundColor: 'var(--accent-primary)',
            overflow: 'hidden',
            padding: '0',
            borderBottom: '2px solid rgba(255,255,255,0.2)',
        }}>
            <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker 40s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
            <div style={{ display: 'flex', alignItems: 'center', height: '44px' }}>
                <div className="ticker-track">
                    {[...taglines, ...taglines].map((t, i) => (
                        <span key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            color: '#fff',
                            fontSize: '0.88rem',
                            fontWeight: 500,
                            whiteSpace: 'nowrap',
                            padding: '0 2rem',
                            letterSpacing: '0.3px',
                        }}>
                            <span style={{ color: 'rgba(255,255,255,0.5)', marginRight: '2rem' }}>✦</span>
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
