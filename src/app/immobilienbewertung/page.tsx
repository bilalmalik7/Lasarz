import { HeroBewertung } from '@/components/sections/Immobilienbewertung/HeroBewertung';
import { ServiceFeatures } from '@/components/sections/Immobilienbewertung/ServiceFeatures';
import InteractiveMap from '@/components/sections/Immobilienbewertung/InteractiveMap';
import { InteractiveValuationSection } from '@/components/sections/OriginalClone/InteractiveValuationSection';
import { GutachtenPackages } from '@/components/sections/GutachtenPackages';
import { Contact } from '@/components/sections/Contact';

export const metadata = {
    title: 'Immobilienbewertung | Lasarz Sachverständigenbüro',
    description: 'Professionelle Immobilienbewertungen und Verkehrswertgutachten von Lasarz. Wir sagen, was wir können... und können, was wir sagen.',
};

export default function ImmobilienbewertungPage() {
    return (
        <main>
            {/* 1. Hero Section */}
            <HeroBewertung />

            {/* 2. Service Features (Teasers) */}
            <ServiceFeatures />

            {/* 3. Interactive Geographical Map */}
            <InteractiveMap />

            {/* 4. Interactive Valuation Section */}
            <InteractiveValuationSection />

            {/* 5. Gutachten Packages */}
            <GutachtenPackages />

            {/* 6. Contact form */}
            <Contact />
        </main>
    );
}
