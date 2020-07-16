import {GET_PROFILE, EDIT_PROFILE_SUCCESS} from '../actions/types';
const initialState = {
	token: localStorage.getItem('token'),
	error: null,
	loading: false,
	profileDetail: [],
}

const profile = (state = initialState, action) => {
	const {type, payload} = action;
	switch (type){
		case 'GET_PROFILE':
			return{
				...state,
				profileDetail: payload,
			};
		default:
			return {...state};
	}
}

export default profile;


