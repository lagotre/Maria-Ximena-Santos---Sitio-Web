import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Linkedin, MessageCircle, Mail, ArrowUpRight } from 'lucide-react';

const footerLinks = (locale: string) => [
  { key: 'services', href: `/${locale}/servicios` },
  { key: 'about', href: `/${locale}/sobre-mi` },
  { key: 'cases', href: `/${locale}/casos` },
  { key: 'insights', href: `/${locale}/insights` },
  { key: 'contact', href: `/${locale}/contacto` },
];

export default function Footer() {
  const t = useTranslations('nav');
  const tf = useTranslations('footer');
  const locale = useLocale();
  const links = footerLinks(locale);

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <Link href={`/${locale}`} className="inline-block">
              <span className="font-heading text-2xl text-white tracking-tight">
                Ximena <span className="text-bronze-400">Santos</span>
              </span>
            </Link>
            <p className="font-sans text-sm text-stone-400 leading-relaxed max-w-xs">
              {tf('tagline')}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/maria-ximena-santos-arias-b3267112/?locale=en_US"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-stone-700 text-stone-400 hover:text-white hover:border-stone-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=573153600354&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-stone-700 text-stone-400 hover:text-white hover:border-stone-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={14} />
              </a>
              <a
                href="mailto:ximena.santos@disenni.net"
                className="w-9 h-9 flex items-center justify-center border border-stone-700 text-stone-400 hover:text-white hover:border-stone-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Nav column */}
          <div className="md:col-span-3 md:col-start-7">
            <p className="eyebrow text-stone-500 mb-5">{tf('nav_title')}</p>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className="font-sans text-sm text-stone-400 hover:text-white transition-colors"
                >
                  {t(link.key)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className="md:col-span-3 md:col-start-10">
            <p className="eyebrow text-stone-500 mb-5">{tf('contact_title')}</p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:ximena.santos@disenni.net"
                className="font-sans text-sm text-stone-400 hover:text-white transition-colors flex items-center gap-1"
              >
                ximena.santos@disenni.net
                <ArrowUpRight size={12} />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=573153600354&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-stone-400 hover:text-white transition-colors flex items-center gap-1"
              >
                WhatsApp
                <ArrowUpRight size={12} />
              </a>
              <a
                href="https://www.linkedin.com/in/maria-ximena-santos-arias-b3267112/?locale=en_US"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-stone-400 hover:text-white transition-colors flex items-center gap-1"
              >
                LinkedIn
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-xs text-stone-600">{tf('copyright')}</p>
          <p className="font-sans text-xs text-stone-600">{tf('location')}</p>
        </div>
      </div>
    </footer>
  );
}
