import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { routing } from '@/i18n/routing';
import '../globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === 'es';

  return {
    title: {
      default: isEs
        ? 'Maria Ximena Santos | Consultora de Innovación · LATAM'
        : 'Maria Ximena Santos | Innovation Consultant · LATAM',
      template: isEs
        ? '%s | Maria Ximena Santos'
        : '%s | Maria Ximena Santos',
    },
    description: isEs
      ? 'Consultora estratégica de innovación con más de 20 años facilitando transformación cultural, design thinking y co-creación con equipos directivos en Latinoamérica.'
      : 'Strategic innovation consultant with 20+ years facilitating cultural transformation, design thinking and co-creation with executive teams across Latin America.',
    keywords: isEs
      ? [
          'consultora innovación Colombia',
          'design thinking LATAM',
          'facilitadora innovación',
          'transformación cultural empresas',
          'LEGO Serious Play Colombia',
          'workshops innovación empresarial',
          'consultora cambio organizacional',
          'facilitación estratégica',
        ]
      : [
          'innovation consultant Colombia',
          'design thinking LATAM',
          'innovation facilitator',
          'cultural transformation',
          'LEGO Serious Play',
          'organizational change consultant',
        ],
    authors: [{ name: 'Maria Ximena Santos' }],
    creator: 'Maria Ximena Santos',
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_CO' : 'en_US',
      url: `https://mariaximensantos.com/${locale === 'es' ? '' : 'en'}`,
      siteName: 'Maria Ximena Santos',
      title: isEs
        ? 'Maria Ximena Santos | Consultora de Innovación · LATAM'
        : 'Maria Ximena Santos | Innovation Consultant · LATAM',
      description: isEs
        ? 'Innovación centrada en humanos para organizaciones que necesitan evolucionar.'
        : 'Human-centered innovation for organizations that need to evolve.',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Maria Ximena Santos | Innovación · Transformación · LATAM',
      description: isEs
        ? 'Consultora estratégica de innovación. 20+ años. Colombia y LATAM.'
        : 'Strategic innovation consultant. 20+ years. Colombia and LATAM.',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-page text-stone-900 antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
