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

{#if wcag.level === 'AAA' && ((wcag.elements.text && contrast < 7) || (wcag.elements.largeText && contrast < 4.5))}
	<div></div>
{:else}
	<article style="color: {fg}; background-color: {bg};">
		<p class="ratio">{contrast.toFixed(2)}</p>

		<table>
			<tbody>
				{#if wcag.elements.text}
					<tr>
						<th>Text</th>
						<td>
							{#if contrast > 7}
								<p>AAA</p>
							{:else if contrast > 4.5}
								<p>AA</p>
							{:else}
								<p>n/a</p>
							{/if}
						</td>
					</tr>
				{/if}

				{#if wcag.elements.largeText}
					<tr>
						<th>Large text</th>
						<td>
							{#if contrast > 4.5}
								<p>AAA</p>
							{:else if contrast > 3}
								<p>AA</p>
							{:else}
								<p>n/a</p>
							{/if}
						</td>
					</tr>
				{/if}

				{#if wcag.version !== '2.0' && wcag.elements.graphic}
					<tr>
						<th>Graphic</th>
						<td>
							{#if contrast > 3}
								<p>AA</p>
							{:else}
								<p>n/a</p>
							{/if}
						</td>
					</tr>
				{/if}
			</tbody>
		</table>
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
