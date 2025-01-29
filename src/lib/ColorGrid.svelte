<script>
	import Swatch from './Swatch.svelte';
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
			<td><Swatch /></td>
			<td><Swatch /></td>
		</tr>
		<tr>
			<th>Colour 2</th>
			<td><Swatch /></td>
			<td></td>
			<td><Swatch /></td>
		</tr>
		<tr>
			<th>Colour 3</th>
			<td><Swatch /></td>
			<td><Swatch /></td>
			<td></td>
		</tr>
	</tbody>
</table>
