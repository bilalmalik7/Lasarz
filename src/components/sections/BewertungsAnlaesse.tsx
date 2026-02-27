'use client';

const occasions = [
    { icon: '🏛️', text: 'Erbbauzinsanpassung' },
    { icon: '👨‍👩‍👧', text: 'Vormundschaften zur Wirtschaftlichkeit' },
    { icon: '🏷️', text: 'Kauf und Verkauf – Fehlentscheidungen vermeiden' },
    { icon: '🧾', text: 'Steuerliche Anlässe (z. B. Bedarfsbewertungen)' },
    { icon: '💼', text: 'Vorbereitung von Kapitalanlage-Entscheidungen' },
    { icon: '⚖️', text: 'Zwangs-/Teilungsversteigerung' },
    { icon: '📋', text: 'Enteignungs-/Entschädigungsverfahren' },
    { icon: '👨‍👩‍👦', text: 'Regulierung einer Erbauseinandersetzung' },
    { icon: '🤝', text: 'Kauf oder Verkauf Ihres Grundstücks' },
    { icon: '📊', text: 'Jahresabschluss – stille Reserven ermitteln' },
    { icon: '💎', text: 'Vermögensaufstellung und Entscheidungsvorbereitung' },
    { icon: '💔', text: 'Ermittlung des Zugewinnausgleichs (Ehescheidung)' },
];

export function BewertungsAnlaesse() {
    return (
        <section style={{
            padding: '100px 0',
            backgroundColor: 'var(--bg-primary)',
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '5rem',
                    alignItems: 'center',
                }}>
                    {/* Left: text */}
                    <div>
                        <span style={{
                            color: 'var(--accent-primary)',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontSize: '0.85rem',
                        }}>
                            Wann brauchen Sie uns?
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                            color: 'var(--accent-secondary)',
                            marginTop: '0.75rem',
                            marginBottom: '1.5rem',
                            lineHeight: 1.3,
                        }}>
                            Bewertungsanlässe – für jeden Bedarf
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                            Es gibt viele Situationen, in denen ein professionelles Immobiliengutachten unerlässlich ist. Von der Erbschaft über die Scheidung bis zum Immobilienkauf – wir ermitteln den fairen Marktwert für Ihre spezifische Situation.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1.05rem' }}>
                            Ein <strong style={{ color: 'var(--accent-secondary)' }}>Verkehrswertgutachten nach § 194 BauGB</strong> schützt Sie vor Fehlentscheidungen und ermöglicht Ihnen den sicheren Kauf Ihrer Immobilie. Schalten Sie vor dem Kauf eines Hauses einen Sachverständigen für Immobilienbewertung ein.
                        </p>
                    </div>

                    {/* Right: grid of occasions */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '1rem',
                    }}>
                        {occasions.map((item, i) => (
                            <div key={i} style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.85rem',
                                padding: '1rem',
                                backgroundColor: 'var(--bg-secondary)',
                                borderRadius: '10px',
                                border: '1px solid var(--border-color)',
                                transition: 'border-color 0.25s, box-shadow 0.25s',
                                cursor: 'default',
                            }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--accent-primary)';
                                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 12px rgba(26,117,141,0.12)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-color)';
                                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                                }}
                            >
                                <span style={{ fontSize: '1.4rem', lineHeight: 1, flexShrink: 0 }}>{item.icon}</span>
                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
