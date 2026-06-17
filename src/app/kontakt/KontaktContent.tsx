'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Calendar, CheckCircle, ArrowRight, MessageCircle, Navigation } from 'lucide-react';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const locations = [
    {
        city: 'Osnabrück',
        desc: 'Zentrale',
        address: 'Katharinenstraße 111\n49078 Osnabrück',
        phone: '+49 (0) 541 - 600 99 220',
        email: 'osnabrueck@lasarz.com',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.918520892796!2d8.03730797686774!3d52.26305005860269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9e59d5fb706db%3A0xe13ee79b9aef3426!2sKatharinenstra%C3%9Fe%20111%2C%2049078%20Osnabr%C3%BCck!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde'
    },
    {
        city: 'Münster',
        desc: 'Sachverständigenbüro',
        address: 'c/o Lasarz Sachverständigenbüro\nMünster',
        phone: '+49 (0) 541 - 600 99 220',
        email: 'muenster@lasarz.com',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156545.69460593438!2d7.47125345718764!3d51.95013149814424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b9bac1aa5e4f45%3A0x425f187a4128f70!2sM%C3%BCnster!5e0!3m2!1sde!2sde!4v1700000000001!5m2!1sde!2sde'
    },
    {
        city: 'Flensburg',
        desc: 'Standort Nord',
        address: 'Norderstraße 52-56\n24939 Flensburg',
        phone: '+49 (0) 461 - 167 23 002',
        email: 'flensburg@lasarz.com',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d146950.55139044236!2d9.336111075677936!3d54.786529329158315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b342a3e51d953d%3A0x4248963c6580cb0!2sFlensburg!5e0!3m2!1sde!2sde!4v1700000000002!5m2!1sde!2sde'
    },

    {
        city: 'Bünde',
        desc: 'Partnerbüro',
        address: 'Holzhauser Straße 79\n32257 Bünde',
        phone: '+49 (0) 5223 7941350',
        email: 'buende@lasarz.com',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156475.29524037844!2d8.48700259836365!3d52.2033878696144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ba3f56b9c7b9ab%3A0x425e44eeaf9ed60!2sB%C3%BCnde!5e0!3m2!1sde!2sde!4v1700000000006!5m2!1sde!2sde'
    }
];

