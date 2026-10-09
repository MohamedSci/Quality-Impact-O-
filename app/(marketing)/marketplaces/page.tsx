import type { Metadata } from 'next';
import Script from 'next/script';
import { Navigation, Footer } from '@/components/branding';
import { MarketplaceHero, RunnerCalculator } from '@/components/marketplace';
import { Card, Badge, Alert, InteractiveButton } from '@/components/ui';
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
    title: 'Step 1: Select Marketplace',
    description: 'Choose AWS, Azure DevOps, or Google Cloud based on your enterprise agreement.',
    details: 'Review available offerings and pricing tiers for your organization.',
  },
  {
    icon: CreditCard,
    title: 'Step 2: Authorize & Subscribe',
    description: 'Review billing terms and authorize the integration with your cloud account.',
    details: 'Automatic billing consolidation with your existing cloud invoice.',
  },
  {
    icon: Lock,
    title: 'Step 3: Configure Access',
    description: 'Set up IAM roles, service principals, or API keys for your cloud platform.',
    details: 'Security policies enforced; zero exposure to customer test data.',
  },
  {
    icon: Zap,
    title: 'Step 4: Deploy & Execute',
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

const CLOUD_FEATURES = [
  {
    name: 'AWS Marketplace',
    logo: 'AWS',
    accent: '#FF9900',
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
    name: 'Azure DevOps',
    logo: 'AZURE',
    accent: '#0078D4',
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
    name: 'Google Cloud',
    logo: 'GCP',
    accent: '#4285F4',
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

      {/* Marketplace Hero */}
      <MarketplaceHero />

      {/* Quick Start Alert */}
      <section className="section-padding bg-primary/5 border-y border-primary/20">
        <div className="container-max">
          <Alert variant="info" className="border-primary/30 bg-primary/10">
            <Zap className="h-4 w-4 text-primary" />
            <div className="ml-2 flex-1">
              <p className="font-semibold text-primary mb-1">Ready to Get Started?</p>
              <p className="text-sm text-slate-300">
                Click on any marketplace below to view pricing, initiate your subscription, and
                begin deploying QA-PaaS in minutes.
              </p>
            </div>
          </Alert>
        </div>
      </section>

      {/* Procurement Steps */}
      <section className="section-padding bg-slate-surface">
        <div className="container-max space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Play className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">4-Step Setup</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
              Simple 4-Step Procurement Journey
            </h2>
            <p className="text-lg text-slate-400">
              Get QA-PaaS operational in minutes through your preferred cloud marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCUREMENT_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Card key={idx} className="space-y-4 relative">
                  {idx < PROCUREMENT_STEPS.length - 1 && (
                    <div className="absolute -right-3 top-1/2 hidden lg:block">
                      <ArrowRight className="w-6 h-6 text-primary/30" />
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 border-2 border-primary">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="success">{String(idx + 1).padStart(2, '0')}</Badge>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">{step.title}</h3>
                    <p className="text-sm text-slate-400 mt-2">{step.description}</p>
                    <p className="text-xs text-slate-500 mt-3 italic">{step.details}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cloud Marketplace Cards */}
      <section className="section-padding bg-slate-bg">
        <div className="container-max space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
              Available Cloud Platforms
            </h2>
            <p className="text-lg text-slate-400">
              Choose your deployment platform and get access to enterprise-grade QA testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLOUD_FEATURES.map((cloud, idx) => (
              <Card key={idx} hover className="space-y-6 flex flex-col">
                <div className="space-y-2 border-b border-slate-700 pb-4">
                  <div className="text-sm font-mono font-semibold text-slate-400">{cloud.logo}</div>
                  <h3 className="text-2xl font-bold text-slate-100">{cloud.name}</h3>
                  <p className="text-sm text-slate-400">{cloud.description}</p>
                </div>

                <div className="space-y-2 flex-grow">
                  <p className="text-xs font-semibold text-slate-400 uppercase">Features</p>
                  <ul className="space-y-2">
                    {cloud.features.map((feature, fIdx) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <li key={fIdx} className="flex items-center gap-2 text-sm text-slate-300">
                          <FeatureIcon className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature.text}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="space-y-3 border-t border-slate-700 pt-4">
                  <div className="text-center">
                    <p className="text-xs text-slate-500">Pricing Model</p>
                    <p className="text-sm font-semibold text-slate-100">{cloud.pricing}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-slate-500">Service Level Agreement</p>
                    <p className="text-sm font-semibold text-status-pass">{cloud.sla}</p>
                  </div>
                </div>

                <InteractiveButton
                  variant="primary"
                  size="lg"
                  className="w-full mt-4"
                  href={
                    idx === 0
                      ? 'https://aws.amazon.com/marketplace/pp/prodview-qapaas'
                      : idx === 1
                        ? 'https://marketplace.visualstudio.com/items?itemName=qualityimpact.qa-paas'
                        : 'https://console.cloud.google.com/marketplace/product/qualityimpact/qa-paas'
                  }
                >
                  Access Marketplace
                </InteractiveButton>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Benefits */}
      <section className="section-padding bg-slate-surface">
        <div className="container-max space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
              Enterprise Vendor Benefits
            </h2>
            <p className="text-lg text-slate-400">
              Procurement teams gain immediate value from cloud marketplace deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VENDOR_BENEFITS.map((item, idx) => (
              <Card key={idx} className="space-y-3">
                <CheckCircle2 className="w-6 h-6 text-status-pass" />
                <h3 className="text-lg font-semibold text-slate-100">{item.benefit}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="section-padding bg-slate-bg">
        <div className="container-max space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
              Enterprise-Grade Compliance
            </h2>
            <p className="text-lg text-slate-400">
              Certified compliance and security standards across all cloud platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMPLIANCE_BADGES.map((badge, idx) => {
              const BadgeIcon = badge.icon;
              return (
                <Card
                  key={idx}
                  className="space-y-4 border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <BadgeIcon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-slate-100">{badge.label}</h3>
                        <Badge variant="info" className="text-xs">
                          {badge.badge}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-400">{badge.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-surface">
        <div className="container-max space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-400">
              Common questions about QA-PaaS cloud marketplace deployment.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How long does deployment take?',
                a: 'Most deployments are operational within 15-30 minutes from marketplace subscription.',
              },
              {
                q: 'What if I use multiple cloud providers?',
                a: 'QA-PaaS supports concurrent deployments across AWS, Azure, and GCP with unified monitoring.',
              },
              {
                q: 'Is there a free trial?',
                a: 'Yes, cloud marketplaces typically offer trial periods. Check your platform for details.',
              },
              {
                q: 'Can I upgrade or downgrade my plan?',
                a: 'Plans are flexible and can be adjusted anytime through your marketplace console.',
              },
              {
                q: 'What support is included?',
                a: 'Enterprise support with 24/7 availability, SLA guarantees, and dedicated support team.',
              },
              {
                q: 'How is my test data protected?',
                a: 'End-to-end encryption, ISO 27001 certification, and zero-knowledge architecture protect all data.',
              },
            ].map((item, idx) => (
              <Card key={idx} className="space-y-2 p-4">
                <h4 className="font-semibold text-slate-100">{item.q}</h4>
                <p className="text-sm text-slate-400">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-slate-bg">
        <div className="container-max max-w-3xl mx-auto space-y-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
            Ready to Deploy QA-PaaS?
          </h2>
          <p className="text-lg text-slate-400">
            Choose your cloud platform and start testing at enterprise scale in minutes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InteractiveButton
              variant="primary"
              size="lg"
              href="https://aws.amazon.com/marketplace/pp/prodview-qapaas"
            >
              AWS Marketplace
            </InteractiveButton>
            <InteractiveButton
              variant="primary"
              size="lg"
              href="https://marketplace.visualstudio.com/items?itemName=qualityimpact.qa-paas"
            >
              Azure DevOps
            </InteractiveButton>
            <InteractiveButton
              variant="primary"
              size="lg"
              href="https://console.cloud.google.com/marketplace/product/qualityimpact/qa-paas"
            >
              Google Cloud
            </InteractiveButton>
          </div>

          <div className="border-t border-slate-600 pt-8 text-sm text-slate-400">
            <p>
              Need help deciding? Contact our sales team:{' '}
              <a
                href="mailto:sales@qa-paas.com"
                className="text-primary hover:underline font-semibold"
              >
                sales@qa-paas.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Runner Cost Calculator */}
      <section className="section-padding bg-slate-bg">
        <div className="container-max">
          <RunnerCalculator />
        </div>
      </section>

      <Footer />
    </>
  );
}
