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
                
    }
}