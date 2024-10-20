<script lang=ts>
	export let data

  let emoji = {
    A: '😎',
    B: '😍'
  } as const

	let type
	$: type = data.type

	let index
	$: index = type ? emoji[type] : ''
	
</script>

<div>Type: {type} Index: {index}</div>