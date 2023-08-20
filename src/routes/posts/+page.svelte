<script lang="ts">
	import { page } from '$app/stores';
	import { heading } from '$lib/headings';
</script>

<section class="container mx-auto mt-4 px-4 text-base lg:max-w-6xl">
	<h1 class={heading({ tight: true, size: 1 })}>Posts</h1>
	{#if $page.data.posts.length > 0}
		<ul class="mb-5 rounded shadow-sm">
			{#each $page.data.posts as post}
				<li
					class="relative -mb-px block border border-zinc-300 bg-white px-4 py-2.5 text-zinc-600 first:rounded-t last:mb-0 last:rounded-b hover:bg-zinc-100"
				>
					<a href={`/posts/${post.id}`}
						><h4 class="leading-base my-0 flex items-end justify-between text-lg font-semibold">
							{post.title} <small>{post.author.username}</small>
						</h4>
						<p class="leading-base line-clamp-2">{post.lead ?? 'An article, I guess'}</p></a
					>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No posts</p>
	{/if}
</section>
