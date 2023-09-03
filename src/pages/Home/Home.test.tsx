import { screen, render } from '@testing-library/react';
import { Home } from '.';

describe('Home component', () => {
	it('should render', () => {
		render(<Home />);
		screen.getByText(/Hello World/i);
	});
});
