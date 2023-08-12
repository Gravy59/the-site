import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			borderColor: ({ theme }) => ({
				...theme('colors'),
				DEFAULT: theme('colors.zinc.200', 'currentColor')
			}),
			fontFamily: {
				sans: ['Inter Variable', 'Inter', ...defaultTheme.fontFamily.sans]
			},
			lineHeight: {
				auto: 'calc(4px + 2ex)'
			}
		}
	},
	plugins: []
} satisfies Config;
