'use client';

import { useState } from 'react';
import { CookieConsentBanner } from '@/components/CookieConsentBanner';

export default function CookiePolicyPage() {
  return (
    <>
      <CookieConsentBanner />

      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Cookie-Richtlinie</h1>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Was sind Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies sind kleine Textdateien, die von einer Website auf Ihrem Computer oder Mobilgerät gespeichert werden. 
                Sie dienen dazu, die Website für Sie besser zu machen, indem sie Informationen über Ihr Surfen und Ihre Interaktionen 
                mit der Website speichern.
              </p>
              <p className="text-gray-700 mb-4">
                Cookies sind ein wesentlicher Bestandteil moderner Webtechnologien und ermöglichen Funktionen wie das Merken Ihrer 
                Einstellungen, das Anpassen von Inhalten und die Analyse von Nutzerverhalten.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Warum verwenden wir Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Wir verwenden Cookies, um unsere Website zu verbessern und Ihnen ein optimales Nutzererlebnis zu bieten. 
                Unsere Cookies dienen verschiedenen Zwecken:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Funktionale Cookies: Diese Cookies sind erforderlich für die grundlegende Funktionalität der Website</li>
                <li>Performance-Cookies: Diese Cookies helfen uns, die Performance unserer Website zu analysieren</li>
                <li>Marketing-Cookies: Diese Cookies werden verwendet, um personalisierte Werbung anzuzeigen</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Arten von Cookies</h2>
              <h3 className="text-xl font-medium text-gray-700 mb-2">Notwendige Cookies</h3>
              <p className="text-gray-700 mb-4">
                Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich. Ohne diese Cookies 
                funktioniert die Website möglicherweise nicht ordnungsgemäß. Sie werden verwendet, um:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Ihre Spracheinstellungen zu speichern</li>
                <li>Die Session-ID zu speichern, um Sie als angemeldeten Benutzer zu erkennen</li>
                <li>Die Website sicher zu machen</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-700 mb-2">Analyse-Cookies</h3>
              <p className="text-gray-700 mb-4">
                Diese Cookies helfen uns, das Nutzerverhalten zu verstehen und die Website kontinuierlich zu verbessern. 
                Sie werden verwendet, um Informationen wie:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Wie viele Besucher unsere Website besuchen</li>
                <li>Welche Seiten am häufigsten besucht werden</li>
                <li>Wie lange Besucher auf der Website verbringen</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-700 mb-2">Marketing-Cookies</h3>
              <p className="text-gray-700 mb-4">
                Diese Cookies werden verwendet, um Werbung basierend auf Ihren Interessen zu zeigen. 
                Sie werden verwendet, um:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Ihre Interessen zu verfolgen</li>
                <li>Personalisierte Werbung anzuzeigen</li>
                <li>die Effektivität von Werbekampagnen zu messen</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies von Drittanbietern</h2>
              <p className="text-gray-700 mb-4">
                Wir verwenden auch Cookies von Drittanbietern, insbesondere Google Analytics, um die Nutzung unserer Website 
                zu analysieren. Diese Cookies werden von Google verwendet, um Informationen über das Nutzerverhalten zu sammeln.
              </p>
              <p className="text-gray-700 mb-4">
                Google Analytics verwendet Cookies, um Informationen über Ihre Benutzung der Website zu sammeln. 
                Die von Google gesammelten Informationen werden verwendet, um Reports über die Website-Nutzung zu erstellen.
              </p>
              <p className="text-gray-700 mb-4">
                Sie können die Erfassung und Verarbeitung Ihrer Daten durch Google Analytics verhindern, indem Sie das 
                <a href="https://tools.google.com/dlpage/gaoptout?hl=de" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  Google Analytics Opt-out-Plug-in
                </a>
                installieren.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ihre Rechte bezüglich Cookies</h2>
              <p className="text-gray-700 mb-4">
                Sie haben das Recht, jederzeit Ihre Cookie-Einstellungen zu ändern. Sie können Cookies in Ihrem Browser 
                jederzeit löschen oder die Cookie-Einstellungen Ihres Browsers konfigurieren, um Cookies zu blockieren.
              </p>
              <p className="text-gray-700 mb-4">
                Sie können auch die Cookie-Einstellungen Ihres Browsers so konfigurieren, dass Sie über jedes neue Cookie 
                informiert werden, bevor es gespeichert wird. Dadurch können Sie jedes Cookie einzeln genehmigen oder ablehnen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Änderungen dieser Cookie-Richtlinie</h2>
              <p className="text-gray-700 mb-4">
                Wir behalten uns das Recht vor, diese Cookie-Richtlinie jederzeit zu aktualisieren. 
                Änderungen werden auf dieser Seite veröffentlicht und treten in Kraft, sobald sie veröffentlicht werden.
              </p>
              <p className="text-gray-700 mb-4">
                Wir empfehlen Ihnen, diese Cookie-Richtlinie regelmäßig zu überprüfen, um sicherzustellen, 
                dass Sie mit den Änderungen vertraut sind.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kontakt</h2>
              <p className="text-gray-700 mb-4">
                Falls Sie Fragen zu unserer Cookie-Richtlinie haben, wenden Sie sich bitte an uns per E-Mail an die 
                unter "Impressum" genannte Adresse.
              </p>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}