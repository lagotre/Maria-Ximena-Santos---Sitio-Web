import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { services } from '@/lib/data/services';
import ServicePageClient from './ServicePageClient';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services_page' });
  return {
    title: locale === 'es' ? 'Servicios' : 'Services',
    description: locale === 'es'
      ? 'Talleres de innovación, facilitación Design Thinking, LEGO® Serious Play, alineación estratégica y más. Procesos diseñados para retos reales en LATAM.'
      : 'Innovation workshops, Design Thinking facilitation, LEGO® Serious Play, strategic alignment and more. Processes designed for real challenges in LATAM.',
  };
}

export default async function ServiciosPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ServicePageClient locale={locale} services={services} />;
}
