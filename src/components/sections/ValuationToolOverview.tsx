export function ValuationToolOverview() {
    return (
        <section className="section">
            <div className="container">
                <div className="glass-card text-center animate-fade-in" style={{ padding: 'var(--space-xl) var(--space-md)', background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)', border: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', background: 'radial-gradient(circle at top, var(--accent-glow) 0%, transparent 60%)', opacity: 0.3, zIndex: 0, pointerEvents: 'none' }} />

                    <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>
                            Kostenlose Immobilienbewertung
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: 'var(--space-lg)' }}>
                            Nutzen Sie unser schnelles Online-Tool, um einen ersten Richtwert für Ihre Immobilie zu erhalten. Geben Sie einfach die Eckdaten ein und erhalten Sie eine unverbindliche Einschätzung in wenigen Minuten.
                        </p>

                        {/* Placeholder for the valuation iframe/tool */}
                        <div style={{
                            background: 'var(--bg-primary)',
                            border: '1px dashed var(--accent-primary)',
                            borderRadius: 'var(--radius-md)',
                            padding: 'var(--space-2xl) var(--space-md)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '400px'
                        }}>
                            <span className="text-accent" style={{ fontSize: '3rem', marginBottom: 'var(--space-sm)' }}>📋</span>
                            <h3 style={{ marginBottom: 'var(--space-xs)' }}>Bewertungstool</h3>
                            <p style={{ color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto' }}>
                                (Hier wird in Kürze das Bewertungs-Widget eingebunden. Bitte teilen Sie uns das entsprechende Snippet oder den Link zum Tool mit, damit wir es hier integrieren können.)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
