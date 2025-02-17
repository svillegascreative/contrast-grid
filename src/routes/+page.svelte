<script>
	import { onMount } from 'svelte';
	import ColorForm from '$lib/ColorForm.svelte';
	import ColorGrid from '$lib/ColorGrid.svelte';
	import { colors } from '../state/colors.svelte.js';

	onMount(() => {
		let url = new URL(window.location.href);
		colors.c1 = url.searchParams.get('color1') || colors.c1;
		colors.c2 = url.searchParams.get('color2') || colors.c2;
		colors.c3 = url.searchParams.get('color3') || colors.c3;
	});
</script>

<main>
	<h1>Contrast Grid</h1>

	<section aria-label="colour form">
		<ColorForm />
	</section>

	<section aria-label="contrast grid">
		<ColorGrid />
	</section>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 1fr 3fr;
		gap: 2rem;
	}

	h1 {
		grid-column: span 2;
	}
</style>
