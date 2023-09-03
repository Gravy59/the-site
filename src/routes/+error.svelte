<script>
	import { page } from '$app/stores';
	import { button } from '$lib/button';
</script>

<section class="mb-8 bg-zinc-100 py-8 text-zinc-800 md:py-12">
	<div class="container mx-auto px-4">
		<h1 class="mb-2.5 mt-5 text-4xl font-semibold tracking-tight md:text-7xl">
			{$page.status}
		</h1>
		<p class="mb-2.5 text-xl">
			{$page.error?.message}
		</p>
		<a href="/" class={button({ size: 'lg' })}>Go back home &raquo;</a>
	</div>
</section>
