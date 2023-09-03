<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const activeUrlStore = writable('');
	export let activeUrl = '';
	export let mobile = false;
	setContext('activeUrl', activeUrlStore);
	$: {
		activeUrlStore.set(activeUrl);
	}
</script>

<div
	class={mobile
		? 'absolute inset-x-0 z-40 flex flex-col border-y border-zinc-200 bg-gradient-to-b from-white to-zinc-50 py-2 shadow-[inset_0_1px_0_theme(colors.white/0.15),0_1px_5px_theme(colors.black/0.075)] md:hidden'
		: 'hidden flex-1 md:flex'}
>
	<slot />
</div>
