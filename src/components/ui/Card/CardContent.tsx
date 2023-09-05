import { HTMLAttributes, forwardRef } from 'react';

import { cn } from '..';

type Props = HTMLAttributes<HTMLDivElement>;

const CardContent = forwardRef<HTMLDivElement, Props>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
	),
);

CardContent.displayName = 'CardContent';

export { CardContent };
