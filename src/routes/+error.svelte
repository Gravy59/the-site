<script>
	import { page } from '$app/stores';
	import { button } from '$lib/button';
</script>

<section class="py-8 mb-8 bg-zinc-100 md:py-12 text-zinc-800">
	<div class="px-4 mx-auto container lg:max-w-6xl">
		<h1 class="text-4xl mt-5 mb-2.5 font-semibold md:text-7xl tracking-tight">
			{$page.status}
		</h1>
		<p class="mb-2.5 text-xl">
			{$page.error?.message}
		</p>
		<a href="/" class={button({ size: 'lg' })}>Go back home &raquo;</a>
	</div>
</section>
