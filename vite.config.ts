import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { FontaineTransform } from 'fontaine';

export default defineConfig({
	plugins: [
		sveltekit(),
		FontaineTransform.vite({
			fallbacks: [
				'-apple-system',
				'BlinkMacSystemFont',
				'avenir next',
				'avenir',
				'segoe ui',
				'helvetica neue',
				'helvetica',
				'Cantarell',
				'Ubuntu',
				'roboto',
				'noto',
				'arial',
				'sans-serif'
			]
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
