import type { MetadataRoute } from 'next';

const BASE_URL = 'https://mariaximensantos.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['es', 'en'];
  const routes = ['', '/servicios', '/sobre-mi', '/casos', '/insights', '/contacto'];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE_URL}/${l}${route}`])
          ),
        },
      });
    }
  }

  return entries;
}
