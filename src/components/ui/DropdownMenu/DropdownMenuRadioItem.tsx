import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { RadioItem, ItemIndicator } from '@radix-ui/react-dropdown-menu';
import { Circle } from 'lucide-react';

import { cn } from '..';

type Props = ComponentPropsWithoutRef<typeof RadioItem>;

const DropdownMenuRadioItem = forwardRef<ElementRef<typeof RadioItem>, Props>(
	({ className, children, ...props }, ref) => (
		<RadioItem
			ref={ref}
			className={cn(
				`
				relative flex cursor-default select-none items-center rounded-sm py-1.5
				pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent
				focus:text-accent-foreground data-[disabled]:pointer-events-none
				data-[disabled]:opacity-50
			`,
				className,
			)}
			{...props}
		>
			<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
				<ItemIndicator>
					<Circle className="h-2 w-2 fill-current" />
				</ItemIndicator>
			</span>
			{children}
		</RadioItem>
	),
);

DropdownMenuRadioItem.displayName = RadioItem.displayName;

export { DropdownMenuRadioItem };
