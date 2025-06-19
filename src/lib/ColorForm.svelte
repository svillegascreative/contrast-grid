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

	<fieldset>
		<legend>Display options</legend>

		<fieldset>
			<legend>WCAG version</legend>
			<label>
				<input type="radio" name="wcag" value="2-0" />
				2.0
			</label>
			<label>
				<input type="radio" name="wcag" value="2-1" />
				2.1
			</label>
			<label>
				<input type="radio" name="wcag" value="2-2" />
				2.2
			</label>
		</fieldset>

		<fieldset>
			<legend>WCAG level</legend>
			<label>
				<input type="radio" name="level" value="aa" />
				AA (& AAA)
			</label>
			<label>
				<input type="radio" name="level" value="aaa" />
				AAA
			</label>
		</fieldset>

		<fieldset>
			<legend>Elements</legend>
			<label>
				<input type="radio" name="elements" value="text" />
				Text
			</label>
			<label>
				<input type="radio" name="elements" value="large-text" />
				Large text
			</label>
			<label>
				<input type="radio" name="elements" value="graphics" />
				graphics
			</label>
		</fieldset>
	</fieldset>

	<button type="submit">Get permalink</button>
</form>
