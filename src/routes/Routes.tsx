import { Route, Routes } from 'react-router-dom';
import { Home } from '@/pages';
// import { Redirect } from '.';

export function BaseRoutes() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<h1>Not found</h1>} />
			</Routes>
		</>
	);
}
