'use client';

import { CityPageTemplate } from '@/components/sections/CityPageTemplate';
import { getCityPageBySlug } from '@/lib/cityPages';

export default function ImmobiliengutachterEmsdетtenPage() {
    const data = getCityPageBySlug('emsdetten')!;
    return <CityPageTemplate data={data} />;
}
