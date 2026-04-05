'use client';

import { CityPageTemplate } from '@/components/sections/CityPageTemplate';
import { getCityPageBySlug } from '@/lib/cityPages';

export default function ImmobiliengutachterGueterslohPage() {
    const data = getCityPageBySlug('guetersloh')!;
    return <CityPageTemplate data={data} />;
}
