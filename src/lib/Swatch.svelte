<script>
	import { getContext } from 'svelte';
	import Color from 'colorjs.io';
	import { PASSING_RATIOS } from '../constants';
	import Indicator from './Indicator.svelte';

	let { fg = 'black', bg = 'white' } = $props();
	let { settings } = getContext('app');

	let contrast = $derived.by(() => {
		let fgColor = new Color(fg);
		let bgColor = new Color(bg);
		return fgColor.contrastWCAG21(bgColor);
	});

	/* Graphics/UI has the lowest required contrast (after 2.0) */
	const minElement = settings.version === '2.0' ? 'text' : 'graphic';
</script>

{#if settings.showFailing && contrast < PASSING_RATIOS[settings.level][minElement]}
	<div></div>
{:else}
	<article style="color: {fg}; background-color: {bg};">
		<p class="ratio">{contrast.toFixed(2)}</p>

		<div>
			<Indicator element="text" {contrast} />
			<Indicator element="largeText" {contrast} />
			<Indicator element="graphic" {contrast} />
		</div>
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
