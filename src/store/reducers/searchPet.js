
const initialState = {
	token: localStorage.getItem('token'),
	loading: false,
	PetId : []
}

const searchPet = (state= initialState, action) => {
	const {type, payload} = action;
	switch(type) {
		case 'SEARCH_PET_SUCCESS':
			return{
				...state,
				PetId: payload, 
			}
		default:
			return state
	}
}

export default searchPet;
