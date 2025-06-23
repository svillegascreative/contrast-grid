<script>
	import { getContext } from 'svelte';
	import { WCAG } from '../constants';

	const { wcag, colors } = getContext('app');
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
			{#each WCAG.versions as version}
				<label>
					<input
						type="radio"
						name="version"
						value={version}
						checked={version === wcag.version}
						onchange={() => (wcag.version = version)}
					/>
					{version}
				</label>
			{/each}
		</fieldset>

		<fieldset>
			<legend>WCAG level</legend>
			{#each WCAG.levels as level}
				<label>
					<input
						type="radio"
						name="level"
						value={level}
						checked={level === wcag.level}
						onchange={() => (wcag.level = level)}
					/>
					{level}
				</label>
			{/each}
		</fieldset>

		<fieldset>
			<legend>Elements</legend>
			{#each Object.entries(WCAG.elements) as [key, string]}
				<label>
					<input
						type="checkbox"
						name="elements"
						value={key}
						checked={wcag.elements[key]}
						onchange={() => (wcag.elements[key] = !wcag.elements[key])}
						disabled={key === 'graphic' && wcag.version === '2.0'}
					/>
					{string}
				</label>
			{/each}
		</fieldset>
	</fieldset>

	<button type="submit">Get permalink</button>
</form>

<style>
	fieldset {
		border: none;
	}
</style>
