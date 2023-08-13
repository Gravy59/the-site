<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { button } from '$lib/button';
	import { pbStore } from '$lib/pocketbase';
</script>

<div class="container px-4 mx-auto lg:max-w-6xl">
	<form
		use:enhance={() => {
			return async ({ result }) => {
				$pbStore.authStore.loadFromCookie(document.cookie);
				await applyAction(result);
			};
		}}
		method="POST"
		class="max-w-xs p-4 mx-auto space-y-2"
	>
		<h2 class="text-3xl mt-5 mb-2.5 font-bold tracking-tight">Log in</h2>
		<div class="-space-y-px">
			<input
				required
				class="relative block w-full transition rounded-none rounded-t focus:z-10 focus:shadow-[0_0_8px] focus:shadow-blue-400/60 focus:ring-1 focus:ring-inset focus:border-blue-400 focus:outline-none focus:ring-black/5 border-zinc-300 placeholder:text-zinc-400 text-zinc-600"
				placeholder="you"
				type="text"
				name="username"
			/>

			<input
				required
				class="relative block w-full transition rounded-none rounded-b focus:z-10 focus:shadow-[0_0_8px] focus:shadow-blue-400/60 focus:ring-1 focus:ring-inset focus:border-blue-400 focus:outline-none focus:ring-black/5 border-zinc-300 placeholder:text-zinc-400 text-zinc-600"
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
