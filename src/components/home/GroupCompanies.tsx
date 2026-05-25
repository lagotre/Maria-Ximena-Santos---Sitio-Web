'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { motion } from 'framer-motion';

const companies = [
  {
    name: 'Disenni',
    tagline: 'Diseño estratégico e innovación',
    taglineEn: 'Strategic design & innovation',
    logoFile: 'LOGOS DIFORMA GROUP/Logo Disenni.png',
    href: '#',
  },
  {
    name: 'Digitalli',
    tagline: 'Transformación digital',
    taglineEn: 'Digital transformation',
    logoFile: 'LOGOS DIFORMA GROUP/Logo Digitalli.png',
    href: '#',
  },
  {
    name: 'Diforma',
    tagline: 'Experiencia en punto de venta',
    taglineEn: 'Point of sale experience',
    logoFile: 'LOGOS DIFORMA GROUP/Logo Diforma.png',
    href: '#',
  },
];

export default function GroupCompanies() {
  const t = useTranslations('group_companies');

  return (
    <section className="section-padding-sm bg-stone-900 border-t border-stone-800">
      <div className="container-site">
        <AnimatedSection className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="eyebrow text-bronze-400">{t('eyebrow')}</span>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <h2 className="font-heading text-heading-md text-white">{t('title')}</h2>
              <p className="font-sans text-sm text-stone-400">{t('subtitle')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-stone-800">
            {companies.map((company, i) => (
              <motion.a
                key={company.name}
                href={company.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-stone-900 p-8 flex items-center justify-between group hover:bg-stone-800 transition-colors duration-300"
              >
                <div className="flex flex-col gap-3">
                  <div className="h-10 flex items-center">
                    <Image
                      src={`/images/logos/${company.logoFile}`}
                      alt={company.name}
                      width={200}
                      height={40}
                      className="h-10 w-auto object-contain object-left"
                    />
                  </div>
                  <span className="font-sans text-xs text-stone-500">{company.tagline}</span>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-stone-600 group-hover:text-bronze-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0 ml-4"
                />
              </motion.a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
