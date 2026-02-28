import { Card } from '@/components/ui/Card';

export function Services() {
    const services = [
        {
            title: 'Verkehrswertgutachten §194 BauGB',
            description: 'Gerichtsfest und vom Finanzamt anerkannt. Ausführliche schriftliche Abhandlung inkl. Baulasten-Prüfung und Vor-Ort-Termin.',
        },
        {
            title: 'Kurzgutachten',
            description: 'Für private Zwecke wie z.B. bei Vermögensaufstellungen oder zur Vorbereitung eines Immobilienkaufs ohne gerichtlichen Bedarf.',
        },
        {
            title: 'Kaufberatung',
            description: 'Ortsbegehung durch Sachverständigen, Beurteilung der Gebäudesubstanz, und Erkennung von versteckten Sanierungsbedarfen.',
        },
        {
            title: 'Beleihungswertgutachten',
            description: 'Präzise Wertermittlung nach BelWertV, welche von Banken und Kreditinstituten zur Finanzierung anerkannt wird.',
        }
    ];

    return (
        <section id="leistungen" className="section">
            <div className="container">
                <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <h2 className="text-gradient animate-fade-in" style={{ fontSize: '2.5rem', marginBottom: 'var(--space-sm)' }}>Unsere Bewertungsleistungen</h2>
                    <p className="animate-fade-in delay-100" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px' }}>
                        Je nach Bewertungsanlass bieten wir das passgenaue Gutachten. Von gerichtsfest bis kompakt für private Entscheidungen.
                    </p>
                </div>

                <div className="grid md-grid-cols-2 grid-cols-2 gap-md" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))' }}>
                    {services.map((service, i) => (
                        <Card
                            key={i}
                            title={service.title}
                            description={service.description}
                            delay={(i % 4) * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
