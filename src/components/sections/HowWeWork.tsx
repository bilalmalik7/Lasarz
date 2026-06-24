'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PhoneCall, Home, BarChart3, ClipboardCheck } from 'lucide-react';

const methods = [
    {
        step: '01',
        title: 'Kostenlose Erstberatung',
        desc: 'In einem unverbindlichen Gespräch klären wir Ihr Anliegen und prüfen, welches Gutachten (z.B. Verkehrswert- oder Kurzgutachten) für Sie optimal ist. Sie erhalten ein transparentes Festpreisangebot.',
        icon: <PhoneCall size={28} />,
        gradient: 'linear-gradient(135deg, #1A758D 0%, #0f5a70 100%)',
        shadow: 'rgba(26, 117, 141, 0.35)',
    },
    {
        step: '02',
        title: 'Ortstermin & Besichtigung',
        desc: 'Unser Dipl.-Sachverständiger (DIA) besichtigt Ihre Immobilie vor Ort. Dabei werden Bauzustand, Ausstattung sowie wertbeeinflussende Faktoren (z. B. Schäden, Modernisierungen, Baulasten) detailliert aufgenommen.',
        icon: <Home size={28} />,
        gradient: 'linear-gradient(135deg, #c5a36c 0%, #a8875a 100%)',
        shadow: 'rgba(197, 163, 108, 0.35)',
    },
    {
        step: '03',
        title: 'Recherche & Wertermittlung',
        desc: 'Wir analysieren den regionalen Immobilienmarkt (z.B. Gutachterausschuss Osnabrück), prüfen behördliche Unterlagen wie Grundbuchauszüge oder Baulasten und berechnen den Wert nach gesetzlich normierten Verfahren.',
        icon: <BarChart3 size={28} />,
        gradient: 'linear-gradient(135deg, #0A192F 0%, #1a3a5c 100%)',
        shadow: 'rgba(10, 25, 47, 0.35)',
    },
    {
        step: '04',
        title: 'Auslieferung des Gutachtens',
        desc: 'Sie erhalten Ihr rechtssicheres Verkehrswertgutachten gemäß § 194 BauGB in schriftlicher und digitaler Form – gerichtsfest, vom Finanzamt anerkannt und nach ImmoWertV erstellt. Abschließend besprechen wir die Ergebnisse gemeinsam.',
        icon: <ClipboardCheck size={28} />,
        gradient: 'linear-gradient(135deg, #1A758D 0%, #0A192F 100%)',
        shadow: 'rgba(26, 117, 141, 0.35)',
    },
];

export function HowWeWork() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section style={{
            padding: '120px 0',
            background: 'var(--section-dark-bg)',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                backgroundImage: `
                    radial-gradient(circle at 80% 20%, rgba(197,163,108,0.08) 0%, transparent 45%),
                    radial-gradient(circle at 10% 80%, rgba(26,117,141,0.08) 0%, transparent 45%)
                `
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '6rem' }}
                >
                    <div className="section-label" style={{ justifyContent: 'center', color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }}>
                        Der Ablauf
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        color: 'var(--section-dark-text)',
                        fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem'
                    }}>
                        In 4 Schritten zu Ihrem rechtssicheren Gutachten
                    </h2>
                    <p style={{
                        maxWidth: '640px', margin: '0 auto',
                        color: 'var(--section-dark-muted)', fontSize: '1.05rem', lineHeight: 1.85
                    }}>
                        Wir legen größten Wert auf Transparenz und Zuverlässigkeit. Erfahren Sie, wie unkompliziert der Weg zu Ihrer professionellen Immobilienbewertung ist.
                    </p>
                </motion.div>

                {/* Vertical Timeline */}
                <div ref={containerRef} style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
                    {/* The Background Line */}
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        bottom: 0,
                        width: '4px',
                        background: 'rgba(255,255,255,0.05)',
                        transform: 'translateX(-50%)',
                        borderRadius: '4px'
                    }} className="hidden-mobile" />

                    {/* The Animated Fill Line */}
                    <motion.div style={{
                        position: 'absolute',
                        left: '50%',
                        top: 0,
                        bottom: 0,
                        width: '4px',
                        background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-teal))',
                        transform: 'translateX(-50%)',
                        transformOrigin: 'top',
                        scaleY: scaleY,
                        borderRadius: '4px',
                        zIndex: 1
                    }} className="hidden-mobile" />

                    {methods.map((m, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={m.step}
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexDirection: isEven ? 'row' : 'row-reverse',
                                    marginBottom: '4rem',
                                    position: 'relative'
                                }}
                                className="md-flex-row flex-col gap-lg"
                            >
                                {/* Content Card */}
                                <div style={{
                                    flex: 1,
                                    width: '100%',
                                    background: 'var(--section-dark-surface)',
                                    borderRadius: '24px',
                                    padding: '2.5rem',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                    border: '1px solid var(--section-dark-border)',
                                    position: 'relative',
                                    zIndex: 2,
                                    textAlign: isEven ? 'right' : 'left'
                                }}>
                                    <div style={{
                                        color: 'var(--accent-primary)',
                                        fontWeight: 800,
                                        fontSize: '0.9rem',
                                        letterSpacing: '2px',
                                        marginBottom: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: isEven ? 'flex-end' : 'flex-start',
                                        gap: '0.5rem'
                                    }}>
                                        SCHRITT {m.step}
                                    </div>
                                    <h3 style={{
                                        fontSize: '1.4rem', color: 'var(--section-dark-text)',
                                        marginBottom: '1rem', fontWeight: 700
                                    }}>
                                        {m.title}
                                    </h3>
                                    <p style={{ color: 'var(--section-dark-muted)', lineHeight: 1.8, fontSize: '1rem' }}>
                                        {m.desc}
                                    </p>
                                </div>

                                {/* Center Node */}
                                <div className="hidden-mobile" style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: m.gradient,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    boxShadow: `0 0 20px ${m.shadow}`,
                                    zIndex: 3,
                                    flexShrink: 0
                                }}>
                                    {m.icon}
                                </div>

                                {/* Empty space for the other side */}
                                <div style={{ flex: 1 }} className="hidden-mobile" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
