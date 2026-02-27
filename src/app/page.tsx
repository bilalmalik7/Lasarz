import { OriginalHero } from '@/components/sections/OriginalClone/OriginalHero';
import { HeroTaglines } from '@/components/sections/HeroTaglines';
import { OriginalFeatures } from '@/components/sections/OriginalClone/OriginalFeatures';
import { AboutIntro } from '@/components/sections/AboutIntro';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { GutachtenPackages } from '@/components/sections/GutachtenPackages';
import { InteractiveValuationSection } from '@/components/sections/OriginalClone/InteractiveValuationSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { PropertyTypesBig } from '@/components/sections/PropertyTypesBig';
import { BewertungsAnlaesse } from '@/components/sections/BewertungsAnlaesse';
import { LocalExpertise } from '@/components/sections/LocalExpertise';
import { Testimonials } from '@/components/sections/Testimonials';
import { MoreServicesSection } from '@/components/sections/MoreServicesSection';
import { StandorteSection } from '@/components/sections/StandorteSection';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      {/* 1. Hero with full-screen bg image */}
      <OriginalHero />

      {/* 2. Scrolling tagline ticker – USPs */}
      <HeroTaglines />

      {/* 3. Key feature pills (Regionale Expertise, Gesetzeskonform, etc.) */}
      <OriginalFeatures />

      {/* 4. About intro – full intro paragraph with parallax bg */}
      <AboutIntro />

      {/* 5. How we work – 4 valuation methods */}
      <HowWeWork />

      {/* 6. Gutachten packages (Kurzgutachten, Kaufberatung, Verkehrswertgutachten, Beleihungswert) */}
      <GutachtenPackages />

      {/* 7. Interactive online valuation tool */}
      <InteractiveValuationSection />

      {/* 8. Why choose us – 8 USPs on dark parallax bg */}
      <WhyChooseUs />

      {/* 9. Property types – all categories we evaluate */}
      <PropertyTypesBig />

      {/* 10. Bewertungsanlässe – when do you need us? */}
      <BewertungsAnlaesse />

      {/* 11. Local expertise – regional presence */}
      <LocalExpertise />

      {/* 12. Testimonials */}
      <Testimonials />

      {/* 13. More services & further topics */}
      <MoreServicesSection />

      {/* 14. Locations & regional coverage */}
      <StandorteSection />

      {/* 15. FAQ */}
      <FAQ />

      {/* 16. Contact form */}
      <Contact />
    </main>
  );
}
