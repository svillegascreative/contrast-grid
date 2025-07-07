<script>
	import { getContext } from 'svelte';
	import { WCAG } from '../constants';

	let { settings, colors } = getContext('app');
	let numOfColors = $state(14);
	let currentColors = $derived(Object.entries(colors).slice(0, numOfColors));

	const colorLabel = (id) => `Colour ${id.slice(1)}`;
</script>

<div class="form-container">
	<form>
		<fieldset class="colors">
			<legend>Grid Colours</legend>

			{#each currentColors as [id, color]}
				<sl-color-picker
					id={`color-input-${id}`}
					label={colorLabel(id)}
					value={color}
					onsl-input={(event) => (colors.c1 = event.target.value)}
				></sl-color-picker>
			{/each}

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
							checked={version === settings.version}
							onchange={() => (settings.version = version)}
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
							checked={level === settings.level}
							onchange={() => (settings.level = level)}
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
							checked={settings.elements[key]}
							onchange={() => (settings.elements[key] = !settings.elements[key])}
							disabled={key === 'graphic' && settings.version === '2.0'}
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