export default function KontaktContent() {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [showCallbackForm, setShowCallbackForm] = useState(false);

    // State for interactive features
    const [isOpen, setIsOpen] = useState(false);
    const [activeLocation, setActiveLocation] = useState(locations[0]);

    // Check opening hours
    useEffect(() => {
        const checkStatus = () => {
            const now = new Date();
            const day = now.getDay();
            const hour = now.getHours();

            if (day >= 1 && day <= 5) {
                setIsOpen(hour >= 8 && hour < 17);
            } else if (day === 6) {
                setIsOpen(hour >= 9 && hour < 13);
            } else {
                setIsOpen(false);
            }
        };
        checkStatus();
        const interval = setInterval(checkStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
            setTimeout(() => setSubmitSuccess(false), 5000);
        }, 1000);
    };

    const handleCallbackSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Anfrage für Rückruf wurde versendet. Wir melden uns in Kürze bei Ihnen.');
        setShowCallbackForm(false);
    };

    return (
        <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>

            {/* 1. HERO SECTION (Premium Redesign) */}
            <section style={{
                position: 'relative',
                padding: '160px 0 100px 0',
                background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
                borderBottom: '1px solid var(--border-color)',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.4, backgroundImage: 'radial-gradient(circle at 15% 50%, var(--accent-glow-strong), transparent 50%), radial-gradient(circle at 85% 30%, rgba(26,117,141,0.05), transparent 50%)' }} />
                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                    <motion.div variants={staggerContainer} initial="hidden" animate="visible" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <motion.span variants={fadeUp} style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '50px', background: 'var(--accent-glow)', color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                            Kontakt
                        </motion.span>
                        <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: 'var(--accent-secondary)', marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                            Lassen Sie uns <br /><span style={{ color: 'var(--accent-primary)' }}>gemeinsam Werte</span> schaffen
                        </motion.h1>
                        <motion.p variants={fadeUp} style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                            Ob kostenlose Erstberatung, Rückruf oder direkte Nachricht – unser zertifiziertes Team steht Ihnen mit höchster Diskretion und Expertise zur Verfügung.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* 2. CONTACT CARDS (Visual Grid) */}
            <section style={{ padding: '60px 0', marginTop: '-40px', position: 'relative', zIndex: 20 }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {/* Phone Card */}
                        <motion.a href="tel:08006648714" whileHover={{ y: -8, scale: 1.02 }} style={{ textDecoration: 'none' }}>
                            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem 1.5rem' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-glow-strong), transparent)', border: '1px solid var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', marginBottom: '1.25rem' }}>
                                    <Phone size={26} />
                                </div>
                                <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Telefon</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>Gebührenfrei aus dem dt. Netz</p>
                                <span style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '1.1rem' }}>0800 / 66 48 714</span>
                            </div>
                        </motion.a>


                        {/* Email Card */}
                        <motion.a href="mailto:info@lasarz.com" whileHover={{ y: -8, scale: 1.02 }} style={{ textDecoration: 'none' }}>
                            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem 1.5rem' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(26,117,141,0.1), transparent)', border: '1px solid rgba(26,117,141,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(26,117,141,1)', marginBottom: '1.25rem' }}>
                                    <Mail size={26} />
                                </div>
                                <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>E-Mail</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>Wir antworten i.d.R. in 24h</p>
                                <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1.1rem' }}>info@lasarz.com</span>
                            </div>
                        </motion.a>

                        {/* Callback Card */}
                        <motion.div whileHover={{ y: -8, scale: 1.02 }} onClick={() => setShowCallbackForm(true)} style={{ cursor: 'pointer' }}>
                            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem 1.5rem', background: 'linear-gradient(135deg, var(--bg-primary), var(--bg-secondary))' }}>
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--bg-secondary)', border: '1px solid var(--border-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
                                    <Phone size={26} style={{ transform: 'scaleX(-1)' }} />
                                </div>
                                <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem' }}>Rückruf</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>Sie wünschen einen Anruf?</p>
                                <span style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '1.1rem' }}>Jetzt anfordern</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Expandable Callback Form */}
                    <AnimatePresence>
                        {showCallbackForm && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: 'auto', marginTop: '2rem' }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                style={{ overflow: 'hidden' }}
                            >
                                <div className="glass-card" style={{ padding: '2.5rem', maxWidth: '600px', margin: '0 auto', border: '1px solid var(--accent-primary)' }}>
                                    <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-secondary)', marginBottom: '1.5rem', textAlign: 'center' }}>Rückruf anfordern</h3>
                                    <form onSubmit={handleCallbackSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                            <input type="text" placeholder="Name" className="form-input" required />
                                            <input type="tel" placeholder="Telefonnummer" className="form-input" required />
                                        </div>
                                        <button type="submit" className="btn btn-primary" style={{ width: '100%', border: 'none' }}>Rückruf anfordern</button>
                                        <button type="button" onClick={() => setShowCallbackForm(false)} className="btn btn-outline" style={{ width: '100%' }}>Abbrechen</button>
                                    </form>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            <section className="section" style={{ padding: '60px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '4rem' }}>

                        {/* 3. MAIN FORM & HOURS */}
                        <div id="kontaktformular" style={{ scrollMarginTop: '120px' }}>
                            {/* Live Opening Hours */}
                            <div className="glass-card" style={{ marginBottom: '3rem', padding: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <Clock size={24} color="var(--accent-primary)" />
                                        <h3 style={{ fontSize: '1.4rem', color: 'var(--accent-secondary)', margin: 0 }}>Öffnungszeiten</h3>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: isOpen ? 'rgba(37,211,102,0.1)' : 'rgba(239,68,68,0.1)', padding: '6px 12px', borderRadius: '50px' }}>
                                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: isOpen ? '#25D366' : '#EF4444', boxShadow: `0 0 8px ${isOpen ? '#25D366' : '#EF4444'}`, animation: isOpen ? 'pulse 2s infinite' : 'none' }} />
                                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: isOpen ? '#166534' : '#991B1B' }}>
                                            {isOpen ? 'Jetzt geöffnet' : 'Derzeit geschlossen'}
                                        </span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px dashed var(--border-color)', color: 'var(--text-primary)', fontWeight: 500 }}>
                                        <span>Montag - Freitag</span>
                                        <span>08:00 - 17:00 Uhr</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px dashed var(--border-color)', color: 'var(--text-secondary)' }}>
                                        <span>Samstag</span>
                                        <span>09:00 - 13:00 Uhr</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                                        <span>Sonntag & Feiertage</span>
                                        <span>Geschlossen</span>
                                    </div>
                                </div>
                            </div>

                            {/* Standard Form */}
                            <div className="glass-card" style={{ padding: '2.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                    <Send size={24} color="var(--accent-primary)" />
                                    <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-secondary)', margin: 0 }}>Nachricht senden</h2>
                                </div>

                                <AnimatePresence>
                                    {submitSuccess && (
                                        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} style={{ backgroundColor: 'rgba(37, 211, 102, 0.1)', padding: '1.25rem', borderRadius: '8px', marginBottom: '2rem', border: '1px solid rgba(37, 211, 102, 0.3)', display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#166534', fontWeight: 500 }}>
                                            <CheckCircle size={20} /> Nachricht erfolgreich gesendet!
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                                        <input type="text" placeholder="Vorname" name="firstName" value={formData.firstName} onChange={handleChange} className="form-input" required />
                                        <input type="text" placeholder="Nachname" name="lastName" value={formData.lastName} onChange={handleChange} className="form-input" required />
                                    </div>
                                    <input type="email" placeholder="E-Mail" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
                                    <input type="tel" placeholder="Telefon (optional)" name="phone" value={formData.phone} onChange={handleChange} className="form-input" />
                                    <textarea placeholder="Ihre Nachricht" name="message" value={formData.message} onChange={handleChange} className="form-input" rows={5} required style={{ resize: 'vertical' }}></textarea>
                                    <label style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--text-secondary)', fontSize: '0.9rem', cursor: 'pointer' }}>
                                        <input type="checkbox" required style={{ marginTop: '0.2rem', accentColor: 'var(--accent-primary)' }} />
                                        <span style={{ lineHeight: 1.4 }}>Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.</span>
                                    </label>
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', border: 'none', cursor: 'pointer', display: 'flex', gap: '0.5rem', justifyContent: 'center' }} disabled={isSubmitting}>
                                        {isSubmitting ? 'Senden...' : <><Send size={18} /> Absenden</>}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* 4. INTERACTIVE LOCATIONS MAP */}
                        <div style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--accent-secondary)', fontWeight: 'bold' }}>
                                Unsere Standorte
                            </h2>

                            <div className="glass-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                {/* Map Viewport */}
                                <div style={{ height: '320px', width: '100%', backgroundColor: 'var(--bg-tertiary)', position: 'relative' }}>
                                    <AnimatePresence mode="wait">
                                        <motion.iframe
                                            key={activeLocation.city}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            src={activeLocation.mapSrc}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0, position: 'absolute', inset: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                        />
                                    </AnimatePresence>
                                    <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'var(--bg-primary)', padding: '0.5rem 1rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', fontWeight: 600, color: 'var(--accent-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Navigation size={16} color="var(--accent-primary)" /> {activeLocation.city}
                                    </div>
                                </div>

                                {/* Active Location Details */}
                                <div style={{ padding: '2rem', borderBottom: '1px solid var(--border-color)' }}>
                                    <h3 style={{ fontSize: '1.4rem', color: 'var(--accent-secondary)', marginBottom: '0.25rem' }}>{activeLocation.city} <span style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 500, marginLeft: '0.5rem' }}>{activeLocation.desc}</span></h3>
                                    <p style={{ color: 'var(--text-secondary)', whiteSpace: 'pre-line', marginBottom: '1.5rem', lineHeight: 1.6 }}>{activeLocation.address}</p>
                                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                        <a href={`tel:${activeLocation.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 500, textDecoration: 'none' }}><Phone size={16} color="var(--accent-primary)" /> {activeLocation.phone}</a>
                                        <a href={`mailto:${activeLocation.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 500, textDecoration: 'none' }}><Mail size={16} color="var(--accent-primary)" /> {activeLocation.email}</a>
                                    </div>
                                </div>

                                {/* Location Tabs Selector */}
                                <div style={{ padding: '1.5rem 2rem', background: 'var(--bg-secondary)', display: 'flex', gap: '0.75rem', overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}>
                                    {locations.map((loc) => (
                                        <button
                                            key={loc.city}
                                            onClick={() => setActiveLocation(loc)}
                                            style={{
                                                padding: '0.6rem 1.25rem',
                                                borderRadius: '50px',
                                                border: `1px solid ${activeLocation.city === loc.city ? 'var(--accent-primary)' : 'var(--border-strong)'}`,
                                                background: activeLocation.city === loc.city ? 'var(--accent-primary)' : 'transparent',
                                                color: activeLocation.city === loc.city ? 'white' : 'var(--text-secondary)',
                                                fontWeight: activeLocation.city === loc.city ? 600 : 500,
                                                cursor: 'pointer',
                                                whiteSpace: 'nowrap',
                                                transition: 'all 0.2s',
                                                flexShrink: 0
                                            }}
                                        >
                                            {loc.city}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}