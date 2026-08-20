import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = 'primary',
      size = 'md',
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-[0.98]';

    const variants = {
      primary:
        'bg-cyan-600 dark:bg-cyan-500 text-white hover:bg-cyan-700 dark:hover:bg-cyan-600 focus:ring-cyan-500 shadow-sm shadow-cyan-200 dark:shadow-none',
      secondary:
        'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 focus:ring-slate-400',
      outline:
        'border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 focus:ring-cyan-500',
      ghost:
        'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white focus:ring-slate-400',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-1.5 gap-1.5',
      md: 'text-sm px-4.5 py-2.5 gap-2',
      lg: 'text-base px-6 py-3 gap-2.5',
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
