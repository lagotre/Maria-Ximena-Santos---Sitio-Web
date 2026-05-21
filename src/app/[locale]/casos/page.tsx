import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import CasosPageClient from './CasosPageClient';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'es' ? 'Casos y Resultados' : 'Cases & Results',
    description: locale === 'es'
      ? 'Procesos de innovación y transformación cultural con Enel, ProColombia, Claro y más. Resultados reales de facilitación estratégica en LATAM.'
      : 'Innovation and cultural transformation processes with Enel, ProColombia, Claro and more. Real results from strategic facilitation in LATAM.',
  };
}

export default async function CasosPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CasosPageClient locale={locale} />;
}
