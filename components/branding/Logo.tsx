import React from 'react';
import { Terminal } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
}

const sizeMap = {
  sm: { icon: 'w-6 h-6', text: 'text-lg' },
  md: { icon: 'w-8 h-8', text: 'text-xl' },
  lg: { icon: 'w-10 h-10', text: 'text-2xl' },
};

export const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'full' }) => {
  const dims = sizeMap[size];

  if (variant === 'icon') {
    return (
      <div className="flex items-center justify-center">
        <Terminal className={`${dims.icon} text-primary`} />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Terminal className={`${dims.icon} text-primary`} />
      <div className="flex flex-col">
        <span className={`${dims.text} font-bold font-sans text-slate-100`}>QA-PaaS</span>
        <span className="text-xs font-mono text-slate-400">Quality Impact OÜ</span>
      </div>
    </div>
  );
};

export default Logo;
