'use client';

import { useTranslations } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';

const companies = [
  {
    name: 'Disenni',
    tagline: 'Diseño estratégico',
    taglineEn: 'Strategic design',
    href: '#',
  },
  {
    name: 'Digitalli',
    tagline: 'Transformación digital',
    taglineEn: 'Digital transformation',
    href: '#',
  },
  {
    name: 'Diforma In Store',
    tagline: 'Experiencia en punto de venta',
    taglineEn: 'Point of sale experience',
    href: '#',
  },
];

export default function GroupCompanies() {
  const t = useTranslations('group_companies');

  return (
    <section className="section-padding-sm bg-cream-50 border-t border-cream-300">
      <div className="container-site">
        <AnimatedSection className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="eyebrow">{t('eyebrow')}</span>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <h2 className="font-heading text-heading-md text-stone-900">{t('title')}</h2>
              <p className="font-sans text-sm text-stone-500">{t('subtitle')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-cream-300">
            {companies.map((company) => (
              <a
                key={company.name}
                href={company.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream-50 p-8 flex items-center justify-between group hover:bg-cream-100 transition-colors duration-300"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-heading text-xl text-stone-900">{company.name}</span>
                  <span className="font-sans text-xs text-stone-400">{company.tagline}</span>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-stone-300 group-hover:text-bronze-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
