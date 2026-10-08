'use client';

import React from 'react';
import Script from 'next/script';
import { Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
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
    <section className="relative w-full bg-slate-bg text-white pt-16 pb-24 px-6 md:px-12 overflow-hidden">
      {/* Dynamic SEO JSON-LD */}
      <Script
        id="qa-paas-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <div className="container-max space-y-12">
        {/* Corporate Header & Product Identifier */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-surface border border-slate-border text-xs font-mono text-accent-neural">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Quality Impact OÜ // Enterprise QA-PaaS Platform</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-sans text-slate-100 leading-tight">
            AI-Orchestrated Software Testing. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-accent-neural">
              Available on All Cloud Marketplaces.
            </span>
          </h1>

          <p className="text-lg text-slate-400 font-sans leading-relaxed">
            Provision QA-PaaS directly through your existing AWS, Azure, or Google Cloud enterprise agreement. Unified billing, high-compute test execution, and zero infrastructure friction.
          </p>
        </div>

        {/* Cloud Marketplace Routing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MARKETPLACES.map((m) => (
            <CloudMarketplaceCard key={m.id} marketplace={m} />
          ))}
        </div>

        {/* Corporate Legal & Compliance Footer Ribbon */}
        <div className="pt-8 border-t border-slate-border/60 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© {new Date().getFullYear()} Quality Impact OÜ</span>
            <span className="hidden md:inline">•</span>
            <span>Registry Code: 16842011</span>
            <span className="hidden md:inline">•</span>
            <span>Harju maakond, Tallinn, Estonia</span>
          </div>
          <div className="flex items-center gap-2 text-status-pass">
            <CheckCircle2 className="w-4 h-4" />
            <span>ISO/IEC 27001 & SOC2 Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceHero;
