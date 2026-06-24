'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { Shield, Check, MapPin, ChevronLeft } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────
interface NominatimResult {
    place_id: number;
    display_name: string;
    lat: string;
    lon: string;
}

// ─── Property-type icons (realistic SVG) ─────────────────────────────────────
const HausIcon = ({ active }: { active: boolean }) => (
    <svg width="52" height="52" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Roof */}
        <polygon points="32,6 58,28 6,28" fill={active ? '#1A758D' : '#b0c4ce'} />
        {/* Chimney */}
        <rect x="44" y="12" width="6" height="14" rx="1" fill={active ? '#0f5a70' : '#8fa8b2'} />
        {/* Chimney smoke puffs */}
        <circle cx="47" cy="10" r="2.5" fill={active ? '#c5a36c' : '#c0c8cc'} opacity="0.7" />
        <circle cx="49.5" cy="7.5" r="1.8" fill={active ? '#c5a36c' : '#c0c8cc'} opacity="0.5" />
        {/* Walls */}
        <rect x="8" y="27" width="48" height="30" rx="2" fill={active ? '#1A758D' : '#c8d8df'} />
        {/* Door */}
        <rect x="26" y="40" width="12" height="17" rx="2" fill={active ? '#0A192F' : '#8fa8b2'} />
        {/* Door knob */}
        <circle cx="35" cy="49" r="1.2" fill={active ? '#c5a36c' : '#fff'} />
        {/* Left window */}
        <rect x="11" y="33" width="11" height="10" rx="1.5" fill={active ? '#0A192F' : '#8fa8b2'} />
        <line x1="16.5" y1="33" x2="16.5" y2="43" stroke={active ? '#1A758D' : '#aac'} strokeWidth="1" />
        <line x1="11" y1="38" x2="22" y2="38" stroke={active ? '#1A758D' : '#aac'} strokeWidth="1" />
        {/* Right window */}
        <rect x="42" y="33" width="11" height="10" rx="1.5" fill={active ? '#0A192F' : '#8fa8b2'} />
        <line x1="47.5" y1="33" x2="47.5" y2="43" stroke={active ? '#1A758D' : '#aac'} strokeWidth="1" />
        <line x1="42" y1="38" x2="53" y2="38" stroke={active ? '#1A758D' : '#aac'} strokeWidth="1" />
    </svg>
);

const WohnungIcon = ({ active }: { active: boolean }) => (
    <svg width="52" height="52" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Building body */}
        <rect x="8" y="14" width="48" height="44" rx="2" fill={active ? '#1A758D' : '#c8d8df'} />
        {/* Roof ledge */}
        <rect x="5" y="11" width="54" height="6" rx="1.5" fill={active ? '#0f5a70' : '#b0c4ce'} />
        {/* Floor dividers */}
        <line x1="8" y1="28" x2="56" y2="28" stroke={active ? '#0f5a70' : '#a8bcc5'} strokeWidth="1.5" />
        <line x1="8" y1="42" x2="56" y2="42" stroke={active ? '#0f5a70' : '#a8bcc5'} strokeWidth="1.5" />
        {/* Windows row 1 */}
        <rect x="13" y="17" width="9" height="8" rx="1" fill={active ? '#c5a36c' : '#8fa8b2'} opacity="0.9" />
        <rect x="27.5" y="17" width="9" height="8" rx="1" fill={active ? '#0A192F' : '#8fa8b2'} />
        <rect x="42" y="17" width="9" height="8" rx="1" fill={active ? '#c5a36c' : '#8fa8b2'} opacity="0.9" />
        {/* Windows row 2 */}
        <rect x="13" y="31" width="9" height="8" rx="1" fill={active ? '#0A192F' : '#8fa8b2'} />
        <rect x="27.5" y="31" width="9" height="8" rx="1" fill={active ? '#c5a36c' : '#8fa8b2'} opacity="0.9" />
        <rect x="42" y="31" width="9" height="8" rx="1" fill={active ? '#0A192F' : '#8fa8b2'} />
        {/* Door */}
        <rect x="24" y="45" width="16" height="13" rx="1.5" fill={active ? '#0A192F' : '#8fa8b2'} />
        <circle cx="38" cy="52" r="1.2" fill={active ? '#c5a36c' : '#fff'} />
        {/* Door arch */}
        <path d="M24,46 Q32,40 40,46" fill={active ? '#0f5a70' : '#b0c4ce'} />
    </svg>
);

