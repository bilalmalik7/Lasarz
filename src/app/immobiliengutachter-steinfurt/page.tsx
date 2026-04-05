'use client';

import { CityPageTemplate } from '@/components/sections/CityPageTemplate';
import { getCityPageBySlug } from '@/lib/cityPages';

export default function ImmobiliengutachterSteinfurtPage() {
    const data = getCityPageBySlug('steinfurt')!;
    return <CityPageTemplate data={data} />;
}
