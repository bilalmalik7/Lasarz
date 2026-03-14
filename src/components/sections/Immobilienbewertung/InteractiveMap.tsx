'use client';

import { useState } from 'react';

interface Hotspot {
    id: string;
    name: string;
    top: string;   // percentage from top of image container
    left: string;  // percentage from left of image container
    tooltipTitle: string;
    tooltipText: string;
}

const landkreisHotspots: Hotspot[] = [
    {
        id: 'osnabrueck-stadt',
        name: 'Osnabrück Stadt',
        top: '52%',
        left: '38%',
        tooltipTitle: 'Osnabrück Stadt',
        tooltipText: 'Im Herzen des Landkreises liegt die Friedensstadt. Hier bewerten wir regelmäßig Wohn- und Geschäftshäuser, Eigentumswohnungen sowie spezielle Gewerbeimmobilien.',
    },
    {
        id: 'melle',
        name: 'Melle',
        top: '60%',
        left: '68%',
        tooltipTitle: 'Melle & Grönegau',
        tooltipText: 'Als größte Stadt im Landkreis bietet Melle vielfältige Immobilienarten. Wir erstellen Gutachten für Einfamilienhäuser bis hin zu großen Industrieanlagen.',
    },
    {
        id: 'wallenhorst',
        name: 'Wallenhorst',
        top: '36%',
        left: '43%',
        tooltipTitle: 'Wallenhorst',
        tooltipText: 'Nördlich von Osnabrück gelegen, ist Wallenhorst für seine Wohngebiete bekannt. Wir bewerten hier bevorzugt Ein- und Zweifamilienhäuser.',
    },
    {
        id: 'bissendorf',
        name: 'Bissendorf',
        top: '44%',
        left: '58%',
        tooltipTitle: 'Bissendorf',
        tooltipText: 'Eine attraktive Gemeinde östlich von Osnabrück mit hohem Wohnwert. Wir schaffen Sicherheit bei Wohn- und Ferienimmobilien in naturnahen Lagen.',
    },
    {
        id: 'gesmh',
        name: 'G\'hütte',
        top: '63%',
        left: '38%',
        tooltipTitle: 'Georgsmarienhütte',
        tooltipText: 'Zentral im Südkreis zeichnet sich "Hütte" durch eine gute Infrastruktur aus. Wir bewerten vor allem Industrieareale und Wohnprojekte.',
    },
    {
        id: 'bramsche',
        name: 'Bramsche',
        top: '22%',
        left: '32%',
        tooltipTitle: 'Bramsche',
        tooltipText: 'Im Nordwesten gelegen bietet Bramsche Wohnen an der Hase. Wir begutachten hier Wohnimmobilien und Gewerbeobjekte und Neubauten.',
    },
    {
        id: 'bad-iburg',
        name: 'Bad Iburg',
        top: '73%',
        left: '43%',
        tooltipTitle: 'Bad Iburg',
        tooltipText: 'Kurstadt am Teutoburger Wald. Hier begutachten wir häufig Immobilien in besonderen Lagen mit gehobenen Wohnstandards.',
    },
    {
        id: 'bohmte',
        name: 'Bohmte',
        top: '18%',
        left: '22%',
        tooltipTitle: 'Bohmte',
        tooltipText: 'Im nordöstlichen Landkreis gelegen bewerten wir hier häufig Gewerbe- und Anlageimmobilien im ländlichen Raum.',
    },
];

