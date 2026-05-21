'use client';

import { useTranslations } from 'next-intl';
import { caseStudies, testimonials } from '@/lib/data/testimonials';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionHeader from '@/components/shared/SectionHeader';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Props {
  locale: string;
}

export default function CasosPageClient({ locale }: Props) {
  const t = useTranslations('cases_page');

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

      {/* Case studies */}
      <section className="section-padding bg-page">
        <div className="container-site flex flex-col gap-px bg-cream-300">
          {caseStudies.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="bg-cream-50 p-8 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Client + sector */}
              <div className="lg:col-span-3 flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <span className="eyebrow">{locale === 'es' ? 'Cliente' : 'Client'}</span>
                  <h2 className="font-heading text-heading-md text-stone-900">{c.client}</h2>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-xs px-2.5 py-1 bg-bronze-100 text-bronze-600 border border-bronze-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-xs tracking-[0.1em] uppercase text-stone-400">
                    {locale === 'es' ? 'El reto' : 'The challenge'}
                  </span>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                    {locale === 'es' ? c.challenge : c.challengeEn}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-xs tracking-[0.1em] uppercase text-stone-400">
                    {locale === 'es' ? 'El proceso' : 'The process'}
                  </span>
                  <p className="font-sans text-sm text-stone-600 leading-relaxed">
                    {locale === 'es' ? c.process : c.processEn}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-xs tracking-[0.1em] uppercase text-stone-400">
                    {locale === 'es' ? 'El resultado' : 'The result'}
                  </span>
                  <p className="font-sans text-sm text-stone-700 leading-relaxed font-medium">
                    {locale === 'es' ? c.result : c.resultEn}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-stone-900">
        <div className="container-site">
          <AnimatedSection className="mb-14">
            <SectionHeader
              eyebrow={t('testimonials_eyebrow')}
              title={t('testimonials_title')}
              light
              align="center"
              titleClassName="max-w-lg mx-auto"
            />
          </AnimatedSection>

          <div className="flex flex-col gap-px bg-stone-800">
            {testimonials.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="bg-stone-900 p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8"
              >
                <div className="md:col-span-1">
                  <span className="font-heading text-5xl text-bronze-700 leading-none" aria-hidden="true">"</span>
                </div>
                <div className="md:col-span-8">
                  <blockquote className="font-sans text-stone-300 leading-relaxed">
                    {locale === 'es' ? item.quote : item.quoteEn}
                  </blockquote>
                </div>
                <div className="md:col-span-3 flex flex-col gap-1 md:border-l border-stone-800 md:pl-8">
                  <p className="font-sans text-sm text-white font-medium">{item.name}</p>
                  <p className="font-sans text-xs text-stone-500">
                    {locale === 'es' ? item.title : item.titleEn}
                  </p>
                  <p className="font-sans text-xs text-stone-600">{item.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-bronze-500">
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-heading-md text-white">
              {locale === 'es' ? '¿Tu organización podría ser el próximo caso?' : 'Could your organization be the next case?'}
            </h2>
            <p className="font-sans text-sm text-bronze-100">
              {locale === 'es' ? 'Hablemos sobre el reto que enfrentas.' : "Let's talk about the challenge you're facing."}
            </p>
          </div>
          <Link
            href={`/${locale}/contacto`}
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-bronze-600 font-sans text-sm tracking-[0.06em] uppercase hover:bg-bronze-50 transition-colors"
          >
            {locale === 'es' ? 'Hablemos de tu reto' : "Let's talk"}
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
