import { tv } from 'tailwind-variants';

export const heading = tv({
	base: 'mt-5 mb-2.5 font-semibold',
	variants: {
		size: {
			display: 'text-4xl md:text-7xl',
			1: 'text-4xl',
			2: 'text-3xl'
		},
		tight: {
			true: 'tracking-tight'
		}
	}
});
