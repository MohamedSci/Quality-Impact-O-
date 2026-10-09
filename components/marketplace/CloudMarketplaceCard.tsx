'use client';

import React from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Card } from '@/components/ui';
import clsx from 'clsx';

export interface CloudMarketplaceOption {
  id: 'aws' | 'azure' | 'gcp';
  name: string;
  badgeText: string;
  listingUrl: string;
  accentColor: string;
  description: string;
}

interface CloudMarketplaceCardProps {
  marketplace: CloudMarketplaceOption;
}

export const CloudMarketplaceCard: React.FC<CloudMarketplaceCardProps> = ({ marketplace: m }) => {
  return (
    <Card
      hover
      className={clsx(
        'flex flex-col justify-between group',
        'border-2 border-slate-border hover:border-opacity-0 hover:bg-gradient-to-br hover:from-slate-surface hover:to-slate-surface/50'
      )}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span
            className={clsx(
              'text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md border',
              m.accentColor
            )}
          >
            {m.name}
          </span>
          <ShieldCheck className="w-5 h-5 text-status-pass group-hover:scale-110 transition-transform" />
        </div>

        <h2 className="text-xl font-bold font-sans text-slate-100 group-hover:text-primary transition-colors">
          {m.badgeText}
        </h2>

        <p className="text-sm text-slate-400 font-sans leading-normal">{m.description}</p>
      </div>

      <div className="pt-6 mt-6 border-t border-slate-border/60 flex items-center justify-between">
        <span className="text-xs font-mono text-slate-500">Unified Invoice</span>
        <a
          href={m.listingUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Access QA-PaaS on ${m.name}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold font-sans text-primary hover:text-primary-light focus-ring transition-colors duration-200"
        >
          Access Listing
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </Card>
  );
};

export default CloudMarketplaceCard;
