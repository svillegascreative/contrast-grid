<script>
	import { getContext } from 'svelte';
	import { PASSING_RATIOS } from '../constants';

	let { element, contrast } = $props();
	let { settings } = getContext('app');

	const passing = $derived(contrast > PASSING_RATIOS[settings.level][element]);
</script>

{#if passing}
	<span>
		{#if element === 'text'}
			<sl-icon name="body-text" aria-label="body text"></sl-icon>
		{:else if element === 'largeText'}
			<sl-icon name="type" aria-label="large text"></sl-icon>
		{:else if element === 'graphic' && settings.version !== '2.0'}
			<sl-icon name="circle-square" aria-label="graphic elements"></sl-icon>
		{/if}
	</span>
{/if}

<style>
	span {
		font-size: 1.5rem;
	}
</style>
