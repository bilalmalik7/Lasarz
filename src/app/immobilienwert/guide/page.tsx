'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ImmobilienWertGuide() {
  const [email, setEmail] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsDownloading(true);
    
    try {
      // Simulate API call to verify email and prepare download
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, we'd download the PDF here
      setDownloaded(true);
      setIsDownloading(false);
      
      // In a real implementation, we would trigger the PDF download here
      // For now, we'll just redirect to a download confirmation page
      setTimeout(() => {
        // This would normally trigger the PDF download
        alert('PDF herunterladen - In einer echten Implementation würde hier das PDF gestartet werden.');
      }, 1000);
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Der komplette Leitfaden zur Immobilienbewertung in Osnabrück 2026
          </h1>
          <p className="text-xl text-gray-700">
            Umfassender Führer für Immobilienbewertung und -verkäufe in Osnabrück
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Inhaltsverzeichnis</h2>
              <button 
                onClick={() => window.print()}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors"
              >
                Als PDF drucken
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { number: 1, title: "Warum Gutachten", description: "Die Wichtigkeit eines professionellen Immobilien-Gutachtens" },
                { number: 2, title: "Kosten", description: "Welche Kosten sind bei einer Immobilienbewertung zu erwarten" },
                { number: 3, title: "Ablauf", description: "Schritte einer Immobilienbewertung" },
                { number: 4, title: "Rechtliches", description: "Rechtliche Rahmenbedingungen und Vorschriften" },
                { number: 5, title: "FAQ", description: "Häufig gestellte Fragen zur Immobilienbewertung" },
                { number: 6, title: "Marktanalyse", description: "Aktuelle Trends und Entwicklung in Osnabrück" },
                { number: 7, title: "Wertbestimmung", description: "Methoden und Kriterien zur Bewertung" },
                { number: 8, title: "Praxisbeispiele", description: "Erfolgsgeschichten aus Osnabrück" },
                { number: 9, title: "Verkaufsfazit", description: "Tipps für einen erfolgreichen Immobilienverkauf" },
                { number: 10, title: "Zusammenfassung", description: "Wichtige Punkte im Überblick" }
              ].map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold mr-3">
                      {item.number}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kostenloses E-Book herunterladen</h2>
            
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                Holen Sie sich unseren umfassenden Leitfaden zur Immobilienbewertung in Osnabrück 2026 
                und erhalten Sie wertvolle Einblicke in die aktuelle Marktlage und Bewertungspraxis.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">10 umfassende Kapitel mit praktischen Informationen</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Aktuelle Daten für das Jahr 2026</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Praxisbeispiele aus Osnabrück</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Wichtige rechtliche Hinweise</span>
                </li>
              </ul>
            </div>

            {!downloaded ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Ihre E-Mail-Adresse
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="ihre@email.de"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isDownloading}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-white ${
                    isDownloading 
                      ? 'bg-blue-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 transition-colors'
                  }`}
                >
                  {isDownloading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Herunterladen vorbereiten...
                    </span>
                  ) : (
                    'PDF herunterladen'
                  )}
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  Mit dem Download akzeptieren Sie unsere Datenschutzbestimmungen.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Herunterladen erfolgreich!</h3>
                <p className="mt-2 text-gray-600">
                  Ihr PDF wird automatisch gestartet. Falls nicht, klicken Sie auf den Button unten.
                </p>
                <button
                  onClick={() => window.open('/immobilienwert/guide.pdf', '_blank')}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  PDF erneut öffnen
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Zeitersparnis</h3>
            <p className="text-gray-600">
              Sparen Sie wertvolle Zeit durch strukturierte Informationen und praxisnahe Anleitungen.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sicherheit</h3>
            <p className="text-gray-600">
              Vertrauen Sie auf fundierte Informationen von Experten für Ihre Immobilienentscheidungen.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aktualität</h3>
            <p className="text-gray-600">
              Alle Informationen basieren auf aktuellen Daten und gesetzlichen Vorgaben für 2026.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}