import { HTMLAttributes, forwardRef } from 'react';

import { cn } from '..';

type Props = HTMLAttributes<HTMLParagraphElement>;

const CardDescription = forwardRef<HTMLParagraphElement, Props>(
	({ className, ...props }, ref) => (
		<p
			ref={ref}
			className={cn('text-sm text-muted-foreground', className)}
			{...props}
		/>
	),
);

CardDescription.displayName = 'CardDescription';

export { CardDescription };
