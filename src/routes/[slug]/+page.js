export const load = async({params})=>{
	switch (params.slug){
		case 'A':
			return { type: 'A', index: 0}
		case 'B':
			return { type: 'B', index: 1}
		case 'C':
		default:
			return {type: 'Other', index: 2}
	}
}