const stadtteileHotspots: Hotspot[] = [
    {
        id: 'innenstadt',
        name: 'Innenstadt',
        top: '40%',
        left: '42%',
        tooltipTitle: 'Innenstadt',
        tooltipText: 'Das Herzstück der Stadt mit historischen Gebäuden und modernen Geschäftshäusern. Wir bewerten hier Gewerbe-, Wohn- und Mischimmobilien.',
    },
    {
        id: 'westerberg',
        name: 'Westerberg',
        top: '30%',
        left: '58%',
        tooltipTitle: 'Westerberg',
        tooltipText: 'Gehobene Wohnlage in Uninähe. Typische Objekte sind Eigentumswohnungen, Ein- und Mehrfamilienhäuser.',
    },
    {
        id: 'haste',
        name: 'Haste',
        top: '28%',
        left: '28%',
        tooltipTitle: 'Haste',
        tooltipText: 'Beliebter Stadtteil mit gutem Preis-Leistungs-Verhältnis. Schwerpunkt Wohnimmobilien und Eigentumswohnungen.',
    },
    {
        id: 'schinkel',
        name: 'Schinkel',
        top: '55%',
        left: '30%',
        tooltipTitle: 'Schinkel',
        tooltipText: 'Lebendiger Stadtteil mit gewachsener Wohnbebauung. Wir bewerten Wohnhäuser aller Art und kleine Gewerbeeinheiten.',
    },
    {
        id: 'sutthausen',
        name: 'Sutthausen',
        top: '70%',
        left: '38%',
        tooltipTitle: 'Sutthausen',
        tooltipText: 'Südlicher Stadtteil mit ruhiger Wohnlage. Typische Objekte sind Einfamilienhäuser im Grünen.',
    },
    {
        id: 'hellern',
        name: 'Hellern',
        top: '65%',
        left: '60%',
        tooltipTitle: 'Hellern',
        tooltipText: 'Gepflegter Stadtteil mit hochwertiger Bebauung. Wir erstellen hier regelmäßig Gutachten für Villen und größere Wohnanlagen.',
    },
    {
        id: 'eversberg',
        name: 'Eversberg',
        top: '45%',
        left: '68%',
        tooltipTitle: 'Eversberg',
        tooltipText: 'Attraktiver Vorort mit Eigenheimcharakter. Schwerpunkt: Einfamilienhäuser und Doppelhaushälften.',
    },
    {
        id: 'voxtrup',
        name: 'Voxtrup',
        top: '60%',
        left: '48%',
        tooltipTitle: 'Voxtrup',
        tooltipText: 'Zentraler Stadtteil mit gemischter Nutzung. Wir bewerten hier Wohn- und kleine Gewerbeimmobilien.',
    },
];

const mapImages = {
    osnabrueck: '/images/original_clone/datos_os_stadtteile_landkreis.png',
    stadtteile: '/images/original_clone/datos_os_stadtteile.svg',
};

