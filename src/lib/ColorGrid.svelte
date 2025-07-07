<script>
	import { getContext } from 'svelte';
	import Swatch from './Swatch.svelte';

	const { settings, colors } = getContext('app');
</script>

<table>
	<tbody>
		<tr>
			<td></td>
			{#each colors as color}
				<th>{color.value}</th>
			{/each}
		</tr>

		{#each colors as color}
			<tr>
				<th>{color.value}</th>
				{#each colors as c}
					<td><Swatch fg={color.value} bg={c.value} /></td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		margin: 1rem 2rem;
	}

	table,
	th,
	td {
		border: none;
	}

	th,
	td {
		padding: 4px;
	}

	th {
		text-transform: uppercase;
	}
</style>
