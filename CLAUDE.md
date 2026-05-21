# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build (all 17 pages SSG)
npm run lint     # ESLint
npx tsc --noEmit # Type check only
```

## Architecture

**Next.js 15 App Router** with `src/app/[locale]/` for two locales: `es` (default) and `en`.

**i18n**: `next-intl` v3. All UI strings live in `src/messages/es.json` and `src/messages/en.json`. Long-form content (services, testimonials, case studies) lives in typed data files under `src/lib/data/`.

**Routing pattern**: All pages follow `src/app/[locale]/<page>/page.tsx` (Server Component for metadata + `setRequestLocale`) that renders a `<Page>Client.tsx` (Client Component with `'use client'`). This keeps SEO metadata server-side while allowing Framer Motion animations client-side.

**Design system** (Tailwind config):
- Custom color scale: `bronze-{50-900}` (warm caramel accent), `cream-{50-400}` (warm off-white backgrounds)
- Font families: `font-heading` = Cormorant Garamond (via CSS var `--font-cormorant`), `font-sans` = Inter
- Custom font sizes: `text-display`, `text-heading-xl`, `text-heading-lg`, `text-heading-md` — all use `clamp()` for fluid type
- Utility classes defined in `globals.css`: `.container-site`, `.section-padding`, `.section-padding-sm`, `.eyebrow`, `.bg-page`, `.bg-surface`

**Animations**: Framer Motion `useInView` in `AnimatedSection.tsx` for scroll-triggered fade/slide. All motion components have `'use client'` boundary.

**Data files**:
- `src/lib/data/services.ts` — 8 services with bilingual fields
- `src/lib/data/testimonials.ts` — 3 testimonials + 3 case studies, bilingual

## Photo placeholders

Professional portrait images are not yet included. Components show styled placeholder divs with comment guidance. Replace with `next/image` components when real photos are provided. Key locations:
- `src/components/home/Hero.tsx` — Hero portrait
- `src/components/home/AboutPreview.tsx` — About section photo
- `src/app/[locale]/sobre-mi/AboutPageClient.tsx` — Full about page portrait

## Deployment

Vercel-ready. No custom server config needed — `next.config.ts` uses `next-intl/plugin`. Domain target: `mariaximensantos.com`. Update `BASE_URL` in `src/app/sitemap.ts` and `og.url` in `src/app/[locale]/layout.tsx` when domain is live.

## Contact info to update

Replace placeholder values in production:
- WhatsApp: `https://wa.me/573000000000` → real number
- Email: `hola@mariaximensantos.com` → confirmed address
- LinkedIn: `https://linkedin.com/in/mariaximensantos` → real profile slug
