import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'es' ? 'Contacto' : 'Contact',
    description: locale === 'es'
      ? 'Conversa con Maria Ximena Santos sobre el reto de innovación o transformación de tu organización. WhatsApp, email o formulario de contacto.'
      : "Talk with Maria Ximena Santos about your organization's innovation or transformation challenge. WhatsApp, email or contact form.",
  };
}

export default async function ContactoPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactPageClient locale={locale} />;
}
