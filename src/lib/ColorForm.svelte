<script>
	import { getContext } from 'svelte';
	import { WCAG } from '../constants';

	const { wcag, colors } = getContext('app');
</script>

<div class="form-container">
	<form>
		<fieldset class="colors">
			<legend>Grid Colours</legend>

			<label for="color-input-1" class="visually-hidden">Colour 1</label>
			<sl-color-picker
				id="color-input-1"
				value={colors.c1}
				onsl-input={(event) => (colors.c1 = event.target.value)}
			></sl-color-picker>

			<label for="color-input-2" class="visually-hidden">Colour 2</label>
			<sl-color-picker
				id="color-input-1"
				value={colors.c2}
				onsl-input={(event) => (colors.c2 = event.target.value)}
			></sl-color-picker>

			<label for="color-input-3" class="visually-hidden">Colour 3</label>
			<sl-color-picker
				id="color-input-1"
				value={colors.c3}
				onsl-input={(event) => (colors.c3 = event.target.value)}
			></sl-color-picker>

			<button type="button" aria-label="add color" class="add-color-btn">
				<sl-icon name="plus-lg" aria-hidden="true"></sl-icon>
			</button>
		</fieldset>

		<fieldset class="config">
			<legend>Configuration</legend>

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

		<button type="submit" class="permalink-btn">Get permalink</button>
	</form>
</div>

<style>
	.form-container {
		container-name: form-container;
		container-type: inline-size;
	}

	form {
		display: flex;
		gap: 1rem;

		@container form-container (width < 30rem) {
			flex-direction: column;
		}
	}

	.colors,
	.config {
		display: flex;
		gap: 0.5rem;

		padding: 0;
		& > legend {
			text-transform: uppercase;
			width: 100%;
			border-bottom: 1px solid currentColor;
			margin-block-end: 0.5rem;
		}
	}

	.colors {
		flex-wrap: wrap;
		align-items: center;
	}

	.add-color-btn {
		background: #ccc;
		border: none;
		border-radius: 50%;
		aspect-ratio: 1/1;
		display: inline-flex;
		align-items: center;
		font-size: 1.5rem;
	}

	.config {
		@media (orientation: landscape) {
			flex-direction: column;
		}

		fieldset {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			padding: 0;
		}
	}

	label {
		white-space: nowrap;
		display: block;
		margin-inline-start: 0.5rem;
	}

	.permalink-btn {
		align-self: start;
	}
</style>
