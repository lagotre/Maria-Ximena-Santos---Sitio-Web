'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = (locale: string) => [
  { key: 'services', href: `/${locale}/servicios` },
  { key: 'about', href: `/${locale}/sobre-mi` },
  { key: 'cases', href: `/${locale}/casos` },
  { key: 'insights', href: `/${locale}/insights` },
  { key: 'contact', href: `/${locale}/contacto` },
];

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = navLinks(locale);
  const otherLocale = locale === 'es' ? 'en' : 'es';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-cream-50/95 backdrop-blur-md border-b border-cream-300 py-4'
            : 'bg-transparent py-6'
        )}
      >
        <div className="container-site flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-baseline gap-2.5 group"
            aria-label="Maria Ximena Santos — Inicio"
          >
            <span className="font-heading text-xl tracking-tight text-stone-900">
              MX<span className="text-bronze-500">Santos</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
            {links.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  className={cn(
                    'font-sans text-xs tracking-[0.08em] uppercase transition-colors duration-200',
                    isActive
                      ? 'text-bronze-500'
                      : 'text-stone-600 hover:text-stone-900'
                  )}
                >
                  {t(link.key)}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href={`/${otherLocale}`}
              className="font-sans text-xs tracking-[0.1em] uppercase text-stone-400 hover:text-stone-600 transition-colors"
              aria-label={`Switch to ${otherLocale.toUpperCase()}`}
            >
              {t('language')}
            </Link>
            <Link
              href={`/${locale}/contacto`}
              className="font-sans text-xs tracking-[0.08em] uppercase px-6 py-3 bg-bronze-500 text-white hover:bg-bronze-600 transition-colors duration-300"
            >
              {t('cta')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 text-stone-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-cream-100 pt-24 flex flex-col"
          >
            <nav className="container-site flex flex-col gap-6 py-8" aria-label="Menú móvil">
              {links.map((link, i) => (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'font-heading text-heading-md block border-b border-cream-300 pb-4',
                      pathname === link.href ? 'text-bronze-500' : 'text-stone-800'
                    )}
                  >
                    {t(link.key)}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-4 mt-4"
              >
                <Link
                  href={`/${locale}/contacto`}
                  className="font-sans text-sm tracking-[0.06em] uppercase px-8 py-4 bg-bronze-500 text-white text-center"
                >
                  {t('cta')}
                </Link>
                <Link
                  href={`/${otherLocale}`}
                  className="font-sans text-xs tracking-[0.1em] uppercase text-stone-400 text-center py-2"
                >
                  {t('language')}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