const VermietungIcon = ({ active }: { active: boolean }) => (
    <svg width="52" height="52" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* House base */}
        <polygon points="32,7 54,26 10,26" fill={active ? '#1A758D' : '#b0c4ce'} />
        <rect x="10" y="25" width="44" height="28" rx="2" fill={active ? '#1A758D' : '#c8d8df'} />
        {/* Door */}
        <rect x="24" y="37" width="11" height="16" rx="1.5" fill={active ? '#0A192F' : '#8fa8b2'} />
        {/* Window */}
        <rect x="38" y="30" width="10" height="9" rx="1" fill={active ? '#0A192F' : '#8fa8b2'} />
        <line x1="43" y1="30" x2="43" y2="39" stroke={active ? '#1A758D' : '#aac'} strokeWidth="1" />
        {/* Key icon overlay – top right corner */}
        <circle cx="50" cy="14" r="9" fill={active ? '#0A192F' : '#8fa8b2'} />
        <circle cx="50" cy="13" r="4" fill="none" stroke={active ? '#c5a36c' : '#fff'} strokeWidth="2" />
        <line x1="53.8" y1="16.8" x2="58" y2="21" stroke={active ? '#c5a36c' : '#fff'} strokeWidth="2" strokeLinecap="round" />
        <line x1="56.5" y1="19.5" x2="55" y2="21.5" stroke={active ? '#c5a36c' : '#fff'} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="58" y1="21" x2="56.5" y2="23" stroke={active ? '#c5a36c' : '#fff'} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const GrundstueckIcon = ({ active }: { active: boolean }) => (
    <svg width="52" height="52" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ground / land area */}
        <rect x="6" y="36" width="52" height="20" rx="2" fill={active ? '#1A758D' : '#c8d8df'} opacity="0.5" />
        {/* Land plot boundary */}
        <polygon
            points="10,36 54,36 58,52 6,52"
            fill={active ? 'rgba(26,117,141,0.25)' : 'rgba(176,196,206,0.3)'}
            stroke={active ? '#1A758D' : '#8fa8b2'}
            strokeWidth="2"
            strokeDasharray="4 2"
        />
        {/* Survey stakes / corner markers */}
        <rect x="8" y="31" width="4" height="10" rx="1" fill={active ? '#c5a36c' : '#8fa8b2'} />
        <polygon points="10,28 8,34 12,34" fill={active ? '#c5a36c' : '#8fa8b2'} />
        <rect x="52" y="31" width="4" height="10" rx="1" fill={active ? '#c5a36c' : '#8fa8b2'} />
        <polygon points="54,28 52,34 56,34" fill={active ? '#c5a36c' : '#8fa8b2'} />
        {/* Horizon / sky */}
        <path d="M6,36 Q20,28 32,30 Q44,32 58,36" fill="none" stroke={active ? '#0f5a70' : '#a8bcc5'} strokeWidth="1.5" />
        {/* Tree left */}
        <rect x="18" y="26" width="3" height="10" rx="1" fill={active ? '#0A192F' : '#8fa8b2'} />
        <ellipse cx="19.5" cy="22" rx="6" ry="7" fill={active ? '#1A758D' : '#b0c4ce'} opacity="0.85" />
        {/* Tree right */}
        <rect x="43" y="24" width="3" height="12" rx="1" fill={active ? '#0A192F' : '#8fa8b2'} />
        <ellipse cx="44.5" cy="20" rx="5" ry="6" fill={active ? '#1A758D' : '#b0c4ce'} opacity="0.85" />
        {/* Measurement arrow */}
        <line x1="12" y1="55" x2="52" y2="55" stroke={active ? '#c5a36c' : '#8fa8b2'} strokeWidth="1.5" />
        <polygon points="12,55 16,53 16,57" fill={active ? '#c5a36c' : '#8fa8b2'} />
        <polygon points="52,55 48,53 48,57" fill={active ? '#c5a36c' : '#8fa8b2'} />
    </svg>
);

