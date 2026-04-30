'use client';

import { useState } from 'react';
import { CookieConsentBanner } from '@/components/CookieConsentBanner';

export default function ImpressumPage() {
  return (
    <>
      <CookieConsentBanner />

      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Impressum</h1>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="text-gray-700 mb-2">
                <strong>Lasarz Sachverständigenbüro GmbH</strong>
              </p>
              <p className="text-gray-700 mb-2">
                Katharinenstraße 111<br />
                49078 Osnabrück<br />
                Deutschland
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Vertreten durch:</strong><br />
                Dr. Hans-Jürgen Lasarz<br />
                Dipl.-Ing. (FH) Thomas Lasarz
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Kontakt:</strong><br />
                Telefon: +49 (0) 541 - 600 99 220<br />
                E-Mail: info@lasarz.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Registerdaten</h2>
              <p className="text-gray-700 mb-2">
                <strong>Handelsregister:</strong><br />
                Registergericht: Amtsgericht Osnabrück<br />
                Registernummer: HRB 20488
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Umsatzsteueridentifikationsnummer:</strong><br />
                DE285533470
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Berufsrechtliche Regelungen</h2>
              <p className="text-gray-700 mb-2">
                <strong>Berufsbezeichnung:</strong><br />
                Sachverständiger für Immobilien
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Zuständige Kammer:</strong><br />
                Handelskammer Osnabrück<br />
                Hamburger Straße 10<br />
                49074 Osnabrück
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Berufsrechtliche Regelungen:</strong><br />
                Die Berufsrechtlichen Regelungen und die Erlaubnis zum Ausüben der Tätigkeit finden Sie unter:<br />
                <a href="https://www.handelskammer.de/osnabrueck" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  https://www.handelskammer.de/osnabrueck
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Haftungsausschluss</h2>
              <h3 className="text-xl font-medium text-gray-700 mb-2">Haftung für Inhalte</h3>
              <p className="text-gray-700 mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
                Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
                oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-gray-700 mb-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
                Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. 
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
              
              <h3 className="text-xl font-medium text-gray-700 mb-2">Haftung für Links</h3>
              <p className="text-gray-700 mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige 
                Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="text-gray-700 mb-4">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. 
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
              
              <h3 className="text-xl font-medium text-gray-700 mb-2">Urheberrecht</h3>
              <p className="text-gray-700 mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
                Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung 
                des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="text-gray-700 mb-4">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. 
                Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">EU-Streitschlichtung</h2>
              <p className="text-gray-700 mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="text-gray-700 mb-4">
                Unsere E-Mail-Adresse lautet: info@lasarz.com
              </p>
              <p className="text-gray-700 mb-4">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Datenschutz</h2>
              <p className="text-gray-700 mb-4">
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. 
                Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, 
                erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung 
                nicht an Dritte weitergegeben.
              </p>
              <p className="text-gray-700 mb-4">
                Nähere Informationen zum Umgang mit Nutzerdaten finden Sie in unserer Datenschutzerklärung.
              </p>
              <p className="text-gray-700 mb-4">
                <a href="/datenschutz" className="text-blue-600 hover:underline">Datenschutzerklärung anzeigen</a>
              </p>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}