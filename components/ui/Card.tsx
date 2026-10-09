import React from 'react';
import clsx from 'clsx';
import type { ComponentBaseProps } from './types';

interface CardProps extends ComponentBaseProps {
  children: React.ReactNode;
  hover?: boolean;
  interactive?: boolean;
  variant?: 'default' | 'elevated' | 'flat';
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
}

const paddingStyles = {
  xs: 'p-2',
  sm: 'p-3',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
  none: 'p-0',
};

const variantStyles = {
  default: 'bg-neutral-800 border border-neutral-700',
  elevated: 'bg-neutral-800 border border-neutral-700 shadow-lg',
  flat: 'bg-neutral-800/50 border-0',
};

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  interactive = false,
  variant = 'default',
  padding = 'md',
  testId,
  ariaLabel,
}) => {
  const baseStyles = 'rounded-xl transition-all duration-200';
  const hoverStyles = hover
    ? 'hover:border-primary-500/50 hover:shadow-glow hover:-translate-y-1'
    : '';
  const interactiveStyles = interactive ? 'cursor-pointer hover:bg-neutral-700/50' : '';

  return (
    <div
      className={clsx(
        baseStyles,
        variantStyles[variant],
        paddingStyles[padding],
        hoverStyles,
        interactiveStyles,
        className
      )}
      data-testid={testId}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
};

export default Card;
