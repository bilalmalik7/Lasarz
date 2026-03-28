import { ImmoHero } from '@/components/sections/ImmoAbschreibung/ImmoHero';
import { ImmoTrust } from '@/components/sections/ImmoAbschreibung/ImmoTrust';
import { ImmoCalculator } from '@/components/sections/ImmoAbschreibung/ImmoCalculator';
import { ImmoHowItWorks } from '@/components/sections/ImmoAbschreibung/ImmoHowItWorks';
import { ImmoTestimonials } from '@/components/sections/ImmoAbschreibung/ImmoTestimonials';
import { ImmoLegal } from '@/components/sections/ImmoAbschreibung/ImmoLegal';
import { ImmoFAQ } from '@/components/sections/ImmoAbschreibung/ImmoFAQ';
import { ImmoSticky } from '@/components/sections/ImmoAbschreibung/ImmoSticky';
import { Contact } from '@/components/sections/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Das Online-Gutachten für die Restnutzungsdauer - Immoabschreibung.de | Lasarz',
  description: 'Mit einem Restnutzungsdauergutachten Steuern sparen und Rendite steigern! Erhöhe die Rendite deiner Immobilie und spare als Vermieter Steuern.',
};

export default function ImmoAbschreibungPage() {
  return (
    <main style={{ backgroundColor: 'white' }}>
      <ImmoHero />
      <ImmoTrust />
      <ImmoCalculator />
      <ImmoHowItWorks />
      <ImmoTestimonials />
      <ImmoLegal />
      <ImmoFAQ />
      <Contact />
      <ImmoSticky />
    </main>
  );
}
