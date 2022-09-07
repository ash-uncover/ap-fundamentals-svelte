import adapter from '@sveltejs/adapter-auto';
import path from 'path'
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
					alias: {
						// these are the aliases and paths to them
						'@components': path.resolve('./src/lib/components'),
						'@lib': path.resolve('./src/lib'),
						'@utils': path.resolve('./src/lib/utils')
					}
			}
	}
	}
};

export default config;
