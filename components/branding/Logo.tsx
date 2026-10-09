import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
  className?: string;
}

const sizeMap = {
  sm: { icon: 'h-7 w-7', text: 'text-lg', sub: 'text-[10px]' },
  md: { icon: 'h-9 w-9', text: 'text-xl', sub: 'text-[11px]' },
  lg: { icon: 'h-12 w-12', text: 'text-2xl', sub: 'text-xs' },
};

/**
 * BrandMark — Quality Impact OÜ shield-check mark.
 * Renders an inline SVG (crisp at any DPI, zero external requests).
 */
export const BrandMark: React.FC<{ className?: string; title?: string }> = ({
  className = 'h-9 w-9',
  title = 'QA-PaaS by Quality Impact OÜ',
}) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    role="img"
    aria-label={title}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="qip-g" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#22D3EE" />
        <stop offset="0.55" stopColor="#0EA5E9" />
        <stop offset="1" stopColor="#6366F1" />
      </linearGradient>
    </defs>
    <rect x="1.5" y="1.5" width="45" height="45" rx="12" fill="#0F172A" />
    <rect x="1.5" y="1.5" width="45" height="45" rx="12" stroke="url(#qip-g)" strokeWidth="1.5" />
    <path
      d="M24 8 L37 13.5 V24 C37 32.5 31.5 38.5 24 42 C16.5 38.5 11 32.5 11 24 V13.5 Z"
      stroke="url(#qip-g)"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 24.5 L22 29 L31 18.5"
      stroke="url(#qip-g)"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'full', className }) => {
  const dims = sizeMap[size];

  if (variant === 'icon') {
    return (
      <div className={`flex items-center justify-center ${className ?? ''}`}>
        <BrandMark className={dims.icon} />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <BrandMark className={dims.icon} />
      <div className="flex flex-col leading-none">
        <span className={`${dims.text} font-bold font-display text-slate-50 tracking-tight`}>
          QA&#8209;PaaS
        </span>
        <span className={`${dims.sub} font-mono text-slate-400 mt-1 tracking-wide`}>
          Quality Impact
        </span>
      </div>
    </div>
  );
};

export default Logo;
