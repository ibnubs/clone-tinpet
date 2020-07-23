import * as type from '../actions/types';

const initialState = {
	token: localStorage.getItem('token'),
	data: []
}

const reqMeeting = (state = initialState, action) => {
	switch (action.type){
		default: 
			return{
			...state
      }
			case type.REQUEST_SUCCESS:
				return{
					...state,
					data: payload,
				}

			case type.REQUEST_FAILED:
				return{
					...state,

        }
                
    }
}