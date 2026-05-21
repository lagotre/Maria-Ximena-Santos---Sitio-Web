import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import SocialProof from '@/components/home/SocialProof';
import ServicesPreview from '@/components/home/ServicesPreview';
import AboutPreview from '@/components/home/AboutPreview';
import Testimonials from '@/components/home/Testimonials';
import GroupCompanies from '@/components/home/GroupCompanies';
import HomeCTA from '@/components/home/HomeCTA';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'es'
      ? 'Inicio | Consultora de Innovación · LATAM'
      : 'Home | Innovation Consultant · LATAM',
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <SocialProof />
      <ServicesPreview />
      <AboutPreview />
      <Testimonials />
      <GroupCompanies />
      <HomeCTA />
    </>
  );
}
