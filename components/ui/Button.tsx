import React from 'react';
import clsx from 'clsx';
import type { ButtonVariant, SizeVariant, ColorVariant, ComponentBaseProps } from './types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ComponentBaseProps {
  variant?: ButtonVariant | 'primary' | 'secondary' | 'ghost';
  color?: ColorVariant;
  size?: SizeVariant;
  isLoading?: boolean;
  isDisabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantStyles = {
  solid: {
    primary:
      'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 disabled:bg-neutral-600 disabled:text-neutral-400',
    secondary:
      'bg-neutral-700 text-neutral-50 hover:bg-neutral-600 active:bg-neutral-500 disabled:bg-neutral-700 disabled:text-neutral-500',
    accent:
      'bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700 disabled:bg-neutral-600 disabled:text-neutral-400',
    success:
      'bg-success-500 text-white hover:bg-success-600 active:bg-success-700 disabled:bg-neutral-600 disabled:text-neutral-400',
    error:
      'bg-error-500 text-white hover:bg-error-600 active:bg-error-700 disabled:bg-neutral-600 disabled:text-neutral-400',
    warning:
      'bg-warning-500 text-neutral-900 hover:bg-warning-600 active:bg-warning-700 disabled:bg-neutral-600 disabled:text-neutral-400',
    info: 'bg-info-500 text-white hover:bg-info-600 active:bg-info-700 disabled:bg-neutral-600 disabled:text-neutral-400',
    neutral:
      'bg-neutral-500 text-white hover:bg-neutral-400 active:bg-neutral-300 disabled:bg-neutral-700 disabled:text-neutral-500',
  },
  outline: {
    primary:
      'border-2 border-primary-500 text-primary-500 hover:bg-primary-500/10 active:bg-primary-500/20 disabled:border-neutral-600 disabled:text-neutral-500',
    secondary:
      'border-2 border-neutral-600 text-neutral-300 hover:bg-neutral-700/50 active:bg-neutral-600/50 disabled:border-neutral-700 disabled:text-neutral-600',
    accent:
      'border-2 border-accent-500 text-accent-400 hover:bg-accent-500/10 active:bg-accent-500/20 disabled:border-neutral-600 disabled:text-neutral-500',
    success:
      'border-2 border-success-500 text-success-400 hover:bg-success-500/10 active:bg-success-500/20 disabled:border-neutral-600 disabled:text-neutral-500',
    error:
      'border-2 border-error-500 text-error-400 hover:bg-error-500/10 active:bg-error-500/20 disabled:border-neutral-600 disabled:text-neutral-500',
    warning:
      'border-2 border-warning-500 text-warning-400 hover:bg-warning-500/10 active:bg-warning-500/20 disabled:border-neutral-600 disabled:text-neutral-500',
    info: 'border-2 border-info-500 text-info-400 hover:bg-info-500/10 active:bg-info-500/20 disabled:border-neutral-600 disabled:text-neutral-500',
    neutral:
      'border-2 border-neutral-600 text-neutral-300 hover:bg-neutral-600/20 active:bg-neutral-600/40 disabled:border-neutral-700 disabled:text-neutral-600',
  },
  soft: {
    primary:
      'bg-primary-500/15 text-primary-300 hover:bg-primary-500/25 active:bg-primary-500/35 disabled:bg-neutral-700/20 disabled:text-neutral-600',
    secondary:
      'bg-neutral-700/40 text-neutral-200 hover:bg-neutral-700/60 active:bg-neutral-700/80 disabled:bg-neutral-800/20 disabled:text-neutral-600',
    accent:
      'bg-accent-500/15 text-accent-300 hover:bg-accent-500/25 active:bg-accent-500/35 disabled:bg-neutral-700/20 disabled:text-neutral-600',
    success:
      'bg-success-500/15 text-success-300 hover:bg-success-500/25 active:bg-success-500/35 disabled:bg-neutral-700/20 disabled:text-neutral-600',
    error:
      'bg-error-500/15 text-error-300 hover:bg-error-500/25 active:bg-error-500/35 disabled:bg-neutral-700/20 disabled:text-neutral-600',
    warning:
      'bg-warning-500/15 text-warning-600 hover:bg-warning-500/25 active:bg-warning-500/35 disabled:bg-neutral-700/20 disabled:text-neutral-600',
    info: 'bg-info-500/15 text-info-300 hover:bg-info-500/25 active:bg-info-500/35 disabled:bg-neutral-700/20 disabled:text-neutral-600',
    neutral:
      'bg-neutral-700/30 text-neutral-300 hover:bg-neutral-700/50 active:bg-neutral-700/70 disabled:bg-neutral-800/20 disabled:text-neutral-600',
  },
  ghost: {
    primary:
      'text-primary-400 hover:text-primary-300 hover:bg-primary-500/10 active:bg-primary-500/20 disabled:text-neutral-600',
    secondary:
      'text-neutral-400 hover:text-neutral-300 hover:bg-neutral-700/30 active:bg-neutral-700/50 disabled:text-neutral-600',
    accent:
      'text-accent-400 hover:text-accent-300 hover:bg-accent-500/10 active:bg-accent-500/20 disabled:text-neutral-600',
    success:
      'text-success-400 hover:text-success-300 hover:bg-success-500/10 active:bg-success-500/20 disabled:text-neutral-600',
    error:
      'text-error-400 hover:text-error-300 hover:bg-error-500/10 active:bg-error-500/20 disabled:text-neutral-600',
    warning:
      'text-warning-400 hover:text-warning-300 hover:bg-warning-500/10 active:bg-warning-500/20 disabled:text-neutral-600',
    info: 'text-info-400 hover:text-info-300 hover:bg-info-500/10 active:bg-info-500/20 disabled:text-neutral-600',
    neutral:
      'text-neutral-400 hover:text-neutral-300 hover:bg-neutral-700/20 active:bg-neutral-700/40 disabled:text-neutral-600',
  },
  link: {
    primary:
      'text-primary-400 hover:text-primary-300 underline hover:underline-offset-2 disabled:text-neutral-600 no-underline hover:underline',
    secondary:
      'text-neutral-400 hover:text-neutral-300 underline hover:underline-offset-2 disabled:text-neutral-600 no-underline hover:underline',
    accent:
      'text-accent-400 hover:text-accent-300 underline hover:underline-offset-2 disabled:text-neutral-600 no-underline hover:underline',
    success:
      'text-success-400 hover:text-success-300 underline hover:underline-offset-2 disabled:text-neutral-600 no-underline hover:underline',
    error:
      'text-error-400 hover:text-error-300 underline hover:underline-offset-2 disabled:text-neutral-600 no-underline hover:underline',
    warning:
      'text-warning-400 hover:text-warning-300 underline hover:underline-offset-2 disabled:text-neutral-600 no-underline hover:underline',
    info: 'text-info-400 hover:text-info-300 underline hover:underline-offset-2 disabled:text-neutral-600 no-underline hover:underline',
    neutral:
      'text-neutral-400 hover:text-neutral-300 underline hover:underline-offset-2 disabled:text-neutral-600 no-underline hover:underline',
  },
};

