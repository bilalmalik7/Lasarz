import { Card } from '@/components/ui/Card';

export function PropertyTypes() {
    const propertyTypes = [
        {
            title: 'Wohnimmobilien',
            description: 'Ein- und Zweifamilienhäuser, Doppel- & Reihenhäuser, Eigentumswohnungen, Mehrfamilienhäuser, Ferienwohnung, etc.',
        },
        {
            title: 'Gewerbeimmobilien',
            description: 'Bürogebäude, Ärztezentren, Logistik- & Hallenflächen, Handels- & Dienstleistungsflächen, Produktionsflächen etc.',
        },
        {
            title: 'Sonderimmobilien',
            description: 'Handelsimmobilien, Hotelgebäude, Pflegeimmobilien, Krankenhäuser, Gastronomiebetriebe, Einkaufszentren etc.',
        },
        {
            title: 'Grundstücke & Rechte',
            description: 'Flächen im Außenbereich, Wohn- & Wohnungsrecht, Nießbrauch, Erbbaurecht, Leitungs- & Wegerecht, Baulasten etc.',
        }
    ];

    return (
        <section id="immobilien" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
                    <h2 className="text-gradient animate-fade-in" style={{ fontSize: '2.5rem', marginBottom: 'var(--space-sm)' }}>Diese Immobilien bewerten wir für Sie</h2>
                    <p className="animate-fade-in delay-100" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Unabhängig von der Art Ihrer Immobilie verfügen wir über die passenden Experten zur präzisen Wertermittlung.
                    </p>
                </div>

                <div className="grid md-grid-cols-2 grid-cols-4 gap-md">
                    {propertyTypes.map((type, i) => (
                        <Card
                            key={i}
                            title={type.title}
                            description={type.description}
                            delay={(i % 4) * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
