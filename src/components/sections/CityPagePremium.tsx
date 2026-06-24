'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';
import Link from 'next/link';
import {
    Phone, Mail, MapPin, Award, ShieldCheck, Clock, CheckCircle,
    Star, ArrowRight, ChevronRight, Building, Home, Scale,
    FileText, GraduationCap, Zap, Handshake, Users, Target
} from 'lucide-react';

/* ── Types ──────────────────────────────────────────────────────── */
export interface PremiumCityData {
    slug: string;
    name: string;
    state: string;                  // e.g. "Nordrhein-Westfalen"
    region: string;                 // tagline under hero title
    heroSubtitle: string;
    phone: string;
    email: string;
    address: string;
    lat: string;
    lng: string;
    stats: { value: string; label: string }[];
    areas: string[];
    reviews: { name: string; location: string; text: string; stars?: number }[];
    services: { icon: React.ReactNode; title: string; desc: string }[];
    seoText: { title: string; paragraphs: string[] };
    faqs: { q: string; a: string }[];
}

/* ── Animated counter ───────────────────────────────────────────── */
function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true;
                const duration = 1800;
                const start = performance.now();
                const step = (now: number) => {
                    const progress = Math.min((now - start) / duration, 1);
                    const ease = 1 - Math.pow(1 - progress, 3);
                    setCount(Math.round(target * ease));
                    if (progress < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
            }
        }, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return <div ref={ref}>{count.toLocaleString('de-DE')}{suffix}</div>;
}

/* ── 3D tilt card ───────────────────────────────────────────────── */
function TiltCard({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 260, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 260, damping: 20 });

    const handleMove = (e: React.MouseEvent) => {
        const rect = ref.current!.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800, ...style }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* ── Floating orb ───────────────────────────────────────────────── */
