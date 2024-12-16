import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Arvo', ...defaultTheme.fontFamily.sans],
				serif: ['Nanum Myeongjo', ...defaultTheme.fontFamily.serif]
			},
			lineHeight: {
				'extra-loose': '2.5'
			}
		}
	},

	plugins: []
} satisfies Config;
