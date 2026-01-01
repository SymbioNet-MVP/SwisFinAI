import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { baseUrl } from '../lib/base-url';
import { translations, Language } from '../locales/translations';
import { BarChart3, Shield, Lock, Building2, Check, ChevronDown, Globe, Star } from 'lucide-react';

export default function LandingPageNew() {
  const [language, setLanguage] = useState<Language>('en');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[language];

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('sfa_lang') as Language | null;
    const pathLang = window.location.pathname.split('/')[1] as Language | '';
    const allowed: Language[] = ['de', 'en', 'fr', 'it'];
    if (saved && allowed.includes(saved)) setLanguage(saved);
    else if (allowed.includes(pathLang as Language)) {
      setLanguage(pathLang as Language);
      localStorage.setItem('sfa_lang', pathLang);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLanguageChange = (lang: Language, path = '/') => (e?: React.MouseEvent) => {
    e?.preventDefault();
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sfa_lang', lang);
      try {
        window.history.replaceState({}, '', `${baseUrl}${path}`);
      } catch {}
    }
  };

  const scrollTo = (id: string) => {
    if (typeof document === 'undefined') return;
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    el.setAttribute('tabindex', '-1');
    (el as HTMLElement).focus();
  };

  return (
    <div lang={language} className="min-h-screen bg-white">
      <nav className={`fixed top-0 w-full z-40 transition ${scrolled ? 'shadow-sm' : ''}`}>
        <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
          <a href={baseUrl} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white" aria-hidden>
              <BarChart3 className="w-6 h-6" />
            </div>
            <strong className="text-lg">Swiss Finance AI</strong>
          </a>

          <div className="flex items-center gap-4">
            {[{ lang: 'de', label: 'DE' }, { lang: 'fr', label: 'FR' }, { lang: 'it', label: 'IT' }, { lang: 'en', label: 'EN' }].map(({ lang, label }) => (
              <a
                key={lang}
                href={`${baseUrl}/${lang === 'de' ? '' : lang}`}
                onClick={handleLanguageChange(lang as Language, lang === 'de' ? '/' : `/${lang}`)}
                className={`px-3 py-1 rounded ${language === (lang as Language) ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                aria-pressed={language === (lang as Language)}
              >
                {label}
              </a>
            ))}

            <Button asChild>
              <a className="bg-blue-600 text-white px-4 py-2 rounded" href={`${baseUrl}/signup`}>{t.nav.cta}</a>
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl font-bold mb-4">{t.hero.headline}</h1>
            <p className="text-lg text-gray-700 mb-6">{t.hero.subheadline}</p>

            <div className="flex gap-3 justify-center">
              <Button asChild>
                <a className="bg-blue-600 text-white px-6 py-3 rounded-md" href={`${baseUrl}/signup`}>{t.hero.primaryCta}</a>
              </Button>
              <Button asChild>
                <a className="border border-gray-300 px-6 py-3 rounded-md" href={`${baseUrl}/demo`}>{t.hero.secondaryCta}</a>
              </Button>
            </div>

            <div className="mt-6 flex gap-4 justify-center text-sm text-gray-600">
              <span className="flex items-center gap-2"><Shield className="w-4 h-4" />{t.hero.badges.swissHosted}</span>
              <span className="flex items-center gap-2"><Lock className="w-4 h-4" />{t.hero.badges.gdpr}</span>
              <span className="flex items-center gap-2"><Building2 className="w-4 h-4" />{t.hero.badges.secure}</span>
            </div>
          </div>
        </section>

        <section id="features" className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">{t.solution.headline}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {t.solution.features.map((f: any, i: number) => (
                <Card key={i} className="p-4 border rounded">
                  <CardContent>
                    <div className="w-12 h-12 bg-blue-600 text-white rounded flex items-center justify-center mb-3">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="text-gray-600 text-sm">{f.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">{t.pricing.headline}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {t.pricing.plans.map((plan: any, i: number) => (
                <Card key={i} className="p-6 border rounded">
                  <CardContent>
                    {plan.popular && <div className="bg-blue-600 text-white inline px-3 py-1 rounded mb-3">{t.pricing.popular}</div>}
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <div className="text-2xl font-bold">{t.pricing.currency} {plan.price} <span className="text-sm">{t.pricing.perMonth}</span></div>
                    </div>
                    <Button asChild>
                      <a className={`w-full inline-block text-center px-4 py-2 rounded ${plan.popular ? 'bg-blue-600 text-white' : 'bg-gray-800 text-white'}`} href={`${baseUrl}/signup`}>{t.pricing.cta}</a>
                    </Button>
                    <ul className="mt-4 space-y-2">
                      {plan.features.map((feat: string, j: number) => (
                        <li key={j} className="flex items-start gap-2"><div className="text-blue-600 mt-1"><Check className="w-4 h-4" /></div><span className="text-sm text-gray-700">{feat}</span></li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">{t.faq.headline}</h2>
            <div className="space-y-4">
              {t.faq.items.map((q: any, idx: number) => (
                <div key={idx} className="border rounded">
                  <button
                    id={`faq-button-${idx}`}
                    aria-expanded={openFaq === idx}
                    aria-controls={`faq-content-${idx}`}
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-4 py-3 flex items-center justify-between"
                  >
                    <strong>{q.question}</strong>
                    <ChevronDown className={`${openFaq === idx ? 'rotate-180' : ''} w-5 h-5`} />
                  </button>
                  {openFaq === idx && (
                    <div id={`faq-content-${idx}`} role="region" aria-labelledby={`faq-button-${idx}`} className="px-4 py-3 text-gray-700">
                      {q.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-gray-100 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">{t.footer.copyright}</div>
          <div className="text-sm text-gray-600">{t.footer.madeIn} | {t.footer.poweredBy}</div>
        </div>
      </footer>
    </div>
  );
}
