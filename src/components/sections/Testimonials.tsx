'use client';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Thomas M.',
        role: 'Immobilieneigentümer in Osnabrück',
        text: 'Die Wertermittlung meiner Immobilie durch Herrn Lasarz war hochprofessionell und absolut präzise. Die ausführliche Beratung hat mir viel Sicherheit gegeben.',
        rating: 5,
        avatar: 'T',
        avatarGradient: 'linear-gradient(135deg, #667eea, #764ba2)'
    },
    {
        name: 'Sabine W.',
        role: 'Verkäuferin aus Melle',
        text: 'Besonders beeindruckt hat mich die Schnelligkeit und die fundierte Marktkenntnis in der Region. Ein kompetenter Partner, den ich jederzeit weiterempfehlen würde.',
        rating: 5,
        avatar: 'S',
        avatarGradient: 'linear-gradient(135deg, #f093fb, #f5576c)'
    },
    {
        name: 'Andreas K.',
        role: 'Gewerbeimmobilien-Investor',
        text: 'Für gerichtsfeste Gutachten ist Lasarz die erste Adresse. Transparent, unabhängig und fachlich auf höchstem Niveau.',
        rating: 5,
        avatar: 'A',
        avatarGradient: 'linear-gradient(135deg, #43e97b, #38f9d7)'
    }
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, } }
};

export const Testimonials = () => {
    return (
        <section style={{
            padding: '110px 0',
            background: 'var(--section-dark-bg)',
            overflow: 'hidden',
            position: 'relative'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: `
                    radial-gradient(circle at 10% 50%, rgba(197,163,108,0.06) 0%, transparent 45%),
                    radial-gradient(circle at 90% 50%, rgba(26,117,141,0.06) 0%, transparent 45%)
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
                    <div className="section-label" style={{ justifyContent: 'center', color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }}>
                        Referenzen
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
                        color: 'var(--section-dark-text)',
                        fontWeight: 800, lineHeight: 1.2
                    }}>
                        Was unsere Kunden sagen
                    </h2>
                </motion.div>

                {/* Testimonial cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                        gap: '2rem'
                    }}
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0,0,0,0.12)' }}
                            style={{
                                background: 'white',
                                borderRadius: '24px',
                                padding: '2.5rem 2rem',
                                boxShadow: '0 6px 28px rgba(0,0,0,0.07)',
                                border: '1px solid rgba(0,0,0,0.06)',
                                display: 'flex', flexDirection: 'column',
                                position: 'relative', overflow: 'hidden',
                                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                cursor: 'default'
                            }}
                        >
                            {/* Decorative quote mark */}
                            <div style={{
                                position: 'absolute', top: '1rem', right: '1.5rem',
                                fontSize: '6rem', lineHeight: 1,
                                background: 'linear-gradient(135deg, #c5a36c, #f0d080)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                opacity: 0.25,
                                fontFamily: 'Georgia, serif',
                                fontWeight: 900,
                                pointerEvents: 'none'
                            }}>
                                "
                            </div>

                            {/* Stars */}
                            <div style={{ display: 'flex', gap: '3px', marginBottom: '1.5rem' }}>
                                {[...Array(t.rating)].map((_, star) => (
                                    <motion.span
                                        key={star}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.05 * star + 0.3 * i, duration: 0.3, type: 'spring' }}
                                        style={{ color: '#FFB800', fontSize: '1.2rem' }}
                                    >★</motion.span>
                                ))}
                            </div>

                            {/* Text */}
                            <p style={{
                                color: 'var(--text-secondary)', fontSize: '1rem',
                                fontStyle: 'italic', lineHeight: 1.8,
                                marginBottom: '2rem', flexGrow: 1, position: 'relative', zIndex: 1
                            }}>
                                "{t.text}"
                            </p>

                            {/* Author */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    width: '52px', height: '52px', borderRadius: '50%',
                                    background: t.avatarGradient,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.3rem', color: 'white',
                                    fontWeight: 700, flexShrink: 0,
                                    boxShadow: '0 6px 18px rgba(0,0,0,0.15)'
                                }}>
                                    {t.avatar}
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1rem', color: 'var(--accent-secondary)', margin: 0, fontWeight: 700 }}>
                                        {t.name}
                                    </h4>
                                    <p style={{ fontSize: '0.83rem', color: 'var(--text-muted)', margin: 0 }}>
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
