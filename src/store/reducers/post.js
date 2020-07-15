
const initialState = {
	token: localStorage.getItem('token'),
	error: null,
	loading: false,
	updateStatus: "initial",
	post: [],
	pets: [],
}



const post = (state = initialState, action) => {

	const {type, payload} = action;
	switch (type){
		case 'GET_ALL_POST':
			return{
				...state,
				pets: payload
			};
		default:
			return {...state};
	}
}

export default post;


