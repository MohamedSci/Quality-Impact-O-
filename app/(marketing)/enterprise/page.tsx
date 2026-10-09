'use client';

import React from 'react';
import { Card, Badge, Button } from '@/components/ui';
import { Shield, Lock, Zap, Users, Globe, TrendingUp } from 'lucide-react';

interface EnterpriseFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface SupportOption {
  level: string;
  response: string;
  availability: string;
  features: string[];
}

const enterpriseFeatures: EnterpriseFeature[] = [
  {
    icon: <Shield className="w-8 h-8 text-cyan-accent" />,
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
    icon: <Lock className="w-8 h-8 text-cyan-accent" />,
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
    icon: <Zap className="w-8 h-8 text-cyan-accent" />,
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
    icon: <Users className="w-8 h-8 text-cyan-accent" />,
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
    icon: <Globe className="w-8 h-8 text-cyan-accent" />,
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
    icon: <TrendingUp className="w-8 h-8 text-cyan-accent" />,
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

const supportOptions: SupportOption[] = [
  {
    level: 'Standard',
    response: '24 hours',
    availability: 'Business hours',
    features: ['Email support', 'Documentation', 'Community forum', 'Monthly check-ins'],
  },
  {
    level: 'Professional',
    response: '4 hours',
    availability: '24/7',
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

export default function EnterprisePage(): React.ReactElement {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800">
      {/* Header Section */}
      <section className="relative w-full pt-32 pb-20 md:pb-32 px-6 md:px-12">
        <div className="container-max max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <Badge variant="info" size="lg" className="text-cyan-accent">
            ENTERPRISE SOLUTION
          </Badge>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-slate-100">Enterprise</span>
              <br />
              <span className="text-cyan-accent">Quality Assurance</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Purpose-built for Fortune 500 companies and mission-critical applications
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <Card className="bg-navy-800/50 border-cyan-accent/20 p-6">
              <div className="text-3xl font-bold text-cyan-accent mb-2">99.99%</div>
              <p className="text-slate-400">Uptime SLA</p>
            </Card>
            <Card className="bg-navy-800/50 border-cyan-accent/20 p-6">
              <div className="text-3xl font-bold text-cyan-accent mb-2">24/7/365</div>
              <p className="text-slate-400">Premium Support</p>
            </Card>
            <Card className="bg-navy-800/50 border-cyan-accent/20 p-6">
              <div className="text-3xl font-bold text-cyan-accent mb-2">Global</div>
              <p className="text-slate-400">Infrastructure</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-20 md:py-32 px-6 md:px-12 border-t border-slate-700">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
              Enterprise Features
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Everything you need to manage quality assurance at enterprise scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature) => (
              <Card
                key={feature.title}
                className="bg-navy-800/40 border-slate-700 hover:border-cyan-accent/30 p-8 transition-all duration-300 hover:shadow-glow-cyan"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">{feature.title}</h3>
                <p className="text-slate-400 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
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
      <section className="w-full py-20 md:py-32 px-6 md:px-12 bg-navy-900/50 border-t border-slate-700">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Support Plans</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Choose the support level that matches your team&apos;s needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((plan, index) => (
              <Card
                key={plan.level}
                className={`border p-8 transition-all duration-300 ${
                  index === 2
                    ? 'bg-gradient-to-br from-cyan-accent/20 to-transparent border-cyan-accent/50 shadow-glow-cyan'
                    : 'bg-navy-800/40 border-slate-700 hover:border-cyan-accent/30'
                }`}
              >
                <h3 className="text-2xl font-bold text-slate-100 mb-2">{plan.level}</h3>
                <div className="mb-6 space-y-2">
                  <div>
                    <p className="text-slate-400 text-sm">Response Time</p>
                    <p className="text-xl font-semibold text-cyan-accent">{plan.response}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Availability</p>
                    <p className="text-xl font-semibold text-cyan-accent">{plan.availability}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-slate-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={index === 2 ? 'solid' : 'ghost'}
                  size="sm"
                  className={
                    index === 2
                      ? 'w-full bg-cyan-accent hover:bg-cyan-500 text-white font-semibold'
                      : 'w-full border-2 border-cyan-accent text-cyan-accent hover:border-cyan-400'
                  }
                  onClick={() => (window.location.href = '/marketplaces')}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 px-6 md:px-12 border-t border-slate-700">
        <div className="container-max max-w-3xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
              Ready to Transform QA?
            </h2>
            <p className="text-lg text-slate-400">
              Talk to our enterprise team about how Quality Impact OÜ can accelerate your quality
              assurance program.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-center pt-4">
            <Button
              variant="solid"
              size="lg"
              className="bg-cyan-accent hover:bg-cyan-500 text-white hover:shadow-glow-cyan-lg font-semibold"
              onClick={() => (window.location.href = '/marketplaces')}
            >
              Deploy Now
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="border-2 border-cyan-accent text-cyan-accent hover:border-cyan-400 font-semibold"
              onClick={() => (window.location.href = 'mailto:sales@qa-paas.com')}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Quality Impact OÜ - Enterprise QA-PaaS',
            description:
              'Enterprise-grade QA-PaaS platform with multi-tenant architecture and 99.99% uptime SLA',
            url: 'https://qa-paas.com/enterprise',
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
          }),
        }}
      />
    </main>
  );
}
