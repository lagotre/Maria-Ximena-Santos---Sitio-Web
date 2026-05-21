'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/data/services';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionHeader from '@/components/shared/SectionHeader';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ReactNode> = {
  Lightbulb: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26A7 7 0 0 1 5 9a7 7 0 0 1 7-7z" />
    </svg>
  ),
  Users: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Puzzle: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z" />
    </svg>
  ),
  Target: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
};

export default function ServicesPreview() {
  const t = useTranslations('services_preview');
  const locale = useLocale();
  const featured = services.filter((s) => s.featured);

  return (
    <section className="section-padding bg-page">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Header */}
          <div className="lg:col-span-4">
            <AnimatedSection className="sticky top-28">
              <SectionHeader
                eyebrow={t('eyebrow')}
                title={t('title')}
                subtitle={t('subtitle')}
              />
              <Link
                href={`/${locale}/servicios`}
                className="inline-flex items-center gap-2 mt-8 font-sans text-sm tracking-[0.06em] uppercase text-bronze-500 hover:text-bronze-600 transition-colors group"
              >
                {t('cta')}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>

          {/* Service cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-cream-300">
            {featured.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-cream-50 p-8 flex flex-col gap-5 group hover:bg-cream-100 transition-colors duration-300"
              >
                <div className="text-bronze-400">{iconMap[service.icon]}</div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-heading text-xl text-stone-900">
                    {locale === 'es' ? service.title : service.titleEn}
                  </h3>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed">
                    {locale === 'es' ? service.shortDescription : service.shortDescriptionEn}
                  </p>
                </div>
                <Link
                  href={`/${locale}/servicios#${service.id}`}
                  className="mt-auto font-sans text-xs tracking-[0.1em] uppercase text-bronze-500 hover:text-bronze-600 flex items-center gap-1 transition-colors"
                >
                  {locale === 'es' ? 'Ver servicio' : 'View service'}
                  <ArrowRight size={11} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
