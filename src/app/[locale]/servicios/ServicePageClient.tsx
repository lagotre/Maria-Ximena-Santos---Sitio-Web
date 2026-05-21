'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Users, Lightbulb, Target, RefreshCw, Map, Star, GitMerge } from 'lucide-react';
import type { Service } from '@/lib/data/services';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionHeader from '@/components/shared/SectionHeader';
import { motion } from 'framer-motion';

const iconComponents: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb size={22} strokeWidth={1.5} />,
  Users: <Users size={22} strokeWidth={1.5} />,
  Puzzle: <Star size={22} strokeWidth={1.5} />,
  Target: <Target size={22} strokeWidth={1.5} />,
  GitMerge: <GitMerge size={22} strokeWidth={1.5} />,
  Map: <Map size={22} strokeWidth={1.5} />,
  RefreshCw: <RefreshCw size={22} strokeWidth={1.5} />,
  Star: <Star size={22} strokeWidth={1.5} />,
};

interface Props {
  locale: string;
  services: Service[];
}

export default function ServicePageClient({ locale, services }: Props) {
  const t = useTranslations('services_page');

  return (
    <>
      {/* Page header */}
      <section className="pt-36 pb-16 bg-cream-100 border-b border-cream-300">
        <div className="container-site">
          <AnimatedSection className="max-w-2xl">
            <SectionHeader
              eyebrow={t('eyebrow')}
              title={t('title')}
              subtitle={t('subtitle')}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Services list */}
      <section className="section-padding bg-page">
        <div className="container-site flex flex-col gap-px bg-cream-300">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: Math.min(i * 0.08, 0.4), duration: 0.65 }}
              className="bg-cream-50 p-8 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 group hover:bg-cream-100 transition-colors duration-300"
            >
              {/* Left: number + icon */}
              <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4">
                <span className="font-sans text-xs text-stone-300 font-medium">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="text-bronze-400">{iconComponents[service.icon]}</div>
              </div>

              {/* Center: main content */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <h2 className="font-heading text-heading-md text-stone-900">
                  {locale === 'es' ? service.title : service.titleEn}
                </h2>
                <p className="font-sans text-base text-stone-500 leading-relaxed">
                  {locale === 'es' ? service.description : service.descriptionEn}
                </p>
              </div>

              {/* Right: metadata + CTA */}
              <div className="lg:col-span-4 flex flex-col gap-5 lg:pl-8 lg:border-l border-cream-300">
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-xs tracking-[0.1em] uppercase text-stone-400">
                    {locale === 'es' ? 'Ideal para' : 'Ideal for'}
                  </span>
                  <p className="font-sans text-sm text-stone-600">
                    {locale === 'es' ? service.audience : service.audienceEn}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-xs tracking-[0.1em] uppercase text-stone-400">
                    {locale === 'es' ? 'Metodologías' : 'Methodologies'}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {(locale === 'es' ? service.methodologies : service.methodologiesEn).map((m) => (
                      <span
                        key={m}
                        className="font-sans text-xs px-2.5 py-1 bg-cream-200 text-stone-600 border border-cream-300"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/${locale}/contacto`}
                  className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.1em] uppercase text-bronze-500 hover:text-bronze-600 mt-auto transition-colors group/link"
                >
                  {t('cta_global')}
                  <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding-sm bg-cream-200 border-t border-cream-300">
        <div className="container-site flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-heading-md text-stone-900">
              {locale === 'es'
                ? '¿No encuentras lo que buscas?'
                : "Don't see what you're looking for?"}
            </h3>
            <p className="font-sans text-sm text-stone-500">
              {locale === 'es'
                ? 'Cada proceso se diseña a partir del reto específico de tu organización.'
                : 'Every process is designed from your organization\'s specific challenge.'}
            </p>
          </div>
          <Link
            href={`/${locale}/contacto`}
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-bronze-500 text-white font-sans text-sm tracking-[0.06em] uppercase hover:bg-bronze-600 transition-colors"
          >
            {t('cta_global')}
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
