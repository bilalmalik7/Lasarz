'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    Phone, Mail, MapPin, Award, ShieldCheck, Clock, CheckCircle,
    ArrowRight, TrendingUp, Activity, Cpu, Database, BarChart2,
    Building2, Home, Scale, FileText, Zap, Users, Target, ShieldCheck as SC,
    ChevronRight, Star, GraduationCap, Handshake,
} from 'lucide-react';
import type { PremiumCityData } from './CityPagePremium';

/* ─── Particle canvas ────────────────────────────────────────────────── */
interface Particle {
    x: number; y: number; vx: number; vy: number; r: number; opacity: number;
}

function ParticleCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const rafRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;
        let W = 0, H = 0;

        const resize = () => {
            W = canvas.width = canvas.offsetWidth;
            H = canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Seed particles
        particles.current = Array.from({ length: 90 }, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.45,
            vy: (Math.random() - 0.5) * 0.45,
            r: Math.random() * 2 + 1,
            opacity: Math.random() * 0.55 + 0.15,
        }));

        const draw = () => {
            ctx.clearRect(0, 0, W, H);
            const ps = particles.current;

            // Move
            for (const p of ps) {
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0 || p.x > W) p.vx *= -1;
                if (p.y < 0 || p.y > H) p.vy *= -1;
            }

            // Connect nearby
            for (let i = 0; i < ps.length; i++) {
                for (let j = i + 1; j < ps.length; j++) {
                    const dx = ps[i].x - ps[j].x;
                    const dy = ps[i].y - ps[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 130) {
                        const alpha = (1 - dist / 130) * 0.28;
                        ctx.strokeStyle = `rgba(26,117,141,${alpha})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(ps[i].x, ps[i].y);
                        ctx.lineTo(ps[j].x, ps[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw dots
            for (const p of ps) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(197,163,108,${p.opacity})`;
                ctx.fill();
            }

            rafRef.current = requestAnimationFrame(draw);
        };

        draw();
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                pointerEvents: 'none', zIndex: 1,
            }}
        />
    );
}

/* ─── 3D tilt card ───────────────────────────────────────────────────── */
function TiltCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 22 });
    const rotY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 22 });

    return (
        <motion.div
            ref={ref}
            onMouseMove={e => {
                const r = ref.current!.getBoundingClientRect();
                x.set((e.clientX - r.left) / r.width - 0.5);
                y.set((e.clientY - r.top) / r.height - 0.5);
            }}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d', perspective: 900, ...style }}
        >
            {children}
        </motion.div>
    );
}

/* ─── Animated counter ───────────────────────────────────────────────── */
function AnimCount({ target, suffix = '' }: { target: number; suffix: string }) {
    const [n, setN] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const done = useRef(false);
    useEffect(() => {
        const ob = new IntersectionObserver(([e]) => {
            if (e.isIntersecting && !done.current) {
                done.current = true;
                const t0 = performance.now();
                const dur = 1800;
                const step = (now: number) => {
                    const p = Math.min((now - t0) / dur, 1);
                    setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
                    if (p < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
            }
        }, { threshold: 0.4 });
        if (ref.current) ob.observe(ref.current);
        return () => ob.disconnect();
    }, [target]);
    return <span ref={ref}>{n.toLocaleString('de-DE')}{suffix}</span>;
}

/* ─── Floating metric orb ────────────────────────────────────────────── */
function MetricOrb({ value, label, color, top, left, delay }: {
    value: string; label: string; color: string; top: string; left: string; delay: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
            transition={{ opacity: { delay, duration: 0.5 }, scale: { delay, duration: 0.5 }, y: { duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay } }}
            style={{
                position: 'absolute', top, left,
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(18px)',
                border: `1px solid ${color}44`,
                borderRadius: '16px',
                padding: '0.75rem 1.2rem',
                textAlign: 'center',
                zIndex: 3,
                boxShadow: `0 8px 32px ${color}22`,
                minWidth: '110px',
            }}
        >
            <div style={{ fontSize: '1.35rem', fontWeight: 900, color, lineHeight: 1 }}>{value}</div>
            <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.65)', marginTop: '3px', fontWeight: 500 }}>{label}</div>
        </motion.div>
    );
}

/* ─── Market ticker ──────────────────────────────────────────────────── */
const TICKER_ITEMS = [
    { label: 'Hannover Ø m² Wohnung', value: '3.420 €', trend: '+4.2%' },
    { label: 'EFH Region Hannover', value: '465.000 €', trend: '+2.8%' },
    { label: 'Gewerbe Hannover', value: '2.890 €/m²', trend: '+1.5%' },
    { label: 'Grundstück Stadt', value: '410 €/m²', trend: '+3.1%' },
    { label: 'MFH Rendite Ø', value: '3.8 %', trend: '+0.2%' },
    { label: 'Gutachterausschuss Hannover', value: '2024 Bodenrichtwert aktiv', trend: '↑' },
];

function MarketTicker() {
    const [idx, setIdx] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setIdx(i => (i + 1) % TICKER_ITEMS.length), 2800);
        return () => clearInterval(t);
    }, []);

    return (
        <div style={{
            background: 'rgba(10,25,47,0.9)',
            borderBottom: '1px solid rgba(26,117,141,0.4)',
            padding: '0.65rem 0',
            overflow: 'hidden',
            position: 'relative',
        }}>
            <div style={{
                display: 'flex', alignItems: 'center',
                gap: '0', maxWidth: '100%', overflow: 'hidden',
            }}>
                <div style={{
                    background: '#1A758D', color: 'white',
                    padding: '0.3rem 1rem', fontSize: '0.72rem', fontWeight: 700,
                    letterSpacing: '1.5px', textTransform: 'uppercase',
                    whiteSpace: 'nowrap', flexShrink: 0,
                }}>
                    MARKTDATEN
                </div>
                <div style={{ overflow: 'hidden', flex: 1, position: 'relative', height: '24px' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={idx}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.35 }}
                            style={{
                                position: 'absolute', left: 0, right: 0,
                                display: 'flex', alignItems: 'center', gap: '1.5rem',
                                paddingLeft: '1.25rem', paddingTop: '2px',
                            }}
                        >
                            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem' }}>
                                {TICKER_ITEMS[idx].label}
                            </span>
                            <span style={{ color: '#c5a36c', fontWeight: 700, fontSize: '0.82rem' }}>
                                {TICKER_ITEMS[idx].value}
                            </span>
                            <span style={{ color: '#4ade80', fontSize: '0.75rem', fontWeight: 600 }}>
                                {TICKER_ITEMS[idx].trend}
                            </span>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <Activity size={14} style={{ color: '#1A758D', flexShrink: 0, marginRight: '1rem' }} />
            </div>
        </div>
    );
}

