'use client';

import { CityPageTemplate } from '@/components/sections/CityPageTemplate';
import { getCityPageBySlug } from '@/lib/cityPages';

export default function ImmobiliengutachterHalleWestfPage() {
    const data = getCityPageBySlug('halle-westf')!;
    return <CityPageTemplate data={data} />;
}
