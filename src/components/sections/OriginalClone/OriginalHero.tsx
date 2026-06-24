'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Clock } from 'lucide-react';

interface OriginalHeroProps {
    city?: string;
    theme?: {
        overlay?: string;
        primary?: string;
    };
}

export function OriginalHero({ city, theme }: OriginalHeroProps) {
    const title = city
        ? `Immobiliengutachter in ${city}`
        : 'Präzise Immobilienbewertung mit Sicherheit und Weitblick';

    const subtitle = city
        ? `Verkehrswertgutachten § 194 BauGB und Wertindikationen von Ihrem zertifizierten Dipl.-Sachverständigen (DIA) in ${city}`
        : 'Verkehrswertgutachten nach § 194 BauGB, Ankaufberatung und neutrale Marktwertermittlung nach ImmoWertV – gerichtsfest und vom Finanzamt anerkannt.';

    const cardStats = [
        { icon: <Award size={18} strokeWidth={1.8} />, label: 'DIAzert · REV' },
        { icon: <ShieldCheck size={18} strokeWidth={1.8} />, label: 'Gerichtsfest' },
        { icon: <Clock size={18} strokeWidth={1.8} />, label: '19+ Jahre' },
    ];

    return (
        <section style={{
            position: 'relative',
            minHeight: '95vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '110px',
            color: 'white',
            overflow: 'hidden'
        }}>
            {/* Background Image */}
            <img
                src="/images/realistic_colorful_hero_bg.png"
                alt="Wunderschöne Immobilien"
                style={{
                    position: 'absolute', top: 0, left: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center', zIndex: 0
                }}
                loading="eager"
            />

            {/* Gradient overlay */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(5,15,35,0.93) 0%, rgba(8,45,75,0.78) 50%, rgba(10,25,47,0.90) 100%)',
                zIndex: 1
            }} />

            {/* Animated orb 1 */}
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.45, 0.25] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute', top: '8%', right: '8%',
                    width: '650px', height: '650px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(197, 163, 108, 0.22) 0%, transparent 70%)',
                    zIndex: 1, pointerEvents: 'none'
                }}
            />
            {/* Animated orb 2 */}
            <motion.div
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.35, 0.15] }}
                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute', bottom: '5%', left: '3%',
                    width: '450px', height: '450px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(26, 117, 141, 0.25) 0%, transparent 70%)',
                    zIndex: 1, pointerEvents: 'none'
                }}
            />

            {/* ===== INLINE STYLES FOR CARD ===== */}
            <style>{`
                @keyframes hero-card-float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                .hero-card-float {
                    animation: hero-card-float 6s ease-in-out infinite;
                }
                .hero-stat-chip:hover {
                    background: rgba(197, 163, 108, 0.25) !important;
                    border-color: rgba(197, 163, 108, 0.6) !important;
                    transform: translateY(-2px);
                }
                @media (max-width: 968px) {
                    .hero-two-col {
                        flex-direction: column !important;
                        gap: 2.5rem !important;
                    }
                    .hero-card-col {
                        display: flex;
                        justify-content: center;
                    }
                    .hero-card-float {
                        animation: none;
                    }
                }
            `}</style>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                {/* Two-column layout */}
                <div className="hero-two-col" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3.5rem',
                }}>
                    {/* ===== LEFT COLUMN: Text Content ===== */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        style={{ flex: '1 1 55%', minWidth: 0 }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                                background: 'linear-gradient(135deg, rgba(197,163,108,0.22), rgba(197,163,108,0.10))',
                                backdropFilter: 'blur(16px)',
                                border: '1px solid rgba(197,163,108,0.55)',
                                padding: '0.55rem 1.4rem', borderRadius: '50px',
                                color: '#e8cc90', fontWeight: 700, fontSize: '0.83rem',
                                marginBottom: '1.75rem', letterSpacing: '1.5px', textTransform: 'uppercase'
                            }}
                        >
                            <motion.span
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                style={{ display: 'inline-block', fontSize: '0.9rem' }}
                            >✓</motion.span>
                            ZERTIFIZIERTE SACHVERSTÄNDIGE
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.85, delay: 0.25 }}
                            style={{
                                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                                fontWeight: 800, marginBottom: '1.5rem',
                                color: 'white', lineHeight: 1.08,
                                textShadow: '0 4px 30px rgba(0,0,0,0.5)'
                            }}
                        >
                            {title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.85, delay: 0.4 }}
                            style={{
                                fontSize: '1.15rem', fontWeight: 400,
                                marginBottom: '2.5rem', color: 'rgba(255,255,255,0.85)',
                                lineHeight: 1.75, maxWidth: '600px',
                            }}
                        >
                            {subtitle}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}
                        >
                            <Link href="/kontakt#kontaktformular" className="shimmer-btn" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: 'linear-gradient(135deg, #c5a36c 0%, #d4b57d 50%, #c5a36c 100%)',
                                backgroundSize: '200% 100%',
                                color: '#0A192F', border: 'none',
                                padding: '1.05rem 2.5rem', fontSize: '1rem',
                                fontWeight: 800, borderRadius: '50px',
                                boxShadow: '0 12px 35px rgba(197,163,108,0.55)',
                                transition: 'all 0.3s ease', textDecoration: 'none',
                                letterSpacing: '0.3px'
                            }}>
                                Kostenlose Erstberatung
                            </Link>
                            <Link href="#bewertung" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: 'rgba(255,255,255,0.09)',
                                backdropFilter: 'blur(20px)',
                                color: 'white',
                                border: '1.5px solid rgba(255,255,255,0.35)',
                                padding: '1.05rem 2.5rem', fontSize: '1rem',
                                fontWeight: 700, borderRadius: '50px',
                                transition: 'all 0.3s ease', textDecoration: 'none'
                            }}>
                                Leistungen ansehen
                            </Link>
                        </motion.div>

                        {/* Certifications strip */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.3 }}
                        >
                            <p style={{
                                fontSize: '0.75rem', marginBottom: '0.85rem',
                                color: 'rgba(255,255,255,0.55)', fontWeight: 700,
                                letterSpacing: '2.5px', textTransform: 'uppercase'
                            }}>
                                Zertifizierungen &amp; Mitgliedschaften:
                            </p>
                            <div style={{
                                display: 'inline-flex', gap: '1.5rem', alignItems: 'center',
                                flexWrap: 'wrap',
                                background: 'rgba(255,255,255,0.97)',
                                padding: '0.8rem 1.5rem', borderRadius: '14px',
                                boxShadow: '0 25px 55px rgba(0,0,0,0.35)'
                            }}>
                                <img src="/images/original_clone/bvs_e_v_logo.jpeg" alt="BVS" style={{ height: '35px', objectFit: 'contain' }} loading="lazy" />
                                <img src="/images/original_clone/NEU-Logo-DIAzert_7-09-300x228.jpg" alt="DIA Zertifikat" style={{ height: '35px', objectFit: 'contain' }} loading="lazy" />
                                <img src="/images/original_clone/REV-Siegel_2018-002.jpg" alt="REV Siegel" style={{ height: '42px', objectFit: 'contain' }} loading="lazy" />
                                <img src="/images/original_clone/Stempel-DIAZert-2025.jpg" alt="DIA Zert Stempel" style={{ height: '42px', objectFit: 'contain' }} loading="lazy" />
                                <img src="/images/original_clone/SV-R-Immo-D3_042028_ger_tc_p-182x300.jpg" alt="SV-R Zertifizierung" style={{ height: '42px', objectFit: 'contain' }} loading="lazy" />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* ===== RIGHT COLUMN: Expert Card ===== */}
                    <motion.div
                        className="hero-card-col"
                        initial={{ opacity: 0, x: 60, scale: 0.92 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                        style={{ flex: '1 1 40%', minWidth: '320px', maxWidth: '440px' }}
                    >
                        <div className="hero-card-float" style={{
                            background: 'linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))',
                            backdropFilter: 'blur(24px)',
                            WebkitBackdropFilter: 'blur(24px)',
                            border: '1px solid rgba(255,255,255,0.18)',
                            borderRadius: '24px',
                            padding: '2rem',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)',
                            position: 'relative',
                            overflow: 'hidden',
                        }}>
                            {/* Subtle gold accent glow behind the card */}
                            <div style={{
                                position: 'absolute',
                                top: '-30%', right: '-20%',
                                width: '250px', height: '250px',
                                background: 'radial-gradient(circle, rgba(197,163,108,0.2) 0%, transparent 70%)',
                                borderRadius: '50%',
                                pointerEvents: 'none',
                            }} />

                            {/* Portrait photo */}
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                marginBottom: '1.5rem',
                                boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
                            }}>
                                <img
                                    src="/images/portrait.jpg"
                                    alt="Marc Lasarz – Sachverständiger für Immobilienbewertung"
                                    style={{
                                        width: '100%',
                                        height: '280px',
                                        objectFit: 'cover',
                                        objectPosition: 'center top',
                                        display: 'block',
                                    }}
                                    loading="eager"
                                />
                                {/* Gold bottom border accent */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0, left: 0, right: 0,
                                    height: '3px',
                                    background: 'linear-gradient(90deg, transparent, #c5a36c, #e8cc90, #c5a36c, transparent)',
                                }} />
                            </div>

                            {/* Name & Title */}
                            <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
                                <h3 style={{
                                    fontSize: '1.3rem',
                                    fontWeight: 700,
                                    color: 'white',
                                    marginBottom: '0.3rem',
                                    letterSpacing: '0.3px',
                                }}>
                                    Marc-André Lasarz
                                </h3>
                                <p style={{
                                    fontSize: '0.79rem',
                                    color: '#e8cc90',
                                    fontWeight: 600,
                                    letterSpacing: '0.8px',
                                    textTransform: 'uppercase',
                                }}>
                                    Dipl.-Sachverständiger (DIA) · B.A. Real Estate
                                </p>
                            </div>

                            {/* Divider */}
                            <div style={{
                                height: '1px',
                                background: 'linear-gradient(90deg, transparent, rgba(197,163,108,0.4), transparent)',
                                marginBottom: '1.25rem',
                            }} />

                            {/* Stats chips – 3 in one row */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '0.5rem',
                            }}>
                                {cardStats.map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        className="hero-stat-chip"
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.55rem',
                                            background: 'rgba(255,255,255,0.07)',
                                            border: '1px solid rgba(255,255,255,0.12)',
                                            borderRadius: '12px',
                                            padding: '0.65rem 0.8rem',
                                            transition: 'all 0.3s ease',
                                            cursor: 'default',
                                        }}
                                    >
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '8px',
                                            background: 'linear-gradient(135deg, rgba(197,163,108,0.25), rgba(197,163,108,0.1))',
                                            color: '#e8cc90',
                                            flexShrink: 0,
                                        }}>
                                            {stat.icon}
                                        </div>
                                        <span style={{
                                            fontSize: '0.78rem',
                                            fontWeight: 600,
                                            color: 'rgba(255,255,255,0.88)',
                                            lineHeight: 1.3,
                                        }}>
                                            {stat.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
