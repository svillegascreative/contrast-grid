<script>
	import { getContext } from 'svelte';
	import Swatch from './Swatch.svelte';

	const { settings, colors } = getContext('app');
</script>

<table>
	<tbody>
		<tr>
			<td></td>
			<th>{colors.c1}</th>
			<th>{colors.c2}</th>
			<th>{colors.c3}</th>
		</tr>
		<tr>
			<th>{colors.c1}</th>
			<td><Swatch fg={colors.c1} bg={colors.c1} /></td>
			<td><Swatch fg={colors.c1} bg={colors.c2} /></td>
			<td><Swatch fg={colors.c1} bg={colors.c3} /></td>
		</tr>
		<tr>
			<th>{colors.c2}</th>
			<td><Swatch fg={colors.c2} bg={colors.c1} /></td>
			<td><Swatch fg={colors.c2} bg={colors.c2} /></td>
			<td><Swatch fg={colors.c2} bg={colors.c3} /></td>
		</tr>
		<tr>
			<th>{colors.c3}</th>
			<td><Swatch fg={colors.c3} bg={colors.c1} /></td>
			<td><Swatch fg={colors.c3} bg={colors.c2} /></td>
			<td><Swatch fg={colors.c3} bg={colors.c3} /></td>
		</tr>
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
