'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const blogPosts = [
    {
        id: '1',
        title: 'Marktwert vs. Beleihungswert: Was ist der Unterschied?',
        date: '15. Februar 2024',
        category: 'Grundlagen',
        image: '/images/original_clone/property_background.jpg',
        excerpt: 'Viele Immobilienbesitzer verwechseln diese beiden Begriffe. Dabei spielen sie in unterschiedlichen Situationen eine entscheidende Rolle...',
        content: `
            <p>Wer sich mit dem Kauf oder Verkauf einer Immobilie beschäftigt, stolpert unweigerlich über die Begriffe <strong>Marktwert</strong> (Verkehrswert) und <strong>Beleihungswert</strong>. Doch was genau verbirgt sich dahinter, und warum gibt es oft signifikante Unterschiede zwischen diesen beiden Werten?</p>

            <h3>Der Marktwert (Verkehrswert)</h3>
            <p>Der Marktwert, im Gesetz als Verkehrswert bezeichnet (§ 194 BauGB), ist der voraussichtlich am Markt zu erzielende Preis. Er spiegelt die aktuelle Angebots- und Nachfragesituation zum Wertermittlungsstichtag wider. Ein zertifizierter Gutachter berücksichtigt hierbei Faktoren wie Lage, Zustand, energetische Beschaffenheit und vergleichbare Verkäufe in der Region Osnabrück.</p>

            <h3>Der Beleihungswert</h3>
            <p>Der Beleihungswert ist ein Begriff aus der Bankenwelt. Er dient Kreditinstituten als Sicherheit für die Vergabe eines Immobiliendarlehens. Im Gegensatz zum Marktwert, der eine Momentaufnahme ist, muss der Beleihungswert über die gesamte Laufzeit des Kredits Bestand haben. Er ist daher meist vorsichtiger kalkuliert und liegt oft etwa 10% bis 20% unter dem Marktwert.</p>

            <div class="glass-card" style="margin: 2rem 0; border-left: 4px solid var(--accent-primary);">
                <p><strong>Fazit:</strong> Während der Marktwert für Käufer und Verkäufer die wichtigste Orientierung ist, ist der Beleihungswert die Basis für Ihre Finanzierung.</p>
            </div>

            <h3>Warum eine professionelle Bewertung wichtig ist</h3>
            <p>Ein fundiertes Gutachten schafft Klarheit für beide Seiten. In unserem Büro in Osnabrück erstellen wir gerichtsfeste Verkehrswertgutachten, die als verlässliche Basis für Preisverhandlungen, Erbschaftsangelegenheiten oder Scheidungen dienen.</p>
        `
    },
    {
        id: '2',
        title: 'Checkliste: Die wichtigsten Dokumente für den Hausverkauf',
        date: '02. Februar 2024',
        category: 'Ratgeber',
        image: '/images/original_clone/MG_1880-1024x690.jpg',
        excerpt: 'Ein reibungsloser Verkauf beginnt mit der richtigen Vorbereitung. Wir zeigen Ihnen, welche Unterlagen Sie unbedingt griffbereit haben sollten.',
        content: `
            <p>Ein Immobilienverkauf ist ein komplexer Prozess. Eine der häufigsten Hürden sind fehlende oder veraltete Unterlagen, die den Verkaufsprozess verzögern oder sogar zum Scheitern bringen können.</p>

            <h3>Die Basis-Dokumente</h3>
            <ul>
                <li><strong>Aktueller Grundbuchauszug:</strong> Nicht älter als drei Monate.</li>
                <li><strong>Flurkarte/Lageplan:</strong> Erhältlich beim Katasteramt.</li>
                <li><strong>Bauzeichnungen:</strong> Grundrisse, Schnitte und Ansichten.</li>
                <li><strong>Wohnflächenberechnung:</strong> Nach Wohnflächenverordnung (WoFlV).</li>
            </ul>

            <h3>Energetische Unterlagen</h3>
            <p>Seit der Einführung des GEG ist der <strong>Energieausweis</strong> Pflicht. Er muss Kaufinteressenten spätestens bei der Besichtigung vorgelegt werden. Wir unterstützen Sie gerne bei der Einordnung der Kennwerte.</p>

            <h3>Besonderheiten bei Eigentumswohnungen</h3>
            <p>Wenn Sie eine Wohnung verkaufen, benötigen Sie zusätzlich die Teilungserklärung, Protokolle der letzten Eigentümerversammlungen und den aktuellen Wirtschaftsplan.</p>

            <div class="glass-card" style="margin: 2rem 0; padding: 2rem; background: rgba(26, 117, 141, 0.05);">
                <h4>Tipp vom Profi</h4>
                <p>Fordern Sie Unterlagen frühzeitig an. Manche Ämter haben Bearbeitungszeiten von mehreren Wochen. Ein vollständiges Exposé steigert das Vertrauen der Käufer enorm.</p>
            </div>
        `
    },
    {
        id: '3',
        title: 'Immobilienmarkt Osnabrück 2024: Trends und Prognosen',
        date: '20. Januar 2024',
        category: 'Marktanalyse',
        image: '/images/original_clone/property_background.jpg',
        excerpt: 'Wie entwickeln sich die Preise in der Friedensstadt? Erfahren Sie mehr über die aktuelle Marktsituation und was das für Verkäufer bedeutet.',
        content: `
            <p>Der Immobilienmarkt in Osnabrück und dem Umland zeigt sich auch im Jahr 2024 als dynamisch, aber anspruchsvoller als in den Vorjahren. Die Zinswende hat die Rahmenbedingungen grundlegend verändert.</p>

            <h3>Nachfrage nach energetisch sanierten Objekten</h3>
            <p>Käufer blicken heute kritischer auf die Nebenkosten. Immobilien mit modernen Heizsystemen und guter Dämmung erzielen weiterhin Spitzenpreise, während sanierungsbedürftige Objekte stärkere Preisabschläge erfahren.</p>

            <h3>Beliebte Lagen in Osnabrück</h3>
            <p>Die klassischen Top-Lagen wie der <strong>Westerberg</strong> oder die <strong>Wüste</strong> bleiben hoch im Kurs. Aber auch Randlagen mit guter Anbindung, wie Hellern oder Voxtrup, gewinnen an Attraktivität für Familien.</p>

            <div class="glass-card" style="margin: 2rem 0;">
                <p><strong>Unsere Prognose:</strong> Wir erwarten eine Stabilisierung des Preisniveaus. Qualität und eine transparente Bewertung werden zur entscheidenden Währung im Verkauf.</p>
            </div>

            <h3>Was bedeutet das für Sie?</h3>
            <p>Wenn Sie über einen Verkauf nachdenken, ist eine präzise Marktanalyse wichtiger denn je. Vermeiden Sie "Mondpreise", die die Vermarktungszeit unnötig verlängern. Eine fundierte Wertermittlung ist der Schlüssel zum Erfolg.</p>
        `
    }
];

