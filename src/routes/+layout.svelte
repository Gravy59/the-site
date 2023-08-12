<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/inter';
</script>

<header class="sticky top-0 z-50 inset-x-0 bg-zinc-50 p-4 w-full border-b text-sm">
	<nav
		aria-label="Global"
		class="flex justify-between items-center gap-x-6 container lg:max-w-6xl mx-auto"
	>
		<a href="/" class="text-xl font-bold italic text-zinc-600">The Site</a>
		<ul class="flex gap-x-1.5 items-center">
			<li>
				<a href="#" class="hover:bg-zinc-800 hover:text-white font-semibold py-1 px-2 rounded-md"
					>Home</a
				>
			</li>
			<li>
				<a href="#" class="hover:bg-zinc-800 hover:text-white font-semibold py-1 px-2 rounded-md"
					>Home</a
				>
			</li>
			<li>
				<a href="#" class="hover:bg-zinc-800 hover:text-white font-semibold py-1 px-2 rounded-md"
					>Home</a
				>
			</li>
		</ul>
	</nav>
</header>

<main class="flex-1">
	<slot />
</main>

<footer class="container lg:max-w-6xl px-4 mx-auto py-5 text-sm">
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
