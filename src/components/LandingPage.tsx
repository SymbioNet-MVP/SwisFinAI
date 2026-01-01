import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { baseUrl } from '../lib/base-url';
import {
  Check,
  ChevronDown,
  Shield,
  Lock,
  Building2,
  TrendingUp,
  FileText,
  BarChart3,
  Zap,
  Database,
  Globe,
  Clock,
  AlertCircle,
  Target,
  DollarSign,
  Calendar,
  Users,
  Star
} from 'lucide-react';

import type { Language } from '../locales/translations';

// (kept inline for now) Swiss FinTech SVG Icons (decorative: aria-hidden)
const SwissIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M12 8v8M8 12h8" />
  </svg>
);

const LockCheckIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    <path d="M9 15l2 2 4-4" />
  </svg>
);

const BankIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21h18" />
    <path d="M4 18h16" />
    <path d="M6 18V10M10 18V10M14 18V10M18 18V10" />
    <path d="M4 10l8-7 8 7" />
  </svg>
);

const ShieldCheckIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const GearIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6m5.2-15.8l-4.2 4.2m-4.2 4.2L4.6 15.8m15.8 0l-4.2-4.2m-4.2-4.2L7.8 3.4m15.8 9h-6m-6 0H1" />
  </svg>
);

const PriceTagIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <circle cx="7" cy="7" r="1" />
  </svg>
);

const PlayIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
  </svg>
);

const QuestionIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m0 4h.01" />
  </svg>
);

const PersonIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const EnvelopeIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);

const DocumentLockIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <rect x="10" y="12" width="4" height="4" rx="1" />
    <path d="M10 14v-1a2 2 0 1 1 4 0v1" />
  </svg>
);

const DocumentIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M10 13h4M10 17h4" />
  </svg>
);

const ParagraphIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2v20" />
    <path d="M17 2v20" />
    <path d="M8 9a5 5 0 1 0 0-7" />
  </svg>
);

const BriefcaseIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

// Flag Icons
const FlagDE = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="24" height="8" fill="#000" />
    <rect y="8" width="24" height="8" fill="#D00" />
    <rect y="16" width="24" height="8" fill="#FFCE00" />
  </svg>
);

const FlagFR = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="8" height="24" fill="#002395" />
    <rect x="8" width="8" height="24" fill="#FFF" />
    <rect x="16" width="8" height="24" fill="#ED2939" />
  </svg>
);

const FlagIT = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect width="8" height="24" fill="#009246" />
    <rect x="8" width="8" height="24" fill="#FFF" />
    <rect x="16" width="8" height="24" fill="#CE2B37" />
  </svg>
);

const FlagEN = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

import { translations } from '../locales/translations';

