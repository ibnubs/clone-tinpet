import * as type from '../actions/types';

const initialState = {
	token: localStorage.getItem('token'),
	error: null,
	isAuthenticate: false,
	loading: false,
	updateStatus: "initial"
}

const auth = (state = initialState, action) => {
	switch (action.type){
		default: 
			return{
			...state
			}
			case type.REGISTER_SUCCESS:
				return{
					...state,
					isAuthenticate: true,
				}
			case type.REGISTER_FAILED:
				return{
					...state,
					isAuthenticate: false,
				}
			case type.LOGIN_SUCCESS :
				return{
					...state,
					isAuthenticate: true
				}
			case type.LOGIN_FAILED:
				return{
					...state,
					isAuthenticate: false,
					token: localStorage.removeItem("token"),
				}

			case type.REQUEST_SUCCESS:
				return{
					...state,
					isAuthenticate: false,
					token: localStorage.removeItem("token"),
				}

			case type.REQUEST_FAILED:
				return{
					...state,
					isAuthenticate: false,
				}
			case "SIGNOUT" :
				localStorage.clear()
				return {
					...state,
					isAuthenticate: false,
		}

	}
}

export default auth;