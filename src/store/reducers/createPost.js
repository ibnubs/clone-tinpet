

const initialState = {
	token: localStorage.getItem('token'),
	loading: false,
	userData: [],
}

const createPost = (state= initialState, action) => {
	const {type, payload} = action;
	switch(type) {
		case 'CREATEPOST_SUCCESS':
			return{
				...state,
				data: payload,
			}
		default:
			return state
	}
}

export default createPost;