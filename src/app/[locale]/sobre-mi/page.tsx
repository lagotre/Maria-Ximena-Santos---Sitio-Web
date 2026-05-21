import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'es' ? 'Sobre Mí' : 'About',
    description: locale === 'es'
      ? 'Maria Ximena Santos: CEO de Disenni, Socia Fundadora de Grupo Diforma, Presidenta del Consejo Nacional de Andigraf. Más de 20 años de experiencia en innovación y transformación cultural en LATAM.'
      : 'Maria Ximena Santos: CEO of Disenni, Founding Partner of Grupo Diforma, President of the National Council of Andigraf. 20+ years of innovation and cultural transformation experience across LATAM.',
  };
}

export default async function SobreMiPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutPageClient locale={locale} />;
}
