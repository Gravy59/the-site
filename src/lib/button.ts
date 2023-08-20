import { tv } from 'tailwind-variants';

export const button = tv({
	base: [
		'relative isolate inline-flex items-center justify-center text-base text-white [text-shadow:0_-1px_0_theme(colors.black/0.2)]',
		'after:shadow-[shadow:inset_0_1px_0_theme(colors.white/0.15),theme(boxShadow.DEFAULT)]',
		'border border-transparent',
		'before:absolute before:-inset-px before:-z-10 before:rounded-md before:bg-[color-mix(in_srgb,var(--button-bg),black_14%)]',
		'after:absolute after:inset-0 after:-z-10 after:bg-gradient-to-b after:from-[--button-bg] after:to-[color-mix(in_srgb,var(--button-bg),black_12%)]',
		'after:hover:from-[color-mix(in_srgb,var(--button-bg),black_5%)] after:hover:to-[color-mix(in_srgb,var(--button-bg),black_17%)]',
		'after:active:bg-[color-mix(in_srgb,var(--button-bg),black_12%)] after:active:bg-none after:active:shadow-[inset_0_3px_5px_theme(colors.black/0.125z)]'
	],
	variants: {
		color: {
			default: 'text-zinc-950 [--button-bg:white] [text-shadow:0_1px_0_theme(colors.white)]',
			primary: '[--button-bg:theme(colors.cyan.600)]',
			success: '[--button-bg:theme(colors.green.500)]',
			info: '[--button-bg:theme(colors.sky.400)]',
			warning: '[--button-bg:theme(colors.orange.400)]',
			danger: '[--button-bg:theme(colors.red.500)]'
		},
		size: {
			lg: 'px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing[2.5])-1px)] text-lg leading-snug before:rounded-md after:rounded-[calc(theme(borderRadius.md)-1px)]',
			default:
				'px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] leading-base before:rounded after:rounded-[calc(theme(borderRadius.DEFAULT)-1px)]',
			sm: 'px-[calc(theme(spacing[2.5])-1px)] py-[calc(theme(spacing[1.5])-1px)] text-sm/normal before:rounded-[0.1875rem] after:rounded-[calc(0.1875rem-1px)]'
		}
	},

	defaultVariants: {
		size: 'default',
		color: 'default'
	}
});
