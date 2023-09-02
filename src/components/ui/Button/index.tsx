import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { Variants } from './variants.ts';
import { cn } from '..';
import { Props } from './interface.ts';

const Button = forwardRef<HTMLButtonElement, Props>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Component = asChild ? Slot : 'button';
		return (
			<Component
				className={cn(Variants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);

Button.displayName = 'Button';

export type ButtonProps = Props;
export { Button, Variants };
