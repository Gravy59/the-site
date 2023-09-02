<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import { button } from '$lib/button';
	import { heading } from '$lib/headings';
	import { input, label } from '$lib/forms';
	import { onMount } from 'svelte';
	import type { Readable } from 'svelte/store';
	import { createEditor, EditorContent, type Editor } from 'svelte-tiptap';
	import StarterKit from '@tiptap/starter-kit';
	import { createMenu } from 'svelte-headlessui';

	const sizeMenu = createMenu({ label: 'Font Size' });
	let editor: Readable<Editor>;
	let creating = false;
	export let form: ActionData;

	onMount(() => {
		editor = createEditor({
			extensions: [StarterKit],
			content: `Hello world!`,
			editorProps: {
				attributes: {
					class: input({ class: 'h-auto min-h-[4rem] typography' })
				}
			}
		});
	});
</script>

<section class="container mx-auto px-4 lg:max-w-6xl">
	<h1 class={heading({ tight: true, size: 'display' })}>Create Post</h1>
	<form
		use:enhance={({ formData }) => {
			creating = true;
			formData.append('body', $editor.getHTML());
			return async ({ result, update }) => {
				await applyAction(result);
				update();
				creating = false;
			};
		}}
		method="POST"
		class="max-w-lg space-y-2"
	>
		{#if form?.message}
			<p class="text-base text-red-500">{form.message}</p>
		{/if}
		<div class="space-y-4">
			<div>
				<label for="title" class={label({ required: true })}>Title</label>
				<input
					required
					class={input()}
					placeholder="The post"
					type="text"
					name="title"
					minlength={3}
					maxlength={100}
				/>
			</div>
			<div>
				<label for="lead" class={label()}>Lead paragraph</label>
				<input
					class={input()}
					placeholder="A summary of what's to come"
					type="text"
					name="lead"
					minlength={3}
					maxlength={50}
				/>
			</div>
			<div>
				<label for="body" class={label({ required: true })}>Body</label>
				{#if $editor}
					<div class="mb-2 mt-4 flex items-center gap-x-2">
						<div class="relative inline-block">
							<button type="button" use:sizeMenu.button class={button({ size: 'sm' })}>
								<span class="sr-only">Typography</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden
									class="my-px h-4 w-4"
									viewBox="0 0 256 256"
									><path
										d="M208,56V88a8,8,0,0,1-16,0V64H136V192h24a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16h24V64H64V88a8,8,0,0,1-16,0V56a8,8,0,0,1,8-8H200A8,8,0,0,1,208,56Z"
									></path></svg
								>
							</button>
							<ul
								use:sizeMenu.items
								class="absolute {$sizeMenu.expanded
									? 'block'
									: 'hidden'} left-0 top-full z-40 mt-0.5 w-36 origin-top-left rounded bg-white py-1.5 ring-1 ring-black/20"
							>
								<li>
									<button
										type="button"
										class="w-full px-5 py-1 text-left leading-5 {$sizeMenu.active === 'Heading 1' ||
										$editor.isActive('heading', { level: 1 })
											? 'bg-sky-500 bg-gradient-to-b from-sky-600 to-sky-700 bg-repeat-x text-white'
											: 'text-zinc-800'}"
										use:sizeMenu.item
										on:click={() => $editor.chain().focus().toggleHeading({ level: 1 }).run()}
										>Heading 1</button
									>
								</li>
								<li>
									<button
										type="button"
										class="w-full px-5 py-1 text-left leading-5 {$sizeMenu.active === 'Heading 2' ||
										$editor.isActive('heading', { level: 2 })
											? 'bg-sky-500 bg-gradient-to-b from-sky-600 to-sky-700 bg-repeat-x text-white'
											: 'text-zinc-800'}"
										use:sizeMenu.item
										on:click={() => $editor.chain().focus().toggleHeading({ level: 2 }).run()}
										>Heading 2</button
									>
								</li>
								<li>
									<button
										type="button"
										class="w-full px-5 py-1 text-left leading-5 {$sizeMenu.active === 'Body' ||
										$editor.isActive('paragraph')
											? 'bg-sky-500 bg-gradient-to-b from-sky-600 to-sky-700 bg-repeat-x text-white'
											: 'text-zinc-800'}"
										use:sizeMenu.item
										on:click={() => $editor.chain().focus().setParagraph().run()}>Body</button
									>
								</li>
							</ul>
						</div>
						<div class="inline-flex -space-x-px">
							<button
								type="button"
								class={button({
									size: 'sm',
									class:
										'before:rounded-none after:rounded-none first:before:rounded-l-[0.1875rem] first:after:rounded-l-[calc(0.1875rem-1px)] last:before:rounded-r-[0.1875rem] last:after:rounded-r-[calc(0.1875rem-1px)]'
								})}
								on:click={() => $editor.chain().toggleBold().run()}
								><span class="sr-only">Bold</span><svg
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden
									class="my-px h-4 w-4"
									viewBox="0 0 256 256"
									><path
										d="M177.08,114.46A48,48,0,0,0,140,36H72A12,12,0,0,0,60,48V200a12,12,0,0,0,12,12h80a52,52,0,0,0,25.08-97.54ZM84,60h56a24,24,0,0,1,0,48H84Zm68,128H84V132h68a28,28,0,0,1,0,56Z"
									></path></svg
								></button
							>
							<button
								type="button"
								class={button({
									size: 'sm',
									class:
										'before:rounded-none after:rounded-none first:before:rounded-l-[0.1875rem] first:after:rounded-l-[calc(0.1875rem-1px)] last:before:rounded-r-[0.1875rem] last:after:rounded-r-[calc(0.1875rem-1px)]'
								})}
								on:click={() => $editor.chain().toggleItalic().run()}
							>
								<span class="sr-only">Italic</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden
									class="my-px h-4 w-4"
									viewBox="0 0 256 256"
									><path
										d="M200,56a8,8,0,0,1-8,8H157.77L115.1,192H144a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16H98.23L140.9,64H112a8,8,0,0,1,0-16h80A8,8,0,0,1,200,56Z"
									></path></svg
								>
							</button>
							<button
								type="button"
								class={button({
									size: 'sm',
									class:
										'before:rounded-none after:rounded-none first:before:rounded-l-[0.1875rem] first:after:rounded-l-[calc(0.1875rem-1px)] last:before:rounded-r-[0.1875rem] last:after:rounded-r-[calc(0.1875rem-1px)]'
								})}
								on:click={() => $editor.chain().toggleCode().run()}
							>
								<span class="sr-only">Inline code</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden
									class="my-px h-4 w-4"
									viewBox="0 0 256 256"
									><path
										d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"
									></path></svg
								>
							</button>
						</div>
						<button
							type="button"
							class={button({
								size: 'sm'
							})}
							on:click={() => $editor.chain().toggleCodeBlock().run()}
						>
							<span class="sr-only">Code block</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden
								class="my-px h-4 w-4"
								viewBox="0 0 256 256"
								><path
									d="M58.34,101.66l-32-32a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,69.66,37.66L43.31,64,69.66,90.34a8,8,0,0,1-11.32,11.32Zm40,0a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0,0-11.32l-32-32A8,8,0,0,0,98.34,37.66L124.69,64,98.34,90.34A8,8,0,0,0,98.34,101.66ZM200,40H176a8,8,0,0,0,0,16h24V200H56V136a8,8,0,0,0-16,0v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Z"
								></path></svg
							></button
						>
						<div class="inline-flex -space-x-px">
							<button
								type="button"
								class={button({
									size: 'sm',
									class:
										'before:rounded-none after:rounded-none first:before:rounded-l-[0.1875rem] first:after:rounded-l-[calc(0.1875rem-1px)] last:before:rounded-r-[0.1875rem] last:after:rounded-r-[calc(0.1875rem-1px)]'
								})}
								on:click={() => $editor.chain().toggleBulletList().run()}
								><span class="sr-only">Bullet list</span><svg
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden
									class="my-px h-4 w-4"
									viewBox="0 0 256 256"
									><path
										d="M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z"
									></path></svg
								></button
							>
							<button
								type="button"
								class={button({
									size: 'sm',
									class:
										'before:rounded-none after:rounded-none first:before:rounded-l-[0.1875rem] first:after:rounded-l-[calc(0.1875rem-1px)] last:before:rounded-r-[0.1875rem] last:after:rounded-r-[calc(0.1875rem-1px)]'
								})}
								on:click={() => $editor.chain().toggleOrderedList().run()}
							>
								<span class="sr-only">Ordered list</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden
									class="my-px h-4 w-4"
									viewBox="0 0 256 256"
									><path
										d="M224,128a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM104,72H216a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16ZM216,184H104a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM43.58,55.16,48,52.94V104a8,8,0,0,0,16,0V40a8,8,0,0,0-11.58-7.16l-16,8a8,8,0,0,0,7.16,14.32ZM79.77,156.72a23.73,23.73,0,0,0-9.6-15.95,24.86,24.86,0,0,0-34.11,4.7,23.63,23.63,0,0,0-3.57,6.46,8,8,0,1,0,15,5.47,7.84,7.84,0,0,1,1.18-2.13,8.76,8.76,0,0,1,12-1.59A7.91,7.91,0,0,1,63.93,159a7.64,7.64,0,0,1-1.57,5.78,1,1,0,0,0-.08.11L33.59,203.21A8,8,0,0,0,40,216H72a8,8,0,0,0,0-16H56l19.08-25.53A23.47,23.47,0,0,0,79.77,156.72Z"
									></path></svg
								>
							</button>
						</div>
					</div>
				{/if}
				<EditorContent editor={$editor} />
			</div>
		</div>
		<button
			disabled={creating}
			type="submit"
			class={button({ color: 'primary', class: 'w-full text-lg' })}>Post</button
		>
	</form>
</section>
