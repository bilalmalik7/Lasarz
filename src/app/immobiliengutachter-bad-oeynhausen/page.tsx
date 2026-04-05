'use client';
import { CityPageTemplate } from '@/components/sections/CityPageTemplate';
import { getCityPageBySlug } from '@/lib/cityPages';
export default function ImmobiliengutachterBadOeynhausenPage() {
    const data = getCityPageBySlug('bad-oeynhausen')!;
    return <CityPageTemplate data={data} />;
}
