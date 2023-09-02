import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Contructor for class in Tailwindcss
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export * from './Button';
