'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const cases = [
    {
        title: 'Erbschaftsgutachten Einfamilienhaus',
        location: 'Osnabrück (Westerberg)',
        category: 'Erbschaft',
        desc: 'Das Finanzamt hatte den Wert der Immobilie im standardisierten Verfahren massiv zu hoch angesetzt. Durch unser 45-seitiges Verkehrswertgutachten konnten wertbeeinflussende Risse in der Bausubstanz sowie der sanierungsbedürftige energetische Zustand rechtssicher nachgewiesen werden. Die Erbschaftssteuer für unsere Mandanten sank dadurch um über 35.000 €.',
        image: '/images/original_clone/property_background.jpg'
    },
    {
        title: 'Schiedsgutachten bei Scheidung',
        location: 'Münster (Gievenbeck)',
        category: 'Scheidung',
        desc: 'Die getrennten Eheleute konnten sich nicht über den Auszahlungsbetrag einigen. Wir wurden als neutraler Gutachter für ein zertifiziertes Verkehrswertgutachten bestellt. Durch unsere unparteiische, hoch präzise Marktdatenanalyse konnte ein Betrag ermittelt werden, der von beiden Parteien sowie vom Familiengericht reibungslos akzeptiert wurde. Ein jahrelanger Rechtsstreit wurde vermieden.',
        image: '/images/pages/modern-home.png'
    },
    {
        title: 'Verkaufsgutachten Mehrfamilienhaus',
        location: 'Bielefeld (Schildesche)',
        category: 'Verkauf',
        desc: 'Der Eigentümer eines 6-Parteien-Hauses wollte verkaufen, kannte aber das Potenzial seiner Immobilie nicht exakt. Wir bewerteten das Objekt im Ertragswertverfahren und zeigten zudem das Entwicklungspotenzial im Dachgeschoss auf. Mit unserem Gutachten in der Hand konnte der Eigentümer einen um 15 % höheren Verkaufspreis am Markt durchsetzen.',
        image: '/images/pages/elegant-villa.png'
    },
    {
        title: 'Beleihungswertgutachten Gewerbe',
        location: 'Rheine',
        category: 'Finanzierung',
        desc: 'Für die Umfinanzierung einer Gewerbehalle forderte die Bank ein fundiertes Wertgutachten. Unter strenger Berücksichtigung der Beleihungswertverordnung (BelWertV) erstellten wir innerhalb von 14 Tagen ein transparentes Gutachten. Die Finanzierung konnte ohne Verzögerungen durch die Bank freigegeben werden.',
        image: '/images/original_clone/MG_1880-1024x690.jpg'
    }
];

export default function ReferenzenPage() {
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
                    <img src="/images/pages/referenzen-hero.png" alt="Zertifizierte Wertgutachten Referenzen" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3))' }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', backgroundColor: 'rgba(26, 117, 141, 0.2)', padding: '0.5rem 1rem', borderRadius: '50px' }}>Unsere Erfolge</span>
                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', margin: '1.5rem 0', lineHeight: 1.1, color: 'white' }}>
                            Referenz & Fallstudien
                        </h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '650px', marginBottom: '2rem', opacity: 0.9, lineHeight: 1.6 }}>
                            Erfahren Sie anhand echter Fallbeispiele, wie Immobilienbewertung nach DIN EN ISO/IEC 17024 unseren Mandanten Geld, Zeit und Nerven gespart hat.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Cases Grid */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {cases.map((scenario, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="glass-card"
                                style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                            >
                                <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                                    <motion.img 
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                        src={scenario.image} 
                                        alt={scenario.title} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        onError={(e: any) => { e.target.src = '/images/original_clone/property_background.jpg' }} // Fallback if image path is not found yet
                                    />
                                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'var(--accent-primary)', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                        {scenario.category}
                                    </div>
                                </div>
                                <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ color: 'var(--accent-primary)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>📍 {scenario.location}</div>
                                    <h3 style={{ fontSize: '1.4rem', color: 'var(--accent-secondary)', marginBottom: '1rem' }}>{scenario.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, flexGrow: 1 }}>{scenario.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '80px 0', borderTop: '1px solid var(--border-color)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                     <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--accent-secondary)' }}>Ihre Immobilie ist der nächste Fall?</h2>
                     <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                         Vertrauen Sie auf zertifizierte Expertise für Ihr persönliches Verkehrswertgutachten.
                     </p>
                     <Link href="/kontakt" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>Zum Kontaktformular</Link>
                </div>
            </section>
        </main>
    );
}
