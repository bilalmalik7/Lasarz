'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

export function Breadcrumb() {
  const pathname = usePathname();
  
  // Define breadcrumb paths for different routes
  const getBreadcrumbItems = (): BreadcrumbItem[] => {
    const pathSegments = pathname.split('/').filter(segment => segment);
    
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', href: '/' }
    ];
    
    // Map common paths to breadcrumb names
    const pathMap: Record<string, string> = {
      'immobiliengutachter-osnabrueck': 'Immobiliengutachter Osnabrück',
      'immobiliengutachter-georgsmarienhuette': 'Immobiliengutachter Georgsmarienhütte',
      'immobiliengutachter-bramsche': 'Immobiliengutachter Bramsche',
      'immobiliengutachter-melle': 'Immobiliengutachter Melle',
      'immobiliengutachter-bad-iburg': 'Immobiliengutachter Bad Iburg',
      'immobiliengutachter-belm': 'Immobiliengutachter Belm',
      'immobiliengutachter-flensburg': 'Immobiliengutachter Flensburg',
      'immobiliengutachter-muenster': 'Immobiliengutachter Münster',
      'immobiliengutachter-bielefeld': 'Immobiliengutachter Bielefeld',
      'immobiliengutachter-lingen': 'Immobiliengutachter Lingen',
      'immobiliengutachter-emsdetten': 'Immobiliengutachter Emsdetten',
      'immobiliengutachter-steinfurt': 'Immobiliengutachter Steinfurt',
      'immobiliengutachter-guetersloh': 'Immobiliengutachter Gütersloh',
      'immobiliengutachter-rheine': 'Immobiliengutachter Rheine',
      'immobiliengutachter-ibbenbueren': 'Immobiliengutachter Ibbenbüren',
      'immobiliengutachter-halle-westf': 'Immobiliengutachter Halle (Westf)',
      'immobiliengutachter-warendorf': 'Immobiliengutachter Warendorf',
      'immobiliengutachter-bad-oeynhausen': 'Immobiliengutachter Bad Oeynhausen',
      'immobiliengutachter-bad-bentheim': 'Immobiliengutachter Bad Bentheim',
      'immobiliengutachter-bad-laer': 'Immobiliengutachter Bad Laer',
      'immobiliengutachter-kirchlengern': 'Immobiliengutachter Kirchlengern',
      'immobiliengutachter-buende': 'Immobiliengutachter Bünde',
      'immobiliengutachter-loehne': 'Immobiliengutachter Löhne',
      'immobiliengutachter-borgholzhausen': 'Immobiliengutachter Borgholzhausen',
      'ueber-uns': 'Über Lasarz Immobiliengutachter',
      'faq': 'Häufige Fragen zur Immobilienbewertung',
      'kontakt': 'Kontakt Immobiliengutachter Osnabrück',
      'blog': 'Immobilien Blog und Ratgeber',
      'team': 'Unser Team',
      'leistungen': 'Leistungen',
      'immobilienbewertung': 'Immobilienbewertung',
      'immobilien-abschreibung': 'Immobilienabschreibung',
      'immobilienwert': 'Immobilienwert',
      'marktdaten': 'Marktdaten',
      'honorar': 'Honorar',
      'prozess': 'Prozess',
      'referenzen': 'Referenzen',
      'standorte': 'Standorte',
      'marktberichte-immobilien-osnabrueck': 'Marktberichte Immobilien Osnabrück',
      'immobilienbewertung-scheidung': 'Immobilienbewertung bei Scheidung',
      'bewertungsleistungen': 'Bewertungsleistungen',
      'bewertungsanlaesse': 'Bewertungsanlässe'
    };
    
    // Generate breadcrumb items
    for (let i = 0; i < pathSegments.length; i++) {
      const segment = pathSegments[i];
      
      // Skip if it's just the root
      if (segment === '') continue;
      
      // Handle service pages (leistungen/)
      if (segment === 'leistungen') {
        breadcrumbs.push({ name: 'Leistungen' });
        continue;
      }
      
      // Handle service subpages
      if (pathSegments[i - 1] === 'leistungen' && i > 0) {
        const serviceMap: Record<string, string> = {
          'verkehrswertgutachten': 'Verkehrswertgutachten',
          'beleihungswertgutachten': 'Beleihungswertgutachten',
          'kurzgutachten': 'Kurzgutachten',
          'schimmelgutachten': 'Schimmelgutachten',
          'erbschaftsgutachten': 'Erbschaftsgutachten',
          'schadensgutachten': 'Schadensgutachten',
          'energieausweis': 'Energieausweis',
          'betreuung': 'Betreuung',
          'verkaeuferbereratung': 'Verkaufberatung',
          'investmentberatung': 'Investmentberatung',
          'gewerbeimmobilien': 'Gewerbeimmobilien',
          'steuerliche-bewertung': 'Steuerliche Bewertung',
          'angebotspreis-altbau-osnabrueck': 'Angebotspreis Altbau',
          'scheidung-immobilie-osnabrueck': 'Scheidung und Immobilie',
          'erbschaftsgutachten-osnabrueck': 'Erbschaftsgutachten',
          'immobilienmarkt-osnabrueck-2024': 'Immobilienmarkt Osnabrück',
          'checkliste-dokumente-hausverkauf': 'Checkliste Dokumente',
          'marktwert-vs-beleihungswert': 'Marktwert vs Beleihungswert',
          'hausbewertung-osnabrueck-faktoren': 'Hausbewertung Faktoren',
          'immobiliengutachter-osnabrueck-hausverkauf': 'Immobiliengutachter beim Hausverkauf'
        };
        
        const serviceName = serviceMap[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        breadcrumbs.push({ name: serviceName });
        continue;
      }
      
      // Handle city pages
      if (segment.startsWith('immobiliengutachter-')) {
        const cityName = segment.replace('immobiliengutachter-', '').replace(/-/g, ' ');
        const formattedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
        breadcrumbs.push({ name: `Immobiliengutachter ${formattedCityName}` });
        continue;
      }
      
      // Handle other mapped segments
      if (pathMap[segment]) {
        breadcrumbs.push({ name: pathMap[segment] });
        continue;
      }
      
      // Default handling for remaining segments
      const formattedSegment = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      breadcrumbs.push({ name: formattedSegment });
    }
    
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbItems();

  return (
    <nav className="breadcrumb-container" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="breadcrumb-item">
            {index === breadcrumbs.length - 1 ? (
              <span className="breadcrumb-current">{crumb.name}</span>
            ) : crumb.href ? (
              <Link href={crumb.href} className="breadcrumb-link">
                {crumb.name}
              </Link>
            ) : (
              <span className="breadcrumb-text">{crumb.name}</span>
            )}
            {index < breadcrumbs.length - 1 && (
              <span className="breadcrumb-separator">›</span>
            )}
          </li>
        ))}
      </ol>
      
      {/* Add BreadcrumbList schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((crumb, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": crumb.name,
              ...(crumb.href && { "item": `https://lasarz.com${crumb.href}` })
            }))
          })
        }}
      />
    </nav>
  );
}