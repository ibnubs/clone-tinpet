import * as type from '../actions/types';

const initialState = {
	token: localStorage.getItem('token'),
	error: null,
	isAuthenticate: false,
	loading: false,
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
					isAuthenticate: true,
					loading: true
				}
			case type.LOGIN_FAILED:
				return{
					...state,
					isAuthenticate: false,
<<<<<<< HEAD
					token: localStorage.removeItem("token"),
				}

				case type.UPDATE_UPLOADING:
			return{
				...state, updateStatus: "uploading",loading: true
			}

				case type.UPDATE_SUCCESS:
			return{
				...state, updateStatus: "done",loading: false
			}
			
				case type.UPDATE_FAILED:
			return{
				...state, updateStatus: "failed",loading: false
			}
=======
				}
>>>>>>> 90ea55ae6488641ad2b52036d0a9d08ea2580e08
			case "SIGNOUT" :
				localStorage.clear()
				return {
					...state,
					isAuthenticate: false,
		}

	}
}

export default auth;