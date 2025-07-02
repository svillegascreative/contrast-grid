<script>
	import { getContext } from 'svelte';
	import Color from 'colorjs.io';

	let { fg = 'black', bg = 'white' } = $props();

	const { wcag } = getContext('app');

	let contrast = $derived.by(() => {
		let fgColor = new Color(fg);
		let bgColor = new Color(bg);
		return fgColor.contrastWCAG21(bgColor);
	});
</script>

{#if (wcag.level === 'AAA' && wcag.elements.text && contrast < 7) || (wcag.level === 'AAA' && wcag.elements.largeText && contrast < 4.5)}
	<div></div>
{:else}
	<article style="color: {fg}; background-color: {bg};">
		<p class="ratio">{contrast.toFixed(2)}</p>

		{#if wcag.elements.text}
			<span
				>{(wcag.level === 'AA' && contrast > 4.5) || (wcag.level === 'AAA' && contrast > 7)
					? '✔️'
					: '❌'} TEXT</span
			>
		{/if}

		{#if wcag.elements.largeText}
			<span
				>{(wcag.level === 'AA' && contrast > 3) || (wcag.level === 'AAA' && contrast > 4.5)
					? '✔️'
					: '❌'} LARGE</span
			>
		{/if}

		{#if wcag.version !== '2.0' && wcag.elements.graphic}
			<span
				>{(wcag.level === 'AA' && contrast > 3) || (wcag.level === 'AAA' && contrast > 4.5)
					? '✔️'
					: '❌'} UI</span
			>
		{/if}
	</article>
{/if}

<style>
	article {
		aspect-ratio: 1 / 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}

	.ratio {
		font-size: 3rem;
		line-height: 1;
	}
</style>
