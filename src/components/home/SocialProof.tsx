'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import AnimatedSection from '@/components/shared/AnimatedSection';

const clients = [
  { name: 'Enel',                        file: 'enel.png'        },
  { name: 'Vecol',                        file: 'vecol.png'       },
  { name: 'Andigraf',                     file: 'andigraf.jpeg'   },
  { name: 'ProColombia',                  file: 'procolombia.png' },
  { name: 'Cámara de Comercio de Bogotá', file: 'ccb.png'         },
  { name: 'CESA',                         file: 'cesa.png'        },
  { name: 'Claro',                        file: 'claro.png'       },
  { name: 'Schindler',                    file: 'schindler.png'   },
];

// Duplicated for seamless infinite loop
const track = [...clients, ...clients];

export default function SocialProof() {
  const t = useTranslations('social_proof');

  return (
    <section className="section-padding-sm border-y border-cream-300 bg-cream-50 overflow-hidden">
      <div className="container-site">
        <AnimatedSection className="flex flex-col gap-10">
          <p className="eyebrow text-center">{t('title')}</p>
        </AnimatedSection>
      </div>

      {/* Full-width carousel */}
      <div className="relative mt-6 overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-r from-cream-50 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-l from-cream-50 to-transparent" />

        <div
          className="flex items-center gap-16 w-max"
          style={{ animation: 'marquee 28s linear infinite' }}
        >
          {track.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center justify-center h-10 flex-shrink-0 group"
              title={client.name}
            >
              <Image
                src={`/images/logos/${client.file}`}
                alt={client.name}
                width={120}
                height={40}
                className="h-10 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                style={{ maxWidth: '120px' }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
