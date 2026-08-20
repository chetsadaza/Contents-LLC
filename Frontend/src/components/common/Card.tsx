import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className,
  children,
  hoverEffect = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        'bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs p-6 transition-colors duration-200',
        hoverEffect && 'transition-all duration-200 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