// ─── Property types ───────────────────────────────────────────────────────────
const PROPERTY_TYPES = [
    { id: 'haus',        label: 'Haus',       Icon: HausIcon },
    { id: 'wohnung',     label: 'Wohnung',    Icon: WohnungIcon },
    { id: 'vermietung',  label: 'Vermietung', Icon: VermietungIcon },
    { id: 'grundstueck', label: 'Grundstück', Icon: GrundstueckIcon },
];

// ─── Address autocomplete hook (Nominatim) ────────────────────────────────────
function useAddressAutocomplete() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState<NominatimResult[]>([]);
    const [selected, setSelected] = useState<NominatimResult | null>(null);
    const [loading, setLoading] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const search = useCallback((val: string) => {
        setQuery(val);
        setSelected(null);
        if (timerRef.current) clearTimeout(timerRef.current);
        if (val.length < 4) { setSuggestions([]); return; }
        timerRef.current = setTimeout(async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(val)}&countrycodes=de&addressdetails=1&limit=5`,
                    { headers: { 'Accept-Language': 'de' } }
                );
                const data: NominatimResult[] = await res.json();
                setSuggestions(data);
            } catch { setSuggestions([]); }
            finally { setLoading(false); }
        }, 350);
    }, []);

    const pick = useCallback((item: NominatimResult) => {
        setSelected(item);
        setQuery(item.display_name.split(',').slice(0, 3).join(','));
        setSuggestions([]);
    }, []);

    return { query, suggestions, selected, loading, search, pick };
}

// ─── Mini OSM Map ─────────────────────────────────────────────────────────────
function MiniMap({ lat, lon }: { lat: string; lon: string }) {
    const zoom = 15;
    const src = `https://www.openstreetmap.org/export/embed.html?bbox=${+lon - 0.01},${+lat - 0.008},${+lon + 0.01},${+lat + 0.008}&layer=mapnik&marker=${lat},${lon}`;
    return (
        <div style={{
            marginTop: '1rem',
            borderRadius: '10px',
            overflow: 'hidden',
            border: '2px solid var(--accent-primary)',
            height: '200px',
            position: 'relative',
        }}>
            <iframe
                title="Karte"
                src={src}
                style={{ width: '100%', height: '100%', border: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer"
            />
            <div style={{
                position: 'absolute', bottom: 8, right: 8,
                background: 'rgba(10,25,47,0.85)',
                color: '#c5a36c',
                fontSize: '0.7rem',
                padding: '3px 7px',
                borderRadius: '4px',
                pointerEvents: 'none',
            }}>
                © OpenStreetMap
            </div>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function OriginalValuationTool({ compact = false }: { compact?: boolean }) {
    const [step, setStep] = useState(1);
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [formData, setFormData] = useState({ flaeche: '', grundstueck: '', baujahr: '', name: '', phone: '', email: '' });
    const addr = useAddressAutocomplete();

    // Auto-advance after type selection
    const handleTypeSelect = (id: string) => {
        setSelectedType(id);
        setTimeout(() => setStep(2), 320);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(3);
    };

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(4);
    };

    const stepLabel = ['Objektart', 'Eckdaten', 'Kontakt', 'Fertig'];

    return (
        <div style={{
            backgroundColor: 'white',
            padding: compact ? '28px 24px' : '40px',
            borderRadius: '12px',
            boxShadow: '0 12px 40px rgba(10,25,47,0.10)',
            margin: compact ? '0' : '0 auto',
            maxWidth: compact ? '100%' : '780px',
            fontFamily: 'inherit',
        }}>

            {/* ── Step indicator ── */}
            {step < 4 && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', marginBottom: '2rem' }}>
                    {stepLabel.slice(0, 3).map((label, i) => {
                        const n = i + 1;
                        const done = step > n;
                        const active = step === n;
                        return (
                            <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                                    <div style={{
                                        width: 32, height: 32, borderRadius: '50%',
                                        background: done ? '#1A758D' : active ? '#0A192F' : '#e5edf0',
                                        color: (done || active) ? '#fff' : '#8fa8b2',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '0.85rem', fontWeight: 700,
                                        transition: 'all 0.3s',
                                        border: active ? '2px solid #1A758D' : '2px solid transparent',
                                    }}>
                                        {done ? <Check size={15} /> : n}
                                    </div>
                                    <span style={{ fontSize: '0.7rem', color: active ? '#0A192F' : '#8fa8b2', fontWeight: active ? 700 : 400 }}>
                                        {label}
                                    </span>
                                </div>
                                {i < 2 && (
                                    <div style={{
                                        width: 60, height: 2, margin: '0 4px', marginBottom: '18px',
                                        background: done ? '#1A758D' : '#e5edf0',
                                        transition: 'background 0.3s',
                                    }} />
                                )}
                            </div>
                        );
                    })}
                </div>
            )}

            {/* ── Step 1: Property type ── */}
            {step === 1 && (
                <div>
                    <p style={{ textAlign: 'center', marginBottom: '1.75rem', fontSize: '1.05rem', color: '#0A192F', fontWeight: 500 }}>
                        Wofür möchten Sie eine <strong style={{ color: '#1A758D' }}>kostenlose Immobilienbewertung</strong> erhalten?
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.9rem' }}>
                        {PROPERTY_TYPES.map(({ id, label, Icon }) => {
                            const active = selectedType === id;
                            return (
                                <button
                                    key={id}
                                    onClick={() => handleTypeSelect(id)}
                                    style={{
                                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                                        justifyContent: 'center', gap: '0.75rem',
                                        padding: '1.5rem 0.75rem',
                                        border: `2px solid ${active ? '#1A758D' : '#e0eaed'}`,
                                        borderRadius: '10px',
                                        cursor: 'pointer',
                                        background: active ? 'rgba(26,117,141,0.06)' : 'white',
                                        transition: 'all 0.2s',
                                        outline: 'none',
                                    }}
                                    onMouseEnter={e => {
                                        if (!active) (e.currentTarget as HTMLButtonElement).style.borderColor = '#1A758D';
                                    }}
                                    onMouseLeave={e => {
                                        if (!active) (e.currentTarget as HTMLButtonElement).style.borderColor = '#e0eaed';
                                    }}
                                >
                                    <Icon active={active} />
                                    <span style={{ fontWeight: 600, fontSize: '0.9rem', color: active ? '#1A758D' : '#0A192F' }}>
                                        {label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.8rem', color: '#8fa8b2' }}>
                        Objektart auswählen – es geht automatisch weiter
                    </p>
                </div>
            )}

            {/* ── Step 2: Property details + address + map ── */}
            {step === 2 && (
                <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0A192F', marginBottom: '0.4rem' }}>
                        Eckdaten Ihrer Immobilie
                    </h3>
                    <p style={{ color: '#6b8a96', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                        Bitte geben Sie die Eckdaten und die Adresse Ihrer Immobilie an.
                    </p>

                    <form onSubmit={handleFormSubmit}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
                            <div>
                                <label style={labelStyle}>Wohnfläche (m²)</label>
                                <input
                                    type="number" min="1" placeholder="z.B. 120"
                                    value={formData.flaeche}
                                    onChange={e => setFormData(p => ({ ...p, flaeche: e.target.value }))}
                                    style={inputStyle} required
                                />
                            </div>
                            <div>
                                <label style={labelStyle}>Grundstücksfläche (m²)</label>
                                <input
                                    type="number" min="1" placeholder="z.B. 450"
                                    value={formData.grundstueck}
                                    onChange={e => setFormData(p => ({ ...p, grundstueck: e.target.value }))}
                                    style={inputStyle}
                                />
                            </div>
                            <div>
                                <label style={labelStyle}>Baujahr</label>
                                <input
                                    type="number" min="1800" max="2025" placeholder="z.B. 1998"
                                    value={formData.baujahr}
                                    onChange={e => setFormData(p => ({ ...p, baujahr: e.target.value }))}
                                    style={inputStyle} required
                                />
                            </div>
                        </div>

                        {/* Address with autocomplete */}
                        <div style={{ marginBottom: '0.25rem', position: 'relative' }}>
                            <label style={labelStyle}>
                                <MapPin size={13} style={{ display: 'inline', marginRight: 4 }} />
                                Adresse der Immobilie
                            </label>
                            <input
                                type="text"
                                placeholder="Straße, Hausnummer, Ort – Suche startet automatisch"
                                value={addr.query}
                                onChange={e => addr.search(e.target.value)}
                                style={{ ...inputStyle, paddingLeft: '2.25rem' }}
                                autoComplete="off"
                                required
                            />
                            <MapPin size={16} style={{
                                position: 'absolute', left: 10, bottom: 11,
                                color: '#1A758D', pointerEvents: 'none',
                            }} />
                            {addr.loading && (
                                <span style={{ position: 'absolute', right: 10, bottom: 11, fontSize: '0.75rem', color: '#8fa8b2' }}>
                                    Suche…
                                </span>
                            )}
                            {/* Suggestions dropdown */}
                            {addr.suggestions.length > 0 && (
                                <ul style={{
                                    position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 50,
                                    background: 'white', border: '1.5px solid #1A758D',
                                    borderRadius: '0 0 8px 8px', margin: 0, padding: 0, listStyle: 'none',
                                    boxShadow: '0 8px 24px rgba(10,25,47,0.12)', maxHeight: '200px', overflowY: 'auto',
                                }}>
                                    {addr.suggestions.map(s => (
                                        <li key={s.place_id}>
                                            <button
                                                type="button"
                                                onClick={() => addr.pick(s)}
                                                style={{
                                                    display: 'flex', alignItems: 'flex-start', gap: '8px',
                                                    width: '100%', padding: '10px 12px', background: 'none',
                                                    border: 'none', cursor: 'pointer', textAlign: 'left',
                                                    fontSize: '0.85rem', color: '#0A192F', lineHeight: 1.4,
                                                    borderBottom: '1px solid #f0f4f6',
                                                }}
                                                onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = '#f0f7fa'}
                                                onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = 'none'}
                                            >
                                                <MapPin size={14} style={{ color: '#1A758D', flexShrink: 0, marginTop: 2 }} />
                                                <span>{s.display_name}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Map preview */}
                        {addr.selected && (
                            <MiniMap lat={addr.selected.lat} lon={addr.selected.lon} />
                        )}

                        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                            <button type="button" onClick={() => setStep(1)} style={backBtnStyle}>
                                <ChevronLeft size={16} /> Zurück
                            </button>
                            <button type="submit" style={primaryBtnStyle}>
                                Weiter zur Kontaktangabe →
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* ── Step 3: Contact ── */}
            {step === 3 && (
                <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0A192F', marginBottom: '0.4rem' }}>
                        Ihre Kontaktdaten
                    </h3>
                    <p style={{ color: '#6b8a96', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                        Wir schicken Ihnen die Bewertung direkt zu – kostenlos und unverbindlich.
                    </p>
                    <form onSubmit={handleContactSubmit}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
                            <div style={{ gridColumn: '1 / -1' }}>
                                <label style={labelStyle}>Name</label>
                                <input
                                    type="text" placeholder="Vor- und Nachname"
                                    value={formData.name}
                                    onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                                    style={inputStyle} required
                                />
                            </div>
                            <div>
                                <label style={labelStyle}>E-Mail</label>
                                <input
                                    type="email" placeholder="ihre@email.de"
                                    value={formData.email}
                                    onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                                    style={inputStyle} required
                                />
                            </div>
                            <div>
                                <label style={labelStyle}>Telefon (optional)</label>
                                <input
                                    type="tel" placeholder="+49 ..."
                                    value={formData.phone}
                                    onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                                    style={inputStyle}
                                />
                            </div>
                        </div>
                        <p style={{ fontSize: '0.72rem', color: '#9bb', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                            Mit der Nutzung dieses Dienstes werden personenbezogene Daten zur Wertermittlung verarbeitet. Diese werden ausschließlich zur Bearbeitung Ihrer Anfrage genutzt.
                        </p>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <button type="button" onClick={() => setStep(2)} style={backBtnStyle}>
                                <ChevronLeft size={16} /> Zurück
                            </button>
                            <button type="submit" style={primaryBtnStyle}>
                                Bewertung anfordern
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* ── Step 4: Success ── */}
            {step === 4 && (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                    <div style={{
                        width: 64, height: 64, borderRadius: '50%',
                        background: 'linear-gradient(135deg, #1A758D, #0A192F)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 1.5rem',
                    }}>
                        <Check size={30} color="#c5a36c" strokeWidth={2.5} />
                    </div>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0A192F', marginBottom: '0.75rem' }}>
                        Vielen Dank!
                    </h3>
                    <p style={{ color: '#6b8a96', fontSize: '1rem', lineHeight: 1.7, maxWidth: '420px', margin: '0 auto 1.5rem' }}>
                        Ihre Anfrage wurde entgegengenommen. Einer unserer Dipl.-Sachverständigen (DIA) wird sich in Kürze mit Ihnen in Verbindung setzen.
                    </p>
                    <button
                        onClick={() => { setStep(1); setSelectedType(null); }}
                        style={{ ...backBtnStyle, margin: '0 auto' }}
                    >
                        Neue Bewertung starten
                    </button>
                </div>
            )}

            {/* ── Trust badges ── */}
            {step < 4 && (
                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: '1.5rem', marginTop: '1.75rem', paddingTop: '1.25rem',
                    borderTop: '1px solid #eef2f4', flexWrap: 'wrap',
                }}>
                    {['100% sicher', 'kostenlos', 'unverbindlich'].map(t => (
                        <span key={t} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.82rem', color: '#6b8a96' }}>
                            <Shield size={13} color="#1A758D" />
                            {t}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

// ─── Shared styles ────────────────────────────────────────────────────────────
const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '0.8rem', fontWeight: 600,
    color: '#4a6572', marginBottom: '5px', letterSpacing: '0.02em',
};

const inputStyle: React.CSSProperties = {
    width: '100%', padding: '10px 12px',
    border: '1.5px solid #dde8ed', borderRadius: '8px',
    fontSize: '0.9rem', color: '#0A192F', outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
};

const primaryBtnStyle: React.CSSProperties = {
    flex: 1, padding: '11px 20px',
    background: 'linear-gradient(135deg, #1A758D, #0A192F)',
    color: '#fff', border: 'none', borderRadius: '8px',
    fontWeight: 700, fontSize: '0.92rem', cursor: 'pointer',
    transition: 'opacity 0.2s',
};

const backBtnStyle: React.CSSProperties = {
    display: 'flex', alignItems: 'center', gap: '4px',
    padding: '11px 16px',
    background: '#f0f4f6', color: '#4a6572',
    border: '1.5px solid #dde8ed', borderRadius: '8px',
    fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer',
};
