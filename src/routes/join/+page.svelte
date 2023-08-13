<script lang="ts">
	import { goto } from '$app/navigation';
	import { button } from '$lib/button';
	import { pb } from '$lib/pocketbase';

	let username: string;
	let displayName: string;
	let password: string;
	let passwordConfirm: string;

	async function signUp() {
		try {
			const data = {
				username,
				password,
				passwordConfirm,
				name: displayName
			};
			const createdUser = await pb.collection('users').create(data);
			await pb.collection('users').authWithPassword(username, password);
			goto('/profile');
		} catch (err) {
			console.error(err);
		}
	}
</script>

<div class="container px-4 mx-auto lg:max-w-6xl">
	<form on:submit|preventDefault class="max-w-xs p-4 mx-auto space-y-2">
		<h2 class="text-3xl mt-5 mb-2.5 font-bold tracking-tight">Join</h2>
		<div class="-space-y-px">
			<input
				required
				class="relative block w-full transition rounded-none rounded-t focus:z-10 focus:shadow-[0_0_8px] focus:shadow-blue-400/60 focus:ring-1 focus:ring-inset focus:border-blue-400 focus:outline-none focus:ring-black/5 border-zinc-300 placeholder:text-zinc-400 text-zinc-600"
				placeholder="Username"
				type="text"
				bind:value={username}
			/>
			<input
				required
				class="relative block w-full transition rounded-none focus:z-10 focus:shadow-[0_0_8px] focus:shadow-blue-400/60 focus:ring-1 focus:ring-inset focus:border-blue-400 focus:outline-none focus:ring-black/5 border-zinc-300 placeholder:text-zinc-400 text-zinc-600"
				placeholder="Display Name"
				type="text"
				bind:value={displayName}
			/>
			<input
				required
				class="relative block w-full transition rounded-none focus:z-10 focus:shadow-[0_0_8px] focus:shadow-blue-400/60 focus:ring-1 focus:ring-inset focus:border-blue-400 focus:outline-none focus:ring-black/5 border-zinc-300 placeholder:text-zinc-400 text-zinc-600"
				placeholder="Password"
				type="password"
				bind:value={password}
			/>
			<input
				required
				class="relative block w-full transition rounded-none rounded-b focus:z-10 focus:shadow-[0_0_8px] focus:shadow-blue-400/60 focus:ring-1 focus:ring-inset focus:border-blue-400 focus:outline-none focus:ring-black/5 border-zinc-300 placeholder:text-zinc-400 text-zinc-600"
				placeholder="Confirm password"
				type="password"
				bind:value={passwordConfirm}
			/>
		</div>
		<button class={button({ color: 'primary', class: 'w-full text-lg' })} on:click={signUp}
			>Join</button
		>
		<p>
			Already have an account? <a href="/enter" class="text-blue-500 hover:underline">Log in</a>
		</p>
	</form>
</div>
