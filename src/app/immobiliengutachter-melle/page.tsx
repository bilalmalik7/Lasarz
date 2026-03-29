'use client';

import { CityPageTemplate } from '@/components/sections/CityPageTemplate';
import { getCityPageBySlug } from '@/lib/cityPages';

export default function ImmobiliengutachterMellePage() {
    const data = getCityPageBySlug('melle')!;
    return <CityPageTemplate data={data} />;
}
