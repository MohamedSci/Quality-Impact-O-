/**
 * @file components/ui/types.ts
 * @description Shared TypeScript types for UI components
 */

export type ColorVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'neutral';

export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'soft' | 'link';

export type BadgeVariant =
  | 'default'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'accent'
  | 'neutral';

export type InputSize = 'sm' | 'md' | 'lg';

export type InputState = 'default' | 'focus' | 'error' | 'success' | 'disabled';

export type AlertVariant = 'success' | 'error' | 'warning' | 'info' | 'neutral';

export interface ComponentBaseProps {
  className?: string;
  testId?: string;
  ariaLabel?: string;
}
