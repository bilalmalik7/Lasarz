'use client';
import { useState } from 'react';

export function FAQ() {
    const faqs = [
        {
            question: 'Wann macht ein Kurzgutachten Sinn?',
            answer: 'Ein Kurzgutachten eignet sich hervorragend für private Anlässe wie den internen Verkauf innerhalb der Familie, Scheidungen im Einvernehmen oder einfach die schnelle Einschätzung vor einem Kauf.'
        },
        {
            question: 'Ist ein Verkehrswertgutachten vor Gericht gültig?',
            answer: 'Ja, unsere Verkehrswertgutachten nach § 194 BauGB sind gerichts- und rechtssicher. Sie können bei Auseinandersetzungen, Scheidungen, Erbschaftssteuer oder Vormundschaften herangezogen werden.'
        },
        {
            question: 'Wie lange dauert die Erstellung eines Gutachtens?',
            answer: 'Je nach Art der Immobilie und Vollständigkeit der Unterlagen benötigen wir in der Regel ca. 2-4 Wochen ab dem Ortstermin.'
        },
        {
            question: 'Welche Unterlagen werden benötigt?',
            answer: 'Wir benötigen meist Auszüge aus dem Grundbuch, Flurkarte, Bauzeichnungen, Wohnflächenberechnung und ggf. Mietverträge. Gerne übernehmen wir auch die Beschaffung für Sie.'
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className="text-gradient text-center animate-fade-in" style={{ fontSize: '2.5rem', marginBottom: 'var(--space-lg)' }}>Häufig gestellte Fragen</h2>

                <div className="flex-col gap-sm">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="glass-card animate-fade-in"
                            style={{ cursor: 'pointer', animationDelay: `${index * 0.1}s` }}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{faq.question}</h3>
                                <span style={{ fontSize: '1.5rem', color: 'var(--accent-primary)', transition: 'transform 0.3s', transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0)' }}>
                                    +
                                </span>
                            </div>

                            <div style={{
                                maxHeight: openIndex === index ? '200px' : '0',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease-in-out',
                                opacity: openIndex === index ? 1 : 0,
                                marginTop: openIndex === index ? 'var(--space-sm)' : '0'
                            }}>
                                <p style={{ color: 'var(--text-secondary)' }}>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
