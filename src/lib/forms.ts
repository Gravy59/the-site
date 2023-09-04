import { tv } from 'tailwind-variants';

export const input = tv({
	base: 'block h-8.5 w-full border border-zinc-300 bg-white px-3 py-1.5 text-base leading-base text-zinc-600 shadow-[inset_0_1px_1px_theme(colors.black/0.075)] transition placeholder:text-zinc-400 focus:border-blue-400 focus:border-blue-400 focus:shadow-[inset_0_1px_1px_theme(colors.black/0.075),0_0_8px_theme(colors.blue.400/60%)] focus:outline-none',
	variants: {
		radius: {
			default: 'rounded',
			children: 'relative rounded-none first:rounded-t last:rounded-b focus:z-10'
		}
	},
	defaultVariants: {
		radius: 'default'
	}
});

export const label = tv({
	base: 'mb-1.5 inline-block max-w-full font-medium',
	variants: {
		required: {
			true: 'after:text-red-500 after:content-["*"]'
		}
	}
});

export const optionSelect = tv({
	slots: {
		root: 'relative my-2.5 block text-base',
		label: 'mb-0 inline-block min-h-[theme(spacing.5)] max-w-full cursor-pointer pl-5 font-normal',
		check: 'absolute -ml-5 mt-1 leading-none'
	}
});
