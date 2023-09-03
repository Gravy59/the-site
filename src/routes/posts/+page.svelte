<script lang="ts">
	import { page } from '$app/stores';
	import { heading } from '$lib/headings';
</script>

<section class="container mt-4 px-4 text-base lg:max-w-6xl">
	<h1 class={heading({ tight: true, size: 1 })}>Programs</h1>
	{#if $page.data.posts.length > 0}
		<ul class="mb-5 rounded shadow-sm">
			{#each $page.data.posts as post}
				<li
					class="relative -mb-px block border border-zinc-300 bg-white px-4 py-2.5 text-zinc-600 first:rounded-t last:mb-0 last:rounded-b hover:bg-zinc-100"
				>
					<a href={`/posts/${post.id}`}
						><h4 class="my-0 flex items-end justify-between text-lg font-semibold leading-base">
							{post.title} <small>{post.author.display_name}</small>
						</h4>
						{#if post.lead}<p class="line-clamp-2 leading-base">{post.lead}</p>{/if}</a
					>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No posts</p>
	{/if}
</section>
