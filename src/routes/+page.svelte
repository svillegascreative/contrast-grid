<script>
	import ColorForm from '$lib/ColorForm.svelte';
	import ColorGrid from '$lib/ColorGrid.svelte';
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
