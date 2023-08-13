<script>
	import User from '$lib/User.svelte';
</script>

<User let:user
	><section class="container px-4 mx-auto lg:max-w-6xl">
		<h1 class="text-4xl mt-5 mb-2.5 font-semibold tracking-tight">
			{user.name}
		</h1>
		<h2 class="mt-5 mb-2.5 text-xl text-zinc-600">
			{user.username}
		</h2>
	</section>
	<section class="container px-4 mx-auto mt-8 lg:max-w-6xl" slot="loading">
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
	</section>
</User>
