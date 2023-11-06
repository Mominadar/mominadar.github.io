import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import UnoCSS from 'unocss/vite';

const config: UserConfig = {
	base: "/mominadar.github.io/",
	plugins: [UnoCSS(), sveltekit()]
};

export default config;
