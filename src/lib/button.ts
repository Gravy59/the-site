import { tv } from 'tailwind-variants';

export const button = tv({
	base: 'inline-flex items-center shadow-sm justify-center bg-gradient-to-b hover:[background-position:0_-15px] active:shadow-inner active:bg-none bg-repeat-x touch-manipulation border border-transparent select-none',
	variants: {
		color: {
			default:
				'text-zinc-800 bg-white border-zinc-300 from-white to-zinc-200 hover:border-zinc-400 hover:bg-zinc-200 active:border-zinc-300 active:bg-zinc-200 [text-shadow:0_1px_0_theme(colors.white)]',
			primary:
				'text-white bg-cyan-600 border-cyan-800 from-cyan-600 to-cyan-800 hover:border-cyan-900 hover:bg-cyan-800 active:border-cyan-800 active:bg-cyan-900 [text-shadow:0_-1px_0_theme(colors.black/0.2)]',
			success:
				'text-white bg-green-400 border-green-600 from-green-400 to-green-600 hover:border-green-700 hover:bg-green-600 active:border-green-700 active:bg-green-600 [text-shadow:0_-1px_0_theme(colors.black/0.2)]',
			info: 'text-white bg-blue-400 border-cyan-500 from-blue-300 to-sky-500 hover:border-cyan-600 hover:bg-sky-500 active:border-cyan-500 active:bg-sky-500 [text-shadow:0_-1px_0_theme(colors.black/0.2)]',
			warning:
				'text-white bg-orange-400 border-amber-600 from-orange-400 to-amber-600 hover:border-amber-700 hover:bg-amber-600 active:border-amber-700 active:bg-amber-700 [text-shadow:0_-1px_0_theme(colors.black/0.2)]',
			danger:
				'text-white bg-red-400 border-red-600 from-red-400 to-red-600 hover:border-red-700 hover:bg-red-600 active:border-red-700 active:bg-red-700 [text-shadow:0_-1px_0_theme(colors.black/0.2)]'
		},
		size: {
			lg: 'py-2.5 px-4 text-lg/snug rounded-md',
			default: 'py-1.5 px-3 text-sm/6 rounded',
			sm: 'py-1.5 px-2.5 text-xs/normal rounded-[0.1875rem]'
		}
	},

	defaultVariants: {
		size: 'default',
		color: 'default'
	}
});
