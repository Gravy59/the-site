<script lang="ts">
	import { enhance } from '$app/forms';

	import type { ActionData } from './$types';

	export let form: ActionData;
	import { button } from '$lib/button';
	import { heading } from '$lib/headings';
	import { input, label } from '$lib/forms';
</script>

<section class="container mx-auto px-4 lg:max-w-6xl">
	<h1 class={heading({ tight: true, size: 'display' })}>Create Post</h1>
	<form use:enhance method="POST" class="max-w-lg space-y-2">
		{#if form?.message}
			<p class="text-base text-red-500">{form.message}</p>
		{/if}
		<div class="space-y-4">
			<div>
				<label for="title" class={label()}>Title</label>
				<input
					required
					class={input()}
					placeholder="The post"
					type="text"
					name="title"
					maxlength={100}
				/>
			</div>
			<div>
				<label for="body" class={label()}>Body</label>
				<textarea
					required
					class={input({ class: 'h-auto' })}
					placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita soluta temporibus perspiciatis nihil consequuntur officiis dignissimos non, possimus cum excepturi dolorem magni illum obcaecati unde placeat est dolores quod quibusdam?"
					name="body"
					minlength={10}
					rows={12}
				/>
			</div>
		</div>
		<button class={button({ color: 'primary', class: 'w-full text-lg' })}>Post</button>
	</form>
</section>
