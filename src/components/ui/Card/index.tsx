import { HTMLAttributes, forwardRef } from 'react';

import { cn } from '..';

type Props = HTMLAttributes<HTMLDivElement>;

const Card = forwardRef<HTMLDivElement, Props>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				'rounded-lg border bg-card text-card-foreground shadow-sm',
				className,
			)}
			{...props}
		/>
	),
);

Card.displayName = 'Card';

export { Card };
export { CardHeader } from './CardHeader.tsx';
export { CardFooter } from './CardFooter.tsx';
export { CardTitle } from './CardTitle.tsx';
export { CardDescription } from './CardDescription.tsx';
export { CardContent } from './CardContent.tsx';
