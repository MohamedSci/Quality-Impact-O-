'use client';

import { Button } from '@/components/ui';
import { ArrowRight } from 'lucide-react';

interface MarketplaceLinksProps {
  layout?: 'grid' | 'stack';
  size?: 'sm' | 'lg';
}

export function MarketplaceLinks({ layout = 'grid', size = 'lg' }: MarketplaceLinksProps) {
  const links = [
    {
      variant: 'primary' as const,
      href: 'https://aws.amazon.com/marketplace/pp/prodview-qapaas',
      label: 'AWS Marketplace',
    },
    {
      variant: 'secondary' as const,
      href: 'https://marketplace.visualstudio.com/items?itemName=qualityimpact.qa-paas',
      label: 'Azure DevOps',
    },
    {
      variant: 'ghost' as const,
      href: 'https://console.cloud.google.com/marketplace/product/qualityimpact/qa-paas',
      label: 'Google Cloud',
    },
  ];

  const gridClass =
    layout === 'grid' ? 'grid grid-cols-1 md:grid-cols-3 gap-4' : 'flex flex-col gap-3';
  const widthClass = layout === 'grid' ? 'w-full' : 'w-full';

  return (
    <div className={gridClass}>
      {links.map((link) => (
        <Button
          key={link.label}
          variant={link.variant}
          size={size}
          className={widthClass}
          onClick={() => window.open(link.href, '_blank')}
        >
          <span className="flex items-center justify-center gap-2">
            {link.label}
            <ArrowRight className="w-4 h-4" />
          </span>
        </Button>
      ))}
    </div>
  );
}
