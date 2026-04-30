'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
      // Simulate API call to verify email and prepare download
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, we'd download the PDF here
      setDownloaded(true);
      setIsDownloading(false);
      
      // Redirect to the PDF guide page after a delay
      setTimeout(() => {
        router.push('/immobilienwert/guide/content');
      }, 2000);
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Der komplette Leitfaden zur Immobilienbewertung in Osnabrück 2026
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ihr umfassender Führer für Immobilienbewertung und -verkäufe in Osnabrück
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
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
                    onClick={() => window.open('/immobilienwert/guide/content', '_blank')}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    PDF erneut öffnen
                  </button>
                </div>
              )}
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-cyan-700 p-8 md:p-12 flex flex-col justify-center">
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-6">Warum dieses E-Book?</h2>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500">
                        <span className="text-white font-bold">1</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Aktuelle Marktinformationen</h3>
                      <p className="mt-1 text-blue-100">
                        Verstehen Sie die aktuellen Trends und Entwicklungen im Osnabrücker Immobilienmarkt.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500">
                        <span className="text-white font-bold">2</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Rechtliche Grundlagen</h3>
                      <p className="mt-1 text-blue-100">
                        Klare Erklärung der geltenden Gesetze und Vorschriften für Immobilienbewertungen.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500">
                        <span className="text-white font-bold">3</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Praktische Anwendung</h3>
                      <p className="mt-1 text-blue-100">
                        Schritt-für-Schritt-Anleitungen für erfolgreiche Bewertungen und Verkäufe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
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