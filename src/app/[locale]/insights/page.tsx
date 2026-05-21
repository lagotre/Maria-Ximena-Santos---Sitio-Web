import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import InsightsPageClient from './InsightsPageClient';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'es' ? 'Insights' : 'Insights',
    description: locale === 'es'
      ? 'Reflexiones sobre innovación, liderazgo y transformación organizacional desde la práctica. 20+ años de experiencia facilitando el cambio en LATAM.'
      : 'Reflections on innovation, leadership and organizational transformation from practice. 20+ years of experience facilitating change across LATAM.',
  };
}

export default async function InsightsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <InsightsPageClient locale={locale} />;
}
