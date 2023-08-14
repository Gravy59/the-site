import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import animate from 'tailwindcss-animate';

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
			},
			typography: ({ theme }) => ({
				sm: {
					css: {
						lineHeight: theme('lineHeight.auto'),
						h1: {
							fontSize: theme('fontSize.4xl[0]'),
							lineHeight: theme('lineHeight.auto'),
							fontWeight: theme('fontWeight.semibold'),
							marginTop: theme('spacing.5'),
							marginBottom: theme('spacing[2.5]')
						},
						h2: {
							fontSize: theme('fontSize.3xl[0]'),
							lineHeight: theme('lineHeight.auto'),
							fontWeight: theme('fontWeight.semibold'),
							marginTop: theme('spacing.5'),
							marginBottom: theme('spacing[2.5]')
						},
						h3: {
							fontSize: theme('fontSize.2xl[0]'),
							lineHeight: theme('lineHeight.auto'),
							fontWeight: theme('fontWeight.semibold'),
							marginTop: theme('spacing.5'),
							marginBottom: theme('spacing[2.5]')
						},
						p: {
							marginBottom: theme('spacing[2.5]'),
							lineHeight: theme('lineHeight.auto')
						},
						'ul, ol': {
							marginBottom: theme('spacing[2.5]'),
							marginTop: theme('spacing.0'),
							paddingLeft: theme('spacing.10'),
							li: {
								margin: theme('spacing.0'),
								padding: theme('spacing.0')
							}
						},
						'ul ul': {
							listStyleType: 'circle'
						},
						'ul ul ul': {
							listStyleType: 'square'
						},

						'::marker': {
							fontVariantNumeric: 'tabular-nums'
						},
						'--tw-prose-bullets': theme('colors.zinc[800]'),
						'--tw-prose-counters': theme('colors.zinc[800]')
					}
				}
			})
		}
	},
	plugins: [animate, forms, typography]
} satisfies Config;
