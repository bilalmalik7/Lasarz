'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ImmobilienWertGuidePage() {
  const [email, setEmail] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsDownloading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setDownloaded(true);
      setIsDownloading(false);
      setTimeout(() => {
        router.push('/immobilienwert/guide/content');
      }, 2000);
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
    }
  };

  const features = [
    { icon: '📋', title: '10 Kapitel', desc: 'Vollständiger Leitfaden von A–Z' },
    { icon: '📈', title: 'Marktdaten 2026', desc: 'Aktuelle Osnabrück Preise' },
    { icon: '⚖️', title: 'Rechtlich geprüft', desc: 'ImmoWertV 2021 konform' },
    { icon: '🏠', title: 'Praxisbeispiele', desc: 'Reale Fälle aus Osnabrück' },
  ];

  const chapterPreviews = [
    { num: 1, title: 'Warum Gutachten?', icon: '📋' },
    { num: 2, title: 'Kosten & Honorar', icon: '💶' },
    { num: 3, title: 'Ablauf', icon: '🔄' },
    { num: 4, title: 'Rechtliches', icon: '⚖️' },
    { num: 5, title: 'FAQ', icon: '❓' },
    { num: 6, title: 'Marktanalyse', icon: '📈' },
    { num: 7, title: 'Wertbestimmung', icon: '🏠' },
    { num: 8, title: 'Praxisbeispiele', icon: '📂' },
    { num: 9, title: 'Verkaufstipps', icon: '🎯' },
    { num: 10, title: 'Zusammenfassung', icon: '✅' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/4" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Kostenloser Download · Ausgabe 2026
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Der komplette<br />
                <span className="text-cyan-300">Immobilienbewertungs-</span><br />
                Leitfaden Osnabrück
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Unser umfassender E-Book-Leitfaden mit 10 Kapiteln erklärt alles, 
                was Sie über Immobilienbewertung, Gutachten und den aktuellen 
                Osnabrücker Immobilienmarkt wissen müssen.
              </p>

              {/* Feature Badges */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl p-3">
                    <span className="text-2xl">{f.icon}</span>
                    <div>
                      <p className="font-bold text-sm">{f.title}</p>
                      <p className="text-blue-200 text-xs">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 text-blue-200 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Kostenlos
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Kein Spam
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  DSGVO-konform
                </div>
              </div>
            </div>

            {/* Right: Form Card */}
            <div className="relative">
              {/* Cover preview */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-4 border-4 border-white/20">
                <Image
                  src="/images/immobilien_cover.png"
                  alt="Leitfaden Cover"
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-xs text-cyan-300 font-semibold uppercase tracking-wide">E-Book</p>
                    <p className="font-bold">Immobilienbewertung Osnabrück 2026</p>
                    <p className="text-xs text-blue-200">LASARZ Sachverständige · 10 Kapitel · PDF</p>
                  </div>
                </div>
              </div>

              {/* Download Form */}
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                {!downloaded ? (
                  <>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">Jetzt kostenlos herunterladen</h2>
                    <p className="text-gray-500 text-sm mb-5">Geben Sie Ihre E-Mail ein und erhalten Sie sofortigen Zugang.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Ihre E-Mail-Adresse *
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900"
                          placeholder="ihre@email.de"
                          required
                        />
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isDownloading}
                        className={`w-full py-4 px-4 rounded-xl font-bold text-white text-sm transition-all flex items-center justify-center gap-2 ${
                          isDownloading 
                            ? 'bg-blue-400 cursor-not-allowed' 
                            : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg active:scale-[0.99]'
                        }`}
                      >
                        {isDownloading ? (
                          <>
                            <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Wird vorbereitet...
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Kostenlosen Leitfaden herunterladen
                          </>
                        )}
                      </button>
                      
                      <p className="text-xs text-gray-400 text-center">
                        Mit dem Download stimmen Sie unserer{' '}
                        <a href="/datenschutz" className="underline hover:text-gray-600">Datenschutzerklärung</a>{' '}
                        zu. Jederzeit abmeldbar.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Zugang freigeschaltet!</h3>
                    <p className="mt-2 text-gray-500 text-sm">
                      Sie werden weitergeleitet…
                    </p>
                    <button
                      onClick={() => window.open('/immobilienwert/guide/content', '_blank')}
                      className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                      Jetzt öffnen →
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What's Inside */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Was Sie in diesem Leitfaden erwartet</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            10 umfassende Kapitel, erstellt von zertifizierten Immobiliengutachtern mit über 15 Jahren Erfahrung in Osnabrück.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-16">
          {chapterPreviews.map((ch) => (
            <div key={ch.num} className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:shadow-md hover:border-blue-300 transition-all group">
              <div className="text-2xl mb-2">{ch.icon}</div>
              <div className="text-xs font-bold text-blue-600 mb-1">Kap. {ch.num}</div>
              <div className="text-xs font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">{ch.title}</div>
            </div>
          ))}
        </div>

        {/* Why choose us */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Zeitsparend',
              desc: 'Alle wichtigen Informationen zur Immobilienbewertung kompakt in einem Dokument – keine stundenlange Recherche mehr.',
              stat: '10+ Stunden Research gespart',
            },
            {
              icon: (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: 'Fachlich fundiert',
              desc: 'Erstellt von zertifizierten Sachverständigen nach ImmoWertV 2021. Rechtlich geprüfte Inhalte mit Quellenangaben.',
              stat: '15+ Jahre Expertise einfließend',
            },
            {
              icon: (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: 'Sofort anwendbar',
              desc: 'Praxisbeispiele, Checklisten und konkrete Handlungsempfehlungen für Ihren spezifischen Fall in Osnabrück.',
              stat: 'Direkt umsetzbare Tipps',
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{item.desc}</p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}