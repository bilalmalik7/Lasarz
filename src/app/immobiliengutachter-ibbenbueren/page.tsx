'use client';

import { CityPageTemplate } from '@/components/sections/CityPageTemplate';
import { getCityPageBySlug } from '@/lib/cityPages';

export default function ImmobiliengutachterIbbenbuerenPage() {
    const data = getCityPageBySlug('ibbenbueren')!;
    return <CityPageTemplate data={data} />;
}
