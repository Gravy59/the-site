<script lang="ts">
	import { tv, type VariantProps } from 'tailwind-variants';

	export let message: string;
	export let fadeIn = false;
	export let lead: string | null = null;
	export let dismissable = false;
	export let dismissed = false;

	const alertVariants = tv({
		base: 'mx-auto mb-5 flex items-center justify-between rounded border border-[color:color-mix(in_srgb,var(--alert-bg),black_5%)] bg-gradient-to-b from-[--alert-bg] to-[color-mix(in_srgb,var(--alert-bg),black_7.5%)] bg-repeat-x p-4 text-base lg:max-w-6xl',
		variants: {
			color: {
				info: 'border-[color:color-mix(in_srgb,var(--alert-bg),black_7%)] text-cyan-700 [--alert-bg:theme(colors.blue.100)]',
				success: 'text-green-700 [--alert-bg:theme(colors.green.200)]',
				warning: 'text-yellow-800 [--alert-bg:theme(colors.yellow.100)]',
				error: 'text-red-700 [--alert-bg:theme(colors.red.100)]'
			},
			fadeIn: {
				true: 'duration-500 animate-in fade-in zoom-in-95 slide-in-from-bottom'
			}
		}
	});

	export let color: VariantProps<typeof alertVariants>['color'] = 'info';
</script>

<div role="alert" class={alertVariants({ color, fadeIn })}>
	<span
		>{#if lead}<strong>{lead}</strong>{/if}
		{message}</span
	>
	{#if dismissable}
		<button
			on:click={() => (dismissed = true)}
			class="inline-flex items-center align-middle text-2xl font-bold leading-none text-black opacity-20 [text-shadow:0_1px_0_theme(colors.white)]"
			><span class="sr-only">Dismiss</span><span aria-hidden>&times;</span></button
		>
	{/if}
</div>
