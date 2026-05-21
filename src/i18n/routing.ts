import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  pathnames: {
    '/': '/',
    '/servicios': {
      es: '/servicios',
      en: '/services',
    },
    '/sobre-mi': {
      es: '/sobre-mi',
      en: '/about',
    },
    '/casos': {
      es: '/casos',
      en: '/cases',
    },
    '/insights': '/insights',
    '/contacto': {
      es: '/contacto',
      en: '/contact',
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
