import { notFound } from 'next/navigation';
import { getCityBySlug, cities } from '@/lib/cities';
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

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return cities.map((city) => ({
        slug: city.slug,
    }));
}

export default async function CityPage({ params }: Props) {
    const { slug } = await params;
    const cityData = getCityBySlug(slug);

    if (!cityData) {
        notFound();
    }

    return (
        <main>
            {/* 1. Hero with city-specific content and theme */}
            <OriginalHero 
                city={cityData.name} 
                theme={{ overlay: cityData.theme?.overlay }} 
            />

            {/* 2. Scrolling tagline ticker */}
            <HeroTaglines />

            {/* 3. Key feature pills */}
            <OriginalFeatures />

            {/* 4. About intro */}
            <AboutIntro />

            {/* 5. How we work */}
            <HowWeWork />

            {/* 6. Gutachten packages */}
            <GutachtenPackages />

            {/* 7. Interactive online valuation tool */}
            <InteractiveValuationSection />

            {/* 8. Why choose us */}
            <WhyChooseUs />

            {/* 9. Property types */}
            <PropertyTypesBig />

            {/* 10. Bewertungsanlässe */}
            <BewertungsAnlaesse />

            {/* 11. Local expertise - city specific */}
            <LocalExpertise city={cityData.name} />

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
