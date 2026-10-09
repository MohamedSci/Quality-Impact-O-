'use client';

import React from 'react';
import { Card, Button, Badge } from '@/components/ui';
import { CheckCircle2, ArrowRight, Zap, Shield } from 'lucide-react';

export interface CloudMarketplaceOption {
  provider?: 'aws' | 'azure' | 'gcp';
  id?: string;
  name: string;
  color?: string;
  description: string;
  deploymentMethod?: string;
  features?: string[];
  pricing?: string;
  sla?: string;
  href?: string;
  url?: string;
  listingUrl?: string;
  region?: string;
  badgeText?: string;
  accentColor?: string;
}

interface CloudMarketplaceCardProps {
  option?: CloudMarketplaceOption;
  marketplace?: CloudMarketplaceOption;
}

export const CloudMarketplaceCard: React.FC<CloudMarketplaceCardProps> = ({
  option,
  marketplace,
}) => {
  const data = option || marketplace;
  if (!data) return null;

  const provider = data.provider || data.id || 'cloud';
  const name = data.name;
  const color =
    data.color || (provider === 'aws' ? '#FF9900' : provider === 'azure' ? '#0078D4' : '#4285F4');
  const description = data.description;
  const href = data.href || data.url || data.listingUrl || '#';

  // Default features for legacy data
  const defaultFeatures: Record<string, string[]> = {
    aws: [
      'Auto-scaling container execution',
      'VPC network integration',
      'IAM role-based access control',
      'CloudWatch metrics & logs',
      'Lambda function triggers',
      'Direct AWS billing',
    ],
    azure: [
      'Native Azure Pipelines task',
      'Service Connection setup',
      'Multi-organization support',
      'RBAC full integration',
      'Azure DevOps billing',
      'Build analytics',
    ],
    gcp: [
      'Serverless Cloud Run',
      'GKE container orchestration',
      'Cloud IAM policies',
      'Pub/Sub event streaming',
      'Cloud Logging integration',
      'Custom metrics',
    ],
  };

  const features = data.features || defaultFeatures[provider] || [];
  const pricing =
    data.pricing ||
    (provider === 'aws' || provider === 'gcp'
      ? 'Compute-based + Runner fee'
      : 'Per-pipeline or Enterprise');
  const sla = data.sla || (provider === 'azure' ? '99.95% Uptime' : '99.99% Uptime');

  const getProviderLabel = (): string => {
    const labels: Record<string, string> = {
      aws: 'AWS',
      azure: 'Azure',
      gcp: 'GCP',
    };
    return labels[provider] || name;
  };

  return (
    <Card className="group relative border-2 border-slate-700 hover:border-slate-600 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Gradient Accent Line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: color }}
      />

      {/* Glow Effect on Hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
        style={{ backgroundColor: color }}
      />

      {/* Content */}
      <div className="relative z-10 p-8 space-y-6 flex flex-col flex-grow">
        {/* Header with Icon and Badge */}
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2 flex-grow">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: `${color}20`, borderLeft: `3px solid ${color}` }}
              >
                <span className="text-xl">{getProviderLabel().charAt(0)}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">{name}</h3>
                <p className="text-xs text-slate-400 mt-1">
                  {data.deploymentMethod || data.badgeText}
                </p>
              </div>
            </div>
            <Badge variant="info" size="sm" className="flex-shrink-0">
              {getProviderLabel()}
            </Badge>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
        </div>

        {/* Features */}
        {features.length > 0 && (
          <div className="space-y-3 flex-grow">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
              Included Features
            </p>
            <ul className="space-y-2">
              {features.slice(0, 5).map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color }} />
                  <span className="text-sm text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Metrics */}
        {(pricing || sla) && (
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-700">
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Zap className="w-3 h-3 text-yellow-400" />
                <p className="text-xs text-slate-500">Pricing</p>
              </div>
              <p className="text-sm font-medium text-slate-100">{pricing}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-emerald-400" />
                <p className="text-xs text-slate-500">SLA</p>
              </div>
              <p className="text-sm font-medium text-slate-100">{sla}</p>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <Button
          variant="solid"
          size="lg"
          className="w-full mt-6 group/btn text-white font-semibold transition-all duration-300 hover:shadow-lg"
          onClick={() => window.open(href, '_blank')}
          style={{
            backgroundColor: color,
            borderColor: color,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.9';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          <span className="flex items-center justify-center gap-2">
            Deploy on {getProviderLabel()}
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </span>
        </Button>

        {/* Region Info */}
        {data.region && (
          <p className="text-xs text-slate-500 text-center pt-2">Available in {data.region}</p>
        )}
      </div>
    </Card>
  );
};

export default CloudMarketplaceCard;