export default function BlogDetailPage() {
    const params = useParams();
    const id = params.id as string;

    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return (
            <main style={{ paddingTop: '150px', paddingBottom: '100px', backgroundColor: 'var(--bg-primary)', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', color: 'var(--accent-secondary)' }}>Beitrag nicht gefunden</h1>
                    <p style={{ margin: '2rem 0' }}>Der von Ihnen gesuchte Blog-Beitrag existiert gefühlt nicht oder wurde verschoben.</p>
                    <Link href="/blog" className="btn btn-primary">Zurück zum Blog</Link>
                </div>
            </main>
        );
    }

    return (
        <main style={{ paddingTop: '100px', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
            {/* Header / Cover */}
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container">
                    <Link href="/blog" style={{ color: 'var(--accent-primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', fontWeight: 500 }}>
                        ← Zurück zur Übersicht
                    </Link>
                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{post.category}</span>
                    </div>
                    <h1 style={{ fontSize: '3.5rem', color: 'var(--accent-secondary)', lineHeight: 1.2, maxWidth: '900px' }}>{post.title}</h1>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '3rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                        <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>

                    <div
                        className="blog-content"
                        style={{
                            fontSize: '1.2rem',
                            lineHeight: '1.8',
                            color: 'var(--text-secondary)'
                        }}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div style={{ marginTop: '5rem', padding: '3rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Fragen zu diesem Thema?</h3>
                        <p style={{ marginBottom: '2rem' }}>Kontaktieren Sie Marc-André Lasarz für eine persönliche Beratung.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/kontakt" className="btn btn-primary">Jetzt anfragen</Link>
                            <a href="tel:08006648714" className="btn btn-secondary">📞 0800 / 66 48 714</a>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx global>{`
                .blog-content h3 {
                    color: var(--accent-secondary);
                    font-size: 2rem;
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                }
                .blog-content p {
                    margin-bottom: 1.5rem;
                }
                .blog-content ul {
                    margin-bottom: 2rem;
                    padding-left: 1.5rem;
                }
                .blog-content li {
                    margin-bottom: 0.8rem;
                }
                .blog-content strong {
                    color: var(--text-primary);
                }
            `}</style>
        </main>
    );
}
