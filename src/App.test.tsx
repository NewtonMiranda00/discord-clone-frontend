import { render, screen } from '@testing-library/react';
import { App } from '../src/App.tsx';

describe('App', () => {
	it('renders headline', () => {
		render(<App />);
		screen.getByText(/Hello World/i);
	});
});
