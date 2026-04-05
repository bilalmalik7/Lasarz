'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HonorarPage() {
    return (
        <main style={{ backgroundColor: 'var(--bg-primary)', overflow: 'hidden' }}>
            {/* Hero Section */}
            <section style={{ 
                position: 'relative', 
                height: '70vh', 
                minHeight: '600px', 
                display: 'flex', 
                alignItems: 'center', 
                paddingTop: '80px',
                color: 'white'
            }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                    <img src="/images/pages/honorar-hero.png" alt="Preise und Honorar Immobiliengutachter" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4))' }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', backgroundColor: 'rgba(26, 117, 141, 0.2)', padding: '0.5rem 1rem', borderRadius: '50px' }}>Transparente Kosten</span>
                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', margin: '1.5rem 0', lineHeight: 1.1, color: 'white' }}>
                            Preise & Honorar
                        </h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '2rem', opacity: 0.9, lineHeight: 1.6 }}>
                            Was kostet ein zertifiziertes Immobiliengutachten in Osnabrück? Wir setzen auf 100% Kostentransparenz ohne versteckte Gebühren.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Models */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-secondary)' }}>Unsere Gutachten-Pakete</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '700px', margin: '1rem auto 0' }}>
                            Wählen Sie die Detailtiefe, die Sie für Ihr Vorhaben (Verkauf, Erbschaft, Scheidung) benötigen.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '2.5rem' }}>
                        {/* Kurzgutachten */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6 }}
                            className="glass-card" style={{ display: 'flex', flexDirection: 'column', padding: '3rem 2rem', borderTop: '4px solid var(--border-color)' }}
                        >
                            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Kurzgutachten</h3>
                            <p style={{ color: 'var(--text-secondary)', height: '60px' }}>Ideal für den außergerichtlichen Hausverkauf oder den internen Familienkreis.</p>
                            <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--accent-secondary)', margin: '1.5rem 0' }}>
                                Abrechnung nach Aufwand oder Festpreis
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flexGrow: 1 }}>
                                {[
                                    '15 - 20 Seiten PDF',
                                    'Außergerichtliche Einigung',
                                    'Detaillierte Vor-Ort Aufnahme',
                                    'Kurzanalyse der Bodenrichtwerte',
                                    'Keine umfangreichen Textausführungen'
                                ].map((feature, i) => (
                                    <li key={i} style={{ padding: '0.8rem 0', borderBottom: '1px solid var(--border-color)', display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                                        <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>✓</span> {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/kontakt" className="btn btn-secondary" style={{ width: '100%', textAlign: 'center' }}>Jetzt anfragen</Link>
                        </motion.div>

                        {/* Verkehrswertgutachten */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass-card" style={{ display: 'flex', flexDirection: 'column', padding: '3rem 2rem', borderTop: '4px solid var(--accent-primary)', transform: 'scale(1.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                        >
                            <div style={{ backgroundColor: 'var(--accent-primary)', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: '1rem' }}>AM BELIEBTESTEN</div>
                            <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Verkehrswertgutachten</h3>
                            <p style={{ color: 'var(--text-secondary)', height: 'height: auto' }}>Das vollumfängliche Gutachten (nach § 194 BauGB) für Finanzämter und Gerichte.</p>
                            <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--accent-secondary)', margin: '1.5rem 0' }}>
                                Abrechnung nach BVS-Honorarrichtlinie
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flexGrow: 1 }}>
                                {[
                                    'Ca. 40 - 60 Seiten hoch detailliert',
                                    'Gerichtsfest (Scheidung, Erbschaft)',
                                    'Anerkennung durch das Finanzamt',
                                    'Umfangreiche Marktdatenrecherche',
                                    'Berücksichtigung aller Baulasten'
                                ].map((feature, i) => (
                                    <li key={i} style={{ padding: '0.8rem 0', borderBottom: '1px solid var(--border-color)', display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                                        <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>✓</span> {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/kontakt" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Gespräch vereinbaren</Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content SEO Section */}
            <section style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2rem', color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>Wie setzen sich die Kosten zusammen?</h2>
                    
                    <div style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Die Honorare für Immobiliengutachter in Osnabrück können sehr unterschiedlich ausfallen. Früher war die Kostenberechnung strikt an die <strong>HOAI</strong> (Honorarordnung für Architekten und Ingenieure) gebunden. Heute sind die Honorare frei verhandelbar.
                        </p>
                        
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: '2rem 0 1rem' }}>BVS-Honorarrichtlinie</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Unsere Verkehrswertgutachten werden fair und transparent nach der Honorarrichtlinie des Bundesverbandes öffentlich bestellter und vereidigter sowie qualifizierter Sachverständiger e.V. (BVS) abgerechnet. Dabei richtet sich das empfohlene Honorar maßgeblich nach dem ermittelten Verkehrswert des Bewertungsobjekts, aber auch nach dem individuellen Recherche- und Ausarbeitungsaufwand.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: '2rem 0 1rem' }}>Pauschalhonorar ("Festpreis")</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Besonders bei Standard-Wohnimmobilien (Einfamilienhaus, Wohnung) bieten wir Ihnen im Rahmen unseres kostenlosen Vorgesprächs ein <strong>Pauschalhonorar</strong> an. So haben Sie von Anfang an absolute Planungssicherheit und wissen exakt, welche Kosten für das Gutachten auf Sie in der Region Osnabrück zukommen, ohne böse Überraschungen.
                        </p>

                        <div className="glass-card" style={{ marginTop: '3rem', padding: '2rem', borderLeft: '4px solid var(--accent-primary)' }}>
                            <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Warum Sie beim Gutachter nicht an der falschen Stelle sparen sollten</h4>
                            <p>
                                Ein fehlerhaftes oder schlecht begründetes "Billig-Gutachten" kann im schlimmsten Fall vom Finanzamt zurückgewiesen werden oder vor einem Familiengericht (bei Scheidungen) für nichtig erklärt werden. Investieren Sie in ein DIN EN ISO/IEC 17024 zertifiziertes Gutachten – das ist das einzige Gütesiegel, das die höchste rechtliche Anerkennung in Deutschland genießt.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
