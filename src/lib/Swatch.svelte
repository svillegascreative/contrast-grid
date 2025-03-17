<script lang="ts">
	import Color from 'colorjs.io';
	let { fg = 'black', bg = 'white' } = $props();

	let contrast = $derived.by(() => {
		let fgColor = new Color(fg);
		let bgColor = new Color(bg);
		return fgColor.contrastWCAG21(bgColor);
	});
</script>

<article style="color: {fg}; background-color: {bg};">
	<p>AaBbCc</p>
	<p>{contrast.toFixed(2)}</p>
</article>

<style>
	article {
		aspect-ratio: 1 / 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem;
	}
</style>
