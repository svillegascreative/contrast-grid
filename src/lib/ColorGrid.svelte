<script>
	import { onMount } from 'svelte';
	import Swatch from './Swatch.svelte';

	let defaultColor = '#ffffff';
	let color1 = defaultColor;
	let color2 = defaultColor;
	let color3 = defaultColor;

	onMount(() => {
		let url = new URL(window.location.href);
		color1 = url.searchParams.get('color1') || defaultColor;
		color2 = url.searchParams.get('color2') || defaultColor;
		color3 = url.searchParams.get('color3') || defaultColor;
	});
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
			<td><Swatch fg={color1} bg={color2} /></td>
			<td><Swatch fg={color1} bg={color3} /></td>
		</tr>
		<tr>
			<th>Colour 2</th>
			<td><Swatch fg={color2} bg={color1} /></td>
			<td></td>
			<td><Swatch fg={color2} bg={color3} /></td>
		</tr>
		<tr>
			<th>Colour 3</th>
			<td><Swatch fg={color3} bg={color1} /></td>
			<td><Swatch fg={color3} bg={color2} /></td>
			<td></td>
		</tr>
	</tbody>
</table>
