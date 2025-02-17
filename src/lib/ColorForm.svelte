<script>
	import { colors } from '../state/colors.svelte.js';
</script>

<form>
	<fieldset>
		<legend>Grid Colours</legend>

		<div>
			<label for="color-input-1">Colour 1</label>
			<input id="color-input-1" type="color" name="color1" bind:value={colors.c1} />
		</div>

		<div>
			<label for="color-input-2">Colour 2</label>
			<input id="color-input-2" type="color" name="color2" bind:value={colors.c2} />
		</div>

		<div>
			<label for="color-input-3">Colour 3</label>
			<input id="color-input-3" type="color" name="color3" bind:value={colors.c3} />
		</div>
	</fieldset>

	<button type="submit">Get permalink</button>
</form>
