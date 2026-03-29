'use client';

import { CityPageTemplate } from '@/components/sections/CityPageTemplate';
import { getCityPageBySlug } from '@/lib/cityPages';

export default function ImmobiliengutachterRheinePage() {
    const data = getCityPageBySlug('rheine')!;
    return <CityPageTemplate data={data} />;
}
