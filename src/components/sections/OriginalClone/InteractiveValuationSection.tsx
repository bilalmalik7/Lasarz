'use client';
import { useState } from 'react';
import { OriginalValuationTool } from './OriginalValuationTool';

const sliderImages = [
    { src: '/images/portrait.jpg', alt: 'Marc-André Lasarz Portrait' },
    { src: '/images/original_clone/MG_1880-1024x690.jpg', alt: 'Office Interior' },
    { src: '/images/original_clone/HASELAND_11-1024x690.jpg', alt: 'Property Exterior' }
];

export function InteractiveValuationSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

    return (
        <section id="bewertung" className="section" style={{ backgroundColor: '#f9f9f9', padding: '80px 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                    {/* Left Side: Lasarz Picture Slider + Text/Contact Form overlay */}
                    <div style={{ position: 'relative', width: '100%', minHeight: '500px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>

                        {/* Image Slider */}
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
                            {sliderImages.map((image, index) => (
                                <div
                                    key={index}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        opacity: index === currentSlide ? 1 : 0,
                                        transition: 'opacity 1s ease-in-out',
                                        zIndex: index === currentSlide ? 1 : 0
                                    }}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Slider Controls */}
                        <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 1rem', zIndex: 10 }}>
                            <button onClick={prevSlide} style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer', backdropFilter: 'blur(4px)', transition: 'background 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.4)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}>←</button>
                            <button onClick={nextSlide} style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer', backdropFilter: 'blur(4px)', transition: 'background 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.4)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}>→</button>
                        </div>

                        {/* Overlay Gradient for text readability */}
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(18, 43, 64, 0.9) 0%, rgba(18, 43, 64, 0.1) 100%)', zIndex: 1 }} />

                        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', color: 'white', zIndex: 2 }}>
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Marc-André Lasarz</h3>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.9, textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                                Dipl.-Sachverständiger (DIA) & Zertifizierter Immobiliengutachter
                            </p>

                            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', color: 'var(--text-primary)' }}>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--accent-secondary)' }}>Schnellkontakt</h4>
                                <form className="flex-col gap-sm">
                                    <input type="text" placeholder="Name" className="form-input" required style={{ padding: '0.6rem 1rem' }} />
                                    <input type="tel" placeholder="Telefon" className="form-input" required style={{ padding: '0.6rem 1rem' }} />
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.6rem', marginTop: '0.5rem' }}>Rückruf anfordern</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: The Interactive Valuation Tool */}
                    <div>
                        <div style={{ marginBottom: '2rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Immobilienbewertung</h2>
                            <h3 style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: 400 }}>Ermitteln Sie jetzt den Wert Ihrer Immobilie.</h3>
                        </div>
                        <OriginalValuationTool compact />
                    </div>

                </div>
            </div>
        </section>
    );
}
