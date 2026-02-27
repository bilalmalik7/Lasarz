'use client';

export function HowWeWork() {
    const methods = [
        {
            step: '01',
            title: 'Sachwertverfahren',
            desc: 'Die Immobilie wird auf Basis des Sachwerts bewertet – ideal für eigengenutzte Wohnimmobilien.',
            icon: '🏗️',
        },
        {
            step: '02',
            title: 'Ertragswertverfahren',
            desc: 'Bei Renditeimmobilien wird der nachhaltige Ertrag zur Wertermittlung herangezogen.',
            icon: '📈',
        },
        {
            step: '03',
            title: 'Vergleichswertverfahren',
            desc: 'Vergleichspreise aus aktuellen Marktdaten des Gutachterausschusses Osnabrück fließen ein.',
            icon: '⚖️',
        },
        {
            step: '04',
            title: 'Residualwertverfahren',
            desc: 'Für Grundstücke mit Entwicklungspotenzial wird eine baurechtliche Prüfung und Residualwertermittlung durchgeführt.',
            icon: '📐',
        },
    ];

    return (
        <section style={{
            padding: '100px 0',
            backgroundColor: 'var(--bg-secondary)',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Decorative background circles */}
            <div style={{
                position: 'absolute',
                top: '-100px',
                right: '-100px',
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                border: '80px solid rgba(26,117,141,0.05)',
                pointerEvents: 'none',
            }} />

            <style>{`
        .method-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(18,43,64,0.14) !important;
        }
      `}</style>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span style={{
                        color: 'var(--accent-primary)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontSize: '0.85rem',
                    }}>
                        Bewertungsverfahren
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                        color: 'var(--accent-secondary)',
                        marginTop: '0.75rem',
                        marginBottom: '1rem',
                    }}>
                        Wie ermittelt ein zertifizierter Immobiliengutachter den Verkehrswert?
                    </h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                        Bei der Erstellung von Immobiliengutachten finden die gesetzlich vorgeschriebenen Bewertungsverfahren Anwendung. Die aktuellen Marktdaten des Gutachterausschusses Osnabrück fließen über Vergleichspreise in die Gebäudewertermittlung sowie den Bodenrichtwert mit ein.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '2rem',
                }}>
                    {methods.map((m) => (
                        <div key={m.step} style={{
                            backgroundColor: '#fff',
                            borderRadius: '12px',
                            padding: '2.5rem 2rem',
                            boxShadow: '0 4px 24px rgba(18,43,64,0.07)',
                            borderTop: '4px solid var(--accent-primary)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            cursor: 'default',
                        }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
                                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(18,43,64,0.14)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 24px rgba(18,43,64,0.07)';
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
                                <span style={{
                                    fontSize: '2rem',
                                    lineHeight: 1,
                                }}>{m.icon}</span>
                                <span style={{
                                    fontSize: '0.85rem',
                                    fontWeight: 700,
                                    color: 'var(--accent-primary)',
                                    backgroundColor: 'rgba(26,117,141,0.1)',
                                    padding: '4px 12px',
                                    borderRadius: '50px',
                                    letterSpacing: '1px',
                                }}>
                                    Schritt {m.step}
                                </span>
                            </div>
                            <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)', marginBottom: '0.75rem' }}>
                                {m.title}
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                                {m.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
