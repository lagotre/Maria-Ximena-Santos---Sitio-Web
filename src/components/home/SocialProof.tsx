'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/shared/AnimatedSection';

const clients = [
  { name: 'Enel',                        file: 'enel.png',        width: 100 },
  { name: 'Vecol',                        file: 'vecol.png',       width: 90  },
  { name: 'Andigraf',                     file: 'andigraf.jpeg',   width: 110 },
  { name: 'ProColombia',                  file: 'procolombia.png', width: 100 },
  { name: 'Cámara de Comercio de Bogotá', file: 'ccb.png',         width: 120 },
  { name: 'CESA',                         file: 'cesa.png',        width: 70  },
  { name: 'Claro',                        file: 'claro.png',       width: 70  },
  { name: 'Schindler',                    file: 'schindler.png',   width: 110 },
];

export default function SocialProof() {
  const t = useTranslations('social_proof');

  return (
    <section className="section-padding-sm border-y border-cream-300 bg-cream-50">
      <div className="container-site">
        <AnimatedSection className="flex flex-col gap-10">
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
                <div className="relative h-10 w-full flex items-center justify-center">
                  <Image
                    src={`/images/logos/${client.file}`}
                    alt={client.name}
                    width={client.width}
                    height={40}
                    className="object-contain max-h-10 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-400"
                    style={{ width: 'auto', maxWidth: client.width }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
