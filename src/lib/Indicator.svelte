<script>
	import { getContext } from 'svelte';
	import { passingContrast } from '../helpers';

	let { element, contrast, children } = $props();
	const { wcag } = getContext('app');
</script>

{#if wcag.elements[element]}
	<span>{passingContrast(element, wcag.level, contrast) ? '✔️' : '❌'}{@render children()}</span>
{/if}
