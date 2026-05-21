'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-cream-100">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#9B7B52 1px, transparent 1px), linear-gradient(to right, #9B7B52 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      <div className="container-site flex-1 flex flex-col lg:flex-row items-center gap-12 pt-32 pb-20 lg:pt-40 lg:pb-16">
        {/* Text column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col gap-8 max-w-2xl"
        >
          <motion.div variants={item} className="flex items-center gap-3">
            <div className="w-8 h-px bg-bronze-500" aria-hidden="true" />
            <span className="eyebrow">{t('tagline')}</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-heading text-display text-stone-900 text-balance"
          >
            {t('headline')}
          </motion.h1>

          <motion.p
            variants={item}
            className="font-sans text-lg text-stone-500 leading-relaxed max-w-lg"
          >
            {t('subheadline')}
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href={`/${locale}/contacto`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-bronze-500 text-white font-sans text-sm tracking-[0.06em] uppercase hover:bg-bronze-600 transition-colors duration-300"
            >
              {t('cta_primary')}
              <ArrowRight size={14} />
            </Link>
            <Link
              href={`/${locale}/sobre-mi`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-stone-300 text-stone-700 font-sans text-sm tracking-[0.06em] uppercase hover:border-stone-500 hover:text-stone-900 transition-colors duration-300"
            >
              {t('cta_secondary')}
            </Link>
          </motion.div>
        </motion.div>

        {/* Photo column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full lg:w-auto lg:flex-shrink-0 lg:w-[420px] xl:w-[480px]"
        >
          <div className="relative aspect-[4/5] bg-cream-200 overflow-hidden">
            {/* Photo placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-end p-8 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3 text-stone-400">
                  <div className="w-20 h-20 rounded-full bg-stone-300/60" />
                  <p className="text-sm font-sans text-center text-stone-400 px-4">
                    Fotografía profesional de Maria Ximena Santos
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative corner */}
            <div
              className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-bronze-400/40"
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="container-site pb-8 flex items-center gap-3"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-stone-400" />
        </motion.div>
        <span className="font-sans text-xs tracking-[0.12em] uppercase text-stone-400">
          {t('scroll_hint')}
        </span>
      </motion.div>
    </section>
  );
}
