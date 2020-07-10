const initialState = {
	token: localStorage.getItem('token'),
	error: null,
	loading: false,
    profile: {}
}



const profile = (state = initialState, action) => {

	const {type, payload} = action;
	switch (type){
		case 'GET_PROFILE':
			return{
				...state,
				pets: payload
			};
		default:
			return {...state};
	}
}

export default profile;