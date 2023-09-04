import { Separator } from '@radix-ui/react-dropdown-menu';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { cn } from '..';

type Props = ComponentPropsWithoutRef<typeof Separator>;

const DropdownMenuSeparator = forwardRef<ElementRef<typeof Separator>, Props>(
	({ className, ...props }, ref) => (
		<Separator
			ref={ref}
			className={cn('-mx-1 my-1 h-px bg-muted', className)}
			{...props}
		/>
	),
);

DropdownMenuSeparator.displayName = Separator.displayName;

export { DropdownMenuSeparator };
