'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function HomeCTA() {
  const t = useTranslations('home_cta');
  const locale = useLocale();

  return (
    <section className="section-padding bg-bronze-500 relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="container-site relative">
        <AnimatedSection className="flex flex-col items-center text-center gap-8 max-w-2xl mx-auto">
          <span className="font-sans text-xs tracking-[0.18em] uppercase text-bronze-200">
            {t('eyebrow')}
          </span>
          <h2 className="font-heading text-heading-xl text-white text-balance">
            {t('title')}
          </h2>
          <p className="font-sans text-base text-bronze-100 leading-relaxed">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href={`/${locale}/contacto#formulario`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-bronze-600 font-sans text-sm tracking-[0.06em] uppercase hover:bg-bronze-50 transition-colors duration-300"
            >
              {t('cta')}
              <ArrowRight size={14} />
            </Link>
            <a
              href="https://api.whatsapp.com/send/?phone=573153600354&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/40 text-white font-sans text-sm tracking-[0.06em] uppercase hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>

          <p className="font-sans text-xs text-bronze-300">{t('secondary')}</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
