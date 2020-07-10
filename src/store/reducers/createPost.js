import {CREATEPOST_SUCCESS} from '../actions/types';

const initialState = {
	data: [],
}

const createPost = (state= initialState, action) => {
	const {type, payload} = action;
	switch(type) {
		case CREATEPOST_SUCCESS:
			return{
				...state,
				data: action.payload
			}
		default:
			return state
	}
}

export default createPost;