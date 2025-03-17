<script>
	import { colors } from '../state/colors.svelte.js';
</script>

<form>
	<fieldset>
		<legend>Grid Colours</legend>

		<div>
			<label for="color-input-1">Colour 1</label>
			<sl-color-picker
				id="color-input-1"
				value={colors.c1}
				onsl-input={(event) => (colors.c1 = event.target.value)}
			></sl-color-picker>
		</div>

		<div>
			<label for="color-input-2">Colour 2</label>
			<sl-color-picker
				id="color-input-1"
				value={colors.c2}
				onsl-input={(event) => (colors.c2 = event.target.value)}
			></sl-color-picker>
		</div>

		<div>
			<label for="color-input-3">Colour 3</label>
			<sl-color-picker
				id="color-input-1"
				value={colors.c3}
				onsl-input={(event) => (colors.c3 = event.target.value)}
			></sl-color-picker>
		</div>
	</fieldset>

	<button type="submit">Get permalink</button>
</form>
