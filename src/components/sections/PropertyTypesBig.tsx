const propertyTypes = [
    {
        category: 'Wohnimmobilien',
        icon: '🏠',
        bg: 'linear-gradient(135deg, #1A758D 0%, #122b40 100%)',
        items: [
            'Ein- und Zweifamilienhäuser',
            'Doppel- & Reihenhäuser',
            'Eigentumswohnungen',
            'Mehrfamilienhäuser',
            'Wohn- & Geschäftshäuser',
            'Ferienhäuser & Wohnungen',
            'Pflegeappartments',
        ],
    },
    {
        category: 'Sonderimmobilien',
        icon: '🏨',
        bg: 'linear-gradient(135deg, #0d7a4e 0%, #064d31 100%)',
        items: [
            'Handelsimmobilien',
            'Hotelgebäude',
            'Pflegeimmobilien',
            'Krankenhäuser',
            'Gastronomiebetriebe',
            'Einkaufszentren',
            'Freizeitimmobilien & Betreiberimmobilien',
        ],
    },
    {
        category: 'Gewerbeimmobilien',
        icon: '🏭',
        bg: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)',
        items: [
            'Bürogebäude & Ärztezentren',
            'Logistik- & Hallenflächen',
            'Handels- & Dienstleistungsflächen',
            'Produktionsflächen & Werkstätten',
            'Industrie- & Technologieparks',
            'Landwirtschaftliche Betriebe',
        ],
    },
    {
        category: 'Grundstücke & Rechte',
        icon: '📜',
        bg: 'linear-gradient(135deg, #b45309 0%, #78350f 100%)',
        items: [
            'Flächen im Außenbereich',
            'Land- & Forstwirtschaftliche Flächen',
            'Sanierungsgebiete',
            'Wohnrecht & Wohnungsrecht',
            'Nießbrauch & Erbbaurecht',
            'Leitungs- & Wegerecht',
            'Baulasten',
        ],
    },
];

export function PropertyTypesBig() {
    return (
        <section style={{
            padding: '100px 0',
            backgroundColor: 'var(--bg-secondary)',
            position: 'relative',
            overflow: 'hidden',
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
                        Gebäudearten
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                        color: 'var(--accent-secondary)',
                        marginTop: '0.75rem',
                        marginBottom: '1rem',
                    }}>
                        Gebäudearten die wir für Sie bewerten
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
                        Von Wohnimmobilien über Gewerbeimmobilien bis hin zu Sonderimmobilien und Grundstücksrechten – wir bewerten jede Art von Immobilie professionell und marktkonform.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                    gap: '2rem',
                }}>
                    {propertyTypes.map((type) => (
                        <div key={type.category} style={{
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 8px 32px rgba(18,43,64,0.12)',
                        }}>
                            {/* Header */}
                            <div style={{
                                background: type.bg,
                                padding: '2rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                            }}>
                                <span style={{ fontSize: '2.5rem' }}>{type.icon}</span>
                                <h3 style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700 }}>{type.category}</h3>
                            </div>

                            {/* Items */}
                            <div style={{
                                backgroundColor: '#fff',
                                padding: '1.5rem 2rem',
                            }}>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                    {type.items.map((item, i) => (
                                        <li key={i} style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.92rem',
                                            padding: '0.3rem 0',
                                            borderBottom: i < type.items.length - 1 ? '1px solid var(--bg-secondary)' : 'none',
                                        }}>
                                            <span style={{ color: 'var(--accent-primary)', fontWeight: 700, flexShrink: 0 }}>→</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
