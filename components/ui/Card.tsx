import React from 'react';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'elevated';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  variant = 'default',
}) => {
  const baseStyles = 'bg-slate-surface border border-slate-border rounded-xl p-6 transition-all duration-200';
  const hoverStyles = hover ? 'hover:border-primary hover:-translate-y-1' : '';
  const variantStyles = {
    default: '',
    elevated: 'shadow-lg',
  };

  return (
    <div className={clsx(baseStyles, hoverStyles, variantStyles[variant], className)}>
      {children}
    </div>
  );
};

export default Card;
