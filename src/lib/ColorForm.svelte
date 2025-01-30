<script>
	import { onMount } from 'svelte';

	let defaultColor = '#ffffff';
	let color1 = defaultColor;
	let color2 = defaultColor;
	let color3 = defaultColor;

	onMount(() => {
		let url = new URL(window.location.href);
		color1 = url.searchParams.get('color1') || defaultColor;
		color2 = url.searchParams.get('color2') || defaultColor;
		color3 = url.searchParams.get('color3') || defaultColor;
	});
</script>

<form>
	<fieldset>
		<legend>Grid Colours</legend>

		<div>
			<label for="color-input-1">Colour 1</label>
			<input id="color-input-1" type="color" name="color1" value={color1} />
		</div>

		<div>
			<label for="color-input-2">Colour 2</label>
			<input id="color-input-2" type="color" name="color2" value={color2} />
		</div>

		<div>
			<label for="color-input-3">Colour 3</label>
			<input id="color-input-3" type="color" name="color3" value={color3} />
		</div>
	</fieldset>

	<button type="submit">Make grid</button>
</form>
