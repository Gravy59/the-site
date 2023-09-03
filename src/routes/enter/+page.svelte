<script lang="ts">
	import { button } from '$lib/button';
	import { enhance } from '$app/forms';

	import type { ActionData } from './$types';
	import { input } from '$lib/forms';

	export let form: ActionData;
</script>

<div class="container">
	<form use:enhance method="POST" class="mx-auto max-w-xs space-y-2 p-4">
		{#if form?.message}
			<p class="text-base font-medium text-red-500">{form.message}</p>
		{/if}
		<h2 class="text-3xl font-bold tracking-tight">Log in</h2>
		<div class="-space-y-px">
			<input
				required
				class={input({ radius: 'children', class: 'text-lg' })}
				placeholder="you"
				type="text"
				name="username"
			/>

			<input
				required
				class={input({ radius: 'children', class: 'text-lg' })}
				placeholder="•••••••••"
				type="password"
				name="password"
			/>
		</div>

		<button class={button({ color: 'primary', class: 'w-full text-lg' })}>Log in</button>
		<p>
			No account? <a href="/join" class="text-blue-500 hover:underline">Join</a>
		</p>
	</form>
</div>
