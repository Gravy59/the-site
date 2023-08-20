<script>
	import { input } from '$lib/forms';
</script>

<div class="container px-8 py-4">
	<input placeholder="input" type="text" name="test" id="test" class={input()} />
</div>
<div class="container -space-y-px px-8 py-4">
	<input
		placeholder="input"
		type="text"
		name="test"
		id="test"
		class={input({ radius: 'children' })}
	/>
	<input
		placeholder="input"
		type="text"
		name="test"
		id="test"
		class={input({ radius: 'children' })}
	/>
</div>

<div class="container flex flex-col px-8 py-4">
	<label>
		<input type="checkbox" value="" />
		Option one is this and that&mdash;be sure to include why it's great
	</label>
	<label>
		<input type="checkbox" value="" disabled />
		Option two is disabled
	</label>
</div>
