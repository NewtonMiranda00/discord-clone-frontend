import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { Label } from '@radix-ui/react-dropdown-menu';

import { cn } from '..';

type Props = ComponentPropsWithoutRef<typeof Label> & {
	inset?: boolean;
};

const DropdownMenuLabel = forwardRef<ElementRef<typeof Label>, Props>(
	({ className, inset, ...props }, ref) => (
		<Label
			ref={ref}
			className={cn(
				'px-2 py-1.5 text-sm font-semibold',
				inset && 'pl-8',
				className,
			)}
			{...props}
		/>
	),
);

DropdownMenuLabel.displayName = Label.displayName;

export { DropdownMenuLabel };
