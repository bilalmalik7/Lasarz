'use client';

import { CityPageTemplate } from '@/components/sections/CityPageTemplate';
import { getCityPageBySlug } from '@/lib/cityPages';

export default function ImmobiliengutachterLingenPage() {
    const data = getCityPageBySlug('lingen')!;
    return <CityPageTemplate data={data} />;
}
