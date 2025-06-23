<script>
	import { getContext } from 'svelte';
	import Swatch from './Swatch.svelte';

	const { wcag, colors } = getContext('app');
</script>

<table>
	<tbody>
		<tr>
			<td></td>
			<th>Colour 1</th>
			<th>Colour 2</th>
			<th>Colour 3</th>
		</tr>
		<tr>
			<th>Colour 1</th>
			<td></td>
			<td><Swatch fg={colors.c1} bg={colors.c2} /></td>
			<td><Swatch fg={colors.c1} bg={colors.c3} /></td>
		</tr>
		<tr>
			<th>Colour 2</th>
			<td><Swatch fg={colors.c2} bg={colors.c1} /></td>
			<td></td>
			<td><Swatch fg={colors.c2} bg={colors.c3} /></td>
		</tr>
		<tr>
			<th>Colour 3</th>
			<td><Swatch fg={colors.c3} bg={colors.c1} /></td>
			<td><Swatch fg={colors.c3} bg={colors.c2} /></td>
			<td></td>
		</tr>
	</tbody>
</table>

<style>
	table,
	td {
		border: none;
	}

	th,
	td {
		padding: 4px;
	}
</style>
