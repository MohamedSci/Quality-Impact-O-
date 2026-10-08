import type { Metadata } from 'next';
import { Navigation, Footer } from '@/components/branding';
import { MarketplaceHero } from '@/components/marketplace';
import { Card } from '@/components/ui';
import { CheckCircle2, Lock, Zap, CreditCard } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cloud Marketplace Procurement | QA-PaaS',
  description:
    'Subscribe and deploy QA-PaaS directly through AWS Marketplace, Azure DevOps, or Google Cloud. Unified billing with ISO 27001 compliance.',
  openGraph: {
    title: 'Cloud Marketplace Procurement & Deployment',
    description: 'Deploy QA-PaaS through AWS, Azure DevOps, or Google Cloud.',
    url: 'https://www.qa-paas.com/marketplaces',
  },
};

const PROCUREMENT_STEPS = [
  {
    icon: CheckCircle2,
    title: 'Step 1: Select Marketplace',
    description: 'Choose AWS, Azure DevOps, or Google Cloud based on your enterprise agreement.',
  },
  {
    icon: CreditCard,
    title: 'Step 2: Authorize & Subscribe',
    description: 'Review billing terms and authorize the integration with your cloud account.',
  },
  {
    icon: Lock,
    title: 'Step 3: Configure Access',
    description: 'Set up IAM roles, service principals, or API keys for your cloud platform.',
  },
  {
    icon: Zap,
    title: 'Step 4: Deploy & Execute',
    description: 'Launch your first test job and monitor execution through live telemetry dashboards.',
  },
];

const COMPLIANCE_BADGES = [
  { label: 'ISO/IEC 27001:2022', description: 'Information Security Management' },
  { label: 'SOC2 Type II', description: 'Security, Availability & Confidentiality' },
  { label: 'GDPR Compliant', description: 'EU Data Protection Regulation' },
  { label: 'Cloud Native', description: 'CNCF Certified Architecture' },
];

export default function MarketplacesPage() {
  return (
    <>
      <Navigation />

      {/* Marketplace Hero */}
      <MarketplaceHero />

      {/* Procurement Steps */}
      <section className="section-padding bg-slate-surface">
        <div className="container-max space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
              4-Step Procurement Journey
            </h2>
            <p className="text-lg text-slate-400">
              Get QA-PaaS operational in minutes through your preferred cloud marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCUREMENT_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Card key={idx} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100">{step.title}</h3>
                  <p className="text-sm text-slate-400">{step.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="section-padding bg-slate-bg">
        <div className="container-max space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
              Enterprise-Grade Compliance
            </h2>
            <p className="text-lg text-slate-400">
              Certified compliance and security standards across all cloud platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMPLIANCE_BADGES.map((badge, idx) => (
              <Card key={idx} className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-status-pass/10 flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-status-pass" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100">{badge.label}</h3>
                  <p className="text-sm text-slate-400">{badge.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Guides Section */}
      <section className="section-padding bg-slate-surface">
        <div className="container-max space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-100">
              Platform-Specific Deployment Guides
            </h2>
            <p className="text-lg text-slate-400">
              Detailed documentation for each cloud marketplace integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'AWS Marketplace',
                description: 'Deploy QA-PaaS via AWS Batch or Fargate compute engines.',
                features: ['Auto-scaling', 'VPC integration', 'IAM role management', 'Cost optimization'],
              },
              {
                name: 'Azure DevOps Marketplace',
                description: 'Native Azure Pipelines task and service connection integration.',
                features: ['Pipeline integration', 'Service connections', 'Role-based access', 'Multi-org support'],
              },
              {
                name: 'Google Cloud Marketplace',
                description: 'Containerized execution via Google Cloud Run and GKE.',
                features: ['Cloud Run native', 'GKE support', 'Cloud IAM', 'Pub/Sub integration'],
              },
            ].map((platform, idx) => (
              <Card key={idx} hover className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">{platform.name}</h3>
                <p className="text-sm text-slate-400">{platform.description}</p>
                <div className="space-y-2">
                  {platform.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-xs text-slate-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
