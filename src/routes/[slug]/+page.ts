export const load = async({params})=>{
	switch (params.slug){
		case 'A':
			return { type: 'A' } as const
		case 'B':
    default:
			return { type: 'B' } as const
	}
}