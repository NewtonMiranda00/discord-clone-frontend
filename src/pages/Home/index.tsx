import { ModeToggle } from '@/components';
import { Outlet } from 'react-router-dom';

// import { SVGLogo } from '@/assets';

export function Home() {
	// <img src={SVGLogo} />
	return (
		<div>
			<h1>Home</h1>
			<ModeToggle />
			<Outlet />
		</div>
	);
}
