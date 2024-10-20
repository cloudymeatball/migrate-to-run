<script lang=ts>
	export let data

  let emoji = {
    A: '😎',
    B: '😍'
  } as const

	let type
	$: type = data.type

	let mood
	$: mood = type ? emoji[type] : ''
	
</script>

<div>Type: {type} Mood: {mood}</div>