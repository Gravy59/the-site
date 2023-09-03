<script lang="ts">
	import { page } from '$app/stores';
	import { button } from '$lib/button';
	import { heading } from '$lib/headings';
	import { createDialog } from 'svelte-headlessui';
	import { applyAction, enhance } from '$app/forms';
	import Transition from 'svelte-transition';
	import Alert from '$lib/alert.svelte';
	import type { ActionData } from './$types';

	const searchParams = $page.url.searchParams;

	let noticeDismissed: boolean;

	const notice = searchParams.get('notice');

	let postIDToDelete = '';

	function confirmPostDelete(id: string) {
		deleteDialog.open();
		postIDToDelete = id;
	}

	const deleteDialog = createDialog({ label: 'Are you sure you want to delete this post?' });

	export let form: ActionData;
</script>

<section class="container">
	<h1 class="text-4xl font-semibold tracking-tight">
		Welcome, {$page.data.display_name}
	</h1>
</section>
<section class="container">
	<h1 class="text-4xl font-semibold tracking-tight">Posts</h1>
	{#if $page.data.posts.length > 0}
		<ul class="mb-5 rounded shadow-sm">
			{#each $page.data.posts as post}
				<li
					class="relative -mb-px flex justify-between border border-zinc-300 bg-white px-4 py-2.5 text-zinc-600 first:rounded-t last:mb-0 last:rounded-b hover:bg-zinc-100"
				>
					<a href={`/posts/${post.id}`}
						><h4 class="my-0 text-lg font-semibold leading-base">{post.title}</h4>
						{#if post.lead}<p class="line-clamp-2 leading-base">{post.lead}</p>{/if}</a
					>
					<button
						on:click={() => confirmPostDelete(post.id)}
						class={button({ size: 'sm', color: 'danger', class: 'h-7 w-7 self-start' })}
						><span class="sr-only">Delete post</span><svg
							aria-hidden
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4 shrink-0"
							fill="currentColor"
							viewBox="0 0 256 256"
							><path
								d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"
							></path></svg
						></button
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

{#if notice && !noticeDismissed}
	<div class="fixed inset-x-0 bottom-20 z-20 px-4">
		<Alert dismissable fadeIn message={notice} bind:dismissed={noticeDismissed} />
	</div>
{/if}

{#if form?.message}
	<div class="fixed inset-x-0 bottom-36 z-20 px-4">
		<Alert color="error" message={form.message} />
	</div>
{/if}

<div class="relative z-50">
	<Transition show={$deleteDialog.expanded}>
		<Transition
			enter="linear duration-150"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="linear duration-150"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<div class="fixed inset-0 bg-black bg-opacity-50" />
		</Transition>

		<div class="fixed inset-0 overflow-y-auto">
			<div class="flex min-h-full items-center justify-center p-4">
				<Transition
					enter="ease-out duration-300"
					enterFrom="-translate-y-1/4 opacity-0"
					enterTo="translate-y-0 opacity-100"
					leave="ease-out duration-300"
					leaveFrom="translate-y-0 opacity-100"
					leaveTo="-translate-y-1/4 opacity-0"
				>
					<div
						class="m-2.5 w-auto transform rounded-md border border-black/20 bg-white bg-clip-padding shadow-md md:mx-auto md:w-[37.5rem]"
						use:deleteDialog.modal
					>
						<header class="flex items-center justify-between border-b border-zinc-200 p-4">
							<h4 class={heading({ size: 2, class: 'm-0 text-xl' })}>Are you sure?</h4>
							<button
								class="text-2xl font-bold text-black opacity-20 [text-shadow:0_1px_0_theme(colors.white)]"
								on:click={deleteDialog.close}
								type="button"
								><span class="sr-only">Close</span><span aria-hidden>&times;</span></button
							>
						</header>
						<form
							action="?/deletePost"
							use:enhance={({ formData }) => {
								formData.append('postId', postIDToDelete);
								return async ({ result, update }) => {
									await applyAction(result);
									update();
								};
							}}
							method="POST"
						>
							<div class="typography p-4">
								<p>
									This will delete your post <strong>permanantly</strong>.
									<strong>You will not be able to recover this post once you delete it.</strong>
								</p>
							</div>
							<footer class="border-t border-zinc-200 p-4 text-right">
								<button type="reset" class={button()} on:click={deleteDialog.close}>Cancel</button>
								<button
									class={button({ color: 'danger' })}
									type="submit"
									on:click={deleteDialog.close}>Delete</button
								>
							</footer>
						</form>
					</div>
				</Transition>
			</div>
		</div>
	</Transition>
</div>
<!-- <section class="container mx-auto mt-8 lg:max-w-6xl">
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
