'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, MessageCircle, Linkedin, ArrowRight, CheckCircle } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  locale: string;
}

export default function ContactPageClient({ locale }: Props) {
  const t = useTranslations('contact_page');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Page header */}
      <section className="pt-36 pb-16 bg-cream-100 border-b border-cream-300">
        <div className="container-site">
          <AnimatedSection className="max-w-xl">
            <span className="eyebrow block mb-4">{t('eyebrow')}</span>
            <h1 className="font-heading text-display text-stone-900 mb-6 text-balance">
              {t('title')}
            </h1>
            <p className="font-sans text-lg text-stone-500 leading-relaxed">
              {t('subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section id="formulario" className="section-padding bg-page">
        <div className="container-site grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Form */}
          <AnimatedSection className="lg:col-span-7">
            <div className="bg-cream-50 p-8 md:p-10">
              <p className="font-heading text-xl text-stone-900 mb-8">{t('form_title')}</p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-4 py-12 text-center"
                  >
                    <CheckCircle size={40} className="text-bronze-500" strokeWidth={1.5} />
                    <p className="font-heading text-heading-md text-stone-900">{t('form_success')}</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="name"
                          className="font-sans text-xs tracking-[0.08em] uppercase text-stone-500"
                        >
                          {t('form_name')}
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="font-sans text-sm text-stone-900 bg-white border border-cream-300 px-4 py-3 outline-none focus:border-bronze-400 transition-colors"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="company"
                          className="font-sans text-xs tracking-[0.08em] uppercase text-stone-500"
                        >
                          {t('form_company')}
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          className="font-sans text-sm text-stone-900 bg-white border border-cream-300 px-4 py-3 outline-none focus:border-bronze-400 transition-colors"
                          placeholder="Tu empresa"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="font-sans text-xs tracking-[0.08em] uppercase text-stone-500"
                      >
                        {t('form_email')}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="font-sans text-sm text-stone-900 bg-white border border-cream-300 px-4 py-3 outline-none focus:border-bronze-400 transition-colors"
                        placeholder="tu@empresa.com"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="message"
                        className="font-sans text-xs tracking-[0.08em] uppercase text-stone-500"
                      >
                        {t('form_message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={handleChange}
                        className="font-sans text-sm text-stone-900 bg-white border border-cream-300 px-4 py-3 outline-none focus:border-bronze-400 transition-colors resize-none"
                        placeholder={t('form_message_placeholder')}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-bronze-500 text-white font-sans text-sm tracking-[0.06em] uppercase hover:bg-bronze-600 transition-colors disabled:opacity-60"
                    >
                      {loading ? (
                        <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          {t('form_submit')}
                          <ArrowRight size={14} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>

          {/* Contact info */}
          <AnimatedSection delay={0.2} className="lg:col-span-5 flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <p className="font-sans text-xs tracking-[0.1em] uppercase text-stone-400">
                {t('direct_contact')}
              </p>
            </div>

            {/* WhatsApp */}
            <a
              href="https://api.whatsapp.com/send/?phone=573153600354&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 bg-cream-50 border border-cream-300 hover:border-bronze-300 hover:bg-cream-100 transition-all group"
            >
              <div className="w-12 h-12 bg-green-100 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={20} className="text-green-600" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <span className="font-sans text-xs tracking-[0.08em] uppercase text-stone-400">
                  WhatsApp
                </span>
                <span className="font-heading text-lg text-stone-900">
                  {t('whatsapp_cta')}
                </span>
              </div>
              <ArrowRight
                size={16}
                className="text-stone-300 group-hover:text-bronze-500 group-hover:translate-x-1 transition-all"
              />
            </a>

            {/* Email */}
            <a
              href="mailto:ximena.santos@disenni.net"
              className="flex items-center gap-5 p-6 bg-cream-50 border border-cream-300 hover:border-bronze-300 hover:bg-cream-100 transition-all group"
            >
              <div className="w-12 h-12 bg-bronze-100 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-bronze-600" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <span className="font-sans text-xs tracking-[0.08em] uppercase text-stone-400">
                  Email
                </span>
                <span className="font-sans text-sm text-stone-700">
                  hola@mariaximensantos.com
                </span>
              </div>
              <ArrowRight
                size={16}
                className="text-stone-300 group-hover:text-bronze-500 group-hover:translate-x-1 transition-all"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/maria-ximena-santos-arias-b3267112/?locale=en_US"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-6 bg-cream-50 border border-cream-300 hover:border-bronze-300 hover:bg-cream-100 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Linkedin size={20} className="text-blue-600" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <span className="font-sans text-xs tracking-[0.08em] uppercase text-stone-400">
                  LinkedIn
                </span>
                <span className="font-sans text-sm text-stone-700">
                  {t('linkedin_cta')}
                </span>
              </div>
              <ArrowRight
                size={16}
                className="text-stone-300 group-hover:text-bronze-500 group-hover:translate-x-1 transition-all"
              />
            </a>

            <p className="font-sans text-xs text-stone-400 leading-relaxed border-t border-cream-300 pt-6">
              {locale === 'es'
                ? 'Respondo personalmente. No hay asistentes virtuales de por medio. Generalmente escribo en 24 horas hábiles.'
                : 'I respond personally. No virtual assistants involved. I typically write back within 24 business hours.'}
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
