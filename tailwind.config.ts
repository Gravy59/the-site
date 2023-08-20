import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import animate from 'tailwindcss-animate';

const leadingBase = (20 / 14).toFixed(9);

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontSize: {
			sm: ['0.75rem', { lineHeight: '1rem' }],
			base: ['0.875rem', { lineHeight: String(leadingBase) }],
			lg: ['1rem', { lineHeight: '1.5' }],
			xl: ['1.125rem', { lineHeight: '1.75rem' }],
			'2xl': ['1.25rem', { lineHeight: '1.75rem' }],
			'3xl': ['1.5rem', { lineHeight: '2rem' }],
			'4xl': ['1.875rem', { lineHeight: '2.25rem' }],
			'5xl': ['2.25rem', { lineHeight: '2.5rem' }],
			'6xl': ['3rem', { lineHeight: '1' }],
			'7xl': ['3.75rem', { lineHeight: '1' }],
			'8xl': ['4.5rem', { lineHeight: '1' }],
			'9xl': ['6rem', { lineHeight: '1' }],
			'10xl': ['8rem', { lineHeight: '1' }]
		},
		extend: {
			borderColor: ({ theme }) => ({
				...theme('colors'),
				DEFAULT: theme('colors.zinc.200', 'currentColor')
			}),
			fontFamily: {
				sans: ['Inter Variable', 'Inter', ...defaultTheme.fontFamily.sans]
			},
			lineHeight: {
				auto: 'calc(4px + 2ex)',
				base: leadingBase
			},
			spacing: {
				'8.5': '2.125rem'
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
	plugins: [animate]
} satisfies Config;
