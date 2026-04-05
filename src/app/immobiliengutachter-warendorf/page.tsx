'use client';
import { CityPageTemplate } from '@/components/sections/CityPageTemplate';
import { getCityPageBySlug } from '@/lib/cityPages';
export default function ImmobiliengutachterWarendorfPage() {
    const data = getCityPageBySlug('warendorf')!;
    return <CityPageTemplate data={data} />;
}
