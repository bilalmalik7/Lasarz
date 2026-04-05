'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const steps = [
    {
        num: '01',
        title: 'Anfrage & Erstgespräch',
        desc: 'Am Telefon oder digital besprechen wir Ihr Anliegen (Verkauf, Erbschaft, Scheidung) und finden heraus, ob ein Kurzgutachten oder ein vollumfängliches Gutachten für Sie das Richtige ist.'
    },
    {
        num: '02',
        title: 'Auftrag',
        desc: 'Sie erhalten ein transparentes Festpreisangebot für unsere Leistungen. Mit Ihrer verbindlichen Beauftragung starten wir den Bewertungsprozess.'
    },
    {
        num: '03',
        title: 'Unterlagen besorgen',
        desc: 'Wir sichten die vorhandenen Dokumente (Grundbuchauszug, Flurkarte, Bauzeichnungen etc.) und unterstützen Sie bei der Einholung fehlender Papiere bei den zuständigen Ämtern.'
    },
    {
        num: '04',
        title: 'Ortstermin (Begehung)',
        desc: 'Wir begehen das Objekt gemeinsam. Zustand, Ausstattungsmerkmale, Modernisierungen sowie etwaige Bauschäden werden von uns fachkundig erfasst und fotografisch dokumentiert.'
    },
    {
        num: '05',
        title: 'Marktrecherche & Erstellung des Verkehrswertgutachtens',
        desc: 'Unter Anwendung normierter Bewertungsverfahren (Sachwert-, Ertragswert-, Vergleichswertverfahren) und der Analyse von Marktdaten des jeweiligen Gutachterausschusses werten wir alle Fakten aus.'
    },
    {
        num: '06',
        title: 'Gutachten',
        desc: 'Sie erhalten Ihr fertiges, rechtssicheres Gutachten als gebundenes Exemplar und/oder als PDF. Alle Ergebnisse erläutern wir Ihnen gerne ausführlich.'
    }
];

export default function ProcessPage() {
    return (
        <main style={{ backgroundColor: 'var(--bg-primary)', overflow: 'hidden' }}>
            {/* Hero Section */}
            <section style={{ 
                position: 'relative', 
                height: '60vh', 
                minHeight: '500px', 
                display: 'flex', 
                alignItems: 'center', 
                paddingTop: '80px',
                color: 'white'
            }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                    <img src="/images/pages/prozess-hero.png" alt="Prozessablauf Immobiliengutachter" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5))' }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Schritt für Schritt</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '1rem 0', color: 'white' }}>
                            Der Weg zu Ihrem Verkehrswertgutachten
                        </h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', opacity: 0.9 }}>
                            Transparenz von der ersten Minute an. So läuft die professionelle Immobilienbewertung bei Lasarz in Osnabrück ab.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Animated Timeline */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ position: 'relative', paddingLeft: '2rem' }}>
                        {/* Vertical line running down */}
                        <div style={{ position: 'absolute', top: 0, left: '3rem', width: '2px', height: '100%', background: 'var(--border-color)', zIndex: 1 }}></div>
                        
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.6 }}
                                style={{ position: 'relative', zIndex: 2, display: 'flex', gap: '2rem', marginBottom: '4rem' }}
                            >
                                <div style={{ 
                                    width: '60px', 
                                    height: '60px', 
                                    borderRadius: '50%', 
                                    backgroundColor: 'var(--accent-primary)', 
                                    color: 'white', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    fontSize: '1.5rem', 
                                    fontWeight: 'bold',
                                    flexShrink: 0,
                                    border: '6px solid var(--bg-primary)',
                                    marginLeft: '-1.8rem' // Align over the vertical line
                                }}>
                                    {step.num}
                                </div>
                                <div className="glass-card" style={{ padding: '2rem', flexGrow: 1, borderTop: '4px solid var(--accent-secondary)' }}>
                                    <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>{step.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1.05rem' }}>{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ paddingBottom: '100px', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>Bereit für den ersten Schritt?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>Starten Sie ganz einfach mit einer unverbindlichen Anfrage.</p>
                    <Link href="/kontakt" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Rückruf anfordern</Link>
                </div>
            </section>

        </main>
    );
}
