<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
	import '@fontsource-variable/inter';
</script>

<header class="sticky inset-x-0 top-0 z-50 w-full border-b bg-zinc-50 p-4 text-base">
	<nav
		aria-label="Global"
		class="container mx-auto flex items-center justify-between gap-x-6 px-4 lg:max-w-6xl"
	>
		<a href="/" class="text-xl font-bold italic text-zinc-600">The Site</a>
		<ul class="flex items-center gap-x-1.5">
			<li>
				<a href="/" class="rounded-md px-2 py-1 font-semibold hover:bg-zinc-800 hover:text-white"
					>Home</a
				>
			</li>
			{#if $page.data.session}
				<li>
					<a
						href="/profile"
						class="rounded-md px-2 py-1 font-semibold hover:bg-zinc-800 hover:text-white">Profile</a
					>
				</li>
				<li>
					<a
						href="/logout"
						data-sveltekit-preload-data="off"
						class="rounded-md px-2 py-1 font-semibold hover:bg-zinc-800 hover:text-white">Log out</a
					>
				</li>
			{:else}
				<li>
					<a
						href="/join"
						class="rounded-md px-2 py-1 font-semibold hover:bg-zinc-800 hover:text-white">Join</a
					>
				</li>
				<li>
					<a
						href="/enter"
						class="rounded-md px-2 py-1 font-semibold hover:bg-zinc-800 hover:text-white">Log in</a
					>
				</li>
			{/if}
		</ul>
	</nav>
</header>

<main class="flex-1">
	<slot />
</main>

<footer class="container mx-auto px-4 py-5 text-base lg:max-w-6xl">
	<hr class="mb-5" />
	Copyright &copy; {new Date().getFullYear()} United States Government. All Rights Reserved.
</footer>

<div
	class="fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white"
>
	<div class="block sm:hidden">xs</div>
	<div class="hidden sm:block md:hidden">sm</div>
	<div class="hidden md:block lg:hidden">md</div>
	<div class="hidden lg:block xl:hidden">lg</div>
	<div class="hidden xl:block 2xl:hidden">xl</div>
	<div class="hidden 2xl:block">2xl</div>
</div>
