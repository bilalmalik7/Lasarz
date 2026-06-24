'use client';
import { motion } from 'framer-motion';
import { GraduationCap, Scale, Banknote, Users, Eye, Target, Zap, Landmark, Handshake } from 'lucide-react';
import Link from 'next/link';

const uspList = [
    {
        icon: <GraduationCap size={28} />,
        title: 'Ausschließlich zertifizierte Sachverständige',
        desc: 'Unsere Gutachter sind nach DIN EN ISO/IEC 17024 zertifiziert (DIAzert), als TEGoVA Recognised European Valuer (REV) anerkannt und Mitglieder im BVS e.V.',
    },
    {
        icon: <Scale size={28} />,
        title: 'Volle Rechtskonformität',
        desc: 'Unsere Gutachter kennen alle relevanten gesetzlichen Anforderungen in Osnabrück und halten diese lückenlos ein.',
    },
    {
        icon: <Banknote size={28} />,
        title: 'Faires Pauschalangebot',
        desc: 'Alle Kosten werden verbindlich und vollständig im Voraus kalkuliert. Keine versteckten Nachbesserungen.',
    },
    {
        icon: <Users size={28} />,
        title: 'Rundum-Betreuung',
        desc: 'Wir informieren Sie vollständig über Wert, Zustand, Mängel und alle relevanten rechtlichen Bestimmungen Ihrer Immobilie.',
    },
    {
        icon: <Eye size={28} />,
        title: 'Vier-Augen-Prinzip',
        desc: 'Jedes Gutachten wird von einem weiteren Sachverständigen geprüft – für die höchstmögliche Qualität und heit.',
    },
    {
        icon: <Target size={28} />,
        title: 'Spezialisierte Themenschwerpunkte',
        desc: 'Unsere Experten decken Sonderthemen wie Bausachverstand, Erbschaft und Scheidung mit höchster Kompetenz ab.',
    },
    {
        icon: <Zap size={28} />,
        title: 'Auch kurzfristige Termine',
        desc: 'Wir richten uns nach Ihnen und nehmen auch kurzfristige Aufträge wahr – flexibel und auch am Wochenende.',
    },
    {
        icon: <Landmark size={28} />,
        title: 'Mitglied in renommierten Fachverbänden',
        desc: 'Wir sind Mitglied im BVS e.V., zertifiziert durch die Deutsche Immobilienakademie (DIA) und als TEGoVA Recognised European Valuer (REV) europaweit anerkannt.',
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, } }
};

export function WhyChooseUs() {
    return (
        <section style={{
            position: 'relative',
            padding: '120px 0',
            overflow: 'hidden',
        }}>
            {/* Background image with overlay */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'url(/images/portrait.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }} />
            <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(5,12,28,0.97) 0%, rgba(8,38,70,0.94) 50%, rgba(5,12,28,0.97) 100%)',
            }} />

            {/* Decorative orbs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity }}
                style={{
                    position: 'absolute', top: '-5%', right: '3%',
                    width: '500px', height: '500px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(197,163,108,0.15) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />
            <motion.div
                animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.18, 0.08] }}
                transition={{ duration: 12, repeat: Infinity }}
                style={{
                    position: 'absolute', bottom: '5%', left: '-5%',
                    width: '400px', height: '400px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(26,117,141,0.2) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65 }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                        color: '#e8cc90', fontWeight: 700, textTransform: 'uppercase',
                        letterSpacing: '3px', fontSize: '0.8rem', marginBottom: '1rem'
                    }}>
                        <span style={{ width: '28px', height: '2px', background: 'linear-gradient(90deg, transparent, #e8cc90)', display: 'block' }} />
                        Was uns auszeichnet
                        <span style={{ width: '28px', height: '2px', background: 'linear-gradient(90deg, #e8cc90, transparent)', display: 'block' }} />
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                        color: 'white', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem'
                    }}>
                        Gebäudebewertung durch echte Experten
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '610px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.85 }}>
                        Das Sachverständigenbüro Lasarz – <strong style={{ color: 'rgba(255,255,255,0.9)' }}>B.A. Real Estate</strong> – ist mit Büros in Osnabrück, Bünde und Hannover für die gesamte Region tätig. Über 3.500 erstellte Gutachten und 19+ Jahre Marktkenntnis.
                    </p>
                </motion.div>

                {/* USP Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
                        gap: '1.25rem',
                        marginBottom: '5rem',
                    }}
                >
                    {uspList.map((usp, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{
                                y: -6,
                                background: 'rgba(197,163,108,0.13)',
                                borderColor: 'rgba(197,163,108,0.45)'
                            }}
                            style={{
                                background: 'rgba(255,255,255,0.06)',
                                backdropFilter: 'blur(18px)',
                                WebkitBackdropFilter: 'blur(18px)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                borderRadius: '18px',
                                padding: '1.75rem',
                                display: 'flex',
                                gap: '1.25rem',
                                alignItems: 'flex-start',
                                transition: 'all 0.35s ease',
                                cursor: 'default'
                            }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.15, rotate: 8 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                style={{
                                    width: '54px', height: '54px',
                                    borderRadius: '14px',
                                    background: 'linear-gradient(135deg, rgba(197,163,108,0.25), rgba(197,163,108,0.12))',
                                    border: '1px solid rgba(197,163,108,0.35)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.6rem',
                                    flexShrink: 0,
                                }}
                            >
                                {usp.icon}
                            </motion.div>
                            <div>
                                <h3 style={{
                                    color: 'white', fontSize: '1rem',
                                    fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.3
                                }}>
                                    {usp.title}
                                </h3>
                                <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.88rem', lineHeight: 1.75 }}>
                                    {usp.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    style={{ textAlign: 'center' }}
                >
                    <Link href="/kontakt#kontaktformular" className="shimmer-btn" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                        background: 'linear-gradient(135deg, #c5a36c, #d4b57d)',
                        color: '#0A192F', padding: '1.15rem 3rem',
                        fontSize: '1.05rem', fontWeight: 800,
                        borderRadius: '50px', textDecoration: 'none',
                        boxShadow: '0 14px 40px rgba(197,163,108,0.45)',
                        letterSpacing: '0.3px'
                    }}>
                        <Handshake size={20} /> Kostenlose & unverbindliche Beratung anfragen
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
