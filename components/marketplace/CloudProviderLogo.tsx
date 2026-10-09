import React from 'react';

export type CloudProvider = 'aws' | 'azure' | 'gcp';

const PROVIDER_META: Record<CloudProvider, { name: string; color: string; chip: string }> = {
  aws: { name: 'AWS', color: '#FF9900', chip: 'bg-[#FF9900]/10 border-[#FF9900]/30' },
  azure: { name: 'Azure', color: '#0078D4', chip: 'bg-[#0078D4]/10 border-[#0078D4]/30' },
  gcp: { name: 'Google Cloud', color: '#4285F4', chip: 'bg-[#4285F4]/10 border-[#4285F4]/30' },
};

interface CloudProviderIconProps {
  provider: CloudProvider;
  className?: string;
  /** Renders the provider name next to the icon */
  showLabel?: boolean;
}

/**
 * Simplified, crisp inline brand marks for the three cloud marketplaces.
 * No external images — renders at any size without layout shift.
 */
export const CloudProviderIcon: React.FC<CloudProviderIconProps> = ({
  provider,
  className = 'h-6 w-6',
  showLabel = false,
}) => {
  const meta = PROVIDER_META[provider];

  const mark =
    provider === 'aws' ? (
      <svg viewBox="0 0 24 24" className={className} role="img" aria-label="AWS" fill="none">
        <path
          d="M17.4 14.7a4.5 4.5 0 0 0-.38-8.97 6 6 0 0 0-11.6 1.18A4.5 4.5 0 0 0 7 15.3h10.4a1 1 0 0 0 0-.6Z"
          fill={meta.color}
        />
        <path
          d="M8.2 18.4c2.4 2.1 5.2 2.1 7.6 0"
          stroke={meta.color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ) : provider === 'azure' ? (
      <svg
        viewBox="0 0 24 24"
        className={className}
        role="img"
        aria-label="Microsoft Azure"
        fill="none"
      >
        <path
          d="M12.9 3.6 7.6 19.4h4.4l1.2-3.1h5.1l1.2 3.1h4.1L18.3 3.6h-5.4Zm-1.9 8.6 2-5.1 2 5.1h-4Z"
          fill={meta.color}
        />
      </svg>
    ) : (
      <svg
        viewBox="0 0 24 24"
        className={className}
        role="img"
        aria-label="Google Cloud"
        fill="none"
      >
        <path
          d="M16.3 15.2a4 4 0 0 0 .35-8 5.4 5.4 0 0 0-10.5 1.05A3.95 3.95 0 0 0 7.5 16h8.8v-.8Z"
          fill={meta.color}
        />
        <path d="M6.4 16.6h13" stroke={meta.color} strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );

  if (!showLabel) return mark;

  return (
    <span className="inline-flex items-center gap-2">
      {mark}
      <span className="text-sm font-medium text-slate-300">{meta.name}</span>
    </span>
  );
};

interface CloudProviderChipProps {
  provider: CloudProvider;
  className?: string;
}

/** A small bordered chip with provider mark + name (used in trust strips). */
export const CloudProviderChip: React.FC<CloudProviderChipProps> = ({
  provider,
  className = '',
}) => {
  const meta = PROVIDER_META[provider];

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 ${meta.chip} ${className}`}
    >
      <CloudProviderIcon provider={provider} className="h-4 w-4" />
      <span className="text-xs font-semibold text-slate-200">{meta.name}</span>
    </span>
  );
};

export default CloudProviderIcon;
