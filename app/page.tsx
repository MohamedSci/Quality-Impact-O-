import type { Metadata } from 'next';
import Script from 'next/script';
import { Navigation, Footer } from '@/components/branding';
import { MarketplaceHero } from '@/components/marketplace';
import { Card, Button } from '@/components/ui';
import { Zap, Shield, TrendingUp, Cloud, Cpu, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'QA-PaaS - Enterprise Cloud Testing Platform',
  description:
    'AI-orchestrated software testing platform by Quality Impact OÜ. Available on AWS Marketplace, Azure DevOps, and Google Cloud. ISO 27001 & SOC2 compliant.',
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
  },
};

const FEATURES = [
  {
    icon: Zap,
    title: 'Lightning-Fast Execution',
    description: 'Parallel test execution across high-compute cloud runners with sub-second latency.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'ISO 27001 & SOC2 Type II compliant architecture with end-to-end encryption.',
  },
  {
    icon: TrendingUp,
    title: 'AI-Powered Insights',
    description: 'Machine learning-driven test triage, flakiness detection, and intelligent retry logic.',
  },
  {
    icon: Cloud,
    title: 'Multi-Cloud Native',
    description: 'Deploy across AWS Fargate, Azure Container Instances, and Google Cloud Run.',
  },
  {
    icon: Cpu,
    title: 'On-Demand Scaling',
    description: 'Auto-scaling compute pools that grow and shrink based on test load.',
  },
  {
    icon: CheckCircle2,
    title: 'Unified Billing',
    description: 'Single invoice across all cloud platforms via marketplace procurement.',
  },
];

function HomePage() {
  const homepageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'QA-PaaS - Enterprise Cloud Testing Platform',
    url: 'https://www.qa-paas.com',
    description: 'AI-orchestrated software testing platform available on AWS, Azure, and Google Cloud.',
    image: 'https://www.qa-paas.com/brand/og-hero.png',
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

      {/* Hero Marketplace Section */}
      <MarketplaceHero />

      {/* Features Section */}
      <section className="section-padding bg-slate-bg">
        <div className="container-max space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
              Purpose-Built for Enterprise QA Teams
            </h2>
            <p className="text-lg text-slate-400">
              QA-PaaS combines advanced test orchestration, AI-powered insights, and seamless cloud integration to accelerate software delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} hover className="space-y-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100">{feature.title}</h3>
                  <p className="text-sm text-slate-400">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-surface">
        <div className="container-max max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
            Ready to Transform Your QA Practice?
          </h2>
          <p className="text-lg text-slate-400">
            Subscribe to QA-PaaS through your preferred cloud marketplace. Enterprise procurement teams, volume discounts available.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                window.open('https://aws.amazon.com/marketplace/pp/prodview-qapaas', '_blank')
              }
            >
              AWS Marketplace →
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                window.open(
                  'https://marketplace.visualstudio.com/items?itemName=qualityimpact.qa-paas',
                  '_blank'
                )
              }
            >
              Azure DevOps →
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
