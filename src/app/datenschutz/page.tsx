'use client';

import { useState } from 'react';
import { CookieConsentBanner } from '@/components/CookieConsentBanner';

export default function DatenschutzPage() {
  return (
    <>
      <CookieConsentBanner />
      
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Datenschutzerklärung</h1>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Allgemeine Hinweise</h2>
              <p className="text-gray-700 mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. 
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
              <p className="text-gray-700 mb-4">
                Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, 
                Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung 
                nicht an Dritte weitergegeben.
              </p>
              <p className="text-gray-700 mb-4">
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz 
                der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Datenerhebung und -speicherung</h2>
              <h3 className="text-xl font-medium text-gray-700 mb-2">Server-Log-Dateien</h3>
              <p className="text-gray-700 mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
                Dies sind:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage der Datenverarbeitung bildet Art. 6 Abs. 1 lit. f DSGVO, 
                der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Cookies</h2>
              <p className="text-gray-700 mb-4">
                Unsere Website verwendet Cookies. Bei Cookies handelt es sich um Textdateien, die im Internetbrowser bzw. vom Internetbrowser auf dem Computersystem 
                gespeichert werden. Zahlreiche Internetseiten verwenden Cookies. Mittels eines Cookies können die Informationen und Leistungen auf unserer Website 
                optimiert werden. Cookies ermöglichen uns, wie etwa den Login in ein Nutzerkonto zu erkennen. 
              </p>
              <p className="text-gray-700 mb-4">
                Die meisten Internetbrowser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch so konfigurieren, dass keine Cookies akzeptiert werden 
                oder immer ein Hinweis erscheint, wenn ein neues Cookie angelegt wird. Falls Sie die Speicherung von Cookies deaktivieren, kann es sein, dass Sie 
                nicht alle Funktionen dieser Website vollumfänglich nutzen können.
              </p>
              <p className="text-gray-700 mb-4">
                Sie können Cookies in Ihrem Browser jederzeit löschen. Die meisten Browser bieten eine Funktion zum Löschen aller Cookies oder nur von Cookies von 
                bestimmten Websites. Die Vorgehensweise ist in den Browser-Einstellungen beschrieben.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Erfassung und Verarbeitung personenbezogener Daten</h2>
              <h3 className="text-xl font-medium text-gray-700 mb-2">Kontaktformular</h3>
              <p className="text-gray-700 mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten werden nicht an Dritte weitergegeben.
              </p>
              <p className="text-gray-700 mb-4">
                Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). 
                Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an die unter "Impressum" genannte Adresse. 
                Die Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Analyse-Tools</h2>
              <h3 className="text-xl font-medium text-gray-700 mb-2">Google Analytics</h3>
              <p className="text-gray-700 mb-4">
                Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, 
                Dublin 4, Irland.
              </p>
              <p className="text-gray-700 mb-4">
                Google Analytics verwendet sog. „Cookies“. Das sind Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website 
                durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google 
                in den USA übertragen und dort gespeichert.
              </p>
              <p className="text-gray-700 mb-4">
                Die Speicherung von Google-Analytics-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse 
                an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren.
              </p>
              <p className="text-gray-700 mb-4">
                Browser Plugin: Sie können die Speicherung von Cookies durch eine entsprechende Einstellung Ihres Browsers verhindern; wir weisen Sie jedoch darauf 
                hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus 
                die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung 
                dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: 
                <a href="https://tools.google.com/dlpage/gaoptout?hl=de" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  https://tools.google.com/dlpage/gaoptout?hl=de
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. SSL-/TLS-Verschlüsselung</h2>
              <p className="text-gray-700 mb-4">
                Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, 
                die Sie an uns als Seitenbetreiber senden, eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des 
                Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p className="text-gray-700 mb-4">
                Wenn die SSL-/TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Widerruf Ihrer Einwilligung zur Datenverarbeitung</h2>
              <p className="text-gray-700 mb-4">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit 
                widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an die unter "Impressum" genannte Adresse. Die Rechtsgrundlage der Widerrufsbefugnis 
                ist Art. 6 Abs. 1 lit. a DSGVO.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Beschwerderecht bei der Aufsichtsbehörde</h2>
              <p className="text-gray-700 mb-4">
                Als Betroffener steht Ihnen im Falle eines Rechtsverstoßes durch uns ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. 
                Zuständige Aufsichtsbehörde in diesem Fall ist die Datenschutzbehörde des Landes, in dem wir unseren Sitz haben. 
                Für die Landesdatenschutzbeauftragten in Nordrhein-Westfalen ist der Landesbeauftragte für Datenschutz und Informationsfreiheit NRW 
                (Landesbeauftragte für Datenschutz und Informationsfreiheit NRW) unter der Adresse 
                <a href="https://www.land.nrw.de/datenschutz" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  https://www.land.nrw.de/datenschutz
                </a>
                erreichbar.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Änderung unserer Datenschutzbestimmungen</h2>
              <p className="text-gray-700 mb-4">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um 
                Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. 
                Für Ihren konkreten Fall gilt die jeweils aktuelle Version.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Kontakt</h2>
              <p className="text-gray-700 mb-4">
                Falls Sie Fragen zur Datenschutzerklärung haben, wenden Sie sich bitte an uns per E-Mail an die unter "Impressum" genannte Adresse.
              </p>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}