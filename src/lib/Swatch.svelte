<script lang="ts">
	let { fg = 'black', bg = 'white' } = $props();
</script>

<article style="color: {fg}; background-color: {bg};">
	<span>AaBbCc</span>
</article>

<style>
	article {
		aspect-ratio: 1 / 1;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2rem;
	}
</style>
