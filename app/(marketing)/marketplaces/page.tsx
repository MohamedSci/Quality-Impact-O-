import type { Metadata } from 'next';
import type * as React from 'react';
import Script from 'next/script';
import { Navigation, Footer } from '@/components/branding';
import {
  MarketplaceHero,
  RunnerCalculator,
  FaqAccordion,
  CloudProviderIcon,
  type CloudProvider,
} from '@/components/marketplace';
import { Card, Badge, Alert } from '@/components/ui';
import {
  CheckCircle2,
  Lock,
  Zap,
  CreditCard,
  Settings,
  Play,
  BarChart3,
  Shield,
  Gauge,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Users,
  Cpu,
  CloudOff,
  Globe2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cloud Marketplace Procurement | QA-PaaS by Quality Impact OÜ',
  description:
    'Subscribe and deploy QA-PaaS directly through AWS Marketplace, Azure DevOps Marketplace, or Google Cloud. Unified billing with ISO 27001 compliance. Enterprise SLA included.',
  keywords: [
    'Cloud Marketplace',
    'AWS Marketplace',
    'Azure DevOps',
    'Google Cloud',
    'SaaS Procurement',
    'Enterprise Billing',
    'Cloud Integration',
  ],
  openGraph: {
    title: 'Cloud Marketplace Procurement Gateway',
    description: 'Deploy QA-PaaS through AWS, Azure DevOps, or Google Cloud with unified billing.',
    url: 'https://www.qa-paas.com/marketplaces',
    images: [
      {
        url: 'https://www.qa-paas.com/brand/og-marketplace.png',
        width: 1200,
        height: 630,
        alt: 'QA-PaaS Marketplace Deployment',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.qa-paas.com/marketplaces',
  },
};

const PROCUREMENT_STEPS = [
  {
    icon: CheckCircle2,
    title: 'Select Marketplace',
    description: 'Choose AWS, Azure DevOps, or Google Cloud based on your enterprise agreement.',
    details: 'Review available offerings and pricing tiers for your organization.',
  },
  {
    icon: CreditCard,
    title: 'Authorize & Subscribe',
    description: 'Review billing terms and authorize the integration with your cloud account.',
    details: 'Automatic billing consolidation with your existing cloud invoice.',
  },
  {
    icon: Lock,
    title: 'Configure Access',
    description: 'Set up IAM roles, service principals, or API keys for your cloud platform.',
    details: 'Security policies enforced; zero exposure to customer test data.',
  },
  {
    icon: Zap,
    title: 'Deploy & Execute',
    description:
      'Launch your first test job and monitor execution through live telemetry dashboards.',
    details: 'Support team available 24/7 for any integration issues.',
  },
];

const COMPLIANCE_BADGES = [
  {
    icon: Shield,
    label: 'ISO/IEC 27001:2022',
    description: 'Information Security Management System certified',
    badge: 'Security',
  },
  {
    icon: CheckCircle2,
    label: 'SOC2 Type II',
    description: 'Security, Availability, Confidentiality & Privacy audited',
    badge: 'Audit',
  },
  {
    icon: Globe2,
    label: 'GDPR Compliant',
    description: 'EU Data Protection Regulation fully implemented',
    badge: 'Privacy',
  },
  {
    icon: Cpu,
    label: 'Cloud Native',
    description: 'CNCF-certified architecture and deployment patterns',
    badge: 'Tech',
  },
];

const CLOUD_FEATURES: Array<{
  provider: CloudProvider;
  name: string;
  href: string;
  description: string;
  features: Array<{ icon: React.ComponentType<{ className?: string }>; text: string }>;
  pricing: string;
  sla: string;
}> = [
  {
    provider: 'aws',
    name: 'AWS Marketplace',
    href: 'https://aws.amazon.com/marketplace/pp/prodview-qapaas',
    description: 'Deploy QA-PaaS via AWS Batch or Fargate compute engines.',
    features: [
      { icon: CloudOff, text: 'Auto-scaling VPC deployment' },
      { icon: Lock, text: 'IAM role-based access control' },
      { icon: BarChart3, text: 'CloudWatch metrics integration' },
      { icon: Code2, text: 'Lambda function triggers' },
    ],
    pricing: 'Usage-based or Enterprise agreement',
    sla: '99.99% SLA',
  },
  {
    provider: 'azure',
    name: 'Azure DevOps',
    href: 'https://marketplace.visualstudio.com/items?itemName=qualityimpact.qa-paas',
    description: 'Native Azure Pipelines task with Service Connection support.',
    features: [
      { icon: Users, text: 'Multi-organization support' },
      { icon: Settings, text: 'Service Connection native' },
      { icon: Gauge, text: 'RBAC full integration' },
      { icon: BarChart3, text: 'Build analytics' },
    ],
    pricing: 'Per-pipeline or Enterprise licensing',
    sla: '99.95% SLA',
  },
  {
    provider: 'gcp',
    name: 'Google Cloud',
    href: 'https://console.cloud.google.com/marketplace/product/qualityimpact/qa-paas',
    description: 'Containerized execution via Google Cloud Run and GKE.',
    features: [
      { icon: Cpu, text: 'Cloud Run serverless' },
      { icon: Shield, text: 'GKE container orchestration' },
      { icon: Lock, text: 'Cloud IAM policies' },
      { icon: Code2, text: 'Pub/Sub event streaming' },
    ],
    pricing: 'Compute-based or Enterprise plan',
    sla: '99.99% SLA',
  },
];

const VENDOR_BENEFITS = [
  {
    benefit: 'Unified Procurement',
    description: 'Consolidated billing through existing cloud agreements',
  },
  {
    benefit: 'No Additional Setup',
    description: 'Deploy in minutes, not weeks or months',
  },
  {
    benefit: 'Enterprise Support',
    description: '24/7 dedicated support with SLA guarantees',
  },
  {
    benefit: 'Compliance Ready',
    description: 'All certifications (ISO, SOC2, GDPR) pre-verified',
  },
  {
    benefit: 'Volume Discounts',
    description: 'Enterprise pricing available for large deployments',
  },
  {
    benefit: 'Zero Migration Risk',
    description: 'Rollback-compatible deployment process',
  },
];

const FAQ_ITEMS = [
  {
    q: 'How long does deployment take?',
    a: 'Most deployments are operational within 15-30 minutes from marketplace subscription. Our guided setup provisions runners, configures IAM, and runs a smoke test automatically.',
  },
  {
    q: 'What if I use multiple cloud providers?',
    a: 'QA-PaaS supports concurrent deployments across AWS, Azure, and GCP with unified monitoring and a single control plane, so you can route tests to the best region or provider per run.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes, cloud marketplaces typically offer trial periods. Check your platform listing for current promotional terms and included usage credits.',
  },
  {
    q: 'Can I upgrade or downgrade my plan?',
    a: 'Plans are flexible and can be adjusted anytime through your marketplace console. Enterprise agreements support reserved capacity and volume discounts.',
  },
  {
    q: 'What support is included?',
    a: 'Enterprise support with 24/7 availability, SLA guarantees, and a dedicated support team. Premium plans add a named success manager and weekly strategy sessions.',
  },
  {
    q: 'How is my test data protected?',
    a: 'End-to-end encryption, ISO 27001 certification, and zero-knowledge architecture protect all data. You control data residency across AWS, Azure, and GCP regions.',
  },
];

export default function MarketplacesPage() {
  const marketplaceSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'QA-PaaS Cloud Marketplace Procurement',
    description: 'Deploy QA-PaaS through AWS, Azure, and Google Cloud',
    url: 'https://www.qa-paas.com/marketplaces',
  };

  return (
    <>
      <Script
        id="marketplace-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(marketplaceSchema),
        }}
      />

      <Navigation />

      <main id="main-content">
        {/* Marketplace Hero */}
        <MarketplaceHero />

        {/* Quick Start Alert */}
        <section className="section-padding border-y border-cyan-accent/20 bg-cyan-accent/5">
          <div className="container-max">
            <Alert variant="info" className="border-cyan-accent/30 bg-cyan-accent/10">
              <Zap className="h-4 w-4 text-cyan-accent" />
              <div className="ml-2 flex-1">
                <p className="mb-1 font-semibold text-cyan-accent">Ready to Get Started?</p>
                <p className="text-sm text-slate-300">
                  Click on any marketplace below to view pricing, initiate your subscription, and
                  begin deploying QA-PaaS in minutes.
                </p>
              </div>
            </Alert>
          </div>
        </section>

        {/* Procurement Steps */}
        <section className="section-padding-lg bg-slate-900">
          <div className="container-max space-y-14">
            <div className="mx-auto max-w-3xl space-y-5 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-accent/20 bg-cyan-accent/10 px-4 py-1.5">
                <Play className="h-4 w-4 text-cyan-accent" />
                <span className="text-sm font-semibold text-cyan-accent">4-Step Setup</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100 text-balance">
                Simple 4-Step Procurement Journey
              </h2>
              <p className="text-lg text-slate-400">
                Get QA-PaaS operational in minutes through your preferred cloud marketplace.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {PROCUREMENT_STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <Card key={step.title} className="relative space-y-5 p-6">
                    {idx < PROCUREMENT_STEPS.length - 1 && (
                      <div
                        className="absolute -right-3.5 top-1/2 hidden -translate-y-1/2 lg:block"
                        aria-hidden="true"
                      >
                        <ArrowRight className="h-6 w-6 text-cyan-accent/40" />
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-accent/15 ring-2 ring-cyan-accent">
                        <Icon className="h-6 w-6 text-cyan-accent" aria-hidden="true" />
                      </div>
                      <Badge variant="success" className="font-mono">
                        {String(idx + 1).padStart(2, '0')}
                      </Badge>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {step.description}
                      </p>
                      <p className="mt-3 text-xs italic text-slate-400">{step.details}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cloud Marketplace Cards (deploy anchor) */}
        <section id="deploy" className="section-padding-lg scroll-mt-24 bg-slate-950">
          <div className="container-max space-y-14">
            <div className="mx-auto max-w-3xl space-y-5 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100 text-balance">
                Available Cloud Platforms
              </h2>
              <p className="text-lg text-slate-400">
                Choose your deployment platform and get access to enterprise-grade QA testing.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {CLOUD_FEATURES.map((cloud) => (
                <Card key={cloud.provider} hover className="flex flex-col space-y-6 p-7">
                  <div className="space-y-3 border-b border-slate-700 pb-5">
                    <div className="flex items-center gap-3">
                      <CloudProviderIcon provider={cloud.provider} className="h-8 w-8" />
                      <h3 className="text-2xl font-bold text-slate-100">{cloud.name}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-400">{cloud.description}</p>
                  </div>

                  <div className="flex-1 space-y-2.5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Features
                    </p>
                    <ul className="space-y-2.5">
                      {cloud.features.map((feature) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <li
                            key={feature.text}
                            className="flex items-center gap-2.5 text-sm text-slate-300"
                          >
                            <FeatureIcon
                              className="h-4 w-4 flex-shrink-0 text-cyan-accent"
                              aria-hidden="true"
                            />
                            {feature.text}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="space-y-3 border-t border-slate-700 pt-5">
                    <div className="text-center">
                      <p className="text-xs text-slate-400">Pricing Model</p>
                      <p className="text-sm font-semibold text-slate-100">{cloud.pricing}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-slate-400">Service Level Agreement</p>
                      <p className="text-sm font-semibold text-emerald-400">{cloud.sla}</p>
                    </div>
                  </div>

                  <a
                    href={cloud.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-slate-700 bg-slate-800/60 px-5 py-3 text-sm font-bold text-slate-100 transition-all duration-200 hover:border-cyan-accent/60 hover:shadow-glow-cyan focus-ring active:scale-[0.98]"
                  >
                    Access Marketplace
                    <ArrowUpRight className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Benefits */}
        <section className="section-padding-lg bg-slate-900">
          <div className="container-max space-y-14">
            <div className="mx-auto max-w-3xl space-y-5 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100 text-balance">
                Enterprise Vendor Benefits
              </h2>
              <p className="text-lg text-slate-400">
                Procurement teams gain immediate value from cloud marketplace deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {VENDOR_BENEFITS.map((item) => (
                <Card key={item.benefit} hover className="space-y-3 p-6">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-slate-100">{item.benefit}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="section-padding-lg bg-slate-950">
          <div className="container-max space-y-14">
            <div className="mx-auto max-w-3xl space-y-5 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100 text-balance">
                Enterprise-Grade Compliance
              </h2>
              <p className="text-lg text-slate-400">
                Certified compliance and security standards across all cloud platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {COMPLIANCE_BADGES.map((badge) => {
                const BadgeIcon = badge.icon;
                return (
                  <Card key={badge.label} hover className="space-y-4 border-cyan-accent/20 p-6">
                    <div className="flex items-start gap-4">
                      <BadgeIcon
                        className="mt-1 h-8 w-8 flex-shrink-0 text-cyan-accent"
                        aria-hidden="true"
                      />
                      <div className="flex-1">
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <h3 className="font-semibold text-slate-100">{badge.label}</h3>
                          <Badge variant="info" className="text-xs">
                            {badge.badge}
                          </Badge>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">
                          {badge.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding-lg bg-slate-900" aria-labelledby="faq-heading">
          <div className="container-max space-y-14">
            <div className="mx-auto max-w-3xl space-y-5 text-center">
              <h2
                id="faq-heading"
                className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100 text-balance"
              >
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-400">
                Common questions about QA-PaaS cloud marketplace deployment.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <FaqAccordion items={FAQ_ITEMS} />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding-lg bg-slate-950">
          <div className="container-max">
            <div className="mx-auto max-w-3xl space-y-10 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100 text-balance">
                  Ready to Deploy QA-PaaS?
                </h2>
                <p className="text-lg text-slate-400">
                  Choose your cloud platform and start testing at enterprise scale in minutes.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {CLOUD_FEATURES.map((cloud) => (
                  <a
                    key={cloud.provider}
                    href={cloud.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-slate-800/80 px-6 py-4 text-base font-bold text-slate-100 ring-1 ring-slate-700 transition-all duration-200 hover:ring-cyan-accent/60 hover:shadow-glow-cyan focus-ring active:scale-[0.98]"
                  >
                    <CloudProviderIcon provider={cloud.provider} className="h-5 w-5" />
                    {cloud.name}
                    <ArrowUpRight className="h-4 w-4 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>

              <div className="border-t border-slate-700/70 pt-8 text-sm text-slate-400">
                <p>
                  Need help deciding? Contact our sales team:{' '}
                  <a
                    href="mailto:sales@qa-paas.com"
                    className="font-semibold text-cyan-accent hover:underline"
                  >
                    sales@qa-paas.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Runner Cost Calculator */}
        <section className="section-padding-lg border-t border-slate-700/60 bg-slate-900">
          <div className="container-max">
            <RunnerCalculator />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
