'use client';

import { CityPageTemplate } from '@/components/sections/CityPageTemplate';
import { getCityPageBySlug } from '@/lib/cityPages';

export default function ImmobiliengutachterFlensburgPage() {
    const data = getCityPageBySlug('flensburg')!;
    return <CityPageTemplate data={data} />;
}
