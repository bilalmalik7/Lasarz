'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Contact() {
    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState(1);
    const [formData, setFormData] = useState({
        anlass: '',
        gutachten: '',
        typ: '',
        plz: '',
        ort: '',
        flaeche: '',
        baujahr: '',
        vorname: '',
        nachname: '',
        email: '',
        telefon: '',
        nachricht: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSelectOption = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleNext = () => {
        if (step === 1 && !formData.anlass) return;
        if (step === 2 && !formData.gutachten) return;
        if (step === 3 && !formData.typ) return;
        if (step === 4 && (!formData.plz || !formData.ort || !formData.flaeche || !formData.baujahr)) return;
        setDirection(1);
        setStep(prev => prev + 1);
    };

    const handleBack = () => {
        setDirection(-1);
        setStep(prev => prev - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'contact_funnel', data: formData })
            });

            if (!response.ok) throw new Error('Fehler beim Senden.');

            setIsSubmitted(true);
            setDirection(1);
            setStep(6);
        } catch (error) {
            console.error('Submission error:', error);
            alert('Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const isNextDisabled = () => {
        if (step === 1) return !formData.anlass;
        if (step === 2) return !formData.gutachten;
        if (step === 3) return !formData.typ;
        if (step === 4) return !formData.plz || !formData.ort || !formData.flaeche || !formData.baujahr;
        return false;
    };

    const stepTitles = ['', 'Anlass', 'Leistung', 'Objekt', 'Eckdaten', 'Kontakt'];

    const slideVariants = {
        enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
        center: { opacity: 1, x: 0 },
        exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40 }),
    };

    // SVG icons
    const icons = {
        erbschaft: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12v10H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>,
        scheidung: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 2v22"/></svg>,
        kauf_verkauf: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m16 16-4-4-4 4"/><path d="m12 12v8"/></svg>,
        steuer: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><rect x="8" y="10" width="2" height="2"/><rect x="14" y="10" width="2" height="2"/><rect x="8" y="14" width="2" height="2"/><rect x="14" y="14" width="2" height="2"/></svg>,
        sonstiges: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
        verkehrswert: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><circle cx="10" cy="13" r="2"/></svg>,
        kurzgutachten: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>,
        kaufberatung: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="13" r="3"/></svg>,
        beratung: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
        einfamilienhaus: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
        mehrfamilienhaus: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="9" y1="14" x2="9" y2="14.01"/><line x1="15" y1="14" x2="15" y2="14.01"/></svg>,
        eigentumswohnung: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><rect x="8" y="10" width="8" height="4"/></svg>,
        gewerbe: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 21H2V3l7 4h5l7-4v18z"/></svg>,
        grundstueck: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>,
    };

    const OptionCard = ({ id, label, desc, field, icon }: { id: string; label: string; desc: string; field: string; icon: React.ReactNode }) => {
        const isSelected = (formData as Record<string, string>)[field] === id;
        return (
            <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                onClick={() => handleSelectOption(field, id)}
                className={`option-card${isSelected ? ' selected' : ''}`}
                style={{ minHeight: '120px' }}
            >
                <div style={{
                    color: isSelected ? 'var(--accent-primary)' : 'var(--text-muted)',
                    marginBottom: '0.65rem',
                    transition: 'color 0.2s',
                }}>
                    {icon}
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.2rem', color: isSelected ? 'var(--accent-primary-dark)' : 'var(--text-primary)', lineHeight: 1.3 }}>{label}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{desc}</div>
                {isSelected && (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        style={{
                            position: 'absolute', top: '8px', right: '8px',
                            width: '18px', height: '18px', borderRadius: '50%',
                            background: 'var(--accent-primary)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}
                    >
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><polyline points="2,6 5,9 10,3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </motion.div>
                )}
            </motion.div>
        );
    };

    return (
        <section id="kontakt" style={{ padding: '100px 0 120px', background: 'linear-gradient(180deg, #f7f8fb 0%, #ffffff 100%)', position: 'relative', overflow: 'hidden' }}>
            {/* Decorative blobs */}
            <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,164,90,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(7,22,40,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '3.5rem' }}
                >
                    <div className="section-label" style={{ justifyContent: 'center' }}>Anfrage stellen</div>
                    <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem', color: 'var(--accent-secondary)' }}>
                        Kontakt & kostenlose Erstberatung
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.8 }}>
                        In wenigen Schritten zu Ihrem unverbindlichen Angebot. Wir melden uns innerhalb von 24 Stunden.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    style={{
                        display: 'flex', flexWrap: 'wrap',
                        borderRadius: '28px',
                        overflow: 'hidden',
                        boxShadow: '0 30px 80px rgba(7,22,40,0.14)',
                        border: '1px solid rgba(201,164,90,0.15)',
                    }}
                >
                    {/* LEFT PANEL */}
                    <div style={{
                        flex: '1 1 320px',
                        padding: '3rem 2.5rem',
                        background: 'linear-gradient(160deg, #071628 0%, #0e2a4a 60%, #0a1f38 100%)',
                        color: 'white',
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        {/* Decorative orb */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
                            transition={{ duration: 8, repeat: Infinity }}
                            style={{ position: 'absolute', top: '-40px', right: '-40px', width: '250px', height: '250px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,164,90,0.2) 0%, transparent 70%)', pointerEvents: 'none' }}
                        />
                        <motion.div
                            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
                            transition={{ duration: 10, repeat: Infinity }}
                            style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(26,122,149,0.2) 0%, transparent 70%)', pointerEvents: 'none' }}
                        />

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.85 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                    background: 'rgba(201,164,90,0.18)', border: '1px solid rgba(201,164,90,0.45)',
                                    color: '#e8cc85', padding: '0.45rem 1.2rem',
                                    borderRadius: '50px', fontSize: '0.78rem', fontWeight: 700,
                                    letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.75rem',
                                }}
                            >
                                ✦ Direktkontakt
                            </motion.div>

                            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'white', marginBottom: '0.75rem', fontWeight: 800, lineHeight: 1.2 }}>
                                Kontakt & Beratung
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.72)', marginBottom: '2.5rem', fontSize: '0.97rem', lineHeight: 1.75 }}>
                                Lassen Sie sich kostenlos beraten oder beantragen Sie direkt eine Immobilienbewertung in Osnabrück und der Region.
                            </p>

                            {[
                                { icon: '📞', text: '+49 (0) 541 - 600 99 220' },
                                { icon: '✉️', text: 'info@lasarz.com' },
                                { icon: '📍', text: 'Katharinenstraße 111, 49078 Osnabrück' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.1, duration: 0.45 }}
                                    style={{ display: 'flex', alignItems: 'flex-start', gap: '0.9rem', marginBottom: '1.1rem' }}
                                >
                                    <span style={{ fontSize: '1.2rem', color: '#c9a45a', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                                    <span style={{ color: 'rgba(255,255,255,0.88)', fontSize: '0.97rem', lineHeight: 1.55 }}>{item.text}</span>
                                </motion.div>
                            ))}

                            <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '2rem', marginTop: '2rem' }}>
                                <h3 style={{ fontSize: '1.1rem', color: '#c9a45a', marginBottom: '0.6rem', fontWeight: 700 }}>Lieber direkt buchen?</h3>
                                <p style={{ color: 'rgba(255,255,255,0.68)', marginBottom: '1.3rem', fontSize: '0.88rem', lineHeight: 1.65 }}>
                                    Buchen Sie Ihren Vor-Ort-Termin bequem online.
                                </p>
                                <motion.a
                                    whileHover={{ scale: 1.04, boxShadow: '0 10px 28px rgba(201,164,90,0.45)' }}
                                    whileTap={{ scale: 0.97 }}
                                    href="#termin-buchen"
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                        padding: '0.7rem 1.6rem',
                                        background: 'rgba(201,164,90,0.15)',
                                        border: '1.5px solid rgba(201,164,90,0.55)',
                                        color: '#e8cc85',
                                        borderRadius: '50px',
                                        fontSize: '0.88rem', fontWeight: 700,
                                        textDecoration: 'none',
                                        transition: 'all 0.25s ease',
                                    }}
                                >
                                    📅 Zum Terminplaner
                                </motion.a>
                            </div>

                            {/* Trust badges */}
                            <div style={{ marginTop: '2.5rem', padding: '1.25rem', background: 'rgba(255,255,255,0.06)', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.75rem', fontWeight: 700 }}>Zertifiziert & anerkannt</p>
                                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                    {['BVS', 'DIA', 'REV', 'SV-R'].map(badge => (
                                        <span key={badge} style={{
                                            padding: '3px 10px', borderRadius: '6px',
                                            background: 'rgba(201,164,90,0.2)', border: '1px solid rgba(201,164,90,0.35)',
                                            color: '#c9a45a', fontSize: '0.72rem', fontWeight: 800,
                                            letterSpacing: '1px'
                                        }}>{badge}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT PANEL — multi-step form */}
                    <div style={{ flex: '1 1 460px', padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', background: 'white', minHeight: '580px' }}>

                        {/* Step progress dots */}
                        {step <= 5 && (
                            <div style={{ marginBottom: '2.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '1rem' }}>
                                    {[1, 2, 3, 4, 5].map((s, i) => (
                                        <div key={s} style={{ display: 'flex', alignItems: 'center', flex: s < 5 ? 1 : 'none' }}>
                                            <motion.div
                                                animate={step === s ? { scale: [1, 1.12, 1] } : {}}
                                                transition={{ duration: 0.5, repeat: step === s ? Infinity : 0, repeatDelay: 2 }}
                                                className={`step-dot ${step === s ? 'active' : step > s ? 'completed' : ''}`}
                                            >
                                                {step > s ? (
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><polyline points="2,6 5,9 10,3" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                                ) : s}
                                            </motion.div>
                                            {s < 5 && (
                                                <div style={{ flex: 1, height: '2px', background: step > s ? 'var(--accent-primary)' : 'var(--border-color)', transition: 'background 0.4s ease', margin: '0 4px' }} />
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        Schritt {step} — {stepTitles[step]}
                                    </span>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                                        {Math.round(((step - 1) / 5) * 100)}% abgeschlossen
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Animated step content */}
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                            <AnimatePresence mode="wait" custom={direction}>
                                {step === 1 && (
                                    <motion.div key="step1" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3, ease: 'easeInOut' }} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem', color: 'var(--accent-secondary)', fontWeight: 800 }}>Was ist der Anlass?</h3>
                                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: 1.6 }}>Wählen Sie den Hauptgrund für Ihre Bewertungsanfrage.</p>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 165px), 1fr))', gap: '0.85rem', flex: 1 }}>
                                            <OptionCard field="anlass" id="erbschaft" label="Erbschaft / Schenkung" desc="Freibeträge & Schenkungsteuer" icon={icons.erbschaft} />
                                            <OptionCard field="anlass" id="scheidung" label="Scheidung / Zugewinn" desc="Gerichtsverwertbar & Neutral" icon={icons.scheidung} />
                                            <OptionCard field="anlass" id="kauf_verkauf" label="Kauf oder Verkauf" desc="Kaufpreisprüfung & Marktpreis" icon={icons.kauf_verkauf} />
                                            <OptionCard field="anlass" id="steuer" label="Finanzamt / AfA" desc="Nutzungsdauer & Steuererklärung" icon={icons.steuer} />
                                            <OptionCard field="anlass" id="sonstiges" label="Sonstiges / Beratung" desc="Individuelle Anliegen" icon={icons.sonstiges} />
                                        </div>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div key="step2" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3, ease: 'easeInOut' }} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem', color: 'var(--accent-secondary)', fontWeight: 800 }}>Welche Leistung benötigen Sie?</h3>
                                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: 1.6 }}>Keine Sorge – wir prüfen gemeinsam, was für Ihren Fall am besten passt.</p>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 165px), 1fr))', gap: '0.85rem', flex: 1 }}>
                                            <OptionCard field="gutachten" id="verkehrswert" label="Verkehrswertgutachten" desc="Offiziell nach § 194 BauGB" icon={icons.verkehrswert} />
                                            <OptionCard field="gutachten" id="kurzgutachten" label="Kurzgutachten" desc="Kompakte Wertermittlung" icon={icons.kurzgutachten} />
                                            <OptionCard field="gutachten" id="kaufberatung" label="Kaufberatung" desc="Kaufpreisprüfung vor Ort" icon={icons.kaufberatung} />
                                            <OptionCard field="gutachten" id="beratung" label="Weiß nicht / Erstberatung" desc="Kostenlose Klärung" icon={icons.beratung} />
                                        </div>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div key="step3" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3, ease: 'easeInOut' }} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem', color: 'var(--accent-secondary)', fontWeight: 800 }}>Um welchen Immobilientyp handelt es sich?</h3>
                                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: 1.6 }}>Die Art der Immobilie bestimmt das Bewertungsverfahren.</p>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 165px), 1fr))', gap: '0.85rem', flex: 1 }}>
                                            <OptionCard field="typ" id="einfamilienhaus" label="Haus / Zweifamilienhaus" desc="Freistehend, DHH, Reiheneck" icon={icons.einfamilienhaus} />
                                            <OptionCard field="typ" id="mehrfamilienhaus" label="Mehrfamilienhaus" desc="Wohn- & Geschäftshäuser" icon={icons.mehrfamilienhaus} />
                                            <OptionCard field="typ" id="eigentumswohnung" label="Eigentumswohnung" desc="Eigentum in einer WEG" icon={icons.eigentumswohnung} />
                                            <OptionCard field="typ" id="gewerbe" label="Gewerbeimmobilie" desc="Büro, Logistik, Praxis" icon={icons.gewerbe} />
                                            <OptionCard field="typ" id="grundstueck" label="Grundstück" desc="Bebaut oder unbebaut" icon={icons.grundstueck} />
                                        </div>
                                    </motion.div>
                                )}

                                {step === 4 && (
                                    <motion.div key="step4" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3, ease: 'easeInOut' }} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem', color: 'var(--accent-secondary)', fontWeight: 800 }}>Eckdaten der Immobilie</h3>
                                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.9rem', lineHeight: 1.6 }}>Ungefähre Angaben reichen für ein erstes Orientierungsgespräch völlig aus.</p>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: '480px', width: '100%' }}>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
                                                <div>
                                                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.4rem', letterSpacing: '0.3px' }}>Postleitzahl *</label>
                                                    <input type="text" name="plz" placeholder="49078" value={formData.plz} onChange={handleInputChange} required className="form-input" />
                                                </div>
                                                <div>
                                                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Ort *</label>
                                                    <input type="text" name="ort" placeholder="Osnabrück" value={formData.ort} onChange={handleInputChange} required className="form-input" />
                                                </div>
                                            </div>
                                            <div>
                                                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Wohnfläche / Nutzfläche (ca. m²) *</label>
                                                <input type="number" name="flaeche" placeholder="z. B. 130" value={formData.flaeche} onChange={handleInputChange} required className="form-input" />
                                            </div>
                                            <div>
                                                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Baujahr (ca.) *</label>
                                                <input type="number" name="baujahr" placeholder="z. B. 1995" value={formData.baujahr} onChange={handleInputChange} required className="form-input" />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 5 && (
                                    <motion.div key="step5" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3, ease: 'easeInOut' }} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem', color: 'var(--accent-secondary)', fontWeight: 800 }}>Wohin dürfen wir Ihr Angebot senden?</h3>
                                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.9rem', lineHeight: 1.6 }}>Wir behandeln Ihre Angaben streng vertraulich. Sie erhalten Ihr Angebot in Kürze.</p>
                                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', maxWidth: '480px', width: '100%' }}>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                                <div>
                                                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Vorname *</label>
                                                    <input type="text" name="vorname" placeholder="Vorname" value={formData.vorname} onChange={handleInputChange} required className="form-input" />
                                                </div>
                                                <div>
                                                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Nachname *</label>
                                                    <input type="text" name="nachname" placeholder="Nachname" value={formData.nachname} onChange={handleInputChange} required className="form-input" />
                                                </div>
                                            </div>
                                            <div>
                                                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>E-Mail-Adresse *</label>
                                                <input type="email" name="email" placeholder="ihre.mail@beispiel.de" value={formData.email} onChange={handleInputChange} required className="form-input" />
                                            </div>
                                            <div>
                                                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Telefonnummer *</label>
                                                <input type="tel" name="telefon" placeholder="0170 1234567" value={formData.telefon} onChange={handleInputChange} required className="form-input" />
                                            </div>
                                            <div>
                                                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>Nachricht (optional)</label>
                                                <textarea name="nachricht" placeholder="Besonderheiten der Immobilie..." value={formData.nachricht} onChange={handleInputChange} rows={3} className="form-input" style={{ resize: 'none' }} />
                                            </div>
                                        </form>
                                    </motion.div>
                                )}

                                {step === 6 && (
                                    <motion.div key="step6" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: 'easeOut' }} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem 0' }}>
                                        <motion.div
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                                            style={{
                                                width: '90px', height: '90px', borderRadius: '50%',
                                                background: 'linear-gradient(135deg, #c9a45a, #e8cc85)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                marginBottom: '1.75rem',
                                                boxShadow: '0 16px 40px rgba(201,164,90,0.4)',
                                            }}
                                        >
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><polyline points="8,20 16,28 32,12" stroke="#071628" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        </motion.div>
                                        <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ fontSize: '1.75rem', color: 'var(--accent-secondary)', marginBottom: '0.75rem', fontWeight: 800 }}>
                                            Anfrage erfolgreich!
                                        </motion.h3>
                                        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ color: 'var(--text-secondary)', maxWidth: '420px', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                                            Vielen Dank für Ihr Vertrauen, {formData.vorname}! Wir haben Ihre Daten erhalten und melden uns innerhalb von <strong>24 Stunden</strong> bei Ihnen.
                                        </motion.p>
                                        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} style={{ background: 'var(--bg-secondary)', padding: '1.25rem 1.5rem', borderRadius: '14px', textAlign: 'left', width: '100%', maxWidth: '420px', fontSize: '0.88rem', color: 'var(--text-secondary)', border: '1px solid var(--border-color)', lineHeight: 1.65 }}>
                                            <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--accent-secondary)' }}>Ihre Angaben im Überblick:</strong>
                                            <div>📋 Anlass: <strong>{formData.anlass === 'erbschaft' ? 'Erbschaft/Schenkung' : formData.anlass === 'scheidung' ? 'Scheidung/Zugewinn' : formData.anlass === 'kauf_verkauf' ? 'Kauf/Verkauf' : formData.anlass === 'steuer' ? 'Steuern/AfA' : 'Sonstiges'}</strong></div>
                                            <div style={{ marginTop: '0.3rem' }}>🏠 Objekt: <strong>{formData.typ} ({formData.flaeche} m² in {formData.plz} {formData.ort})</strong></div>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Navigation */}
                        {step <= 5 && (
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                                <div>
                                    {step > 1 && (
                                        <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }} type="button" className="btn btn-secondary" onClick={handleBack} style={{ fontSize: '0.9rem', padding: '0.65rem 1.4rem' }}>
                                            ← Zurück
                                        </motion.button>
                                    )}
                                </div>
                                <div>
                                    {step < 5 ? (
                                        <motion.button
                                            whileHover={!isNextDisabled() ? { scale: 1.04 } : {}}
                                            whileTap={!isNextDisabled() ? { scale: 0.96 } : {}}
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={handleNext}
                                            disabled={isNextDisabled()}
                                            style={{ fontSize: '0.9rem', padding: '0.65rem 2rem', opacity: isNextDisabled() ? 0.45 : 1, cursor: isNextDisabled() ? 'not-allowed' : 'pointer' }}
                                        >
                                            Weiter →
                                        </motion.button>
                                    ) : (
                                        <motion.button
                                            whileHover={{ scale: 1.04 }}
                                            whileTap={{ scale: 0.96 }}
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={isSubmitting}
                                            onClick={handleSubmit}
                                            style={{ fontSize: '0.9rem', padding: '0.65rem 2.2rem' }}
                                        >
                                            {isSubmitting ? '⏳ Wird gesendet...' : '✓ Unverbindlich senden'}
                                        </motion.button>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
