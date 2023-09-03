import { UserConfig, defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

interface ViteConfig extends UserConfig {
	test: {
		environment: string;
		setupFiles: string[];
		testMatch: string[];
		globals: boolean;
	};
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		environment: 'jsdom',
		setupFiles: ['./tests/setup.ts'],
		testMatch: ['./tests/**/*.test.tsx'],
		globals: true,
	},
	resolve: {
		alias: {
			'@/ui': path.resolve(__dirname, 'src', 'components', 'ui'),
			'@': path.resolve(__dirname, 'src'),
		},
	},
} as ViteConfig);
