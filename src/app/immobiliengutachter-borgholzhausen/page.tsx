'use client';

import { CityPageTemplate } from '@/components/sections/CityPageTemplate';
import { getCityPageBySlug } from '@/lib/cityPages';

export default function ImmobiliengutachterBorgholzhausenPage() {
    const data = getCityPageBySlug('borgholzhausen')!;
    return <CityPageTemplate data={data} />;
}
