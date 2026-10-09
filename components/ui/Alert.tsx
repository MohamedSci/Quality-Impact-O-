import React from 'react';
import clsx from 'clsx';
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';
import type { AlertVariant, ComponentBaseProps } from './types';

interface AlertProps extends ComponentBaseProps {
  variant?: AlertVariant;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClose?: () => void;
  closeable?: boolean;
}

const variantStyles = {
  success: {
    container: 'bg-success-500/10 border border-success-500/30 text-success-300',
    title: 'text-success-200 font-semibold',
    description: 'text-success-300/80 text-sm',
    icon: 'text-success-400',
  },
  error: {
    container: 'bg-error-500/10 border border-error-500/30 text-error-300',
    title: 'text-error-200 font-semibold',
    description: 'text-error-300/80 text-sm',
    icon: 'text-error-400',
  },
  warning: {
    container: 'bg-warning-500/10 border border-warning-500/30 text-warning-700',
    title: 'text-warning-700 font-semibold',
    description: 'text-warning-700/80 text-sm',
    icon: 'text-warning-600',
  },
  info: {
    container: 'bg-info-500/10 border border-info-500/30 text-info-300',
    title: 'text-info-200 font-semibold',
    description: 'text-info-300/80 text-sm',
    icon: 'text-info-400',
  },
  neutral: {
    container: 'bg-neutral-700/20 border border-neutral-600/30 text-neutral-300',
    title: 'text-neutral-200 font-semibold',
    description: 'text-neutral-400 text-sm',
    icon: 'text-neutral-400',
  },
};

const iconMap = {
  success: <CheckCircle2 className="w-5 h-5" />,
  error: <AlertCircle className="w-5 h-5" />,
  warning: <AlertTriangle className="w-5 h-5" />,
  info: <Info className="w-5 h-5" />,
  neutral: <AlertCircle className="w-5 h-5" />,
};

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  description,
  children,
  icon,
  onClose,
  closeable = false,
  className,
  testId,
  ariaLabel,
}) => {
  const styles = variantStyles[variant];

  return (
    <div
      className={clsx('rounded-lg p-4 flex gap-3 items-start', styles.container, className)}
      data-testid={testId}
      aria-label={ariaLabel}
      role="alert"
    >
      <div className={clsx('flex-shrink-0 mt-0.5', styles.icon)}>{icon || iconMap[variant]}</div>

      <div className="flex-1 min-w-0">
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p className={styles.description}>{description}</p>}
        {children && <div className={styles.description}>{children}</div>}
      </div>

      {closeable && (
        <button
          onClick={onClose}
          className={clsx(
            'flex-shrink-0 rounded hover:bg-black/20 p-1 transition-colors',
            styles.icon
          )}
          aria-label="Close alert"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Alert;
