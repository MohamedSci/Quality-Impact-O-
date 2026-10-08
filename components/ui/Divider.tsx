import React from 'react';
import clsx from 'clsx';
import type { ComponentBaseProps } from './types';

interface DividerProps extends ComponentBaseProps {
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'default' | 'subtle' | 'strong';
  label?: string;
  labelPosition?: 'left' | 'center' | 'right';
}

const spacingStyles = {
  xs: 'my-2',
  sm: 'my-3',
  md: 'my-6',
  lg: 'my-8',
  xl: 'my-12',
};

const colorStyles = {
  default: 'border-neutral-700',
  subtle: 'border-neutral-800/50',
  strong: 'border-neutral-600',
};

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  spacing = 'md',
  color = 'default',
  label,
  labelPosition = 'center',
  className,
  testId,
  ariaLabel,
}) => {
  if (orientation === 'vertical') {
    return (
      <div
        className={clsx(
          'w-px h-full',
          colorStyles[color],
          className
        )}
        data-testid={testId}
        aria-label={ariaLabel}
      />
    );
  }

  if (label) {
    const alignmentStyles = {
      left: 'flex-row gap-3',
      center: 'flex-row gap-3',
      right: 'flex-row-reverse gap-3',
    };

    return (
      <div
        className={clsx(
          'flex items-center',
          spacingStyles[spacing],
          alignmentStyles[labelPosition],
          className
        )}
        data-testid={testId}
        aria-label={ariaLabel}
      >
        <div
          className={clsx(
            'flex-1 h-px',
            colorStyles[color]
          )}
        />
        <span className="text-sm text-neutral-500 font-medium px-2 whitespace-nowrap">
          {label}
        </span>
        <div
          className={clsx(
            'flex-1 h-px',
            colorStyles[color]
          )}
        />
      </div>
    );
  }

  return (
    <div
      className={clsx(
        'h-px border-t',
        spacingStyles[spacing],
        colorStyles[color],
        className
      )}
      data-testid={testId}
      aria-label={ariaLabel}
    />
  );
};

export default Divider;
