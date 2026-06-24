'use client';
import { motion } from 'framer-motion';
import { Scale, Timer, FileText, Target } from 'lucide-react';
import Link from 'next/link';

const packages = [
    {
        name: 'Verkehrswertgutachten',
        icon: <Scale size={28} />,
        gradient: 'linear-gradient(135deg, #0A192F 0%, #1a3a5c 100%)',
        badgeGradient: 'linear-gradient(135deg, #c5a36c, #f0d080)',
        popular: true,
        features: [
            'Gerichtsfest & vom Finanzamt anerkannt',
            'Ortsbegehung durch Sachverständigen',
            'Prüfung von Baulasten & Altlastenkataster',
            'Ausführliche Abhandlung (ca. 60–100 Seiten)',
            'Festpreisgarantie ohne Nachbesserung',
        ],
    },
    {
        name: 'Restnutzungsdauergutachten',
        icon: <Timer size={28} />,
        gradient: 'linear-gradient(135deg, #0d7a4e 0%, #10b981 100%)',
        badgeGradient: null,
        popular: false,
        features: [
            'Kürzere Nutzungsdauer nachweisen',
            'Höhere AfA & Steuerersparnis für Vermieter',
            'Ortsbegehung durch Sachverständigen',
            'Schriftliche und fundierte Abhandlung',
        ],
    },
    {
        name: 'Kurzgutachten',
        icon: <FileText size={28} />,
        gradient: 'linear-gradient(135deg, #c5a36c 0%, #d4b57d 100%)',
        badgeGradient: null,
        popular: false,
        features: [
            'Präzise Wertermittlung nach ImmoWertV',
            'Für private Zwecke & außergerichtliche Einigung',
            'Ortsbegehung durch Sachverständigen',
            'Kompakte Abhandlung (ca. 15–20 Seiten)',
        ],
    }
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
};

const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, } }
};

