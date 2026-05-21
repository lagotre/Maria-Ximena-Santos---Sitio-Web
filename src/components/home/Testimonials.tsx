'use client';

import { useTranslations, useLocale } from 'next-intl';
import { testimonials } from '@/lib/data/testimonials';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionHeader from '@/components/shared/SectionHeader';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const locale = useLocale();

  return (
    <section className="section-padding bg-stone-900">
      <div className="container-site">
        <AnimatedSection className="mb-14">
          <SectionHeader
            eyebrow={t('eyebrow')}
            title={t('title')}
            light
            align="center"
            titleClassName="max-w-lg mx-auto"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-800">
          {testimonials.map((t_item, i) => (
            <motion.div
              key={t_item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-stone-900 p-8 md:p-10 flex flex-col gap-6"
            >
              {/* Quote mark */}
              <span
                className="font-heading text-6xl text-bronze-700 leading-none select-none"
                aria-hidden="true"
              >
                "
              </span>

              <blockquote className="font-sans text-sm text-stone-300 leading-relaxed flex-1">
                {locale === 'es' ? t_item.quote : t_item.quoteEn}
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-stone-800">
                <div className="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center flex-shrink-0">
                  <span className="font-sans text-xs text-stone-400 font-medium">
                    {t_item.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm text-white font-medium">{t_item.name}</p>
                  <p className="font-sans text-xs text-stone-500">
                    {locale === 'es' ? t_item.title : t_item.titleEn}
                    {t_item.company && `, ${t_item.company}`}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
