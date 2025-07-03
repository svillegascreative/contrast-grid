<script>
	import { onMount, setContext } from 'svelte';
	import ColorForm from '$lib/ColorForm.svelte';
	import ColorGrid from '$lib/ColorGrid.svelte';
	import { colors } from '../state/colors.svelte.js';
	import { settings } from '../state/settings.svelte.js';

	// onMount(() => {
	// 	let url = new URL(window.location.href);
	// 	colors.c1 = url.searchParams.get('color1') || colors.c1;
	// 	colors.c2 = url.searchParams.get('color2') || colors.c2;
	// 	colors.c3 = url.searchParams.get('color3') || colors.c3;
	// });

	setContext('app', {
		settings,
		colors
	});
</script>

<main>
	<header>
		<h1>Contrast Grid</h1>

		<ColorForm />
	</header>

	<section aria-label="contrast grid">
		<ColorGrid />
	</section>
</main>

<style>
	main {
		height: 100vh;
		display: grid;

		@media (orientation: portrait) {
			grid-template-columns: 1fr;
		}
		@media (orientation: landscape) {
			grid-template-columns: minmax(auto, 1fr) 5fr;
		}
	}

	header {
		background: #333;
		color: #eee;
		padding: 1rem;
	}
</style>
