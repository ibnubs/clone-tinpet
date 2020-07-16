// import * as type from '../actions/types';

const initialState = {
	token: localStorage.getItem('token'),
	error: null,
	loading: false,
	updateStatus: "initial",
	post: [],
	pets: [],
	likeCounter: (null),
}



const post = (state = initialState, action) => {

	const {type, payload} = action;
	switch (type){
		case 'GET_ALL_POST':
			return{
				...state,
				pets: payload
			};
		case 'LIKE':
			return{
				...state,
				likeCounter:payload
			}
		default:
			return {...state};
	}
}

export default post;