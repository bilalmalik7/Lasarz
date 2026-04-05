'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const faqs = [
    {
        q: "Wie lange dauert die Erstellung eines Verkehrswertgutachtens?",
        a: "Nach Durchführung des Ortstermins und Vorliegen aller erforderlichen Unterlagen (wie Grundbuchauszug oder Bauzeichnungen) benötigen wir in der Regel 2 bis 3 Wochen für die Ausarbeitung des Gutachtens. Kurzgutachten sind oft schon nach 1 Woche fertig."
    },
    {
        q: "Erkennt das Finanzamt Ihr Gutachten bei Erbschaft oder Schenkung an?",
        a: "Ja, zwingend! Wir erstellen Verkehrswertgutachten nach § 194 BauGB. Ein solches Gutachten von einem zertifizierten Sachverständigen ist das rechtssichere Mittel zur Nachweisbarkeit des 'niedrigeren gemeinen Werts' gegenüber dem Finanzamt (§ 198 BewG). Online-Bewertungen oder Makler-Schätzungen reichen dem Finanzamt hingegen nicht aus."
    },
    {
        q: "Muss ich die Unterlagen alle selbst besorgen?",
        a: "Sie müssen nichts alleine machen. Wir sagen Ihnen beim Erstgespräch ganz genau, welche Unterlagen fehlen, und helfen Ihnen bei der Einholung (z. B. beim Katasteramt, Grundbuchamt oder Bauamt in Osnabrück)."
    },
    {
        q: "Was ist der Unterschied zwischen Wertschätzung und Verkehrswertgutachten?",
        a: "Eine kostenlose Kurzbewertung (Wertschätzung durch einen Makler) dient nur einer groben, verkaufsorientierten Preiseinschätzung. Ein Verkehrswertgutachten ist eine hochqualitative 30-60 seitige Ausarbeitung, die gerichtsfest ist und auf normierten Rechenverfahren (Ertrag, Sachwert, Vergleichswert) basiert und vor Behörden Bestand hat."
    },
    {
        q: "Was kostet die Bewertung meiner Immobilie in Osnabrück?",
        a: "Dies hängt von der Art der Immobilie und dem Zweck des Gutachtens ab. Ein Kurzgutachten startet ab 750 €, ein volles gerichtsfestes Verkehrswertgutachten ab ca. 1.800 €. Wir bieten in jedem Fall transparente Festpreise nach einem kostenlosen Kennenlerngespräch."
    },
    {
        q: "Wir lassen uns scheiden. Benötigen wir zwei getrennte Gutachten?",
        a: "Nein! Im Idealfall beauftragen Sie uns als neutralen Sachverständigen gemeinsam für ein so genanntes 'Schiedsgutachten'. Das spart Ihnen immense Kosten, vermeidet jahrelange Gerichtsstreitigkeiten und liefert eine neutrale Basis für den Zugewinnausgleich."
    },
    {
        q: "Welche Qualifizierung hat ein Dipl.-Sachverständiger (DIA) für Immobilienbewertung?",
        a: "Ein Dipl.-Sachverständiger (DIA) hat ein spezielles, anerkanntes Studium an der Deutschen Immobilien-Akademie absolviert und verfügt über ein Höchstmaß an Fachexpertise. Zudem unterliegen zertifizierte Sachverständige (DIAZert) strengen Qualitätskontrollen. Dies garantiert ein objektives, unabhängiges und marktgerechtes Gutachten."
    },
    {
        q: "Warum sollte ich keinen Immobilienmakler für die Wertermittlung beauftragen?",
        a: "Immobilienmakler bieten oft kostenlose Schätzungen an, die jedoch vor allem auf den schnellen Verkauf abzielen. Sie sind oft nicht neutral oder gerichtlich anerkannt. Ein unabhängiges Sachverständigenbüro arbeitet hingegen weisungsfrei, transparent und rechtssicher (z.B. für Finanzämter oder Gerichte) auf Basis gesetzlich normierter Verfahren."
    },
    {
        q: "Können Sie auch Sonderimmobilien oder Spezialfälle bewerten?",
        a: "Ja, als qualifiziertes Sachverständigenbüro bewerten wir neben klassischen Ein- und Mehrfamilienhäusern auch komplexe Gewerbeimmobilien, Rechte (wie Erbbaurechte, Wohnrechte) und Belastungen sowie Spezialimmobilien. Die entsprechenden Verfahren sind uns durch unsere Ausbildung bestens vertraut."
    }
];

export default function FAQPage() {
    return (
        <main style={{ backgroundColor: 'var(--bg-primary)', overflow: 'hidden' }}>
            {/* Hero Section */}
            <section style={{ 
                position: 'relative', 
                height: '50vh', 
                minHeight: '400px', 
                display: 'flex', 
                alignItems: 'center', 
                paddingTop: '80px',
                color: 'white'
            }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                    <img src="/images/pages/faq-hero.png" alt="FAQ Immobilienbewertung" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3))' }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '1rem 0', color: 'white' }}>
                            Häufige Fragen (FAQ)
                        </h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '600px', opacity: 0.9 }}>
                            Alles, was Sie über unsere Gutachten in der Region Osnabrück, Münster und Bielefeld wissen müssen.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* AI Generated Accordion */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} faq={faq} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

function AccordionItem({ faq, index }: { faq: any, index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card"
            style={{ padding: '0', overflow: 'hidden' }}
        >
            <button 
                onClick={() => setIsOpen(!isOpen)}
                style={{ 
                    width: '100%', 
                    padding: '1.5rem 2rem', 
                    textAlign: 'left', 
                    background: 'none', 
                    border: 'none', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer'
                }}
            >
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', margin: 0, fontWeight: 600 }}>{faq.q}</h3>
                <span style={{ 
                    fontSize: '1.5rem', 
                    color: 'var(--accent-primary)',
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.3s ease'
                }}>
                    +
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div style={{ padding: '0 2rem 1.5rem 2rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            {faq.a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
