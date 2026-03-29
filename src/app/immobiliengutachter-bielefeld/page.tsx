'use client';

import { CityPageTemplate } from '@/components/sections/CityPageTemplate';
import { getCityPageBySlug } from '@/lib/cityPages';

export default function ImmobiliengutachterBielefeldPage() {
    const data = getCityPageBySlug('bielefeld')!;
    return <CityPageTemplate data={data} />;
}
