<script>
	import { getContext } from 'svelte';
	import Color from 'colorjs.io';
	import Indicator from './Indicator.svelte';

	let { fg = 'black', bg = 'white' } = $props();
	let { settings } = getContext('app');

	let contrast = $derived.by(() => {
		let fgColor = new Color(fg);
		let bgColor = new Color(bg);
		return fgColor.contrastWCAG21(bgColor);
	});
</script>

{#if settings.showFailing && (contrast < 3 || (settings.level === 'AAA' && contrast < 4.5))}
	<div></div>
{:else}
	<article style="color: {fg}; background-color: {bg};">
		<p class="ratio">{contrast.toFixed(2)}</p>

		<Indicator element="text" {contrast}>TEXT</Indicator>
		<Indicator element="largeText" {contrast}>LARGE</Indicator>
		<Indicator element="graphic" {contrast}>UI</Indicator>
	</article>
{/if}

<style>
	article {
		aspect-ratio: 1 / 1;
		display: flex;
		flex-direction: column;
		gap: 0.2em;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}

	.ratio {
		font-size: 3rem;
		line-height: 1;
	}
</style>
