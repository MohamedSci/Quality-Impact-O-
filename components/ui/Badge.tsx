import React from 'react';
import clsx from 'clsx';
import type { BadgeVariant, SizeVariant, ComponentBaseProps } from './types';

interface BadgeProps extends ComponentBaseProps {
  variant?: BadgeVariant;
  size?: SizeVariant;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const variantStyles = {
  default: 'bg-neutral-700/40 border border-neutral-600 text-neutral-300',
  success: 'bg-success-500/15 border border-success-500/40 text-success-300',
  error: 'bg-error-500/15 border border-error-500/40 text-error-300',
  warning: 'bg-warning-500/15 border border-warning-500/40 text-warning-300',
  info: 'bg-info-500/15 border border-info-500/40 text-info-300',
  accent: 'bg-accent-500/15 border border-accent-500/40 text-accent-300',
  neutral: 'bg-neutral-700/30 border border-neutral-600/40 text-neutral-300',
};

const sizeStyles = {
  xs: 'px-2 py-0.5 text-xs',
  sm: 'px-2.5 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
  lg: 'px-4 py-2 text-sm',
  xl: 'px-5 py-2.5 text-base',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  icon,
  children,
  className,
  testId,
  ariaLabel,
}) => {
  const baseStyles = 'inline-flex items-center gap-1.5 rounded-full font-medium transition-colors';

  return (
    <span
      className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      data-testid={testId}
      aria-label={ariaLabel}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
