<script lang="ts">
	import { getContext } from 'svelte';

	export let href: string;
	export let label = href.slice(1);

	let currURL = '';
	const activeUrlStore = getContext('activeUrl') as {
		subscribe: (callback: (value: string) => void) => void;
	};
	activeUrlStore.subscribe((value) => {
		currURL = value;
	});

	$: active = currURL ? href === currURL : false;
</script>

<a
	{href}
	{...$$restProps}
	class="{active
		? 'bg-gradient-to-b from-zinc-300 to-zinc-200 text-zinc-600 shadow-[inset_0_3px_9px_theme(colors.black/0.075)]'
		: 'text-zinc-500 hover:text-zinc-800'} px-4 py-2.5 text-base leading-5 [text-shadow:0_1px_0_theme(colors.white/0.25)] md:py-4"
	>{label}</a
>
