'use client';

import React from 'react';
import Script from 'next/script';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { CloudMarketplaceCard, type CloudMarketplaceOption } from './CloudMarketplaceCard';

const MARKETPLACES: CloudMarketplaceOption[] = [
  {
    id: 'aws',
    name: 'AWS Marketplace',
    badgeText: 'AWS High-Compute Runners / Fargate',
    listingUrl: 'https://aws.amazon.com/marketplace/pp/prodview-qapaas',
    accentColor: 'border-[#FF9900]/40 text-[#FF9900] bg-[#FF9900]/10',
    description: 'Deploy via AWS Batch or Fargate compute clusters in your region.',
  },
  {
    id: 'azure',
    name: 'Azure DevOps Marketplace',
    badgeText: 'Azure Pipeline Extension',
    listingUrl: 'https://marketplace.visualstudio.com/items?itemName=qualityimpact.qa-paas',
    accentColor: 'border-[#0078D4]/40 text-[#0078D4] bg-[#0078D4]/10',
    description: 'Native Azure DevOps pipeline task & service connection integration.',
  },
  {
    id: 'gcp',
    name: 'Google Cloud Marketplace',
    badgeText: 'GCP Cloud Run Engine',
    listingUrl: 'https://console.cloud.google.com/marketplace/product/qualityimpact/qa-paas',
    accentColor: 'border-[#4285F4]/40 text-[#4285F4] bg-[#4285F4]/10',
    description: 'Containerized execution across Google Cloud infrastructure.',
  },
];

export const MarketplaceHero: React.FC = () => {
  // Structured Data Schema for SEO
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'QA-PaaS',
    operatingSystem: 'Cloud-Native / Linux / Docker',
    applicationCategory: 'DeveloperApplication',
    url: 'https://www.qa-paas.com',
    author: {
      '@type': 'Organization',
      name: 'Quality Impact OÜ',
      url: 'https://www.qa-paas.com',
    },
    offers: MARKETPLACES.map((m) => ({
      '@type': 'Offer',
      name: `${m.name} Listing`,
      url: m.listingUrl,
      category: 'SaaS Subscription',
    })),
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 px-6 pt-20 pb-16 text-white md:px-12 md:pt-28 md:pb-24">
      {/* Dynamic SEO JSON-LD */}
      <Script
        id="qa-paas-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Background accents */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_65%_60%_at_50%_25%,black,transparent)] pointer-events-none" />
      <div className="absolute -top-24 right-[-8%] h-[360px] w-[360px] rounded-full bg-cyan-accent/12 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-6%] h-[320px] w-[320px] rounded-full bg-accent-500/10 blur-[100px] pointer-events-none" />

      <div className="container-max relative z-10 space-y-14">
        {/* Corporate Header & Product Identifier */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/70 px-3.5 py-1.5 font-mono text-xs text-slate-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-accent" aria-hidden="true" />
            <span>Quality Impact OÜ // Enterprise QA-PaaS Platform</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-100 text-balance">
            AI-Orchestrated Software Testing.{' '}
            <span className="gradient-text">Available on All Cloud Marketplaces.</span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
            Provision QA-PaaS directly through your existing AWS, Azure, or Google Cloud enterprise
            agreement. Unified billing, high-compute test execution, and zero infrastructure
            friction.
          </p>
        </div>

        {/* Cloud Marketplace Routing Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {MARKETPLACES.map((m) => (
            <CloudMarketplaceCard key={m.id} marketplace={m} />
          ))}
        </div>

        {/* Corporate Legal & Compliance Footer Ribbon */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-700/70 pt-8 font-mono text-xs text-slate-400 md:flex-row">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>© {new Date().getFullYear()} Quality Impact OÜ</span>
            <span className="hidden md:inline">•</span>
            <span>Registry Code: 16842011</span>
            <span className="hidden md:inline">•</span>
            <span>Harju maakond, Tallinn, Estonia</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            <span>ISO/IEC 27001 & SOC2 Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceHero;
