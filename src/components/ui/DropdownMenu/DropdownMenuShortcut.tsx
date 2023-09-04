import { HTMLAttributes } from 'react';

import { cn } from '..';

const DropdownMenuShortcut = ({
	className,
	...props
}: HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span
			className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
			{...props}
		/>
	);
};

DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

export { DropdownMenuShortcut };