export default function InteractiveMap() {
    const [activeTab, setActiveTab] = useState<'osnabrueck' | 'stadtteile'>('osnabrueck');
    const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);

    const currentHotspots = activeTab === 'osnabrueck' ? landkreisHotspots : stadtteileHotspots;
    const currentImage = mapImages[activeTab];

    return (
        <section style={{ padding: '6rem 0', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute', top: '-200px', right: '-200px',
                width: '600px', height: '600px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(26,117,141,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>
                        Lokal tief verwurzelt – Unsere Expertise
                    </h2>

                    {/* Toggle */}
                    <div style={{
                        display: 'inline-flex',
                        padding: '6px',
                        borderRadius: '9999px',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--border-color)',
                        gap: '4px',
                        marginBottom: '1.5rem',
                    }}>
                        {(['osnabrueck', 'stadtteile'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                style={{
                                    padding: '10px 24px',
                                    borderRadius: '9999px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                    transition: 'all 0.3s ease',
                                    backgroundColor: activeTab === tab ? 'var(--accent-primary)' : 'transparent',
                                    color: activeTab === tab ? 'white' : 'var(--text-secondary)',
                                    boxShadow: activeTab === tab ? '0 4px 15px rgba(26,117,141,0.35)' : 'none',
                                }}
                            >
                                {tab === 'osnabrueck' ? 'Osnabrück & Landkreis' : 'Osnabrück Stadtteile'}
                            </button>
                        ))}
                    </div>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.7 }}>
                        Wir kennen die Besonderheiten der Immobilienmärkte im Raum Osnabrück und können dank ausgeprägter regionaler Ortskenntnis und einem exzellenten Netzwerk Bewertungsergebnisse von höchster Präzision liefern.
                    </p>
                </div>

                {/* Main layout: Map + Stats */}
                <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>

                    {/* MAP AREA */}
                    <div style={{
                        flex: '1 1 580px',
                        background: 'var(--bg-secondary)',
                        borderRadius: '24px',
                        border: '1px solid rgba(26,117,141,0.12)',
                        padding: '2rem',
                        boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.04)',
                        minWidth: 0,
                    }}>
                        {/* The map wrapper — position:relative so hotspots overlay correctly */}
                        <div style={{ position: 'relative', lineHeight: 0 }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                key={activeTab}
                                src={currentImage}
                                alt={activeTab === 'osnabrueck' ? 'Karte Osnabrück Landkreis' : 'Karte Osnabrück Stadtteile'}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    borderRadius: '12px',
                                }}
                            />

                            {/* Hotspot badges overlaid on top of the image */}
                            {currentHotspots.map((hotspot) => {
                                const isHovered = hoveredHotspot === hotspot.id;
                                return (
                                    <div
                                        key={hotspot.id}
                                        style={{
                                            position: 'absolute',
                                            top: hotspot.top,
                                            left: hotspot.left,
                                            transform: 'translate(-50%, -50%)',
                                            zIndex: isHovered ? 30 : 20,
                                        }}
                                        onMouseEnter={() => setHoveredHotspot(hotspot.id)}
                                        onMouseLeave={() => setHoveredHotspot(null)}
                                    >
                                        {/* Badge label */}
                                        <button style={{
                                            position: 'relative',
                                            background: isHovered ? 'var(--accent-primary)' : 'rgba(18, 43, 64, 0.88)',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '20px',
                                            padding: '6px 14px',
                                            fontSize: '0.78rem',
                                            fontWeight: 700,
                                            cursor: 'pointer',
                                            whiteSpace: 'nowrap',
                                            boxShadow: isHovered
                                                ? '0 0 0 6px rgba(26,117,141,0.2), 0 4px 12px rgba(26,117,141,0.4)'
                                                : '0 2px 6px rgba(0,0,0,0.3)',
                                            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                            transition: 'all 0.2s ease',
                                            letterSpacing: '0.03em',
                                        }}>
                                            {hotspot.name}
                                        </button>

                                        {/* Tooltip */}
                                        {isHovered && (
                                            <div style={{
                                                position: 'absolute',
                                                bottom: 'calc(100% + 10px)',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                width: '260px',
                                                background: 'white',
                                                borderRadius: '12px',
                                                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                                                padding: '1rem',
                                                border: '1px solid var(--border-color)',
                                                zIndex: 50,
                                                pointerEvents: 'none',
                                            }}>
                                                {/* Arrow */}
                                                <div style={{
                                                    position: 'absolute',
                                                    bottom: '-7px',
                                                    left: '50%',
                                                    transform: 'translateX(-50%) rotate(45deg)',
                                                    width: '14px',
                                                    height: '14px',
                                                    background: 'white',
                                                    borderRight: '1px solid var(--border-color)',
                                                    borderBottom: '1px solid var(--border-color)',
                                                }} />
                                                <h4 style={{
                                                    margin: '0 0 0.4rem 0',
                                                    color: 'var(--accent-secondary)',
                                                    fontWeight: 700,
                                                    fontSize: '0.95rem',
                                                }}>
                                                    {hotspot.tooltipTitle}
                                                </h4>
                                                <p style={{
                                                    margin: 0,
                                                    color: 'var(--text-secondary)',
                                                    fontSize: '0.8rem',
                                                    lineHeight: 1.55,
                                                }}>
                                                    {hotspot.tooltipText}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* STATS SIDEBAR */}
                    <div style={{
                        flex: '0 1 280px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                        paddingTop: '1rem',
                    }}>
                        {[
                            { number: '34', label: 'Fachgerecht bewertete Ortsteile', suffix: '' },
                            { number: '21', label: 'Gemeinden im Landkreis Osnabrück', suffix: '' },
                            { number: '1.250', label: 'Erstellte Verkehrswertgutachten', suffix: '+' },
                            { number: '4.500', label: 'Bewertete Immobilien', suffix: '+' },
                        ].map((stat, i) => (
                            <div key={i} style={{
                                textAlign: 'center',
                                padding: '1.5rem',
                                background: 'var(--bg-secondary)',
                                borderRadius: '16px',
                                border: '1px solid var(--border-color)',
                            }}>
                                <div style={{
                                    fontSize: '2.5rem',
                                    fontWeight: 800,
                                    color: 'var(--accent-primary)',
                                    lineHeight: 1,
                                    marginBottom: '0.5rem',
                                }}>
                                    {stat.number}{stat.suffix}
                                </div>
                                <div style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.85rem',
                                    lineHeight: 1.4,
                                }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
