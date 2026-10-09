'use client';

import { Button } from './Button';
import React from 'react';
import type { ButtonVariant, SizeVariant, ColorVariant, ComponentBaseProps } from './types';

interface InteractiveButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>, ComponentBaseProps {
  variant?: ButtonVariant | 'primary' | 'secondary' | 'ghost';
  color?: ColorVariant;
  size?: SizeVariant;
  isLoading?: boolean;
  isDisabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  openInNewTab?: boolean;
}

export function InteractiveButton({
  href,
  onClick,
  openInNewTab = false,
  children,
  variant,
  color,
  size,
  isLoading,
  isDisabled,
  icon,
  iconPosition,
  fullWidth,
  className,
  testId,
  ariaLabel,
  ...htmlProps
}: InteractiveButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      if (openInNewTab) {
        window.open(href, '_blank');
      } else if (href.startsWith('mailto:')) {
        window.location.href = href;
      } else if (href.startsWith('http')) {
        window.open(href, '_blank');
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      color={color}
      size={size}
      isLoading={isLoading}
      isDisabled={isDisabled}
      icon={icon}
      iconPosition={iconPosition}
      fullWidth={fullWidth}
      className={className}
      testId={testId}
      ariaLabel={ariaLabel}
      {...htmlProps}
    >
      {children}
    </Button>
  );
}
