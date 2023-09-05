import { PropsWithChildren } from 'react';

type Props = JSX.IntrinsicElements['div'] & PropsWithChildren;

export function Container({ children, className, ...props }: Props) {
	return (
		<div
			className={`flex justify-center items-center w-screen h-screen ${className}`}
			{...props}
		>
			{children}
		</div>
	);
}