const sizeStyles = {
  xs: 'px-2 py-1 text-xs font-medium',
  sm: 'px-3 py-1.5 text-sm font-medium',
  md: 'px-4 py-2 text-sm font-semibold',
  lg: 'px-5 py-3 text-base font-semibold',
  xl: 'px-6 py-3.5 text-base font-semibold',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  size = 'md',
  isLoading = false,
  isDisabled = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  children,
  className,
  testId,
  ariaLabel,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-150 focus-ring disabled:cursor-not-allowed';

  // Map simple variant names to primary color
  const colorVariant =
    variant === 'primary' ? 'primary' : variant === 'secondary' ? 'secondary' : 'primary';
  const variantType =
    variant === 'primary' || variant === 'secondary'
      ? 'solid'
      : (variant as keyof typeof variantStyles);

  const variantClasses =
    variantStyles[variantType]?.[
      colorVariant as keyof (typeof variantStyles)[keyof typeof variantStyles]
    ] || variantStyles.solid.primary;

  return (
    <button
      className={clsx(
        baseStyles,
        variantClasses,
        sizeStyles[size],
        fullWidth && 'w-full',
        isLoading && 'opacity-70 cursor-not-allowed',
        isDisabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={isDisabled || isLoading}
      data-testid={testId}
      aria-label={ariaLabel}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {icon && iconPosition === 'left' && !isLoading && (
        <span className="flex-shrink-0">{icon}</span>
      )}

      <span>{children}</span>

      {icon && iconPosition === 'right' && !isLoading && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </button>
  );
};

export default Button;
