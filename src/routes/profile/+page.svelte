<script lang="ts">
	import { page } from '$app/stores';
	import { button } from '$lib/button';
	const searchParams = $page.url.searchParams;
	let noticeOpen = true;
	function closeNotice() {
		noticeOpen = false;
	}
</script>

<section class="container mx-auto px-4 lg:max-w-6xl">
	<h1 class="text-4xl font-semibold tracking-tight">
		Welcome, {$page.data.username}
	</h1>
</section>
<section class="container mx-auto px-4 lg:max-w-6xl">
	<h1 class="text-4xl font-semibold tracking-tight">Posts</h1>
	{#if $page.data.posts.length > 0}
		<ul class="mb-5 rounded shadow-sm">
			{#each $page.data.posts as post}
				<li
					class="relative -mb-px block border border-zinc-300 bg-white px-4 py-2.5 text-zinc-600 first:rounded-t last:mb-0 last:rounded-b hover:bg-zinc-100"
				>
					<a href={`/posts/${post.id}`}
						><h4 class="leading-base my-0 text-lg font-semibold">{post.title}</h4>
						<p class="leading-base line-clamp-2">{post.body}</p></a
					>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No posts</p>
	{/if}
	<div class="mt-6">
		<a href="/posts/create" class={button()}>Create Post &raquo;</a>
	</div>
</section>
{#if searchParams.get('notice') && noticeOpen}
	<div class="fixed inset-x-0 bottom-20 z-20 px-4">
		<div
			class="relative mx-auto rounded border border-blue-300 bg-blue-100 bg-gradient-to-b from-blue-100 to-sky-300 bg-repeat-x p-4 text-sm font-medium text-cyan-700 shadow-sm duration-1000 animate-in zoom-in [text-shadow:0_1px_0_theme(colors.white/0.2)] lg:max-w-6xl"
		>
			<span>{searchParams.get('notice')}</span>
			<button
				on:click={closeNotice}
				class="absolute inset-y-0 right-4 flex items-center justify-center"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</div>
	</div>
{/if}
<!-- <section class="container px-4 mx-auto mt-8 lg:max-w-6xl">
	<div
		class="h-5 overflow-hidden bg-repeat-x rounded shadow-inner bg-gradient-to-b from-zinc-200 to-zinc-100 shadow-black/10"
	>
		<div
			role="progressbar"
			aria-valuemax={100}
			aria-valuemin={0}
			style="width:90%;"
			class="bg-repeat-x animate-progress-bar-stripes h-full float-left bg-cyan-600 transition-[width_0.6s_ease] shadow-[inset_0_-1px_0_theme(colors.white/.15)] bg-[size:40px_40px] bg-[linear-gradient(45deg,theme(colors.white/.15)_25%,transparent_25%,transparent_50%,theme(colors.white/.15)_50%,theme(colors.white/.15)_75%,transparent_75%,transparent)]"
		/>
	</div>
</section> -->
