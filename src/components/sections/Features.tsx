import { Card } from '@/components/ui/Card';

export function Features() {
    const features = [
        {
            title: 'Regionale Expertise',
            description: 'Jahrelange Erfahrung in Osnabrück und Umgebung garantiert Ihnen eine absolut verlässliche Markteinschätzung und Wertermittlung.'
        },
        {
            title: 'Gesetzeskonform',
            description: 'Unsere Sachverständigen halten alle rechtlichen Standards nach ImmoWertV und BauGB gewissenhaft ein.'
        },
        {
            title: 'Zertifizierte Gutachter',
            description: 'Unsere Immobiliengutachter verfügen über renommierte Zertifizierungen (z.B. DIA), die höchste Qualität bezeugen.'
        },
        {
            title: 'Festpreisgarantie',
            description: 'Den Wert Ihrer Immobilien bewerten wir fair, transparent und ohne versteckte Kosten im Nachhinein.'
        }
    ];

    return (
        <section id="expertise" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)', maxWidth: '800px', margin: '0 auto var(--space-lg)' }}>
                    <h2 className="text-gradient animate-fade-in" style={{ fontSize: '2.5rem', marginBottom: 'var(--space-sm)' }}>Was uns auszeichnet</h2>
                    <p className="animate-fade-in delay-100" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        Unsere lokal versierten Immobiliengutachter kennen sich bestens mit den Immobilienpreisen vor Ort aus.
                    </p>
                </div>

                <div className="grid md-grid-cols-2 grid-cols-4 gap-md">
                    {features.map((feature, i) => (
                        <Card
                            key={i}
                            title={feature.title}
                            description={feature.description}
                            delay={(i % 4) * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
