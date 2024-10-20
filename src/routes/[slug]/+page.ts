export const load = async({params})=>{
	switch (params.slug){
		case 'A':
			return { type: 'A' } as const
		case 'B':
			return { type: 'B' } as const
      /*
		case 'C':
		default:
			return {type: undefined, index: 2} as const
      */
	}
}