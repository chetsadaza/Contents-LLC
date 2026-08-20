import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility for combining conditional CSS classes with Tailwind merge
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
