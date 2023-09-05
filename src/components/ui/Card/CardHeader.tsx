import { HTMLAttributes, forwardRef } from 'react';

import { cn } from '..';

type Props = HTMLAttributes<HTMLDivElement>;

const CardHeader = forwardRef<HTMLDivElement, Props>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn('flex flex-col space-y-1.5 p-6', className)}
			{...props}
		/>
	),
);

CardHeader.displayName = 'CardHeader';

export { CardHeader };
