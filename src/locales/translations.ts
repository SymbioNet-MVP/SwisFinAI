export type Language = 'en' | 'de' | 'fr' | 'it';

const en = {
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      demo: 'Demo',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      cta: 'Start Free Trial'
    },
    hero: {
      headline: 'Automate Your Accounting With Swiss‑Grade AI',
      subheadline: 'Save time, reduce costs, and get real-time financial clarity — built for Swiss SMEs.',
      primaryCta: 'Start Free Trial',
      secondaryCta: 'See How It Works',
      badges: {
        swissHosted: 'Swiss-hosted',
        gdpr: 'GDPR compliant',
        secure: 'Secure bank integrations'
      }
    },
    problem: {
      headline: "Accounting should not slow your business down",
      points: [
        'Spending hours on manual bookkeeping every week',
        'Missing important tax deadlines and facing penalties',
        'No clear view of your actual financial position',
        'Paying high fees for basic accounting tasks'
      ]
    },
    solution: {
      headline: 'Everything your accountant does — now automated',
      features: [
        {
          title: 'AI Bookkeeping',
          description: 'Automatically categorize transactions with 99% accuracy'
        },
        {
          title: 'Smart Invoicing',
          description: 'Generate and send invoices in seconds with QR-bills'
        },
        {
          title: 'Cashflow Forecasting',
          description: 'Predict your financial future with AI-powered insights'
        },
        {
          title: 'VAT Automation',
          description: 'Swiss VAT calculations and submissions made easy'
        },
        {
          title: 'Real-time Dashboard',
          description: 'See your finances clearly, anytime, anywhere'
        },
        {
          title: 'Swiss Bank Integrations',
          description: 'Connect all major Swiss banks securely'
        }
      ]
    },
    demo: {
      headline: 'See your finances in real time',
      subheadline: 'A dashboard that actually makes sense'
    },
    benefits: {
      headline: 'Why Swiss SMEs love it',
      items: [
        {
          title: 'Save 10+ hours per week',
          description: 'Automate repetitive tasks and focus on growing your business'
        },
        {
          title: 'Reduce accounting costs by 70%',
          description: 'Handle basic bookkeeping in-house with confidence'
        },
        {
          title: 'Never miss a deadline',
          description: 'Automatic reminders for VAT, taxes, and payments'
        },
        {
          title: 'Built for Switzerland',
          description: 'Swiss VAT, QR-bills, and local banking standards'
        }
      ]
    },
    pricing: {
      headline: 'Simple, transparent pricing',
      subheadline: 'No hidden fees. Cancel anytime.',
      currency: 'CHF',
      perMonth: '/mo',
      plans: [
        {
          name: 'Starter',
          price: '29',
          description: 'Perfect for freelancers and micro-businesses',
          features: [
            'Up to 50 transactions/month',
            'Basic bookkeeping',
            'Invoice generation',
            'Email support'
          ]
        },
        {
          name: 'Business',
          price: '79',
          description: 'For growing SMEs',
          features: [
            'Up to 500 transactions/month',
            'Advanced bookkeeping',
            'VAT automation',
            'Cashflow forecasting',
            'Priority support',
            'Bank integrations'
          ],
          popular: true
        },
        {
          name: 'Pro',
          price: '149',
          description: 'For established businesses',
          features: [
            'Unlimited transactions',
            'Full automation suite',
            'Multi-user access',
            'API access',
            'Dedicated account manager',
            'Custom integrations'
          ]
        }
      ],
      cta: 'Start Free Trial',
      popular: 'Most Popular'
    },
    testimonials: {
      headline: 'Trusted by Swiss entrepreneurs',
      items: [
        {
          quote: 'This platform cut our accounting time in half. The Swiss bank integration is seamless.',
          author: 'Sarah M.',
          role: 'Founder, Design Studio Zürich'
        },
        {
          quote: 'Finally, a tool that understands Swiss VAT. No more stress during quarterly submissions.',
          author: 'Thomas K.',
          role: 'CEO, Tech Startup Basel'
        },
        {
          quote: 'The AI bookkeeping is incredibly accurate. It is like having a full-time accountant.',
          author: 'Maria L.',
          role: 'Owner, Boutique Hotel Luzern'
        }
      ]
    },
    faq: {
      headline: 'Frequently Asked Questions',
      items: [
        {
          question: 'Is my financial data secure?',
          answer: 'Yes. All data is encrypted and stored on Swiss servers. We are GDPR and FINMA compliant, with bank-level security.'
        },
        {
          question: 'Which Swiss banks can I connect?',
          answer: 'We support all major Swiss banks including UBS, Credit Suisse, PostFinance, Raiffeisen, and ZKB through secure eBill and API integrations.'
        },
        {
          question: 'Can I still work with my Treuhänder?',
          answer: 'Absolutely. You can invite your Treuhänder to access your account or export data in their preferred format.'
        },
        {
          question: 'How does VAT automation work?',
          answer: 'Our AI automatically categorizes transactions by VAT rate and generates compliant VAT reports for Swiss Federal Tax Administration.'
        }
      ]
    },
    finalCta: {
      headline: 'Ready to automate your accounting?',
      subheadline: 'Join hundreds of Swiss SMEs saving time and money',
      cta: 'Get Started — Free for 14 days'
    },
    footer: {
      product: {
        title: 'Product',
        features: 'Features',
        pricing: 'Pricing',
        demo: 'Demo',
        faq: 'FAQ'
      },
      company: {
        title: 'Company',
        about: 'About Us',
        contact: 'Contact',
        careers: 'Careers'
      },
      legal: {
        title: 'Legal',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        imprint: 'Imprint'
      },
      language: 'Language',
      trustBadges: {
        swissHosted: 'Swiss-hosted',
        gdpr: 'GDPR Compliant',
        finma: 'FINMA-ready',
        secure: 'Secure Bank Integration'
      },
      copyright: '© 2026 Swiss Finance AI. All rights reserved.',
      madeIn: 'Made in Switzerland 🇨🇭',
      poweredBy: 'Powered by AI'
    },
};

export const translations = { en, de: en, fr: en, it: en } as const;