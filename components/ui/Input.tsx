import React from 'react';
import clsx from 'clsx';
import type { InputSize, InputState, ComponentBaseProps } from './types';

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, ComponentBaseProps {
  inputSize?: InputSize;
  state?: InputState;
  label?: string;
  error?: string;
  hint?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const sizeStyles = {
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-2.5 text-base',
};

const stateStyles = {
  default: 'border-neutral-600 focus:border-primary-500 focus:ring-1 focus:ring-primary-500/30',
  focus: 'border-primary-500 ring-1 ring-primary-500/30 bg-neutral-900/50',
  error: 'border-error-500 focus:border-error-600 focus:ring-1 focus:ring-error-500/30',
  success: 'border-success-500 focus:border-success-600 focus:ring-1 focus:ring-success-500/30',
  disabled: 'bg-neutral-800/50 border-neutral-700 text-neutral-500 cursor-not-allowed',
};

export const Input: React.FC<InputProps> = ({
  inputSize = 'md',
  state = 'default',
  label,
  error,
  hint,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className,
  testId,
  ariaLabel,
  disabled,
  ...props
}) => {
  const currentState = disabled ? 'disabled' : error ? 'error' : state;

  return (
    <div className={clsx('flex flex-col gap-1.5', fullWidth && 'w-full')}>
      {label && (
        <label className="text-label text-neutral-300 font-semibold">
          {label}
          {props.required && <span className="text-error-400 ml-1">*</span>}
        </label>
      )}

      <div className="relative flex items-center">
        {icon && iconPosition === 'left' && (
          <span className="absolute left-3 text-neutral-400 pointer-events-none flex-shrink-0">
            {icon}
          </span>
        )}

        <input
          className={clsx(
            'w-full rounded-lg border bg-neutral-900/50 text-neutral-100 placeholder-neutral-500 transition-all duration-150',
            'focus-ring',
            sizeStyles[inputSize],
            stateStyles[currentState],
            icon && iconPosition === 'left' && 'pl-10',
            icon && iconPosition === 'right' && 'pr-10',
            className
          )}
          disabled={disabled}
          data-testid={testId}
          aria-label={ariaLabel}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${props.id}-error` : hint ? `${props.id}-hint` : undefined}
          {...props}
        />

        {icon && iconPosition === 'right' && (
          <span className="absolute right-3 text-neutral-400 pointer-events-none flex-shrink-0">
            {icon}
          </span>
        )}
      </div>

      {error && (
        <p className="text-sm text-error-400 font-medium" id={`${props.id}-error`}>
          {error}
        </p>
      )}

      {hint && !error && (
        <p className="text-xs text-neutral-500" id={`${props.id}-hint`}>
          {hint}
        </p>
      )}
    </div>
  );
};

export default Input;
