import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Tell SvelteKit to also handle .md files as components
	extensions: ['.svelte', '.md'],

	// Preprocessors run in order: mdsvex first (converts .md to Svelte), then vitePreprocess
	preprocess: [
		mdsvex({
			extensions: ['.md']
		}),
		vitePreprocess()
	],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;
