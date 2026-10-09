import type { Metadata } from 'next';
import Script from 'next/script';
import { Navigation, Footer } from '@/components/branding';
import { Hero } from '@/components/home';
import { MarketplaceLinks } from '@/components/marketplace';
import { Card, Badge } from '@/components/ui';
import {
  Zap,
  Shield,
  TrendingUp,
  Cloud,
  Cpu,
  CheckCircle2,
  Globe2,
  Lock,
  Database,
  Monitor,
  Users,
  Gauge,
  GitBranch,
} from 'lucide-react';

// Server-side metadata
export const metadata: Metadata = {
  title: 'QA-PaaS - Enterprise Cloud Testing Platform',
  description:
    'AI-orchestrated software testing platform by Quality Impact OÜ. Available on AWS Marketplace, Azure DevOps, and Google Cloud. ISO 27001 & SOC2 compliant.',
  keywords: [
    'QA-PaaS',
    'Software Testing',
    'Test Automation',
    'Cloud Testing',
    'AI Testing',
    'Quality Assurance',
    'Enterprise QA',
    'AWS Marketplace',
    'Azure DevOps',
    'Google Cloud',
  ],
  openGraph: {
    title: 'QA-PaaS - Enterprise Cloud Testing Platform',
    description: 'AI-orchestrated software testing available on AWS, Azure, and Google Cloud.',
    url: 'https://www.qa-paas.com',
    images: [
      {
        url: 'https://www.qa-paas.com/brand/og-hero.png',
        width: 1200,
        height: 630,
        alt: 'QA-PaaS Platform Homepage',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QA-PaaS - Enterprise Cloud Testing',
    description: 'AI-orchestrated software testing across all cloud platforms',
    images: ['https://www.qa-paas.com/brand/og-hero.png'],
  },
  alternates: {
    canonical: 'https://www.qa-paas.com',
  },
};

const CORE_FEATURES = [
  {
    icon: Zap,
    title: 'Lightning-Fast Execution',
    description:
      'Parallel test execution across high-compute cloud runners with sub-second latency.',
    badge: 'Performance',
    badgeVariant: 'success' as const,
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'ISO 27001 & SOC2 Type II compliant architecture with end-to-end encryption.',
    badge: 'Compliance',
    badgeVariant: 'info' as const,
  },
  {
    icon: TrendingUp,
    title: 'AI-Powered Insights',
    description:
      'Machine learning-driven test triage, flakiness detection, and intelligent retry logic.',
    badge: 'AI-Driven',
    badgeVariant: 'default' as const,
  },
  {
    icon: Cloud,
    title: 'Multi-Cloud Native',
    description: 'Deploy across AWS Fargate, Azure Container Instances, and Google Cloud Run.',
    badge: 'Multi-Cloud',
    badgeVariant: 'info' as const,
  },
  {
    icon: Cpu,
    title: 'On-Demand Scaling',
    description: 'Auto-scaling compute pools that grow and shrink based on test load.',
    badge: 'Scalable',
    badgeVariant: 'success' as const,
  },
  {
    icon: CheckCircle2,
    title: 'Unified Billing',
    description: 'Single invoice across all cloud platforms via marketplace procurement.',
    badge: 'Finance',
    badgeVariant: 'default' as const,
  },
];

const USE_CASES = [
  {
    icon: GitBranch,
    title: 'CI/CD Pipeline Integration',
    description: 'Native integration with GitHub Actions, GitLab CI, Azure Pipelines, and Jenkins.',
    metrics: '10-50x faster',
  },
  {
    icon: Monitor,
    title: 'Real-Time Test Monitoring',
    description: 'Live dashboards with instant feedback on test execution and failure analysis.',
    metrics: '< 100ms latency',
  },
  {
    icon: Database,
    title: 'Data-Driven Testing',
    description: 'Built-in test data management with synthetic data generation and masking.',
    metrics: '99.9% uptime',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Shared dashboards, team analytics, and cross-functional reporting.',
    metrics: 'Enterprise RBAC',
  },
];

const BENEFITS = [
  {
    metric: '70%',
    label: 'Faster Test Execution',
    description: 'Parallel compute across cloud providers reduces test cycle time',
  },
  {
    metric: '90%',
    label: 'Fewer Flaky Tests',
    description: 'AI-powered detection and automatic root cause analysis',
  },
  {
    metric: '50%',
    label: 'Cost Savings',
    description: 'Optimized resource utilization and unified cloud procurement',
  },
  {
    metric: '24/7',
    label: 'Global Support',
    description: 'Enterprise-grade SLA and dedicated support team',
  },
];

export default function HomePage() {
  const homepageSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'QA-PaaS',
    applicationCategory: 'DeveloperApplication',
    description: 'AI-orchestrated enterprise software testing platform',
    url: 'https://www.qa-paas.com',
    publisher: {
      '@type': 'Organization',
      name: 'Quality Impact OÜ',
      url: 'https://www.qa-paas.com',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'AWS Marketplace',
        url: 'https://aws.amazon.com/marketplace/pp/prodview-qapaas',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Azure DevOps Marketplace',
        url: 'https://marketplace.visualstudio.com/items?itemName=qualityimpact.qa-paas',
      },
      {
        '@type': 'Offer',
        name: 'Google Cloud Marketplace',
        url: 'https://console.cloud.google.com/marketplace/product/qualityimpact/qa-paas',
      },
    ],
  };

  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema),
        }}
      />

      <Navigation />

      <main id="main-content">
        {/* Hero Section - AI-Orchestrated Quality Engineering */}
        <Hero />

        {/* Core Features Section */}
        <section className="py-16 px-6 md:px-12 bg-slate-900" aria-labelledby="features-heading">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                <Gauge className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                <span className="text-sm font-semibold text-cyan-400">Enterprise-Grade Platform</span>
              </div>
              <h2 id="features-heading" className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
                Purpose-Built for Enterprise QA Teams
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl">
                QA-PaaS combines advanced test orchestration, AI-powered insights, and seamless cloud
                integration to accelerate software delivery. Deploy once, manage globally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CORE_FEATURES.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Card key={idx} hover className="space-y-4 group">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                        <Icon className="w-6 h-6 text-cyan-400" aria-hidden="true" />
                      </div>
                      <Badge variant={feature.badgeVariant} className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-100">{feature.title}</h3>
                    <p className="text-sm text-slate-400">{feature.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-6 md:px-12 bg-slate-800" aria-labelledby="usecases-heading">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 id="usecases-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
                Built for Your Workflow
              </h2>
              <p className="text-lg text-slate-400">
                Seamless integration with your existing development infrastructure and tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {USE_CASES.map((useCase, idx) => {
                const Icon = useCase.icon;
                return (
                  <Card
                    key={idx}
                    className="space-y-4 border-slate-700 hover:border-cyan-500/50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <Icon className="w-8 h-8 text-cyan-400" aria-hidden="true" />
                      <span className="text-sm font-mono font-semibold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">
                        {useCase.metrics}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100">{useCase.title}</h3>
                      <p className="text-sm text-slate-400 mt-2">{useCase.description}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-6 md:px-12 bg-slate-900" aria-labelledby="benefits-heading">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
                Proven Results Across Enterprises
              </h2>
              <p className="text-lg text-slate-400">
                See how organizations are transforming their QA practices with QA-PaaS.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {BENEFITS.map((benefit, idx) => (
                <Card key={idx} className="space-y-2 text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                    {benefit.metric}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100">{benefit.label}</h3>
                  <p className="text-sm text-slate-400">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-16 px-6 md:px-12 bg-slate-800" aria-labelledby="integration-heading">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 id="integration-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
                Enterprise Integration Made Simple
              </h2>
              <p className="text-lg text-slate-400">
                Deploy QA-PaaS through your preferred cloud marketplace with zero infrastructure
                overhead.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  platform: 'AWS',
                  logo: '☁️',
                  description: 'Deploy via Fargate or Batch with automatic VPC integration.',
                  features: ['Auto-scaling', 'IAM roles', 'CloudWatch logs'],
                },
                {
                  platform: 'Azure',
                  logo: '⚙️',
                  description: 'Native Azure DevOps task with Service Connection support.',
                  features: ['Pipeline native', 'RBAC', 'Multi-org'],
                },
                {
                  platform: 'GCP',
                  logo: '🔷',
                  description: 'Run on Cloud Run or GKE with instant provisioning.',
                  features: ['Cloud Run', 'GKE ready', 'Cloud IAM'],
                },
              ].map((cloud, idx) => (
                <Card key={idx} hover className="space-y-4">
                  <div className="text-3xl" aria-hidden="true">{cloud.logo}</div>
                  <h3 className="text-xl font-semibold text-slate-100">{cloud.platform}</h3>
                  <p className="text-sm text-slate-400">{cloud.description}</p>
                  <div className="pt-4 border-t border-slate-600 space-y-2">
                    {cloud.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-green-500" aria-hidden="true" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Compliance Banner */}
        <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-slate-800 to-slate-900 border-y border-slate-700" aria-labelledby="compliance-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="compliance-heading" className="sr-only">Security and Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Lock, label: 'ISO 27001 Certified', sublabel: 'Information Security' },
                { icon: Shield, label: 'SOC2 Type II', sublabel: 'Security & Compliance' },
                { icon: Globe2, label: 'GDPR Compliant', sublabel: 'Data Protection' },
                { icon: CheckCircle2, label: '99.9% Uptime SLA', sublabel: 'Enterprise Reliability' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-4">
                    <Icon className="w-8 h-8 text-cyan-400 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-slate-100">{item.label}</p>
                      <p className="text-xs text-slate-400">{item.sublabel}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 md:px-12 bg-slate-900" aria-labelledby="cta-heading">
          <div className="max-w-7xl mx-auto max-w-3xl space-y-8">
            <div className="text-center space-y-4">
              <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
                Start Testing at Enterprise Scale
              </h2>
              <p className="text-lg text-slate-400">
                Subscribe to QA-PaaS through your preferred cloud marketplace. Enterprise procurement
                teams, volume discounts, and dedicated support available.
              </p>
            </div>

            <MarketplaceLinks layout="grid" size="lg" />

            <div className="text-center text-sm text-slate-400 border-t border-slate-700 pt-8">
              <p>
                Questions? Contact our sales team at{' '}
                <a href="mailto:sales@qa-paas.com" className="text-cyan-400 hover:underline" aria-label="Send email to sales@qa-paas.com">
                  sales@qa-paas.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
