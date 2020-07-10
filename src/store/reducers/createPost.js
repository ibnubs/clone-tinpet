import {CREATEPOST_SUCCESS} from '../actions/types';

const initialState = {
	token: localStorage.getItem('token'),
	loading: false,
	data: [],
}

const createPost = (state= initialState, action) => {
	const {type} = action;
	switch(type) {
		case CREATEPOST_SUCCESS:
			return{
				...state,
				data: action
			}
		default:
			return state
	}
}

export default createPost;