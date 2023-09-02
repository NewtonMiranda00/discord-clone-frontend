import { VariantProps } from 'class-variance-authority';
import { Variants } from './variants.ts';

export interface Props
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof Variants> {
	asChild?: boolean;
}