export default function LandingPage() {
  const [language, setLanguage] = useState<Language>('de');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') setScrolled(window.scrollY > 20);
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // Load saved language (client-only) and prefer path-based locale if present
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('sfa_lang') as Language | null;
    const pathLang = window.location.pathname.split('/')[1] as Language | '';
    const allowed: Language[] = ['de', 'en', 'fr', 'it'];
    if (saved && allowed.includes(saved)) {
      setLanguage(saved);
    } else if (allowed.includes(pathLang as Language)) {
      setLanguage(pathLang as Language);
      localStorage.setItem('sfa_lang', pathLang);
    }
  }, []);

  const handleLanguageChange = (lang: Language, path = '/', e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('sfa_lang', lang);
        const newPath = `${baseUrl}${path}`;
        // update the visible path without a full reload
        window.history.replaceState({}, '', newPath);
      } catch (err) {
        // noop
      }
    }
  };

  const scrollToSection = (id: string) => {
    if (typeof document === 'undefined') return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Move focus to the section for accessibility
      element.setAttribute('tabindex', '-1');
      (element as HTMLElement).focus();
    }
  };

  const problemIcons = [Clock, AlertCircle, Target, DollarSign];
  const benefitIcons = [Clock, TrendingUp, Calendar, Building2];

  return (
    <div className="min-h-screen bg-white" lang={language} style={{ '--primary': '#0A4DFF', '--text': '#0F1C2E', '--accent': '#F5F7FA' } as React.CSSProperties}>
      <style>{`
        .primary-blue { background-color: #0A4DFF; }
        .text-primary-blue { color: #0A4DFF; }
        .border-primary-blue { border-color: #0A4DFF; }
        .hover-primary-blue:hover { background-color: #0842CC; }
        .bg-accent { background-color: #F5F7FA; }
        .bg-footer { background-color: #F5F7FA; }
        .text-navy { color: #0F1C2E; }
        
        .fade-in {
          animation: fadeIn 0.6s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(10, 77, 255, 0.15);
        }
        
        .gradient-mesh {
          background: 
            radial-gradient(at 0% 0%, rgba(10, 77, 255, 0.05) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(10, 77, 255, 0.08) 0px, transparent 50%);
        }
        
        .footer-link {
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .footer-link:hover {
          color: #0A4DFF;
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        
        .lang-btn {
          transition: all 0.2s ease;
          font-weight: 600;
        }
        
        .lang-btn:hover:not(.active) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(10, 77, 255, 0.15);
        }
      `}</style>

      {/* Sticky Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href={baseUrl} className="flex items-center space-x-3">
              <div className="w-10 h-10 primary-blue rounded-xl flex items-center justify-center shadow-sm" aria-hidden="true">
                <BarChart3 className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-navy">Swiss Finance AI</span>
            </a>

            <div className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-gray-600 hover:text-navy transition-colors">
                {t.nav.features}
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-gray-600 hover:text-navy transition-colors">
                {t.nav.pricing}
              </button>
              <button onClick={() => scrollToSection('demo')} className="text-sm font-medium text-gray-600 hover:text-navy transition-colors">
                {t.nav.demo}
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-sm font-medium text-gray-600 hover:text-navy transition-colors">
                {t.nav.testimonials}
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-sm font-medium text-gray-600 hover:text-navy transition-colors">
                {t.nav.faq}
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-1 bg-accent rounded-xl p-1.5">
                {(['de', 'fr', 'it', 'en'] as Language[]).map((lang) => (
                  <a
                    key={lang}
                    href={`${baseUrl}/${lang === 'de' ? '' : lang}`}
                    onClick={(e) => handleLanguageChange(lang, lang === 'de' ? '/' : `/${lang}`, e)}
                    aria-pressed={language === lang}
                    aria-current={language === lang ? 'true' : undefined}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                      language === lang
                        ? 'primary-blue text-white shadow-sm'
                        : 'text-gray-600 hover:text-navy'
                    }`}
                  >
                    {lang}
                  </a>
                ))}
              </div>

              <Button className="primary-blue hover-primary-blue text-white font-semibold shadow-md px-6 h-11 rounded-xl" asChild>
                <a href={`${baseUrl}/signup`}>
                  {t.nav.cta}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-8 gradient-mesh">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16 fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-6 leading-[1.1] tracking-tight">
              {t.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              {t.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="primary-blue hover-primary-blue text-white font-semibold shadow-lg px-10 py-7 text-lg rounded-xl h-auto" asChild>
                <a href={`${baseUrl}/signup`}>
                  {t.hero.primaryCta}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-gray-400 font-semibold px-10 py-7 text-lg rounded-xl h-auto" asChild>
                <a href={`${baseUrl}/demo`}>
                  {t.hero.secondaryCta}
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-600">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-blue" strokeWidth={2} aria-hidden="true" />
                </div>
                <span>{t.hero.badges.swissHosted}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-primary-blue" strokeWidth={2} aria-hidden="true" />
                </div>
                <span>{t.hero.badges.gdpr}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary-blue" strokeWidth={2} aria-hidden="true" />
                </div>
                <span>{t.hero.badges.secure}</span>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto fade-in">
            <div className="rounded-2xl shadow-2xl bg-white border border-gray-200 p-4 sm:p-6">
              <div className="rounded-xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 aspect-[16/10] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-gray-900/5" />
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 primary-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" aria-hidden="true">
                    <BarChart3 className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                  <p className="text-gray-500 font-medium">Professional Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 lg:px-8 bg-accent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              {t.problem.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {t.problem.points.map((point: string, index: number) => {
              const Icon = problemIcons[index];
              return (
                <Card key={index} className="border-2 border-gray-200 hover:border-red-200 bg-white card-hover rounded-2xl" role="article" aria-label={point}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-red-500" strokeWidth={2} aria-hidden="true" />
                      </div>
                      <p className="text-gray-700 leading-relaxed pt-2">{point}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution/Features Section */}
      <section id="features" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              {t.solution.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.solution.features.map((feature: any, index: number) => {
              const icons = [FileText, Zap, TrendingUp, BarChart3, Database, Building2];
              const Icon = icons[index];

              return (
                <Card key={index} className="border border-gray-200 bg-white card-hover rounded-2xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 primary-blue rounded-xl flex items-center justify-center mb-5 shadow-sm" aria-hidden="true">
                      <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-24 px-6 lg:px-8 bg-accent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              {t.demo.headline}
            </h2>
            <p className="text-xl text-gray-600">
              {t.demo.subheadline}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl shadow-2xl bg-white border border-gray-200 p-4 sm:p-6">
              <div className="rounded-xl bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 aspect-[16/9] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-gray-900/5" />
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl" aria-hidden="true">
                    <Globe className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                  <p className="text-gray-500 font-medium">Interactive Dashboard Demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              {t.benefits.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t.benefits.items.map((item: any, index: number) => {
              const Icon = benefitIcons[index];
              return (
                <Card key={index} className="border-2 border-blue-100 bg-blue-50/30 card-hover rounded-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 primary-blue rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm" aria-hidden="true">
                        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 lg:px-8 bg-accent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              {t.pricing.headline}
            </h2>
            <p className="text-xl text-gray-600">
              {t.pricing.subheadline}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.pricing.plans.map((plan: any, index: number) => (
              <Card 
                key={index} 
                className={`relative border-2 card-hover rounded-2xl ${
                  plan.popular 
                    ? 'border-primary-blue shadow-xl scale-105 bg-white' 
                    : 'border-gray-200 bg-white'
                }`}
                role="region"
                aria-label={plan.name}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <span className="primary-blue text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                      {t.pricing.popular}
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-navy mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6 min-h-[48px] leading-relaxed">
                    {plan.description}
                  </p>
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-semibold text-gray-600">
                        {t.pricing.currency}
                      </span>
                      <span className="text-5xl font-bold text-navy">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 font-medium">
                        {t.pricing.perMonth}
                      </span>
                    </div>
                  </div>
                  <Button 
                    className={`w-full mb-8 font-semibold rounded-xl h-12 ${
                      plan.popular 
                        ? 'primary-blue hover-primary-blue text-white shadow-md' 
                        : 'bg-navy hover:bg-gray-800 text-white'
                    }`}
                    asChild
                  >
                    <a href={`${baseUrl}/signup?plan=${plan.name.toLowerCase()}`}>
                      {t.pricing.cta}
                    </a>
                  </Button>
                  <ul className="space-y-4">
                    {plan.features.map((feature: string, fIndex: number) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 primary-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" strokeWidth={3} aria-hidden="true" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              {t.testimonials.headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial: any, index: number) => (
              <Card key={index} className="border border-gray-200 card-hover rounded-2xl bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 primary-blue rounded-full flex items-center justify-center font-bold text-white" aria-hidden="true">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-navy">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 lg:px-8 bg-accent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              {t.faq.headline}
            </h2>
          </div>

          <div className="space-y-4">
            {t.faq.items.map((item: any, index: number) => (
              <Card key={index} className="border border-gray-200 rounded-2xl bg-white overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-content-${index}`}
                    id={`faq-button-${index}`}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-bold text-navy pr-8">
                      {item.question}
                    </span>
                    <ChevronDown 
                      className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </button>
                  {openFaq === index && (
                    <div id={`faq-content-${index}`} role="region" aria-labelledby={`faq-button-${index}`} className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                      {item.answer}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 lg:px-8 primary-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t.finalCta.headline}
          </h2>
          <p className="text-xl mb-10 text-blue-100 leading-relaxed">
            {t.finalCta.subheadline}
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary-blue hover:bg-gray-50 font-bold shadow-2xl px-10 py-7 text-lg rounded-xl h-auto"
            asChild
          >
            <a href={`${baseUrl}/signup`}>
              {t.finalCta.cta}
            </a>
          </Button>
        </div>
      </section>

      {/* Premium Footer with SVG Icons */}
      <footer className="bg-footer py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Top Section - 4 Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
            {/* Product Column */}
            <div>
              <h3 className="text-navy font-bold mb-6 text-sm uppercase tracking-wider">
                {t.footer.product.title}
              </h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <button onClick={() => scrollToSection('features')} className="text-gray-700 footer-link">
                    <GearIcon className="w-4 h-4 opacity-60" />
                    {t.footer.product.features}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('pricing')} className="text-gray-700 footer-link">
                    <PriceTagIcon className="w-4 h-4 opacity-60" />
                    {t.footer.product.pricing}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('demo')} className="text-gray-700 footer-link">
                    <PlayIcon className="w-4 h-4 opacity-60" />
                    {t.footer.product.demo}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('faq')} className="text-gray-700 footer-link">
                    <QuestionIcon className="w-4 h-4 opacity-60" />
                    {t.footer.product.faq}
                  </button>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-navy font-bold mb-6 text-sm uppercase tracking-wider">
                {t.footer.company.title}
              </h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href={`${baseUrl}/about`} className="text-gray-700 footer-link">
                    <PersonIcon className="w-4 h-4 opacity-60" />
                    {t.footer.company.about}
                  </a>
                </li>
                <li>
                  <a href={`${baseUrl}/contact`} className="text-gray-700 footer-link">
                    <EnvelopeIcon className="w-4 h-4 opacity-60" />
                    {t.footer.company.contact}
                  </a>
                </li>
                <li>
                  <a href={`${baseUrl}/careers`} className="text-gray-700 footer-link">
                    <BriefcaseIcon className="w-4 h-4 opacity-60" />
                    {t.footer.company.careers}
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-navy font-bold mb-6 text-sm uppercase tracking-wider">
                {t.footer.legal.title}
              </h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href={`${baseUrl}/privacy`} className="text-gray-700 footer-link">
                    <DocumentLockIcon className="w-4 h-4 opacity-60" />
                    {t.footer.legal.privacy}
                  </a>
                </li>
                <li>
                  <a href={`${baseUrl}/terms`} className="text-gray-700 footer-link">
                    <DocumentIcon className="w-4 h-4 opacity-60" />
                    {t.footer.legal.terms}
                  </a>
                </li>
                <li>
                  <a href={`${baseUrl}/imprint`} className="text-gray-700 footer-link">
                    <ParagraphIcon className="w-4 h-4 opacity-60" />
                    {t.footer.legal.imprint}
                  </a>
                </li>
              </ul>
            </div>

            {/* Language Switcher Column */}
            <div>
              <h3 className="text-navy font-bold mb-6 text-sm uppercase tracking-wider">
                {t.footer.language}
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { lang: 'de' as Language, Flag: FlagDE, label: 'Deutsch', path: '' },
                  { lang: 'fr' as Language, Flag: FlagFR, label: 'Français', path: '/fr' },
                  { lang: 'it' as Language, Flag: FlagIT, label: 'Italiano', path: '/it' },
                  { lang: 'en' as Language, Flag: FlagEN, label: 'English', path: '/en' }
                ].map(({ lang, Flag, label, path }) => (
                  <a
                    key={lang}
                    href={`${baseUrl}${path}`}
                    onClick={(e) => handleLanguageChange(lang, path || '/', e)}
                    aria-pressed={language === lang}
                    aria-current={language === lang ? 'true' : undefined}
                    className={`lang-btn flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all ${
                      language === lang
                        ? 'primary-blue text-white shadow-md active'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <Flag className="w-5 h-5 flex-shrink-0" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Badges Section */}
          <div className="border-t border-gray-200 pt-16 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-200">
                  <SwissIcon className="w-8 h-8 text-primary-blue" />
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {t.footer.trustBadges.swissHosted}
                </span>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-200">
                  <LockCheckIcon className="w-8 h-8 text-primary-blue" />
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {t.footer.trustBadges.gdpr}
                </span>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-200">
                  <ShieldCheckIcon className="w-8 h-8 text-primary-blue" />
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {t.footer.trustBadges.finma}
                </span>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-200">
                  <BankIcon className="w-8 h-8 text-primary-blue" />
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {t.footer.trustBadges.secure}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="border-t border-gray-200 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
              <p className="font-medium">{t.footer.copyright}</p>
              <div className="flex items-center gap-4">
                <span className="font-medium">{t.footer.madeIn}</span>
                <span className="text-gray-400">|</span>
                <span className="font-medium">{t.footer.poweredBy}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
