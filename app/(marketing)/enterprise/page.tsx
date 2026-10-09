import type { Metadata } from 'next';
import type * as React from 'react';
import Script from 'next/script';
import { Navigation, Footer } from '@/components/branding';
import { Card, Badge } from '@/components/ui';
import {
  Shield,
  Lock,
  Zap,
  Users,
  Globe,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Enterprise QA Platform | QA-PaaS by Quality Impact OÜ',
  description:
    'Enterprise-grade QA-PaaS for Fortune 500 and mission-critical applications. 99.99% uptime SLA, 24/7 premium support, ISO 27001, SOC2 Type II, and global multi-cloud infrastructure.',
  keywords: [
    'Enterprise QA',
    'Enterprise Testing',
    'QA-PaaS Enterprise',
    'Fortune 500 Testing',
    'Managed QA Platform',
    'SLA',
    'ISO 27001',
    'SOC2',
  ],
  openGraph: {
    title: 'Enterprise Quality Assurance Platform',
    description:
      'Purpose-built QA infrastructure for Fortune 500 and mission-critical applications.',
    url: 'https://www.qa-paas.com/enterprise',
    images: [
      {
        url: 'https://www.qa-paas.com/brand/og-enterprise.png',
        width: 1200,
        height: 630,
        alt: 'QA-PaaS Enterprise Platform',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.qa-paas.com/enterprise',
  },
};

interface EnterpriseFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const enterpriseFeatures: EnterpriseFeature[] = [
  {
    icon: <Shield className="h-8 w-8 text-cyan-accent" aria-hidden="true" />,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with industry-leading compliance certifications',
    features: [
      'ISO 27001 Certified',
      'SOC2 Type II Compliant',
      'GDPR Ready',
      'End-to-end Encryption',
      'Penetration Testing',
      'Regular Security Audits',
    ],
  },
  {
    icon: <Lock className="h-8 w-8 text-cyan-accent" aria-hidden="true" />,
    title: 'Data Privacy',
    description: 'Complete control over your test data with advanced privacy controls',
    features: [
      'Data Residency Options',
      'Anonymization Tools',
      'Audit Logging',
      'PII Detection',
      'Data Export Compliance',
      'HIPAA Compliant',
    ],
  },
  {
    icon: <Zap className="h-8 w-8 text-cyan-accent" aria-hidden="true" />,
    title: 'Performance',
    description: 'Industry-leading performance with 99.99% uptime SLA',
    features: [
      '99.99% Uptime SLA',
      'Sub-second Latency',
      'Auto-scaling Infrastructure',
      'Global CDN',
      'Load Balancing',
      'Redundancy',
    ],
  },
  {
    icon: <Users className="h-8 w-8 text-cyan-accent" aria-hidden="true" />,
    title: 'Team Collaboration',
    description: 'Advanced collaboration features for large distributed teams',
    features: [
      'Multi-tenant Workspace',
      'Role-based Access Control',
      'Team Permissions',
      'Audit Trail',
      'SSO/SAML',
      'API Access',
    ],
  },
  {
    icon: <Globe className="h-8 w-8 text-cyan-accent" aria-hidden="true" />,
    title: 'Global Infrastructure',
    description: 'Deploy across multiple regions with local compliance requirements',
    features: [
      'Multi-region Deployment',
      'Regional Compliance',
      'Local Data Centers',
      'DDoS Protection',
      'Geo-redundancy',
      'Disaster Recovery',
    ],
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-cyan-accent" aria-hidden="true" />,
    title: 'Analytics & Insights',
    description: 'Deep insights into test metrics and quality trends',
    features: [
      'Real-time Dashboards',
      'Custom Reports',
      'Trend Analysis',
      'Performance Metrics',
      'Historical Data',
      'Predictive Analytics',
    ],
  },
];

const supportOptions = [
  {
    level: 'Standard',
    response: '24 hours',
    availability: 'Business hours',
    featured: false,
    features: ['Email support', 'Documentation', 'Community forum', 'Monthly check-ins'],
  },
  {
    level: 'Professional',
    response: '4 hours',
    availability: '24/7',
    featured: false,
    features: [
      'Email & Phone support',
      'Dedicated account manager',
      'Weekly check-ins',
      'Custom reports',
      'Priority queue',
    ],
  },
  {
    level: 'Premium',
    response: '1 hour',
    availability: '24/7/365',
    featured: true,
    features: [
      'Phone & Chat support',
      'Dedicated success manager',
      'Weekly strategy sessions',
      'Custom integrations',
      'Dedicated infrastructure',
      'SLA guarantee',
    ],
  },
];

const KEY_STATS = [
  { metric: '99.99%', label: 'Uptime SLA' },
  { metric: '24/7/365', label: 'Premium Support' },
  { metric: '3 Clouds', label: 'AWS · Azure · GCP' },
];

export default function EnterprisePage() {
  const enterpriseSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Quality Impact OÜ - Enterprise QA-PaaS',
    description:
      'Enterprise-grade QA-PaaS platform with multi-tenant architecture and 99.99% uptime SLA',
    url: 'https://www.qa-paas.com/enterprise',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2847',
    },
  };

  return (
    <>
      <Script
        id="enterprise-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enterpriseSchema) }}
      />

      <Navigation />

      <main id="main-content" className="bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
        {/* Header */}
        <section className="relative overflow-hidden px-6 pt-20 pb-16 md:px-12 md:pt-32 md:pb-24">
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)] pointer-events-none" />
          <div className="absolute -top-24 right-[-8%] h-[360px] w-[360px] rounded-full bg-cyan-accent/10 blur-[110px] pointer-events-none" />
          <div className="container-max relative z-10">
            <div className="mx-auto max-w-4xl space-y-8 text-center">
              <Badge variant="info" size="lg" className="font-mono tracking-wide text-cyan-accent">
                ENTERPRISE SOLUTION
              </Badge>

              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight">
                <span className="text-slate-50">Enterprise</span>
                <br />
                <span className="gradient-text">Quality Assurance</span>
              </h1>

              <p className="mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-slate-400">
                Purpose-built for Fortune 500 companies and mission-critical applications.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/marketplaces#deploy"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-accent px-7 py-3.5 text-base font-bold text-navy-950 hover:bg-cyan-400 hover:shadow-glow-cyan-lg transition-all duration-200 focus-ring active:scale-[0.98]"
                >
                  Deploy Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="mailto:sales@qa-paas.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-cyan-accent/70 px-7 py-3.5 text-base font-semibold text-cyan-accent hover:border-cyan-400 hover:text-cyan-400 hover:shadow-glow-cyan transition-all duration-200 focus-ring active:scale-[0.98]"
                >
                  Contact Sales
                </a>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-3">
                {KEY_STATS.map((stat) => (
                  <Card key={stat.label} className="border-cyan-accent/20 bg-navy-800/50 p-6">
                    <div className="mb-2 text-3xl font-extrabold text-cyan-accent">
                      {stat.metric}
                    </div>
                    <p className="text-sm text-slate-400">{stat.label}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section
          className="section-padding-lg border-t border-slate-700/60"
          aria-labelledby="enterprise-features-heading"
        >
          <div className="container-max space-y-14">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2
                id="enterprise-features-heading"
                className="text-4xl md:text-5xl font-bold text-slate-100 text-balance"
              >
                Enterprise Features
              </h2>
              <p className="text-lg text-slate-400">
                Everything you need to manage quality assurance at enterprise scale.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {enterpriseFeatures.map((feature) => (
                <Card key={feature.title} hover className="space-y-5 border-slate-700/80 p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-accent/10 ring-1 ring-cyan-accent/20">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                  <ul className="space-y-2.5 border-t border-slate-700 pt-5">
                    {feature.features.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Plans */}
        <section
          className="section-padding-lg border-t border-slate-700/60 bg-navy-900/50"
          aria-labelledby="support-plans-heading"
        >
          <div className="container-max space-y-14">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2
                id="support-plans-heading"
                className="text-4xl md:text-5xl font-bold text-slate-100 text-balance"
              >
                Support Plans
              </h2>
              <p className="text-lg text-slate-400">
                Choose the support level that matches your team&apos;s needs.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {supportOptions.map((plan) => (
                <Card
                  key={plan.level}
                  className={`relative p-8 ${
                    plan.featured
                      ? 'border-cyan-accent/60 bg-gradient-to-b from-cyan-accent/15 to-transparent shadow-glow-cyan'
                      : 'border-slate-700/80 hover:border-cyan-accent/30'
                  }`}
                >
                  {plan.featured && (
                    <Badge
                      variant="success"
                      className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-xs"
                    >
                      MOST POPULAR
                    </Badge>
                  )}

                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-100">{plan.level}</h3>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-slate-400">Response Time</p>
                        <p className="text-xl font-bold text-cyan-accent">{plan.response}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Availability</p>
                        <p className="text-xl font-bold text-cyan-accent">{plan.availability}</p>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2.5 text-sm text-slate-300"
                        >
                          <CheckCircle2
                            className={`h-4 w-4 flex-shrink-0 ${
                              plan.featured ? 'text-emerald-400' : 'text-cyan-accent'
                            }`}
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/marketplaces"
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all duration-200 focus-ring active:scale-[0.98] ${
                        plan.featured
                          ? 'bg-cyan-accent text-navy-950 hover:bg-cyan-400 hover:shadow-glow-cyan-lg'
                          : 'border-2 border-cyan-accent/70 text-cyan-accent hover:border-cyan-400 hover:shadow-glow-cyan'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="section-padding-lg border-t border-slate-700/60"
          aria-labelledby="enterprise-cta-heading"
        >
          <div className="container-max">
            <div className="mx-auto max-w-3xl space-y-8 text-center">
              <div className="space-y-4">
                <h2
                  id="enterprise-cta-heading"
                  className="text-4xl md:text-5xl font-bold text-slate-100 text-balance"
                >
                  Ready to Transform QA?
                </h2>
                <p className="text-lg text-slate-400">
                  Talk to our enterprise team about how Quality Impact OÜ can accelerate your
                  quality assurance program.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/marketplaces#deploy"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-accent px-7 py-3.5 text-base font-bold text-navy-950 hover:bg-cyan-400 hover:shadow-glow-cyan-lg transition-all duration-200 focus-ring active:scale-[0.98]"
                >
                  Deploy Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="mailto:sales@qa-paas.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-cyan-accent/70 px-7 py-3.5 text-base font-semibold text-cyan-accent hover:border-cyan-400 hover:text-cyan-400 hover:shadow-glow-cyan transition-all duration-200 focus-ring active:scale-[0.98]"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
