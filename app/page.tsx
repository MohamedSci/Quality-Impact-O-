import type { Metadata } from 'next';
import type * as React from 'react';
import Script from 'next/script';
import { Navigation, Footer } from '@/components/branding';
import { Hero } from '@/components/home';
import { MarketplaceLinks, CloudProviderIcon, type CloudProvider } from '@/components/marketplace';
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
  Quote,
  Workflow,
  Rocket,
  LineChart,
  TerminalSquare,
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

const HOW_IT_WORKS = [
  {
    icon: Workflow,
    step: '01',
    title: 'Connect Your Cloud',
    description:
      'Subscribe through AWS, Azure, or Google Cloud marketplace and consolidate billing with your existing agreement.',
  },
  {
    icon: Rocket,
    step: '02',
    title: 'Deploy Runners',
    description:
      'Provision high-compute test runners in your VPC with IAM roles, service connections, or Cloud IAM in minutes.',
  },
  {
    icon: LineChart,
    step: '03',
    title: 'Execute & Analyze',
    description:
      'Run self-healing tests, watch AI triage in real time, and ship with confidence from live quality analytics.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'QA-PaaS cut our regression suite from 90 minutes to 4. The self-healing locators alone eliminated weeks of maintenance work.',
    name: 'VP of Engineering',
    company: 'Global Fintech Platform',
  },
  {
    quote:
      'Procuring through the AWS Marketplace meant our security team signed off in a day. Zero infrastructure overhead.',
    name: 'Director of QA',
    company: 'Fortune 500 Retailer',
  },
  {
    quote:
      'The AI triage tells us why a test failed before we even open the logs. Flakiness is down 90% across all squads.',
    name: 'Head of Developer Experience',
    company: 'Enterprise SaaS Provider',
  },
];

