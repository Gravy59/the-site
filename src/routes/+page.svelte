<script lang="ts">
	import { button } from '$lib/button';
</script>

<section class="py-8 mb-8 bg-zinc-100 md:py-12 text-zinc-800">
	<div class="px-4 mx-auto container lg:max-w-6xl">
		<h1 class="text-4xl mt-5 mb-2.5 font-semibold md:text-7xl tracking-tight">
			The Creative Platform for Citizens
		</h1>
		<p class="mb-2.5 text-xl">
			<span class="font-bold italic">The Site</span> is a new hub for your contributions to the Empire,
			backed by the full force of the Imperial Military and the Imperial Civilian Corps
		</p>
	</div>
</section>
<section class="container lg:max-w-6xl px-4 mx-auto mb-28">
	<div class="grid lg:grid-cols-3 gap-x-4">
		<div>
			<h2 class="mt-5 mb-2.5 text-3xl font-semibold">Centralize Everything</h2>
			<p class="text-sm mb-2.5">
				<span class="font-bold italic">The Site</span> gives you the resources to rapidly build, deploy,
				and test your initiatives. Our fast-paced approval program allows you to quickly abandon bad
				ideas and redirect funding.
			</p>
		</div>
		<div>
			<h2 class="mt-5 mb-2.5 text-3xl font-semibold">Easy Creation</h2>
			<p class="text-sm mb-2.5">
				Build your initiative with <span class="font-bold italic">The Site</span>&rsquo;s suite of
				subversion tools. Iterate rapidly with our test subjects, and efforlessly generate reports.
				Never worry about ethical violations, moral dillemas, or disruptive whistleblowers &mdash;
				we&rsquo;ll handle them.
			</p>
		</div>
		<div>
			<h2 class="mt-5 mb-2.5 text-3xl font-semibold">Fast approval</h2>
			<p class="text-sm mb-2.5">
				Communicate directly with the Administration and get feedback quickly, so you never waste
				time on unnecessary goals. The Administration will push your program past Congress once they
				approve it.
			</p>
		</div>
	</div>
</section>
<section class="container lg:max-w-6xl px-4 mx-auto mb-28">
	<h1 class="text-4xl lg:text-center mt-5 mb-2.5 font-semibold leading-auto tracking-tight">
		Trusted by the world&rsquo;s most innovative teams
	</h1>
	<div
		class="mx-auto mt-10 grid grid-cols-3 items-center gap-x-8 gap-y-10 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
	>
		<a href="https://www.cia.gov/">
			<img
				width={780}
				height={780}
				class="col-span-2 w-full object-contain opacity-90 grayscale hover:opacity-100 hover:grayscale-0 lg:col-span-1"
				src="/cia.png"
				alt="CIA"
			/>
		</a>
		<a href="https://www.fbi.gov/">
			<img
				width={994}
				height={1024}
				class="col-span-2 w-full object-contain opacity-90 grayscale hover:opacity-100 hover:grayscale-0 lg:col-span-1"
				src="/fbi.png"
				alt="FBI"
			/>
		</a>
		<a href="https://www.nsa.gov/">
			<img
				width={1024}
				height={1024}
				class="col-span-2 w-full object-contain opacity-90 grayscale hover:opacity-100 hover:grayscale-0 lg:col-span-1"
				src="/nsa.png"
				alt="NSA"
			/>
		</a>
		<a href="https://www.atf.gov/">
			<img
				width={1024}
				height={1024}
				class="col-span-2 w-full object-contain opacity-90 grayscale hover:opacity-100 hover:grayscale-0 lg:col-span-1"
				src="/atf.png"
				alt="ATF"
			/>
		</a>
		<a href="https://www.dhs.gov/">
			<img
				width={1024}
				height={1024}
				class="col-span-2 w-full object-contain opacity-90 grayscale hover:opacity-100 hover:grayscale-0 lg:col-span-1"
				src="/dhs.png"
				alt="DHS"
			/>
		</a>
	</div>
</section>
<section class="container lg:max-w-6xl px-4 mx-auto mb-28">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
			<div class="mx-auto flex max-w-xs flex-col gap-y-4">
				<dt class="text-base leading-auto text-zinc-600">Lives ruined</dt>
				<dd
					class="order-first leading-auto text-3xl font-semibold tracking-tight text-zinc-900 sm:text-5xl"
				>
					4 Billion+
				</dd>
			</div>
			<div class="mx-auto flex max-w-xs flex-col gap-y-4">
				<dt class="text-base leading-auto text-zinc-600">Assets under holding</dt>
				<dd
					class="order-first leading-auto text-3xl font-semibold tracking-tight text-zinc-900 sm:text-5xl"
				>
					$112 Trillion+
				</dd>
			</div>
			<div class="mx-auto flex max-w-xs flex-col gap-y-4">
				<dt class="text-base leading-auto text-zinc-600">New subjects annually</dt>
				<dd
					class="order-first leading-auto text-3xl font-semibold tracking-tight text-zinc-900 sm:text-5xl"
				>
					12,000
				</dd>
			</div>
		</dl>
	</div>
</section>
<section class="py-8 mb-8 bg-zinc-100 md:py-12 text-zinc-800">
	<div class="px-4 mx-auto container lg:max-w-6xl">
		<h1 class="text-4xl mt-5 mb-2.5 font-semibold md:text-7xl tracking-tight">
			Boost your productivity.
			<br />
			Start using The Site today.
		</h1>
		<p class="mb-2.5 text-xl">
			Too many lives are doing just fine without intervention. We need to change that.
		</p>
		<div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
			<a href="/join" class={button({ size: 'lg' })}> Get started &raquo; </a>
		</div>
	</div>
</section>
