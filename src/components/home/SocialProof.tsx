'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/shared/AnimatedSection';

const clients = [
  { name: 'Enel', abbr: 'ENEL' },
  { name: 'Vecol', abbr: 'VECOL' },
  { name: 'Andigraf', abbr: 'ANDIGRAF' },
  { name: 'ProColombia', abbr: 'ProColombia' },
  { name: 'Cámara de Comercio de Bogotá', abbr: 'CCB' },
  { name: 'CESA', abbr: 'CESA' },
  { name: 'Claro', abbr: 'CLARO' },
  { name: 'Schindler', abbr: 'SCHINDLER' },
];

export default function SocialProof() {
  const t = useTranslations('social_proof');

  return (
    <section className="section-padding-sm border-y border-cream-300 bg-cream-50">
      <div className="container-site">
        <AnimatedSection className="flex flex-col gap-8">
          <p className="eyebrow text-center">{t('title')}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="flex items-center justify-center py-3 px-2 group"
                title={client.name}
              >
                <span className="font-sans text-xs font-semibold tracking-[0.12em] uppercase text-stone-300 group-hover:text-stone-500 transition-colors duration-300 text-center leading-tight">
                  {client.abbr}
                </span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
