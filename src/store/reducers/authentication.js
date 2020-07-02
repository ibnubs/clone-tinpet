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
					userProfile: action.payload
				}
			case type.REGISTER_FAILED:
				return{
					...state,
					isAuthenticate: false,
					token: localStorage.removeItem('access_token')
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
      case "SIGNOUT" :
      	localStorage.clear()
      	return {
      		...state,
      		isAuthenticate: false,
      	}

	}
}

export default auth;