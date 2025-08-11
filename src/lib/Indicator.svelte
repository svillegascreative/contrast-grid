<script>
	import { getContext } from 'svelte';
	import { PASSING_RATIOS } from '../constants';

	let { element, contrast, children } = $props();
	let { settings } = getContext('app');

	const passing = $derived(contrast > PASSING_RATIOS[settings.level][element]);
</script>

<span class={passing ? 'solid' : 'dashed'}>
	{#if passing}
		<sl-icon name="check-lg" aria-label="pass"></sl-icon>
	{:else}
		<sl-icon name="x-lg" aria-label="fail"></sl-icon>
	{/if}
	{@render children()}
</span>

<style>
	span {
		border-color: currentColor;
		border-width: 1px;
		border-radius: 3px;
		padding: 0.1em 0.3em 0.1em 0.1em;
		display: inline-flex;
		align-items: center;
		gap: 0.1em;
		text-transform: uppercase;
	}

	.solid {
		border-style: solid;
	}

	.dashed {
		border-style: dashed;
	}
</style>
