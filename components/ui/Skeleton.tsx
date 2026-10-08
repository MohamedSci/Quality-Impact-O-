import React from 'react';
import clsx from 'clsx';
import type { ComponentBaseProps } from './types';

interface SkeletonProps extends ComponentBaseProps {
  count?: number;
  height?: string;
  width?: string;
  circle?: boolean;
  variant?: 'text' | 'card' | 'avatar';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  count = 1,
  height = 'h-4',
  width = 'w-full',
  circle = false,
  variant = 'text',
  className,
  testId,
}) => {
  const baseStyles = 'bg-neutral-700/30 animate-pulse';

  const variantStyles = {
    text: clsx(height, width, 'rounded'),
    card: 'w-full h-48 rounded-lg',
    avatar: 'w-12 h-12 rounded-full',
  };

  const items = Array.from({ length: count }).map((_, i) => (
    <div
      key={i}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        circle && 'rounded-full',
        i > 0 && 'mt-2',
        className
      )}
      data-testid={testId}
    />
  ));

  return <>{items}</>;
};

export default Skeleton;
