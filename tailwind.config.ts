import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

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
			},
			animation: {
				'progress-bar-stripes': 'progress-bar-stripes 2s linear infinite'
			},
			keyframes: {
				'progress-bar-stripes': {
					'0%': {
						backgroundPosition: '40px 0'
					},
					'100%': {
						backgroundPosition: '0 0'
					}
				}
			}
		}
	},
	plugins: [forms]
} satisfies Config;
