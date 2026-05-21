'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import SectionHeader from '@/components/shared/SectionHeader';
import { motion } from 'framer-motion';

interface Article {
  id: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  category: string;
  readTime: string;
  date: string;
  featured: boolean;
}

const articles: Article[] = [
  {
    id: 'preguntas-no-respuestas',
    title: 'Por qué los mejores procesos de innovación empiezan con preguntas, no con respuestas',
    titleEn: 'Why the best innovation processes start with questions, not answers',
    excerpt:
      'Existe una tendencia natural en las organizaciones a llegar a los procesos de innovación con soluciones predefinidas. El resultado es predecible: mucho entusiasmo inicial, poca transformación real.',
    excerptEn:
      'There is a natural tendency in organizations to approach innovation processes with predefined solutions. The result is predictable: lots of initial enthusiasm, little real transformation.',
    category: 'innovation',
    readTime: '5 min',
    date: '2025-03-15',
    featured: true,
  },
  {
    id: 'lego-serious-play-ejecutivos',
    title: 'LEGO® Serious Play: lo que pasa cuando los ejecutivos juegan en serio',
    titleEn: 'LEGO® Serious Play: what happens when executives play in earnest',
    excerpt:
      'Hay un momento específico en cada sesión de LEGO® Serious Play con equipos directivos en el que algo cambia. No en las piezas. En las personas.',
    excerptEn:
      'There is a specific moment in every LEGO® Serious Play session with executive teams when something shifts. Not in the bricks. In the people.',
    category: 'facilitation',
    readTime: '7 min',
    date: '2025-02-28',
    featured: true,
  },
  {
    id: 'cocreacion-sin-procesos-vacios',
    title: 'Co-creación sin procesos vacíos: cómo involucrar a las personas que realmente importan',
    titleEn: 'Co-creation without empty processes: how to involve the people who truly matter',
    excerpt:
      'Co-crear se ha convertido en un término vaciado de significado. Todo el mundo "co-crea". Casi nadie lo hace de verdad.',
    excerptEn:
      'Co-create has become a term emptied of meaning. Everyone "co-creates." Almost no one actually does it.',
    category: 'innovation',
    readTime: '6 min',
    date: '2025-01-20',
    featured: false,
  },
  {
    id: 'cultura-innovacion-error-comun',
    title: 'Cultura de innovación: el error más común que cometen las organizaciones',
    titleEn: 'Innovation culture: the most common mistake organizations make',
    excerpt:
      'Instalar una cultura de innovación no es lo mismo que hacer talleres de innovación. La confusión entre los dos es el error más caro que cometen las organizaciones.',
    excerptEn:
      'Installing an innovation culture is not the same as running innovation workshops. Confusing the two is the most expensive mistake organizations make.',
    category: 'culture',
    readTime: '8 min',
    date: '2024-12-10',
    featured: false,
  },
  {
    id: 'facilitacion-ejecutiva-proceso',
    title: 'Facilitación ejecutiva: por qué importa más el proceso que el facilitador',
    titleEn: 'Executive facilitation: why the process matters more than the facilitator',
    excerpt:
      'Un buen proceso de facilitación desaparece. No porque no esté presente, sino porque las personas no lo sienten como una intervención externa. Lo sienten como suyo.',
    excerptEn:
      'A good facilitation process disappears. Not because it isn\'t present, but because people don\'t experience it as an external intervention. They experience it as their own.',
    category: 'facilitation',
    readTime: '5 min',
    date: '2024-11-05',
    featured: false,
  },
  {
    id: 'transformacion-sin-miedo',
    title: 'Transformación organizacional sin miedo: aprendizajes de 20 años de práctica',
    titleEn: 'Organizational transformation without fear: learnings from 20 years of practice',
    excerpt:
      'El miedo no es el obstáculo de la transformación. Es su condición de posibilidad. Las organizaciones que lo evitan no se transforman. Las que aprenden a trabajar con él, sí.',
    excerptEn:
      'Fear is not the obstacle to transformation. It is its condition of possibility. Organizations that avoid it don\'t transform. Those that learn to work with it do.',
    category: 'transformation',
    readTime: '9 min',
    date: '2024-10-22',
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  innovation: 'text-bronze-500 bg-bronze-50',
  facilitation: 'text-stone-600 bg-stone-100',
  culture: 'text-stone-700 bg-cream-200',
  transformation: 'text-stone-600 bg-stone-100',
  leadership: 'text-stone-600 bg-stone-100',
};

interface Props {
  locale: string;
}

export default function InsightsPageClient({ locale }: Props) {
  const t = useTranslations('insights_page');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'innovation', 'facilitation', 'culture', 'transformation', 'leadership'];
  const filtered = activeCategory === 'all'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  const featured = articles.filter((a) => a.featured);
  const regular = filtered.filter((a) => !a.featured);

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

      {/* Featured articles */}
      {activeCategory === 'all' && (
        <section className="section-padding-sm bg-page border-b border-cream-300">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-cream-300">
              {featured.map((article, i) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.65 }}
                  className="bg-cream-50 p-8 md:p-10 flex flex-col gap-5 group hover:bg-cream-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-sans text-xs px-2.5 py-1 ${categoryColors[article.category] || 'text-stone-600 bg-stone-100'}`}>
                      {t(`categories.${article.category}`)}
                    </span>
                    <span className="font-sans text-xs text-stone-400">{article.readTime}</span>
                  </div>
                  <h2 className="font-heading text-heading-md text-stone-900 text-balance">
                    {locale === 'es' ? article.title : article.titleEn}
                  </h2>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed flex-1">
                    {locale === 'es' ? article.excerpt : article.excerptEn}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-cream-300">
                    <span className="font-sans text-xs text-stone-400">
                      {new Date(article.date).toLocaleDateString(locale === 'es' ? 'es-CO' : 'en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="font-sans text-xs tracking-[0.1em] uppercase text-bronze-500 group-hover:text-bronze-600 flex items-center gap-1 transition-colors">
                      {t('read_more')}
                      <ArrowRight size={11} />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filter + articles grid */}
      <section className="section-padding bg-page">
        <div className="container-site flex flex-col gap-10">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-xs tracking-[0.08em] uppercase px-4 py-2 border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-stone-900 text-white border-stone-900'
                    : 'bg-transparent text-stone-500 border-stone-200 hover:border-stone-400 hover:text-stone-700'
                }`}
              >
                {t(`categories.${cat}`)}
              </button>
            ))}
          </div>

          {/* Articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-300">
            {(activeCategory === 'all' ? regular : filtered).map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="bg-cream-50 p-7 flex flex-col gap-4 group hover:bg-cream-100 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className={`font-sans text-xs px-2 py-0.5 ${categoryColors[article.category] || 'text-stone-600 bg-stone-100'}`}>
                    {t(`categories.${article.category}`)}
                  </span>
                </div>
                <h3 className="font-heading text-xl text-stone-900 text-balance">
                  {locale === 'es' ? article.title : article.titleEn}
                </h3>
                <p className="font-sans text-sm text-stone-500 leading-relaxed flex-1">
                  {locale === 'es' ? article.excerpt : article.excerptEn}
                </p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-cream-300">
                  <span className="font-sans text-xs text-stone-400">{article.readTime}</span>
                  <ArrowRight
                    size={12}
                    className="text-stone-300 group-hover:text-bronze-500 group-hover:translate-x-1 transition-all"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn CTA */}
      <section className="section-padding-sm bg-cream-200 border-t border-cream-300">
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="font-heading text-heading-md text-stone-900">
              {locale === 'es' ? '¿Quieres más reflexiones?' : 'Want more reflections?'}
            </h3>
            <p className="font-sans text-sm text-stone-500">
              {locale === 'es'
                ? 'Maria Ximena comparte perspectivas regularmente en LinkedIn.'
                : 'Maria Ximena shares perspectives regularly on LinkedIn.'}
            </p>
          </div>
          <a
            href="https://linkedin.com/in/mariaximensantos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 border border-stone-900 text-stone-900 font-sans text-sm tracking-[0.06em] uppercase hover:bg-stone-900 hover:text-white transition-colors"
          >
            {t('linkedin_cta')}
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
    </>
  );
}
