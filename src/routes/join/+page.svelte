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
		<h2 class="text-3xl font-bold tracking-tight">Join</h2>
		<div class="-space-y-px">
			<input
				required
				class={input({ radius: 'children', class: 'text-lg' })}
				placeholder="Username"
				type="text"
				name="username"
			/>
			<input
				required
				class={input({ radius: 'children', class: 'text-lg' })}
				placeholder="Display name"
				type="text"
				name="display_name"
			/>
			<!-- <input
				required
				class="relative block w-full transition rounded-none focus:z-10 focus:shadow-[0_0_8px] focus:shadow-blue-400/60 focus:ring-1 focus:ring-inset focus:border-blue-400 focus:outline-none focus:ring-black/5 border-zinc-300 placeholder:text-zinc-400 text-zinc-600"
				placeholder="Display Name"
				type="text"
				name="name"
			/> -->
			<input
				required
				class={input({ radius: 'children', class: 'text-lg' })}
				placeholder="Password"
				type="password"
				name="password"
			/>
			<input
				required
				class={input({ radius: 'children', class: 'text-lg' })}
				placeholder="Confirm password"
				type="password"
				name="passwordConfirm"
			/>
		</div>
		<button class={button({ color: 'primary', class: 'w-full text-lg' })}>Join</button>
		<p>
			Already have an account? <a href="/enter" class="text-blue-500 hover:underline">Log in</a>
		</p>
	</form>
</div>
