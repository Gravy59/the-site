<script>
	import { button } from '$lib/button';
</script>

<section class="p-8 container mx-auto lg:max-w-6xl space-y-4">
	<p>
		<button type="button" class={button({ size: 'lg' })}>Default</button>
		<button type="button" class={button({ color: 'primary', size: 'lg' })}>Primary</button>
		<button type="button" class={button({ color: 'success', size: 'lg' })}>Success</button>
		<button type="button" class={button({ color: 'info', size: 'lg' })}>Info</button>
		<button type="button" class={button({ color: 'warning', size: 'lg' })}>Warning</button>
		<button type="button" class={button({ color: 'danger', size: 'lg' })}>Danger</button>
		<!-- <button type="button" class={button({ color: 'link' })}>Link</button> -->
	</p>
	<p>
		<button type="button" class={button()}>Default</button>
		<button type="button" class={button({ color: 'primary' })}>Primary</button>
		<button type="button" class={button({ color: 'success' })}>Success</button>
		<button type="button" class={button({ color: 'info' })}>Info</button>
		<button type="button" class={button({ color: 'warning' })}>Warning</button>
		<button type="button" class={button({ color: 'danger' })}>Danger</button>
		<!-- <button type="button" class={button({ color: 'link' })}>Link</button> -->
	</p>
	<p>
		<button type="button" class={button({ size: 'sm' })}>Default</button>
		<button type="button" class={button({ color: 'primary', size: 'sm' })}>Primary</button>
		<button type="button" class={button({ color: 'success', size: 'sm' })}>Success</button>
		<button type="button" class={button({ color: 'info', size: 'sm' })}>Info</button>
		<button type="button" class={button({ color: 'warning', size: 'sm' })}>Warning</button>
		<button type="button" class={button({ color: 'danger', size: 'sm' })}>Danger</button>
		<!-- <button type="button" class={button({ color: 'link', size: 'sm' })}>Link</button> -->
	</p>
</section>
