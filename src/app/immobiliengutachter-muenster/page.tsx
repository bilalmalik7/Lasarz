'use client';

import { CityPageTemplate } from '@/components/sections/CityPageTemplate';
import { getCityPageBySlug } from '@/lib/cityPages';

export default function ImmobiliengutachterMuensterPage() {
    const data = getCityPageBySlug('muenster')!;
    return <CityPageTemplate data={data} />;
}