export function GutachtenPackages() {
    return (
        <section style={{
            padding: '110px 0',
            background: 'var(--bg-primary)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Subtle background decoration */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: `
                    radial-gradient(circle at 20% 30%, rgba(10,25,47,0.04) 0%, transparent 50%),
                    radial-gradient(circle at 80% 70%, rgba(197,163,108,0.05) 0%, transparent 50%)
                `
            }} />

            <div className="container" style={{ position: 'relative' }}>

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4.5rem' }}
                >
                    <div className="section-label" style={{ justifyContent: 'center' }}>
                        Unsere Leistungen
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                        color: 'var(--accent-secondary)',
                        fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem'
                    }}>
                        Für jeden Anlass das richtige Gutachten
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
                        Erstellt von <strong>Dipl.-Sachverständigen (DIA)</strong> nach ImmoWertV und § 194 BauGB. Unsere <strong>Festpreisgarantie</strong> sichert volle Kostentransparenz – ohne versteckte Kosten.
                    </p>
                </motion.div>

                {/* Package cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 270px), 1fr))',
                        gap: '2rem',
                        alignItems: 'stretch',
                    }}
                >
                    {packages.map((pkg) => (
                        <motion.div
                            key={pkg.name}
                            variants={cardVariants}
                            whileHover={!pkg.popular ? { y: -8, boxShadow: '0 28px 55px rgba(0,0,0,0.12)' } : {}}
                            style={{
                                position: 'relative',
                                borderRadius: '24px',
                                padding: '2.5rem 2rem 3rem',
                                boxShadow: pkg.popular
                                    ? '0 30px 70px rgba(10,25,47,0.35)'
                                    : '0 6px 28px rgba(0,0,0,0.07)',
                                border: pkg.popular ? 'none' : '1px solid rgba(0,0,0,0.07)',
                                display: 'flex',
                                flexDirection: 'column',
                                transform: pkg.popular ? 'scale(1.04)' : 'scale(1)',
                                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            }}
                        >
                            {/* Background layer for clipping effects without clipping the badge */}
                            <div style={{
                                position: 'absolute', inset: 0, borderRadius: '24px', overflow: 'hidden',
                                background: pkg.popular
                                    ? 'linear-gradient(160deg, #0A192F 0%, #0f2d50 60%, #1a3a5c 100%)'
                                    : 'var(--bg-secondary)',
                                zIndex: 0
                            }}>
                                {/* Popular glow orb */}
                                {pkg.popular && (
                                    <div style={{
                                        position: 'absolute', top: '-40px', right: '-40px',
                                        width: '200px', height: '200px', borderRadius: '50%',
                                        background: 'radial-gradient(circle, rgba(197,163,108,0.2) 0%, transparent 70%)',
                                        pointerEvents: 'none'
                                    }} />
                                )}
                            </div>

                            {/* Popular badge */}
                            {pkg.popular && (
                                <div style={{
                                    position: 'absolute', top: '-14px', left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'linear-gradient(135deg, #c5a36c, #f0d080)',
                                    color: '#0A192F',
                                    padding: '6px 20px', borderRadius: '50px',
                                    fontSize: '0.78rem', fontWeight: 800,
                                    letterSpacing: '1px', textTransform: 'uppercase',
                                    whiteSpace: 'nowrap',
                                    boxShadow: '0 6px 20px rgba(197,163,108,0.5)',
                                    zIndex: 10
                                }}>
                                    ★ Empfohlen
                                </div>
                            )}

                            {/* Icon + Name */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem', position: 'relative', zIndex: 1 }}>
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 6 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    style={{
                                        width: '62px', height: '62px',
                                        borderRadius: '16px',
                                        background: pkg.popular
                                            ? 'linear-gradient(135deg, rgba(197,163,108,0.25), rgba(197,163,108,0.12))'
                                            : pkg.gradient,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '1.9rem', flexShrink: 0,
                                        boxShadow: pkg.popular
                                            ? '0 6px 20px rgba(197,163,108,0.3)'
                                            : '0 8px 24px rgba(0,0,0,0.18)'
                                    }}
                                >
                                    {pkg.icon}
                                </motion.div>
                                <h3 style={{
                                    fontSize: '1.1rem',
                                    color: pkg.popular ? 'white' : 'var(--text-primary)',
                                    lineHeight: 1.3, fontWeight: 700
                                }}>
                                    {pkg.name}
                                </h3>
                            </div>

                            {/* Features list */}
                            <ul style={{
                                listStyle: 'none',
                                display: 'flex', flexDirection: 'column',
                                gap: '0.85rem', flex: 1, marginBottom: '2rem',
                                position: 'relative', zIndex: 1
                            }}>
                                {pkg.features.map((f, i) => (
                                    <li key={i} style={{
                                        display: 'flex', alignItems: 'flex-start',
                                        gap: '0.75rem',
                                        color: pkg.popular ? 'rgba(255,255,255,0.88)' : 'var(--text-secondary)',
                                        fontSize: '0.92rem', lineHeight: 1.55,
                                    }}>
                                        <span style={{
                                            color: pkg.popular ? '#7dffcc' : '#c5a36c',
                                            marginTop: '1px', flexShrink: 0, fontWeight: 700
                                        }}>✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/kontakt#kontaktformular" className="shimmer-btn" style={{
                                display: 'block',
                                background: pkg.popular
                                    ? 'linear-gradient(135deg, #c5a36c, #d4b57d)'
                                    : 'linear-gradient(135deg, #0A192F, #1a3a5c)',
                                color: pkg.popular ? '#0A192F' : 'white',
                                border: 'none',
                                padding: '0.9rem 1.5rem',
                                borderRadius: '50px',
                                textAlign: 'center',
                                fontWeight: 800,
                                width: '100%',
                                textDecoration: 'none',
                                fontSize: '0.95rem',
                                boxShadow: pkg.popular
                                    ? '0 10px 28px rgba(197,163,108,0.45)'
                                    : '0 8px 22px rgba(10,25,47,0.25)',
                                position: 'relative', zIndex: 1
                            }}>
                                <Target size={18} /> Jetzt anfragen
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
