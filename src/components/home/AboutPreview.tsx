'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';

const stats = [
  { key: 'stat_1' as const },
  { key: 'stat_2' as const },
  { key: 'stat_3' as const },
];

export default function AboutPreview() {
  const t = useTranslations('about_preview');
  const locale = useLocale();

  return (
    <section className="section-padding bg-cream-200">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Photo */}
          <AnimatedSection direction="left" className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden max-w-sm mx-auto lg:mx-0">
              <Image
                src="/images/photos/workshop.png"
                alt="Maria Ximena Santos facilitando un taller"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 384px, 384px"
              />
              {/* Decorative corner */}
              <div
                className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-bronze-400/40"
                aria-hidden="true"
              />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" className="order-1 lg:order-2 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="eyebrow">{t('eyebrow')}</span>
              <h2 className="font-heading text-heading-lg text-stone-900 text-balance whitespace-pre-line">
                {t('title')}
              </h2>
              <p className="font-sans text-base text-stone-600 leading-relaxed">
                {t('description')}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8 border-y border-cream-300">
              {stats.map(({ key }) => (
                <div key={key} className="flex flex-col gap-1">
                  <span className="font-heading text-4xl text-bronze-500">
                    {t(`${key}_value`)}
                  </span>
                  <span className="font-sans text-xs text-stone-500 leading-snug">
                    {t(`${key}_label`)}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href={`/${locale}/sobre-mi`}
              className="inline-flex items-center gap-2 font-sans text-sm tracking-[0.06em] uppercase text-bronze-500 hover:text-bronze-600 transition-colors group self-start"
            >
              {t('cta')}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
