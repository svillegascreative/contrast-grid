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
					<td>
						{#if color.value !== c.value}
							<Swatch fg={color.value} bg={c.value} />
						{/if}
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		margin: 1rem 2rem;
		border: none;
		border-collapse: separate;
		border-spacing: 0.4rem;
	}

	th,
	td {
		border: 1px solid #ddd;
	}

	th,
	td {
		padding: 0;
	}

	th {
		text-transform: uppercase;
	}
</style>
