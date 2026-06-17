'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, Star, Trophy, MapPin } from 'lucide-react';

export function AboutIntro() {
    const stats = [
        { value: '2.500+', label: 'Gutachten erstellt', icon: <FileText size={22} strokeWidth={1.8} /> },
        { value: '98%', label: 'Kundenzufriedenheit', icon: <Star size={22} strokeWidth={1.8} /> },
        { value: '15+', label: 'Jahre Erfahrung', icon: <Trophy size={22} strokeWidth={1.8} /> },
        { value: '6', label: 'Standorte', icon: <MapPin size={22} strokeWidth={1.8} /> },
    ];

    return (
        <section style={{
            position: 'relative',
            padding: '120px 0',
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            overflow: 'hidden',
        }}>
            {/* Gradient overlay */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(5,12,28,0.95) 0%, rgba(8,42,72,0.88) 50%, rgba(10,25,47,0.92) 100%)',
                zIndex: 1,
            }} />

            {/* Decorative orbs */}
            <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.12, 0.22, 0.12] }}
                transition={{ duration: 9, repeat: Infinity }}
                style={{
                    position: 'absolute', top: '5%', right: '3%',
                    width: '450px', height: '450px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(197,163,108,0.2) 0%, transparent 70%)',
                    zIndex: 1, pointerEvents: 'none'
                }}
            />
            <motion.div
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 11, repeat: Infinity }}
                style={{
                    position: 'absolute', bottom: '5%', left: '3%',
                    width: '350px', height: '350px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(26,117,141,0.22) 0%, transparent 70%)',
                    zIndex: 1, pointerEvents: 'none'
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'rgba(197,163,108,0.18)',
                            backdropFilter: 'blur(15px)',
                            color: '#e8cc90',
                            padding: '0.55rem 1.4rem', borderRadius: '50px',
                            fontSize: '0.83rem', fontWeight: 700,
                            letterSpacing: '2px', textTransform: 'uppercase',
                            marginBottom: '2rem',
                            border: '1px solid rgba(197,163,108,0.4)',
                        }}
                    >
                        Immobilienbewertung Lasarz
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        style={{
                            fontSize: 'clamp(1.9rem, 4vw, 3.2rem)',
                            color: 'white', marginBottom: '2rem',
                            lineHeight: 1.25, fontWeight: 800,
                            textShadow: '0 4px 25px rgba(0,0,0,0.4)'
                        }}
                    >
                        Als <strong style={{ color: '#e8cc90' }}>zertifizierter Immobiliengutachter</strong> erstelle ich rechtssichere{' '}
                        <span style={{ color: '#e8cc90' }}>Verkehrswertgutachten</span> im Sinne des § 194 BauGB
                    </motion.h2>

                    {/* Body text */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.2 }}
                        style={{
                            fontSize: '1.1rem', color: 'rgba(255,255,255,0.88)',
                            lineHeight: 1.9, marginBottom: '1.5rem',
                            maxWidth: '800px', margin: '0 auto 1.5rem'
                        }}
                    >
                        Ich ermittle unabhängig und fair den Marktwert Ihrer Immobilie. Als Gutachter von Lasarz Immobilienbewertung verfasse ich professionelle Immobiliengutachten, die bei Gerichten anerkannt sind und vom Finanzamt akzeptiert werden – stets auf Basis des BauGB und der ImmoWertV.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65, delay: 0.3 }}
                        style={{
                            fontSize: '1.1rem', color: 'rgba(255,255,255,0.88)',
                            lineHeight: 1.9, marginBottom: '3.5rem',
                            maxWidth: '800px', margin: '0 auto 3.5rem'
                        }}
                    >
                        Selbstverständlich arbeite ich auch <strong style={{ color: 'white' }}>Kurzgutachten</strong> für private Zwecke aus und unterstütze Sie bei{' '}
                        <strong style={{ color: 'white' }}>Restnutzungsdauer-Gutachten</strong> zur Optimierung Ihrer steuerlichen Abschreibungen.
                    </motion.p>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        style={{
                            display: 'flex', gap: '1.25rem', justifyContent: 'center',
                            flexWrap: 'wrap', marginBottom: '3rem'
                        }}
                    >
                        {stats.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.88 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                                whileHover={{ scale: 1.06, y: -4 }}
                                style={{
                                    textAlign: 'center',
                                    background: 'rgba(255,255,255,0.08)',
                                    backdropFilter: 'blur(18px)',
                                    border: '1px solid rgba(255,255,255,0.16)',
                                    borderRadius: '18px',
                                    padding: '1.5rem 2rem',
                                    minWidth: '130px',
                                    cursor: 'default'
                                }}
                            >
                                <div style={{ color: '#e8cc90', marginBottom: '0.4rem' }}>{s.icon}</div>
                                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#e8cc90', lineHeight: 1 }}>{s.value}</div>
                                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.68)', marginTop: '0.4rem', fontWeight: 500, lineHeight: 1.3 }}>{s.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <Link href="/kontakt#kontaktformular" className="shimmer-btn" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'linear-gradient(135deg, #c5a36c, #d4b57d)',
                            color: '#0A192F', padding: '1.05rem 2.5rem',
                            fontWeight: 800, fontSize: '1rem',
                            borderRadius: '50px', textDecoration: 'none',
                            boxShadow: '0 12px 35px rgba(197,163,108,0.5)',
                        }}>
                            Kostenlose Erstberatung
                        </Link>
                        <Link href="/leistungen" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'rgba(255,255,255,0.08)',
                            backdropFilter: 'blur(15px)',
                            color: 'white', border: '1.5px solid rgba(255,255,255,0.35)',
                            padding: '1.05rem 2.5rem',
                            fontWeight: 600, fontSize: '1rem',
                            borderRadius: '50px', textDecoration: 'none',
                            transition: 'all 0.3s ease'
                        }}>
                            Alle Leistungen ansehen →
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
