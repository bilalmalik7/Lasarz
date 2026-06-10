'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function GuideContent() {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);

  useEffect(() => {
    const printStyles = `
      @media print {
        body { background-color: white !important; font-size: 12pt; }
        .no-print { display: none !important; }
        .print-only { display: block !important; }
        .page-break { page-break-before: always; }
        .avoid-break { page-break-inside: avoid; }
        section { page-break-inside: avoid; margin-bottom: 2cm; }
        h1, h2, h3 { page-break-after: avoid; }
        img { page-break-inside: avoid; max-width: 100% !important; }
        .shadow-xl, .shadow-lg, .shadow-md { box-shadow: none !important; }
        .rounded-2xl, .rounded-xl { border-radius: 8px !important; }
        nav { display: none !important; }
        footer { display: none !important; }
        .sticky { position: static !important; }
        .bg-gradient-to-r, .bg-gradient-to-br { print-color-adjust: exact; }
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.innerText = printStyles;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const chapters = [
    { number: 1, title: 'Warum Gutachten?', icon: '📋', description: 'Die Bedeutung professioneller Bewertung' },
    { number: 2, title: 'Kosten & Honorar', icon: '💶', description: 'Transparente Preisgestaltung' },
    { number: 3, title: 'Ablauf', icon: '🔄', description: 'Der Bewertungsprozess Schritt für Schritt' },
    { number: 4, title: 'Rechtliches', icon: '⚖️', description: 'Rechtliche Rahmenbedingungen' },
    { number: 5, title: 'FAQ', icon: '❓', description: 'Häufig gestellte Fragen' },
    { number: 6, title: 'Marktanalyse', icon: '📈', description: 'Osnabrücker Immobilienmarkt 2026' },
    { number: 7, title: 'Wertbestimmung', icon: '🏠', description: 'Bewertungsmethoden im Detail' },
    { number: 8, title: 'Praxisbeispiele', icon: '📂', description: 'Reale Fallstudien aus Osnabrück' },
    { number: 9, title: 'Verkaufstipps', icon: '🎯', description: 'Strategien für den Erfolg' },
    { number: 10, title: 'Zusammenfassung', icon: '✅', description: 'Wichtige Erkenntnisse im Überblick' },
  ];

  const stats = [
    { value: '2.500+', label: 'Gutachten erstellt', sub: 'Seit Gründung' },
    { value: '98%', label: 'Kundenzufriedenheit', sub: 'Basierend auf Bewertungen' },
    { value: '15+', label: 'Jahre Erfahrung', sub: 'In der Region' },
    { value: '€ 450M+', label: 'Bewertetes Volumen', sub: 'Immobilienwerte gesamt' },
  ];

  const marketData = [
    { year: '2021', apartments: 2650, houses: 2490 },
    { year: '2022', apartments: 2890, houses: 2720 },
    { year: '2023', apartments: 3050, houses: 2880 },
    { year: '2024', apartments: 3180, houses: 2960 },
    { year: '2025', apartments: 3290, houses: 3080 },
    { year: '2026', apartments: 3420, houses: 3210 },
  ];

  const maxPrice = 3800;

  const costItems = [
    { type: 'Kurzgutachten', price: '€ 300 – 500', time: '3–5 Tage', badge: 'Einstieg', color: 'bg-green-100 text-green-800' },
    { type: 'Vollgutachten (ImmoWertV)', price: '€ 800 – 2.500', time: '7–14 Tage', badge: 'Empfohlen', color: 'bg-blue-100 text-blue-800' },
    { type: 'Gerichtsfestes Gutachten', price: '€ 2.000 – 5.000+', time: '2–4 Wochen', badge: 'Rechtssicher', color: 'bg-purple-100 text-purple-800' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Print Button - Floating */}
      <div className="fixed top-4 right-4 z-50 no-print flex gap-2">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-5 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-xl shadow-lg transition-all text-sm font-semibold"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Als PDF drucken
        </button>
      </div>

      {/* Cover Page */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="max-w-5xl mx-auto px-6 py-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
                <span className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse" />
                Kostenloser Leitfaden 2026
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Der komplette Leitfaden zur
                <span className="text-cyan-300"> Immobilienbewertung</span>
                <br />in Osnabrück
              </h1>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Ihr umfassender Ratgeber für professionelle Bewertungen, aktuelle Marktdaten und rechtliche Grundlagen – 
                erstellt von zertifizierten Sachverständigen.
              </p>
              <div className="flex flex-wrap gap-3">
                {['10 Kapitel', 'Aktuelle Marktdaten 2026', 'Praxisbeispiele', 'Rechtlich geprüft'].map(tag => (
                  <span key={tag} className="bg-white/20 border border-white/30 px-3 py-1 rounded-full text-sm">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/images/immobilien_cover.png"
                  alt="Immobilienbewertung Osnabrück"
                  width={600}
                  height={400}
                  priority
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur rounded-xl p-4">
                    <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide">Herausgegeben von</p>
                    <p className="text-gray-900 font-bold text-sm">LASARZ Immobiliengutachter Osnabrück</p>
                    <p className="text-gray-500 text-xs">Zertifizierte Sachverständige · Ausgabe 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-blue-700">{s.value}</div>
                <div className="text-gray-900 font-semibold text-sm mt-1">{s.label}</div>
                <div className="text-gray-400 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12 avoid-break">
          <div className="bg-gradient-to-r from-blue-700 to-cyan-600 px-8 py-6">
            <h2 className="text-2xl font-bold text-white">📚 Inhaltsverzeichnis</h2>
            <p className="text-blue-100 text-sm mt-1">10 umfassende Kapitel – klicken zum Springen</p>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-3">
            {chapters.map((ch) => (
              <a
                key={ch.number}
                href={`#chapter${ch.number}`}
                onClick={() => setActiveChapter(ch.number)}
                className={`flex items-center gap-3 p-4 rounded-xl border transition-all hover:shadow-md no-underline group
                  ${activeChapter === ch.number ? 'bg-blue-50 border-blue-300' : 'border-gray-100 hover:border-blue-200 hover:bg-blue-50/50'}`}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg">
                  {ch.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-600">Kap. {ch.number}</span>
                  </div>
                  <p className="font-semibold text-gray-900 text-sm truncate">{ch.title}</p>
                  <p className="text-xs text-gray-500 truncate">{ch.description}</p>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Chapter 1 */}
        <section id="chapter1" className="mb-16 avoid-break">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-700 to-blue-600 px-8 py-5 flex items-center gap-3">
              <span className="text-3xl">📋</span>
              <div>
                <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest">Kapitel 1</p>
                <h2 className="text-xl font-bold text-white">Warum ein professionelles Gutachten?</h2>
              </div>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ein professionelles Immobiliengutachten ist weit mehr als eine einfache Schätzung. 
                    Es ist das fundierte, rechtssichere Dokument, das auf Basis anerkannter Bewertungsverfahren 
                    den tatsächlichen Verkehrswert Ihrer Immobilie bestimmt.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Ob beim Kauf, Verkauf, bei Erbschaftsstreitigkeiten, Scheidungen oder für Kreditverhandlungen 
                    mit Banken – ein zertifiziertes Gutachten schützt Sie vor finanziellen Verlusten und gibt 
                    Ihnen Sicherheit bei wichtigen Entscheidungen.
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Einsatzbereiche im Überblick:</h3>
                  <ul className="space-y-2">
                    {[
                      'Kauf & Verkauf von Immobilien',
                      'Erbschaft & Schenkung (steuerliche Bewertung)',
                      'Scheidung & Vermögensaufteilung',
                      'Beleihung & Kreditvergabe durch Banken',
                      'Versicherung & Schadensfälle',
                      'Steueroptimierung & Abschreibungen',
                      'Zwangsversteigerung & Insolvenz',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="relative rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/images/immobilien_house_inspection.png"
                      alt="Immobiliengutachter bei der Arbeit"
                      width={500}
                      height={320}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <p className="absolute bottom-3 left-3 text-white text-xs font-medium bg-black/30 px-2 py-1 rounded">
                      Ortsbesichtigung durch zertifizierten Sachverständigen
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">💡</div>
                      <div>
                        <h4 className="font-bold text-blue-900 mb-1">Wussten Sie?</h4>
                        <p className="text-blue-800 text-sm leading-relaxed">
                          Ohne professionelles Gutachten werden Immobilien im Schnitt <strong>8–15 % unter ihrem tatsächlichen Marktwert</strong> verkauft. 
                          Ein Gutachten kostet oft nur 0,1–0,3 % des Immobilienwerts, spart aber tausende Euro.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">⚠️</div>
                      <div>
                        <h4 className="font-bold text-amber-900 mb-1">Vorsicht bei Onlineschätzungen</h4>
                        <p className="text-amber-800 text-sm leading-relaxed">
                          Kostenlose Online-Tools sind keine rechtssicheren Gutachten und haben 
                          Abweichungen von bis zu <strong>25 %</strong> vom tatsächlichen Marktwert.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 2 - Costs */}
        <section id="chapter2" className="mb-16 avoid-break">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-700 to-teal-600 px-8 py-5 flex items-center gap-3">
              <span className="text-3xl">💶</span>
              <div>
                <p className="text-emerald-200 text-xs font-semibold uppercase tracking-widest">Kapitel 2</p>
                <h2 className="text-xl font-bold text-white">Kosten & Honorar</h2>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-8">
                Die Kosten eines Immobiliengutachtens richten sich nach dem Gutachtentyp, der Immobiliengröße 
                und dem Bewertungsaufwand. Als zertifizierte Sachverständige arbeiten wir transparent 
                und nach anerkannten Honorarempfehlungen.
              </p>

              {/* Cost Table */}
              <div className="grid gap-4 mb-8">
                {costItems.map((item, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg font-bold text-gray-600">
                          {i + 1}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-gray-900">{item.type}</h3>
                            <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${item.color}`}>
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-gray-500 text-sm">Bearbeitungszeit: {item.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{item.price}</div>
                        <div className="text-xs text-gray-400">inkl. MwSt. (Richtwert)</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cost Factors */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-blue-600">📊</span> Kostenfaktoren
                  </h3>
                  <div className="space-y-3">
                    {[
                      { factor: 'Immobiliengröße', desc: 'Mehr Fläche = mehr Aufwand' },
                      { factor: 'Immobilientyp', desc: 'Wohnung, Haus, Gewerbe' },
                      { factor: 'Zustand & Komplexität', desc: 'Besondere Merkmale, Schäden' },
                      { factor: 'Standort', desc: 'Anfahrt & regionale Marktkenntnis' },
                      { factor: 'Dringlichkeit', desc: 'Express-Gutachten auf Anfrage' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 text-xs font-bold text-blue-700">
                          {i + 1}
                        </div>
                        <div>
                          <span className="font-medium text-gray-900 text-sm">{item.factor}: </span>
                          <span className="text-gray-600 text-sm">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-green-600">✅</span> Im Gutachten enthalten
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Persönliche Ortsbesichtigung',
                      'Fotodokumentation aller Bereiche',
                      'Marktdaten & Vergleichsobjekte',
                      'Rechtlich belastbarer Bericht',
                      'Anwendung normierter Verfahren (ImmoWertV)',
                      'Kostenlose Rückfragemöglichkeit',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 3 - Ablauf */}
        <section id="chapter3" className="mb-16 avoid-break">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-violet-700 to-purple-600 px-8 py-5 flex items-center gap-3">
              <span className="text-3xl">🔄</span>
              <div>
                <p className="text-violet-200 text-xs font-semibold uppercase tracking-widest">Kapitel 3</p>
                <h2 className="text-xl font-bold text-white">Der Bewertungsprozess</h2>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-8">
                Unser strukturierter Bewertungsprozess garantiert Ihnen ein zuverlässiges und gerichtsfestes Gutachten. 
                Transparenz und Kommunikation stehen dabei an erster Stelle.
              </p>

              {/* Process Image */}
              <div className="mb-8 rounded-xl overflow-hidden shadow-md bg-white p-2">
                <Image
                  src="/images/immobilien_prozess.png"
                  alt="Immobilienbewertung Prozess"
                  width={900}
                  height={500}
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: '480px' }}
                />
              </div>

              {/* Steps */}
              <div className="space-y-4">
                {[
                  { step: 1, title: 'Erstberatung & Anfrage', desc: 'Kostenlose telefonische Erstberatung. Wir klären Ihren Bedarf, besprechen den Umfang des Gutachtens und nennen Ihnen ein transparentes Honorarangebot.', duration: 'Tag 1', color: 'bg-blue-500' },
                  { step: 2, title: 'Unterlagenbeschaffung', desc: 'Wir fordern benötigte Unterlagen an: Grundbuchauszug, Bebauungsplan, Baupläne, Energieausweis und ggf. Mietverträge oder Nebenkostenabrechnungen.', duration: 'Tag 2–3', color: 'bg-indigo-500' },
                  { step: 3, title: 'Ortsbesichtigung', desc: 'Unser Gutachter besichtigt die Immobilie persönlich und vollständig. Alle Räume, Keller, Dach und Außenanlagen werden systematisch dokumentiert.', duration: 'Tag 3–5', color: 'bg-violet-500' },
                  { step: 4, title: 'Fotodokumentation', desc: 'Professionelle Fotodokumentation aller wertrelevanten Merkmale, Mängel, Besonderheiten und der unmittelbaren Umgebung.', duration: 'Tag 4–5', color: 'bg-purple-500' },
                  { step: 5, title: 'Marktanalyse', desc: 'Auswertung aktueller Vergleichsobjekte, Analyse von Preisdatenbanken und regionalen Marktberichten. Berücksichtigung lokaler Besonderheiten.', duration: 'Tag 5–8', color: 'bg-pink-500' },
                  { step: 6, title: 'Wertermittlung', desc: 'Anwendung normierter Bewertungsverfahren (Vergleichswert-, Ertragswert- oder Sachwertverfahren) gemäß ImmoWertV 2021.', duration: 'Tag 6–9', color: 'bg-rose-500' },
                  { step: 7, title: 'Gutachtenerstellung', desc: 'Erstellung des vollständigen, strukturierten Gutachtens mit allen Nachweisen, Berechnungen, Fotos und rechtlichen Verweisen.', duration: 'Tag 8–12', color: 'bg-orange-500' },
                  { step: 8, title: 'Übergabe & Erläuterung', desc: 'Persönliche oder digitale Übergabe des Gutachtens. Wir erläutern alle Ergebnisse und stehen für Rückfragen zur Verfügung.', duration: 'Tag 10–14', color: 'bg-amber-500' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                        {item.step}
                      </div>
                      {item.step < 8 && <div className="w-0.5 h-full bg-gray-200 my-1 min-h-[16px]" />}
                    </div>
                    <div className="pb-4 flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{item.duration}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-5 flex items-center gap-4">
                <div className="text-3xl">⏱️</div>
                <div>
                  <h4 className="font-bold text-blue-900">Gesamtdauer: 1–2 Wochen</h4>
                  <p className="text-blue-700 text-sm">Bei dringenden Anfragen bieten wir Express-Gutachten in 3–5 Werktagen an. Bitte sprechen Sie uns direkt an.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 4 - Legal */}
        <section id="chapter4" className="mb-16 avoid-break">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-8 py-5 flex items-center gap-3">
              <span className="text-3xl">⚖️</span>
              <div>
                <p className="text-slate-300 text-xs font-semibold uppercase tracking-widest">Kapitel 4</p>
                <h2 className="text-xl font-bold text-white">Rechtliche Grundlagen</h2>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-8">
                Die Immobilienbewertung in Deutschland ist durch ein umfassendes rechtliches Regelwerk geregelt. 
                Nur qualifizierte Sachverständige dürfen gerichtsfeste Gutachten erstellen.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Zentrale Rechtsgrundlagen:</h3>
                  <div className="space-y-3">
                    {[
                      { law: 'ImmoWertV 2021', desc: 'Immobilienwertermittlungsverordnung – Grundlage aller Bewertungsverfahren' },
                      { law: 'BauGB § 194', desc: 'Gesetzliche Definition des Verkehrswerts (Marktwerts)' },
                      { law: 'BGB', desc: 'Bürgerliches Gesetzbuch – Eigentumsrechte und Vertragsgrundlagen' },
                      { law: 'WEG', desc: 'Wohnungseigentumsgesetz für Mehrfamilienhäuser und Eigentumswohnungen' },
                      { law: 'BewG', desc: 'Bewertungsgesetz für steuerliche Immobilienbewertungen' },
                      { law: 'HOAI', desc: 'Honorarordnung für Architekten und Ingenieure' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                        <span className="font-bold text-blue-700 text-sm min-w-[120px]">{item.law}</span>
                        <span className="text-gray-600 text-sm">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Qualifikationsanforderungen:</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
                    <p className="text-sm text-blue-900 font-semibold mb-3">Unsere Sachverständigen verfügen über:</p>
                    <ul className="space-y-2">
                      {[
                        'Staatl. anerkannte Prüfung als Sachverständiger',
                        'Zertifizierung nach DIN EN ISO/IEC 17024',
                        'Mitgliedschaft im Gutachterausschuss',
                        'Regelmäßige Fortbildung (§ 7 ImmoWertV)',
                        '10+ Jahre praktische Erfahrung',
                        'Berufshaftpflichtversicherung',
                      ].map((q, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-blue-800">
                          <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-sm font-bold text-amber-900 mb-1">⏳ Gültigkeitsdauer</p>
                    <p className="text-sm text-amber-800">
                      Ein Gutachten ist <strong>6 Monate</strong> gültig. Bei starken Marktschwankungen oder 
                      baulichen Veränderungen sollte es aktualisiert werden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 5 - FAQ */}
        <section id="chapter5" className="mb-16 avoid-break">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-700 to-sky-600 px-8 py-5 flex items-center gap-3">
              <span className="text-3xl">❓</span>
              <div>
                <p className="text-cyan-200 text-xs font-semibold uppercase tracking-widest">Kapitel 5</p>
                <h2 className="text-xl font-bold text-white">Häufig gestellte Fragen</h2>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                {[
                  { q: 'Wie oft sollte ich mein Gutachten aktualisieren?', a: 'Ein Gutachten hat eine Gültigkeitsdauer von ca. 6 Monaten. Bei größeren Marktveränderungen (z.B. Zinswende) oder nach baulichen Veränderungen (Anbau, Sanierung) empfehlen wir eine Aktualisierung. Für Steuer- und Erbschaftszwecke gelten ggf. kürzere Fristen.' },
                  { q: 'Welche Unterlagen benötige ich für ein Gutachten?', a: 'Grundbuchauszug (nicht älter als 3 Monate), Flurkarte/Lageplan, Baupläne/Grundrisse, Energieausweis, Baubeschreibung, bei vermieteten Objekten: Mietverträge und Betriebskostenabrechnungen. Wir unterstützen Sie bei der Beschaffung fehlender Dokumente.' },
                  { q: 'Kann ich selbst ein Gutachten erstellen?', a: 'Nein. Rechtlich bindende Verkehrswertgutachten dürfen nur von öffentlich bestellten und vereidigten oder zertifizierten Sachverständigen erstellt werden. Eigene Schätzungen und Online-Tools sind weder vor Gericht noch gegenüber Behörden und Banken anerkannt.' },
                  { q: 'Was kostet ein Vollgutachten in Osnabrück?', a: 'Für ein normkonformes Vollgutachten (ImmoWertV) einer durchschnittlichen Wohnimmobilie in Osnabrück rechnen Sie mit € 800 bis € 2.500. Die genauen Kosten hängen von Größe, Komplexität und Nutzungsart ab. Kurzgutachten sind ab € 300 erhältlich.' },
                  { q: 'Wie lange dauert eine Immobilienbewertung?', a: 'Von der Beauftragung bis zur Übergabe dauert es in der Regel 7–14 Werktage. Bei Express-Gutachten können wir die Bearbeitungszeit auf 3–5 Werktage verkürzen. Die eigentliche Ortsbesichtigung dauert je nach Immobilie 1–3 Stunden.' },
                  { q: 'Wird das Gutachten von Gerichten und Banken akzeptiert?', a: 'Ja – unsere Gutachten werden von allen deutschen Gerichten, Finanzämtern und Banken anerkannt, da sie nach den Anforderungen der ImmoWertV 2021 erstellt werden und von zertifizierten Sachverständigen stammen.' },
                  { q: 'Können Sie Gutachten für ganz Niedersachsen erstellen?', a: 'Ja. Unser Schwerpunkt liegt in Osnabrück und dem Osnabrücker Land, aber wir sind in der gesamten Region Niedersachsen/NRW tätig, inkl. Bielefeld, Münster, Rheine, Gütersloh, Bad Oeynhausen und weiteren Städten.' },
                ].map((item, i) => (
                  <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors list-none">
                      <h3 className="font-semibold text-gray-900 text-sm pr-4">{item.q}</h3>
                      <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 6 - Market Analysis */}
        <section id="chapter6" className="mb-16 avoid-break">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-700 to-indigo-700 px-8 py-5 flex items-center gap-3">
              <span className="text-3xl">📈</span>
              <div>
                <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest">Kapitel 6</p>
                <h2 className="text-xl font-bold text-white">Marktanalyse Osnabrück 2026</h2>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-8">
                Der Osnabrücker Immobilienmarkt zeigt sich 2026 trotz bundesweit schwankender Rahmenbedingungen 
                stabil und robust. Als regionale Wirtschaftsmetropole mit Hochschulstandort und hervorragender 
                Anbindung bleibt die Nachfrage konstant hoch.
              </p>

              {/* Chart */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-2">Preisentwicklung €/m² (Osnabrück, 2021–2026)</h3>
                <p className="text-xs text-gray-400 mb-4">Quelle: Gutachterausschuss Osnabrück, eigene Marktdaten</p>
                <div className="relative bg-gray-50 rounded-xl p-6 overflow-x-auto">
                  <Image
                    src="/images/immobilien_markt_chart.png"
                    alt="Preisentwicklung Immobilien Osnabrück"
                    width={860}
                    height={500}
                    className="w-full h-auto object-contain rounded-lg mb-4 bg-white"
                    style={{ maxHeight: '480px' }}
                  />
                  {/* Custom bar chart */}
                  <div className="flex items-end justify-around gap-2 h-40">
                    {marketData.map((d, i) => (
                      <div key={i} className="flex flex-col items-center gap-1 flex-1">
                        <div className="w-full flex gap-1 items-end" style={{ height: '120px' }}>
                          <div
                            className="flex-1 bg-blue-600 rounded-t-sm transition-all"
                            style={{ height: `${(d.apartments / maxPrice) * 120}px` }}
                            title={`Wohnungen: €${d.apartments}/m²`}
                          />
                          <div
                            className="flex-1 bg-cyan-400 rounded-t-sm transition-all"
                            style={{ height: `${(d.houses / maxPrice) * 120}px` }}
                            title={`Häuser: €${d.houses}/m²`}
                          />
                        </div>
                        <span className="text-xs text-gray-500 font-medium">{d.year}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-6 mt-3 justify-center">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-3 h-3 bg-blue-600 rounded" /> Eigentumswohnungen (€/m²)
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-3 h-3 bg-cyan-400 rounded" /> Einfamilienhäuser (€/m²)
                    </div>
                  </div>
                </div>
              </div>

              {/* Market Highlights */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { icon: '📍', title: 'Innenstadt / Altstadt', apartment: '3.800–4.500', house: '3.400–4.200', trend: '↑ +3,2%' },
                  { icon: '🏘️', title: 'Randlagen (Hellern, Sutthausen)', apartment: '2.900–3.500', house: '2.600–3.200', trend: '↑ +2,1%' },
                  { icon: '🌳', title: 'Stadtteile (Schinkel, Haste)', apartment: '2.500–3.100', house: '2.400–2.900', trend: '→ +1,4%' },
                ].map((area, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-4">
                    <div className="text-xl mb-2">{area.icon}</div>
                    <h4 className="font-bold text-gray-900 text-sm mb-2">{area.title}</h4>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Wohnung</span>
                        <span className="font-medium text-gray-900">{area.apartment} €/m²</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Haus</span>
                        <span className="font-medium text-gray-900">{area.house} €/m²</span>
                      </div>
                      <div className="flex justify-between pt-1 border-t border-gray-100 mt-2">
                        <span className="text-gray-500">Jahrestrend</span>
                        <span className="font-bold text-green-600">{area.trend}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
                <h4 className="font-bold text-indigo-900 mb-2">🔮 Marktprognose 2026/27</h4>
                <p className="text-indigo-800 text-sm leading-relaxed">
                  Trotz gestiegener Zinsen zeigt der Osnabrücker Markt Resilienz. Wir erwarten 2026/27 eine 
                  stabile Preisentwicklung von <strong>+1,5 bis +2,5 % p.a.</strong>, getragen durch hohe Nachfrage 
                  bei Studierenden und Fachkräften sowie begrenztem Neubauangebot.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 7 - Valuation Methods */}
        <section id="chapter7" className="mb-16 avoid-break">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-teal-700 to-emerald-600 px-8 py-5 flex items-center gap-3">
              <span className="text-3xl">🏠</span>
              <div>
                <p className="text-teal-200 text-xs font-semibold uppercase tracking-widest">Kapitel 7</p>
                <h2 className="text-xl font-bold text-white">Wertbestimmung & Bewertungsverfahren</h2>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-8">
                Die ImmoWertV 2021 schreibt drei normierte Wertermittlungsverfahren vor. 
                Je nach Immobilientyp und verfügbaren Daten wählt der Gutachter das geeignete oder 
                kombiniert mehrere Verfahren.
              </p>

              <div className="grid gap-6 mb-8">
                {[
                  {
                    method: 'Vergleichswertverfahren',
                    icon: '🔍',
                    color: 'border-blue-300 bg-blue-50',
                    headerColor: 'bg-blue-600',
                    suitable: 'Eigentumswohnungen, Einfamilienhäuser, Grundstücke',
                    desc: 'Der Wert wird aus dem Verkaufspreisen vergleichbarer Objekte abgeleitet. Die Vergleichsobjekte werden anhand von Lage, Größe, Baujahr und Ausstattung angepasst.',
                    pros: ['Direkt aus Markttransaktionen abgeleitet', 'Hohe Akzeptanz bei Banken & Gerichten', 'Besonders präzise bei hoher Marktaktivität'],
                  },
                  {
                    method: 'Ertragswertverfahren',
                    icon: '💰',
                    color: 'border-green-300 bg-green-50',
                    headerColor: 'bg-green-600',
                    suitable: 'Mehrfamilienhäuser, Gewerbeimmobilien, Mietobjekte',
                    desc: 'Der Wert ergibt sich aus den erzielbaren Reinerträgen (Miete abzgl. Bewirtschaftungskosten), die mit dem Liegenschaftszinssatz kapitalisiert werden.',
                    pros: ['Investorenorientierte Betrachtung', 'Berücksichtigt Mieteinnahmen & Kosten', 'Standard für Anlageimmobilien'],
                  },
                  {
                    method: 'Sachwertverfahren',
                    icon: '🔨',
                    color: 'border-orange-300 bg-orange-50',
                    headerColor: 'bg-orange-600',
                    suitable: 'Eigengenutzte Immobilien, Sonderimmobilien, öffentliche Gebäude',
                    desc: 'Der Wert setzt sich zusammen aus dem Bodenwert und dem Sachwert des Gebäudes (Herstellungskosten abzüglich Altersminderung). Wird oft als Kontrollverfahren eingesetzt.',
                    pros: ['Unabhängig von Marktdaten', 'Geeignet für seltene Immobilientypen', 'Berücksichtigt Bausubstanz detailliert'],
                  },
                ].map((v, i) => (
                  <div key={i} className={`border ${v.color} rounded-xl overflow-hidden`}>
                    <div className={`${v.headerColor} px-5 py-3 flex items-center gap-3`}>
                      <span className="text-2xl">{v.icon}</span>
                      <h3 className="font-bold text-white">{v.method}</h3>
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Anwendung:</p>
                      <p className="text-sm text-gray-700 mb-3 font-medium">{v.suitable}</p>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{v.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {v.pros.map((p, j) => (
                          <span key={j} className="text-xs bg-white border border-gray-200 px-2 py-1 rounded-full text-gray-600">
                            ✓ {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-900 text-white rounded-xl p-6">
                <h3 className="font-bold mb-4">📐 Wertrelevante Faktoren im Überblick</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { factor: 'Mikrolage', weight: '+++ Sehr hoch' },
                    { factor: 'Makrolage', weight: '++ Hoch' },
                    { factor: 'Wohnfläche', weight: '+++ Sehr hoch' },
                    { factor: 'Baujahr', weight: '++ Hoch' },
                    { factor: 'Ausstattungsqualität', weight: '++ Hoch' },
                    { factor: 'Energieeffizienz', weight: '+ Mittel' },
                    { factor: 'Grundstücksgröße', weight: '++ Hoch' },
                    { factor: 'Renovierungsstand', weight: '++ Hoch' },
                    { factor: 'Stellplatz / Garage', weight: '+ Mittel' },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-0.5">
                      <span className="text-gray-300 text-xs">{item.factor}</span>
                      <span className="text-cyan-400 text-xs font-semibold">{item.weight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 8 - Case Studies */}
        <section id="chapter8" className="mb-16 avoid-break">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-rose-700 to-pink-600 px-8 py-5 flex items-center gap-3">
              <span className="text-3xl">📂</span>
              <div>
                <p className="text-rose-200 text-xs font-semibold uppercase tracking-widest">Kapitel 8</p>
                <h2 className="text-xl font-bold text-white">Praxisbeispiele aus Osnabrück</h2>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-8">
                Die folgenden Fallbeispiele basieren auf realen Bewertungen aus unserer Praxis (anonymisiert). 
                Sie zeigen, wie professionelle Gutachten konkret Mehrwert schaffen.
              </p>

              <div className="space-y-6">
                {[
                  {
                    number: '01',
                    title: 'Sanierte Altbauwohnung – Innenstadt',
                    color: 'bg-blue-600',
                    details: { Fläche: '95 m²', Zimmer: '3', Baujahr: '1965 (san. 2019)', Lage: 'Zentrum Osnabrück' },
                    challenge: 'Käufer zweifelte an Angebotspreis des Verkäufers. Gutachten wurde zur Verhandlungsgrundlage benötigt.',
                    result: '€ 312.000',
                    saving: 'Käufer sparte € 28.000 gegenüber Angebotspreis (€ 340.000)',
                    method: 'Vergleichswertverfahren',
                  },
                  {
                    number: '02',
                    title: 'Mehrfamilienhaus – Schinkel',
                    color: 'bg-green-600',
                    details: { Fläche: '480 m² Wfl.', Einheiten: '6 Wohnungen', Baujahr: '1985', 'Nettomiete': '€ 2.950/Monat' },
                    challenge: 'Erbschaft: Drei Erben stritten über den Wert. Gerichtsfestes Gutachten erforderlich.',
                    result: '€ 1.150.000',
                    saving: 'Einigung der Erben ohne Gerichtsverfahren, Steueroptimierung durch korrekten Wertansatz',
                    method: 'Ertragswertverfahren',
                  },
                  {
                    number: '03',
                    title: 'Einfamilienhaus – Voxtrup',
                    color: 'bg-purple-600',
                    details: { Fläche: '165 m²', Zimmer: '5', Baujahr: '2005', Grundstück: '620 m²' },
                    challenge: 'Scheidungsfall: Faire Aufteilung des gemeinsamen Vermögens war strittig.',
                    result: '€ 485.000',
                    saving: 'Außergerichtliche Einigung – Einsparung von ca. € 15.000 an Anwalts- und Gerichtskosten',
                    method: 'Vergleichs- & Sachwertverfahren',
                  },
                ].map((cs, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                    <div className={`${cs.color} px-5 py-3 flex items-center gap-3`}>
                      <span className="text-white text-2xl font-black opacity-50">{cs.number}</span>
                      <h3 className="font-bold text-white">{cs.title}</h3>
                    </div>
                    <div className="p-5">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Objekt</h4>
                          <div className="space-y-1">
                            {Object.entries(cs.details).map(([k, v]) => (
                              <div key={k} className="flex justify-between text-sm">
                                <span className="text-gray-500">{k}</span>
                                <span className="font-medium text-gray-900">{v}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Ausgangslage</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">{cs.challenge}</p>
                          <div className="mt-3">
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              🔬 {cs.method}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Ergebnis</h4>
                          <div className="text-2xl font-bold text-gray-900 mb-2">{cs.result}</div>
                          <p className="text-sm text-green-700 font-medium bg-green-50 rounded-lg p-2">{cs.saving}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 9 - Sales Tips */}
        <section id="chapter9" className="mb-16 avoid-break">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-orange-500 px-8 py-5 flex items-center gap-3">
              <span className="text-3xl">🎯</span>
              <div>
                <p className="text-amber-100 text-xs font-semibold uppercase tracking-widest">Kapitel 9</p>
                <h2 className="text-xl font-bold text-white">Verkaufsfazit & Profi-Tipps</h2>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-8">
                Ein erfolgreich durchgeführter Immobilienverkauf beginnt lange vor der Inserierung. 
                Mit der richtigen Vorbereitung und einem professionellen Gutachten erzielen Sie den maximalen Preis.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">6-Phasen-Plan für den Verkauf</h3>
                  <div className="space-y-3">
                    {[
                      { phase: 'Vorbereitung', tip: 'Gutachten einholen, Unterlagen zusammenstellen, steuerliche Aspekte klären' },
                      { phase: 'Preisfindung', tip: 'Realistischen Preis auf Basis Gutachten setzen – kein Aufschlag für Verhandlung' },
                      { phase: 'Aufwertung', tip: 'Kleine Schönheitsreparaturen: Streichen, Garten, Sauberkeit – großer Effekt' },
                      { phase: 'Marketing', tip: 'Professionelle Fotos, Grundriss, Exposé, Online-Portale (Immoscout, Immonet)' },
                      { phase: 'Besichtigungen', tip: 'Qualifizierte Interessenten filtern, ggf. mit Makler zusammenarbeiten' },
                      { phase: 'Abwicklung', tip: 'Notar, Kaufvertrag, Übergabe – alles rechtssicher und termingerecht' },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="flex-shrink-0 w-7 h-7 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-bold text-xs">
                          {i + 1}
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900 text-sm">{item.phase}: </span>
                          <span className="text-gray-600 text-sm">{item.tip}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">Do&apos;s & Don&apos;ts</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-bold text-green-600 uppercase tracking-wide">✅ Do&apos;s</p>
                    {[
                      'Professionelles Gutachten vor Inserierung',
                      'Ehrliche Angaben zu Mängeln (Haftungsrisiko!)',
                      'Alle Dokumente vorab bereitstellen',
                      'Mehrere Kaufinteressenten qualifizieren',
                      'Notar frühzeitig einbinden',
                    ].map((d, i) => (
                      <div key={i} className="flex items-center gap-2 bg-green-50 p-2 rounded-lg text-sm text-green-800">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {d}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-red-600 uppercase tracking-wide">❌ Don&apos;ts</p>
                    {[
                      'Zu hohen „Verhandlungspreis" ansetzen',
                      'Mängel verbergen (strafrechtliche Folgen)',
                      'Ohne Gutachten verkaufen',
                      'Erstkäufer ohne Bonitätsprüfung akzeptieren',
                    ].map((d, i) => (
                      <div key={i} className="flex items-center gap-2 bg-red-50 p-2 rounded-lg text-sm text-red-800">
                        <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 10 - Summary */}
        <section id="chapter10" className="mb-16 avoid-break">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-5 flex items-center gap-3">
              <span className="text-3xl">✅</span>
              <div>
                <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest">Kapitel 10</p>
                <h2 className="text-xl font-bold text-white">Zusammenfassung & Empfehlungen</h2>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 leading-relaxed mb-8">
                Ein professionelles Immobiliengutachten ist die Grundlage für alle wichtigen 
                Immobilienentscheidungen. Es schützt Sie, schafft Klarheit und spart langfristig Geld.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">10 wichtigste Erkenntnisse:</h3>
                  <ol className="space-y-3">
                    {[
                      'Ein zertifiziertes Gutachten ist rechtssicher und gerichtsfest',
                      'Online-Schätzungen ersetzen kein professionelles Gutachten',
                      'Die Kosten sind gering im Verhältnis zum Immobilienwert',
                      'Osnabrück zeigt stabiles Preiswachstum von +1,5–2,5% p.a.',
                      'Drei anerkannte Bewertungsverfahren nach ImmoWertV 2021',
                      'Gültigkeitsdauer: ca. 6 Monate ab Erstellungsdatum',
                      'Bei Erbschaft, Scheidung und Finanzierung unverzichtbar',
                      'Frühe Beauftragung (vor Inserierung) ist optimal',
                      'Immobilienpreise variieren stark nach Lage und Stadtteil',
                      'Arbeiten Sie immer mit zertifizierten Sachverständigen',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Ihre nächsten Schritte:</h3>
                  <div className="space-y-4">
                    {[
                      { icon: '📞', title: 'Kostenlose Erstberatung', desc: 'Rufen Sie uns an oder senden Sie eine Anfrage. Wir besprechen Ihren Bedarf und nennen ein unverbindliches Angebot.' },
                      { icon: '📅', title: 'Termin vereinbaren', desc: 'Wir koordinieren einen Besichtigungstermin, der zu Ihrem Zeitplan passt.' },
                      { icon: '📄', title: 'Gutachten erhalten', desc: 'In 7–14 Tagen erhalten Sie Ihr professionelles, rechtssicheres Gutachten.' },
                    ].map((s, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                        <span className="text-2xl">{s.icon}</span>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm">{s.title}</h4>
                          <p className="text-xs text-gray-600 mt-1">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Bereit für Ihr Gutachten?</h3>
                <p className="text-blue-100 mb-6">Kontaktieren Sie uns noch heute für eine kostenlose Erstberatung.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="tel:+495412024880"
                    className="bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors no-underline text-sm"
                  >
                    📞 +49 541 202 4880
                  </a>
                  <a
                    href="/kontakt"
                    className="bg-blue-600 border border-white/30 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-500 transition-colors no-underline text-sm"
                  >
                    ✉️ Online anfragen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="bg-gray-900 rounded-2xl p-8 text-center text-white no-print">
          <div className="text-sm text-gray-400 mb-2">
            © 2026 LASARZ Immobiliengutachter Osnabrück · Alle Rechte vorbehalten
          </div>
          <div className="text-xs text-gray-500">
            Dieser Leitfaden dient zur allgemeinen Information. Für rechtlich verbindliche Bewertungen beauftragen Sie uns direkt.
          </div>
        </div>
      </div>
    </div>
  );
}
