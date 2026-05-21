'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionHeader from '@/components/shared/SectionHeader';
import { motion } from 'framer-motion';

const timeline = [
  {
    period: '2020 — Presente',
    periodEn: '2020 — Present',
    role: 'Socia Fundadora',
    roleEn: 'Founding Partner',
    org: 'Grupo Diforma',
    description:
      'Ecosistema de empresas especializadas en innovación, diseño estratégico y transformación organizacional para el mercado LATAM.',
    descriptionEn:
      'Ecosystem of companies specialized in innovation, strategic design and organizational transformation for the LATAM market.',
  },
  {
    period: '2018 — Presente',
    periodEn: '2018 — Present',
    role: 'CEO',
    roleEn: 'CEO',
    org: 'Disenni',
    description:
      'Empresa de diseño estratégico y experiencia. Proyectos con empresas del sector retail, energía, telecomunicaciones y manufactura.',
    descriptionEn:
      'Strategic design and experience company. Projects with companies in retail, energy, telecommunications and manufacturing sectors.',
  },
  {
    period: '2015 — 2020',
    periodEn: '2015 — 2020',
    role: 'Presidenta del Consejo Nacional',
    roleEn: 'President of the National Council',
    org: 'Andigraf',
    description:
      'Liderazgo gremial del sector gráfico e industrial de Colombia. Representación del sector ante el gobierno y organismos internacionales.',
    descriptionEn:
      'Industry leadership of Colombia\'s graphic and industrial sector. Sector representation before government and international organizations.',
  },
  {
    period: '2004 — Presente',
    periodEn: '2004 — Present',
    role: 'Consultora Estratégica Independiente',
    roleEn: 'Independent Strategic Consultant',
    org: 'LATAM',
    description:
      'Procesos de innovación, transformación cultural y facilitación ejecutiva con organizaciones como Enel, ProColombia, Claro, Schindler, Vecol, CESA y Cámara de Comercio de Bogotá.',
    descriptionEn:
      'Innovation processes, cultural transformation and executive facilitation with organizations including Enel, ProColombia, Claro, Schindler, Vecol, CESA and the Bogotá Chamber of Commerce.',
  },
];

const certifications = [
  {
    title: 'Maestría en Liderazgo y Coaching Ejecutivo',
    titleEn: 'Master\'s in Leadership and Executive Coaching',
    institution: 'Universidad / Instituto',
    year: '2018',
  },
  {
    title: 'Facilitadora Certificada LEGO® Serious Play',
    titleEn: 'Certified LEGO® Serious Play Facilitator',
    institution: 'Association of Master Trainers in LSP',
    year: '2016',
  },
  {
    title: 'Design Thinking — Metodología Stanford d.school',
    titleEn: 'Design Thinking — Stanford d.school Methodology',
    institution: 'IDEO / Stanford d.school',
    year: '2014',
  },
  {
    title: 'Diseñadora Industrial',
    titleEn: 'Industrial Designer',
    institution: 'Universidad Nacional de Colombia',
    year: '2002',
  },
];

const clients = [
  'Enel', 'Vecol', 'Andigraf', 'ProColombia',
  'Cámara de Comercio de Bogotá', 'CESA', 'Claro', 'Schindler',
];

interface Props {
  locale: string;
}

export default function AboutPageClient({ locale }: Props) {
  const t = useTranslations('about_page');

  return (
    <>
      {/* Page header */}
      <section className="pt-36 pb-20 bg-cream-100 border-b border-cream-300">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <AnimatedSection className="flex flex-col gap-6">
              <span className="eyebrow">{t('eyebrow')}</span>
              <h1 className="font-heading text-display text-stone-900 text-balance">
                {t('title')}
              </h1>
              <p className="font-sans text-lg text-stone-500 leading-relaxed max-w-lg">
                {t('intro')}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="flex justify-end">
              <div className="relative w-full max-w-sm aspect-[4/5] bg-cream-200">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-stone-400">
                  <div className="w-20 h-20 rounded-full bg-stone-300" />
                  <p className="text-sm font-sans">Retrato profesional</p>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-bronze-400/30" aria-hidden="true" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-page">
        <div className="container-site">
          <AnimatedSection className="mb-14">
            <SectionHeader
              eyebrow={t('experience_eyebrow')}
              title={t('experience_title')}
            />
          </AnimatedSection>

          <div className="flex flex-col gap-px bg-cream-300">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1, duration: 0.65 }}
                className="bg-cream-50 p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-cream-100 transition-colors"
              >
                <div className="md:col-span-3">
                  <span className="font-sans text-xs text-stone-400 tracking-wide">
                    {locale === 'es' ? item.period : item.periodEn}
                  </span>
                </div>
                <div className="md:col-span-9 flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading text-xl text-stone-900">
                      {locale === 'es' ? item.role : item.roleEn}
                    </h3>
                    <span className="font-sans text-sm text-bronze-500">— {item.org}</span>
                  </div>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed">
                    {locale === 'es' ? item.description : item.descriptionEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-stone-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #9B7B52 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
          aria-hidden="true"
        />
        <div className="container-site relative">
          <AnimatedSection className="max-w-3xl mx-auto text-center flex flex-col gap-6">
            <span className="eyebrow text-bronze-400">{t('philosophy_eyebrow')}</span>
            <blockquote className="font-heading text-heading-lg text-white leading-snug">
              &ldquo;{t('philosophy_quote')}&rdquo;
            </blockquote>
            <cite className="font-sans text-sm text-stone-400 not-italic">— Maria Ximena Santos</cite>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-cream-100 border-y border-cream-300">
        <div className="container-site">
          <AnimatedSection className="mb-12">
            <SectionHeader
              eyebrow={t('certifications_eyebrow')}
              title={t('certifications_title')}
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-cream-300">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="bg-cream-50 p-8 flex flex-col gap-2"
              >
                <h3 className="font-heading text-xl text-stone-900">
                  {locale === 'es' ? cert.title : cert.titleEn}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="font-sans text-sm text-stone-500">{cert.institution}</span>
                  <span className="font-sans text-xs text-stone-300">·</span>
                  <span className="font-sans text-xs text-bronze-500">{cert.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding-sm bg-page">
        <div className="container-site">
          <AnimatedSection className="flex flex-col gap-8">
            <SectionHeader
              eyebrow={t('clients_eyebrow')}
              title={t('clients_title')}
            />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {clients.map((client, i) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="py-4 px-6 bg-cream-100 border border-cream-300 flex items-center justify-center"
                >
                  <span className="font-sans text-xs tracking-[0.1em] uppercase text-stone-400 text-center">
                    {client}
                  </span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-bronze-500">
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-heading text-heading-md text-white">{t('cta_title')}</h2>
          <Link
            href={`/${locale}/contacto`}
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white text-bronze-600 font-sans text-sm tracking-[0.06em] uppercase hover:bg-bronze-50 transition-colors"
          >
            {t('cta')}
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
