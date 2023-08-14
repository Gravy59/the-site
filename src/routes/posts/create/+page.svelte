<script lang="ts">
	import { enhance } from '$app/forms';

	import type { ActionData } from './$types';

	export let form: ActionData;
	import { button } from '$lib/button';
	import { heading } from '$lib/headings';
</script>

<section class="container px-4 mx-auto lg:max-w-6xl">
	<h1 class={heading({ tight: true, size: 'display' })}>Create Post</h1>
	<form use:enhance method="POST" class="max-w-lg space-y-2">
		{#if form?.message}
			<p class="text-red-500 font-medium text-sm">{form.message}</p>
		{/if}
		<div class="-space-y-px">
			<input
				required
				class="relative block w-full transition rounded-none rounded-t focus:z-10 focus:shadow-[0_0_8px] focus:shadow-blue-400/60 focus:ring-1 focus:ring-inset focus:border-blue-400 focus:outline-none focus:ring-black/5 border-zinc-300 placeholder:text-zinc-400 text-zinc-600"
				placeholder="Title"
				type="text"
				name="title"
				maxlength={100}
			/>
			<textarea
				required
				class="relative block w-full transition rounded-none rounded-b focus:z-10 focus:shadow-[0_0_8px] focus:shadow-blue-400/60 focus:ring-1 focus:ring-inset focus:border-blue-400 focus:outline-none focus:ring-black/5 border-zinc-300 placeholder:text-zinc-400 text-zinc-600"
				placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita soluta temporibus perspiciatis nihil consequuntur officiis dignissimos non, possimus cum excepturi dolorem magni illum obcaecati unde placeat est dolores quod quibusdam?"
				name="body"
				minlength={10}
				rows={12}
			/>
		</div>
		<button class={button({ color: 'primary', class: 'w-full text-lg' })}>Post</button>
	</form>
</section>
