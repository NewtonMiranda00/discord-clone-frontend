import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Login } from '@/pages';
// import { Redirect } from '.';

export function BaseRoutes() {
	const auth = true;

	return (
		<>
			<Routes>
				<Route path="/" element={auth ? <Home /> : <Navigate to="/login" />}>
					<Route path="/test" element={<h1>Test</h1>} />
				</Route>
				<Route
					path="/login"
					element={!auth ? <Login /> : <Navigate to="/" />}
				/>
				<Route path="*" element={<h1>Not found</h1>} />
			</Routes>
		</>
	);
}