/* ─── District price bar chart ───────────────────────────────────────── */
const DISTRICTS = [
    { name: 'List', price: 4100, max: 4500 },
    { name: 'Oststadt', price: 3850, max: 4500 },
    { name: 'Mitte', price: 3600, max: 4500 },
    { name: 'Linden', price: 3200, max: 4500 },
    { name: 'Südstadt', price: 3750, max: 4500 },
    { name: 'Misburg', price: 2650, max: 4500 },
    { name: 'Langenhagen', price: 2900, max: 4500 },
    { name: 'Garbsen', price: 2750, max: 4500 },
];

function DistrictChart() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
        if (ref.current) ob.observe(ref.current);
        return () => ob.disconnect();
    }, []);

    return (
        <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {DISTRICTS.map((d, i) => (
                <div key={d.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{d.name}</span>
                        <span style={{ fontSize: '0.82rem', color: 'var(--accent-primary)', fontWeight: 700 }}>
                            {d.price.toLocaleString('de-DE')} €/m²
                        </span>
                    </div>
                    <div style={{ height: '8px', borderRadius: '4px', background: 'var(--border-color)', overflow: 'hidden' }}>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: visible ? `${(d.price / d.max) * 100}%` : 0 }}
                            transition={{ duration: 1.1, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                height: '100%', borderRadius: '4px',
                                background: `linear-gradient(90deg, #1A758D, ${d.price > 3500 ? '#c5a36c' : '#1A758D'})`,
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

/* ─── Rotating 3D cube accent ────────────────────────────────────────── */
function TechCube() {
    return (
        <div style={{
            width: '120px', height: '120px',
            position: 'relative',
            transformStyle: 'preserve-3d',
            perspective: '600px',
        }}>
            <motion.div
                animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                style={{ width: '100%', height: '100%', transformStyle: 'preserve-3d', position: 'relative' }}
            >
                {[
                    { transform: 'translateZ(60px)' },
                    { transform: 'translateZ(-60px) rotateY(180deg)' },
                    { transform: 'translateX(-60px) rotateY(-90deg)' },
                    { transform: 'translateX(60px) rotateY(90deg)' },
                    { transform: 'translateY(-60px) rotateX(90deg)' },
                    { transform: 'translateY(60px) rotateX(-90deg)' },
                ].map((face, i) => (
                    <div key={i} style={{
                        position: 'absolute', inset: 0,
                        border: '1px solid rgba(26,117,141,0.55)',
                        background: 'rgba(26,117,141,0.04)',
                        backdropFilter: 'blur(4px)',
                        transform: face.transform,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        {i === 0 && <Cpu size={22} style={{ color: 'rgba(197,163,108,0.6)' }} />}
                        {i === 1 && <Database size={18} style={{ color: 'rgba(26,117,141,0.7)' }} />}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

/* ─── Main export ────────────────────────────────────────────────────── */
export function HannoverPremium({ data }: { data: PremiumCityData }) {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
    const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const certChips = [
        'Dipl.-Sachverständiger (DIA)',
        'DIAzert · DIN EN ISO/IEC 17024',
        'TEGoVA Recognised European Valuer',
        'BVS e.V. Mitglied',
        'B.A. Real Estate',
    ];

    return (
        <main style={{ overflowX: 'hidden' }}>

            {/* ── Ticker ─────────────────────────────────────────────── */}
            <MarketTicker />

            {/* ═══════════════════════════════════════════════════════
                HERO  — particle network + floating orbs + 3D card
            ═══════════════════════════════════════════════════════ */}
            <section ref={heroRef} style={{
                position: 'relative', minHeight: '100vh',
                display: 'flex', alignItems: 'center',
                paddingTop: '100px', paddingBottom: '80px',
                color: 'white', overflow: 'hidden',
            }}>
                {/* Colorful gradient bg */}
                <motion.div style={{ y: heroY, position: 'absolute', inset: 0, zIndex: 0 }}>
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(135deg, #0a1628 0%, #0d2a3a 25%, #0e3347 50%, #122040 75%, #0a1628 100%)',
                    }} />
                    {/* Teal color wash top-right */}
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'radial-gradient(ellipse 70% 60% at 75% 20%, rgba(26,117,141,0.35) 0%, transparent 70%)',
                    }} />
                    {/* Gold color wash bottom-left */}
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'radial-gradient(ellipse 60% 50% at 15% 80%, rgba(197,163,108,0.2) 0%, transparent 65%)',
                    }} />
                    {/* Purple accent mid */}
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(88,28,135,0.15) 0%, transparent 70%)',
                    }} />
                    {/* Grid */}
                    <div style={{
                        position: 'absolute', inset: 0,
                        backgroundImage: `
                            linear-gradient(rgba(26,117,141,0.12) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(26,117,141,0.12) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                    }} />
                </motion.div>

                {/* Particle canvas */}
                <ParticleCanvas />

                {/* Radial glow spots */}
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.18, 0.32, 0.18] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        position: 'absolute', top: '5%', right: '8%',
                        width: '55vw', height: '55vw', borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(26,117,141,0.65) 0%, transparent 70%)',
                        pointerEvents: 'none', zIndex: 1,
                    }} />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                    style={{
                        position: 'absolute', bottom: '-15%', left: '-8%',
                        width: '45vw', height: '45vw', borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(197,163,108,0.45) 0%, transparent 70%)',
                        pointerEvents: 'none', zIndex: 1,
                    }} />


                <div className="container" style={{ position: 'relative', zIndex: 5 }}>
                    <style>{`
                        @media (max-width: 900px) {
                            .han-grid { flex-direction: column !important; gap: 2.5rem !important; }
                            .han-card { max-width: 100% !important; }
                            .han-orb { display: none !important; }
                        }
                    `}</style>
                    <div className="han-grid" style={{ display: 'flex', alignItems: 'center', gap: '3.5rem' }}>

                        {/* Left text */}
                        <motion.div
                            initial={{ opacity: 0, x: -55 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                            style={{ flex: '1 1 55%', minWidth: 0 }}
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: -18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.65rem',
                                    background: 'rgba(26,117,141,0.18)',
                                    border: '1px solid rgba(26,117,141,0.5)',
                                    backdropFilter: 'blur(12px)',
                                    padding: '0.5rem 1.4rem', borderRadius: '50px',
                                    color: '#7ecfea', fontWeight: 700, fontSize: '0.78rem',
                                    letterSpacing: '2.5px', textTransform: 'uppercase',
                                    marginBottom: '1.75rem',
                                }}
                            >
                                <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.4, repeat: Infinity }}>
                                    <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80' }} />
                                </motion.span>
                                Immobiliengutachter Hannover
                            </motion.div>

                            {/* H1 */}
                            <motion.h1
                                initial={{ opacity: 0, y: 32 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.85 }}
                                style={{
                                    fontSize: 'clamp(2rem, 5vw, 3.8rem)',
                                    fontWeight: 900, lineHeight: 1.08,
                                    color: 'white', marginBottom: '1.5rem',
                                    textShadow: '0 4px 30px rgba(0,0,0,0.6)',
                                }}
                            >
                                Immobiliengutachter{' '}
                                <span style={{
                                    background: 'linear-gradient(135deg, #c5a36c, #e8cc90, #c5a36c)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>
                                    Hannover
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.45 }}
                                style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.82, marginBottom: '2.5rem', maxWidth: '560px' }}
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
                                    background: 'linear-gradient(135deg, #c5a36c 0%, #d4b57d 100%)',
                                    color: '#0A192F', padding: '1.05rem 2.2rem',
                                    fontWeight: 800, fontSize: '0.97rem', borderRadius: '50px',
                                    textDecoration: 'none', boxShadow: '0 12px 35px rgba(197,163,108,0.45)',
                                }}>
                                    Kostenlose Erstberatung <ArrowRight size={16} />
                                </Link>
                                <a href={`tel:${data.phone.replace(/[\s()-]/g, '')}`} style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                    background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(16px)',
                                    color: 'white', border: '1.5px solid rgba(255,255,255,0.28)',
                                    padding: '1.05rem 2.2rem', fontWeight: 700,
                                    fontSize: '0.97rem', borderRadius: '50px', textDecoration: 'none',
                                }}>
                                    <Phone size={15} strokeWidth={1.8} /> {data.phone}
                                </a>
                            </motion.div>

                            {/* Cert chips */}
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
                                style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {certChips.map((c, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.85 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.95 + i * 0.08 }}
                                        style={{
                                            display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            color: 'rgba(255,255,255,0.7)',
                                            padding: '0.32rem 0.85rem', borderRadius: '50px',
                                            fontSize: '0.74rem', fontWeight: 600,
                                        }}
                                    >
                                        <CheckCircle size={11} style={{ color: '#c5a36c' }} /> {c}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right: 3D info card */}
                        <div className="han-card" style={{ flex: '0 0 auto', width: '360px', maxWidth: '100%' }}>
                            <TiltCard style={{ width: '100%' }}>
                                <motion.div
                                    initial={{ opacity: 0, x: 60, scale: 0.9 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    style={{
                                        background: 'linear-gradient(145deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03))',
                                        backdropFilter: 'blur(24px)',
                                        border: '1px solid rgba(255,255,255,0.14)',
                                        borderRadius: '24px', padding: '2rem',
                                        boxShadow: '0 30px 70px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.1)',
                                        position: 'relative', overflow: 'hidden',
                                        transformStyle: 'preserve-3d',
                                    }}
                                >
                                    {/* Corner glow */}
                                    <div style={{
                                        position: 'absolute', top: '-30%', right: '-20%',
                                        width: '250px', height: '250px', borderRadius: '50%',
                                        background: 'radial-gradient(circle, rgba(197,163,108,0.18) 0%, transparent 70%)',
                                        pointerEvents: 'none',
                                    }} />
                                    {/* Tech corner lines */}
                                    <div style={{ position: 'absolute', top: 12, right: 12, width: 24, height: 24, borderTop: '2px solid rgba(197,163,108,0.4)', borderRight: '2px solid rgba(197,163,108,0.4)' }} />
                                    <div style={{ position: 'absolute', bottom: 12, left: 12, width: 24, height: 24, borderBottom: '2px solid rgba(26,117,141,0.4)', borderLeft: '2px solid rgba(26,117,141,0.4)' }} />

                                    {/* Portrait */}
                                    <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '1.4rem', position: 'relative', boxShadow: '0 12px 32px rgba(0,0,0,0.35)' }}>
                                        <img src="/images/portrait.jpg" alt="Marc-André Lasarz"
                                            style={{ width: '100%', height: '240px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
                                        <div style={{
                                            position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px',
                                            background: 'linear-gradient(90deg, transparent, #c5a36c, #e8cc90, #c5a36c, transparent)',
                                        }} />
                                    </div>

                                    <div style={{ textAlign: 'center', marginBottom: '1.2rem' }}>
                                        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'white', marginBottom: '0.2rem' }}>Marc-André Lasarz</h3>
                                        <p style={{ fontSize: '0.72rem', color: '#e8cc90', fontWeight: 600, letterSpacing: '1.2px', textTransform: 'uppercase' }}>
                                            Dipl.-Sachverständiger (DIA) · REV
                                        </p>
                                    </div>

                                    <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(197,163,108,0.35), transparent)', marginBottom: '1.2rem' }} />

                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.5rem', marginBottom: '1.2rem' }}>
                                        {[
                                            { icon: <Award size={15} strokeWidth={1.8} />, label: 'DIAzert' },
                                            { icon: <ShieldCheck size={15} strokeWidth={1.8} />, label: 'Gerichtsfest' },
                                            { icon: <Clock size={15} strokeWidth={1.8} />, label: '19+ Jahre' },
                                        ].map((s, i) => (
                                            <div key={i} style={{
                                                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem',
                                                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)',
                                                borderRadius: '10px', padding: '0.65rem 0.4rem', textAlign: 'center',
                                            }}>
                                                <div style={{ color: '#e8cc90' }}>{s.icon}</div>
                                                <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.75)', fontWeight: 600 }}>{s.label}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                                        <a href={`tel:${data.phone.replace(/[\s()-]/g, '')}`} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(200,235,245,0.9)', fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none' }}>
                                            <Phone size={13} strokeWidth={1.8} /> {data.phone}
                                        </a>
                                        <a href={`mailto:${data.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.78rem', textDecoration: 'none' }}>
                                            <Mail size={13} strokeWidth={1.8} /> {data.email}
                                        </a>
                                    </div>
                                </motion.div>
                            </TiltCard>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
                    style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 6 }}>
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.8, repeat: Infinity }}
                        style={{ width: '26px', height: '40px', borderRadius: '13px', border: '2px solid rgba(255,255,255,0.2)', display: 'flex', justifyContent: 'center', paddingTop: '6px' }}>
                        <div style={{ width: '4px', height: '8px', borderRadius: '2px', background: 'rgba(255,255,255,0.45)' }} />
                    </motion.div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                STATS BAND
            ═══════════════════════════════════════════════════════ */}
            <section style={{
                background: 'linear-gradient(135deg, #0A192F, #0f2d50)',
                padding: '52px 0',
                borderTop: '1px solid rgba(197,163,108,0.2)',
                borderBottom: '1px solid rgba(197,163,108,0.2)',
            }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${data.stats.length},1fr)`, gap: '2rem', textAlign: 'center' }}>
                        {data.stats.map((s, i) => {
                            const num = parseInt(s.value.replace(/\D/g, ''));
                            const suf = s.value.replace(/[\d.]/g, '');
                            return (
                                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                                    <div style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, color: '#c5a36c', lineHeight: 1, marginBottom: '0.4rem', fontVariantNumeric: 'tabular-nums' }}>
                                        <AnimCount target={num} suffix={suf} />
                                    </div>
                                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.86rem', fontWeight: 500 }}>{s.label}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                TECH MARKET ANALYSIS SECTION
            ═══════════════════════════════════════════════════════ */}
            <section style={{ padding: '100px 0', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', inset: 0, pointerEvents: 'none',
                    backgroundImage: `
                        radial-gradient(circle at 85% 50%, rgba(26,117,141,0.06) 0%, transparent 55%),
                        radial-gradient(circle at 10% 50%, rgba(197,163,108,0.05) 0%, transparent 50%)
                    `,
                }} />
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: '4rem', alignItems: 'center' }}>

                        {/* Left: chart */}
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div style={{
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '20px', padding: '2rem',
                                boxShadow: '0 8px 30px rgba(10,25,47,0.08)',
                                position: 'relative', overflow: 'hidden',
                            }}>
                                {/* Header bar */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                                    <BarChart2 size={18} style={{ color: '#1A758D' }} />
                                    <span style={{ fontWeight: 700, color: 'var(--accent-secondary)', fontSize: '0.92rem' }}>
                                        Immobilienpreise Hannover 2024 – nach Stadtteil
                                    </span>
                                    <div style={{ marginLeft: 'auto', display: 'flex', gap: '5px' }}>
                                        {['#ff5f57', '#ffbd2e', '#28c840'].map(c => (
                                            <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                                        ))}
                                    </div>
                                </div>
                                <DistrictChart />
                                <div style={{ marginTop: '1rem', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                                    Quelle: Gutachterausschuss Hannover 2024 · Ø Wohnfläche €/m²
                                </div>

                                {/* Decorative scan line animation */}
                                <motion.div
                                    animate={{ top: ['0%', '100%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
                                    style={{
                                        position: 'absolute', left: 0, right: 0, height: '2px',
                                        background: 'linear-gradient(90deg, transparent, rgba(26,117,141,0.4), transparent)',
                                        pointerEvents: 'none',
                                    }}
                                />
                            </div>
                        </motion.div>

                        {/* Right: text + cube */}
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '2rem' }}>
                                <div className="han-orb" style={{ flexShrink: 0 }}>
                                    <TechCube />
                                </div>
                                <div>
                                    <div style={{ color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2.5px', fontSize: '0.78rem', marginBottom: '0.75rem' }}>
                                        Marktanalyse · Hannover
                                    </div>
                                    <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: 'var(--accent-secondary)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem' }}>
                                        Präzise Marktwerte. Lokale Expertise.
                                    </h2>
                                </div>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
                                Als Dipl.-Sachverständiger (DIA) mit Büro in Hannover analysieren wir täglich aktuelle Transaktionsdaten des Gutachterausschusses Region Hannover. Unsere Gutachten basieren auf echten Vergleichswerten – nicht auf Online-Schätzungen.
                            </p>
                            {[
                                'Auswertung echter Kaufpreissammlungen',
                                'Bodenrichtwertkarte Region Hannover aktuell',
                                'ImmoWertV-konforme Verfahren (VVV, EWV, SWV)',
                                'Gerichtsfest nach § 194 BauGB',
                            ].map((item, i) => (
                                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.7rem' }}>
                                    <div style={{
                                        width: 22, height: 22, borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #1A758D, #0f5a70)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                    }}>
                                        <CheckCircle size={13} style={{ color: '#c5a36c' }} />
                                    </div>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item}</span>
                                </motion.div>
                            ))}
                            <div style={{ marginTop: '2rem' }}>
                                <Link href="/kontakt#kontaktformular" style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                                    background: 'linear-gradient(135deg, #1A758D, #0A192F)',
                                    color: 'white', padding: '0.95rem 2rem', fontWeight: 700,
                                    fontSize: '0.93rem', borderRadius: '50px', textDecoration: 'none',
                                    boxShadow: '0 10px 30px rgba(10,25,47,0.25)',
                                }}>
                                    <TrendingUp size={16} /> Gutachten anfragen
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                SERVICES — 3D tilt grid
            ═══════════════════════════════════════════════════════ */}
            <section style={{ padding: '100px 0', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div style={{ color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2.5px', fontSize: '0.78rem', marginBottom: '1rem' }}>
                            Leistungen
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--accent-secondary)', fontWeight: 800, marginBottom: '1rem' }}>
                            Immobiliengutachten für Hannover
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.8 }}>
                            Erstellt von <strong>Dipl.-Sachverständigen (DIA)</strong> nach ImmoWertV – gerichtsfest, vom Finanzamt anerkannt.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 285px), 1fr))', gap: '1.4rem' }}>
                        {data.services.map((svc, i) => (
                            <TiltCard key={i}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                    whileHover={{ boxShadow: '0 24px 50px rgba(10,25,47,0.14)' }}
                                    style={{
                                        background: 'white', borderRadius: '20px', padding: '2rem',
                                        border: '1px solid rgba(10,25,47,0.07)', height: '100%',
                                        transformStyle: 'preserve-3d', transition: 'box-shadow 0.3s',
                                        position: 'relative', overflow: 'hidden',
                                    }}
                                >
                                    {/* Subtle corner accent */}
                                    <div style={{ position: 'absolute', top: 0, right: 0, width: 60, height: 60, background: 'linear-gradient(225deg, rgba(26,117,141,0.06) 0%, transparent 60%)', borderRadius: '0 20px 0 0' }} />
                                    <div style={{
                                        width: '52px', height: '52px', borderRadius: '14px',
                                        background: 'linear-gradient(135deg, #0A192F 0%, #1a3a5c 100%)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#e8cc90', marginBottom: '1.2rem',
                                        boxShadow: '0 8px 20px rgba(10,25,47,0.22)',
                                        transform: 'translateZ(16px)',
                                    }}>
                                        {svc.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-secondary)', marginBottom: '0.6rem' }}>{svc.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.87rem', lineHeight: 1.75 }}>{svc.desc}</p>
                                </motion.div>
                            </TiltCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                CERTIFICATIONS — dark parallax
            ═══════════════════════════════════════════════════════ */}
            <section style={{
                position: 'relative', padding: '100px 0', overflow: 'hidden',
                background: 'linear-gradient(135deg, #020c1e 0%, #0A192F 50%, #051020 100%)',
            }}>
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
                    transition={{ duration: 9, repeat: Infinity }}
                    style={{ position: 'absolute', top: '-10%', left: '70%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(197,163,108,0.2) 0%, transparent 70%)', pointerEvents: 'none' }}
                />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'white', fontWeight: 800, marginBottom: '1rem' }}>
                            Zertifizierungen &amp; Qualifikationen
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '520px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.8 }}>
                            Höchste Qualifikationsstandards für Ihre heit in Hannover
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.2rem', marginBottom: '4rem' }}>
                        {[
                            { title: 'Dipl.-Sachverständiger (DIA)', sub: 'Deutsche Immobilienakademie Freiburg', detail: 'Umfassende akademische Qualifikation für professionelle Immobilienbewertung' },
                            { title: 'DIAzert – DIN EN ISO/IEC 17024', sub: 'Personenzertifizierung', detail: 'Akkreditierte Zertifizierung – höchste Anerkennungsstufe für Sachverständige' },
                            { title: 'TEGoVA REV', sub: 'Recognised European Valuer', detail: 'Europaweit anerkannte Berufsqualifikation durch TEGoVA' },
                            { title: 'BVS e.V.', sub: 'Bundesverband Sachverständiger', detail: 'Mitglied im BVS – öffentlich bestellter und vereidigter Sachverständiger' },
                            { title: 'B.A. Real Estate', sub: 'Steinbeis Hochschule Berlin', detail: 'Bachelor of Arts in Real Estate – akademische Wertermittlung' },
                            { title: 'Gepr. Immobilien-Fachwirt (IHK)', sub: 'Industrie- und Handelskammer', detail: 'IHK-anerkannte Qualifikation als Grundlage der Sachverständigen-Anerkennung' },
                        ].map((cert, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                whileHover={{ y: -4, borderColor: 'rgba(197,163,108,0.5)' }}
                                style={{
                                    background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)',
                                    border: '1px solid rgba(255,255,255,0.09)', borderRadius: '16px', padding: '1.5rem',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', borderRadius: '10px', background: 'linear-gradient(135deg, rgba(197,163,108,0.22), rgba(197,163,108,0.08))', marginBottom: '1rem' }}>
                                    <GraduationCap size={20} style={{ color: '#e8cc90' }} />
                                </div>
                                <h4 style={{ color: '#e8cc90', fontWeight: 700, fontSize: '0.93rem', marginBottom: '0.3rem' }}>{cert.title}</h4>
                                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.73rem', fontWeight: 600, marginBottom: '0.5rem' }}>{cert.sub}</div>
                                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', lineHeight: 1.65 }}>{cert.detail}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Logo strip */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', background: 'rgba(255,255,255,0.96)', padding: '1.2rem 2.5rem', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', maxWidth: '680px', margin: '0 auto' }}>
                        <img src="/images/original_clone/bvs_e_v_logo.jpeg" alt="BVS" style={{ height: '36px', objectFit: 'contain' }} />
                        <img src="/images/original_clone/NEU-Logo-DIAzert_7-09-300x228.jpg" alt="DIA Zert" style={{ height: '36px', objectFit: 'contain' }} />
                        <img src="/images/original_clone/REV-Siegel_2018-002.jpg" alt="REV" style={{ height: '42px', objectFit: 'contain' }} />
                        <img src="/images/original_clone/Stempel-DIAZert-2025.jpg" alt="DIA Zert 2025" style={{ height: '42px', objectFit: 'contain' }} />
                        <img src="/images/original_clone/SV-R-Immo-D3_042028_ger_tc_p-182x300.jpg" alt="SV-R Immo" style={{ height: '42px', objectFit: 'contain' }} />
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                COVERAGE AREAS
            ═══════════════════════════════════════════════════════ */}
            <section style={{ padding: '90px 0', background: 'var(--bg-primary)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', marginBottom: '0.75rem' }}>Einzugsgebiet</div>
                            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--accent-secondary)', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                                Unser Einzugsgebiet in und um Hannover
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.5rem' }}>
                                Wir sind persönlich vor Ort in Hannover und der gesamten Region Niedersachsen tätig – von der Innenstadt bis ins Umland, mit lokaler Marktkenntnis aus erster Hand.
                            </p>
                            <Link href="/kontakt#kontaktformular" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>
                                Bewertung anfragen <ChevronRight size={16} />
                            </Link>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                            {data.areas.map((area, i) => (
                                <motion.span key={i}
                                    initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                                    whileHover={{ scale: 1.06, borderColor: 'var(--accent-primary)', color: 'var(--accent-secondary)' }}
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 1rem', borderRadius: '50px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-secondary)', fontSize: '0.84rem', fontWeight: 500, transition: 'all 0.25s', cursor: 'default' }}>
                                    <MapPin size={11} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} /> {area}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                REVIEWS
            ═══════════════════════════════════════════════════════ */}
            <section style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <div style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', marginBottom: '0.75rem' }}>Kundenstimmen</div>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', color: 'var(--accent-secondary)', fontWeight: 800, marginBottom: '0.75rem' }}>Was unsere Kunden sagen</h2>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c5a36c" style={{ color: '#c5a36c' }} />)}
                            <span style={{ color: 'var(--text-secondary)', marginLeft: '0.5rem', fontSize: '0.9rem' }}>4.9 / 5 · Google Bewertungen</span>
                        </div>
                    </motion.div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
                        {data.reviews.map((r, i) => (
                            <TiltCard key={i}>
                                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    style={{ background: 'white', borderRadius: '20px', padding: '1.75rem', height: '100%', boxShadow: '0 4px 20px rgba(10,25,47,0.07)', border: '1px solid rgba(10,25,47,0.06)', transformStyle: 'preserve-3d' }}>
                                    <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '1rem' }}>
                                        {[...Array(5)].map((_, j) => <Star key={j} size={13} fill="#c5a36c" style={{ color: '#c5a36c' }} />)}
                                    </div>
                                    <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '1.25rem', fontStyle: 'italic' }}>&ldquo;{r.text}&rdquo;</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #0A192F, #1A758D)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '0.88rem', flexShrink: 0 }}>
                                            {r.name[0]}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 700, color: 'var(--accent-secondary)', fontSize: '0.88rem' }}>{r.name}</div>
                                            <div style={{ color: '#999', fontSize: '0.76rem' }}>{r.location}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </TiltCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                SEO TEXT
            ═══════════════════════════════════════════════════════ */}
            <section style={{ padding: '90px 0', background: 'var(--bg-primary)' }}>
                <div className="container" style={{ maxWidth: '860px' }}>
                    <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--accent-secondary)', fontWeight: 800, marginBottom: '2rem' }}>{data.seoText.title}</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {data.seoText.paragraphs.map((p, i) => (
                                <p key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: '1rem' }} dangerouslySetInnerHTML={{ __html: p }} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                FAQ
            ═══════════════════════════════════════════════════════ */}
            <section style={{ padding: '90px 0', background: 'var(--bg-secondary)' }}>
                <div className="container" style={{ maxWidth: '760px' }}>
                    <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <div style={{ color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', marginBottom: '0.75rem' }}>Häufige Fragen</div>
                        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', color: 'var(--accent-secondary)', fontWeight: 800 }}>FAQ – Immobiliengutachter Hannover</h2>
                    </motion.div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {data.faqs.map((faq, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                                style={{ background: 'white', borderRadius: '14px', border: '1px solid rgba(10,25,47,0.08)', overflow: 'hidden', boxShadow: openFaq === i ? '0 8px 24px rgba(10,25,47,0.1)' : 'none', transition: 'box-shadow 0.3s' }}>
                                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    style={{ width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.1rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', gap: '1rem' }}>
                                    <span style={{ fontWeight: 700, color: 'var(--accent-secondary)', fontSize: '0.95rem', lineHeight: 1.4 }}>{faq.q}</span>
                                    <motion.span animate={{ rotate: openFaq === i ? 45 : 0 }} transition={{ duration: 0.25 }}
                                        style={{ color: 'var(--accent-primary)', flexShrink: 0, fontSize: '1.4rem', lineHeight: 1 }}>+</motion.span>
                                </button>
                                <motion.div initial={false} animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
                                    <div style={{ padding: '0 1.5rem 1.25rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.8 }}>{faq.a}</div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════
                CTA FINAL
            ═══════════════════════════════════════════════════════ */}
            <section style={{
                position: 'relative', padding: '110px 0', overflow: 'hidden',
                background: 'linear-gradient(135deg, #0A192F 0%, #0f2d50 60%, #1a3a5c 100%)',
            }}>
                <ParticleCanvas />
                <motion.div animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.28, 0.15] }} transition={{ duration: 9, repeat: Infinity }}
                    style={{ position: 'absolute', top: '-20%', left: '60%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(197,163,108,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(197,163,108,0.15)', border: '1px solid rgba(197,163,108,0.35)', padding: '0.5rem 1.4rem', borderRadius: '50px', marginBottom: '1.75rem', color: '#e8cc90', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                            Ihr nächster Schritt
                        </div>
                        <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', color: 'white', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                            Jetzt kostenfrei beraten lassen
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: '540px', margin: '0 auto 3rem', fontSize: '1.05rem', lineHeight: 1.8 }}>
                            Ihr professionelles Immobiliengutachten in Hannover – von Dipl.-Sachverständigen (DIA), transparent, und zu Festpreisen.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
                            <Link href="/kontakt#kontaktformular" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, #c5a36c, #d4b57d)', color: '#0A192F', padding: '1.1rem 2.8rem', fontWeight: 800, fontSize: '1.05rem', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 14px 40px rgba(197,163,108,0.45)' }}>
                                Kostenlose Erstberatung <ArrowRight size={18} />
                            </Link>
                            <a href={`tel:${data.phone.replace(/[\s()-]/g, '')}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)', color: 'white', border: '1.5px solid rgba(255,255,255,0.25)', padding: '1.1rem 2.5rem', fontWeight: 700, fontSize: '1rem', borderRadius: '50px', textDecoration: 'none' }}>
                                <Phone size={16} strokeWidth={1.8} /> {data.phone}
                            </a>
                        </div>
                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {[{ icon: <Mail size={15} strokeWidth={1.8} />, text: data.email }, { icon: <MapPin size={15} strokeWidth={1.8} />, text: 'Hannover, Niedersachsen' }].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.58)', fontSize: '0.87rem' }}>
                                    <span style={{ color: '#c5a36c' }}>{item.icon}</span> {item.text}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
