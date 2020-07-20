
const initialState = {
	token: localStorage.getItem('token'),
	loading: false,
	location: [],
	category: []
}

const searchPet = (state= initialState, action) => {
	const {type, payload} = action;
	switch(type) {
		case 'SEARCH_PET_SUCCESS':
			return{
				...state,
				location: payload,
				category: payload
			}
		default:
			return state
	}
}

export default searchPet;