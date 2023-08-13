<script lang="ts">
	import User from '$lib/User.svelte';
	import { pbStore } from '$lib/pocketbase';
	import '../app.css';
	import '@fontsource-variable/inter';
	pbStore.set('http://127.0.0.1:8090');
</script>

<header class="sticky inset-x-0 top-0 z-50 w-full p-4 text-sm border-b bg-zinc-50">
	<nav
		aria-label="Global"
		class="container flex items-center justify-between px-4 mx-auto gap-x-6 lg:max-w-6xl"
	>
		<a href="/" class="text-xl italic font-bold text-zinc-600">The Site</a>
		<ul class="flex gap-x-1.5 items-center">
			<li>
				<a href="/" class="px-2 py-1 font-semibold rounded-md hover:bg-zinc-800 hover:text-white"
					>Home</a
				>
			</li>
			<User>
				<li>
					<a
						href="/profile"
						class="px-2 py-1 font-semibold rounded-md hover:bg-zinc-800 hover:text-white">Profile</a
					>
				</li>
				<svelte:fragment slot="signedout">
					<li>
						<a
							href="/join"
							class="px-2 py-1 font-semibold rounded-md hover:bg-zinc-800 hover:text-white">Join</a
						>
					</li>
					<li>
						<a
							href="/enter"
							class="px-2 py-1 font-semibold rounded-md hover:bg-zinc-800 hover:text-white"
							>Log in</a
						>
					</li>
				</svelte:fragment>
			</User>
		</ul>
	</nav>
</header>

<main class="flex-1">
	<slot />
</main>

<footer class="container px-4 py-5 mx-auto text-sm lg:max-w-6xl">
	<hr class="mb-5" />
	Copyright &copy; {new Date().getFullYear()} United States Government. All Rights Reserved.
</footer>

<div
	class="fixed z-50 flex items-center justify-center w-6 h-6 p-3 font-mono text-xs text-white bg-gray-800 rounded-full bottom-1 left-1"
>
	<div class="block sm:hidden">xs</div>
	<div class="hidden sm:block md:hidden">sm</div>
	<div class="hidden md:block lg:hidden">md</div>
	<div class="hidden lg:block xl:hidden">lg</div>
	<div class="hidden xl:block 2xl:hidden">xl</div>
	<div class="hidden 2xl:block">2xl</div>
</div>
