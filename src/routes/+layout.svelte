<script lang="ts">
	import { page } from '$app/stores';
	import Nav from '$lib/Nav.svelte';
	import NavLink from '$lib/NavLink.svelte';
	import { createDisclosure } from 'svelte-headlessui';
	import '../app.css';
	import '@fontsource-variable/inter';

	$: activeUrl = $page.url.pathname;

	const navigation = {
		base: [{ label: 'Home', href: '/', preload: undefined }],
		authed: [
			{ label: 'Programs', href: '/posts', preload: undefined },
			{ label: 'Profile', href: '/profile', preload: undefined },
			{ label: 'Log out', href: '/logout', preload: 'off' }
		],
		unAuthed: [
			{ label: 'Join', href: '/join', preload: 'off' },
			{ label: 'Log in', href: '/enter', preload: 'off' }
		]
	};

	const mobileNav = createDisclosure({ label: 'Global navigation' });
</script>

<nav
	aria-label="Global"
	class="sticky inset-x-0 top-0 z-50 border-b border-zinc-200 bg-gradient-to-b from-white to-zinc-100 shadow-[inset_0_1px_0_theme(colors.white/0.15),0_1px_5px_theme(colors.black/0.075)]"
>
	<div class="container flex justify-between md:justify-start">
		<a
			href="/"
			class="-ml-4 p-4 text-2xl italic leading-5 text-zinc-500 [text-shadow:0_1px_0_theme(colors.white/0.25)]"
			>The Site</a
		>
		<Nav {activeUrl}>
			{#each navigation.base as link}
				<NavLink href={link.href} label={link.label} data-sveltekit-preload-data={link.preload} />
			{/each}

			{#if $page.data.session}
				{#each navigation.authed as link}
					<NavLink href={link.href} label={link.label} data-sveltekit-preload-data={link.preload} />
				{/each}
			{:else}
				{#each navigation.unAuthed as link}
					<NavLink href={link.href} label={link.label} data-sveltekit-preload-data={link.preload} />
				{/each}
			{/if}
		</Nav>
		<button
			use:mobileNav.button
			class="self-center rounded border border-zinc-300 px-2 py-1 hover:bg-zinc-300 md:hidden"
			><span class="sr-only">Toggle navigation</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 text-zinc-500"
				fill="currentColor"
				viewBox="0 0 256 256"
				><path
					d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
				></path></svg
			>
		</button>
	</div>

	{#if $mobileNav.expanded}
		<Nav mobile {activeUrl}>
			{#each navigation.base as link}
				<NavLink href={link.href} label={link.label} data-sveltekit-preload-data={link.preload} />
			{/each}

			{#if $page.data.session}
				{#each navigation.authed as link}
					<NavLink href={link.href} label={link.label} data-sveltekit-preload-data={link.preload} />
				{/each}
			{:else}
				{#each navigation.unAuthed as link}
					<NavLink href={link.href} label={link.label} data-sveltekit-preload-data={link.preload} />
				{/each}
			{/if}
		</Nav>
	{/if}
</nav>

<main class="flex-1">
	<slot />
</main>

<footer class="container py-5 text-base lg:max-w-6xl">
	<hr class="mb-5" />
	Copyright &copy; {new Date().getFullYear()} United States Government. All Rights Reserved.
</footer>

<div
	class="text-xs fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-white"
>
	<div class="block sm:hidden">xs</div>
	<div class="hidden sm:block md:hidden">sm</div>
	<div class="hidden md:block lg:hidden">md</div>
	<div class="hidden lg:block xl:hidden">lg</div>
	<div class="hidden xl:block 2xl:hidden">xl</div>
	<div class="hidden 2xl:block">2xl</div>
</div>