function FloatingOrb({ size, color, top, left, delay }: { size: number; color: string; top: string; left: string; delay: number }) {
    return (
        <motion.div
            animate={{ y: [0, -24, 0], scale: [1, 1.12, 1], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 7 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
            style={{
                position: 'absolute', top, left,
                width: size, height: size, borderRadius: '50%',
                background: color, pointerEvents: 'none', zIndex: 0,
            }}
        />
    );
}

/* ── Main component ─────────────────────────────────────────────── */
export function CityPagePremium({ data }: { data: PremiumCityData }) {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
    const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    const certChips = [
        'Dipl.-Sachverständiger (DIA)',
        'DIAzert · DIN EN ISO/IEC 17024',
        'TEGoVA Recognised European Valuer',
        'BVS e.V. Mitglied',
        'B.A. Real Estate',
    ];

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main style={{ overflowX: 'hidden' }}>

            {/* ═══════════════════════════════════════════════════
                1. HERO
            ═══════════════════════════════════════════════════ */}
            <section ref={heroRef} style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '110px',
                paddingBottom: '80px',
                color: 'white',
                overflow: 'hidden',
            }}>
                {/* Parallax BG */}
                <motion.div style={{ y: heroY, position: 'absolute', inset: 0, zIndex: 0 }}>
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(135deg, #020c1e 0%, #0A192F 45%, #051020 100%)',
                    }} />
                    {/* Grid overlay */}
                    <div style={{
                        position: 'absolute', inset: 0,
                        backgroundImage: `
                            linear-gradient(rgba(26,117,141,0.07) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(26,117,141,0.07) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px',
                    }} />
                </motion.div>

                {/* Orbs */}
                <FloatingOrb size={600} color="radial-gradient(circle, rgba(197,163,108,0.18) 0%, transparent 70%)" top="0%" left="60%" delay={0} />
                <FloatingOrb size={500} color="radial-gradient(circle, rgba(26,117,141,0.22) 0%, transparent 70%)" top="40%" left="-5%" delay={2.5} />
                <FloatingOrb size={300} color="radial-gradient(circle, rgba(197,163,108,0.12) 0%, transparent 70%)" top="60%" left="75%" delay={1.2} />

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <style>{`
                        @media (max-width: 900px) {
                            .premium-hero-grid { flex-direction: column !important; gap: 3rem !important; }
                            .premium-hero-card { max-width: 100% !important; }
                        }
                    `}</style>
                    <div className="premium-hero-grid" style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>

                        {/* Left: text */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            style={{ flex: '1 1 55%', minWidth: 0 }}
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: -16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                                    background: 'rgba(197,163,108,0.15)',
                                    border: '1px solid rgba(197,163,108,0.45)',
                                    backdropFilter: 'blur(12px)',
                                    padding: '0.5rem 1.4rem', borderRadius: '50px',
                                    color: '#e8cc90', fontWeight: 700, fontSize: '0.8rem',
                                    letterSpacing: '2px', textTransform: 'uppercase',
                                    marginBottom: '1.75rem',
                                }}
                            >
                                <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }}>
                                    <Award size={14} />
                                </motion.span>
                                Immobiliengutachter {data.name}
                            </motion.div>

                            {/* H1 */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.85 }}
                                style={{
                                    fontSize: 'clamp(2rem, 5vw, 3.8rem)',
                                    fontWeight: 900, lineHeight: 1.08,
                                    color: 'white', marginBottom: '1.5rem',
                                    textShadow: '0 4px 30px rgba(0,0,0,0.5)',
                                }}
                            >
                                Immobiliengutachter{' '}
                                <span style={{
                                    background: 'linear-gradient(135deg, #c5a36c, #e8cc90, #c5a36c)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>
                                    {data.name}
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.45 }}
                                style={{
                                    fontSize: '1.12rem', color: 'rgba(255,255,255,0.82)',
                                    lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '580px',
                                }}
                            >
                                {data.heroSubtitle}
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}
                            >
                                <Link href="/kontakt#kontaktformular" style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                    background: 'linear-gradient(135deg, #c5a36c 0%, #d4b57d 50%, #c5a36c 100%)',
                                    backgroundSize: '200% 100%',
                                    color: '#0A192F', padding: '1.05rem 2.2rem',
                                    fontWeight: 800, fontSize: '0.97rem', borderRadius: '50px',
                                    textDecoration: 'none',
                                    boxShadow: '0 12px 35px rgba(197,163,108,0.5)',
                                    transition: 'all 0.3s ease',
                                }}>
                                    Kostenlose Erstberatung
                                    <ArrowRight size={16} />
                                </Link>
                                <a href={`tel:${data.phone.replace(/[\s()-]/g, '')}`} style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                    background: 'rgba(255,255,255,0.08)',
                                    backdropFilter: 'blur(16px)',
                                    color: 'white', border: '1.5px solid rgba(255,255,255,0.3)',
                                    padding: '1.05rem 2.2rem', fontWeight: 700,
                                    fontSize: '0.97rem', borderRadius: '50px',
                                    textDecoration: 'none', transition: 'all 0.3s ease',
                                }}>
                                    <Phone size={15} strokeWidth={1.8} />
                                    {data.phone}
                                </a>
                            </motion.div>

                            {/* Cert chips */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.85 }}
                                style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
                            >
                                {certChips.map((c, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.85 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.9 + i * 0.08 }}
                                        style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                                            background: 'rgba(255,255,255,0.06)',
                                            border: '1px solid rgba(255,255,255,0.12)',
                                            color: 'rgba(255,255,255,0.7)',
                                            padding: '0.32rem 0.85rem', borderRadius: '50px',
                                            fontSize: '0.75rem', fontWeight: 600,
                                        }}
                                    >
                                        <CheckCircle size={11} style={{ color: '#c5a36c' }} />
                                        {c}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right: 3D info card */}
                        <div className="premium-hero-card" style={{ flex: '0 0 auto', width: '380px', maxWidth: '100%' }}>
                            <TiltCard style={{ width: '100%' }}>
                                <motion.div
                                    initial={{ opacity: 0, x: 60, scale: 0.92 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    style={{
                                        background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.04))',
                                        backdropFilter: 'blur(24px)',
                                        border: '1px solid rgba(255,255,255,0.16)',
                                        borderRadius: '24px',
                                        padding: '2rem',
                                        boxShadow: '0 30px 70px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)',
                                        position: 'relative', overflow: 'hidden',
                                        transformStyle: 'preserve-3d',
                                    }}
                                >
                                    {/* Gold glow */}
                                    <div style={{
                                        position: 'absolute', top: '-30%', right: '-20%',
                                        width: '250px', height: '250px', borderRadius: '50%',
                                        background: 'radial-gradient(circle, rgba(197,163,108,0.2) 0%, transparent 70%)',
                                        pointerEvents: 'none',
                                    }} />

                                    {/* Portrait */}
                                    <div style={{
                                        borderRadius: '16px', overflow: 'hidden',
                                        marginBottom: '1.5rem', position: 'relative',
                                        boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
                                    }}>
                                        <img src="/images/portrait.jpg"
                                            alt="Marc-André Lasarz – Dipl.-Sachverständiger (DIA)"
                                            style={{ width: '100%', height: '260px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                                        />
                                        <div style={{
                                            position: 'absolute', bottom: 0, left: 0, right: 0,
                                            height: '3px',
                                            background: 'linear-gradient(90deg, transparent, #c5a36c, #e8cc90, #c5a36c, transparent)',
                                        }} />
                                    </div>

                                    {/* Name */}
                                    <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'white', marginBottom: '0.25rem' }}>
                                            Marc-André Lasarz
                                        </h3>
                                        <p style={{ fontSize: '0.75rem', color: '#e8cc90', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                                            Dipl.-Sachverständiger (DIA) · REV
                                        </p>
                                    </div>

                                    {/* Divider */}
                                    <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(197,163,108,0.4), transparent)', marginBottom: '1.25rem' }} />

                                    {/* Stats grid */}
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                                        {[
                                            { icon: <Award size={16} strokeWidth={1.8} />, label: 'DIAzert · REV' },
                                            { icon: <ShieldCheck size={16} strokeWidth={1.8} />, label: 'Gerichtsfest' },
                                            { icon: <Clock size={16} strokeWidth={1.8} />, label: '20+ Jahre' },
                                        ].map((stat, i) => (
                                            <div key={i} style={{
                                                display: 'flex', flexDirection: 'column',
                                                alignItems: 'center', gap: '0.4rem',
                                                background: 'rgba(255,255,255,0.06)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                borderRadius: '12px', padding: '0.75rem 0.5rem',
                                                textAlign: 'center',
                                            }}>
                                                <div style={{ color: '#e8cc90' }}>{stat.icon}</div>
                                                <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600, lineHeight: 1.3 }}>
                                                    {stat.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Contact */}
                                    <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <a href={`tel:${data.phone.replace(/[\s()-]/g, '')}`}
                                            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(200,235,245,0.9)', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}>
                                            <Phone size={13} strokeWidth={1.8} /> {data.phone}
                                        </a>
                                        <a href={`mailto:${data.email}`}
                                            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textDecoration: 'none' }}>
                                            <Mail size={13} strokeWidth={1.8} /> {data.email}
                                        </a>
                                        {data.address && (
                                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem' }}>
                                                <MapPin size={13} strokeWidth={1.8} style={{ flexShrink: 0, marginTop: '2px' }} /> {data.address}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </TiltCard>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
                    style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        style={{
                            width: '26px', height: '40px', borderRadius: '13px',
                            border: '2px solid rgba(255,255,255,0.25)',
                            display: 'flex', justifyContent: 'center', paddingTop: '6px',
                        }}
                    >
                        <div style={{ width: '4px', height: '8px', borderRadius: '2px', background: 'rgba(255,255,255,0.5)' }} />
                    </motion.div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════════════
                2. STATS BAND
            ═══════════════════════════════════════════════════ */}
            <section style={{
                background: 'linear-gradient(135deg, #0A192F 0%, #0f2d50 100%)',
                padding: '56px 0',
                borderTop: '1px solid rgba(197,163,108,0.2)',
                borderBottom: '1px solid rgba(197,163,108,0.2)',
            }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${data.stats.length}, 1fr)`,
                        gap: '2rem',
                        textAlign: 'center',
                    }}>
                        {data.stats.map((stat, i) => {
                            const numericValue = parseInt(stat.value.replace(/\D/g, ''));
                            const suffix = stat.value.replace(/[\d.]/g, '');
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div style={{
                                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                                        fontWeight: 900, color: '#c5a36c',
                                        lineHeight: 1, marginBottom: '0.4rem',
                                        fontVariantNumeric: 'tabular-nums',
                                    }}>
                                        <AnimatedNumber target={numericValue} suffix={suffix} />
                                    </div>
                                    <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', fontWeight: 500 }}>
                                        {stat.label}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                3. SERVICES — 3D TILT CARDS
            ═══════════════════════════════════════════════════ */}
            <section style={{ padding: '110px 0', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    backgroundImage: `
                        radial-gradient(circle at 15% 40%, rgba(197,163,108,0.05) 0%, transparent 50%),
                        radial-gradient(circle at 85% 60%, rgba(26,117,141,0.05) 0%, transparent 50%)
                    `,
                }} />
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '4rem' }}
                    >
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            color: 'var(--accent-primary)', fontWeight: 700,
                            textTransform: 'uppercase', letterSpacing: '2.5px', fontSize: '0.8rem',
                            marginBottom: '1rem',
                        }}>
                            <span style={{ width: '24px', height: '2px', background: 'var(--accent-primary)', display: 'block' }} />
                            Unsere Leistungen in {data.name}
                            <span style={{ width: '24px', height: '2px', background: 'var(--accent-primary)', display: 'block' }} />
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--accent-secondary)', fontWeight: 800, marginBottom: '1rem' }}>
                            Zertifizierte Immobiliengutachten für {data.name}
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
                            Erstellt von <strong>Dipl.-Sachverständigen (DIA)</strong> nach ImmoWertV und § 194 BauGB – gerichtsfest, vom Finanzamt anerkannt.
                        </p>
                    </motion.div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
                        gap: '1.5rem',
                    }}>
                        {data.services.map((svc, i) => (
                            <TiltCard key={i}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                    whileHover={{ boxShadow: '0 24px 50px rgba(10,25,47,0.12)' }}
                                    style={{
                                        background: 'white',
                                        borderRadius: '20px',
                                        padding: '2rem',
                                        border: '1px solid rgba(10,25,47,0.07)',
                                        height: '100%',
                                        transformStyle: 'preserve-3d',
                                        transition: 'box-shadow 0.3s ease',
                                    }}
                                >
                                    <div style={{
                                        width: '56px', height: '56px', borderRadius: '16px',
                                        background: 'linear-gradient(135deg, #0A192F 0%, #1a3a5c 100%)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#e8cc90', marginBottom: '1.25rem',
                                        boxShadow: '0 8px 20px rgba(10,25,47,0.2)',
                                        transform: 'translateZ(20px)',
                                    }}>
                                        {svc.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-secondary)', marginBottom: '0.65rem' }}>
                                        {svc.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.75 }}>
                                        {svc.desc}
                                    </p>
                                </motion.div>
                            </TiltCard>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginTop: '3.5rem' }}
                    >
                        <Link href="/kontakt#kontaktformular" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                            background: 'linear-gradient(135deg, #0A192F, #1a3a5c)',
                            color: 'white', padding: '1.05rem 2.5rem',
                            fontWeight: 700, fontSize: '1rem', borderRadius: '50px',
                            textDecoration: 'none', boxShadow: '0 12px 35px rgba(10,25,47,0.3)',
                            transition: 'all 0.3s ease',
                        }}>
                            <Handshake size={18} />
                            Kostenlose Erstberatung anfragen
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                4. CERTIFICATIONS SHOWCASE (dark parallax)
            ═══════════════════════════════════════════════════ */}
            <section style={{
                position: 'relative', padding: '100px 0', overflow: 'hidden',
                background: 'linear-gradient(135deg, #020c1e 0%, #0A192F 50%, #051020 100%)',
            }}>
                <FloatingOrb size={500} color="radial-gradient(circle, rgba(197,163,108,0.12) 0%, transparent 70%)" top="-10%" left="70%" delay={0} />
                <FloatingOrb size={400} color="radial-gradient(circle, rgba(26,117,141,0.15) 0%, transparent 70%)" top="50%" left="-5%" delay={1.5} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '4rem' }}
                    >
                        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'white', fontWeight: 800, marginBottom: '1rem' }}>
                            Unsere Zertifizierungen &amp; Qualifikationen
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '560px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.8 }}>
                            Höchste Qualifikationsstandards für Ihre heit
                        </p>
                    </motion.div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                        gap: '1.25rem', marginBottom: '4rem',
                    }}>
                        {[
                            {
                                title: 'Dipl.-Sachverständiger (DIA)',
                                sub: 'Deutsche Immobilienakademie Freiburg',
                                detail: 'Umfassende akademische Qualifikation für professionelle Immobilienbewertung',
                            },
                            {
                                title: 'DIAzert – DIN EN ISO/IEC 17024',
                                sub: 'Personenzertifizierung nach internationalem Standard',
                                detail: 'Akkreditierte Zertifizierung – höchste Anerkennungsstufe für Sachverständige',
                            },
                            {
                                title: 'TEGoVA REV',
                                sub: 'Recognised European Valuer',
                                detail: 'Europaweit anerkannte Berufsqualifikation durch die TEGoVA (The European Group of Valuers\' Associations)',
                            },
                            {
                                title: 'BVS e.V.',
                                sub: 'Bundesverband Sachverständiger',
                                detail: 'Mitglied im BVS – Bundesverband öffentlich bestellter und vereidigter sowie qualifizierter Sachverständiger',
                            },
                            {
                                title: 'B.A. Real Estate',
                                sub: 'Steinbeis Hochschule Berlin',
                                detail: 'Bachelor of Arts in Real Estate – akademische Grundlage für wissenschaftliche Wertermittlung',
                            },
                            {
                                title: 'Gepr. Immobilien-Fachwirt (IHK)',
                                sub: 'Industrie- und Handelskammer',
                                detail: 'IHK-anerkannte Qualifikation – Grundlage der behördlichen Sachverständigen-Anerkennung',
                            },
                        ].map((cert, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ y: -4, borderColor: 'rgba(197,163,108,0.5)' }}
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    backdropFilter: 'blur(16px)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '16px', padding: '1.5rem',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                <div style={{
                                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                    width: '40px', height: '40px', borderRadius: '10px',
                                    background: 'linear-gradient(135deg, rgba(197,163,108,0.25), rgba(197,163,108,0.1))',
                                    marginBottom: '1rem',
                                }}>
                                    <GraduationCap size={20} style={{ color: '#e8cc90' }} />
                                </div>
                                <h4 style={{ color: '#e8cc90', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.3rem' }}>
                                    {cert.title}
                                </h4>
                                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.75rem', fontWeight: 600, marginBottom: '0.6rem', letterSpacing: '0.5px' }}>
                                    {cert.sub}
                                </div>
                                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', lineHeight: 1.65 }}>
                                    {cert.detail}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Logo strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            gap: '1.5rem', flexWrap: 'wrap',
                            background: 'rgba(255,255,255,0.96)',
                            padding: '1.2rem 2.5rem', borderRadius: '16px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.3)', maxWidth: '680px', margin: '0 auto',
                        }}
                    >
                        <img src="/images/original_clone/bvs_e_v_logo.jpeg" alt="BVS" style={{ height: '38px', objectFit: 'contain' }} />
                        <img src="/images/original_clone/NEU-Logo-DIAzert_7-09-300x228.jpg" alt="DIA Zert" style={{ height: '38px', objectFit: 'contain' }} />
                        <img src="/images/original_clone/REV-Siegel_2018-002.jpg" alt="REV" style={{ height: '44px', objectFit: 'contain' }} />
                        <img src="/images/original_clone/Stempel-DIAZert-2025.jpg" alt="DIA Zert 2025" style={{ height: '44px', objectFit: 'contain' }} />
                        <img src="/images/original_clone/SV-R-Immo-D3_042028_ger_tc_p-182x300.jpg" alt="SV-R Immo" style={{ height: '44px', objectFit: 'contain' }} />
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                5. COVERAGE AREAS
            ═══════════════════════════════════════════════════ */}
            <section style={{ padding: '90px 0', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.82rem', marginBottom: '0.75rem' }}>
                                Einzugsgebiet
                            </div>
                            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--accent-secondary)', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                                Unser Einzugsgebiet in und um {data.name}
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
                                Wir sind für Sie persönlich vor Ort in {data.name} und der gesamten Region tätig – mit lokaler Marktkenntnis und regionaler Expertise.
                            </p>
                            <Link href="/kontakt#kontaktformular" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none',
                            }}>
                                Bewertung anfragen <ChevronRight size={16} />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}
                        >
                            {data.areas.map((area, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.88 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.04 }}
                                    whileHover={{ scale: 1.05, borderColor: 'var(--accent-primary)', color: 'var(--accent-secondary)' }}
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                        padding: '0.4rem 1rem', borderRadius: '50px',
                                        border: '1px solid var(--border-color)',
                                        background: 'var(--bg-primary)',
                                        color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 500,
                                        transition: 'all 0.25s ease', cursor: 'default',
                                    }}
                                >
                                    <MapPin size={11} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                                    {area}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                6. REVIEWS
            ═══════════════════════════════════════════════════ */}
            <section style={{ padding: '100px 0', background: 'var(--bg-primary)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '3.5rem' }}
                    >
                        <div style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.82rem', marginBottom: '0.75rem' }}>
                            Kundenstimmen
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--accent-secondary)', fontWeight: 800, marginBottom: '0.75rem' }}>
                            Was unsere Kunden sagen
                        </h2>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={18} fill="#c5a36c" style={{ color: '#c5a36c' }} />
                            ))}
                            <span style={{ color: 'var(--text-secondary)', marginLeft: '0.5rem', fontSize: '0.92rem' }}>4.9 / 5 · Google Bewertungen</span>
                        </div>
                    </motion.div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                        gap: '1.5rem',
                    }}>
                        {data.reviews.map((review, i) => (
                            <TiltCard key={i}>
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    style={{
                                        background: 'white', borderRadius: '20px',
                                        padding: '1.75rem', height: '100%',
                                        boxShadow: '0 4px 20px rgba(10,25,47,0.07)',
                                        border: '1px solid rgba(10,25,47,0.06)',
                                        transformStyle: 'preserve-3d',
                                    }}
                                >
                                    <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '1rem' }}>
                                        {[...Array(5)].map((_, j) => (
                                            <Star key={j} size={14} fill="#c5a36c" style={{ color: '#c5a36c' }} />
                                        ))}
                                    </div>
                                    <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '1.25rem', fontStyle: 'italic' }}>
                                        &ldquo;{review.text}&rdquo;
                                    </p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <div style={{
                                            width: '38px', height: '38px', borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #0A192F, #1A758D)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: 'white', fontWeight: 800, fontSize: '0.9rem', flexShrink: 0,
                                        }}>
                                            {review.name[0]}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 700, color: 'var(--accent-secondary)', fontSize: '0.9rem' }}>{review.name}</div>
                                            <div style={{ color: '#999', fontSize: '0.78rem' }}>{review.location}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </TiltCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                7. SEO TEXT SECTION
            ═══════════════════════════════════════════════════ */}
            <section style={{ padding: '90px 0', background: 'var(--bg-secondary)' }}>
                <div className="container" style={{ maxWidth: '860px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--accent-secondary)', fontWeight: 800, marginBottom: '2rem' }}>
                            {data.seoText.title}
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {data.seoText.paragraphs.map((p, i) => (
                                <p key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1rem' }}
                                    dangerouslySetInnerHTML={{ __html: p }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                8. FAQ
            ═══════════════════════════════════════════════════ */}
            <section style={{ padding: '90px 0', background: 'var(--bg-primary)' }}>
                <div className="container" style={{ maxWidth: '760px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '3rem' }}
                    >
                        <div style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.82rem', marginBottom: '0.75rem' }}>
                            Häufige Fragen
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: 'var(--accent-secondary)', fontWeight: 800 }}>
                            FAQ – Immobiliengutachter {data.name}
                        </h2>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {data.faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                style={{
                                    background: 'white', borderRadius: '14px',
                                    border: '1px solid rgba(10,25,47,0.08)',
                                    overflow: 'hidden',
                                    boxShadow: openFaq === i ? '0 8px 24px rgba(10,25,47,0.1)' : 'none',
                                    transition: 'box-shadow 0.3s ease',
                                }}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    style={{
                                        width: '100%', textAlign: 'left',
                                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                        padding: '1.1rem 1.5rem', background: 'none', border: 'none',
                                        cursor: 'pointer', gap: '1rem',
                                    }}
                                >
                                    <span style={{ fontWeight: 700, color: 'var(--accent-secondary)', fontSize: '0.97rem', lineHeight: 1.4 }}>
                                        {faq.q}
                                    </span>
                                    <motion.span
                                        animate={{ rotate: openFaq === i ? 45 : 0 }}
                                        transition={{ duration: 0.25 }}
                                        style={{ color: 'var(--accent-primary)', flexShrink: 0, fontSize: '1.4rem', lineHeight: 1 }}
                                    >
                                        +
                                    </motion.span>
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <div style={{ padding: '0 1.5rem 1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                                        {faq.a}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════
                9. CTA FINAL
            ═══════════════════════════════════════════════════ */}
            <section style={{
                position: 'relative', padding: '110px 0', overflow: 'hidden',
                background: 'linear-gradient(135deg, #0A192F 0%, #0f2d50 60%, #1a3a5c 100%)',
            }}>
                <FloatingOrb size={500} color="radial-gradient(circle, rgba(197,163,108,0.18) 0%, transparent 70%)" top="-20%" left="60%" delay={0} />
                <FloatingOrb size={350} color="radial-gradient(circle, rgba(26,117,141,0.2) 0%, transparent 70%)" top="50%" left="-5%" delay={1} />

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                            background: 'rgba(197,163,108,0.15)', border: '1px solid rgba(197,163,108,0.35)',
                            padding: '0.5rem 1.4rem', borderRadius: '50px', marginBottom: '1.75rem',
                            color: '#e8cc90', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase',
                        }}>
                            Ihr nächster Schritt
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', color: 'white', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                            Jetzt kostenfrei beraten lassen
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '560px', margin: '0 auto 3rem', fontSize: '1.05rem', lineHeight: 1.8 }}>
                            Erhalten Sie Ihr professionelles Immobiliengutachten in {data.name} von Dipl.-Sachverständigen (DIA). Transparent, und zu Festpreisen.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
                            <Link href="/kontakt#kontaktformular" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: 'linear-gradient(135deg, #c5a36c, #d4b57d)',
                                color: '#0A192F', padding: '1.1rem 2.8rem',
                                fontWeight: 800, fontSize: '1.05rem', borderRadius: '50px',
                                textDecoration: 'none', boxShadow: '0 14px 40px rgba(197,163,108,0.45)',
                            }}>
                                Kostenlose Erstberatung
                                <ArrowRight size={18} />
                            </Link>
                            <a href={`tel:${data.phone.replace(/[\s()-]/g, '')}`} style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)',
                                color: 'white', border: '1.5px solid rgba(255,255,255,0.25)',
                                padding: '1.1rem 2.5rem', fontWeight: 700, fontSize: '1rem', borderRadius: '50px', textDecoration: 'none',
                            }}>
                                <Phone size={16} strokeWidth={1.8} />
                                {data.phone}
                            </a>
                        </div>

                        {/* Contact info */}
                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {[
                                { icon: <Mail size={15} strokeWidth={1.8} />, text: data.email },
                                ...(data.address ? [{ icon: <MapPin size={15} strokeWidth={1.8} />, text: data.address }] : []),
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem' }}>
                                    <span style={{ color: '#c5a36c' }}>{item.icon}</span>
                                    {item.text}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
