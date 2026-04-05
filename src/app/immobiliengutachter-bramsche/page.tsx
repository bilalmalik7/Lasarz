'use client';

import { CityPageTemplate } from '@/components/sections/CityPageTemplate';
import { getCityPageBySlug } from '@/lib/cityPages';

export default function ImmobiliengutachterBramschePage() {
    const data = getCityPageBySlug('bramsche')!;
    return <CityPageTemplate data={data} />;
}
