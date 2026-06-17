'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Scale, Shield, Trophy, Euro } from 'lucide-react';

const features = [
    {
        icon: <MapPin size={28} strokeWidth={1.8} />,
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        shadow: 'rgba(102, 126, 234, 0.4)',
        title: 'Regionale Expertise',
        desc: 'Jahrelange Erfahrung in Osnabrück garantiert Ihnen eine absolut präzise und verlässliche Wertermittlung vor Ort.'
    },
    {
        icon: <Scale size={28} strokeWidth={1.8} />,
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        shadow: 'rgba(240, 147, 251, 0.4)',
        title: 'Gesetzeskonform',
        desc: 'Als zertifizierter Sachverständiger halte ich alle aktuellen rechtlichen und normativen Standards strikt ein.'
    },
    {
        icon: <Shield size={28} strokeWidth={1.8} />,
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        shadow: 'rgba(79, 172, 254, 0.4)',
        title: 'Unabhängige Gutachten',
        desc: 'Ich arbeite weisungsfrei, neutral und halte mich kompromisslos an den Ehrencodex der Sachverständigenverbände.'
    },
    {
        icon: <Trophy size={28} strokeWidth={1.8} />,
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        shadow: 'rgba(67, 233, 123, 0.4)',
        title: 'Höchste Zertifizierung',
        desc: 'Anerkannt durch renommierte Institutionen (DIA, BVS, REV) für maximale gerichtliche Belastbarkeit.'
    },
    {
        icon: <Euro size={28} strokeWidth={1.8} />,
        gradient: 'linear-gradient(135deg, #c5a36c 0%, #f0d080 100%)',
        shadow: 'rgba(197, 163, 108, 0.4)',
        title: 'Festpreisgarantie',
        desc: 'Absolute Kostentransparenz ohne versteckte Gebühren. Sie wissen im Vorfeld exakt, was Ihr Gutachten kostet.'
    }
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, } }
};

export function OriginalFeatures() {
    return (
        <section style={{
            padding: '110px 0',
            background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 60%, #f8fafc 100%)',
            overflow: 'hidden', position: 'relative'
        }}>
            {/* Subtle background mesh */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: `
                    radial-gradient(circle at 15% 40%, rgba(197,163,108,0.06) 0%, transparent 50%),
                    radial-gradient(circle at 85% 60%, rgba(26,117,141,0.06) 0%, transparent 50%)
                `
            }} />

            <div className="container" style={{ position: 'relative' }}>

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <div className="section-label" style={{ justifyContent: 'center' }}>
                        Unsere Stärken
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                        color: 'var(--accent-secondary)',
                        fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem'
                    }}>
                        Warum Lasarz die richtige Wahl ist
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
                        Als zertifizierter Sachverständiger verbinde ich regionale Expertise mit höchsten Qualitätsstandards.
                    </p>
                </motion.div>

                {/* Feature cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))',
                        gap: '1.5rem',
                        marginBottom: '5rem'
                    }}
                >
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ y: -10, boxShadow: '0 28px 55px rgba(0,0,0,0.13)' }}
                            style={{
                                textAlign: 'center',
                                padding: '2.5rem 1.5rem',
                                background: 'white',
                                borderRadius: '22px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                                border: '1px solid rgba(0,0,0,0.06)',
                                cursor: 'default',
                                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                            }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.15, rotate: 8 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                                style={{
                                    width: '80px', height: '80px',
                                    margin: '0 auto 1.6rem',
                                    background: feature.gradient,
                                    borderRadius: '22px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'white',
                                    boxShadow: `0 12px 30px ${feature.shadow}`
                                }}
                            >
                                {feature.icon}
                            </motion.div>
                            <h3 style={{
                                fontSize: '1.1rem', marginBottom: '0.85rem',
                                color: 'var(--accent-secondary)', fontWeight: 700
                            }}>
                                {feature.title}
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* About box */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    style={{
                        padding: 'clamp(2rem, 5vw, 3.5rem)',
                        background: 'linear-gradient(135deg, #0A192F 0%, #0f2d50 60%, #1a3a5c 100%)',
                        borderRadius: '28px',
                        boxShadow: '0 40px 80px rgba(10,25,47,0.35)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Decorative glow orbs */}
                    <div style={{
                        position: 'absolute', top: '-60px', right: '-60px',
                        width: '320px', height: '320px', borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(197,163,108,0.18) 0%, transparent 70%)',
                        pointerEvents: 'none'
                    }} />
                    <div style={{
                        position: 'absolute', bottom: '-40px', left: '-40px',
                        width: '250px', height: '250px', borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(26,117,141,0.18) 0%, transparent 70%)',
                        pointerEvents: 'none'
                    }} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                            <div style={{
                                width: '64px', height: '64px',
                                background: 'linear-gradient(135deg, #c5a36c, #f0d080)',
                                borderRadius: '18px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '2rem', flexShrink: 0,
                                boxShadow: '0 10px 25px rgba(197,163,108,0.45)'
                            }}><Trophy size={28} strokeWidth={1.8} /></div>
                            <h2 style={{
                                fontSize: 'clamp(1.4rem, 3vw, 2.1rem)',
                                color: 'white', margin: 0, fontWeight: 800, lineHeight: 1.2
                            }}>
                                Premium Immobilienbewertung in Osnabrück
                            </h2>
                        </div>
                        <p style={{ marginBottom: '1rem', fontSize: '1.05rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.82)' }}>
                            Als zertifizierter und anerkannter Immobiliengutachter biete ich Ihnen gerichtsfeste Verkehrswertgutachten und präzise Immobilienbewertungen im Raum Osnabrück sowie deutschlandweit. Egal ob Erbschaft, Scheidung, steuerliche Themen oder Immobilienkauf – ich liefere Ihnen das nötige rechtssichere Fundament.
                        </p>
                        <p style={{ marginBottom: '2.5rem', fontSize: '1.05rem', lineHeight: 1.85, color: 'rgba(255,255,255,0.82)' }}>
                            Darüber hinaus unterstütze ich Sie mit detaillierter Ankaufberatung dabei, teure Fehlkäufe zu vermeiden. Vertrauen Sie auf jahrelange regionale Expertise und höchste zertifizierte Qualitätsstandards.
                        </p>
                        <Link href="/kontakt#kontaktformular" className="shimmer-btn" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                            background: 'linear-gradient(135deg, #c5a36c, #d4b57d)',
                            color: '#0A192F', padding: '1rem 2.5rem',
                            fontSize: '1rem', fontWeight: 800,
                            borderRadius: '50px', textDecoration: 'none',
                            boxShadow: '0 12px 35px rgba(197,163,108,0.5)',
                            letterSpacing: '0.3px'
                        }}>
                            Kostenlose Ersteinschätzung
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
