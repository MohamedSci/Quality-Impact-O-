import React from 'react';
import clsx from 'clsx';

interface BadgeProps {
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  children,
  icon,
  className,
}) => {
  const variantStyles = {
    default: 'badge-default',
    success: 'badge-success',
    error: 'badge-error',
    warning: 'badge-warning',
    info: 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-neural/10 border border-accent-neural/40 text-xs font-semibold text-accent-neural',
  };

  return (
    <span className={clsx(variantStyles[variant], className)}>
      {icon && icon}
      {children}
    </span>
  );
};

export default Badge;
