<script>
	export let data

	let type
	$: type = data.type

	let index
	$: index = data.index
	
</script>

<div>Type: {type} Index: {index}</div>
<style>
	div {
		width: 100px;
		outline: 3px solid black;
		height: 60px;
	}
</style>