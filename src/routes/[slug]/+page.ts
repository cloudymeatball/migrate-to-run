export const load = async({params})=>{
	switch (params.slug){
		case 'A':
			return { type: 'A', index: 0} as const
		case 'B':
			return { type: 'B', index: 1} as const
		case 'C':
		default:
			return {type: undefined, index: 2} as const
	}
}