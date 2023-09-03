<script lang="ts">
	import { heading } from '$lib/headings';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<article class="container text-base leading-base lg:max-w-6xl">
	<h1 class={heading({ tight: true, size: 1 })}>{data.article.title}</h1>
	<p class="mb-5 flex items-center gap-x-2 text-lg leading-base md:text-xl">
		<svg xmlns="http://www.w3.org/2000/svg" width="0.84em" height="1em" viewBox="0 0 1280 1536"
			><path
				fill="currentColor"
				d="M1280 1271q0 109-62.5 187t-150.5 78H213q-88 0-150.5-78T0 1271q0-85 8.5-160.5t31.5-152t58.5-131t94-89T327 704q131 128 313 128t313-128q76 0 134.5 34.5t94 89t58.5 131t31.5 152t8.5 160.5zm-256-887q0 159-112.5 271.5T640 768T368.5 655.5T256 384t112.5-271.5T640 0t271.5 112.5T1024 384z"
			/></svg
		>
		<span>by {data.article.author.display_name}</span>
	</p>
	<hr class="my-5" />
	<p class="flex items-center gap-x-2">
		<svg xmlns="http://www.w3.org/2000/svg" width="0.93em" height="1em" viewBox="0 0 1664 1792"
			><path
				fill="currentColor"
				d="M128 1664h288v-288H128v288zm352 0h320v-288H480v288zm-352-352h288V992H128v320zm352 0h320V992H480v320zM128 928h288V640H128v288zm736 736h320v-288H864v288zM480 928h320V640H480v288zm768 736h288v-288h-288v288zm-384-352h320V992H864v320zM512 448V160q0-13-9.5-22.5T480 128h-64q-13 0-22.5 9.5T384 160v288q0 13 9.5 22.5T416 480h64q13 0 22.5-9.5T512 448zm736 864h288V992h-288v320zM864 928h320V640H864v288zm384 0h288V640h-288v288zm32-480V160q0-13-9.5-22.5T1248 128h-64q-13 0-22.5 9.5T1152 160v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38H128q-52 0-90-38t-38-90V384q0-52 38-90t90-38h128v-96q0-66 47-113T416 0h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"
			/></svg
		><span
			>Posted on {Intl.DateTimeFormat('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric',
				hour12: true
			}).format(data.article.createdAt)}</span
		>
	</p>
	<hr class="my-5" />
	<hr class="my-5" />
	<div class="typography">
		{#if data.article.lead}
			<p class="lead">
				{data.article.lead}
			</p>
		{/if}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html data.article.body}
	</div>
</article>
