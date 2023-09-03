// import { ReactElement } from 'react';
import {
	BrowserRouter,
	// Navigate,
	// Route,
	// RouteProps,
	// useLocation,
} from 'react-router-dom';

// type BaseProps = Omit<RouteProps, 'path' | 'element'>;

// interface Props extends BaseProps {
// 	to: string;
// }

// export function Redirect({ to, ...props }: Props): ReactElement {
// 	const { pathname } = useLocation();
// 	return (
// 		<Route
// 			path="/test"
// 			element={<Navigate to="/" />}
// 			{...(props as RouteProps)}
// 		/>
// 	);
// }

import { BaseRoutes } from './Routes.tsx';

export function AppRoutes() {
	return (
		<BrowserRouter>
			<BaseRoutes />
		</BrowserRouter>
	);
}
