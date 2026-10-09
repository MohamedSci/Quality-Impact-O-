import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CloudProviderIcon, type CloudProvider } from './CloudProviderLogo';

interface MarketplaceLinksProps {
  layout?: 'grid' | 'stack';
  size?: 'sm' | 'lg';
}

interface MarketplaceLink {
  provider: CloudProvider;
  label: string;
  href: string;
}

const LINKS: MarketplaceLink[] = [
  {
    provider: 'aws',
    label: 'AWS Marketplace',
    href: 'https://aws.amazon.com/marketplace/pp/prodview-qapaas',
  },
  {
    provider: 'azure',
    label: 'Azure DevOps',
    href: 'https://marketplace.visualstudio.com/items?itemName=qualityimpact.qa-paas',
  },
  {
    provider: 'gcp',
    label: 'Google Cloud',
    href: 'https://console.cloud.google.com/marketplace/product/qualityimpact/qa-paas',
  },
];

const PROVIDER_ACCENTS: Record<CloudProvider, string> = {
  aws: 'hover:border-[#FF9900] hover:text-[#FF9900]',
  azure: 'hover:border-[#0078D4] hover:text-[#0078D4]',
  gcp: 'hover:border-[#4285F4] hover:text-[#4285F4]',
};

export function MarketplaceLinks({ layout = 'grid', size = 'lg' }: MarketplaceLinksProps) {
  const sizeClass = size === 'lg' ? 'px-6 py-4 text-base' : 'px-4 py-2.5 text-sm';

  return (
    <div
      className={
        layout === 'grid' ? 'grid grid-cols-1 gap-4 sm:grid-cols-3' : 'flex flex-col gap-3'
      }
    >
      {LINKS.map((link) => (
        <a
          key={link.provider}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-slate-700 bg-slate-800/60 font-semibold text-slate-200 transition-all duration-200 hover:bg-slate-800 hover:shadow-glow-cyan focus-ring active:scale-[0.98] ${sizeClass} ${PROVIDER_ACCENTS[link.provider]}`}
        >
          <CloudProviderIcon provider={link.provider} className="h-5 w-5" />
          {link.label}
          {layout === 'grid' ? (
            <ArrowUpRight className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          ) : (
            <ArrowRight className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-1" />
          )}
        </a>
      ))}
    </div>
  );
}