const CLOUD_OPTIONS: Array<{
  provider: CloudProvider;
  name: string;
  description: string;
  features: string[];
}> = [
  {
    provider: 'aws',
    name: 'AWS',
    description: 'Deploy via Fargate or Batch with automatic VPC integration.',
    features: ['Auto-scaling', 'IAM roles', 'CloudWatch logs'],
  },
  {
    provider: 'azure',
    name: 'Azure',
    description: 'Native Azure DevOps task with Service Connection support.',
    features: ['Pipeline native', 'RBAC', 'Multi-org'],
  },
  {
    provider: 'gcp',
    name: 'Google Cloud',
    description: 'Run on Cloud Run or GKE with instant provisioning.',
    features: ['Cloud Run', 'GKE ready', 'Cloud IAM'],
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
        {/* Hero */}
        <Hero />

        {/* Trust strip */}
        <section
          className="border-y border-slate-700/60 bg-slate-900/40 py-8"
          aria-label="Available platforms"
        >
          <div className="container-max px-6 md:px-12">
            <p className="text-center text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mb-6">
              Procure directly through the world&apos;s leading cloud marketplaces
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {CLOUD_OPTIONS.map((cloud) => (
                <div key={cloud.provider} className="flex items-center gap-2.5 text-slate-400">
                  <CloudProviderIcon provider={cloud.provider} className="h-6 w-6" />
                  <span className="text-sm font-semibold text-slate-300">{cloud.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="section-padding-lg bg-slate-900" aria-labelledby="features-heading">
          <div className="container-max space-y-14">
            <SectionHeading
              id="features-heading"
              eyebrow="Enterprise-Grade Platform"
              eyebrowIcon={Gauge}
              title="Purpose-Built for Enterprise QA Teams"
              description="QA-PaaS combines advanced test orchestration, AI-powered insights, and seamless cloud integration to accelerate software delivery. Deploy once, manage globally."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CORE_FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} hover className="group space-y-5 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-accent/10 ring-1 ring-cyan-accent/20 group-hover:bg-cyan-accent/20 group-hover:ring-cyan-accent/40 transition-all duration-300">
                        <Icon className="h-6 w-6 text-cyan-accent" aria-hidden="true" />
                      </div>
                      <Badge variant={feature.badgeVariant} className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-100">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">{feature.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section-padding-lg bg-slate-950" aria-labelledby="how-heading">
          <div className="container-max space-y-14">
            <SectionHeading
              id="how-heading"
              eyebrow="Deploy in Minutes"
              eyebrowIcon={TerminalSquare}
              title="From Zero to Executing Tests in 3 Steps"
              description="No infrastructure to provision. No agents to install. Subscribe through your cloud marketplace and start running tests the same day."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {HOW_IT_WORKS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="relative">
                    <Card hover className="h-full space-y-5 p-8">
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-accent/20 to-accent-500/20 ring-1 ring-cyan-accent/30">
                          <Icon className="h-6 w-6 text-cyan-accent" aria-hidden="true" />
                        </div>
                        <span className="font-mono text-4xl font-bold text-slate-500">
                          {item.step}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-100">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section-padding-lg bg-slate-900" aria-labelledby="usecases-heading">
          <div className="container-max space-y-14">
            <SectionHeading
              id="usecases-heading"
              eyebrow="Built for Your Workflow"
              title="Integrates With Your Existing Stack"
              description="Seamless integration with your existing development infrastructure and tools."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {USE_CASES.map((useCase) => {
                const Icon = useCase.icon;
                return (
                  <Card key={useCase.title} hover className="space-y-5 border-slate-700/80 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-accent/10 ring-1 ring-cyan-accent/20">
                        <Icon className="h-5 w-5 text-cyan-accent" aria-hidden="true" />
                      </div>
                      <span className="rounded-md bg-cyan-accent/10 px-2.5 py-1 font-mono text-xs font-semibold text-cyan-accent">
                        {useCase.metrics}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100">{useCase.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {useCase.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding-lg bg-slate-950" aria-labelledby="benefits-heading">
          <div className="container-max space-y-14">
            <SectionHeading
              id="benefits-heading"
              eyebrow="Proven Results"
              title="Measurable Impact Across Enterprises"
              description="See how organizations are transforming their QA practices with QA-PaaS."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
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
              ].map((benefit) => (
                <Card key={benefit.label} hover className="space-y-3 p-7 text-center">
                  <div className="gradient-text text-4xl font-extrabold">{benefit.metric}</div>
                  <h3 className="text-base font-semibold text-slate-100">{benefit.label}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="section-padding-lg bg-slate-900" aria-labelledby="integration-heading">
          <div className="container-max space-y-14">
            <SectionHeading
              id="integration-heading"
              eyebrow="Multi-Cloud Native"
              title="Enterprise Integration Made Simple"
              description="Deploy QA-PaaS through your preferred cloud marketplace with zero infrastructure overhead."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CLOUD_OPTIONS.map((cloud) => (
                <Card key={cloud.provider} hover className="space-y-5 p-7">
                  <div className="flex items-center gap-3">
                    <CloudProviderIcon provider={cloud.provider} className="h-8 w-8" />
                    <h3 className="text-xl font-semibold text-slate-100">{cloud.name}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-400">{cloud.description}</p>
                  <div className="space-y-2.5 border-t border-slate-700 pt-5">
                    {cloud.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding-lg bg-slate-950" aria-labelledby="testimonials-heading">
          <div className="container-max space-y-14">
            <SectionHeading
              id="testimonials-heading"
              eyebrow="Customer Stories"
              title="Trusted by Teams That Ship Daily"
              description="Engineering leaders rely on QA-PaaS to protect production quality at scale."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <Card key={t.company} hover className="flex h-full flex-col space-y-6 p-7">
                  <Quote className="h-7 w-7 text-cyan-accent/50" aria-hidden="true" />
                  <blockquote className="flex-1 text-sm leading-relaxed text-slate-300">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="border-t border-slate-700 pt-5">
                    <p className="text-sm font-semibold text-slate-100">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.company}</p>
                  </figcaption>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Compliance Banner */}
        <section
          className="section-padding border-y border-slate-700/60 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800"
          aria-labelledby="compliance-heading"
        >
          <h2 id="compliance-heading" className="sr-only">
            Security and Compliance
          </h2>
          <div className="container-max px-6 md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Lock, label: 'ISO 27001 Certified', sublabel: 'Information Security' },
                { icon: Shield, label: 'SOC2 Type II', sublabel: 'Security & Compliance' },
                { icon: Globe2, label: 'GDPR Compliant', sublabel: 'Data Protection' },
                {
                  icon: CheckCircle2,
                  label: '99.9% Uptime SLA',
                  sublabel: 'Enterprise Reliability',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-accent/10 ring-1 ring-cyan-accent/20">
                      <Icon className="h-6 w-6 text-cyan-accent" aria-hidden="true" />
                    </div>
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
        <section
          className="section-padding-lg bg-slate-950 relative overflow-hidden"
          aria-labelledby="cta-heading"
        >
          <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)] pointer-events-none" />
          <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[380px] w-[680px] rounded-full bg-cyan-accent/10 blur-[110px] pointer-events-none" />
          <div className="container-max relative z-10 px-6 md:px-12">
            <div className="mx-auto max-w-3xl space-y-10 text-center">
              <div className="space-y-4">
                <h2
                  id="cta-heading"
                  className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100 text-balance"
                >
                  Start Testing at Enterprise Scale
                </h2>
                <p className="text-lg text-slate-400">
                  Subscribe to QA-PaaS through your preferred cloud marketplace. Enterprise
                  procurement, volume discounts, and dedicated support available.
                </p>
              </div>

              <MarketplaceLinks layout="grid" size="lg" />

              <div className="border-t border-slate-700/70 pt-8 text-sm text-slate-400">
                <p>
                  Questions? Contact our sales team at{' '}
                  <a
                    href="mailto:sales@qa-paas.com"
                    className="font-semibold text-cyan-accent hover:underline"
                    aria-label="Send email to sales@qa-paas.com"
                  >
                    sales@qa-paas.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Shared section heading                                              */
/* ------------------------------------------------------------------ */
interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  eyebrowIcon?: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean | 'true' }>;
  title: string;
  description?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  eyebrow,
  eyebrowIcon: Icon,
  title,
  description,
}) => (
  <div className="mx-auto max-w-3xl space-y-5 text-center">
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-accent/20 bg-cyan-accent/10 px-4 py-1.5">
      {Icon && <Icon className="h-4 w-4 text-cyan-accent" aria-hidden="true" />}
      <span className="text-sm font-semibold text-cyan-accent">{eyebrow}</span>
    </div>
    <h2
      id={id}
      className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100 text-balance"
    >
      {title}
    </h2>
    {description && <p className="text-lg leading-relaxed text-slate-400">{description}</p>}
  </div>
);
