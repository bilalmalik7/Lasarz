'use client';

import { CityPageTemplate } from '@/components/sections/CityPageTemplate';
import { getCityPageBySlug } from '@/lib/cityPages';

export default function ImmobiliengutachterGeorgsmarienhüttePage() {
    const data = getCityPageBySlug('georgsmarienhütte')!;
    return <CityPageTemplate data={data} />;
}
