'use client';

import React from 'react';
import { CloudMarketplaceCard, type CloudMarketplaceOption } from './CloudMarketplaceCard';

export const MarketplaceCardsSection: React.FC = () => {
  const marketplaceOptions: CloudMarketplaceOption[] = [
    {
      provider: 'aws',
      name: 'AWS Marketplace',
      color: '#FF9900',
      description:
        'Deploy QA-PaaS runners on AWS Fargate or AWS Batch with automatic scaling and pay-as-you-go pricing.',
      deploymentMethod: 'AWS Fargate / Batch',
      features: [
        'Auto-scaling container execution',
        'VPC network integration',
        'IAM role-based access control',
        'CloudWatch metrics & logs',
        'Lambda function triggers',
        'Direct AWS billing',
      ],
      pricing: 'Compute-based + Runner fee',
      sla: '99.99% Uptime',
      href: 'https://aws.amazon.com/marketplace/pp/prodview-qapaas',
      region: 'All major AWS regions',
    },
    {
      provider: 'azure',
      name: 'Azure DevOps',
      color: '#0078D4',
      description:
        'Native Azure Pipelines task with Service Connection support for seamless CI/CD integration.',
      deploymentMethod: 'Container Instances / AKS',
      features: [
        'Native Azure Pipelines task',
        'Service Connection setup',
        'Multi-organization support',
        'RBAC full integration',
        'Azure DevOps billing',
        'Build analytics',
      ],
      pricing: 'Per-pipeline or Enterprise',
      sla: '99.95% Uptime',
      href: 'https://marketplace.visualstudio.com/items?itemName=qualityimpact.qa-paas',
      region: 'Global via Azure Regions',
    },
    {
      provider: 'gcp',
      name: 'Google Cloud',
      color: '#4285F4',
      description:
        'Containerized execution via Google Cloud Run and GKE with full cloud-native capabilities.',
      deploymentMethod: 'Cloud Run / GKE',
      features: [
        'Serverless Cloud Run',
        'GKE container orchestration',
        'Cloud IAM policies',
        'Pub/Sub event streaming',
        'Cloud Logging integration',
        'Custom metrics',
      ],
      pricing: 'Compute-based + Runner fee',
      sla: '99.99% Uptime',
      href: 'https://console.cloud.google.com/marketplace/product/qualityimpact/qa-paas',
      region: 'All Google Cloud regions',
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12">
      <div className="container-max space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100">
            Deploy on Your Preferred Cloud
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            QA-PaaS is available on all major cloud platforms with unified billing and enterprise
            support
          </p>
        </div>

        {/* Marketplace Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketplaceOptions.map((option) => (
            <CloudMarketplaceCard key={option.provider} option={option} />
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="bg-navy-800/40 border border-slate-700 rounded-lg p-8 md:p-12 space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-slate-100">Why Choose QA-PaaS?</h3>
            <p className="text-slate-400">Unified experience across all cloud platforms</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Unified Procurement',
                description: 'Consolidated billing through existing cloud agreements',
              },
              {
                title: 'No Vendor Lock-in',
                description: 'Deploy simultaneously across multiple cloud providers',
              },
              {
                title: 'Enterprise Support',
                description: '24/7 dedicated support with SLA guarantees',
              },
              {
                title: 'Compliance Ready',
                description: 'All certifications (ISO, SOC2, GDPR) pre-verified',
              },
              {
                title: 'Cost Optimization',
                description: 'Volume discounts and reserved capacity options',
              },
              {
                title: 'Zero Migration Risk',
                description: 'Rollback-compatible deployment process',
              },
            ].map((benefit) => (
              <div key={benefit.title} className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-cyan-accent/10 border border-cyan-accent/30 flex items-center justify-center">
                  <div className="w-6 h-6 rounded border-2 border-cyan-accent" />
                </div>
                <h4 className="font-semibold text-slate-100">{benefit.title}</h4>
                <p className="text-sm text-slate-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceCardsSection;
